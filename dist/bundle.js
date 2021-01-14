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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  margin: 0;\n  font-family: \"Quicksand\", sans-serif;\n  -webkit-font-smoothing: auto; }\n\nh1, h2 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  width: 70%;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 40%; }\n\nh3 {\n  font-size: 1.5em;\n  color: #359567;\n  margin: 10px 0px 10px 0px; }\n\nh4 {\n  font-size: 1.2em;\n  color: #359567;\n  cursor: pointer;\n  margin: 15px 5px 10px 0px; }\n\n/* BANNER IMAGE*/\n.banner {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  height: 150px; }\n  .banner h2 {\n    text-align: center;\n    width: 100%; }\n\n.banner--recipes {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  text-align: center;\n  color: #215F42; }\n\n.wrap {\n  height: 100vh;\n  width: 200px;\n  padding: 10px; }\n\n.list-tags {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n  .list-tags li {\n    margin: 2px; }\n\n/* BUTTONS */\n.button-primary, .button-show-all {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14pt;\n  font-weight: bold;\n  padding: 5px 10px; }\n  .button-primary:hover, .button-show-all:hover, .button-primary:disabled, .button-show-all:disabled {\n    background-color: #84C8A4; }\n  .button-primary:disabled, .button-show-all:disabled {\n    cursor: default !important; }\n\n.button-show-all {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px; }\n\n/* PANTRY LIST */\n.menu-pantry {\n  display: none;\n  background-color: #DAE4EE;\n  max-height: 60vh;\n  overflow: scroll;\n  padding: 3%;\n  position: absolute;\n  top: 85%;\n  right: 1px;\n  width: 250px;\n  z-index: 3;\n  color: #215F42;\n  box-shadow: 1px 1px 115px black; }\n  .menu-pantry h3 {\n    color: #215F42;\n    margin: 0;\n    padding-bottom: 5%; }\n  .menu-pantry th {\n    font-weight: bold;\n    text-align: left; }\n  .menu-pantry td {\n    margin: 2px; }\n  .menu-pantry .amount {\n    text-align: center; }\n\n.list-pantry {\n  color: #215F42;\n  margin-top: 15px;\n  text-align: left; }\n\n@media screen and (max-width: 768px) {\n  .menu-pantry {\n    top: 93%;\n    max-height: 85vh;\n    right: auto; } }\n\n.header {\n  grid-area: header;\n  display: flex;\n  position: relative;\n  height: 100px; }\n  .header--brand-name {\n    color: #C4EB67; }\n  .header--apple-icon {\n    height: 40px;\n    margin-left: 5px;\n    width: 35px; }\n  .header--form {\n    display: flex;\n    justify-content: center;\n    border: 3px outset #C4EB67;\n    border-radius: 15px;\n    box-shadow: 0px 0px 7px 0px #475d74;\n    margin: 1.2% 0.5% 1.2% 0%;\n    width: 100%; }\n  .header--buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 2%; }\n\n.search-input {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-size: 2rem;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%; }\n  .search-input:hover, .search-input:focus {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease; }\n  .search-input::placeholder {\n    color: #5B7894;\n    font-size: 1.5rem; }\n\n.search-input:focus::placeholder {\n  font-size: 0rem;\n  transition: .8s ease; }\n\n.search-icon {\n  border-left: 3px outset #C4EB67;\n  padding: 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .search-icon img {\n    height: 2rem; }\n\n.search-label {\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  width: 1px;\n  height: 1px;\n  white-space: nowrap;\n  clip-path: inset(1px); }\n\n.button-nav {\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  margin: 0%;\n  outline: none;\n  text-align: center;\n  font-family: \"Quicksand\", sans-serif;\n  transition: .4s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .button-nav:hover, .button-nav:focus {\n    color: #C4EB67;\n    font-size: .85rem;\n    font-weight: bold;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease; }\n  .button-nav img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 10px; }\n\n@media screen and (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: center;\n    height: auto; }\n    .header--form {\n      width: auto; }\n  h1, h2 {\n    width: auto;\n    margin: 2%; }\n  .button-nav {\n    width: auto;\n    color: #C4EB67;\n    font-size: .85rem;\n    font-weight: bold;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; } }\n\nmain {\n  align-content: flex-start;\n  display: flex;\n  grid-area: main;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.button-apple {\n  background-color: inherit;\n  border: none;\n  bottom: 10px;\n  cursor: inherit;\n  right: 15px;\n  position: absolute; }\n\n.hidden,\n.display-favorites .recipe--card:not(.favorite) {\n  display: none !important; }\n\n.recipe--card {\n  height: 300px;\n  width: 250px;\n  background-color: white;\n  border: 2px solid #215F42;\n  border-radius: 7px;\n  cursor: pointer;\n  margin: 20px;\n  padding: 15px;\n  position: relative; }\n  .recipe--card .recipe--title {\n    margin-top: 5px;\n    min-height: 15%; }\n  .recipe--card:hover {\n    transition: .8s ease; }\n    .recipe--card:hover h4 {\n      text-shadow: 0px 0px 4px #C4EB67; }\n    .recipe--card:hover .recipe--photo {\n      opacity: 50%; }\n    .recipe--card:hover .recipe--hover-text {\n      font-family: \"Quicksand\", sans-serif;\n      font-size: 20px;\n      opacity: 100%;\n      width: 100%; }\n\n.recipe--apple-icon {\n  height: 50px;\n  width: 45px; }\n\n.recipe--hover-text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center; }\n\n.recipe--photo-container {\n  align-items: center;\n  background-color: inherit;\n  border: none;\n  box-sizing: border-box;\n  cursor: inherit;\n  display: flex;\n  height: 130px;\n  margin: 0;\n  padding: 0;\n  justify-content: center;\n  position: relative; }\n  .recipe--photo-container:focus {\n    transition: .8s ease; }\n    .recipe--photo-container:focus h4 {\n      text-shadow: 0px 0px 4px #C4EB67; }\n    .recipe--photo-container:focus .recipe--photo {\n      opacity: 50%; }\n    .recipe--photo-container:focus .recipe--hover-text {\n      font-family: \"Quicksand\", sans-serif;\n      font-size: 20px;\n      opacity: 100%;\n      width: 100%; }\n\n.recipe--photo {\n  height: 130px;\n  width: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  transition: .8s ease;\n  cursor: pointer; }\n\n.recipe--tags {\n  max-width: 200px;\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap; }\n  .recipe--tags span {\n    color: #215F42;\n    border: 1px solid #B2D45D;\n    border-radius: 3px;\n    margin: 0px 2px 2px 0px;\n    padding: 1px 4px 1px 4px;\n    font-weight: bold; }\n\n.button-exit {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n  .button-exit:hover {\n    background: #C4EB67;\n    transition: .3s ease; }\n\n.modal--bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  min-height: 95px; }\n  .modal--bottom p {\n    display: none;\n    margin: 0;\n    text-align: left;\n    width: 100%; }\n\n.modal--message {\n  display: none;\n  margin-top: 0;\n  transition: 1s opacity; }\n\n.modal--shopping-list {\n  display: none;\n  width: 100%; }\n\n.modal--shopping-table {\n  border-collapse: collapse;\n  margin-left: 5%;\n  margin-right: 5%;\n  width: 90%; }\n  .modal--shopping-table td {\n    padding: 0.25rem; }\n  .modal--shopping-table th {\n    color: #359567;\n    background-color: #C4EB67;\n    padding: 0.25rem;\n    text-align: left; }\n  .modal--shopping-table tfoot {\n    font-weight: bold; }\n\n.modal--title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n.overlay {\n  filter: alpha(opacity=50);\n  display: none;\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n.price {\n  text-align: right; }\n\n.recipe--instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe--instructions p table {\n    margin-left: 5%; }\n  .recipe--instructions ol {\n    margin-right: 2%; }\n  .recipe--instructions ul {\n    list-style: none; }\n\n#modal--message-ingredients {\n  display: block;\n  font-weight: bold;\n  font-style: italic; }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_styles.scss","webpack://./src/css/_header.scss","webpack://./src/css/_recipe-card.scss","webpack://./src/css/_recipe-modal.scss"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: $background-blue;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  margin: 0;\n  font-family: $primary-font;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: $secondary-font;\n  font-size: 50px;\n  width: 70%;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 40%;\n}\n\nh2 {\n  @extend h1;\n}\n\nh3 {\n  font-size: 1.5em;\n  color: $medium-green;\n  margin: 10px 0px 10px 0px;\n}\n\nh4 {\n  font-size: 1.2em;\n  color: $medium-green;\n  cursor: pointer;\n  margin: 15px 5px 10px 0px;\n}\n","// FONTS\n$primary-font: \"Quicksand\", sans-serif;\n$secondary-font: \"Sulphur Point\", sans-serif;\n\n// COLORS\n$light-green: #C4EB67;\n$medium-green: #359567;\n$dark-green: #215F42;\n$apple-green: #B2D45D;\n$button-hover: #84C8A4;\n$gray: #DAE4EE;\n$background-blue: #5B7894;\n\n// BOX SHADOW\n$pop-up-shadow: 1px 1px 115px black;\n$box-shadow-inset: inset -3px -1px 20px 1px #5c7894;\n$box-shadow-form: 0px 0px 7px 0px #475d74;\n$box-shadow-inset-light: inset 0px 0px 0px 0px white;\n$text-shadow-black: 0px 2px 4px black;\n","/* BANNER IMAGE*/\n.banner {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  height: 150px;\n\n  h2 {\n    text-align: center;\n    width: 100%;\n  }\n}\n\n.banner--recipes {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  text-align: center;\n  color: $dark-green;\n}\n\n.wrap {\n  height: 100vh;\n  width: 200px;\n  padding: 10px;\n}\n\n.list-tags {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n\n  li {\n    margin: 2px;\n  }\n}\n\n/* BUTTONS */\n.button-primary {\n  background-color: $medium-green;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: $primary-font;\n  font-size: 14pt;\n  font-weight: bold;\n  padding: 5px 10px;\n\n  &:hover,\n  &:disabled {\n    background-color: $button-hover;\n  }\n\n  &:disabled {\n    cursor: default !important;\n  }\n}\n\n.button-show-all {\n  @extend .button-primary;\n  height: 40px;\n  margin-top: 20px;\n  width: 200px;\n}\n\n/* PANTRY LIST */\n.menu-pantry {\n  display: none;\n  background-color: $gray;\n  max-height: 60vh;\n  overflow: scroll;\n  padding: 3%;\n  position: absolute;\n  top: 85%;\n  right: 1px;\n  width: 250px;\n  z-index: 3;\n  color: $dark-green;\n  box-shadow: $pop-up-shadow;\n\n  h3 {\n    color: $dark-green;\n    margin: 0;\n    padding-bottom: 5%;\n  }\n\n  th {\n    font-weight: bold;\n    text-align: left;\n  }\n\n  td {\n    margin: 2px;\n  }\n\n  .amount {\n    text-align: center;\n  }\n}\n\n.list-pantry {\n  color: $dark-green;\n  margin-top: 15px;\n  text-align: left;\n}\n\n// MOBILE BREAKPOINTS\n@media screen and (max-width: 768px) {\n  .menu-pantry {\n    top: 93%;\n    max-height: 85vh;\n    right: auto;\n  }\n}\n",".header {\n  grid-area: header;\n  display: flex;\n  position: relative;\n  height: 100px;\n\n  &--brand-name {\n    color: $light-green;\n  }\n\n  &--apple-icon {\n    height: 40px;\n    margin-left: 5px;\n    width: 35px;\n  }\n\n  &--form {\n    display: flex;\n    justify-content: center;\n    border: 3px outset $light-green;\n    border-radius: 15px;\n    box-shadow: $box-shadow-form;\n    margin: 1.2% 0.5% 1.2% 0%;\n    width: 100%;\n  }\n\n  &--buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 2%;\n  }\n}\n\n.search-input {\n  background: -webkit-gradient(linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: $box-shadow-inset;\n  color: $background-blue;\n  font-size: 2rem;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%;\n\n  &:hover {\n    box-shadow: $box-shadow-inset-light;\n    transition: .8s ease;\n  }\n\n  &::placeholder {\n    color: $background-blue;\n    font-size: 1.5rem;\n  }\n}\n\n.search-input:focus {\n  @extend .search-input:hover;\n\n  &::placeholder {\n    font-size: 0rem;\n    transition: .8s ease;\n  }\n}\n\n.search-icon {\n  border-left: 3px outset $light-green;\n  padding: 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    height: 2rem;\n  }\n}\n\n.search-label {\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  width: 1px;\n  height: 1px;\n  white-space: nowrap;\n  clip-path: inset(1px);\n}\n\n.button-nav {\n  background: $background-blue no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0px;\n  margin: 0%;\n  outline: none;\n  text-align: center;\n  font-family: $primary-font;\n  transition: .4s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  &:hover,\n  &:focus {\n    color: $light-green;\n    font-size: .85rem;\n    font-weight: bold;\n    text-shadow: $text-shadow-black;\n    transition: .4s ease;\n  }\n\n  img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 10px;\n  }\n}\n\n\n// RESPONSIVE BREAKPOINTS\n@media screen and (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n\n    &--form {\n      width: auto;\n    }\n  }\n\n  h1 {\n    width: auto;\n    margin: 2%;\n  }\n\n  .button-nav {\n    width: auto;\n    color: $light-green;\n    font-size: .85rem;\n    font-weight: bold;\n    text-shadow: $text-shadow-black;\n    transition: .4s ease;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n}\n","@mixin hover-transitions {\n  transition: .8s ease;\n\n  h4 {\n    text-shadow: 0px 0px 4px $light-green;\n  }\n\n  .recipe--photo {\n    opacity: 50%;\n  }\n\n  .recipe--hover-text {\n    font-family: $primary-font;\n    font-size: 20px;\n    opacity: 100%;\n    width: 100%;\n  }\n}\n\nmain {\n  align-content: flex-start;\n  display: flex;\n  grid-area: main;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.button-apple {\n  background-color: inherit;\n  border: none;\n  bottom: 10px;\n  cursor: inherit;\n  right: 15px;\n  position: absolute;\n}\n\n.hidden,\n.display-favorites .recipe--card:not(.favorite) {\n  display: none !important;\n}\n\n.recipe--card {\n  height: 300px;\n  width: 250px;\n  background-color: white;\n  border: 2px solid $dark-green;\n  border-radius: 7px;\n  cursor: pointer;\n  margin: 20px;\n  padding: 15px;\n  position: relative;\n\n  .recipe--title {\n    margin-top: 5px;\n    min-height: 15%;\n  }\n\n  &:hover {\n    @include hover-transitions;\n  }\n}\n\n.recipe--apple-icon {\n  height: 50px;\n  width: 45px;\n}\n\n.recipe--hover-text {\n  background: $medium-green;\n  color: white;\n  font-weight: 700;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n}\n\n.recipe--photo-container {\n  align-items: center;\n  background-color: inherit;\n  border: none;\n  box-sizing: border-box;\n  cursor: inherit;\n  display: flex;\n  height: 130px;\n  margin: 0;\n  padding: 0;\n  justify-content: center;\n  position: relative;\n\n  &:focus {\n    @include hover-transitions;\n  }\n}\n\n.recipe--photo {\n  height: 130px;\n  width: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  transition: .8s ease;\n  cursor: pointer;\n}\n\n.recipe--tags {\n  max-width: 200px;\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n\n  span {\n    color: $dark-green;\n    border: 1px solid $apple-green;\n    border-radius: 3px;\n    margin: 0px 2px 2px 0px;\n    padding: 1px 4px 1px 4px;\n    font-weight: bold;\n  }\n}\n",".button-exit {\n  background: white;\n  border: 2px double $medium-green;\n  border-radius: 5px;\n  color: $medium-green;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease;\n\n  &:hover {\n    background: $light-green;\n    transition: .3s ease;\n  }\n}\n\n.modal {\n  &--bottom {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    min-height: 95px;\n\n    p {\n      display: none;\n      margin: 0;\n      text-align: left;\n      width: 100%;\n    }\n  }\n\n  &--message {\n    display: none;\n    margin-top: 0;\n    transition: 1s opacity;\n  }\n\n  &--shopping-list {\n    display: none;\n    width: 100%;\n  }\n\n  &--shopping-table {\n    border-collapse: collapse;\n    margin-left: 5%;\n    margin-right: 5%;\n    width: 90%;\n\n    td {\n      padding: 0.25rem;\n    }\n\n    th {\n      color: $medium-green;\n      background-color: $light-green;\n      padding: 0.25rem;\n      text-align: left;\n    }\n\n    tfoot {\n      font-weight: bold;\n    }\n  }\n\n  &--title {\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 7px 7px 0px 0px;\n    color: white;\n    font-size: 30px;\n    margin: 0;\n    padding: 5%;\n    text-align: center;\n    text-shadow: 0px 0px 6px black;\n  }\n}\n\n.overlay {\n  filter: alpha(opacity=50);\n  display: none;\n  background-color: $background-blue;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n.price {\n  text-align: right;\n}\n\n.recipe--instructions {\n  background: white;\n  border: 3px solid $light-green;\n  border-radius: 10px;\n  box-shadow: $pop-up-shadow;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  p table {\n    margin-left: 5%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n\n  ul {\n    list-style: none;\n  }\n}\n\n#modal--message-ingredients {\n  display: block;\n  font-weight: bold;\n  font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const recipeContainer = document.querySelector(".recipe--container")
const bannerText = document.querySelector(".banner--message")
const recipeTagList = document.querySelector(".list-tags")
const pantryList = document.querySelector(".table-pantry")
const cardTemplate = document.querySelector('#template--card')
const instructionsCard = document.querySelector('.recipe--instructions')
const modalShoppingMessage = document.querySelector('#modal--message-ingredients')
const modalShoppingList = document.querySelector('.modal--shopping-list')
const modalShoppingItems = document.querySelector('.modal--shopping-items')
const modalTotalCost = document.querySelector('.modal--total-cost')

