/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/custom/ui-palette.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/custom/ui-palette.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.primary.contained {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.primary.contained:hover {
  background-color: var(--color-primary-light);
}

.primary.outlined {
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-primary);
}`, "",{"version":3,"sources":["webpack://./src/custom/ui-palette.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kCAAkC;AACpC","sourcesContent":[".primary.contained {\n  background-color: var(--color-primary);\n  color: var(--color-primary-contrast);\n}\n\n.primary.contained:hover {\n  background-color: var(--color-primary-light);\n}\n\n.primary.outlined {\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--color-primary);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/custom/ui-theme.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/custom/ui-theme.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 16px;
}

:root {

  /* Typography */

  --typography-h1-size: 4rem;
  --typography-h2-size: 2rem;
  --typography-body1-size: 1rem;
  --typography-body2-size: 0.75rem;
  --typography-inputlabel-size: 0.75rem;



  /* Colors */

  --color-bg: var(--figma-color-bg);

  --color-primary: var(--figma-color-icon);
  --color-primary-light: var(--figma-color-icon-secondary);
  --color-primary-dark: var(--figma-color-icon);
  --color-primary-contrast: var(--figma-color-text-oninverse);

  --color-secondary: var(--figma-color-icon-secondary);

  --color-tertiary: color-mix(in srgb, var(--figma-color-bg-tertiary) 50%, var(--color-bg));

  --color-text-primary: var(--figma-color-text);
  --color-text-secondary: var(--figma-color-text-secondary);
  --color-text-disabled: var(--figma-color-text-disabled);

  --color-error: var(--figma-color-text-danger);



  /* Border */

  --border-divider: 1px solid var(--figma-color-border);



  /* Border radius */

  --border-radius-medium: 0.125rem;


  
  /* Animation */

  --animation-fast: all 0.15s cubic-bezier(0.3, 0, 0.4, 1);
  --animation-medium: all 0.25s cubic-bezier(0.3, 0, 0.4, 1);

}`, "",{"version":3,"sources":["webpack://./src/custom/ui-theme.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;EAEE,eAAe;;EAEf,0BAA0B;EAC1B,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,qCAAqC;;;;EAIrC,WAAW;;EAEX,iCAAiC;;EAEjC,wCAAwC;EACxC,wDAAwD;EACxD,6CAA6C;EAC7C,2DAA2D;;EAE3D,oDAAoD;;EAEpD,yFAAyF;;EAEzF,6CAA6C;EAC7C,yDAAyD;EACzD,uDAAuD;;EAEvD,6CAA6C;;;;EAI7C,WAAW;;EAEX,qDAAqD;;;;EAIrD,kBAAkB;;EAElB,gCAAgC;;;;EAIhC,cAAc;;EAEd,wDAAwD;EACxD,0DAA0D;;AAE5D","sourcesContent":["html {\n  font-size: 16px;\n}\n\n:root {\n\n  /* Typography */\n\n  --typography-h1-size: 4rem;\n  --typography-h2-size: 2rem;\n  --typography-body1-size: 1rem;\n  --typography-body2-size: 0.75rem;\n  --typography-inputlabel-size: 0.75rem;\n\n\n\n  /* Colors */\n\n  --color-bg: var(--figma-color-bg);\n\n  --color-primary: var(--figma-color-icon);\n  --color-primary-light: var(--figma-color-icon-secondary);\n  --color-primary-dark: var(--figma-color-icon);\n  --color-primary-contrast: var(--figma-color-text-oninverse);\n\n  --color-secondary: var(--figma-color-icon-secondary);\n\n  --color-tertiary: color-mix(in srgb, var(--figma-color-bg-tertiary) 50%, var(--color-bg));\n\n  --color-text-primary: var(--figma-color-text);\n  --color-text-secondary: var(--figma-color-text-secondary);\n  --color-text-disabled: var(--figma-color-text-disabled);\n\n  --color-error: var(--figma-color-text-danger);\n\n\n\n  /* Border */\n\n  --border-divider: 1px solid var(--figma-color-border);\n\n\n\n  /* Border radius */\n\n  --border-radius-medium: 0.125rem;\n\n\n  \n  /* Animation */\n\n  --animation-fast: all 0.15s cubic-bezier(0.3, 0, 0.4, 1);\n  --animation-medium: all 0.25s cubic-bezier(0.3, 0, 0.4, 1);\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/blocks/block.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/ui/blocks/block.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Block */

.block {
  width: 100%;

  display: flex;
  flex-direction: column;
  /* row-gap: 0.5rem; */

  border-bottom: 1px solid var(--color-secondary);
}

.block:last-of-type {
  border-bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/library/ui/blocks/block.css"],"names":[],"mappings":"AAAA,UAAU;;AAEV;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,qBAAqB;;EAErB,+CAA+C;AACjD;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["/* Block */\n\n.block {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  /* row-gap: 0.5rem; */\n\n  border-bottom: 1px solid var(--color-secondary);\n}\n\n.block:last-of-type {\n  border-bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/button/button.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/button/button.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Button */


.component.button.medium {
  padding: 1rem;

  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  border-radius: var(--border-radius-medium);
}

.component.button .label {
  width: 100%;

  text-align: center;
  font-size: var(--typography-body2-size) !important;

  color: inherit;
}`, "",{"version":3,"sources":["webpack://./src/library/ui/components/button/button.css"],"names":[],"mappings":"AAAA,WAAW;;;AAGX;EACE,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,eAAe;;EAEf,0CAA0C;AAC5C;;AAEA;EACE,WAAW;;EAEX,kBAAkB;EAClB,kDAAkD;;EAElD,cAAc;AAChB","sourcesContent":["/* Button */\n\n\n.component.button.medium {\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n\n  border-radius: var(--border-radius-medium);\n}\n\n.component.button .label {\n  width: 100%;\n\n  text-align: center;\n  font-size: var(--typography-body2-size) !important;\n\n  color: inherit;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/checkbox/checkbox.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/checkbox/checkbox.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* TextField */


.component.checkbox {
  width: 100%;

  display: flex;
  flex-direction: row;
  column-gap: 0.75rem;

  border-bottom: var(--border-divider);
}

.component.checkbox:last-of-type {
  border-bottom: 0;
}

.component.checkbox.medium {
  padding: 0.5rem 0.75rem;
  min-height: 3rem;
}

.component.checkbox.large {
  padding: 0.75rem;
  min-height: 3.5rem;
}



/* Checkbox */

.component.checkbox .toggle {
  min-height: 100%;
  overflow: hidden;

  position: relative;

  display: flexbox;
  align-items: stretch;
  justify-content: center;

  background-color: var(--color-tertiary);

  border-radius: var(--border-radius-medium);
}

.component.checkbox.medium .toggle {
  min-width: 1.25rem;
  margin: 0.3rem 0;
}

.component.checkbox.large .toggle {
  min-width: 1.75rem;
  margin: 0;
}

.component.checkbox .toggle .fill {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;

  background-color: var(--color-primary);

  transition: var(--animation-fast);
}

.component.checkbox .toggle .tick {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(calc(20/24));
}



/* Text */

.component.checkbox .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  padding: 0 0.25rem;
}



/* Primary text */

.component.checkbox .text .primary {
  color: var(--color-text-primary);
  font-size: var(--typography-body2-size);
}



/* Secondary text */

.component.checkbox .text .secondary {
  color: var(--color-text-secondary);
  font-size: var(--typography-body2-size);
}

.component.checkbox .text .secondary.hidden {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/library/ui/components/checkbox/checkbox.css"],"names":[],"mappings":"AAAA,cAAc;;;AAGd;EACE,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;;EAEnB,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;;;AAIA,aAAa;;AAEb;EACE,gBAAgB;EAChB,gBAAgB;;EAEhB,kBAAkB;;EAElB,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;;EAEvB,uCAAuC;;EAEvC,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;;EAEhC,kBAAkB;;EAElB,sCAAsC;;EAEtC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,mDAAmD;AACrD;;;;AAIA,SAAS;;AAET;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;;EAEpB,kBAAkB;AACpB;;;;AAIA,iBAAiB;;AAEjB;EACE,gCAAgC;EAChC,uCAAuC;AACzC;;;;AAIA,mBAAmB;;AAEnB;EACE,kCAAkC;EAClC,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* TextField */\n\n\n.component.checkbox {\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  column-gap: 0.75rem;\n\n  border-bottom: var(--border-divider);\n}\n\n.component.checkbox:last-of-type {\n  border-bottom: 0;\n}\n\n.component.checkbox.medium {\n  padding: 0.5rem 0.75rem;\n  min-height: 3rem;\n}\n\n.component.checkbox.large {\n  padding: 0.75rem;\n  min-height: 3.5rem;\n}\n\n\n\n/* Checkbox */\n\n.component.checkbox .toggle {\n  min-height: 100%;\n  overflow: hidden;\n\n  position: relative;\n\n  display: flexbox;\n  align-items: stretch;\n  justify-content: center;\n\n  background-color: var(--color-tertiary);\n\n  border-radius: var(--border-radius-medium);\n}\n\n.component.checkbox.medium .toggle {\n  min-width: 1.25rem;\n  margin: 0.3rem 0;\n}\n\n.component.checkbox.large .toggle {\n  min-width: 1.75rem;\n  margin: 0;\n}\n\n.component.checkbox .toggle .fill {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 50%;\n\n  background-color: var(--color-primary);\n\n  transition: var(--animation-fast);\n}\n\n.component.checkbox .toggle .tick {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(calc(20/24));\n}\n\n\n\n/* Text */\n\n.component.checkbox .text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n\n  padding: 0 0.25rem;\n}\n\n\n\n/* Primary text */\n\n.component.checkbox .text .primary {\n  color: var(--color-text-primary);\n  font-size: var(--typography-body2-size);\n}\n\n\n\n/* Secondary text */\n\n.component.checkbox .text .secondary {\n  color: var(--color-text-secondary);\n  font-size: var(--typography-body2-size);\n}\n\n.component.checkbox .text .secondary.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/textfield/textfield.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/textfield/textfield.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* TextField */


.component.textfield {
  padding: 0.75rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  border-bottom: var(--border-divider);
}

.component.textfield:last-of-type {
  border-bottom: 0;
}



/* Label */

.component.textfield .label {
  width: 100%;

  padding-top: 0.5rem;

  font-size: var(--typography-inputlabel-size) !important;
}

.component.textfield .suffixlabel {
  flex-shrink: 10;

  text-align: right;
  font-size: var(--typography-inputlabel-size) !important;
  color: var(--color-text-secondary);
}



/* Input wrapper */

.component.textfield .inputwrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}



/* Input */

input {
  margin: 0;
  width: 100%;

  outline: none;
  border: 0;
  background-color: var(--color-bg);
  color: var(--color-text-primary);

  box-sizing: border-box;
}

input.small {
  height: 2rem;

  font-size: var(--typography-body1-size) !important;
}

input.medium {
  height: 3rem;

  font-size: var(--typography-h2-size) !important;
  letter-spacing: -0.03em;
}

input.large {
  height: 5rem;

  font-size: var(--typography-h1-size) !important;
  letter-spacing: -0.06em;
}

input.disabled {
  color: var(--color-text-disabled);
}



/* Helper texts */

.component.textfield .helpertext {
  width: 100%;
  height: 1rem;
  box-sizing: border-box;

  display: flex;
  align-items: flex-end;

  font-size: var(--typography-inputlabel-size) !important;
  color: var(--color-text-secondary);

  transition: var(--animation-medium);
}

.component.textfield .helpertext.error {
  color: var(--color-error);
}

.component.textfield .helpertext.hidden {
  height: 1px;
}`, "",{"version":3,"sources":["webpack://./src/library/ui/components/textfield/textfield.css"],"names":[],"mappings":"AAAA,cAAc;;;AAGd;EACE,gBAAgB;EAChB,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,eAAe;;EAEf,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;;;AAIA,UAAU;;AAEV;EACE,WAAW;;EAEX,mBAAmB;;EAEnB,uDAAuD;AACzD;;AAEA;EACE,eAAe;;EAEf,iBAAiB;EACjB,uDAAuD;EACvD,kCAAkC;AACpC;;;;AAIA,kBAAkB;;AAElB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;;;AAIA,UAAU;;AAEV;EACE,SAAS;EACT,WAAW;;EAEX,aAAa;EACb,SAAS;EACT,iCAAiC;EACjC,gCAAgC;;EAEhC,sBAAsB;AACxB;;AAEA;EACE,YAAY;;EAEZ,kDAAkD;AACpD;;AAEA;EACE,YAAY;;EAEZ,+CAA+C;EAC/C,uBAAuB;AACzB;;AAEA;EACE,YAAY;;EAEZ,+CAA+C;EAC/C,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;AACnC;;;;AAIA,iBAAiB;;AAEjB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;;EAEtB,aAAa;EACb,qBAAqB;;EAErB,uDAAuD;EACvD,kCAAkC;;EAElC,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb","sourcesContent":["/* TextField */\n\n\n.component.textfield {\n  padding: 0.75rem;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n\n  border-bottom: var(--border-divider);\n}\n\n.component.textfield:last-of-type {\n  border-bottom: 0;\n}\n\n\n\n/* Label */\n\n.component.textfield .label {\n  width: 100%;\n\n  padding-top: 0.5rem;\n\n  font-size: var(--typography-inputlabel-size) !important;\n}\n\n.component.textfield .suffixlabel {\n  flex-shrink: 10;\n\n  text-align: right;\n  font-size: var(--typography-inputlabel-size) !important;\n  color: var(--color-text-secondary);\n}\n\n\n\n/* Input wrapper */\n\n.component.textfield .inputwrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n\n\n/* Input */\n\ninput {\n  margin: 0;\n  width: 100%;\n\n  outline: none;\n  border: 0;\n  background-color: var(--color-bg);\n  color: var(--color-text-primary);\n\n  box-sizing: border-box;\n}\n\ninput.small {\n  height: 2rem;\n\n  font-size: var(--typography-body1-size) !important;\n}\n\ninput.medium {\n  height: 3rem;\n\n  font-size: var(--typography-h2-size) !important;\n  letter-spacing: -0.03em;\n}\n\ninput.large {\n  height: 5rem;\n\n  font-size: var(--typography-h1-size) !important;\n  letter-spacing: -0.06em;\n}\n\ninput.disabled {\n  color: var(--color-text-disabled);\n}\n\n\n\n/* Helper texts */\n\n.component.textfield .helpertext {\n  width: 100%;\n  height: 1rem;\n  box-sizing: border-box;\n\n  display: flex;\n  align-items: flex-end;\n\n  font-size: var(--typography-inputlabel-size) !important;\n  color: var(--color-text-secondary);\n\n  transition: var(--animation-medium);\n}\n\n.component.textfield .helpertext.error {\n  color: var(--color-error);\n}\n\n.component.textfield .helpertext.hidden {\n  height: 1px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/ui/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_ui_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../custom/ui-theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/custom/ui-theme.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_ui_palette_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../custom/ui-palette.css */ "./node_modules/css-loader/dist/cjs.js!./src/custom/ui-palette.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_block_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./blocks/block.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/blocks/block.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_textfield_textfield_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./components/textfield/textfield.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/textfield/textfield.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./components/checkbox/checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/checkbox/checkbox.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_button_button_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./components/button/button.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/components/button/button.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_custom_ui_theme_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_custom_ui_palette_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_block_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_textfield_textfield_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_button_button_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Theme */


/* Blocks */


/* Components */



body, div, input {
  box-sizing: border-box;
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  color: var(--figma-color-text);

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  overflow-x: hidden;
}


/* Disable event capturing in icon SVGs */

.icon {
  pointer-events: none;
}



/* Fill or hug */

.fillContainer {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/library/ui/main.css"],"names":[],"mappings":"AAAA,UAAU;;;AAMV,WAAW;;;AAKX,eAAe;;;;AAQf;EACE,sBAAsB;EACtB,SAAS;EACT,qGAAqG;EACrG,kBAAkB;EAClB,8BAA8B;;EAE9B,yBAAyB;EACzB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;;AAGA,yCAAyC;;AAEzC;EACE,oBAAoB;AACtB;;;;AAIA,gBAAgB;;AAEhB;EACE,WAAW;AACb","sourcesContent":["/* Theme */\n\n@import \"../../custom/ui-theme.css\";\n@import \"../../custom/ui-palette.css\";\n\n\n/* Blocks */\n\n@import \"./blocks/block.css\";\n\n\n/* Components */\n\n@import \"./components/textfield/textfield.css\";\n@import \"./components/checkbox/checkbox.css\";\n@import \"./components/button/button.css\";\n\n\n\nbody, div, input {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: Inter, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.75rem;\n  color: var(--figma-color-text);\n\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\n\n/* Disable event capturing in icon SVGs */\n\n.icon {\n  pointer-events: none;\n}\n\n\n\n/* Fill or hug */\n\n.fillContainer {\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/library/console-theme.ts":
/*!**************************************!*\
  !*** ./src/library/console-theme.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   primary: () => (/* binding */ primary),
/* harmony export */   secondary: () => (/* binding */ secondary)
/* harmony export */ });
const primary = "color: #9747FF;";
const secondary = "color: #C191FF;";
const error = "color: #f30;";


/***/ }),

/***/ "./src/library/ui/blocks/userinput.ts":
/*!********************************************!*\
  !*** ./src/library/ui/blocks/userinput.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInput: () => (/* binding */ UserInput)
/* harmony export */ });
/* harmony import */ var _system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/types */ "./src/library/ui/system/types.ts");
/* Types */ 
class UserInput extends _system_types__WEBPACK_IMPORTED_MODULE_0__.UIBlock {
    constructor(nodes) {
        super(nodes);
    }
    // Adds an input child.
    addInputComponent(nodes) {
        this.addChildren(nodes);
    }
    // Gets all input from children form components.
    getAllInput() {
        // Set up the result.
        let formInput = {};
        // Loop through ValidNodes.
        let nodeNames = Object.keys(this.children);
        for (let name of nodeNames) {
            let child = this.children[name];
            if (child instanceof _system_types__WEBPACK_IMPORTED_MODULE_0__.UIFormComponent)
                formInput[name] = child.getInput();
        }
        return formInput;
    }
}


