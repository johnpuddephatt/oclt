/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function () {
  // Get all the <h3> headings
  var headings = document.querySelectorAll('.section--home-faqs h3');

  Array.prototype.forEach.call(headings, function (heading) {
    // Give each <h3> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = '\n      <button aria-expanded="false">\n        ' + heading.textContent + '\n        <svg aria-hidden="true" focusable="false" viewBox="0 0 14 30">\n          <path fill="#53C5BD" d="M13.9 14.9c0 .3-.1.7-.3.9l-11 13.5c-.5.6-1.4.7-2.1.2-.6-.5-.7-1.4-.2-2.1l10.2-12.5L.3 2.4C-.2 1.8-.1.9.5.3 1.1-.2 2-.1 2.6.5l11 13.5c.2.3.3.6.3.9z"/>\n        </svg>\n      </button>\n    ';

    // Function to create a node list
    // of the content between this <h3> and the next
    var getContent = function getContent(elem) {
      var elems = [];
      while (elem.nextElementSibling && elem.nextElementSibling.tagName !== 'H3') {
        elems.push(elem.nextElementSibling);
        elem = elem.nextElementSibling;
      }

      // Delete the old versions of the content nodes
      elems.forEach(function (node) {
        node.parentNode.removeChild(node);
      });

      return elems;
    };

    // Assign the contents to be expanded/collapsed (array)
    var contents = getContent(heading);

    // Create a wrapper element for `contents` and hide it
    var wrapper = document.createElement('div');
    wrapper.hidden = true;

    // Add each element of `contents` to `wrapper`
    contents.forEach(function (node) {
      wrapper.appendChild(node);
    });

    // Add the wrapped content back into the DOM
    // after the heading
    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);

    // Assign the button
    var btn = heading.querySelector('button');

    btn.onclick = function () {
      // Cast the state as a boolean
      var expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      // Switch the state
      btn.setAttribute('aria-expanded', !expanded);
      // Switch the content's visibility
      wrapper.hidden = expanded;
    };
  });
})();

/***/ })
/******/ ]);