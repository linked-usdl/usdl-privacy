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

},{}],2:[function(require,module,exports){
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
; (function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i / lines * 100
      , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start + 0.01) + '%{opacity:1}' +
        (start + trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i] + prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1 / 4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, { className: o.className })

      css(el, {
        position: o.position
        , width: 0
        , zIndex: o.zIndex
        , left: o.left
        , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

          ; (function anim() {
            i++
            for (var j = 0; j < o.lines; j++) {
              alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

              self.opacity(el, j * o.direction + start, alpha, o)
            }
            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
          })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
    , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute'
          , width: o.scale * (o.length + o.width) + 'px'
          , height: o.scale * o.width + 'px'
          , background: color
          , boxShadow: shadow
          , transformOrigin: 'left'
          , transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.scale * o.radius + 'px' + ',0)'
          , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
          , top: 1 + ~(o.scale * o.width / 2) + 'px'
          , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
          , opacity: o.opacity
          , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), { top: '2px' }))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
            , coordorigin: -r + ' ' + -r
          })
          , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), { position: 'absolute', top: margin, left: margin })
        , i

      function seg(i, dx, filter) {
        ins(
          g
          , ins(
            css(grp(), { rotation: 360 / o.lines * i + 'deg', left: ~~dx })
            , ins(
              css(
                vml('roundrect', { arcsize: o.corners })
                , {
                  width: r
                  , height: o.scale * o.width
                  , left: o.scale * o.radius
                  , top: -o.scale * o.width >> 1
                  , filter: filter
                }
              )
              , vml('fill', { color: getColor(o.color, i), opacity: o.opacity })
              , vml('stroke', { opacity: 0 }) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', { type: 'text/css' })
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), { behavior: 'url(#default#VML)' })

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));
},{}],3:[function(require,module,exports){
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

},{"./app.js":1,"./utilSpinner.js":4}],4:[function(require,module,exports){
var Spinner = require("./external/spin.js");

/**
 * Represents a module that exposes utilities functions for spinner.
 */
var UtilSpinner = function () {
	/**
	 * Represents the options that will form the spinner.
	 */
	var opts = {
		lines: 12,
		length: 20,
		width: 10,
		radius: 30,
		corners: 1,
		rotate: 0,
		direction: 1,
		color: "#000",
		speed: 1,
		trail: 60,
		shadow: false,
		hwaccel: false,
		className: "spinner",
		zIndex: 2e9,
		top: "50%",
		left: "50%"
	};

	/**
	 * Represents an instance of the {Spinner} class.
	 */
	var spinner = new Spinner(opts);

	/**
	 * Shows the spinner on the targeted HTML element.
	 * 
	 * @param {HMTLElement} target The target HTML element to apply the spinner at
	 */
	this.showSpinner = function (target) {
		spinner.spin(target);
	}

	/**
	 * Hides the spinner.
	 */
	this.hideSpinner = function () {
		spinner.stop();
	}
};

module.exports = UtilSpinner;
},{"./external/spin.js":2}]},{},[3]);
