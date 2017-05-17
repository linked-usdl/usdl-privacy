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