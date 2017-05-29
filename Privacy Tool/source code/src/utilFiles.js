var App = require("./app");
var UtilSpinner = require("./utilSpinner.js");

/**
 * Represents a module that exposes utilities functions for managing files.
 */
var UtilFiles = function () {
	/**
	 * Represents the name of this class.
	 */
	var className = "UtilFiles";

	/**
	 * Represents an instance of the {App} class.
	 */
	var app = new App();

	/**
	 * Represents an instance of the {UtilSpinner} class.
	 */
	var utilSpinner = new UtilSpinner();


	/**
	 * Handles when a file is selected.
	 *
	 * @param {HTMLEvents} event The event.
	 */
	this.handleSelectedFile = function (event) {
		if (!event) {
			return;
		}

		event.stopPropagation();
		event.preventDefault();

		// files is a FileList of File objects
		var files, output = [];

		if (event.dataTransfer) {
			files = event.dataTransfer.files;
		} else {
			files = this.files;
		}

		// delete values to clear up some memory
		if (window.ontologies) {
			app.logMessage("");
			delete window.ontologies;

			// reset validation list, if any
			while (app.getSelectedOntologyValidationId().hasChildNodes()) {
				app.getSelectedOntologyValidationId().removeChild(app.getSelectedOntologyValidationId().firstChild);
			}

			// reset content list, if any
			while (app.getSelectedOntologyContentId().hasChildNodes()) {
				app.getSelectedOntologyContentId().removeChild(app.getSelectedOntologyContentId().firstChild);
			}

			app.getConflictsResultsContainer().classList.add("hidden-container");
			app.getContentListContainer().classList.add("hidden-container");
		}

		// store the file blobs list for later
		window.ontologies = [];

		for (var i = 0; i < files.length; i++) {
			window.ontologies.push({});

			window.ontologies[i].file = files[i];
		}

		for (var i = 0, f; f = files[i]; i++) {
			// create the drop down list
			var opt1 = document.createElement('option');
			opt1.value = i;
			opt1.innerHTML = escape(f.name);
			app.getSelectedOntologyValidationId().appendChild(opt1);

			var opt2 = document.createElement('option');
			opt2.value = i;
			opt2.innerHTML = escape(f.name);
			app.getSelectedOntologyContentId().appendChild(opt2);

			// setup the input file view list
			output.push("<p>", i + 1, ". ", "<strong>", escape(f.name), "</strong> (", f.type || "file/" + f.name.slice((f.name.lastIndexOf(".") - 1 >>> 0) + 2), ") - ",
				f.size, " bytes, last modified: ",
				f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a",
				"</p>");
		}

		if (output.length === 0) {
			app.getInputFileList().innerHTML = "No files provided..";

			return;
		}

		app.getInputFileList().innerHTML = output.join("");

		// update opacity and visibility from the next step (button)
		app.updateOpacityValue(true, app.getHTMLElementByElementId("stepOne"));
		app.updateOpacityValue(true, app.getHTMLElementByElementId("stepTwo"));

		app.updateVisibilityValue(true, app.getModuleResultsContainer());
		app.updateVisibilityValue(true, app.getConflictsContainer());
		app.updateVisibilityValue(true, app.getContentContainer());

		app.updateOpacityValue(false, app.getVerifyDataButton());
		app.updateOpacityValue(true, app.getSparqlButton());
		app.updateOpacityValue(true, app.getResultsButton());
	}

	/**
	 * Handles when a file is dragged over the input area.
	 *
	 * @param {HTMLEvents} event The event.
	 */
	this.handleDragOver = function (event) {
		if (!event) {
			return;
		}

		event.stopPropagation();
		event.preventDefault();

		// explicitly show this is a copy
		event.dataTransfer.dropEffect = "copy";

		// remove opacity from the next step (button)
		app.updateVisibilityValue(true, app.getModuleResultsContainer());

		app.updateOpacityValue(false, app.getVerifyDataButton());
		app.updateOpacityValue(true, app.getSparqlButton());
		app.updateOpacityValue(true, app.getResultsButton());
	}

	/**
	 * Reads the context of the given file.
	 *
	 * @param {String} filePath The path of the file to read from.
	 * @param {Function} callback The callback function to execure after onLoad.
	 * @param {String} callback.fileContent The file content that was read.
	 */
	this.readFile = function (filePath, callback) {
		var fileReader = new FileReader();

		fileReader.onload = function () {
			app.logMessage("File '" + filePath.name + "' was read successfully: " + className);

			callback(this.result);
		}

		fileReader.readAsText(filePath, "UTF-8");
	}

	/**
	 * Retrieve the selected ontology file index ID and display its content.
	 */
	this.displayOntologyContent = function () {
		utilSpinner.showSpinner(app.getInnerToolContainer());

		setTimeout(function () {
			app.logMessage("\Displaying ontology content..");

			// retrieve the ontology index ID to display its content
			var indexId = app.getSelectedOntologyContentId().options[app.getSelectedOntologyContentId().selectedIndex].value;

			displayContent(indexId);

			app.getContentListContainer().classList.remove("hidden-container");

			utilSpinner.hideSpinner();
		}, 0);
	}

	/**
	 * Display the file content for the specified ontology.
	 * 
	 * @param {index} index The ontology index identifier.
	 */
	function displayContent(index) {
		var output = [];

		var ontology = window.ontologies[index];

		output.push("<p class='textual-results-ontology-name'><strong>", escape(ontology.name), "</strong></p>");

		var formatContent = ontology.fileContent.replace(/</g, "&lt;");
		formatContent = formatContent.replace(/>/g, "&gt;");

		output.push("<pre class='content-list'>", formatContent, "</pre>");

		// setup the ontology file container with its content
		app.getFileContentList().innerHTML = output.join("");
	}
};

module.exports = UtilFiles;