/***/ }),

/***/ "./src/library/ui/components/button/button.ts":
/*!****************************************************!*\
  !*** ./src/library/ui/components/button/button.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../system/types */ "./src/library/ui/system/types.ts");
/* Types */ 
class Button extends _system_types__WEBPACK_IMPORTED_MODULE_0__.UIComponent {
    constructor(variant, color, size, label, callback, options) {
        super();
        this.label = document.createElement("div");
        if (options === null || options === void 0 ? void 0 : options.suffixIcon)
            this.suffixIcon = document.createElement("div");
        // Component div.
        this.component.classList.add("component", "button", variant, color, size, "enabled");
        if (options === null || options === void 0 ? void 0 : options.hug)
            this.component.classList.add(options.hug);
        // Label.
        this.label.classList.add("label");
        this.label.innerText = label;
        // Append all.
        this.component.appendChild(this.label);
        if (this.suffixIcon)
            this.component.appendChild(this.suffixIcon);
        this.component.addEventListener("click", (e) => { callback(e); });
        this.state = "enabled";
    }
    error() {
        this.component.classList.remove(this.state);
        this.component.classList.add("error");
        this.state = "error";
    }
    disable() {
        this.component.classList.remove(this.state);
        this.component.classList.add("disabled");
        this.state = "disabled";
    }
    enable() {
        this.component.classList.remove(this.state);
        this.component.classList.add("enabled");
        this.state = "enabled";
    }
}