let domUpdates = {
  addWelcomeMessage(firstName) {
    bannerText.innerText = `Welcome ${firstName}!`
  },

  addCardToDom(recipeInfo, shortRecipeName) {
    const newRecipeCard = cardTemplate.content.cloneNode(true)
    newRecipeCard.querySelector('article.recipe--card').id = recipeInfo.id
    newRecipeCard.querySelector('h4.recipe--title').innerText = shortRecipeName
    newRecipeCard.querySelector('img.recipe--photo').src = recipeInfo.image
    newRecipeCard.querySelector('img.recipe--photo').alt = recipeInfo.name
    newRecipeCard.querySelector('img.recipe--photo').title = `${recipeInfo.name} recipe`

    this.displayTags(recipeInfo.tags, newRecipeCard)
    recipeContainer.appendChild(newRecipeCard)
  },

  displayTags(tags, card) {
    const listSection = card.querySelector('p.recipe--tags')
    tags.forEach(tag => {
      const newTagElement = document.createElement('span')
      newTagElement.innerText = `${tag}`
      listSection.appendChild(newTagElement)
    })
  },

  addListTags(allTags) {
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${this.capitalize(tag)}</label></li>`
      recipeTagList.insertAdjacentHTML("beforeend", tagHtml)
    })
  },

  displayShoppingList(shoppingList) {
    modalShoppingMessage.style.display = 'none'
    modalShoppingList.style.display = 'block'
    shoppingList.forEach(shoppingItem => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')
      const itemCostPerUnit = document.createElement('td')
      const itemTotalCost = document.createElement('td')

      const unit = this.formatUnits(shoppingItem.unit)
      const totalCost = this.formatPrice((shoppingItem.cost *
        shoppingItem.quantity) / 100)

      itemName.innerText = shoppingItem.name
      itemQuantity.innerText = `${shoppingItem.quantity} ${unit}`
      itemCostPerUnit.innerText = `$${this.formatPrice(shoppingItem.cost / 100)}`
      itemTotalCost.innerText = `$${totalCost}`

      itemCostPerUnit.classList.add('price')
      itemTotalCost.classList.add('price')

      modalShoppingItems.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
      listItem.appendChild(itemCostPerUnit)
      listItem.appendChild(itemTotalCost)
    })

    this.displayTotalCost(shoppingList)
  },

  displayTotalCost(shoppingList) {
    let totalListCost = shoppingList.reduce((totalCost, item) => {
      totalCost += (item.cost * item.quantity) / 100
      return totalCost
    }, 0)

    totalListCost = this.formatPrice(totalListCost)
    modalTotalCost.innerHTML = `
      <tr>
        <td colspan="4" class="price">Total Cost: $${totalListCost}</td>
      <tr>`
  },

  formatUnits(unit) {
    if (unit.toLowerCase().includes('teaspoon')) {
      unit = 'tsp'
    } else if (unit.toLowerCase().includes('tablespoon')) {
      unit = 'Tbsp'
    }
    return unit
  },

  formatQuantity(quantity) {
    if (quantity.toString().length > 3) {
      quantity = quantity.toFixed(2)
    }

    return quantity
  },

  formatPrice(quantity) {
    const format = num => num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    quantity = format(quantity)
    return quantity
  },

  generateRecipeInstructions(recipe) {
    instructionsCard.querySelector('h3').innerText = recipe.name
    instructionsCard.querySelector('h3').style.backgroundImage = `url(${recipe.image})`

    recipe.instructions.forEach(step => {
      const nextStep = document.createElement('li')
      nextStep.innerText = step.instruction
      instructionsCard.querySelector('ol').appendChild(nextStep)
    })

    instructionsCard.style.display = 'inline'
  },

  generateRecipeIngredients(recipe) {
    recipe.ingredients.forEach(i => {
      const currentIngredient = document.createElement('li')
      const quantity = domUpdates.formatQuantity(i.quantity.amount)
      const unit = domUpdates.formatUnits(i.quantity.unit)

      const ingFormat = `${quantity} ${unit} ${domUpdates.lowerCase(i.name)}`
      currentIngredient.innerText = ingFormat
      instructionsCard.querySelector('ul').appendChild(currentIngredient)
    })
  },

  addPantryInfoToDom(pantry) {
    this.clearPantryContents()
    pantry.forEach(item => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')

      itemName.innerText = item.name
      itemQuantity.innerText = item.amount

      itemQuantity.classList.add('amount')

      pantryList.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
    })
  },

  createListElements(instructions) {
    let instructionsList = ''
    instructions.forEach(item => {
      instructionsList += `<li>${item}</li>`
    })
    return instructionsList
  },

  clearPantryContents() {
    pantryList.querySelectorAll('tr').forEach(tr => tr.remove())
  },

  clearShoppingList() {
    modalShoppingList.style.display = 'none'
    modalShoppingItems.querySelectorAll('tr').forEach(tr => tr.remove())
  },

  clearRecipeInstructions() {
    instructionsCard.querySelectorAll('li').forEach(li => li.remove())
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
  },

  lowerCase(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toLowerCase() + word.slice(1)
    }).join(" ")
  }
}


/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchApi = {

  getUserData() {
    return fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
  },

  getRecipeData() {
    return fetch('http://localhost:3001/api/v1/recipes')
      .then(response => response.json())
  },

  getIngredientsData() {
    return fetch('http://localhost:3001/api/v1/ingredients')
      .then(response => response.json())
  },

  postUserInformation(updatedPantryItem) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedPantryItem)
    }

    return fetch('http://localhost:3001/api/v1/users', postFormat)
      .then(response => response.json())
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchApi);


/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo-outline.png");

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/chicken-parm.jpg":
/*!*************************************!*\
  !*** ./src/images/chicken-parm.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/chicken-parm.jpg");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/pancakes.jpg":
/*!*********************************!*\
  !*** ./src/images/pancakes.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/pancakes.jpg");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchApi.js */ "./src/fetchApi.js");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_chicken_parm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/chicken-parm.jpg */ "./src/images/chicken-parm.jpg");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/green-apples.jpg */ "./src/images/green-apples.jpg");
/* harmony import */ var _images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/pancakes.jpg */ "./src/images/pancakes.jpg");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");















/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Recipe {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.image = recipe.image
    this.tags = recipe.tags
    this.ingredients = recipe.ingredients
    this.instructions = recipe.instructions
  }

  updateIngredientsInfo(ingredientList) {
    this.ingredients.forEach(ingredient => {
      const foundItem = ingredientList.find(item => item.id === ingredient.id)
      ingredient.name = foundItem.name
      ingredient.cost = foundItem.estimatedCostInCents
    })
  }

  formatName() {
    if (this.name.length > 40) {
      this.name = this.name.substring(0, 40) + '...'
    }
    
    return this.name
  }
  
}

module.exports = Recipe


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchApi */ "./src/fetchApi.js");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipe__WEBPACK_IMPORTED_MODULE_4__);








const recipeContainer = document.querySelector('.recipe--container')
const showAllRecipesButton = document.querySelector('#button-show-all')
const savedRecipesButton = document.querySelector('#button-saved')
const myPantryButton = document.querySelector('#button-pantry')
const filterRecipesButton = document.querySelector('#button-filter')
const exitButton = document.querySelector('#button-exit')
const shoppingListButton = document.querySelector('#button-shopping')
const cookRecipeButton = document.querySelector('#button-cooked')
const fullRecipeInfo = document.querySelector('.recipe--instructions')
const searchForm = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const modalOverlay = document.querySelector('.overlay')
const modalIngredientsMessage = document.querySelector('#modal--message-ingredients')
const modalDateMessage = document.querySelector('#modal--message-date')
const modalShoppingMessage = document.querySelector('#modal--message-shopping')
const modalCookedMessage = document.querySelector('#modal--message-cooked')
const allRecipes = []
let menuOpen = false
let currentUser

searchForm.addEventListener('submit', pressEnterSearch)
searchInput.addEventListener('keyup', searchRecipes)
showAllRecipesButton.addEventListener('click', showAllRecipes)
savedRecipesButton.addEventListener('click', showSavedRecipes)
myPantryButton.addEventListener('click', togglePantryDisplay)
filterRecipesButton.addEventListener('click', findCheckedBoxes)
exitButton.addEventListener('click', exitRecipeInstructions)

cookRecipeButton.addEventListener('click', function() {
  cookOrShopRecipe(modalCookedMessage, 'subtract', event)
})

shoppingListButton.addEventListener('click', function() {
  cookOrShopRecipe(modalShoppingMessage, 'add', event)
})

// FETCH API DATASETS
const fetchedUserData = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getUserData()
const fetchedRecipeData = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getRecipeData()
const fetchedIngredientData = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getIngredientsData()

Promise.all([fetchedUserData, fetchedRecipeData, fetchedIngredientData])
  .then(values => {
    generateUser(values[0])
    createRecipeDataset(values[1])
    addRecipeNameAndCost(values[2])
    loadWebsite()
  }).catch(handleErrorMessages)

function loadWebsite() {
  const pantry = currentUser.alphabetizePantry()

  createRecipeCards()
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addPantryInfoToDom(pantry)
  findTags()
}

function handleErrorMessages(error) {
  window.alert('The server was not accessible at this time. Please reload the page or try again later.')
  console.log(error)
}

// POPULATE WEBSITE INFORMATION
function generateUser(userData) {
  currentUser = new _user__WEBPACK_IMPORTED_MODULE_3___default.a(userData[Math.floor(Math.random() * userData.length)])
  let firstName = currentUser.name.split(' ')[0]
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addWelcomeMessage(firstName)
}

function createRecipeDataset(recipeInfo) {
  recipeInfo.forEach(recipe => {
    const newRecipe = new _recipe__WEBPACK_IMPORTED_MODULE_4___default.a(recipe)
    allRecipes.push(newRecipe)
  })
}

function addRecipeNameAndCost(allIngredients) {
  allRecipes.forEach(recipe => {
    recipe.updateIngredientsInfo(allIngredients)
  })

  currentUser.addPantryIngredientNames(allIngredients)
}

// FIND A SPECIFIC RECIPE
function findRecipe(recipeID) {
  return allRecipes.find(recipe => recipe.id === Number(recipeID))
}

// USER PANTRY DISPLAY AND UPDATES
function updateUserPantryFromRecipe(recipeID, typeModification) {
  const thisRecipe = findRecipe(recipeID)
  const apiCalls = thisRecipe.ingredients.map(item => {
    let ingredientModificationValue = item.quantity.amount

    if (typeModification === 'subtract') {
      ingredientModificationValue = -item.quantity.amount
    }

    const updatedPantryItem = {
      userID: currentUser.id,
      ingredientID: item.id,
      ingredientModification: ingredientModificationValue
    }

    return _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].postUserInformation(updatedPantryItem)
  })

  return Promise.all(apiCalls).catch(handleErrorMessages)
}

function retrieveUpdatedUserPantry() {
  const userPromise = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getUserData()
  userPromise.then(users => {
    const updatedUser = users.find(user => user.id === currentUser.id)
    currentUser.pantry = updatedUser.pantry
  })

  return userPromise
}

function updateUserPantryDisplay(recipeID, typeModification = 'add') {
  return updateUserPantryFromRecipe(recipeID, typeModification)
    .then(retrieveUpdatedUserPantry)
    .then(() => fetchedIngredientData.then(ingredients => {
      currentUser.addPantryIngredientNames(ingredients)
    }))
    .then(() => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addPantryInfoToDom(currentUser.alphabetizePantry()))
}

// CREATE RECIPE CARDS
function createRecipeCards() {
  allRecipes.forEach(recipe => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addCardToDom(recipe, recipe.formatName())
    createCardListeners()
  })
}

function createCardListeners() {
  const allCards = document.querySelectorAll('.recipe--card')
  const cardAppleIcons = document.querySelectorAll('.button-apple')

  allCards.forEach(card => {
    card.addEventListener('click', interactWithRecipeCard)
  })

  cardAppleIcons.forEach(icon => {
    icon.addEventListener('keydown', pressEnterAppleIcon)
  })
}

// FILTER BY RECIPE TAGS
function findTags() {
  const tags = []

  allRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  tags.sort()
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addListTags(tags)
  addTagEventListeners()
}

function addTagEventListeners() {
  const allTags = document.querySelectorAll('.checked-tag')
  allTags.forEach(tag => tag.addEventListener('keyup', checkSelectedBox))
}

function checkSelectedBox(event) {
  if (event.keyCode === 13) {
    event.target.click()
  }
}

function findCheckedBoxes() {
  const tagCheckBoxes = document.querySelectorAll('.checked-tag')
  const checkBoxInfo = Array.from(tagCheckBoxes)

  const selectedTags = checkBoxInfo.filter(box => {
    return box.checked
  })

  findUntaggedRecipes(selectedTags)
}

function unhideRecipeCards() {
  const allCards = document.querySelectorAll('.recipe--card')

  allCards.forEach(card => card.classList.remove('hidden'))
}

function findUntaggedRecipes(selected) {
  const filteredRecipes = []

  selected.forEach(tag => {
    const recipes = allRecipes.filter(recipe => {
      return !recipe.tags.includes(tag.id)
    })

    recipes.forEach(recipe => {
      if (!filteredRecipes.includes(recipe)) {
        filteredRecipes.push(recipe)
      }
    })
  })

  hideUnselectedRecipes(filteredRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  unhideRecipeCards()
  foundRecipes.forEach(recipe => {
    const domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.classList.add('hidden')
  })
}

// FAVORITE RECIPE FUNCTIONALITY
function interactWithRecipeCard(event) {
  clearInstructionsCard()

  const cardId = parseInt(event.target.closest('.recipe--card').id)
  const recipeCard = document.getElementById(cardId)
  const selectedItemClass = event.target.closest('.button-apple')
  let appleIcon = event.target.querySelector('img')

  if (!appleIcon) {
    appleIcon = event.target.closest('img')
  }

  if (selectedItemClass && appleIcon.classList.contains('unfilled')) {
    addToFavorites(cardId, recipeCard, appleIcon)

  } else if (selectedItemClass) {
    removeFromFavorites(cardId, recipeCard, appleIcon)

  } else {
    openRecipeInstructions(event)
    exitButton.focus()
  }
}

function pressEnterAppleIcon(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    interactWithRecipeCard(event)
  }
}

function addToFavorites(cardId, recipeCard, appleIcon) {
  appleIcon.src = './images/apple-logo.png'
  appleIcon.classList.remove('unfilled')
  recipeCard.classList.add('favorite')
  currentUser.saveRecipe(cardId)
}

function removeFromFavorites(cardId, recipeCard, appleIcon) {
  appleIcon.src = './images/apple-logo-outline.png'
  appleIcon.classList.add('unfilled')
  recipeCard.classList.remove('favorite')
  currentUser.removeRecipe(cardId)
}

function showSavedRecipes() {
  recipeContainer.classList.value = ('display-favorites')
  toggleBanner('none', 'flex')
}

// RECIPE MODAL
function openRecipeInstructions(event) {
  const recipeID = event.path.find(element => element.id).id
  const thisRecipe = findRecipe(recipeID)

  determineIfEnoughIngredients(thisRecipe)

  cookRecipeButton.setAttribute('recipeID', recipeID)
  shoppingListButton.setAttribute('recipeID', recipeID)

  if (currentUser.findCookedDate(recipeID)) {
    displayCookedDate(recipeID)
  }

  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].generateRecipeInstructions(thisRecipe)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].generateRecipeIngredients(thisRecipe)
  modalOverlay.style.display = 'block'
}

function exitRecipeInstructions() {
  fullRecipeInfo.style.display = 'none'
  modalOverlay.style.display = 'none'
  modalDateMessage.style.display = 'none'

  clearInstructionsCard()
}

function clearInstructionsCard() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearRecipeInstructions()
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearShoppingList()
}

function displayCookedDate(recipeID) {
  const cookDate = currentUser.findCookedDate(recipeID).toDateString()

  if (cookDate) {
    modalDateMessage.innerText = `Last cooked on: ${cookDate}`
    modalDateMessage.style.display = 'inline'
  }
}

function updateCookedDate(recipeID) {
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)

  currentUser.saveCookedRecipe(recipeID, today)
  displayCookedDate(recipeID)
}

function cookOrShopRecipe(messageType, modification, event) {
  messageType.style.display = 'inline'
  messageType.style.opacity = 1

  const recipeID = event.target.getAttribute('recipeID')
  const currentRecipe = findRecipe(recipeID)

  updateUserPantryDisplay(recipeID, modification)
    .then(() => {

      setTimeout(function() {
        messageType.style.opacity = 0
      }, 1500)

      if (modification === 'subtract') {
        updateCookedDate(recipeID)
        determineIfEnoughIngredients(currentRecipe)
        shoppingListButton.focus()

      } else {
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearShoppingList()
        modalIngredientsMessage.style.display = 'none'
        setModalButtonDisplay('block', 'none')
        cookRecipeButton.focus()
      }
    })
}

function setModalButtonDisplay(cookRecipeState, shopRecipeState) {
  cookRecipeButton.style.display = cookRecipeState
  shoppingListButton.style.display = shopRecipeState
}

function determineIfEnoughIngredients(selectedRecipe) {
  const shoppingList = []
  selectedRecipe.ingredients.forEach(recipeItem => {
    const userItem = currentUser.pantry.find(item => item.ingredient === recipeItem.id)

    const listItem = {
      name: _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].lowerCase(recipeItem.name),
      quantity: _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].formatQuantity(recipeItem.quantity.amount),
      unit: recipeItem.quantity.unit,
      cost: recipeItem.cost.toFixed(2)
    }

    if (!userItem) {
      shoppingList.push(listItem)

    } else if (userItem) {
      const quantityNeeded = recipeItem.quantity.amount - userItem.amount

      if (quantityNeeded > 0) {
        listItem.quantity = _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].formatQuantity(quantityNeeded)
        shoppingList.push(listItem)
      }
    }
  })

  if (shoppingList.length > 0) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayShoppingList(shoppingList)
    modalIngredientsMessage.style.display = 'inline'
    setModalButtonDisplay('none', 'block')

  } else {
    modalIngredientsMessage.style.display = 'none'
    setModalButtonDisplay('block', 'none')
  }
}

// TOGGLE DISPLAYS
function toggleBanner(messageBanner, recipeBanner) {
  document.querySelector('.banner--message').style.display = messageBanner
  document.querySelector('.banner--recipes').style.display = recipeBanner
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault()
  searchRecipes()
}

function searchRecipes() {
  const value = searchInput.value.toLowerCase()

  const filteredByName = allRecipes.filter(recipe => {
    const name = recipe.name.toLowerCase()

    return !name.includes(value)
  })

  const filteredByIngredient = filteredByName.filter(recipe => {
    return !recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(value))
  })

  hideUnselectedRecipes(filteredByIngredient)
}

function togglePantryDisplay() {
  const menuDropdown = document.querySelector('.menu-pantry')
  menuOpen = !menuOpen

  if (menuOpen) {
    menuDropdown.style.display = 'block'
  } else {
    menuDropdown.style.display = 'none'
  }
}

function showAllRecipes() {
  allRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.style.display = 'block'
  })

  recipeContainer.classList.remove('display-favorites')
  toggleBanner('block', 'none')
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.cookedRecipes = []
  }

  saveRecipe(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeRecipe(recipe) {
    if (recipe) {
      let i = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(i, 1)
    }
  }

  addPantryIngredientNames(ingredientList) {
    this.pantry.forEach(pantryItem => {
      const foundItem = ingredientList.find(item => item.id === pantryItem.ingredient)
      pantryItem.name = foundItem.name
    })
  }

  alphabetizePantry() {
    return this.pantry.sort(function(a, b) {
      if (a.name > b.name) {
        return 1

      } else if (a.name < b.name) {
        return -1
      }
    })
  }

  findCookedRecipe(recipeID) {
    return this.cookedRecipes.find(i => i.id === recipeID)
  }

  saveCookedRecipe(recipeID, cookDate) {
    const recipe = {
      id: recipeID,
      date: cookDate
    }

    if (this.findCookedRecipe(recipeID)) {
      this.findCookedRecipe(recipeID).date = cookDate

    } else {
      this.cookedRecipes.push(recipe)
    }
  }

  findCookedDate(recipeID) {
    const recipe = this.findCookedRecipe(recipeID)

    if (recipe) {
      return recipe.date
    }
  }
}

module.exports = User


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzdhYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FwcGxlLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hpY2tlbi1wYXJtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nvb2tib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wYW5jYWtlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFyY2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2Vhc29uaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy5qcyIsIndlYnBhY2s6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SztBQUNMLGdCQUFnQixtREFBVTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLEVBQUUsbURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUCxRQUFRLG1EQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBVTtBQUN0QixnQkFBZ0IsbURBQVU7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0EsNEJBQTRCLG1EQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzliQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87IH1cXG5cXG5oMSwgaDIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDQwJTsgfVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDE1cHggNXB4IDEwcHggMHB4OyB9XFxuXFxuLyogQkFOTkVSIElNQUdFKi9cXG4uYmFubmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBncmlkLWFyZWE6IGltYWdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTUwcHg7IH1cXG4gIC5iYW5uZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJhbm5lci0tcmVjaXBlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi8qIEZJTFRFUiBTSURFQkFSICovXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzIxNUY0MjsgfVxcblxcbi53cmFwIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLmxpc3QtdGFncyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XFxuICAubGlzdC10YWdzIGxpIHtcXG4gICAgbWFyZ2luOiAycHg7IH1cXG5cXG4vKiBCVVRUT05TICovXFxuLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXNob3ctYWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTk1Njc7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4OyB9XFxuICAuYnV0dG9uLXByaW1hcnk6aG92ZXIsIC5idXR0b24tc2hvdy1hbGw6aG92ZXIsIC5idXR0b24tcHJpbWFyeTpkaXNhYmxlZCwgLmJ1dHRvbi1zaG93LWFsbDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7IH1cXG4gIC5idXR0b24tcHJpbWFyeTpkaXNhYmxlZCwgLmJ1dHRvbi1zaG93LWFsbDpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50OyB9XFxuXFxuLmJ1dHRvbi1zaG93LWFsbCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4ubWVudS1wYW50cnkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4NSU7XFxuICByaWdodDogMXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMztcXG4gIGNvbG9yOiAjMjE1RjQyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjazsgfVxcbiAgLm1lbnUtcGFudHJ5IGgzIHtcXG4gICAgY29sb3I6ICMyMTVGNDI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlOyB9XFxuICAubWVudS1wYW50cnkgdGgge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLm1lbnUtcGFudHJ5IHRkIHtcXG4gICAgbWFyZ2luOiAycHg7IH1cXG4gIC5tZW51LXBhbnRyeSAuYW1vdW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxpc3QtcGFudHJ5IHtcXG4gIGNvbG9yOiAjMjE1RjQyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnUtcGFudHJ5IHtcXG4gICAgdG9wOiA5MyU7XFxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9IH1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwcHg7IH1cXG4gIC5oZWFkZXItLWJyYW5kLW5hbWUge1xcbiAgICBjb2xvcjogI0M0RUI2NzsgfVxcbiAgLmhlYWRlci0tYXBwbGUtaWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7IH1cXG4gIC5oZWFkZXItLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmhlYWRlci0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIlOyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHdoaXRlKSwgY29sb3Itc3RvcCgxLCAjZTFlMWUxKSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0O1xcbiAgY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5zZWFyY2gtaW5wdXQ6aG92ZXIsIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICAuc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjNUI3ODk0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5zZWFyY2gtaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMHJlbTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2gtaWNvbiBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07IH1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjbGlwLXBhdGg6IGluc2V0KDFweCk7IH1cXG5cXG4uYnV0dG9uLW5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjNUI3ODk0IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuYnV0dG9uLW5hdjpob3ZlciwgLmJ1dHRvbi1uYXY6Zm9jdXMge1xcbiAgICBjb2xvcjogI0M0RUI2NztcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuICAuYnV0dG9uLW5hdiBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcbiAgICAuaGVhZGVyLS1mb3JtIHtcXG4gICAgICB3aWR0aDogYXV0bzsgfVxcbiAgaDEsIGgyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbjogMiU7IH1cXG4gIC5idXR0b24tbmF2IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGNvbG9yOiAjQzRFQjY3O1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cXG5cXG5tYWluIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuXFxuLmJ1dHRvbi1hcHBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgY3Vyc29yOiBpbmhlcml0O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4uaGlkZGVuLFxcbi5kaXNwbGF5LWZhdm9yaXRlcyAucmVjaXBlLS1jYXJkOm5vdCguZmF2b3JpdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5yZWNpcGUtLWNhcmQge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzIxNUY0MjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5yZWNpcGUtLWNhcmQgLnJlY2lwZS0tdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1JTsgfVxcbiAgLnJlY2lwZS0tY2FyZDpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICAgIC5yZWNpcGUtLWNhcmQ6aG92ZXIgaDQge1xcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3OyB9XFxuICAgIC5yZWNpcGUtLWNhcmQ6aG92ZXIgLnJlY2lwZS0tcGhvdG8ge1xcbiAgICAgIG9wYWNpdHk6IDUwJTsgfVxcbiAgICAucmVjaXBlLS1jYXJkOmhvdmVyIC5yZWNpcGUtLWhvdmVyLXRleHQge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5yZWNpcGUtLWFwcGxlLWljb24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDQ1cHg7IH1cXG5cXG4ucmVjaXBlLS1ob3Zlci10ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5yZWNpcGUtLXBob3RvLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnJlY2lwZS0tcGhvdG8tY29udGFpbmVyOmZvY3VzIHtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG4gICAgLnJlY2lwZS0tcGhvdG8tY29udGFpbmVyOmZvY3VzIGg0IHtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI0M0RUI2NzsgfVxcbiAgICAucmVjaXBlLS1waG90by1jb250YWluZXI6Zm9jdXMgLnJlY2lwZS0tcGhvdG8ge1xcbiAgICAgIG9wYWNpdHk6IDUwJTsgfVxcbiAgICAucmVjaXBlLS1waG90by1jb250YWluZXI6Zm9jdXMgLnJlY2lwZS0taG92ZXItdGV4dCB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJlY2lwZS0tcGhvdG8ge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ucmVjaXBlLS10YWdzIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLnJlY2lwZS0tdGFncyBzcGFuIHtcXG4gICAgY29sb3I6ICMyMTVGNDI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCMkQ0NUQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAwcHggMnB4IDJweCAwcHg7XFxuICAgIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYnV0dG9uLWV4aXQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcbiAgLmJ1dHRvbi1leGl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7IH1cXG5cXG4ubW9kYWwtLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogOTVweDsgfVxcbiAgLm1vZGFsLS1ib3R0b20gcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubW9kYWwtLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0cmFuc2l0aW9uOiAxcyBvcGFjaXR5OyB9XFxuXFxuLm1vZGFsLS1zaG9wcGluZy1saXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5tb2RhbC0tc2hvcHBpbmctdGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxuICB3aWR0aDogOTAlOyB9XFxuICAubW9kYWwtLXNob3BwaW5nLXRhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogMC4yNXJlbTsgfVxcbiAgLm1vZGFsLS1zaG9wcGluZy10YWJsZSB0aCB7XFxuICAgIGNvbG9yOiAjMzU5NTY3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFQjY3O1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAubW9kYWwtLXNob3BwaW5nLXRhYmxlIHRmb290IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kYWwtLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG4ucHJpY2Uge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ucmVjaXBlLS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAucmVjaXBlLS1pbnN0cnVjdGlvbnMgcCB0YWJsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTsgfVxcbiAgLnJlY2lwZS0taW5zdHJ1Y3Rpb25zIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcbiAgLnJlY2lwZS0taW5zdHJ1Y3Rpb25zIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbiNtb2RhbC0tbWVzc2FnZS1pbmdyZWRpZW50cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZWNpcGUtY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZWNpcGUtbW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQ1V1QjtFRFR2QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtEQUdjO0VBQ2QsU0FBUztFQUNULG9DQ1JvQztFRFNwQyw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDQ2QwQztFRGUxQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQU9aO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNDeEJvQjtFRHlCcEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNDOUJvQjtFRCtCcEIsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBRXRDM0IsZ0JBQUE7QUFDQTtFQUNFLDRHQUE2RjtFQUM3RixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBO0VBTmY7SUFTSSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQUlmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCLG1CQUFBO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNEbkJrQixFQUFBOztBQ3NCcEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFIcEI7SUFNSSxXQUFXLEVBQUE7O0FBSWYsWUFBQTtBQUNBO0VBQ0UseUJEekNvQjtF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QThCLEVBQUE7O0FBSWxDO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix5Qkp4RXVCO0VJeUV2QixZQUFZO0VBQ1osT0FBTztFQUNQLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIseUJKOUZtQjtFSStGbkIsbUJBQW1CO0VBQ25CLCtCSnZGaUM7RUl3RmpDLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLGFBQWEsRUFBQTtFQWRmO0lBaUJJLGVBQWUsRUFBQTtFQWpCbkI7SUFxQkksZ0JBQWdCLEVBQUE7RUFyQnBCO0lBeUJJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ibHVlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuaDIge1xcbiAgQGV4dGVuZCBoMTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAkbWVkaXVtLWdyZWVuO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAkbWVkaXVtLWdyZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxNXB4IDVweCAxMHB4IDBweDtcXG59XFxuXCIsXCIvLyBGT05UU1xcbiRwcmltYXJ5LWZvbnQ6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiRzZWNvbmRhcnktZm9udDogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcblxcbi8vIENPTE9SU1xcbiRsaWdodC1ncmVlbjogI0M0RUI2NztcXG4kbWVkaXVtLWdyZWVuOiAjMzU5NTY3O1xcbiRkYXJrLWdyZWVuOiAjMjE1RjQyO1xcbiRhcHBsZS1ncmVlbjogI0IyRDQ1RDtcXG4kYnV0dG9uLWhvdmVyOiAjODRDOEE0O1xcbiRncmF5OiAjREFFNEVFO1xcbiRiYWNrZ3JvdW5kLWJsdWU6ICM1Qjc4OTQ7XFxuXFxuLy8gQk9YIFNIQURPV1xcbiRwb3AtdXAtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiRib3gtc2hhZG93LWluc2V0OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4kYm94LXNoYWRvdy1mb3JtOiAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NDtcXG4kYm94LXNoYWRvdy1pbnNldC1saWdodDogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiR0ZXh0LXNoYWRvdy1ibGFjazogMHB4IDJweCA0cHggYmxhY2s7XFxuXCIsXCIvKiBCQU5ORVIgSU1BR0UqL1xcbi5iYW5uZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLCByZ2JhKDAsMCwwLC41KSksdXJsKFxcXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1xcXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uYmFubmVyLS1yZWNpcGVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBGSUxURVIgU0lERUJBUiAqL1xcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxpc3QtdGFncyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcblxcbiAgbGkge1xcbiAgICBtYXJnaW46IDJweDtcXG4gIH1cXG59XFxuXFxuLyogQlVUVE9OUyAqL1xcbi5idXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWdyZWVuO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDE0cHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcblxcbiAgJjpob3ZlcixcXG4gICY6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWhvdmVyO1xcbiAgfVxcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLXNob3ctYWxsIHtcXG4gIEBleHRlbmQgLmJ1dHRvbi1wcmltYXJ5O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4ubWVudS1wYW50cnkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAzJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODUlO1xcbiAgcmlnaHQ6IDFweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDM7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICBib3gtc2hhZG93OiAkcG9wLXVwLXNoYWRvdztcXG5cXG4gIGgzIHtcXG4gICAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIH1cXG5cXG4gIHRoIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuXFxuICB0ZCB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgfVxcblxcbiAgLmFtb3VudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmxpc3QtcGFudHJ5IHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vLyBNT0JJTEUgQlJFQUtQT0lOVFNcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1lbnUtcGFudHJ5IHtcXG4gICAgdG9wOiA5MyU7XFxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cIixcIi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gICYtLWJyYW5kLW5hbWUge1xcbiAgICBjb2xvcjogJGxpZ2h0LWdyZWVuO1xcbiAgfVxcblxcbiAgJi0tYXBwbGUtaWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuXFxuICAmLS1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IG91dHNldCAkbGlnaHQtZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWZvcm07XFxuICAgIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctaW5zZXQ7XFxuICBjb2xvcjogJGJhY2tncm91bmQtYmx1ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1pbnNldC1saWdodDtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxuXFxuICAmOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1ibHVlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICBAZXh0ZW5kIC5zZWFyY2gtaW5wdXQ6aG92ZXI7XFxuXFxuICAmOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAkbGlnaHQtZ3JlZW47XFxuICBwYWRkaW5nOiAxJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICB9XFxufVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNsaXAtcGF0aDogaW5zZXQoMXB4KTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtYmx1ZSBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMge1xcbiAgICBjb2xvcjogJGxpZ2h0LWdyZWVuO1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3ctYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG4vLyBSRVNQT05TSVZFIEJSRUFLUE9JTlRTXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgICYtLWZvcm0ge1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1uYXYge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgY29sb3I6ICRsaWdodC1ncmVlbjtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93LWJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblwiLFwiQG1peGluIGhvdmVyLXRyYW5zaXRpb25zIHtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcblxcbiAgaDQge1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGxpZ2h0LWdyZWVuO1xcbiAgfVxcblxcbiAgLnJlY2lwZS0tcGhvdG8ge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICB9XFxuXFxuICAucmVjaXBlLS1ob3Zlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5idXR0b24tYXBwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGN1cnNvcjogaW5oZXJpdDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaGlkZGVuLFxcbi5kaXNwbGF5LWZhdm9yaXRlcyAucmVjaXBlLS1jYXJkOm5vdCguZmF2b3JpdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnJlY2lwZS0tY2FyZCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkZGFyay1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAucmVjaXBlLS10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWluLWhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgIEBpbmNsdWRlIGhvdmVyLXRyYW5zaXRpb25zO1xcbiAgfVxcbn1cXG5cXG4ucmVjaXBlLS1hcHBsZS1pY29uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4ucmVjaXBlLS1ob3Zlci10ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICRtZWRpdW0tZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZS0tcGhvdG8tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgJjpmb2N1cyB7XFxuICAgIEBpbmNsdWRlIGhvdmVyLXRyYW5zaXRpb25zO1xcbiAgfVxcbn1cXG5cXG4ucmVjaXBlLS1waG90byB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlY2lwZS0tdGFncyB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICBzcGFuIHtcXG4gICAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYXBwbGUtZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAwcHggMnB4IDJweCAwcHg7XFxuICAgIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblwiLFwiLmJ1dHRvbi1leGl0IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICRtZWRpdW0tZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogJG1lZGl1bS1ncmVlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWdyZWVuO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gICYtLWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDk1cHg7XFxuXFxuICAgIHAge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAxcyBvcGFjaXR5O1xcbiAgfVxcblxcbiAgJi0tc2hvcHBpbmctbGlzdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi0tc2hvcHBpbmctdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIHRkIHtcXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgIHRoIHtcXG4gICAgICBjb2xvcjogJG1lZGl1bS1ncmVlbjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JlZW47XFxuICAgICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIHRmb290IHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjaztcXG4gIH1cXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ibHVlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5yZWNpcGUtLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsaWdodC1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAkcG9wLXVwLXNoYWRvdztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuXFxuICBwIHRhYmxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgb2wge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgfVxcblxcbiAgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbn1cXG5cXG4jbW9kYWwtLW1lc3NhZ2UtaW5ncmVkaWVudHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCByZWNpcGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS0tY29udGFpbmVyXCIpXG5jb25zdCBiYW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXItLW1lc3NhZ2VcIilcbmNvbnN0IHJlY2lwZVRhZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGFnc1wiKVxuY29uc3QgcGFudHJ5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGUtcGFudHJ5XCIpXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGxhdGUtLWNhcmQnKVxuY29uc3QgaW5zdHJ1Y3Rpb25zQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtLWluc3RydWN0aW9ucycpXG5jb25zdCBtb2RhbFNob3BwaW5nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC0tbWVzc2FnZS1pbmdyZWRpZW50cycpXG5jb25zdCBtb2RhbFNob3BwaW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tc2hvcHBpbmctbGlzdCcpXG5jb25zdCBtb2RhbFNob3BwaW5nSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXNob3BwaW5nLWl0ZW1zJylcbmNvbnN0IG1vZGFsVG90YWxDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10b3RhbC1jb3N0JylcblxubGV0IGRvbVVwZGF0ZXMgPSB7XG4gIGFkZFdlbGNvbWVNZXNzYWdlKGZpcnN0TmFtZSkge1xuICAgIGJhbm5lclRleHQuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtmaXJzdE5hbWV9IWBcbiAgfSxcblxuICBhZGRDYXJkVG9Eb20ocmVjaXBlSW5mbywgc2hvcnRSZWNpcGVOYW1lKSB7XG4gICAgY29uc3QgbmV3UmVjaXBlQ2FyZCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIG5ld1JlY2lwZUNhcmQucXVlcnlTZWxlY3RvcignYXJ0aWNsZS5yZWNpcGUtLWNhcmQnKS5pZCA9IHJlY2lwZUluZm8uaWRcbiAgICBuZXdSZWNpcGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2g0LnJlY2lwZS0tdGl0bGUnKS5pbm5lclRleHQgPSBzaG9ydFJlY2lwZU5hbWVcbiAgICBuZXdSZWNpcGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZy5yZWNpcGUtLXBob3RvJykuc3JjID0gcmVjaXBlSW5mby5pbWFnZVxuICAgIG5ld1JlY2lwZUNhcmQucXVlcnlTZWxlY3RvcignaW1nLnJlY2lwZS0tcGhvdG8nKS5hbHQgPSByZWNpcGVJbmZvLm5hbWVcbiAgICBuZXdSZWNpcGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZy5yZWNpcGUtLXBob3RvJykudGl0bGUgPSBgJHtyZWNpcGVJbmZvLm5hbWV9IHJlY2lwZWBcblxuICAgIHRoaXMuZGlzcGxheVRhZ3MocmVjaXBlSW5mby50YWdzLCBuZXdSZWNpcGVDYXJkKVxuICAgIHJlY2lwZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdSZWNpcGVDYXJkKVxuICB9LFxuXG4gIGRpc3BsYXlUYWdzKHRhZ3MsIGNhcmQpIHtcbiAgICBjb25zdCBsaXN0U2VjdGlvbiA9IGNhcmQucXVlcnlTZWxlY3RvcigncC5yZWNpcGUtLXRhZ3MnKVxuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgY29uc3QgbmV3VGFnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGFnRWxlbWVudC5pbm5lclRleHQgPSBgJHt0YWd9YFxuICAgICAgbGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3VGFnRWxlbWVudClcbiAgICB9KVxuICB9LFxuXG4gIGFkZExpc3RUYWdzKGFsbFRhZ3MpIHtcbiAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCIke3RhZ31cIj4ke3RoaXMuY2FwaXRhbGl6ZSh0YWcpfTwvbGFiZWw+PC9saT5gXG4gICAgICByZWNpcGVUYWdMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0YWdIdG1sKVxuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheVNob3BwaW5nTGlzdChzaG9wcGluZ0xpc3QpIHtcbiAgICBtb2RhbFNob3BwaW5nTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbW9kYWxTaG9wcGluZ0xpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBzaG9wcGluZ0xpc3QuZm9yRWFjaChzaG9wcGluZ0l0ZW0gPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgIGNvbnN0IGl0ZW1RdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgIGNvbnN0IGl0ZW1Db3N0UGVyVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgIGNvbnN0IGl0ZW1Ub3RhbENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG5cbiAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZvcm1hdFVuaXRzKHNob3BwaW5nSXRlbS51bml0KVxuICAgICAgY29uc3QgdG90YWxDb3N0ID0gdGhpcy5mb3JtYXRQcmljZSgoc2hvcHBpbmdJdGVtLmNvc3QgKlxuICAgICAgICBzaG9wcGluZ0l0ZW0ucXVhbnRpdHkpIC8gMTAwKVxuXG4gICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBzaG9wcGluZ0l0ZW0ubmFtZVxuICAgICAgaXRlbVF1YW50aXR5LmlubmVyVGV4dCA9IGAke3Nob3BwaW5nSXRlbS5xdWFudGl0eX0gJHt1bml0fWBcbiAgICAgIGl0ZW1Db3N0UGVyVW5pdC5pbm5lclRleHQgPSBgJCR7dGhpcy5mb3JtYXRQcmljZShzaG9wcGluZ0l0ZW0uY29zdCAvIDEwMCl9YFxuICAgICAgaXRlbVRvdGFsQ29zdC5pbm5lclRleHQgPSBgJCR7dG90YWxDb3N0fWBcblxuICAgICAgaXRlbUNvc3RQZXJVbml0LmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICAgIGl0ZW1Ub3RhbENvc3QuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuXG4gICAgICBtb2RhbFNob3BwaW5nSXRlbXMuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1RdWFudGl0eSlcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1Db3N0UGVyVW5pdClcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1Ub3RhbENvc3QpXG4gICAgfSlcblxuICAgIHRoaXMuZGlzcGxheVRvdGFsQ29zdChzaG9wcGluZ0xpc3QpXG4gIH0sXG5cbiAgZGlzcGxheVRvdGFsQ29zdChzaG9wcGluZ0xpc3QpIHtcbiAgICBsZXQgdG90YWxMaXN0Q29zdCA9IHNob3BwaW5nTGlzdC5yZWR1Y2UoKHRvdGFsQ29zdCwgaXRlbSkgPT4ge1xuICAgICAgdG90YWxDb3N0ICs9IChpdGVtLmNvc3QgKiBpdGVtLnF1YW50aXR5KSAvIDEwMFxuICAgICAgcmV0dXJuIHRvdGFsQ29zdFxuICAgIH0sIDApXG5cbiAgICB0b3RhbExpc3RDb3N0ID0gdGhpcy5mb3JtYXRQcmljZSh0b3RhbExpc3RDb3N0KVxuICAgIG1vZGFsVG90YWxDb3N0LmlubmVySFRNTCA9IGBcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgY2xhc3M9XCJwcmljZVwiPlRvdGFsIENvc3Q6ICQke3RvdGFsTGlzdENvc3R9PC90ZD5cbiAgICAgIDx0cj5gXG4gIH0sXG5cbiAgZm9ybWF0VW5pdHModW5pdCkge1xuICAgIGlmICh1bml0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3RlYXNwb29uJykpIHtcbiAgICAgIHVuaXQgPSAndHNwJ1xuICAgIH0gZWxzZSBpZiAodW5pdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd0YWJsZXNwb29uJykpIHtcbiAgICAgIHVuaXQgPSAnVGJzcCdcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRcbiAgfSxcblxuICBmb3JtYXRRdWFudGl0eShxdWFudGl0eSkge1xuICAgIGlmIChxdWFudGl0eS50b1N0cmluZygpLmxlbmd0aCA+IDMpIHtcbiAgICAgIHF1YW50aXR5ID0gcXVhbnRpdHkudG9GaXhlZCgyKVxuICAgIH1cblxuICAgIHJldHVybiBxdWFudGl0eVxuICB9LFxuXG4gIGZvcm1hdFByaWNlKHF1YW50aXR5KSB7XG4gICAgY29uc3QgZm9ybWF0ID0gbnVtID0+IG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSlcblxuICAgIHF1YW50aXR5ID0gZm9ybWF0KHF1YW50aXR5KVxuICAgIHJldHVybiBxdWFudGl0eVxuICB9LFxuXG4gIGdlbmVyYXRlUmVjaXBlSW5zdHJ1Y3Rpb25zKHJlY2lwZSkge1xuICAgIGluc3RydWN0aW9uc0NhcmQucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHQgPSByZWNpcGUubmFtZVxuICAgIGluc3RydWN0aW9uc0NhcmQucXVlcnlTZWxlY3RvcignaDMnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVjaXBlLmltYWdlfSlgXG5cbiAgICByZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBjb25zdCBuZXh0U3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIG5leHRTdGVwLmlubmVyVGV4dCA9IHN0ZXAuaW5zdHJ1Y3Rpb25cbiAgICAgIGluc3RydWN0aW9uc0NhcmQucXVlcnlTZWxlY3Rvcignb2wnKS5hcHBlbmRDaGlsZChuZXh0U3RlcClcbiAgICB9KVxuXG4gICAgaW5zdHJ1Y3Rpb25zQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgfSxcblxuICBnZW5lcmF0ZVJlY2lwZUluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEluZ3JlZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICBjb25zdCBxdWFudGl0eSA9IGRvbVVwZGF0ZXMuZm9ybWF0UXVhbnRpdHkoaS5xdWFudGl0eS5hbW91bnQpXG4gICAgICBjb25zdCB1bml0ID0gZG9tVXBkYXRlcy5mb3JtYXRVbml0cyhpLnF1YW50aXR5LnVuaXQpXG5cbiAgICAgIGNvbnN0IGluZ0Zvcm1hdCA9IGAke3F1YW50aXR5fSAke3VuaXR9ICR7ZG9tVXBkYXRlcy5sb3dlckNhc2UoaS5uYW1lKX1gXG4gICAgICBjdXJyZW50SW5ncmVkaWVudC5pbm5lclRleHQgPSBpbmdGb3JtYXRcbiAgICAgIGluc3RydWN0aW9uc0NhcmQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZChjdXJyZW50SW5ncmVkaWVudClcbiAgICB9KVxuICB9LFxuXG4gIGFkZFBhbnRyeUluZm9Ub0RvbShwYW50cnkpIHtcbiAgICB0aGlzLmNsZWFyUGFudHJ5Q29udGVudHMoKVxuICAgIHBhbnRyeS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgIGNvbnN0IGl0ZW1RdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcblxuICAgICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXG4gICAgICBpdGVtUXVhbnRpdHkuaW5uZXJUZXh0ID0gaXRlbS5hbW91bnRcblxuICAgICAgaXRlbVF1YW50aXR5LmNsYXNzTGlzdC5hZGQoJ2Ftb3VudCcpXG5cbiAgICAgIHBhbnRyeUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1RdWFudGl0eSlcbiAgICB9KVxuICB9LFxuXG4gIGNyZWF0ZUxpc3RFbGVtZW50cyhpbnN0cnVjdGlvbnMpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zTGlzdCA9ICcnXG4gICAgaW5zdHJ1Y3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpbnN0cnVjdGlvbnNMaXN0ICs9IGA8bGk+JHtpdGVtfTwvbGk+YFxuICAgIH0pXG4gICAgcmV0dXJuIGluc3RydWN0aW9uc0xpc3RcbiAgfSxcblxuICBjbGVhclBhbnRyeUNvbnRlbnRzKCkge1xuICAgIHBhbnRyeUxpc3QucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHRyID0+IHRyLnJlbW92ZSgpKVxuICB9LFxuXG4gIGNsZWFyU2hvcHBpbmdMaXN0KCkge1xuICAgIG1vZGFsU2hvcHBpbmdMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBtb2RhbFNob3BwaW5nSXRlbXMucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKHRyID0+IHRyLnJlbW92ZSgpKVxuICB9LFxuXG4gIGNsZWFyUmVjaXBlSW5zdHJ1Y3Rpb25zKCkge1xuICAgIGluc3RydWN0aW9uc0NhcmQucXVlcnlTZWxlY3RvckFsbCgnbGknKS5mb3JFYWNoKGxpID0+IGxpLnJlbW92ZSgpKVxuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICAgIH0pLmpvaW4oXCIgXCIpXG4gIH0sXG5cbiAgbG93ZXJDYXNlKHdvcmRzKSB7XG4gICAgcmV0dXJuIHdvcmRzLnNwbGl0KFwiIFwiKS5tYXAod29yZCA9PiB7XG4gICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcbiAgICB9KS5qb2luKFwiIFwiKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlc1xuIiwiY29uc3QgZmV0Y2hBcGkgPSB7XG5cbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRSZWNpcGVEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRJbmdyZWRpZW50c0RhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2luZ3JlZGllbnRzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBwb3N0VXNlckluZm9ybWF0aW9uKHVwZGF0ZWRQYW50cnlJdGVtKSB7XG4gICAgY29uc3QgcG9zdEZvcm1hdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFBhbnRyeUl0ZW0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJywgcG9zdEZvcm1hdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY2hpY2tlbi1wYXJtLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Nvb2tib29rLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9wYW5jYWtlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCAnLi9zY3JpcHRzLmpzJ1xuaW1wb3J0ICcuL2RvbVVwZGF0ZXMuanMnXG5pbXBvcnQgJy4vZmV0Y2hBcGkuanMnXG5cbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcGFuY2FrZXMuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFzb25pbmcucG5nJ1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZFxuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lXG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZVxuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzXG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50c1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9uc1xuICB9XG5cbiAgdXBkYXRlSW5ncmVkaWVudHNJbmZvKGluZ3JlZGllbnRMaXN0KSB7XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgY29uc3QgZm91bmRJdGVtID0gaW5ncmVkaWVudExpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpXG4gICAgICBpbmdyZWRpZW50Lm5hbWUgPSBmb3VuZEl0ZW0ubmFtZVxuICAgICAgaW5ncmVkaWVudC5jb3N0ID0gZm91bmRJdGVtLmVzdGltYXRlZENvc3RJbkNlbnRzXG4gICAgfSlcbiAgfVxuXG4gIGZvcm1hdE5hbWUoKSB7XG4gICAgaWYgKHRoaXMubmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnN1YnN0cmluZygwLCA0MCkgKyAnLi4uJ1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5uYW1lXG4gIH1cbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjaXBlXG4iLCJpbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnXG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSAnLi9mZXRjaEFwaSdcblxuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJ1xuXG5jb25zdCByZWNpcGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLS1jb250YWluZXInKVxuY29uc3Qgc2hvd0FsbFJlY2lwZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXNob3ctYWxsJylcbmNvbnN0IHNhdmVkUmVjaXBlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tc2F2ZWQnKVxuY29uc3QgbXlQYW50cnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXBhbnRyeScpXG5jb25zdCBmaWx0ZXJSZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1maWx0ZXInKVxuY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tZXhpdCcpXG5jb25zdCBzaG9wcGluZ0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXNob3BwaW5nJylcbmNvbnN0IGNvb2tSZWNpcGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWNvb2tlZCcpXG5jb25zdCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtLWluc3RydWN0aW9ucycpXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKVxuY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuY29uc3QgbW9kYWxJbmdyZWRpZW50c01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtLW1lc3NhZ2UtaW5ncmVkaWVudHMnKVxuY29uc3QgbW9kYWxEYXRlTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC0tbWVzc2FnZS1kYXRlJylcbmNvbnN0IG1vZGFsU2hvcHBpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLS1tZXNzYWdlLXNob3BwaW5nJylcbmNvbnN0IG1vZGFsQ29va2VkTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC0tbWVzc2FnZS1jb29rZWQnKVxuY29uc3QgYWxsUmVjaXBlcyA9IFtdXG5sZXQgbWVudU9wZW4gPSBmYWxzZVxubGV0IGN1cnJlbnRVc2VyXG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlc3NFbnRlclNlYXJjaClcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2VhcmNoUmVjaXBlcylcbnNob3dBbGxSZWNpcGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFJlY2lwZXMpXG5zYXZlZFJlY2lwZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2F2ZWRSZWNpcGVzKVxubXlQYW50cnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQYW50cnlEaXNwbGF5KVxuZmlsdGVyUmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbmRDaGVja2VkQm94ZXMpXG5leGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlY2lwZUluc3RydWN0aW9ucylcblxuY29va1JlY2lwZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBjb29rT3JTaG9wUmVjaXBlKG1vZGFsQ29va2VkTWVzc2FnZSwgJ3N1YnRyYWN0JywgZXZlbnQpXG59KVxuXG5zaG9wcGluZ0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgY29va09yU2hvcFJlY2lwZShtb2RhbFNob3BwaW5nTWVzc2FnZSwgJ2FkZCcsIGV2ZW50KVxufSlcblxuLy8gRkVUQ0ggQVBJIERBVEFTRVRTXG5jb25zdCBmZXRjaGVkVXNlckRhdGEgPSBmZXRjaEFwaS5nZXRVc2VyRGF0YSgpXG5jb25zdCBmZXRjaGVkUmVjaXBlRGF0YSA9IGZldGNoQXBpLmdldFJlY2lwZURhdGEoKVxuY29uc3QgZmV0Y2hlZEluZ3JlZGllbnREYXRhID0gZmV0Y2hBcGkuZ2V0SW5ncmVkaWVudHNEYXRhKClcblxuUHJvbWlzZS5hbGwoW2ZldGNoZWRVc2VyRGF0YSwgZmV0Y2hlZFJlY2lwZURhdGEsIGZldGNoZWRJbmdyZWRpZW50RGF0YV0pXG4gIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgZ2VuZXJhdGVVc2VyKHZhbHVlc1swXSlcbiAgICBjcmVhdGVSZWNpcGVEYXRhc2V0KHZhbHVlc1sxXSlcbiAgICBhZGRSZWNpcGVOYW1lQW5kQ29zdCh2YWx1ZXNbMl0pXG4gICAgbG9hZFdlYnNpdGUoKVxuICB9KS5jYXRjaChoYW5kbGVFcnJvck1lc3NhZ2VzKVxuXG5mdW5jdGlvbiBsb2FkV2Vic2l0ZSgpIHtcbiAgY29uc3QgcGFudHJ5ID0gY3VycmVudFVzZXIuYWxwaGFiZXRpemVQYW50cnkoKVxuXG4gIGNyZWF0ZVJlY2lwZUNhcmRzKClcbiAgZG9tVXBkYXRlcy5hZGRQYW50cnlJbmZvVG9Eb20ocGFudHJ5KVxuICBmaW5kVGFncygpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yTWVzc2FnZXMoZXJyb3IpIHtcbiAgd2luZG93LmFsZXJ0KCdUaGUgc2VydmVyIHdhcyBub3QgYWNjZXNzaWJsZSBhdCB0aGlzIHRpbWUuIFBsZWFzZSByZWxvYWQgdGhlIHBhZ2Ugb3IgdHJ5IGFnYWluIGxhdGVyLicpXG4gIGNvbnNvbGUubG9nKGVycm9yKVxufVxuXG4vLyBQT1BVTEFURSBXRUJTSVRFIElORk9STUFUSU9OXG5mdW5jdGlvbiBnZW5lcmF0ZVVzZXIodXNlckRhdGEpIHtcbiAgY3VycmVudFVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1c2VyRGF0YS5sZW5ndGgpXSlcbiAgbGV0IGZpcnN0TmFtZSA9IGN1cnJlbnRVc2VyLm5hbWUuc3BsaXQoJyAnKVswXVxuICBkb21VcGRhdGVzLmFkZFdlbGNvbWVNZXNzYWdlKGZpcnN0TmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVjaXBlRGF0YXNldChyZWNpcGVJbmZvKSB7XG4gIHJlY2lwZUluZm8uZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGNvbnN0IG5ld1JlY2lwZSA9IG5ldyBSZWNpcGUocmVjaXBlKVxuICAgIGFsbFJlY2lwZXMucHVzaChuZXdSZWNpcGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFJlY2lwZU5hbWVBbmRDb3N0KGFsbEluZ3JlZGllbnRzKSB7XG4gIGFsbFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIHJlY2lwZS51cGRhdGVJbmdyZWRpZW50c0luZm8oYWxsSW5ncmVkaWVudHMpXG4gIH0pXG5cbiAgY3VycmVudFVzZXIuYWRkUGFudHJ5SW5ncmVkaWVudE5hbWVzKGFsbEluZ3JlZGllbnRzKVxufVxuXG4vLyBGSU5EIEEgU1BFQ0lGSUMgUkVDSVBFXG5mdW5jdGlvbiBmaW5kUmVjaXBlKHJlY2lwZUlEKSB7XG4gIHJldHVybiBhbGxSZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gTnVtYmVyKHJlY2lwZUlEKSlcbn1cblxuLy8gVVNFUiBQQU5UUlkgRElTUExBWSBBTkQgVVBEQVRFU1xuZnVuY3Rpb24gdXBkYXRlVXNlclBhbnRyeUZyb21SZWNpcGUocmVjaXBlSUQsIHR5cGVNb2RpZmljYXRpb24pIHtcbiAgY29uc3QgdGhpc1JlY2lwZSA9IGZpbmRSZWNpcGUocmVjaXBlSUQpXG4gIGNvbnN0IGFwaUNhbGxzID0gdGhpc1JlY2lwZS5pbmdyZWRpZW50cy5tYXAoaXRlbSA9PiB7XG4gICAgbGV0IGluZ3JlZGllbnRNb2RpZmljYXRpb25WYWx1ZSA9IGl0ZW0ucXVhbnRpdHkuYW1vdW50XG5cbiAgICBpZiAodHlwZU1vZGlmaWNhdGlvbiA9PT0gJ3N1YnRyYWN0Jykge1xuICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvblZhbHVlID0gLWl0ZW0ucXVhbnRpdHkuYW1vdW50XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFBhbnRyeUl0ZW0gPSB7XG4gICAgICB1c2VySUQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgaW5ncmVkaWVudElEOiBpdGVtLmlkLFxuICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvbjogaW5ncmVkaWVudE1vZGlmaWNhdGlvblZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoQXBpLnBvc3RVc2VySW5mb3JtYXRpb24odXBkYXRlZFBhbnRyeUl0ZW0pXG4gIH0pXG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKGFwaUNhbGxzKS5jYXRjaChoYW5kbGVFcnJvck1lc3NhZ2VzKVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVVwZGF0ZWRVc2VyUGFudHJ5KCkge1xuICBjb25zdCB1c2VyUHJvbWlzZSA9IGZldGNoQXBpLmdldFVzZXJEYXRhKClcbiAgdXNlclByb21pc2UudGhlbih1c2VycyA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gY3VycmVudFVzZXIuaWQpXG4gICAgY3VycmVudFVzZXIucGFudHJ5ID0gdXBkYXRlZFVzZXIucGFudHJ5XG4gIH0pXG5cbiAgcmV0dXJuIHVzZXJQcm9taXNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJQYW50cnlEaXNwbGF5KHJlY2lwZUlELCB0eXBlTW9kaWZpY2F0aW9uID0gJ2FkZCcpIHtcbiAgcmV0dXJuIHVwZGF0ZVVzZXJQYW50cnlGcm9tUmVjaXBlKHJlY2lwZUlELCB0eXBlTW9kaWZpY2F0aW9uKVxuICAgIC50aGVuKHJldHJpZXZlVXBkYXRlZFVzZXJQYW50cnkpXG4gICAgLnRoZW4oKCkgPT4gZmV0Y2hlZEluZ3JlZGllbnREYXRhLnRoZW4oaW5ncmVkaWVudHMgPT4ge1xuICAgICAgY3VycmVudFVzZXIuYWRkUGFudHJ5SW5ncmVkaWVudE5hbWVzKGluZ3JlZGllbnRzKVxuICAgIH0pKVxuICAgIC50aGVuKCgpID0+IGRvbVVwZGF0ZXMuYWRkUGFudHJ5SW5mb1RvRG9tKGN1cnJlbnRVc2VyLmFscGhhYmV0aXplUGFudHJ5KCkpKVxufVxuXG4vLyBDUkVBVEUgUkVDSVBFIENBUkRTXG5mdW5jdGlvbiBjcmVhdGVSZWNpcGVDYXJkcygpIHtcbiAgYWxsUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgZG9tVXBkYXRlcy5hZGRDYXJkVG9Eb20ocmVjaXBlLCByZWNpcGUuZm9ybWF0TmFtZSgpKVxuICAgIGNyZWF0ZUNhcmRMaXN0ZW5lcnMoKVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkTGlzdGVuZXJzKCkge1xuICBjb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWNpcGUtLWNhcmQnKVxuICBjb25zdCBjYXJkQXBwbGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tYXBwbGUnKVxuXG4gIGFsbENhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGludGVyYWN0V2l0aFJlY2lwZUNhcmQpXG4gIH0pXG5cbiAgY2FyZEFwcGxlSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmVzc0VudGVyQXBwbGVJY29uKVxuICB9KVxufVxuXG4vLyBGSUxURVIgQlkgUkVDSVBFIFRBR1NcbmZ1bmN0aW9uIGZpbmRUYWdzKCkge1xuICBjb25zdCB0YWdzID0gW11cblxuICBhbGxSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICByZWNpcGUudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBpZiAoIXRhZ3MuaW5jbHVkZXModGFnKSkge1xuICAgICAgICB0YWdzLnB1c2godGFnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgdGFncy5zb3J0KClcbiAgZG9tVXBkYXRlcy5hZGRMaXN0VGFncyh0YWdzKVxuICBhZGRUYWdFdmVudExpc3RlbmVycygpXG59XG5cbmZ1bmN0aW9uIGFkZFRhZ0V2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrZWQtdGFnJylcbiAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB0YWcuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjaGVja1NlbGVjdGVkQm94KSlcbn1cblxuZnVuY3Rpb24gY2hlY2tTZWxlY3RlZEJveChldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBldmVudC50YXJnZXQuY2xpY2soKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGVja2VkQm94ZXMoKSB7XG4gIGNvbnN0IHRhZ0NoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tlZC10YWcnKVxuICBjb25zdCBjaGVja0JveEluZm8gPSBBcnJheS5mcm9tKHRhZ0NoZWNrQm94ZXMpXG5cbiAgY29uc3Qgc2VsZWN0ZWRUYWdzID0gY2hlY2tCb3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZFxuICB9KVxuXG4gIGZpbmRVbnRhZ2dlZFJlY2lwZXMoc2VsZWN0ZWRUYWdzKVxufVxuXG5mdW5jdGlvbiB1bmhpZGVSZWNpcGVDYXJkcygpIHtcbiAgY29uc3QgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjaXBlLS1jYXJkJylcblxuICBhbGxDYXJkcy5mb3JFYWNoKGNhcmQgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSlcbn1cblxuZnVuY3Rpb24gZmluZFVudGFnZ2VkUmVjaXBlcyhzZWxlY3RlZCkge1xuICBjb25zdCBmaWx0ZXJlZFJlY2lwZXMgPSBbXVxuXG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBjb25zdCByZWNpcGVzID0gYWxsUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiAhcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnLmlkKVxuICAgIH0pXG5cbiAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmICghZmlsdGVyZWRSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZpbHRlcmVkUmVjaXBlcylcbn1cblxuZnVuY3Rpb24gaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcykge1xuICB1bmhpZGVSZWNpcGVDYXJkcygpXG4gIGZvdW5kUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgY29uc3QgZG9tUmVjaXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApXG4gICAgZG9tUmVjaXBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0pXG59XG5cbi8vIEZBVk9SSVRFIFJFQ0lQRSBGVU5DVElPTkFMSVRZXG5mdW5jdGlvbiBpbnRlcmFjdFdpdGhSZWNpcGVDYXJkKGV2ZW50KSB7XG4gIGNsZWFySW5zdHJ1Y3Rpb25zQ2FyZCgpXG5cbiAgY29uc3QgY2FyZElkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtLWNhcmQnKS5pZClcbiAgY29uc3QgcmVjaXBlQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJZClcbiAgY29uc3Qgc2VsZWN0ZWRJdGVtQ2xhc3MgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ1dHRvbi1hcHBsZScpXG4gIGxldCBhcHBsZUljb24gPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICBpZiAoIWFwcGxlSWNvbikge1xuICAgIGFwcGxlSWNvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdpbWcnKVxuICB9XG5cbiAgaWYgKHNlbGVjdGVkSXRlbUNsYXNzICYmIGFwcGxlSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3VuZmlsbGVkJykpIHtcbiAgICBhZGRUb0Zhdm9yaXRlcyhjYXJkSWQsIHJlY2lwZUNhcmQsIGFwcGxlSWNvbilcblxuICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbUNsYXNzKSB7XG4gICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhjYXJkSWQsIHJlY2lwZUNhcmQsIGFwcGxlSWNvbilcblxuICB9IGVsc2Uge1xuICAgIG9wZW5SZWNpcGVJbnN0cnVjdGlvbnMoZXZlbnQpXG4gICAgZXhpdEJ1dHRvbi5mb2N1cygpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlc3NFbnRlckFwcGxlSWNvbihldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW50ZXJhY3RXaXRoUmVjaXBlQ2FyZChldmVudClcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb0Zhdm9yaXRlcyhjYXJkSWQsIHJlY2lwZUNhcmQsIGFwcGxlSWNvbikge1xuICBhcHBsZUljb24uc3JjID0gJy4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nJ1xuICBhcHBsZUljb24uY2xhc3NMaXN0LnJlbW92ZSgndW5maWxsZWQnKVxuICByZWNpcGVDYXJkLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlJylcbiAgY3VycmVudFVzZXIuc2F2ZVJlY2lwZShjYXJkSWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvcml0ZXMoY2FyZElkLCByZWNpcGVDYXJkLCBhcHBsZUljb24pIHtcbiAgYXBwbGVJY29uLnNyYyA9ICcuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nJ1xuICBhcHBsZUljb24uY2xhc3NMaXN0LmFkZCgndW5maWxsZWQnKVxuICByZWNpcGVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhdm9yaXRlJylcbiAgY3VycmVudFVzZXIucmVtb3ZlUmVjaXBlKGNhcmRJZClcbn1cblxuZnVuY3Rpb24gc2hvd1NhdmVkUmVjaXBlcygpIHtcbiAgcmVjaXBlQ29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZSA9ICgnZGlzcGxheS1mYXZvcml0ZXMnKVxuICB0b2dnbGVCYW5uZXIoJ25vbmUnLCAnZmxleCcpXG59XG5cbi8vIFJFQ0lQRSBNT0RBTFxuZnVuY3Rpb24gb3BlblJlY2lwZUluc3RydWN0aW9ucyhldmVudCkge1xuICBjb25zdCByZWNpcGVJRCA9IGV2ZW50LnBhdGguZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQpLmlkXG4gIGNvbnN0IHRoaXNSZWNpcGUgPSBmaW5kUmVjaXBlKHJlY2lwZUlEKVxuXG4gIGRldGVybWluZUlmRW5vdWdoSW5ncmVkaWVudHModGhpc1JlY2lwZSlcblxuICBjb29rUmVjaXBlQnV0dG9uLnNldEF0dHJpYnV0ZSgncmVjaXBlSUQnLCByZWNpcGVJRClcbiAgc2hvcHBpbmdMaXN0QnV0dG9uLnNldEF0dHJpYnV0ZSgncmVjaXBlSUQnLCByZWNpcGVJRClcblxuICBpZiAoY3VycmVudFVzZXIuZmluZENvb2tlZERhdGUocmVjaXBlSUQpKSB7XG4gICAgZGlzcGxheUNvb2tlZERhdGUocmVjaXBlSUQpXG4gIH1cblxuICBkb21VcGRhdGVzLmdlbmVyYXRlUmVjaXBlSW5zdHJ1Y3Rpb25zKHRoaXNSZWNpcGUpXG4gIGRvbVVwZGF0ZXMuZ2VuZXJhdGVSZWNpcGVJbmdyZWRpZW50cyh0aGlzUmVjaXBlKVxuICBtb2RhbE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbn1cblxuZnVuY3Rpb24gZXhpdFJlY2lwZUluc3RydWN0aW9ucygpIHtcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBtb2RhbE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBtb2RhbERhdGVNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICBjbGVhckluc3RydWN0aW9uc0NhcmQoKVxufVxuXG5mdW5jdGlvbiBjbGVhckluc3RydWN0aW9uc0NhcmQoKSB7XG4gIGRvbVVwZGF0ZXMuY2xlYXJSZWNpcGVJbnN0cnVjdGlvbnMoKVxuICBkb21VcGRhdGVzLmNsZWFyU2hvcHBpbmdMaXN0KClcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvb2tlZERhdGUocmVjaXBlSUQpIHtcbiAgY29uc3QgY29va0RhdGUgPSBjdXJyZW50VXNlci5maW5kQ29va2VkRGF0ZShyZWNpcGVJRCkudG9EYXRlU3RyaW5nKClcblxuICBpZiAoY29va0RhdGUpIHtcbiAgICBtb2RhbERhdGVNZXNzYWdlLmlubmVyVGV4dCA9IGBMYXN0IGNvb2tlZCBvbjogJHtjb29rRGF0ZX1gXG4gICAgbW9kYWxEYXRlTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb29rZWREYXRlKHJlY2lwZUlEKSB7XG4gIGNvbnN0IHRpbWVFbGFwc2VkID0gRGF0ZS5ub3coKVxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHRpbWVFbGFwc2VkKVxuXG4gIGN1cnJlbnRVc2VyLnNhdmVDb29rZWRSZWNpcGUocmVjaXBlSUQsIHRvZGF5KVxuICBkaXNwbGF5Q29va2VkRGF0ZShyZWNpcGVJRClcbn1cblxuZnVuY3Rpb24gY29va09yU2hvcFJlY2lwZShtZXNzYWdlVHlwZSwgbW9kaWZpY2F0aW9uLCBldmVudCkge1xuICBtZXNzYWdlVHlwZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgbWVzc2FnZVR5cGUuc3R5bGUub3BhY2l0eSA9IDFcblxuICBjb25zdCByZWNpcGVJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JlY2lwZUlEJylcbiAgY29uc3QgY3VycmVudFJlY2lwZSA9IGZpbmRSZWNpcGUocmVjaXBlSUQpXG5cbiAgdXBkYXRlVXNlclBhbnRyeURpc3BsYXkocmVjaXBlSUQsIG1vZGlmaWNhdGlvbilcbiAgICAudGhlbigoKSA9PiB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2VUeXBlLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICB9LCAxNTAwKVxuXG4gICAgICBpZiAobW9kaWZpY2F0aW9uID09PSAnc3VidHJhY3QnKSB7XG4gICAgICAgIHVwZGF0ZUNvb2tlZERhdGUocmVjaXBlSUQpXG4gICAgICAgIGRldGVybWluZUlmRW5vdWdoSW5ncmVkaWVudHMoY3VycmVudFJlY2lwZSlcbiAgICAgICAgc2hvcHBpbmdMaXN0QnV0dG9uLmZvY3VzKClcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tVXBkYXRlcy5jbGVhclNob3BwaW5nTGlzdCgpXG4gICAgICAgIG1vZGFsSW5ncmVkaWVudHNNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgc2V0TW9kYWxCdXR0b25EaXNwbGF5KCdibG9jaycsICdub25lJylcbiAgICAgICAgY29va1JlY2lwZUJ1dHRvbi5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2V0TW9kYWxCdXR0b25EaXNwbGF5KGNvb2tSZWNpcGVTdGF0ZSwgc2hvcFJlY2lwZVN0YXRlKSB7XG4gIGNvb2tSZWNpcGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IGNvb2tSZWNpcGVTdGF0ZVxuICBzaG9wcGluZ0xpc3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IHNob3BSZWNpcGVTdGF0ZVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVJZkVub3VnaEluZ3JlZGllbnRzKHNlbGVjdGVkUmVjaXBlKSB7XG4gIGNvbnN0IHNob3BwaW5nTGlzdCA9IFtdXG4gIHNlbGVjdGVkUmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2gocmVjaXBlSXRlbSA9PiB7XG4gICAgY29uc3QgdXNlckl0ZW0gPSBjdXJyZW50VXNlci5wYW50cnkuZmluZChpdGVtID0+IGl0ZW0uaW5ncmVkaWVudCA9PT0gcmVjaXBlSXRlbS5pZClcblxuICAgIGNvbnN0IGxpc3RJdGVtID0ge1xuICAgICAgbmFtZTogZG9tVXBkYXRlcy5sb3dlckNhc2UocmVjaXBlSXRlbS5uYW1lKSxcbiAgICAgIHF1YW50aXR5OiBkb21VcGRhdGVzLmZvcm1hdFF1YW50aXR5KHJlY2lwZUl0ZW0ucXVhbnRpdHkuYW1vdW50KSxcbiAgICAgIHVuaXQ6IHJlY2lwZUl0ZW0ucXVhbnRpdHkudW5pdCxcbiAgICAgIGNvc3Q6IHJlY2lwZUl0ZW0uY29zdC50b0ZpeGVkKDIpXG4gICAgfVxuXG4gICAgaWYgKCF1c2VySXRlbSkge1xuICAgICAgc2hvcHBpbmdMaXN0LnB1c2gobGlzdEl0ZW0pXG5cbiAgICB9IGVsc2UgaWYgKHVzZXJJdGVtKSB7XG4gICAgICBjb25zdCBxdWFudGl0eU5lZWRlZCA9IHJlY2lwZUl0ZW0ucXVhbnRpdHkuYW1vdW50IC0gdXNlckl0ZW0uYW1vdW50XG5cbiAgICAgIGlmIChxdWFudGl0eU5lZWRlZCA+IDApIHtcbiAgICAgICAgbGlzdEl0ZW0ucXVhbnRpdHkgPSBkb21VcGRhdGVzLmZvcm1hdFF1YW50aXR5KHF1YW50aXR5TmVlZGVkKVxuICAgICAgICBzaG9wcGluZ0xpc3QucHVzaChsaXN0SXRlbSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgaWYgKHNob3BwaW5nTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5U2hvcHBpbmdMaXN0KHNob3BwaW5nTGlzdClcbiAgICBtb2RhbEluZ3JlZGllbnRzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICBzZXRNb2RhbEJ1dHRvbkRpc3BsYXkoJ25vbmUnLCAnYmxvY2snKVxuXG4gIH0gZWxzZSB7XG4gICAgbW9kYWxJbmdyZWRpZW50c01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHNldE1vZGFsQnV0dG9uRGlzcGxheSgnYmxvY2snLCAnbm9uZScpXG4gIH1cbn1cblxuLy8gVE9HR0xFIERJU1BMQVlTXG5mdW5jdGlvbiB0b2dnbGVCYW5uZXIobWVzc2FnZUJhbm5lciwgcmVjaXBlQmFubmVyKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXItLW1lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gbWVzc2FnZUJhbm5lclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyLS1yZWNpcGVzJykuc3R5bGUuZGlzcGxheSA9IHJlY2lwZUJhbm5lclxufVxuXG4vLyBTRUFSQ0ggUkVDSVBFU1xuZnVuY3Rpb24gcHJlc3NFbnRlclNlYXJjaChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIHNlYXJjaFJlY2lwZXMoKVxufVxuXG5mdW5jdGlvbiBzZWFyY2hSZWNpcGVzKCkge1xuICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKClcblxuICBjb25zdCBmaWx0ZXJlZEJ5TmFtZSA9IGFsbFJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiAhbmFtZS5pbmNsdWRlcyh2YWx1ZSlcbiAgfSlcblxuICBjb25zdCBmaWx0ZXJlZEJ5SW5ncmVkaWVudCA9IGZpbHRlcmVkQnlOYW1lLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiAhcmVjaXBlLmluZ3JlZGllbnRzLnNvbWUoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkpXG4gIH0pXG5cbiAgaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZpbHRlcmVkQnlJbmdyZWRpZW50KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQYW50cnlEaXNwbGF5KCkge1xuICBjb25zdCBtZW51RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYW50cnknKVxuICBtZW51T3BlbiA9ICFtZW51T3BlblxuXG4gIGlmIChtZW51T3Blbikge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9IGVsc2Uge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FsbFJlY2lwZXMoKSB7XG4gIGFsbFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YClcbiAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSlcblxuICByZWNpcGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mYXZvcml0ZXMnKVxuICB0b2dnbGVCYW5uZXIoJ2Jsb2NrJywgJ25vbmUnKVxufVxuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZFxuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZVxuICAgIHRoaXMucGFudHJ5ID0gdXNlci5wYW50cnlcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdXG4gICAgdGhpcy5jb29rZWRSZWNpcGVzID0gW11cbiAgfVxuXG4gIHNhdmVSZWNpcGUocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICB9XG4gIH1cblxuICByZW1vdmVSZWNpcGUocmVjaXBlKSB7XG4gICAgaWYgKHJlY2lwZSkge1xuICAgICAgbGV0IGkgPSB0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmRleE9mKHJlY2lwZSlcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxuXG4gIGFkZFBhbnRyeUluZ3JlZGllbnROYW1lcyhpbmdyZWRpZW50TGlzdCkge1xuICAgIHRoaXMucGFudHJ5LmZvckVhY2gocGFudHJ5SXRlbSA9PiB7XG4gICAgICBjb25zdCBmb3VuZEl0ZW0gPSBpbmdyZWRpZW50TGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFudHJ5SXRlbS5pbmdyZWRpZW50KVxuICAgICAgcGFudHJ5SXRlbS5uYW1lID0gZm91bmRJdGVtLm5hbWVcbiAgICB9KVxuICB9XG5cbiAgYWxwaGFiZXRpemVQYW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFudHJ5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gMVxuXG4gICAgICB9IGVsc2UgaWYgKGEubmFtZSA8IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZmluZENvb2tlZFJlY2lwZShyZWNpcGVJRCkge1xuICAgIHJldHVybiB0aGlzLmNvb2tlZFJlY2lwZXMuZmluZChpID0+IGkuaWQgPT09IHJlY2lwZUlEKVxuICB9XG5cbiAgc2F2ZUNvb2tlZFJlY2lwZShyZWNpcGVJRCwgY29va0RhdGUpIHtcbiAgICBjb25zdCByZWNpcGUgPSB7XG4gICAgICBpZDogcmVjaXBlSUQsXG4gICAgICBkYXRlOiBjb29rRGF0ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbmRDb29rZWRSZWNpcGUocmVjaXBlSUQpKSB7XG4gICAgICB0aGlzLmZpbmRDb29rZWRSZWNpcGUocmVjaXBlSUQpLmRhdGUgPSBjb29rRGF0ZVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29va2VkUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICB9XG4gIH1cblxuICBmaW5kQ29va2VkRGF0ZShyZWNpcGVJRCkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHRoaXMuZmluZENvb2tlZFJlY2lwZShyZWNpcGVJRClcblxuICAgIGlmIChyZWNpcGUpIHtcbiAgICAgIHJldHVybiByZWNpcGUuZGF0ZVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=