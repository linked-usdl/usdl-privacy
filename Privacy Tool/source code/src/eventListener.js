/**
 * Handles all event listeners that occur from the user interactions.
 */

// import modules
var App = require("./app");
var app = new App();

var ConflictsValidation = require("./conflictsValidation.js");
var conflictsValidation = new ConflictsValidation();

var PrepData = require("./prepData");
var prepData = new PrepData();

var PrepResults = require("./prepResults");
var prepResults = new PrepResults();

var SparqlStore = require("./sparqlStore.js");
var sparqlStore = new SparqlStore();

var UtilFiles = require("./utilFiles.js");
var utilFiles = new UtilFiles();

/**
 * Set up the event listeners.
 */
// nav stacked and collapsed events
app.getNavStacked().addEventListener("click", app.updateActiveNavStacked, false);
app.getNavCollapsed().addEventListener("click", app.updateActiveNavCollapsed, false);

// drop file container events
app.getDropFileContainer().addEventListener("dragover", utilFiles.handleDragOver, false);
app.getDropFileContainer().addEventListener("drop", utilFiles.handleSelectedFile, false);

// open file button events
app.getFileButton().addEventListener("change", utilFiles.handleSelectedFile, false);

// verify data button events
app.getVerifyDataButton().addEventListener("click", prepData.prepOntologiesData, false);

// sparql button events
app.getSparqlButton().addEventListener("click", sparqlStore.sparqlExecute, false);

// results button events
app.getResultsButton().addEventListener("click", prepResults.prepResultsData, false);

// checkbox enable/disable view for module results
app.getModuleResultsCheckbox().addEventListener("click", app.updateVisibilityModuleResults, false);

// switch checkbox events
app.getSwitchCheckbox().addEventListener("click", app.updateVisibilityResultsType, false);

// checkbox enable/disable view for ontology files content
app.getContentCheckbox().addEventListener("click", app.updateVisibilityContent, false);

// display ontology files content button events
app.getDisplayContentButton().addEventListener("click", utilFiles.displayOntologyContent, false);

// checkbox enable/disable view for conflicts
app.getConflictsCheckbox().addEventListener("click", app.updateVisibilityConflictsResults, false);

// validate button events
app.getValidateButton().addEventListener("click", conflictsValidation.prepConflictsValidation, false);