var App = require("./app.js");
var UtilSpinner = require("./utilSpinner.js");

/*
 * Represents a module that exposes the functionality of formating the results into a textual/graphical representation.
 */
var PrepResults = function () {
	/**
	 * Represents the name of this class.
	 */
	var className = "PrepResults";

	/**
	 * Represents an instance of the {App} class.
	 */
	var app = new App();

	/**
	 * Represents an instance of the {UtilSpinner} class.
	 */
	var utilSpinner = new UtilSpinner();

	/**
	 * Prepares the SPARQL results for textual/graphical representation.
	 */
	this.prepResultsData = function () {
		utilSpinner.showSpinner(app.getInnerToolContainer());

		setTimeout(function () {
			app.logMessage("\nProcessing results..");

			// setup the named individuals from the SPARQL results
			sortIndividualNameSetup();

			// setup the named individuals from the SPARQL results
			sortIndividualActionsSetup();

			// update opacity and visibility from the next step (button)
			app.updateOpacityValue(true, app.getHTMLElementByElementId("stepOne"));
			app.updateOpacityValue(true, app.getHTMLElementByElementId("stepTwo"));

			app.updateVisibilityValue(false, app.getModuleResultsContainer());
			app.updateVisibilityValue(false, app.getConflictsContainer());
			app.updateVisibilityValue(false, app.getContentContainer());

			app.updateOpacityValue(true, app.getResultsButton());

			// create the textual representation of the results
			textualRepresentationFormat();

			// create the graphical representation of the results
			graphicalRepresentationFormat();

			utilSpinner.hideSpinner();
		}, 0);
	}

	/**
	 * Checks for duplex values in the array.
	 * 
	 * @param {Integer} ontologyId The ontology ID to check for.
	 * @param {String} dataValue The data value to check for.
	 * @return {Boolean} Whether the data value exists in the array, or not.
	 */
	function checkArrayDuplexValue(ontologyId, dataValue) {
		for (var index = 0; index < window.ontologies[ontologyId].dataValue.length; index++) {
			if (window.ontologies[ontologyId].dataValue[index] === dataValue) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Creates the graphical representation of the results.
	 */
	function graphicalRepresentationFormat() {
		var output = [];

		// create the div elements for the graphical results
		for (var key = 0; key < window.ontologies.length; key++) {
			var ontology = window.ontologies[key];

			output.push("<p class='graphical-results-ontology-name'><strong>", escape(ontology.name), "</strong></p>");
			output.push("<div class='graphical-results-list' id='" + ontology.name + "'></div>");

			output.push("<div class='legend-container'><ul class='legend'> <li><span class='legend-actors'></span>Actors</li> <li><span class='legend-regular-data'></span>Regular Data</li> <li><span class='legend-sensitive-data'></span>Sensitive Data</li> <li><span class='legend-security-enchancement'></span>Security Enchancement</li> </ul> </div>");
			if (window.ontologies.length > 1 && key < (window.ontologies.length - 1)) {
				output.push("<hr class='graphical-results-line-space'>");
			}
		}

		// form the output element with the graphical div elements
		app.getGraphicalResultsList().innerHTML = output.join("");

		// create the graph network of each ontology
		for (var index = 0; index < window.ontologies.length; index++) {
			var ontology = window.ontologies[index];

			// create two arrays with the nodes and edges
			var nodes = [], edges = [];

			// setup nodes for data types
			for (var dataId = 0; dataId < ontology.dataValue.length; dataId++) {
				var typedAction = app.retrieveType(index, ontology.dataValue[dataId]);
				nodes.push({ id: (dataId + 1), label: ontology.dataValue[dataId], shape: "box", color: typedAction === "Regular Data" ? "#b8d60e" : typedAction === "Sensitive Data" ? "#f4c242" : "#4682b4", font: { align: 'right' } });
			}

			// setup nodes for individuals
			for (var individualId = 0; individualId < ontology.individuals.length; individualId++) {
				nodes.push({ id: (nodes.length + 1), label: ontology.individuals[individualId].name, font: { align: 'left' } });
			}

			// setup edges between individuals and data types
			for (var i = 0; i < ontology.individuals.length; i++) {
				var individual = ontology.individuals[i];

				for (var j = 0; j < individual.actions.length; j++) {
					var actions = individual.actions[j];

					if (actions.data.length !== 0) {
						var labelActionType = actions.type;

						for (var k = 0; k < actions.data.length; k++) {
							var connection = setupNodesEdgesConnection(nodes, labelActionType, actions.data[k], individual.name);
							if (connection !== "") {
								edges.push(connection);
							}
						}
					}
				}
			}

			// create network graph representation using the VIS library
			var container = document.getElementById(ontology.name);
			var options = {};
			var data = {
				nodes: nodes,
				edges: edges
			};

			new vis.Network(container, data, options);
		}
	}

	/**
	 * Removes any unnecessary data values from the ontology individuals array.
	 * 
	 * @param {Integer} ontologyId The ontology ID to check for.
	 */
	function removeDataValuesFromIndividualArray(ontologyId) {
		// loop over the individuals array
		for (var index = 0; index < window.ontologies[ontologyId].individuals.length; index++) {
			// loop over the data value array
			for (var dataIndex = 0; dataIndex < window.ontologies[ontologyId].dataValue.length; dataIndex++) {
				// if true then we found a data value in the individuals array
				if (window.ontologies[ontologyId].dataValue[dataIndex] === window.ontologies[ontologyId].individuals[index].name) {
					window.ontologies[ontologyId].individuals.splice(index, 1);

					if (index !== 0) {
						index--;
					}
				}
			}
		}
	}

	/**
	 * Setups the connection between the edge and the node.
	 * 
	 * @param {Array} nodes The nodes of the network graph.
	 * @param {String} actionType The action type.
	 * @param {String} actionData The action data (data typed information and security enchancement).
	 * @param {String} individualName The name of the individual actor.
	 * @return An object that represents the edge of the network graph.
	 */
	function setupNodesEdgesConnection(nodes, actionType, actionData, individualName) {
		var individualIndex = -1, dataIndex = -1;

		for (var count = 0; count < nodes.length; count++) {
			if (nodes[count].label === actionData.value) {
				dataIndex = nodes[count].id;
			} else if (nodes[count].label === individualName) {
				individualIndex = nodes[count].id;
			}
		}

		if (individualIndex === -1 || dataIndex === -1) {
			return "";
		}


		var actionLabel = actionType;
		if (actionData.security !== "") {
			actionLabel += " (" + actionData.security + ")";
		}

		return { from: individualIndex, to: dataIndex, label: actionLabel, color: actionData.security !== "" ? "#900020" : "#787878", font: { align: 'horizontal' } };
	}

	/**
	 * Checks for duplex values in the array.
	 * 
	 * @param {Integer} ontologyId The ontology ID to check for.
	 * @param {String} dataValue The data value to check for.
	 */
	function sortDataValueSetup(ontologyId, dataValue) {
		var duplex = checkArrayDuplexValue(ontologyId, dataValue);

		if (duplex) {
			return;
		}

		window.ontologies[ontologyId].dataValue.push(dataValue);
	}

	/**
	 * Setup the individual action entries.
	 */
	function sortIndividualActionsSetup() {
		// loop over the ontology files
		for (var i = 0; i < window.ontologies.length; i++) {
			// loop over all the SPARQL results of an ontology
			for (var j = 0; j < window.ontologies[i].sparqlResults.length; j++) {
				// loop over the SPARQL results for a specific action type
				for (var k = 0; k < window.ontologies[i].sparqlResults[j].length; k++) {
					var entry = window.ontologies[i].sparqlResults[j][k];

					// loop over the individuals to map them with the performed action types
					for (var l = 0; l < window.ontologies[i].individuals.length; l++) {
						if (entry.entity.value === window.ontologies[i].individuals[l].name) {
							var dataObject = {};
							dataObject.value = entry.data.value;
							dataObject.security = entry.securityEnchancement !== null ? entry.securityEnchancement.value : "";
							dataObject.retention = entry.retentionPeriod !== null ? entry.retentionPeriod.value : "";
							dataObject.intention = entry.useIntention !== null ? entry.useIntention.value : "";
							window.ontologies[i].individuals[l].actions[j].data.push(dataObject);

							// setup the data value entries
							sortDataValueSetup(i, entry.data.value)
						}
					}
				}
			}

			// clean individuals from any unnecessary data values
			removeDataValuesFromIndividualArray(i);

			// delete SPARQL results to clear up some memory
			delete window.ontologies[i].sparqlResults;

			app.logMessage((i + 1) + ". Results for '" + window.ontologies[i].name + "' have been processed successfully: " + className);
		}
	}

	/**
	 * Setup the individual entries.
	 */
	function sortIndividualNameSetup() {
		for (var m = 0; m < window.ontologies.length; m++) {
			// create an array for the data values that will be used later on
			window.ontologies[m].dataValue = [];

			// create an array for the individuals that will be used later on
			window.ontologies[m].individuals = [];
			window.ontologies[m].individuals.push({});

			var namedIndividualsList = window.ontologies[m].namedIndividuals[0];

			for (var n = 0; n < namedIndividualsList.length; n++) {
				window.ontologies[m].individuals[n] = [];

				// setup the name
				window.ontologies[m].individuals[n].name = namedIndividualsList[n].individual.value;

				window.ontologies[m].individuals[n].actions = [];

				// setup a list for the action types and data (if any)
				for (var o = 0; o < window.actionsData.length; o++) {
					window.ontologies[m].individuals[n].actions[o] = new Object();
					window.ontologies[m].individuals[n].actions[o].type = window.actionsData[o];
					window.ontologies[m].individuals[n].actions[o].data = [];
				}
			}

			// delete unnecessary ontology properties to clear up some memory
			delete window.ontologies[m].prefix;
			delete window.ontologies[m].prefixNaming;
			delete window.ontologies[m].query;
		}
	}

	/**
	 * Creates the textual representation of the results.
	 */
	function textualRepresentationFormat() {
		var output = [];

		for (var key = 0; key < window.ontologies.length; key++) {
			var ontology = window.ontologies[key];

			output.push("<p class='textual-results-ontology-name'><strong>", escape(ontology.name), "</strong></p>");

			for (var i = 0; i < ontology.individuals.length; i++) {
				var individual = ontology.individuals[i];

				output.push("<p class='textual-results-individual-name'>", individual.name, " <i class='textual-results-type'>(", app.retrieveType(key, individual.name), ")</i></p>");

				var actionsNotFound = true;

				for (var j = 0; j < individual.actions.length; j++) {
					var actions = individual.actions[j];

					if (actions.data.length !== 0) {
						actionsNotFound = false;

						output.push("<p class='textual-results-action-type'>", actions.type, "</p>");

						for (var k = 0; k < actions.data.length; k++) {
							output.push("<p class='textual-results-action-list'>", actions.data[k].value, " <i class='textual-results-type'>(", app.retrieveType(key, actions.data[k].value), ")</i>");

							if (actions.data[k].security !== "" || actions.data[k].retention !== "" || actions.data[k].intention !== "") {
								output.push("<br> <p class='textual-results-annotations'>[");
							}

							if (actions.data[k].security !== "") {
								output.push("<b>Security:</b> '", actions.data[k].security, "'");
							}
							if (actions.data[k].retention !== "") {
								if (actions.data[k].security !== "") {
									output.push(", ");
								}
								output.push("<b>Retention Period:</b> '", actions.data[k].retention, "'");
							}
							if (actions.data[k].intention !== "") {
								if (actions.data[k].security !== "" || actions.data[k].retention !== "") {
									output.push(", ");
								}
								output.push("<b>Use Intention:</b> '", actions.data[k].intention, "'");
							}

							if (actions.data[k].security !== "" || actions.data[k].retention !== "" || actions.data[k].intention !== "") {
								output.push("]</p>");
							}

							output.push("</p>");
						}
					}
				}

				if (actionsNotFound) {
					output.push("<p class='textual-results-action-type'>Not found any information in regards with entity-data relationship</p>");
				}
			}

			if (window.ontologies.length > 1 && key < (window.ontologies.length - 1)) {
				output.push("<hr class='textual-results-line-space'>");
			}
		}

		// setup the textual container with the textual results
		app.getTextualResultsList().innerHTML = output.join("");
	}
};

module.exports = PrepResults;