/***/ }),

/***/ "./src/library/ui/components/checkbox/checkbox.ts":
/*!********************************************************!*\
  !*** ./src/library/ui/components/checkbox/checkbox.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../system/types */ "./src/library/ui/system/types.ts");
/* harmony import */ var _helpers_create_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/create-svg */ "./src/library/ui/helpers/create-svg.ts");
/* Types */ 
/* Helpers */ 
class Checkbox extends _system_types__WEBPACK_IMPORTED_MODULE_0__.UIFormComponent {
    constructor(options) {
        super();
        // Component div.
        this.component.classList.add("component", "checkbox", options.size);
        // Checkbox.
        this.checkbox = document.createElement("div");
        this.checkbox.classList.add("toggle");
        let fill = document.createElement("div");
        fill.classList.add("fill");
        fill.style.width = "0";
        fill.style.height = "0";
        this.fillDiameter = 0;
        let tick = _helpers_create_svg__WEBPACK_IMPORTED_MODULE_1__.icon(24, 24, "M19.0694 6.9881L9.54236 18.103L4.96967 13.5303L6.03033 12.4697L9.45763 15.897L17.9306 6.01191L19.0694 6.9881Z", "var(--color-tertiary)");
        tick.classList.add("tick", "icon");
        // Text for checkbox.
        let primary = document.createElement("div");
        primary.classList.add("primary");
        primary.textContent = options.primaryText;
        let secondary = document.createElement("div");
        secondary.classList.add("secondary");
        if (!options.secondaryText)
            secondary.classList.add("hidden");
        this.text = document.createElement("div");
        this.text.classList.add("text");
        this.text.appendChild(primary);
        this.text.appendChild(secondary);
        this.text.appendChild(this.helperText);
        // Append.
        this.checkbox.appendChild(fill);
        this.checkbox.appendChild(tick);
        this.component.appendChild(this.checkbox);
        this.component.appendChild(this.text);
        // State and listeners.
        this.checked = false;
        this.component.addEventListener("mousedown", (e) => {
            if (this.checked)
                this.uncheck();
            else
                this.check();
        });
        // Set up input retrieval.
        this.getInput = () => {
            return this.checked;
        };
    }
    getFillDiameter() {
        return Math.sqrt(this.checkbox.offsetHeight * this.checkbox.offsetHeight + this.checkbox.offsetWidth * this.checkbox.offsetWidth);
    }
    check() {
        // If the fill diameter has not been calculated yet as the component is not yet appended to the DOM.
        if (this.fillDiameter === 0)
            this.fillDiameter = this.getFillDiameter();
        let fill = this.checkbox.children[0];
        fill.style.width = `${String(this.fillDiameter)}px`;
        fill.style.height = `${String(this.fillDiameter)}px`;
        let tick = this.checkbox.children[1];
        tick.style.fill = "var(--color-bg)";
        this.checked = true;
    }
    uncheck() {
        let fill = this.checkbox.children[0];
        fill.style.width = "0";
        fill.style.height = "0";
        let tick = this.checkbox.children[1];
        tick.style.fill = "var(--color-tertiary)";
        this.checked = false;
    }
    updatePrimaryText(text) {
        let primaryText = this.text.children[0];
        primaryText.textContent = text;
        this.fillDiameter = this.getFillDiameter();
    }
    updateSecondaryText(text) {
        let secondaryText = this.text.children[1];
        secondaryText.textContent = text;
        if (text.length === 0)
            secondaryText.classList.add("hidden");
        else
            secondaryText.classList.remove("hidden");
        this.fillDiameter = this.getFillDiameter();
    }
}


/***/ }),

/***/ "./src/library/ui/helpers/create-svg.ts":
/*!**********************************************!*\
  !*** ./src/library/ui/helpers/create-svg.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icon: () => (/* binding */ icon)
/* harmony export */ });
function icon(width, height, d, fill) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("style", `fill: ${fill};`);
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", d);
    svg.appendChild(path);
    return svg;
}


/***/ }),

/***/ "./src/library/ui/system/core.ts":
/*!***************************************!*\
  !*** ./src/library/ui/system/core.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI),
/* harmony export */   toPlugin: () => (/* binding */ toPlugin)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/library/ui/system/types.ts");
/* Types */ 
class UI {
    constructor() {
        // Log to console for debugging.
        console.log("%cUI created.", "color: #ccc");
        let insertionPoint = document.getElementById("ui");
        this.panel = insertionPoint;
        console.log(this.panel);
    }
    append(nodes) {
        // Append elements to a fragment before appending to the UI.
        let fragment = document.createDocumentFragment();
        for (let node of nodes) {
            if (node instanceof _types__WEBPACK_IMPORTED_MODULE_0__.UIBlock || node instanceof _types__WEBPACK_IMPORTED_MODULE_0__.UIComponent)
                fragment.appendChild(node.node());
            else
                fragment.appendChild(node);
        }
        this.panel.appendChild(fragment);
    }
}
// Send message to the plugin.
function toPlugin(message) {
    parent.postMessage({ pluginMessage: message }, '*');
}


/***/ }),

/***/ "./src/library/ui/system/types.ts":
/*!****************************************!*\
  !*** ./src/library/ui/system/types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIBlock: () => (/* binding */ UIBlock),
/* harmony export */   UIComponent: () => (/* binding */ UIComponent),
/* harmony export */   UIContainer: () => (/* binding */ UIContainer),
/* harmony export */   UIFormComponent: () => (/* binding */ UIFormComponent),
/* harmony export */   UIFragment: () => (/* binding */ UIFragment)
/* harmony export */ });
/* harmony import */ var _console_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../console-theme */ "./src/library/console-theme.ts");
/* System */ 
// Generic component class that all UIComponents are extended from.
class UIComponent {
    constructor() {
        this.component = document.createElement("div");
    }
    // Gets the HTML node of the component.
    node() {
        return this.component;
    }
}
// Generic class that all form componenets are extended from.
class UIFormComponent extends UIComponent {
    constructor() {
        super();
        this.component.classList.add("input-element");
        // Creates a helper text div. The component should add this in the right place or it will not appear.
        this.helperText = document.createElement("div");
        this.helperText.classList.add("helpertext", "hidden");
        this.state = "enabled";
        this.getInput = () => { console.log("No functions defined yet.", _console_theme__WEBPACK_IMPORTED_MODULE_0__.error); };
    }
    // Sets the component state to disabled.
    disable() {
        this.component.classList.remove("enabled", "error");
        this.component.classList.add("disabled");
        this.state = "disabled";
    }
    // Sets the component state to enabled.
    enable() {
        this.component.classList.remove("disabled", "error");
        this.component.classList.add("enabled");
        this.state = "enabled";
    }
    // Sets the component state to error.
    error(message) {
        this.component.classList.remove("enabled", "disabled");
        this.component.classList.add("error");
        this.state = "error";
        this.helperText.textContent = message;
    }
}
// Generic block class that all UIBlocks are extended from.
class UIBlock {
    constructor(nodes) {
        this.block = document.createElement("div");
        this.block.classList.add("block");
        this.children = {};
        if (nodes)
            this.addChildren(nodes);
    }
    // Returns self.
    node() {
        return this.block;
    }
    // Returns a HTMLElement.
    getChildNode(nodeName) {
        let child = this.children[nodeName];
        if (!child)
            return null;
        else
            return child.node();
    }
    // Returns the child as-is, if found.
    getChild(nodeName) {
        return this.children[nodeName] || null;
    }
    // Adds a child to the DOM and the list.
    addChildren(nodes) {
        let nodeNames = Object.keys(nodes);
        // Loop through UINodeList.
        for (let name of nodeNames) {
            let newChild = nodes[name];
            // If entry in the UINodeList is a UIBlock or UIComponent.
            if (newChild instanceof UIBlock || newChild instanceof UIComponent || newChild instanceof UIContainer)
                this.block.appendChild(newChild.node());
            else
                console.log(`%cError appending child to Block. ${name} is not of a valid type.`, _console_theme__WEBPACK_IMPORTED_MODULE_0__.error);
            // Add it to the children list.
            this.children[name] = nodes[name];
        }
    }
}
// Generic container div to put any content.
class UIContainer {
    constructor(nodes) {
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.children = {};
        if (nodes)
            this.addChildren(nodes);
    }
    // Returns self.
    node() {
        return this.container;
    }
    // Returns a HTMLElement.
    getChildNode(nodeName) {
        let child = this.children[nodeName];
        if (!child)
            return null;
        else if (child instanceof UIBlock || child instanceof UIComponent)
            return child.node();
        else
            return child;
    }
    // Returns the child as-is, if found.
    getChild(nodeName) {
        return this.children[nodeName] || null;
    }
    // Adds a child to the DOM and the list.
    addChildren(nodes) {
        let nodeNames = Object.keys(nodes);
        // Loop through UINodeList.
        for (let name of nodeNames) {
            let newChild = nodes[name];
            // If entry in the UINodeList is a UIBlock or UIComponent.
            if (newChild instanceof UIBlock || newChild instanceof UIComponent)
                this.container.appendChild(newChild.node());
            else
                console.log(`%cError appending child to Container. ${name} is not of a valid type.`, _console_theme__WEBPACK_IMPORTED_MODULE_0__.error);
            // Add it to the children list.
            this.children[name] = nodes[name];
        }
    }
}
class UIFragment {
    constructor(nodes) {
        this.fragment = document.createDocumentFragment();
        let nodeNames = Object.keys(nodes);
        for (let nodeName of nodeNames)
            this.fragment.appendChild(nodes[nodeName].node());
    }
    addNodes(node) {
    }
    publishTo(node) {
        if (node.nodeType === Node.ELEMENT_NODE)
            node.appendChild(this.fragment);
        else
            console.log(`%cError appending fragment to node. Node is not a valid DOM element.`, "color: #f30;");
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/custom/modules/custom-ui.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_ui_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/ui/system/core */ "./src/library/ui/system/core.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _library_ui_blocks_userinput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/ui/blocks/userinput */ "./src/library/ui/blocks/userinput.ts");
/* harmony import */ var _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/ui/system/types */ "./src/library/ui/system/types.ts");
/* harmony import */ var _library_ui_components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/ui/components/button/button */ "./src/library/ui/components/button/button.ts");
/* harmony import */ var _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/ui/components/checkbox/checkbox */ "./src/library/ui/components/checkbox/checkbox.ts");
/* UI */ 

