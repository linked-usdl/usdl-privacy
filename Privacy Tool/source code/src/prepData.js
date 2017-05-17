var App = require("./app.js");
var UtilFiles = require("./utilFiles.js");
var UtilSpinner = require("./utilSpinner.js");

/*
 * Represents a module that exposes the functionality of reading the data from the given files.
 */
var PrepData = function () {
	/**
	 * Represents the name of this class.
	 */
	var className = "PrepData";

	/**
	 * Represents an instance of the {App} class.
	 */
	var app = new App();

	/**
	 * Represents an instance of the {UtilFiles} class.
	 */
	var utilFiles = new UtilFiles();

	/**
	 * Represents an instance of the {UtilSpinner} class.
	 */
	var utilSpinner = new UtilSpinner();

	/**
	 * Represents a counter that will be used in order to loop async over the ontology files.
	 */
	var countAsync = 0;

	/**
	 * Prepares the ontologies data by reading the files and defines each one base prefix.
	 */
	this.prepOntologiesData = function () {
		utilSpinner.showSpinner(app.getInnerToolContainer());

		// set up the actions that can be perfomed over the data
		window.actionsData = [
			"accessDenied",
			"analyzes",
			"distributes",
			"manages",
			"modifies",
			"notAnalyzes",
			"notDistributes",
			"notManages",
			"notModifies",
			"notProcesses",
			"notProvides",
			"notStorages",
			"processes",
			"provides",
			"storages"
		];

		// define the allowed data actions
		window.allowedActionsData = [
			"analyzes",
			"distributes",
			"manages",
			"modifies",
			"processes",
			"provides",
			"storages"
		];

		// define the NOT allowed data actions
		window.notAllowedActionsData = [
			"accessDenied",
			"notAnalyzes",
			"notDistributes",
			"notManages",
			"notModifies",
			"notProcesses",
			"notProvides",
			"notStorages"
		];

		// set up the types that will be assigned on the entity individuals
		window.types = [
			"Business Role",
			"Authority Regulator",
			"Owners",
			"Person Of Interest",
			"Authorised Person",
			"System Users",
			"Third Party Users",
			"Third Party End Users",
			"Third Party Providers",
			"Data",
			"Regular Data",
			"Sensitive Data"
		];

		setTimeout(function () {
			// reset variable value (able to execute multiple times)
			if (countAsync !== 0) {
				countAsync = 0;
			}

			loopOverDataAsync();

			// update opacity and visibility from the next step (button)
			app.updateVisibilityValue(true, app.getModuleResultsContainer());
			app.updateVisibilityValue(true, app.getConflictsContainer());
			app.updateVisibilityValue(true, app.getContentContainer());

			app.updateOpacityValue(false, app.getHTMLElementByElementId("stepOne"));
			app.updateOpacityValue(true, app.getHTMLElementByElementId("stepTwo"));

			app.updateOpacityValue(false, app.getSparqlButton());
			app.updateOpacityValue(true, app.getVerifyDataButton());
		}, 0);
	}

	/**
	 * Gets the naming of the prefix, if any.
	 * 
	 * @param {String} prefix The prefix to extract from.
	 * @return {String} The prefix naming.
	 */
	function extractPrefixNaming(prefix) {
		var parts = prefix.split(" ");

		return parts[1];
	}

	/**
	 * Format the queries that will be executed on the ontologies.
	 * 
	 * @param {String} fileContent The file content of the ontology.
	 * @return {String} The formatted prefix.
	 */
	function formatPrefix(fileContent) {
		var lines = fileContent.split("\n");

		var formattedPrefix = lines[0].substring(1, lines[0].length - 2);

		return formattedPrefix.toString();
	}

	/**
	 * Loops over the input data. Works as an asynchronous function in order to achieve async data reading.
	 */
	function loopOverDataAsync() {
		utilFiles.readFile(window.ontologies[countAsync].file, function (fileContent) {
			window.ontologies[countAsync].fileContent = fileContent.toString();

			var prefix = formatPrefix(fileContent.toString());

			window.ontologies[countAsync].prefix = prefix;

			window.ontologies[countAsync].prefixNaming = extractPrefixNaming(prefix);

			countAsync++;

			if (countAsync < window.ontologies.length) {
				loopOverDataAsync();
			} else {
				// clear unused file blobs data
				for (var k = 0; k < window.ontologies.length; k++) {
					window.ontologies[k].name = window.ontologies[k].file.name;

					// setup the files entries
					delete window.ontologies[k].file;
				}

				app.logMessage("Required data for SPARQL were set up successfully: " + className + "\n");

				utilSpinner.hideSpinner();
			}
		});
	}
};

module.exports = PrepData;
