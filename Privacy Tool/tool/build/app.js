(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Represents a module that exposes all HTML elements.
 */
var App = function () {
    /**
	 * Gets the HTML element.
	 * 
     * @param {String} elementId The HTML element ID.
	 * @return {HTMLElement} The HTML element.
	 */
    this.getHTMLElementByElementId = function (elementId) {
        return document.getElementById(elementId);
    }

    /**
	 * Gets the HTML element of the first ontology input.
	 * 
	 * @return {HTMLElement} The HTML element input.
	 */
    this.getFirstOntologyInput = function () {
        return document.getElementById("firstOntologyInput");
    }

    /**
	 * Gets the HTML element of the second ontology input.
	 * 
	 * @return {HTMLElement} The HTML element input.
	 */
    this.getSecondOntologyInput = function () {
        return document.getElementById("secondOntologyInput");
    }

    /**
	 * Gets the HTML drop down element for conflicts validation.
	 * 
	 * @return {HTMLElement} The HTML drop down element for conflicts validation.
	 */
    this.getSelectedOntologyValidationId = function () {
        return document.getElementById("selectedOntologyValidationId");
    }


    /**
	 * Gets the HTML drop down element for ontology files content.
	 * 
	 * @return {HTMLElement} The HTML drop down element for ontology files content.
	 */
    this.getSelectedOntologyContentId = function () {
        return document.getElementById("selectedOntologyContentId");
    }

    /**
     * Gets the ontology files content container element.
     * 
     * @return {HTMLElement} The ontology files content container element.
     */
    this.getContentContainer = function () {
        return document.getElementById("contentContainer");
    }

    /**
     * Gets the ontology files content list element.
     * 
     * @return {HTMLElement} The ontology files content list element.
     */
    this.getFileContentList = function () {
        return document.getElementById("fileContentList");
    }

    /**
     * Gets the conflicts container element.
     * 
     * @return {HTMLElement} The conflicts container element.
     */
    this.getConflictsContainer = function () {
        return document.getElementById("conflictsContainer");
    }

    /**
     * Gets the conflicts results list element.
     * 
     * @return {HTMLElement} The conflicts results list element.
     */
    this.getConflictsResultsList = function () {
        return document.getElementById("conflictsResultsList");
    }

    /**
	 * Gets the drop file container element.
	 * 
	 * @return {HTMLElement} The drop file container element.
	 */
    this.getDropFileContainer = function () {
        return document.getElementById("dropFileContainer");
    }

    /**
	 * Gets the file button element.
	 * 
	 * @return {HTMLButton} The file button element.
	 */
    this.getFileButton = function () {
        return document.getElementById("fileButton");
    }

    /**
	 * Gets the graphical results element.
	 * 
	 * @return {HTMLDivElement} The graphical results element.
	 */
    this.getGraphicalResultsList = function () {
        return document.getElementById("graphicalResultsList");
    }

    /**
	 * Gets the file list container.
	 * 
	 * @return {HTMLDivElement} The file list container.
	 */
    this.getInputFileList = function () {
        return document.getElementById("inputFileList");
    }

    /**
	 * Gets the conflicts checkbox.
	 * 
	 * @return {HTMLElement} The conflicts checkbox.
	 */
    this.getConflictsCheckbox = function () {
        return document.getElementById("conflictsCheckbox");
    }

    /**
	 * Gets the conflicts results container.
	 * 
	 * @return {HTMLElement} The conflicts results container.
	 */
    this.getConflictsResultsContainer = function () {
        return document.getElementById("conflictsResultsContainer");
    }

    /**
	 * Gets the ontology files content checkbox.
	 * 
	 * @return {HTMLElement} The ontology files content checkbox.
	 */
    this.getContentCheckbox = function () {
        return document.getElementById("contentCheckbox");
    }

    /**
	 * Gets the ontology files content list container.
	 * 
	 * @return {HTMLElement} The ontology files content list container.
	 */
    this.getContentListContainer = function () {
        return document.getElementById("contentListContainer");
    }

    /**
	 * Gets the module results checkbox.
	 * 
	 * @return {HTMLElement} The module results checkbox.
	 */
    this.getModuleResultsCheckbox = function () {
        return document.getElementById("moduleResultsCheckbox");
    }

    /**
	 * Gets the module results container.
	 * 
	 * @return {HTMLDivElement} The module results container.
	 */
    this.getModuleResultsContainer = function () {
        return document.getElementById("moduleResultsContainer");
    }

    /**
	 * Gets the nav collapsed element.
	 * 
	 * @return {HTMLElement} The nan collapsed element.
     */
    this.getNavCollapsed = function () {
        return document.getElementById("navCollapsed");
    }

    /**
	 * Gets the nav stacked element.
	 * 
	 * @return {HTMLElement} The nan stacled element.
     */
    this.getNavStacked = function () {
        return document.getElementById("navStacked");
    }

    /**
	 * Gets the results button element.
	 * 
	 * @return {HTMLButton} The results button element.
	 */
    this.getResultsButton = function () {
        return document.getElementById("resultsButton");
    }

    /**
	 * Gets the SPARQL button element.
	 * 
	 * @return {HTMLButton} The SPARQL button element.
	 */
    this.getSparqlButton = function () {
        return document.getElementById("sparqlButton");
    }

    /**
	 * Gets the tool console textarea element.
	 * 
	 * @return {HTMLTextArea} The tool console textarea element.
	 */
    function getToolConsoleTextarea() {
        return document.getElementById("toolConsoleTextarea");
    }

    /**
	 * Gets the inner tool container element.
	 * 
	 * @return {HTMLElement} The inner tool container element.
	 */
    this.getInnerToolContainer = function () {
        return document.getElementById("innerToolContainer");
    }

    /**
	 * Gets the switch checkbox element.
	 * 
	 * @return {HTMLElement} The switch checkbox element.
	 */
    this.getSwitchCheckbox = function () {
        return document.getElementById("switchCheckbox");
    }

    /**
	 * Gets the textual results list element.
	 * 
	 * @return {HTMLElement} The textual results list element.
	 */
    this.getTextualResultsList = function () {
        return document.getElementById("textualResultsList");
    }

    /**
	 * Gets the verify button element.
	 * 
	 * @return {HTMLButton} The verify data button element.
	 */
    this.getVerifyDataButton = function () {
        return document.getElementById("verifyDataButton");
    }

    /**
     * Gets the conflict validation button element.
     * 
     * @return {HTMLButton} The conflict validation button element.
     */
    this.getValidateButton = function () {
        return document.getElementById("validateButton");
    }

    /**
     * Gets the ontology files content button element.
     * 
     * @return {HTMLButton} The ontology files content button element.
     */
    this.getDisplayContentButton = function () {
        return document.getElementById("displayContentButton");
    }

    /**
	 * Logs the incoming text.
	 * 
	 * @param {String} text The text to log.
	 */
    this.logMessage = function (text) {
        if (text === "") {
            getToolConsoleTextarea().value = "";

            return;
        }

        getToolConsoleTextarea().value += text + "\n";
    }

	/**
	 * Retrieves the type of the given entity (individual).
	 * 
	 * @param {Integer} indexId The index ID.
	 * @param {String} entityName The entity name.
	 * @return {String} The type of the given entity.
	 */
    this.retrieveType = function (indexId, entityName) {
        var typedList = window.ontologies[indexId].typedResults[0];

        for (var count = 0; count < typedList.length; count++) {
            if (typedList[count].individual.value === entityName) {
                for (var kount = 0; kount < window.types.length; kount++) {
                    if (window.types[kount].replace(/ /g, "") === typedList[count].type.value) {
                        return window.types[kount];
                    }
                }
            }
        }

        return "Unsupported Type";
    }

    /**
     * Updates the active nav collapsed option.
     * 
     * @param {Event} event The event.
     */
    this.updateActiveNavCollapsed = function (event) {
        if (!event) {
            return;
        }

        var parent = document.getElementById("navCollapsed");

        // clicked element
        var target = event.target;

        while (target && target.parentNode !== parent) {
            // the clicked element is not a direct child
            target = target.parentNode;


            if (!target) {
                // element does not exist
                return;
            }
        }

        if (target.tagName === "LI") {
            updateActiveNav(target.id);
        }
    }

    /**
     * Updates the active nav stacked option.
     * 
     * @param {Event} event The event.
     */
    this.updateActiveNavStacked = function (event) {
        if (!event) {
            return;
        }

        var parent = document.getElementById("navStacked");

        // clicked element
        var target = event.target;

        while (target && target.parentNode !== parent) {
            // the clicked element is not a direct child
            target = target.parentNode;


            if (!target) {
                // element does not exist
                return;
            }
        }

        if (target.tagName === "LI") {
            updateActiveNav(target.id);
        }
    }

    /**
     * Updates the opacity of the HMTL element.
     * 
     * @param {Boolean} doApply Whether to apply opacity, or not.
     * @param {HMTLElement} target The HTML element to update opacity.
     */
    this.updateOpacityValue = function (doApply, target) {
        if (doApply) {
            target.classList.add("opacity-applied");
            target.disabled = true;

            return;
        }

        target.classList.remove("opacity-applied");
        target.disabled = false;
    }

    /**
     * Updates the visibility of the HMTL element.
     * 
     * @param {Boolean} doApply Whether to apply display: none, or not.
     * @param {HMTLElement} target The HTML element to update visibility.
     */
    this.updateVisibilityValue = function (doApply, target) {
        if (doApply) {
            target.classList.add("hidden-container");

            return;
        }

        target.classList.remove("hidden-container");
    }

    /**
     * Updates the visibility of the conflicts results element.
     * 
     * @param {Event} event The event.
     */
    this.updateVisibilityConflictsResults = function (event) {
        if (!event) {
            return;
        }

        if (document.getElementById(event.currentTarget.id).checked) {
            document.getElementById("innerConflictsContainer").classList.remove("hidden-container");

            return;
        }

        document.getElementById("innerConflictsContainer").classList.add("hidden-container");
    }

    /**
     * Updates the visibility of the ontology files content results element.
     * 
     * @param {Event} event The event.
     */
    this.updateVisibilityContent = function (event) {
        if (!event) {
            return;
        }

        if (document.getElementById(event.currentTarget.id).checked) {
            document.getElementById("innerContentContainer").classList.remove("hidden-container");

            return;
        }

        document.getElementById("innerContentContainer").classList.add("hidden-container");
    }

    /**
     * Updates the visibility of the module results element.
     * 
     * @param {Event} event The event.
     */
    this.updateVisibilityModuleResults = function (event) {
        if (!event) {
            return;
        }

        if (document.getElementById(event.currentTarget.id).checked) {
            document.getElementById("innerModuleResults").classList.remove("hidden-container");

            return;
        }

        document.getElementById("innerModuleResults").classList.add("hidden-container");
    }

    /**
     * Updates the visibility of the results based on the active checkbox option.
     * 
     * @param {Event} event The event.
     */
    this.updateVisibilityResultsType = function (event) {
        if (!event) {
            return;
        }

        if (document.getElementById(event.currentTarget.id).checked) {
            document.getElementById("textualContainer").classList.remove("hidden-container");
            document.getElementById("graphicalContainer").classList.add("hidden-container");

            return;
        }

        document.getElementById("textualContainer").classList.add("hidden-container");
        document.getElementById("graphicalContainer").classList.remove("hidden-container");
    }

    /**
     * Updates the active nav option.
     * 
     * @param {String} navId The nav option ID.
     */
    function updateActiveNav(navId) {
        var navOptionsCollapsed = [
            "dashboardButtonCollapsed",
            "toolButtonCollapsed",
            "aboutButtonCollapsed",
            "moreButtonCollapsed"
        ];

        var navOptionsStacked = [
            "dashboardButtonStacked",
            "toolButtonStacked",
            "aboutButtonStacked",
            "moreButtonStacked"
        ];

        for (var i = 0; i < navOptionsStacked.length; i++) {
            if (navOptionsStacked[i] === navId || navOptionsCollapsed[i] == navId) {
                document.getElementById(navOptionsStacked[i]).className += " active";
                document.getElementById(navOptionsCollapsed[i]).className += " active";
            } else {
                document.getElementById(navOptionsStacked[i]).className = "sidenav-button";
                document.getElementById(navOptionsCollapsed[i]).className = "sidenav-button";
            }

        }
    }
}

module.exports = App;

},{}]},{},[1]);
