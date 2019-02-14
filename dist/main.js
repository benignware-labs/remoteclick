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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/unique-selector/lib/getAttributes.js":
/*!************************************************************!*\
  !*** ../node_modules/unique-selector/lib/getAttributes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAttributes = getAttributes;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * Returns the Attribute selectors of the element\n * @param  { DOM Element } element\n * @param  { Array } array of attributes to ignore\n * @return { Array }\n */\nfunction getAttributes(el) {\n  var attributesToIgnore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id', 'class', 'length'];\n  var attributes = el.attributes;\n\n  var attrs = [].concat(_toConsumableArray(attributes));\n\n  return attrs.reduce(function (sum, next) {\n    if (!(attributesToIgnore.indexOf(next.nodeName) > -1)) {\n      sum.push('[' + next.nodeName + '=\"' + next.value + '\"]');\n    }\n    return sum;\n  }, []);\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getAttributes.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getClasses.js":
/*!*********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getClasses.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClasses = getClasses;\nexports.getClassSelectors = getClassSelectors;\n/**\n * Get class names for an element\n *\n * @pararm { Element } el\n * @return { Array }\n */\nfunction getClasses(el) {\n  if (!el.hasAttribute('class')) {\n    return [];\n  }\n\n  try {\n    var classList = Array.prototype.slice.call(el.classList);\n\n    // return only the valid CSS selectors based on RegEx\n    return classList.filter(function (item) {\n      return !/^[a-z_-][a-z\\d_-]*$/i.test(item) ? null : item;\n    });\n  } catch (e) {\n    var className = el.getAttribute('class');\n\n    // remove duplicate and leading/trailing whitespaces\n    className = className.trim().replace(/\\s+/g, ' ');\n\n    // split into separate classnames\n    return className.split(' ');\n  }\n}\n\n/**\n * Returns the Class selectors of the element\n * @param  { Object } element\n * @return { Array }\n */\nfunction getClassSelectors(el) {\n  var classList = getClasses(el).filter(Boolean);\n  return classList.map(function (cl) {\n    return '.' + cl;\n  });\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getClasses.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getCombinations.js":
/*!**************************************************************!*\
  !*** ../node_modules/unique-selector/lib/getCombinations.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCombinations = getCombinations;\n/**\n * Recursively combinate items.\n * @param  { Array } result\n * @param  { Array } items\n * @param  { Array } data\n * @param  { Number } start\n * @param  { Number } end\n * @param  { Number } index\n * @param  { Number } k\n */\nfunction kCombinations(result, items, data, start, end, index, k) {\n    if (index === k) {\n        result.push(data.slice(0, index).join(''));\n        return;\n    }\n\n    for (var i = start; i <= end && end - i + 1 >= k - index; ++i) {\n        data[index] = items[i];\n        kCombinations(result, items, data, i + 1, end, index + 1, k);\n    }\n}\n\n/**\n * Returns all the possible selector combinations\n * @param  { Array } items\n * @param  { Number } k\n * @return { Array }\n */\nfunction getCombinations(items, k) {\n    var result = [],\n        n = items.length,\n        data = [];\n\n    for (var l = 1; l <= k; ++l) {\n        kCombinations(result, items, data, 0, n - 1, 0, l);\n    }\n\n    return result;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getCombinations.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getID.js":
/*!****************************************************!*\
  !*** ../node_modules/unique-selector/lib/getID.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getID = getID;\n/**\n * Returns the Tag of the element\n * @param  { Object } element\n * @return { String }\n */\nfunction getID(el) {\n  var id = el.getAttribute('id');\n\n  if (id !== null && id !== '') {\n    // if the ID starts with a number selecting with a hash will cause a DOMException\n    return id.match(/^\\d/) ? '[id=\"' + id + '\"]' : '#' + id;\n  }\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getID.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getNthChild.js":
/*!**********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getNthChild.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getNthChild = getNthChild;\n\nvar _isElement = __webpack_require__(/*! ./isElement */ \"../node_modules/unique-selector/lib/isElement.js\");\n\n/**\n * Returns the selectors based on the position of the element relative to its siblings\n * @param  { Object } element\n * @return { Array }\n */\nfunction getNthChild(element) {\n  var counter = 0;\n  var k = void 0;\n  var sibling = void 0;\n  var parentNode = element.parentNode;\n\n\n  if (Boolean(parentNode)) {\n    var childNodes = parentNode.childNodes;\n\n    var len = childNodes.length;\n    for (k = 0; k < len; k++) {\n      sibling = childNodes[k];\n      if ((0, _isElement.isElement)(sibling)) {\n        counter++;\n        if (sibling === element) {\n          return ':nth-child(' + counter + ')';\n        }\n      }\n    }\n  }\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getNthChild.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getParents.js":
/*!*********************************************************!*\
  !*** ../node_modules/unique-selector/lib/getParents.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getParents = getParents;\n\nvar _isElement = __webpack_require__(/*! ./isElement */ \"../node_modules/unique-selector/lib/isElement.js\");\n\n/**\n * Returns all the element and all of its parents\n * @param { DOM Element }\n * @return { Array of DOM elements }\n */\nfunction getParents(el) {\n  var parents = [];\n  var currentElement = el;\n  while ((0, _isElement.isElement)(currentElement)) {\n    parents.push(currentElement);\n    currentElement = currentElement.parentNode;\n  }\n\n  return parents;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getParents.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/getTag.js":
/*!*****************************************************!*\
  !*** ../node_modules/unique-selector/lib/getTag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTag = getTag;\n/**\n * Returns the Tag of the element\n * @param  { Object } element\n * @return { String }\n */\nfunction getTag(el) {\n  return el.tagName.toLowerCase().replace(/:/g, '\\\\:');\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/getTag.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/index.js":
/*!****************************************************!*\
  !*** ../node_modules/unique-selector/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = unique;\n\nvar _getID = __webpack_require__(/*! ./getID */ \"../node_modules/unique-selector/lib/getID.js\");\n\nvar _getClasses = __webpack_require__(/*! ./getClasses */ \"../node_modules/unique-selector/lib/getClasses.js\");\n\nvar _getCombinations = __webpack_require__(/*! ./getCombinations */ \"../node_modules/unique-selector/lib/getCombinations.js\");\n\nvar _getAttributes = __webpack_require__(/*! ./getAttributes */ \"../node_modules/unique-selector/lib/getAttributes.js\");\n\nvar _getNthChild = __webpack_require__(/*! ./getNthChild */ \"../node_modules/unique-selector/lib/getNthChild.js\");\n\nvar _getTag = __webpack_require__(/*! ./getTag */ \"../node_modules/unique-selector/lib/getTag.js\");\n\nvar _isUnique = __webpack_require__(/*! ./isUnique */ \"../node_modules/unique-selector/lib/isUnique.js\");\n\nvar _getParents = __webpack_require__(/*! ./getParents */ \"../node_modules/unique-selector/lib/getParents.js\");\n\n/**\n * Returns all the selectors of the elmenet\n * @param  { Object } element\n * @return { Object }\n */\n/**\n * Expose `unique`\n */\n\nfunction getAllSelectors(el, selectors, attributesToIgnore) {\n  var funcs = {\n    'Tag': _getTag.getTag,\n    'NthChild': _getNthChild.getNthChild,\n    'Attributes': function Attributes(elem) {\n      return (0, _getAttributes.getAttributes)(elem, attributesToIgnore);\n    },\n    'Class': _getClasses.getClassSelectors,\n    'ID': _getID.getID\n  };\n\n  return selectors.reduce(function (res, next) {\n    res[next] = funcs[next](el);\n    return res;\n  }, {});\n}\n\n/**\n * Tests uniqueNess of the element inside its parent\n * @param  { Object } element\n * @param { String } Selectors\n * @return { Boolean }\n */\nfunction testUniqueness(element, selector) {\n  var parentNode = element.parentNode;\n\n  var elements = parentNode.querySelectorAll(selector);\n  return elements.length === 1 && elements[0] === element;\n}\n\n/**\n * Tests all selectors for uniqueness and returns the first unique selector.\n * @param  { Object } element\n * @param  { Array } selectors\n * @return { String }\n */\nfunction getFirstUnique(element, selectors) {\n  return selectors.find(testUniqueness.bind(null, element));\n}\n\n/**\n * Checks all the possible selectors of an element to find one unique and return it\n * @param  { Object } element\n * @param  { Array } items\n * @param  { String } tag\n * @return { String }\n */\nfunction getUniqueCombination(element, items, tag) {\n  var combinations = (0, _getCombinations.getCombinations)(items, 3),\n      firstUnique = getFirstUnique(element, combinations);\n\n  if (Boolean(firstUnique)) {\n    return firstUnique;\n  }\n\n  if (Boolean(tag)) {\n    combinations = combinations.map(function (combination) {\n      return tag + combination;\n    });\n    firstUnique = getFirstUnique(element, combinations);\n\n    if (Boolean(firstUnique)) {\n      return firstUnique;\n    }\n  }\n\n  return null;\n}\n\n/**\n * Returns a uniqueSelector based on the passed options\n * @param  { DOM } element\n * @param  { Array } options\n * @return { String }\n */\nfunction getUniqueSelector(element, selectorTypes, attributesToIgnore, excludeRegex) {\n  var foundSelector = void 0;\n\n  var elementSelectors = getAllSelectors(element, selectorTypes, attributesToIgnore);\n\n  if (excludeRegex && excludeRegex instanceof RegExp) {\n    elementSelectors.ID = excludeRegex.test(elementSelectors.ID) ? null : elementSelectors.ID;\n    elementSelectors.Class = elementSelectors.Class.filter(function (className) {\n      return !excludeRegex.test(className);\n    });\n  }\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = selectorTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var selectorType = _step.value;\n      var ID = elementSelectors.ID,\n          Tag = elementSelectors.Tag,\n          Classes = elementSelectors.Class,\n          Attributes = elementSelectors.Attributes,\n          NthChild = elementSelectors.NthChild;\n\n      switch (selectorType) {\n        case 'ID':\n          if (Boolean(ID) && testUniqueness(element, ID)) {\n            return ID;\n          }\n          break;\n\n        case 'Tag':\n          if (Boolean(Tag) && testUniqueness(element, Tag)) {\n            return Tag;\n          }\n          break;\n\n        case 'Class':\n          if (Boolean(Classes) && Classes.length) {\n            foundSelector = getUniqueCombination(element, Classes, Tag);\n            if (foundSelector) {\n              return foundSelector;\n            }\n          }\n          break;\n\n        case 'Attributes':\n          if (Boolean(Attributes) && Attributes.length) {\n            foundSelector = getUniqueCombination(element, Attributes, Tag);\n            if (foundSelector) {\n              return foundSelector;\n            }\n          }\n          break;\n\n        case 'NthChild':\n          if (Boolean(NthChild)) {\n            return NthChild;\n          }\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return '*';\n}\n\n/**\n * Generate unique CSS selector for given DOM element\n *\n * @param {Element} el\n * @return {String}\n * @api private\n */\n\nfunction unique(el) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var _options$selectorType = options.selectorTypes,\n      selectorTypes = _options$selectorType === undefined ? ['ID', 'Class', 'Tag', 'NthChild'] : _options$selectorType,\n      _options$attributesTo = options.attributesToIgnore,\n      attributesToIgnore = _options$attributesTo === undefined ? ['id', 'class', 'length'] : _options$attributesTo,\n      _options$excludeRegex = options.excludeRegex,\n      excludeRegex = _options$excludeRegex === undefined ? null : _options$excludeRegex;\n\n  var allSelectors = [];\n  var parents = (0, _getParents.getParents)(el);\n\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = parents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var elem = _step2.value;\n\n      var selector = getUniqueSelector(elem, selectorTypes, attributesToIgnore, excludeRegex);\n      if (Boolean(selector)) {\n        allSelectors.push(selector);\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  var selectors = [];\n  var _iteratorNormalCompletion3 = true;\n  var _didIteratorError3 = false;\n  var _iteratorError3 = undefined;\n\n  try {\n    for (var _iterator3 = allSelectors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n      var it = _step3.value;\n\n      selectors.unshift(it);\n      var _selector = selectors.join(' > ');\n      if ((0, _isUnique.isUnique)(el, _selector)) {\n        return _selector;\n      }\n    }\n  } catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion3 && _iterator3.return) {\n        _iterator3.return();\n      }\n    } finally {\n      if (_didIteratorError3) {\n        throw _iteratorError3;\n      }\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/index.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/isElement.js":
/*!********************************************************!*\
  !*** ../node_modules/unique-selector/lib/isElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.isElement = isElement;\n/**\n * Determines if the passed el is a DOM element\n */\nfunction isElement(el) {\n  var isElem = void 0;\n\n  if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object') {\n    isElem = el instanceof HTMLElement;\n  } else {\n    isElem = !!el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';\n  }\n  return isElem;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/isElement.js?");

/***/ }),

/***/ "../node_modules/unique-selector/lib/isUnique.js":
/*!*******************************************************!*\
  !*** ../node_modules/unique-selector/lib/isUnique.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isUnique = isUnique;\n/**\n * Checks if the selector is unique\n * @param  { Object } element\n * @param  { String } selector\n * @return { Array }\n */\nfunction isUnique(el, selector) {\n  if (!Boolean(selector)) return false;\n  var elems = el.ownerDocument.querySelectorAll(selector);\n  return elems.length === 1 && elems[0] === el;\n}\n\n//# sourceURL=webpack:///../node_modules/unique-selector/lib/isUnique.js?");

/***/ }),

/***/ "../test/fixtures/index.html":
/*!***********************************!*\
  !*** ../test/fixtures/index.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///../test/fixtures/index.html?");

/***/ }),

/***/ "../test/fixtures/page2.html":
/*!***********************************!*\
  !*** ../test/fixtures/page2.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"page2.html\";\n\n//# sourceURL=webpack:///../test/fixtures/page2.html?");

/***/ }),

/***/ "./remoteclick.js":
/*!************************!*\
  !*** ./remoteclick.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var unique_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unique-selector */ \"../node_modules/unique-selector/lib/index.js\");\n/* harmony import */ var unique_selector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unique_selector__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('load script');\n\nfunction remoteclick(selector) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  console.log('init ', options);\n\n  var handleClick = function handleClick(event) {\n    console.log('CLICK', event.target);\n  };\n\n  window.addEventListener(selector, handleClick);\n}\n\nif (typeof window !== 'undefined') {\n  window.remoteclick = remoteclick;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remoteclick);\n\n//# sourceURL=webpack:///./remoteclick.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./remoteclick.js ../test/fixtures/index.html ../test/fixtures/page2.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteclick/src/remoteclick.js */\"./remoteclick.js\");\n__webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteclick/test/fixtures/index.html */\"../test/fixtures/index.html\");\nmodule.exports = __webpack_require__(/*! /Users/rafaelnowrotek/Projects/remoteclick/test/fixtures/page2.html */\"../test/fixtures/page2.html\");\n\n\n//# sourceURL=webpack:///multi_./remoteclick.js_../test/fixtures/index.html_../test/fixtures/page2.html?");

/***/ })

/******/ });