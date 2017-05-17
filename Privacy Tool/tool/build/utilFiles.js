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
},{"./app":1,"./utilSpinner.js":4}],4:[function(require,module,exports){
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
