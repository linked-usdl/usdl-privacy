var rdfstore = require("rdfstore");

var App = require("./app.js");
var UtilSpinner = require("./utilSpinner.js");

/*
 * Represents a module that xposes the SPARQL functions to execure queries.
 */
var SparqlStore = function () {
	/**
	 * Represents the name of this class.
	 */
	var className = "SparqlStore";

	/**
	 * Represents an instance of the {App} class.
	 */
	var app = new App();

	/**
	 * Represents an instance of the {UtilSpinner} class.
	 */
	var utilSpinner = new UtilSpinner();

	/**
	 * Represents a position ID counter that will be used in order to identify async the ontologies.
	 */
	var posIdAsync = 0;

	/**
	 * Represents a query ID counter that will be used in order to loop async over the queries.
	 */
	var queryIdAsync = 0;

	/**
	 * Sets up and executes the SPARQL queries.
	 */
	this.sparqlExecute = function () {
		utilSpinner.showSpinner(app.getInnerToolContainer());

		setTimeout(function () {
			// set up the SPARQL queries
			for (var i = 0; i < window.ontologies.length; i++) {
				formatQuery(i);
			}

			// reset variable values (able to execute multiple times)
			if (posIdAsync !== 0 || queryIdAsync !== 0) {
				posIdAsync = 0;
				queryIdAsync = 0;
			}

			loopOverOntologies();

			// update opacity and visibility from the next step (button)
			app.updateOpacityValue(true, app.getHTMLElementByElementId("stepOne"));
			app.updateOpacityValue(false, app.getHTMLElementByElementId("stepTwo"));

			app.updateOpacityValue(true, app.getSparqlButton());
			app.updateOpacityValue(true, app.getVerifyDataButton());
			app.updateOpacityValue(false, app.getResultsButton());
		}, 0);
	}

	/**
	 * Format the queries that will be executed on the ontologies.
	 * 
	 * @param {Integer} posId The current position in the ontologies array.
	 */
	function formatQuery(posId) {
		var prefix = ontologies[posId].prefix;
		var prefixNaming = ontologies[posId].prefixNaming;

		// create an array in the ontologies object variable for the formatted queries
		window.ontologies[posId].query = [];
		window.ontologies[posId].query.push({});

		// set up the store for the SPARQL results
		window.ontologies[posId].sparqlResults = [];
		window.ontologies[posId].sparqlResults.push({});

		// set up the store for the SPARQL typed results
		window.ontologies[posId].typedResults = [];
		window.ontologies[posId].typedResults.push({});

		// create an array for the sorted results that will be used later on
		window.ontologies[posId].namedIndividuals = [];
		window.ontologies[posId].namedIndividuals.push({});

		var additionalPrefix = prefix + "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX owl: <http://www.w3.org/2002/07/owl#>";

		for (var actionId = 0; actionId < window.actionsData.length; actionId++) {
			var action = prefixNaming + window.actionsData[actionId];
			var securityEnchancement = prefixNaming + "securityEnchancement";
			var useIntention = prefixNaming + "useIntention";
			var retentionPeriod = prefixNaming + "retentionPeriod";

			var formattedQuery = additionalPrefix + "SELECT ?entity ?data ?retentionPeriod ?useIntention ?securityEnchancement WHERE { ?entity " + action.toString() + " ?data . OPTIONAL { ?annotation owl:annotatedSource ?entity ; owl:annotatedProperty " + action.toString() + " ; owl:annotatedTarget ?data ; " + retentionPeriod.toString() + " ?retentionPeriod . } OPTIONAL { ?annotation owl:annotatedSource ?entity ; owl:annotatedProperty " + action.toString() + " ; owl:annotatedTarget ?data ; " + useIntention.toString() + " ?useIntention . } OPTIONAL { ?annotation owl:annotatedSource ?entity ; owl:annotatedProperty " + action.toString() + " ; owl:annotatedTarget ?data ; " + securityEnchancement.toString() + " ?securityEnchancement . } }";

			window.ontologies[posId].query[actionId] = formattedQuery;
		}

		// add another query to retrieve the named individuals only (ease the phase of analyzing the results later on)
		var namedIndividualsQuery = additionalPrefix + "SELECT ?individual WHERE { ?individual rdf:type owl:NamedIndividual . } GROUP BY ?individual ORDER BY asc(?individual)";

		window.ontologies[posId].query[window.ontologies[posId].query.length] = namedIndividualsQuery;

		// add another query to retrieve the types of the individuals
		var namedIndividualsQueryTyped = additionalPrefix + "SELECT ?individual ?type WHERE { ?individual rdf:type ?type FILTER ( !regex(str(?type),'owl','i') ) } ORDER BY asc(?individual)";

		window.ontologies[posId].query[window.ontologies[posId].query.length] = namedIndividualsQueryTyped;

		app.logMessage("Queries (SPARQL) were set up successfully: " + className);
	}

	/**
	 * Performs a loop over the ontologies for SPARQL.
	 */
	function loopOverOntologies() {
		if (posIdAsync < window.ontologies.length) {
			queryIdAsync = 0;

			app.logMessage((posIdAsync + 1).toString() + ". Executing SPARQL queries: " + className);

			loolOverQueriesAsync();
		} else {
			utilSpinner.hideSpinner();
		}
	}

	/**
	 * Performs the SPARQL queries onto the ontologies.
	 */
	function loolOverQueriesAsync() {
		rdfstore.create(function (err, store) {
			store.load("text/turtle", window.ontologies[posIdAsync].fileContent.toString(), function (s, d) {
				store.execute(window.ontologies[posIdAsync].query[queryIdAsync], function (success, results) {
					if (queryIdAsync === window.ontologies[posIdAsync].query.length - 1) {
						window.ontologies[posIdAsync].typedResults[0] = loopOverTypedResults(results);
					} else if (queryIdAsync === window.ontologies[posIdAsync].query.length - 2) {
						window.ontologies[posIdAsync].namedIndividuals[0] = loopOverResults(results, true);
					} else {
						window.ontologies[posIdAsync].sparqlResults[queryIdAsync] = loopOverResults(results, false);
					}

					queryIdAsync++;

					if (queryIdAsync < window.ontologies[posIdAsync].query.length) {
						loolOverQueriesAsync();
					} else {
						app.logMessage("SPARQL for '" + window.ontologies[posIdAsync].name + "' was executed successfully: " + className);

						posIdAsync++;

						loopOverOntologies();
					}
				});
			});
			if (err) {
				app.logMessage(className + " - Caught Error. More info:" + err);
			}
		});
	}

	/**
	 * Loop over the SPARQL typed results in order to simplify them (extract the individual and type values).
	 * 
	 * @param {Array} sparqlTypedResults The SPARQL typed results array.
	 * @return {Array} The simplified SPARQL typed results array.
	 */
	function loopOverTypedResults(sparqlTypedResults) {
		for (var typedIndex = 0; typedIndex < sparqlTypedResults.length; typedIndex++) {
			sparqlTypedResults[typedIndex].individual.value = sparqlTypedResults[typedIndex].individual.value.split("#")[1];
			sparqlTypedResults[typedIndex].type.value = sparqlTypedResults[typedIndex].type.value.split("#")[1] ? sparqlTypedResults[typedIndex].type.value.split("#")[1] : sparqlTypedResults[typedIndex].type.value;
		}

		return sparqlTypedResults;
	}

	/**
	 * Loop over the SPARQL results in order to simplify them (extract the individual values).
	 * 
	 * @param {Array} sparqlResults The SPARQL results array.
	 * @param {Boolean} individuals Whether the results represent the named individuals, or not.
	 * @return {Array} The simplified SPARQL results array.
	 */
	function loopOverResults(sparqlResults, individuals) {
		if (individuals) {
			for (var i = 0; i < sparqlResults.length; i++) {
				sparqlResults[i].individual.value = sparqlResults[i].individual.value.split("#")[1];
			}

			return sparqlResults;
		}

		for (var i = 0; i < sparqlResults.length; i++) {
			sparqlResults[i].entity.value = sparqlResults[i].entity.value.split("#")[1];
			sparqlResults[i].data.value = sparqlResults[i].data.value.split("#")[1];
		}

		return sparqlResults;
	}
};

module.exports = SparqlStore;