/* Blocks */ 
/* Components */ 


// Create UI.
let ui = new _library_ui_system_core__WEBPACK_IMPORTED_MODULE_0__.UI();
let dimensions = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer();
dimensions.node().textContent = "Dimensions";
dimensions.node().style.padding = "1.5rem 0.75rem 0.75rem";
dimensions.node().style.fontSize = "var(--typography-body2-size)";
dimensions.node().style.fontWeight = "700";
let width = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Width" }), height = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Height" }), maxWidth = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Max-width" }), minWidth = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Min-width" }), maxHeight = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Max-height" }), minHeight = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Min-height" });
let autoLayout = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer();
autoLayout.node().textContent = "Auto-layout";
autoLayout.node().style.padding = "1.5rem 0.75rem 0.75rem";
autoLayout.node().style.fontSize = "var(--typography-body2-size)";
autoLayout.node().style.fontWeight = "700";
let paddingTop = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Top padding" }), paddingBottom = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Bottom padding" }), paddingLeft = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Left padding" }), paddingRight = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Right padding" });
let itemSpacing = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Item spacing" }), counterAxisSpacing = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Counter axis spacing" });
let radius = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer();
radius.node().textContent = "Radius";
radius.node().style.padding = "1.5rem 0.75rem 0.75rem";
radius.node().style.fontSize = "var(--typography-body2-size)";
radius.node().style.fontWeight = "700";
let radiusTopLeft = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Top left radius" }), radiusTopRight = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Top right radius" }), radiusBottomRight = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Bottom left radius" }), radiusBottomLeft = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Bottom right radius" });
let others = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer();
others.node().textContent = "Others";
others.node().style.padding = "1.5rem 0.75rem 0.75rem";
others.node().style.fontSize = "var(--typography-body2-size)";
others.node().style.fontWeight = "700";
let fit = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Fit" }), visibility = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Visibility" }), mode = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Modes" }), typography = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Typography" });
let cta = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer({
    primary: new _library_ui_components_button_button__WEBPACK_IMPORTED_MODULE_4__.Button("contained", "primary", "medium", "Reset instances", startPlugin, { hug: "fillContainer" })
});
cta.node().style.padding = "2.25rem 0.75rem 0.75rem";
let userInput = new _library_ui_blocks_userinput__WEBPACK_IMPORTED_MODULE_2__.UserInput({
    "dimensions": dimensions,
    "width": width,
    "height": height,
    "maxWidth": maxWidth,
    "minWidth": minWidth,
    "maxHeight": maxHeight,
    "minHeight": minHeight,
    "autoLayout": autoLayout,
    "paddingTop": paddingTop,
    "paddingBottom": paddingBottom,
    "paddingLeft": paddingLeft,
    "paddingRight": paddingRight,
    "itemSpacing": itemSpacing,
    "counterAxisSpacing": counterAxisSpacing,
    "radius": radius,
    "radiusTopLeft": radiusTopLeft,
    "radiusTopRight": radiusTopRight,
    "radiusBottomRight": radiusBottomRight,
    "radiusBottomLeft": radiusBottomLeft,
    "others": others,
    "fit": fit,
    "visibility": visibility,
    "mode": mode,
    "typography": typography,
    "cta": cta
});
ui.append([userInput]);
// Send height of UI to the plugin.
_library_ui_system_core__WEBPACK_IMPORTED_MODULE_0__.toPlugin({ command: "resize", args: { width: 320, height: 920 } });
function startPlugin(e) {
    let input = userInput.getAllInput();
    console.log("%cUser input received:", _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
    console.log(input);
    _library_ui_system_core__WEBPACK_IMPORTED_MODULE_0__.toPlugin({ command: "startResetting", args: { input: input } });
}

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./src/library/ui/main.css ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/ui/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS91aS1wYWxldHRlLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vdWktdGhlbWUuY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvYmxvY2tzL2Jsb2NrLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvdGV4dGZpZWxkL3RleHRmaWVsZC5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9tYWluLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvY29uc29sZS10aGVtZS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2Jsb2Nrcy91c2VyaW5wdXQudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvaGVscGVycy9jcmVhdGUtc3ZnLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvc3lzdGVtL2NvcmUudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9zeXN0ZW0vdHlwZXMudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY3VzdG9tLXVpLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvbWFpbi5jc3M/NDkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByaW1hcnkuY29udGFpbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cblxuLnByaW1hcnkuY29udGFpbmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5cbi5wcmltYXJ5Lm91dGxpbmVkIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3VzdG9tL3VpLXBhbGV0dGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcmltYXJ5LmNvbnRhaW5lZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcXG59XFxuXFxuLnByaW1hcnkuY29udGFpbmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4ucHJpbWFyeS5vdXRsaW5lZCB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbjpyb290IHtcblxuICAvKiBUeXBvZ3JhcGh5ICovXG5cbiAgLS10eXBvZ3JhcGh5LWgxLXNpemU6IDRyZW07XG4gIC0tdHlwb2dyYXBoeS1oMi1zaXplOiAycmVtO1xuICAtLXR5cG9ncmFwaHktYm9keTEtc2l6ZTogMXJlbTtcbiAgLS10eXBvZ3JhcGh5LWJvZHkyLXNpemU6IDAuNzVyZW07XG4gIC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemU6IDAuNzVyZW07XG5cblxuXG4gIC8qIENvbG9ycyAqL1xuXG4gIC0tY29sb3ItYmc6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcblxuICAtLWNvbG9yLXByaW1hcnk6IHZhcigtLWZpZ21hLWNvbG9yLWljb24pO1xuICAtLWNvbG9yLXByaW1hcnktbGlnaHQ6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWRhcms6IHZhcigtLWZpZ21hLWNvbG9yLWljb24pO1xuICAtLWNvbG9yLXByaW1hcnktY29udHJhc3Q6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25pbnZlcnNlKTtcblxuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1zZWNvbmRhcnkpO1xuXG4gIC0tY29sb3ItdGVydGlhcnk6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWdtYS1jb2xvci1iZy10ZXJ0aWFyeSkgNTAlLCB2YXIoLS1jb2xvci1iZykpO1xuXG4gIC0tY29sb3ItdGV4dC1wcmltYXJ5OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgLS1jb2xvci10ZXh0LXNlY29uZGFyeTogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXRleHQtZGlzYWJsZWQ6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuXG4gIC0tY29sb3ItZXJyb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcblxuXG5cbiAgLyogQm9yZGVyICovXG5cbiAgLS1ib3JkZXItZGl2aWRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG5cblxuXG4gIC8qIEJvcmRlciByYWRpdXMgKi9cblxuICAtLWJvcmRlci1yYWRpdXMtbWVkaXVtOiAwLjEyNXJlbTtcblxuXG4gIFxuICAvKiBBbmltYXRpb24gKi9cblxuICAtLWFuaW1hdGlvbi1mYXN0OiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC40LCAxKTtcbiAgLS1hbmltYXRpb24tbWVkaXVtOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC40LCAxKTtcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2N1c3RvbS91aS10aGVtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7O0VBRWYsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHFDQUFxQzs7OztFQUlyQyxXQUFXOztFQUVYLGlDQUFpQzs7RUFFakMsd0NBQXdDO0VBQ3hDLHdEQUF3RDtFQUN4RCw2Q0FBNkM7RUFDN0MsMkRBQTJEOztFQUUzRCxvREFBb0Q7O0VBRXBELHlGQUF5Rjs7RUFFekYsNkNBQTZDO0VBQzdDLHlEQUF5RDtFQUN6RCx1REFBdUQ7O0VBRXZELDZDQUE2Qzs7OztFQUk3QyxXQUFXOztFQUVYLHFEQUFxRDs7OztFQUlyRCxrQkFBa0I7O0VBRWxCLGdDQUFnQzs7OztFQUloQyxjQUFjOztFQUVkLHdEQUF3RDtFQUN4RCwwREFBMEQ7O0FBRTVEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46cm9vdCB7XFxuXFxuICAvKiBUeXBvZ3JhcGh5ICovXFxuXFxuICAtLXR5cG9ncmFwaHktaDEtc2l6ZTogNHJlbTtcXG4gIC0tdHlwb2dyYXBoeS1oMi1zaXplOiAycmVtO1xcbiAgLS10eXBvZ3JhcGh5LWJvZHkxLXNpemU6IDFyZW07XFxuICAtLXR5cG9ncmFwaHktYm9keTItc2l6ZTogMC43NXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemU6IDAuNzVyZW07XFxuXFxuXFxuXFxuICAvKiBDb2xvcnMgKi9cXG5cXG4gIC0tY29sb3ItYmc6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcXG5cXG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XFxuICAtLWNvbG9yLXByaW1hcnktbGlnaHQ6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcXG4gIC0tY29sb3ItcHJpbWFyeS1jb250cmFzdDogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmludmVyc2UpO1xcblxcbiAgLS1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcXG5cXG4gIC0tY29sb3ItdGVydGlhcnk6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWdtYS1jb2xvci1iZy10ZXJ0aWFyeSkgNTAlLCB2YXIoLS1jb2xvci1iZykpO1xcblxcbiAgLS1jb2xvci10ZXh0LXByaW1hcnk6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcbiAgLS1jb2xvci10ZXh0LXNlY29uZGFyeTogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xcbiAgLS1jb2xvci10ZXh0LWRpc2FibGVkOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcXG5cXG4gIC0tY29sb3ItZXJyb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcXG5cXG5cXG5cXG4gIC8qIEJvcmRlciAqL1xcblxcbiAgLS1ib3JkZXItZGl2aWRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XFxuXFxuXFxuXFxuICAvKiBCb3JkZXIgcmFkaXVzICovXFxuXFxuICAtLWJvcmRlci1yYWRpdXMtbWVkaXVtOiAwLjEyNXJlbTtcXG5cXG5cXG4gIFxcbiAgLyogQW5pbWF0aW9uICovXFxuXFxuICAtLWFuaW1hdGlvbi1mYXN0OiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC40LCAxKTtcXG4gIC0tYW5pbWF0aW9uLW1lZGl1bTogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMsIDAsIDAuNCwgMSk7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQmxvY2sgKi9cblxuLmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogcm93LWdhcDogMC41cmVtOyAqL1xuXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYmxvY2s6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWJyYXJ5L3VpL2Jsb2Nrcy9ibG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7O0VBRXJCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCbG9jayAqL1xcblxcbi5ibG9jayB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogcm93LWdhcDogMC41cmVtOyAqL1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5ibG9jazpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCdXR0b24gKi9cblxuXG4uY29tcG9uZW50LmJ1dHRvbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDAuNXJlbTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1lZGl1bSk7XG59XG5cbi5jb21wb25lbnQuYnV0dG9uIC5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpICFpbXBvcnRhbnQ7XG5cbiAgY29sb3I6IGluaGVyaXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7OztBQUdYO0VBQ0UsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7O0VBRWYsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxrQkFBa0I7RUFDbEIsa0RBQWtEOztFQUVsRCxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJ1dHRvbiAqL1xcblxcblxcbi5jb21wb25lbnQuYnV0dG9uLm1lZGl1bSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiAwLjVyZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1lZGl1bSk7XFxufVxcblxcbi5jb21wb25lbnQuYnV0dG9uIC5sYWJlbCB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKSAhaW1wb3J0YW50O1xcblxcbiAgY29sb3I6IGluaGVyaXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVGV4dEZpZWxkICovXG5cblxuLmNvbXBvbmVudC5jaGVja2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbHVtbi1nYXA6IDAuNzVyZW07XG5cbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWRpdmlkZXIpO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3gubWVkaXVtIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3gubGFyZ2Uge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG59XG5cblxuXG4vKiBDaGVja2JveCAqL1xuXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWVkaXVtKTtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveC5tZWRpdW0gLnRvZ2dsZSB7XG4gIG1pbi13aWR0aDogMS4yNXJlbTtcbiAgbWFyZ2luOiAwLjNyZW0gMDtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveC5sYXJnZSAudG9nZ2xlIHtcbiAgbWluLXdpZHRoOiAxLjc1cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSAuZmlsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuXG4gIHRyYW5zaXRpb246IHZhcigtLWFuaW1hdGlvbi1mYXN0KTtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIC50aWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZShjYWxjKDIwLzI0KSk7XG59XG5cblxuXG4vKiBUZXh0ICovXG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgcGFkZGluZzogMCAwLjI1cmVtO1xufVxuXG5cblxuLyogUHJpbWFyeSB0ZXh0ICovXG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpO1xufVxuXG5cblxuLyogU2Vjb25kYXJ5IHRleHQgKi9cblxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAuc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5zZWNvbmRhcnkuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7OztBQUdkO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7Ozs7QUFJQSxhQUFhOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1Qjs7RUFFdkIsdUNBQXVDOztFQUV2QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQzs7RUFFaEMsa0JBQWtCOztFQUVsQixzQ0FBc0M7O0VBRXRDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1EQUFtRDtBQUNyRDs7OztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvQkFBb0I7O0VBRXBCLGtCQUFrQjtBQUNwQjs7OztBQUlBLGlCQUFpQjs7QUFFakI7RUFDRSxnQ0FBZ0M7RUFDaEMsdUNBQXVDO0FBQ3pDOzs7O0FBSUEsbUJBQW1COztBQUVuQjtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGV4dEZpZWxkICovXFxuXFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgY29sdW1uLWdhcDogMC43NXJlbTtcXG5cXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1kaXZpZGVyKTtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveDpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveC5tZWRpdW0ge1xcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94LmxhcmdlIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBtaW4taGVpZ2h0OiAzLjVyZW07XFxufVxcblxcblxcblxcbi8qIENoZWNrYm94ICovXFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZmxleGJveDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1lZGl1bSk7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3gubWVkaXVtIC50b2dnbGUge1xcbiAgbWluLXdpZHRoOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwLjNyZW0gMDtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveC5sYXJnZSAudG9nZ2xlIHtcXG4gIG1pbi13aWR0aDogMS43NXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIC5maWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG5cXG4gIHRyYW5zaXRpb246IHZhcigtLWFuaW1hdGlvbi1mYXN0KTtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIC50aWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoY2FsYygyMC8yNCkpO1xcbn1cXG5cXG5cXG5cXG4vKiBUZXh0ICovXFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuICBwYWRkaW5nOiAwIDAuMjVyZW07XFxufVxcblxcblxcblxcbi8qIFByaW1hcnkgdGV4dCAqL1xcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnByaW1hcnkge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSk7XFxufVxcblxcblxcblxcbi8qIFNlY29uZGFyeSB0ZXh0ICovXFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAuc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSk7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnNlY29uZGFyeS5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBUZXh0RmllbGQgKi9cblxuXG4uY29tcG9uZW50LnRleHRmaWVsZCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDAuNXJlbTtcblxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItZGl2aWRlcik7XG59XG5cbi5jb21wb25lbnQudGV4dGZpZWxkOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cblxuXG4vKiBMYWJlbCAqL1xuXG4uY29tcG9uZW50LnRleHRmaWVsZCAubGFiZWwge1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5zdWZmaXhsYWJlbCB7XG4gIGZsZXgtc2hyaW5rOiAxMDtcblxuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuXG5cbi8qIElucHV0IHdyYXBwZXIgKi9cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmlucHV0d3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cblxuXG4vKiBJbnB1dCAqL1xuXG5pbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0LnNtYWxsIHtcbiAgaGVpZ2h0OiAycmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5MS1zaXplKSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5tZWRpdW0ge1xuICBoZWlnaHQ6IDNyZW07XG5cbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWgyLXNpemUpICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xufVxuXG5pbnB1dC5sYXJnZSB7XG4gIGhlaWdodDogNXJlbTtcblxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaDEtc2l6ZSkgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2ZW07XG59XG5cbmlucHV0LmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG5cblxuLyogSGVscGVyIHRleHRzICovXG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcblxuICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltYXRpb24tbWVkaXVtKTtcbn1cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQuZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xufVxuXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dC5oaWRkZW4ge1xuICBoZWlnaHQ6IDFweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvdGV4dGZpZWxkL3RleHRmaWVsZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7O0VBRWYsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7O0FBSUEsVUFBVTs7QUFFVjtFQUNFLFdBQVc7O0VBRVgsbUJBQW1COztFQUVuQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGlCQUFpQjtFQUNqQix1REFBdUQ7RUFDdkQsa0NBQWtDO0FBQ3BDOzs7O0FBSUEsa0JBQWtCOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7OztBQUlBLFVBQVU7O0FBRVY7RUFDRSxTQUFTO0VBQ1QsV0FBVzs7RUFFWCxhQUFhO0VBQ2IsU0FBUztFQUNULGlDQUFpQztFQUNqQyxnQ0FBZ0M7O0VBRWhDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsWUFBWTs7RUFFWiwrQ0FBK0M7RUFDL0MsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWiwrQ0FBK0M7RUFDL0MsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOzs7O0FBSUEsaUJBQWlCOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCOztFQUV0QixhQUFhO0VBQ2IscUJBQXFCOztFQUVyQix1REFBdUQ7RUFDdkQsa0NBQWtDOztFQUVsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGV4dEZpZWxkICovXFxuXFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiAwLjVyZW07XFxuXFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItZGl2aWRlcik7XFxufVxcblxcbi5jb21wb25lbnQudGV4dGZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG5cXG5cXG4vKiBMYWJlbCAqL1xcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5sYWJlbCB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAuc3VmZml4bGFiZWwge1xcbiAgZmxleC1zaHJpbms6IDEwO1xcblxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcXG59XFxuXFxuXFxuXFxuLyogSW5wdXQgd3JhcHBlciAqL1xcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5pbnB1dHdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuXFxuXFxuLyogSW5wdXQgKi9cXG5cXG5pbnB1dCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmlucHV0LnNtYWxsIHtcXG4gIGhlaWdodDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5MS1zaXplKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5pbnB1dC5tZWRpdW0ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWgyLXNpemUpICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcXG59XFxuXFxuaW5wdXQubGFyZ2Uge1xcbiAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWgxLXNpemUpICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZlbTtcXG59XFxuXFxuaW5wdXQuZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xcbn1cXG5cXG5cXG5cXG4vKiBIZWxwZXIgdGV4dHMgKi9cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XFxuXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltYXRpb24tbWVkaXVtKTtcXG59XFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQuZXJyb3Ige1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcXG59XFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQuaGlkZGVuIHtcXG4gIGhlaWdodDogMXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL2N1c3RvbS91aS10aGVtZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vY3VzdG9tL3VpLXBhbGV0dGUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmxvY2tzL2Jsb2NrLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdGV4dGZpZWxkL3RleHRmaWVsZC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVGhlbWUgKi9cblxuXG4vKiBCbG9ja3MgKi9cblxuXG4vKiBDb21wb25lbnRzICovXG5cblxuXG5ib2R5LCBkaXYsIGlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcblxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbi8qIERpc2FibGUgZXZlbnQgY2FwdHVyaW5nIGluIGljb24gU1ZHcyAqL1xuXG4uaWNvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cblxuLyogRmlsbCBvciBodWcgKi9cblxuLmZpbGxDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWJyYXJ5L3VpL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7OztBQU1WLFdBQVc7OztBQUtYLGVBQWU7Ozs7QUFRZjtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QscUdBQXFHO0VBQ3JHLGtCQUFrQjtFQUNsQiw4QkFBOEI7O0VBRTlCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQSx5Q0FBeUM7O0FBRXpDO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7O0FBSUEsZ0JBQWdCOztBQUVoQjtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGVtZSAqL1xcblxcbkBpbXBvcnQgXFxcIi4uLy4uL2N1c3RvbS91aS10aGVtZS5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4uLy4uL2N1c3RvbS91aS1wYWxldHRlLmNzc1xcXCI7XFxuXFxuXFxuLyogQmxvY2tzICovXFxuXFxuQGltcG9ydCBcXFwiLi9ibG9ja3MvYmxvY2suY3NzXFxcIjtcXG5cXG5cXG4vKiBDb21wb25lbnRzICovXFxuXFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL3RleHRmaWVsZC90ZXh0ZmllbGQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3NcXFwiO1xcblxcblxcblxcbmJvZHksIGRpdiwgaW5wdXQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuXFxuLyogRGlzYWJsZSBldmVudCBjYXB0dXJpbmcgaW4gaWNvbiBTVkdzICovXFxuXFxuLmljb24ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcblxcblxcbi8qIEZpbGwgb3IgaHVnICovXFxuXFxuLmZpbGxDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcHJpbWFyeSA9IFwiY29sb3I6ICM5NzQ3RkY7XCI7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5ID0gXCJjb2xvcjogI0MxOTFGRjtcIjtcbmV4cG9ydCBjb25zdCBlcnJvciA9IFwiY29sb3I6ICNmMzA7XCI7XG4iLCIvKiBUeXBlcyAqLyBpbXBvcnQgeyBVSUJsb2NrLCBVSUZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vc3lzdGVtL3R5cGVzXCI7XG5leHBvcnQgY2xhc3MgVXNlcklucHV0IGV4dGVuZHMgVUlCbG9jayB7XG4gICAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAgICAgc3VwZXIobm9kZXMpO1xuICAgIH1cbiAgICAvLyBBZGRzIGFuIGlucHV0IGNoaWxkLlxuICAgIGFkZElucHV0Q29tcG9uZW50KG5vZGVzKSB7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4obm9kZXMpO1xuICAgIH1cbiAgICAvLyBHZXRzIGFsbCBpbnB1dCBmcm9tIGNoaWxkcmVuIGZvcm0gY29tcG9uZW50cy5cbiAgICBnZXRBbGxJbnB1dCgpIHtcbiAgICAgICAgLy8gU2V0IHVwIHRoZSByZXN1bHQuXG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSB7fTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIFZhbGlkTm9kZXMuXG4gICAgICAgIGxldCBub2RlTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBub2RlTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bbmFtZV07XG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBVSUZvcm1Db21wb25lbnQpXG4gICAgICAgICAgICAgICAgZm9ybUlucHV0W25hbWVdID0gY2hpbGQuZ2V0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybUlucHV0O1xuICAgIH1cbn1cbiIsIi8qIFR5cGVzICovIGltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3N5c3RlbS90eXBlc1wiO1xuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih2YXJpYW50LCBjb2xvciwgc2l6ZSwgbGFiZWwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnN1ZmZpeEljb24pXG4gICAgICAgICAgICB0aGlzLnN1ZmZpeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAvLyBDb21wb25lbnQgZGl2LlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50XCIsIFwiYnV0dG9uXCIsIHZhcmlhbnQsIGNvbG9yLCBzaXplLCBcImVuYWJsZWRcIik7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaHVnKVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChvcHRpb25zLmh1Zyk7XG4gICAgICAgIC8vIExhYmVsLlxuICAgICAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdC5hZGQoXCJsYWJlbFwiKTtcbiAgICAgICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSBsYWJlbDtcbiAgICAgICAgLy8gQXBwZW5kIGFsbC5cbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XG4gICAgICAgIGlmICh0aGlzLnN1ZmZpeEljb24pXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aGlzLnN1ZmZpeEljb24pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgY2FsbGJhY2soZSk7IH0pO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmFibGVkXCI7XG4gICAgfVxuICAgIGVycm9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVycm9yXCI7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZGlzYWJsZWRcIjtcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlZFwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5hYmxlZFwiO1xuICAgIH1cbn1cbiIsIi8qIFR5cGVzICovIGltcG9ydCB7IFVJRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zeXN0ZW0vdHlwZXNcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0ICogYXMgY3JlYXRlU1ZHIGZyb20gXCIuLi8uLi9oZWxwZXJzL2NyZWF0ZS1zdmdcIjtcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFVJRm9ybUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBDb21wb25lbnQgZGl2LlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50XCIsIFwiY2hlY2tib3hcIiwgb3B0aW9ucy5zaXplKTtcbiAgICAgICAgLy8gQ2hlY2tib3guXG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVcIik7XG4gICAgICAgIGxldCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmlsbC5jbGFzc0xpc3QuYWRkKFwiZmlsbFwiKTtcbiAgICAgICAgZmlsbC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICBmaWxsLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmZpbGxEaWFtZXRlciA9IDA7XG4gICAgICAgIGxldCB0aWNrID0gY3JlYXRlU1ZHLmljb24oMjQsIDI0LCBcIk0xOS4wNjk0IDYuOTg4MUw5LjU0MjM2IDE4LjEwM0w0Ljk2OTY3IDEzLjUzMDNMNi4wMzAzMyAxMi40Njk3TDkuNDU3NjMgMTUuODk3TDE3LjkzMDYgNi4wMTE5MUwxOS4wNjk0IDYuOTg4MVpcIiwgXCJ2YXIoLS1jb2xvci10ZXJ0aWFyeSlcIik7XG4gICAgICAgIHRpY2suY2xhc3NMaXN0LmFkZChcInRpY2tcIiwgXCJpY29uXCIpO1xuICAgICAgICAvLyBUZXh0IGZvciBjaGVja2JveC5cbiAgICAgICAgbGV0IHByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmltYXJ5LmNsYXNzTGlzdC5hZGQoXCJwcmltYXJ5XCIpO1xuICAgICAgICBwcmltYXJ5LnRleHRDb250ZW50ID0gb3B0aW9ucy5wcmltYXJ5VGV4dDtcbiAgICAgICAgbGV0IHNlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY29uZGFyeS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kYXJ5XCIpO1xuICAgICAgICBpZiAoIW9wdGlvbnMuc2Vjb25kYXJ5VGV4dClcbiAgICAgICAgICAgIHNlY29uZGFyeS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgICAgIHRoaXMudGV4dC5hcHBlbmRDaGlsZChwcmltYXJ5KTtcbiAgICAgICAgdGhpcy50ZXh0LmFwcGVuZENoaWxkKHNlY29uZGFyeSk7XG4gICAgICAgIHRoaXMudGV4dC5hcHBlbmRDaGlsZCh0aGlzLmhlbHBlclRleHQpO1xuICAgICAgICAvLyBBcHBlbmQuXG4gICAgICAgIHRoaXMuY2hlY2tib3guYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guYXBwZW5kQ2hpbGQodGljayk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFwcGVuZENoaWxkKHRoaXMuY2hlY2tib3gpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuICAgICAgICAvLyBTdGF0ZSBhbmQgbGlzdGVuZXJzLlxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZClcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2soKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTZXQgdXAgaW5wdXQgcmV0cmlldmFsLlxuICAgICAgICB0aGlzLmdldElucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0RmlsbERpYW1ldGVyKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuY2hlY2tib3gub2Zmc2V0SGVpZ2h0ICogdGhpcy5jaGVja2JveC5vZmZzZXRIZWlnaHQgKyB0aGlzLmNoZWNrYm94Lm9mZnNldFdpZHRoICogdGhpcy5jaGVja2JveC5vZmZzZXRXaWR0aCk7XG4gICAgfVxuICAgIGNoZWNrKCkge1xuICAgICAgICAvLyBJZiB0aGUgZmlsbCBkaWFtZXRlciBoYXMgbm90IGJlZW4gY2FsY3VsYXRlZCB5ZXQgYXMgdGhlIGNvbXBvbmVudCBpcyBub3QgeWV0IGFwcGVuZGVkIHRvIHRoZSBET00uXG4gICAgICAgIGlmICh0aGlzLmZpbGxEaWFtZXRlciA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuZmlsbERpYW1ldGVyID0gdGhpcy5nZXRGaWxsRGlhbWV0ZXIoKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmNoZWNrYm94LmNoaWxkcmVuWzBdO1xuICAgICAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7U3RyaW5nKHRoaXMuZmlsbERpYW1ldGVyKX1weGA7XG4gICAgICAgIGZpbGwuc3R5bGUuaGVpZ2h0ID0gYCR7U3RyaW5nKHRoaXMuZmlsbERpYW1ldGVyKX1weGA7XG4gICAgICAgIGxldCB0aWNrID0gdGhpcy5jaGVja2JveC5jaGlsZHJlblsxXTtcbiAgICAgICAgdGljay5zdHlsZS5maWxsID0gXCJ2YXIoLS1jb2xvci1iZylcIjtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdW5jaGVjaygpIHtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmNoZWNrYm94LmNoaWxkcmVuWzBdO1xuICAgICAgICBmaWxsLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICAgIGZpbGwuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIGxldCB0aWNrID0gdGhpcy5jaGVja2JveC5jaGlsZHJlblsxXTtcbiAgICAgICAgdGljay5zdHlsZS5maWxsID0gXCJ2YXIoLS1jb2xvci10ZXJ0aWFyeSlcIjtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZVByaW1hcnlUZXh0KHRleHQpIHtcbiAgICAgICAgbGV0IHByaW1hcnlUZXh0ID0gdGhpcy50ZXh0LmNoaWxkcmVuWzBdO1xuICAgICAgICBwcmltYXJ5VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHRoaXMuZmlsbERpYW1ldGVyID0gdGhpcy5nZXRGaWxsRGlhbWV0ZXIoKTtcbiAgICB9XG4gICAgdXBkYXRlU2Vjb25kYXJ5VGV4dCh0ZXh0KSB7XG4gICAgICAgIGxldCBzZWNvbmRhcnlUZXh0ID0gdGhpcy50ZXh0LmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWNvbmRhcnlUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWNvbmRhcnlUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMuZmlsbERpYW1ldGVyID0gdGhpcy5nZXRGaWxsRGlhbWV0ZXIoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaWNvbih3aWR0aCwgaGVpZ2h0LCBkLCBmaWxsKSB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcod2lkdGgpKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoZWlnaHQpKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgZmlsbDogJHtmaWxsfTtgKTtcbiAgICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGwtcnVsZVwiLCBcImV2ZW5vZGRcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJjbGlwLXJ1bGVcIiwgXCJldmVub2RkXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgcmV0dXJuIHN2Zztcbn1cbiIsIi8qIFR5cGVzICovIGltcG9ydCB7IFVJQmxvY2ssIFVJQ29tcG9uZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIExvZyB0byBjb25zb2xlIGZvciBkZWJ1Z2dpbmcuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWNVSSBjcmVhdGVkLlwiLCBcImNvbG9yOiAjY2NjXCIpO1xuICAgICAgICBsZXQgaW5zZXJ0aW9uUG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpO1xuICAgICAgICB0aGlzLnBhbmVsID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFuZWwpO1xuICAgIH1cbiAgICBhcHBlbmQobm9kZXMpIHtcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGEgZnJhZ21lbnQgYmVmb3JlIGFwcGVuZGluZyB0byB0aGUgVUkuXG4gICAgICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBVSUJsb2NrIHx8IG5vZGUgaW5zdGFuY2VvZiBVSUNvbXBvbmVudClcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlLm5vZGUoKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgfVxufVxuLy8gU2VuZCBtZXNzYWdlIHRvIHRoZSBwbHVnaW4uXG5leHBvcnQgZnVuY3Rpb24gdG9QbHVnaW4obWVzc2FnZSkge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IG1lc3NhZ2UgfSwgJyonKTtcbn1cbiIsIi8qIFN5c3RlbSAqLyBpbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uL2NvbnNvbGUtdGhlbWVcIjtcbi8vIEdlbmVyaWMgY29tcG9uZW50IGNsYXNzIHRoYXQgYWxsIFVJQ29tcG9uZW50cyBhcmUgZXh0ZW5kZWQgZnJvbS5cbmV4cG9ydCBjbGFzcyBVSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB9XG4gICAgLy8gR2V0cyB0aGUgSFRNTCBub2RlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgbm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICAgIH1cbn1cbi8vIEdlbmVyaWMgY2xhc3MgdGhhdCBhbGwgZm9ybSBjb21wb25lbmV0cyBhcmUgZXh0ZW5kZWQgZnJvbS5cbmV4cG9ydCBjbGFzcyBVSUZvcm1Db21wb25lbnQgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lbGVtZW50XCIpO1xuICAgICAgICAvLyBDcmVhdGVzIGEgaGVscGVyIHRleHQgZGl2LiBUaGUgY29tcG9uZW50IHNob3VsZCBhZGQgdGhpcyBpbiB0aGUgcmlnaHQgcGxhY2Ugb3IgaXQgd2lsbCBub3QgYXBwZWFyLlxuICAgICAgICB0aGlzLmhlbHBlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmhlbHBlclRleHQuY2xhc3NMaXN0LmFkZChcImhlbHBlcnRleHRcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuYWJsZWRcIjtcbiAgICAgICAgdGhpcy5nZXRJbnB1dCA9ICgpID0+IHsgY29uc29sZS5sb2coXCJObyBmdW5jdGlvbnMgZGVmaW5lZCB5ZXQuXCIsIGNvbnNvbGVUaGVtZS5lcnJvcik7IH07XG4gICAgfVxuICAgIC8vIFNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byBkaXNhYmxlZC5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlZFwiLCBcImVycm9yXCIpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImRpc2FibGVkXCI7XG4gICAgfVxuICAgIC8vIFNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byBlbmFibGVkLlxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJlbmFibGVkXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmFibGVkXCI7XG4gICAgfVxuICAgIC8vIFNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byBlcnJvci5cbiAgICBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG59XG4vLyBHZW5lcmljIGJsb2NrIGNsYXNzIHRoYXQgYWxsIFVJQmxvY2tzIGFyZSBleHRlbmRlZCBmcm9tLlxuZXhwb3J0IGNsYXNzIFVJQmxvY2sge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHRoaXMuYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgICAgICBpZiAobm9kZXMpXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKG5vZGVzKTtcbiAgICB9XG4gICAgLy8gUmV0dXJucyBzZWxmLlxuICAgIG5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIGEgSFRNTEVsZW1lbnQuXG4gICAgZ2V0Q2hpbGROb2RlKG5vZGVOYW1lKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bbm9kZU5hbWVdO1xuICAgICAgICBpZiAoIWNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5ub2RlKCk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgdGhlIGNoaWxkIGFzLWlzLCBpZiBmb3VuZC5cbiAgICBnZXRDaGlsZChub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltub2RlTmFtZV0gfHwgbnVsbDtcbiAgICB9XG4gICAgLy8gQWRkcyBhIGNoaWxkIHRvIHRoZSBET00gYW5kIHRoZSBsaXN0LlxuICAgIGFkZENoaWxkcmVuKG5vZGVzKSB7XG4gICAgICAgIGxldCBub2RlTmFtZXMgPSBPYmplY3Qua2V5cyhub2Rlcyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBVSU5vZGVMaXN0LlxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIG5vZGVOYW1lcykge1xuICAgICAgICAgICAgbGV0IG5ld0NoaWxkID0gbm9kZXNbbmFtZV07XG4gICAgICAgICAgICAvLyBJZiBlbnRyeSBpbiB0aGUgVUlOb2RlTGlzdCBpcyBhIFVJQmxvY2sgb3IgVUlDb21wb25lbnQuXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBVSUJsb2NrIHx8IG5ld0NoaWxkIGluc3RhbmNlb2YgVUlDb21wb25lbnQgfHwgbmV3Q2hpbGQgaW5zdGFuY2VvZiBVSUNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrLmFwcGVuZENoaWxkKG5ld0NoaWxkLm5vZGUoKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRXJyb3IgYXBwZW5kaW5nIGNoaWxkIHRvIEJsb2NrLiAke25hbWV9IGlzIG5vdCBvZiBhIHZhbGlkIHR5cGUuYCwgY29uc29sZVRoZW1lLmVycm9yKTtcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bbmFtZV0gPSBub2Rlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIEdlbmVyaWMgY29udGFpbmVyIGRpdiB0byBwdXQgYW55IGNvbnRlbnQuXG5leHBvcnQgY2xhc3MgVUlDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgICAgICBpZiAobm9kZXMpXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKG5vZGVzKTtcbiAgICB9XG4gICAgLy8gUmV0dXJucyBzZWxmLlxuICAgIG5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gUmV0dXJucyBhIEhUTUxFbGVtZW50LlxuICAgIGdldENoaWxkTm9kZShub2RlTmFtZSkge1xuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW25vZGVOYW1lXTtcbiAgICAgICAgaWYgKCFjaGlsZClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIFVJQmxvY2sgfHwgY2hpbGQgaW5zdGFuY2VvZiBVSUNvbXBvbmVudClcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5ub2RlKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgY2hpbGQgYXMtaXMsIGlmIGZvdW5kLlxuICAgIGdldENoaWxkKG5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW25vZGVOYW1lXSB8fCBudWxsO1xuICAgIH1cbiAgICAvLyBBZGRzIGEgY2hpbGQgdG8gdGhlIERPTSBhbmQgdGhlIGxpc3QuXG4gICAgYWRkQ2hpbGRyZW4obm9kZXMpIHtcbiAgICAgICAgbGV0IG5vZGVOYW1lcyA9IE9iamVjdC5rZXlzKG5vZGVzKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIFVJTm9kZUxpc3QuXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2Ygbm9kZU5hbWVzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGQgPSBub2Rlc1tuYW1lXTtcbiAgICAgICAgICAgIC8vIElmIGVudHJ5IGluIHRoZSBVSU5vZGVMaXN0IGlzIGEgVUlCbG9jayBvciBVSUNvbXBvbmVudC5cbiAgICAgICAgICAgIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIFVJQmxvY2sgfHwgbmV3Q2hpbGQgaW5zdGFuY2VvZiBVSUNvbXBvbmVudClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDaGlsZC5ub2RlKCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Vycm9yIGFwcGVuZGluZyBjaGlsZCB0byBDb250YWluZXIuICR7bmFtZX0gaXMgbm90IG9mIGEgdmFsaWQgdHlwZS5gLCBjb25zb2xlVGhlbWUuZXJyb3IpO1xuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBjaGlsZHJlbiBsaXN0LlxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltuYW1lXSA9IG5vZGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVJRnJhZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGxldCBub2RlTmFtZXMgPSBPYmplY3Qua2V5cyhub2Rlcyk7XG4gICAgICAgIGZvciAobGV0IG5vZGVOYW1lIG9mIG5vZGVOYW1lcylcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZXNbbm9kZU5hbWVdLm5vZGUoKSk7XG4gICAgfVxuICAgIGFkZE5vZGVzKG5vZGUpIHtcbiAgICB9XG4gICAgcHVibGlzaFRvKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRXJyb3IgYXBwZW5kaW5nIGZyYWdtZW50IHRvIG5vZGUuIE5vZGUgaXMgbm90IGEgdmFsaWQgRE9NIGVsZW1lbnQuYCwgXCJjb2xvcjogI2YzMDtcIik7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogVUkgKi8gaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vLi4vbGlicmFyeS91aS9zeXN0ZW0vY29yZVwiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEJsb2NrcyAqLyBpbXBvcnQgeyBVc2VySW5wdXQgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS91aS9ibG9ja3MvdXNlcmlucHV0XCI7XG4vKiBDb21wb25lbnRzICovIGltcG9ydCB7IFVJQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvdWkvc3lzdGVtL3R5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vbGlicmFyeS91aS9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvdWkvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveFwiO1xuLy8gQ3JlYXRlIFVJLlxubGV0IHVpID0gbmV3IGNvcmUuVUkoKTtcbmxldCBkaW1lbnNpb25zID0gbmV3IFVJQ29udGFpbmVyKCk7XG5kaW1lbnNpb25zLm5vZGUoKS50ZXh0Q29udGVudCA9IFwiRGltZW5zaW9uc1wiO1xuZGltZW5zaW9ucy5ub2RlKCkuc3R5bGUucGFkZGluZyA9IFwiMS41cmVtIDAuNzVyZW0gMC43NXJlbVwiO1xuZGltZW5zaW9ucy5ub2RlKCkuc3R5bGUuZm9udFNpemUgPSBcInZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSlcIjtcbmRpbWVuc2lvbnMubm9kZSgpLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xubGV0IHdpZHRoID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiV2lkdGhcIiB9KSwgaGVpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiSGVpZ2h0XCIgfSksIG1heFdpZHRoID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTWF4LXdpZHRoXCIgfSksIG1pbldpZHRoID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTWluLXdpZHRoXCIgfSksIG1heEhlaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIk1heC1oZWlnaHRcIiB9KSwgbWluSGVpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTWluLWhlaWdodFwiIH0pO1xubGV0IGF1dG9MYXlvdXQgPSBuZXcgVUlDb250YWluZXIoKTtcbmF1dG9MYXlvdXQubm9kZSgpLnRleHRDb250ZW50ID0gXCJBdXRvLWxheW91dFwiO1xuYXV0b0xheW91dC5ub2RlKCkuc3R5bGUucGFkZGluZyA9IFwiMS41cmVtIDAuNzVyZW0gMC43NXJlbVwiO1xuYXV0b0xheW91dC5ub2RlKCkuc3R5bGUuZm9udFNpemUgPSBcInZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSlcIjtcbmF1dG9MYXlvdXQubm9kZSgpLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xubGV0IHBhZGRpbmdUb3AgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJUb3AgcGFkZGluZ1wiIH0pLCBwYWRkaW5nQm90dG9tID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiQm90dG9tIHBhZGRpbmdcIiB9KSwgcGFkZGluZ0xlZnQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJMZWZ0IHBhZGRpbmdcIiB9KSwgcGFkZGluZ1JpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiUmlnaHQgcGFkZGluZ1wiIH0pO1xubGV0IGl0ZW1TcGFjaW5nID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiSXRlbSBzcGFjaW5nXCIgfSksIGNvdW50ZXJBeGlzU3BhY2luZyA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkNvdW50ZXIgYXhpcyBzcGFjaW5nXCIgfSk7XG5sZXQgcmFkaXVzID0gbmV3IFVJQ29udGFpbmVyKCk7XG5yYWRpdXMubm9kZSgpLnRleHRDb250ZW50ID0gXCJSYWRpdXNcIjtcbnJhZGl1cy5ub2RlKCkuc3R5bGUucGFkZGluZyA9IFwiMS41cmVtIDAuNzVyZW0gMC43NXJlbVwiO1xucmFkaXVzLm5vZGUoKS5zdHlsZS5mb250U2l6ZSA9IFwidmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKVwiO1xucmFkaXVzLm5vZGUoKS5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbmxldCByYWRpdXNUb3BMZWZ0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVG9wIGxlZnQgcmFkaXVzXCIgfSksIHJhZGl1c1RvcFJpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVG9wIHJpZ2h0IHJhZGl1c1wiIH0pLCByYWRpdXNCb3R0b21SaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkJvdHRvbSBsZWZ0IHJhZGl1c1wiIH0pLCByYWRpdXNCb3R0b21MZWZ0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiQm90dG9tIHJpZ2h0IHJhZGl1c1wiIH0pO1xubGV0IG90aGVycyA9IG5ldyBVSUNvbnRhaW5lcigpO1xub3RoZXJzLm5vZGUoKS50ZXh0Q29udGVudCA9IFwiT3RoZXJzXCI7XG5vdGhlcnMubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjEuNXJlbSAwLjc1cmVtIDAuNzVyZW1cIjtcbm90aGVycy5ub2RlKCkuc3R5bGUuZm9udFNpemUgPSBcInZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSlcIjtcbm90aGVycy5ub2RlKCkuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG5sZXQgZml0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiRml0XCIgfSksIHZpc2liaWxpdHkgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJWaXNpYmlsaXR5XCIgfSksIG1vZGUgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNb2Rlc1wiIH0pLCB0eXBvZ3JhcGh5ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVHlwb2dyYXBoeVwiIH0pO1xubGV0IGN0YSA9IG5ldyBVSUNvbnRhaW5lcih7XG4gICAgcHJpbWFyeTogbmV3IEJ1dHRvbihcImNvbnRhaW5lZFwiLCBcInByaW1hcnlcIiwgXCJtZWRpdW1cIiwgXCJSZXNldCBpbnN0YW5jZXNcIiwgc3RhcnRQbHVnaW4sIHsgaHVnOiBcImZpbGxDb250YWluZXJcIiB9KVxufSk7XG5jdGEubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjIuMjVyZW0gMC43NXJlbSAwLjc1cmVtXCI7XG5sZXQgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dCh7XG4gICAgXCJkaW1lbnNpb25zXCI6IGRpbWVuc2lvbnMsXG4gICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICBcImhlaWdodFwiOiBoZWlnaHQsXG4gICAgXCJtYXhXaWR0aFwiOiBtYXhXaWR0aCxcbiAgICBcIm1pbldpZHRoXCI6IG1pbldpZHRoLFxuICAgIFwibWF4SGVpZ2h0XCI6IG1heEhlaWdodCxcbiAgICBcIm1pbkhlaWdodFwiOiBtaW5IZWlnaHQsXG4gICAgXCJhdXRvTGF5b3V0XCI6IGF1dG9MYXlvdXQsXG4gICAgXCJwYWRkaW5nVG9wXCI6IHBhZGRpbmdUb3AsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IHBhZGRpbmdCb3R0b20sXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBwYWRkaW5nTGVmdCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBwYWRkaW5nUmlnaHQsXG4gICAgXCJpdGVtU3BhY2luZ1wiOiBpdGVtU3BhY2luZyxcbiAgICBcImNvdW50ZXJBeGlzU3BhY2luZ1wiOiBjb3VudGVyQXhpc1NwYWNpbmcsXG4gICAgXCJyYWRpdXNcIjogcmFkaXVzLFxuICAgIFwicmFkaXVzVG9wTGVmdFwiOiByYWRpdXNUb3BMZWZ0LFxuICAgIFwicmFkaXVzVG9wUmlnaHRcIjogcmFkaXVzVG9wUmlnaHQsXG4gICAgXCJyYWRpdXNCb3R0b21SaWdodFwiOiByYWRpdXNCb3R0b21SaWdodCxcbiAgICBcInJhZGl1c0JvdHRvbUxlZnRcIjogcmFkaXVzQm90dG9tTGVmdCxcbiAgICBcIm90aGVyc1wiOiBvdGhlcnMsXG4gICAgXCJmaXRcIjogZml0LFxuICAgIFwidmlzaWJpbGl0eVwiOiB2aXNpYmlsaXR5LFxuICAgIFwibW9kZVwiOiBtb2RlLFxuICAgIFwidHlwb2dyYXBoeVwiOiB0eXBvZ3JhcGh5LFxuICAgIFwiY3RhXCI6IGN0YVxufSk7XG51aS5hcHBlbmQoW3VzZXJJbnB1dF0pO1xuLy8gU2VuZCBoZWlnaHQgb2YgVUkgdG8gdGhlIHBsdWdpbi5cbmNvcmUudG9QbHVnaW4oeyBjb21tYW5kOiBcInJlc2l6ZVwiLCBhcmdzOiB7IHdpZHRoOiAzMjAsIGhlaWdodDogOTIwIH0gfSk7XG5mdW5jdGlvbiBzdGFydFBsdWdpbihlKSB7XG4gICAgbGV0IGlucHV0ID0gdXNlcklucHV0LmdldEFsbElucHV0KCk7XG4gICAgY29uc29sZS5sb2coXCIlY1VzZXIgaW5wdXQgcmVjZWl2ZWQ6XCIsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgY29yZS50b1BsdWdpbih7IGNvbW1hbmQ6IFwic3RhcnRSZXNldHRpbmdcIiwgYXJnczogeyBpbnB1dDogaW5wdXQgfSB9KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=