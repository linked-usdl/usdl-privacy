var App = require("./app.js");
var UtilSpinner = require("./utilSpinner.js");

/*
 * Represents a module that exposes the functionality for conflict validation between two ontologies.
 */
var ConflictsValidation = function () {
	/**
	 * Represents the name of this class.
	 */
	var className = "ConflictsValidation";

	/**
	 * Represents an instance of the {App} class.
	 */
	var app = new App();

	/**
	 * Represents an instance of the {UtilSpinner} class.
	 */
	var utilSpinner = new UtilSpinner();

	/**
	 * Prepares the data for conflict validation.
	 */
	this.prepConflictsValidation = function () {
		utilSpinner.showSpinner(app.getInnerToolContainer());

		setTimeout(function () {
			app.logMessage("\nProcessing ontologies conflict validation..");

			// retrieve the ontology index ID to validate against
			var indexId = app.getSelectedOntologyValidationId().options[app.getSelectedOntologyValidationId().selectedIndex].value;

			// check for conflicts
			conflictValidation(indexId);

			app.getConflictsResultsContainer().classList.remove("hidden-container");

			utilSpinner.hideSpinner();
		}, 0);
	}

	/**
	 * Checks whether the current type is an allowed action, or not.
	 * 
	 * @param {type} type The type to check for.
	 * @return {Boolean} Whether the current type is an allowed action, or not.
	 */
	function checkAllowedAction(type) {
		for (var i = 0; i < window.allowedActionsData.length; i++) {
			if (type === window.allowedActionsData[i]) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Checks whether the type is the opposite of the inner one that represents the not allowed action, or not.
	 * 
	 * @param {type} type The type to check for.
	 * @param {innerType} innerType The type to check against.
	 * @return {Boolean} Whether the current type is an allowed action and its opposite against it was found, or not.
	 */
	function checkNotAllowedAction(type, innerType) {
		type = "not" + type;

		for (var i = 1; i < window.notAllowedActionsData.length; i++) {
			if (innerType === window.notAllowedActionsData[i] && (type.toLowerCase() === innerType.toLowerCase())) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Validates the ontology for any conflicts among the entities relationships and the data.
	 * 
	 * @param {Integer} index The ontology index identifier.
	 */
	function conflictValidation(index) {
		var key = -1;
		var output = [];
		var conflictsFound = true;
		var ontology = window.ontologies[index];

		output.push("<p class='textual-results-ontology-name'><strong>", escape(ontology.name), "</strong></p>");

		for (var i = 0; i < ontology.individuals.length; i++) {
			var individual = ontology.individuals[i];

			for (var j = 0; j < individual.actions.length; j++) {
				var actions = individual.actions[j];

				// validate allowed actions against accessDenied action
				if (actions.type === window.notAllowedActionsData[0] && actions.data.length > 0) {
					for (var k = 0; k < actions.data.length; k++) {
						var action = actions.data[k];

						for (var l = 0; l < individual.actions.length; l++) {
							var innerAction = individual.actions[l];

							if (checkAllowedAction(innerAction.type)) {
								for (var m = 0; m < innerAction.data.length; m++) {
									if (action.value === innerAction.data[m].value) {
										conflictsFound = false;

										if (key !== i) {
											output.push("<p class='textual-results-individual-name'>", individual.name, " <i class='textual-results-type'>(", app.retrieveType(index, individual.name), ")</i></p>");
											output.push("<p class='textual-results-mid-message'>Conflicts found between</p>");

											key = i;
										}

										output.push("<p class='textual-results-action-type'>'", actions.type, "' & '", innerAction.type, "'</p>");
										output.push("<p class='textual-results-action-list'>", action.value, " <i class='textual-results-type'>(", app.retrieveType(index, action.value), ")</i></p>");
									}
								}
							}
						}
					}
				}

				// validate allowed actions against their corresponding opposite action
				if (checkAllowedAction(actions.type) && actions.data.length > 0) {
					for (var k = 0; k < actions.data.length; k++) {
						var action = actions.data[k];

						for (var l = 0; l < individual.actions.length; l++) {
							var innerAction = individual.actions[l];

							if (checkNotAllowedAction(actions.type, innerAction.type)) {
								for (var m = 0; m < innerAction.data.length; m++) {
									if (action.value === innerAction.data[m].value) {
										conflictsFound = false;

										if (key !== i) {
											output.push("<p class='textual-results-individual-name'>", individual.name, " <i class='textual-results-type'>(", app.retrieveType(index, individual.name), ")</i></p>");
											output.push("<p class='textual-results-mid-message'>Conflicts found between</p>");

											key = i;
										}

										output.push("<p class='textual-results-action-type'>'", actions.type, "' & '", innerAction.type, "'</p>");
										output.push("<p class='textual-results-action-list'>", action.value, " <i class='textual-results-type'>(", app.retrieveType(index, action.value), ")</i></p>");
									}
								}
							}
						}
					}
				}
			}
		}

		if (conflictsFound) {
			output.push("<p class='textual-results-action-type'>Not found any conflicts in regards with any actor and data relationships</p>");
		}

		// setup the conflicts container with the results
		app.getConflictsResultsList().innerHTML = output.join("");
	}
};

module.exports = ConflictsValidation;
