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


// Log to console for debugging.
console.log("%cUI created.", "color: #ccc");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vdWktcGFsZXR0ZS5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL3VpLXRoZW1lLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2Jsb2Nrcy9ibG9jay5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL3RleHRmaWVsZC90ZXh0ZmllbGQuY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L2NvbnNvbGUtdGhlbWUudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9ibG9ja3MvdXNlcmlucHV0LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2hlbHBlcnMvY3JlYXRlLXN2Zy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL3N5c3RlbS9jb3JlLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvc3lzdGVtL3R5cGVzLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2N1c3RvbS11aS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL21haW4uY3NzPzQ5MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcmltYXJ5LmNvbnRhaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG5cbi5wcmltYXJ5LmNvbnRhaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xufVxuXG4ucHJpbWFyeS5vdXRsaW5lZCB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2N1c3RvbS91aS1wYWxldHRlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJpbWFyeS5jb250YWluZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XFxufVxcblxcbi5wcmltYXJ5LmNvbnRhaW5lZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLnByaW1hcnkub3V0bGluZWQge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG46cm9vdCB7XG5cbiAgLyogVHlwb2dyYXBoeSAqL1xuXG4gIC0tdHlwb2dyYXBoeS1oMS1zaXplOiA0cmVtO1xuICAtLXR5cG9ncmFwaHktaDItc2l6ZTogMnJlbTtcbiAgLS10eXBvZ3JhcGh5LWJvZHkxLXNpemU6IDFyZW07XG4gIC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplOiAwLjc1cmVtO1xuICAtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplOiAwLjc1cmVtO1xuXG5cblxuICAvKiBDb2xvcnMgKi9cblxuICAtLWNvbG9yLWJnOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XG5cbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbiAgLS1jb2xvci1wcmltYXJ5LWxpZ2h0OiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbiAgLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSk7XG5cbiAgLS1jb2xvci1zZWNvbmRhcnk6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tc2Vjb25kYXJ5KTtcblxuICAtLWNvbG9yLXRlcnRpYXJ5OiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlnbWEtY29sb3ItYmctdGVydGlhcnkpIDUwJSwgdmFyKC0tY29sb3ItYmcpKTtcblxuICAtLWNvbG9yLXRleHQtcHJpbWFyeTogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci10ZXh0LWRpc2FibGVkOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcblxuICAtLWNvbG9yLWVycm9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRhbmdlcik7XG5cblxuXG4gIC8qIEJvcmRlciAqL1xuXG4gIC0tYm9yZGVyLWRpdmlkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xuXG5cblxuICAvKiBCb3JkZXIgcmFkaXVzICovXG5cbiAgLS1ib3JkZXItcmFkaXVzLW1lZGl1bTogMC4xMjVyZW07XG5cblxuICBcbiAgLyogQW5pbWF0aW9uICovXG5cbiAgLS1hbmltYXRpb24tZmFzdDogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjMsIDAsIDAuNCwgMSk7XG4gIC0tYW5pbWF0aW9uLW1lZGl1bTogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjMsIDAsIDAuNCwgMSk7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jdXN0b20vdWktdGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlOztFQUVmLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxxQ0FBcUM7Ozs7RUFJckMsV0FBVzs7RUFFWCxpQ0FBaUM7O0VBRWpDLHdDQUF3QztFQUN4Qyx3REFBd0Q7RUFDeEQsNkNBQTZDO0VBQzdDLDJEQUEyRDs7RUFFM0Qsb0RBQW9EOztFQUVwRCx5RkFBeUY7O0VBRXpGLDZDQUE2QztFQUM3Qyx5REFBeUQ7RUFDekQsdURBQXVEOztFQUV2RCw2Q0FBNkM7Ozs7RUFJN0MsV0FBVzs7RUFFWCxxREFBcUQ7Ozs7RUFJckQsa0JBQWtCOztFQUVsQixnQ0FBZ0M7Ozs7RUFJaEMsY0FBYzs7RUFFZCx3REFBd0Q7RUFDeEQsMERBQTBEOztBQUU1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuOnJvb3Qge1xcblxcbiAgLyogVHlwb2dyYXBoeSAqL1xcblxcbiAgLS10eXBvZ3JhcGh5LWgxLXNpemU6IDRyZW07XFxuICAtLXR5cG9ncmFwaHktaDItc2l6ZTogMnJlbTtcXG4gIC0tdHlwb2dyYXBoeS1ib2R5MS1zaXplOiAxcmVtO1xcbiAgLS10eXBvZ3JhcGh5LWJvZHkyLXNpemU6IDAuNzVyZW07XFxuICAtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplOiAwLjc1cmVtO1xcblxcblxcblxcbiAgLyogQ29sb3JzICovXFxuXFxuICAtLWNvbG9yLWJnOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XFxuXFxuICAtLWNvbG9yLXByaW1hcnk6IHZhcigtLWZpZ21hLWNvbG9yLWljb24pO1xcbiAgLS1jb2xvci1wcmltYXJ5LWxpZ2h0OiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XFxuICAtLWNvbG9yLXByaW1hcnktZGFyazogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XFxuICAtLWNvbG9yLXByaW1hcnktY29udHJhc3Q6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25pbnZlcnNlKTtcXG5cXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XFxuXFxuICAtLWNvbG9yLXRlcnRpYXJ5OiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlnbWEtY29sb3ItYmctdGVydGlhcnkpIDUwJSwgdmFyKC0tY29sb3ItYmcpKTtcXG5cXG4gIC0tY29sb3ItdGV4dC1wcmltYXJ5OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG4gIC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcXG4gIC0tY29sb3ItdGV4dC1kaXNhYmxlZDogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XFxuXFxuICAtLWNvbG9yLWVycm9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRhbmdlcik7XFxuXFxuXFxuXFxuICAvKiBCb3JkZXIgKi9cXG5cXG4gIC0tYm9yZGVyLWRpdmlkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xcblxcblxcblxcbiAgLyogQm9yZGVyIHJhZGl1cyAqL1xcblxcbiAgLS1ib3JkZXItcmFkaXVzLW1lZGl1bTogMC4xMjVyZW07XFxuXFxuXFxuICBcXG4gIC8qIEFuaW1hdGlvbiAqL1xcblxcbiAgLS1hbmltYXRpb24tZmFzdDogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjMsIDAsIDAuNCwgMSk7XFxuICAtLWFuaW1hdGlvbi1tZWRpdW06IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjQsIDEpO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJsb2NrICovXG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIHJvdy1nYXA6IDAuNXJlbTsgKi9cblxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmJsb2NrOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicmFyeS91aS9ibG9ja3MvYmxvY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7O0FBRVY7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCOztFQUVyQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmxvY2sgKi9cXG5cXG4uYmxvY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIHJvdy1nYXA6IDAuNXJlbTsgKi9cXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uYmxvY2s6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQnV0dG9uICovXG5cblxuLmNvbXBvbmVudC5idXR0b24ubWVkaXVtIHtcbiAgcGFkZGluZzogMXJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAwLjVyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZWRpdW0pO1xufVxuXG4uY29tcG9uZW50LmJ1dHRvbiAubGFiZWwge1xuICB3aWR0aDogMTAwJTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKSAhaW1wb3J0YW50O1xuXG4gIGNvbG9yOiBpbmhlcml0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOzs7QUFHWDtFQUNFLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlOztFQUVmLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLGtEQUFrRDs7RUFFbEQsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCdXR0b24gKi9cXG5cXG5cXG4uY29tcG9uZW50LmJ1dHRvbi5tZWRpdW0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogMC41cmVtO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZWRpdW0pO1xcbn1cXG5cXG4uY29tcG9uZW50LmJ1dHRvbiAubGFiZWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSkgIWltcG9ydGFudDtcXG5cXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRleHRGaWVsZCAqL1xuXG5cbi5jb21wb25lbnQuY2hlY2tib3gge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2x1bW4tZ2FwOiAwLjc1cmVtO1xuXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1kaXZpZGVyKTtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94Lm1lZGl1bSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94LmxhcmdlIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xufVxuXG5cblxuLyogQ2hlY2tib3ggKi9cblxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZGlzcGxheTogZmxleGJveDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1lZGl1bSk7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3gubWVkaXVtIC50b2dnbGUge1xuICBtaW4td2lkdGg6IDEuMjVyZW07XG4gIG1hcmdpbjogMC4zcmVtIDA7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3gubGFyZ2UgLnRvZ2dsZSB7XG4gIG1pbi13aWR0aDogMS43NXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUgLmZpbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcblxuICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltYXRpb24tZmFzdCk7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSAudGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoY2FsYygyMC8yNCkpO1xufVxuXG5cblxuLyogVGV4dCAqL1xuXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbn1cblxuXG5cbi8qIFByaW1hcnkgdGV4dCAqL1xuXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKTtcbn1cblxuXG5cbi8qIFNlY29uZGFyeSB0ZXh0ICovXG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnNlY29uZGFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKTtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAuc2Vjb25kYXJ5LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOzs7QUFHZDtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7O0FBSUEsYUFBYTs7QUFFYjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix1QkFBdUI7O0VBRXZCLHVDQUF1Qzs7RUFFdkMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7O0VBRWhDLGtCQUFrQjs7RUFFbEIsc0NBQXNDOztFQUV0QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtREFBbUQ7QUFDckQ7Ozs7QUFJQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9COztFQUVwQixrQkFBa0I7QUFDcEI7Ozs7QUFJQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVDQUF1QztBQUN6Qzs7OztBQUlBLG1CQUFtQjs7QUFFbkI7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRleHRGaWVsZCAqL1xcblxcblxcbi5jb21wb25lbnQuY2hlY2tib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxuXFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItZGl2aWRlcik7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3g6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3gubWVkaXVtIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveC5sYXJnZSB7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgbWluLWhlaWdodDogMy41cmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBDaGVja2JveCAqL1xcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXhib3g7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZWRpdW0pO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94Lm1lZGl1bSAudG9nZ2xlIHtcXG4gIG1pbi13aWR0aDogMS4yNXJlbTtcXG4gIG1hcmdpbjogMC4zcmVtIDA7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3gubGFyZ2UgLnRvZ2dsZSB7XFxuICBtaW4td2lkdGg6IDEuNzVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSAuZmlsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltYXRpb24tZmFzdCk7XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSAudGljayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKGNhbGMoMjAvMjQpKTtcXG59XFxuXFxuXFxuXFxuLyogVGV4dCAqL1xcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBQcmltYXJ5IHRleHQgKi9cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpO1xcbn1cXG5cXG5cXG5cXG4vKiBTZWNvbmRhcnkgdGV4dCAqL1xcblxcbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnNlY29uZGFyeSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5zZWNvbmRhcnkuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVGV4dEZpZWxkICovXG5cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAwLjVyZW07XG5cbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWRpdmlkZXIpO1xufVxuXG4uY29tcG9uZW50LnRleHRmaWVsZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG5cblxuLyogTGFiZWwgKi9cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcblxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xufVxuXG4uY29tcG9uZW50LnRleHRmaWVsZCAuc3VmZml4bGFiZWwge1xuICBmbGV4LXNocmluazogMTA7XG5cbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cblxuXG4vKiBJbnB1dCB3cmFwcGVyICovXG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5pbnB1dHdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5cblxuLyogSW5wdXQgKi9cblxuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dC5zbWFsbCB7XG4gIGhlaWdodDogMnJlbTtcblxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTEtc2l6ZSkgIWltcG9ydGFudDtcbn1cblxuaW5wdXQubWVkaXVtIHtcbiAgaGVpZ2h0OiAzcmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1oMi1zaXplKSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbn1cblxuaW5wdXQubGFyZ2Uge1xuICBoZWlnaHQ6IDVyZW07XG5cbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWgxLXNpemUpICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xufVxuXG5pbnB1dC5kaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbn1cblxuXG5cbi8qIEhlbHBlciB0ZXh0cyAqL1xuXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG5cbiAgdHJhbnNpdGlvbjogdmFyKC0tYW5pbWF0aW9uLW1lZGl1bSk7XG59XG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0LmVycm9yIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbn1cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQuaGlkZGVuIHtcbiAgaGVpZ2h0OiAxcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicmFyeS91aS9jb21wb25lbnRzL3RleHRmaWVsZC90ZXh0ZmllbGQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7OztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlOztFQUVmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7OztBQUlBLFVBQVU7O0FBRVY7RUFDRSxXQUFXOztFQUVYLG1CQUFtQjs7RUFFbkIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixpQkFBaUI7RUFDakIsdURBQXVEO0VBQ3ZELGtDQUFrQztBQUNwQzs7OztBQUlBLGtCQUFrQjs7QUFFbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7Ozs7QUFJQSxVQUFVOztBQUVWO0VBQ0UsU0FBUztFQUNULFdBQVc7O0VBRVgsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsZ0NBQWdDOztFQUVoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLFlBQVk7O0VBRVosK0NBQStDO0VBQy9DLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosK0NBQStDO0VBQy9DLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7OztBQUlBLGlCQUFpQjs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjs7RUFFdEIsYUFBYTtFQUNiLHFCQUFxQjs7RUFFckIsdURBQXVEO0VBQ3ZELGtDQUFrQzs7RUFFbEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRleHRGaWVsZCAqL1xcblxcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogMC41cmVtO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWRpdmlkZXIpO1xcbn1cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZDpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuXFxuXFxuLyogTGFiZWwgKi9cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAubGFiZWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLnN1ZmZpeGxhYmVsIHtcXG4gIGZsZXgtc2hyaW5rOiAxMDtcXG5cXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XFxufVxcblxcblxcblxcbi8qIElucHV0IHdyYXBwZXIgKi9cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaW5wdXR3cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcblxcblxcbi8qIElucHV0ICovXFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5pbnB1dC5zbWFsbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTEtc2l6ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuaW5wdXQubWVkaXVtIHtcXG4gIGhlaWdodDogM3JlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1oMi1zaXplKSAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XFxufVxcblxcbmlucHV0LmxhcmdlIHtcXG4gIGhlaWdodDogNXJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1oMS1zaXplKSAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2ZW07XFxufVxcblxcbmlucHV0LmRpc2FibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRpc2FibGVkKTtcXG59XFxuXFxuXFxuXFxuLyogSGVscGVyIHRleHRzICovXFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xcblxcbiAgdHJhbnNpdGlvbjogdmFyKC0tYW5pbWF0aW9uLW1lZGl1bSk7XFxufVxcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0LmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XFxufVxcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0LmhpZGRlbiB7XFxuICBoZWlnaHQ6IDFweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9jdXN0b20vdWktdGhlbWUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL2N1c3RvbS91aS1wYWxldHRlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jsb2Nrcy9ibG9jay5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3RleHRmaWVsZC90ZXh0ZmllbGQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRoZW1lICovXG5cblxuLyogQmxvY2tzICovXG5cblxuLyogQ29tcG9uZW50cyAqL1xuXG5cblxuYm9keSwgZGl2LCBpbnB1dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG5cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4vKiBEaXNhYmxlIGV2ZW50IGNhcHR1cmluZyBpbiBpY29uIFNWR3MgKi9cblxuLmljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG5cbi8qIEZpbGwgb3IgaHVnICovXG5cbi5maWxsQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicmFyeS91aS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVOzs7QUFNVixXQUFXOzs7QUFLWCxlQUFlOzs7O0FBUWY7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFHQUFxRztFQUNyRyxrQkFBa0I7RUFDbEIsOEJBQThCOztFQUU5Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0EseUNBQXlDOztBQUV6QztFQUNFLG9CQUFvQjtBQUN0Qjs7OztBQUlBLGdCQUFnQjs7QUFFaEI7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGhlbWUgKi9cXG5cXG5AaW1wb3J0IFxcXCIuLi8uLi9jdXN0b20vdWktdGhlbWUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9jdXN0b20vdWktcGFsZXR0ZS5jc3NcXFwiO1xcblxcblxcbi8qIEJsb2NrcyAqL1xcblxcbkBpbXBvcnQgXFxcIi4vYmxvY2tzL2Jsb2NrLmNzc1xcXCI7XFxuXFxuXFxuLyogQ29tcG9uZW50cyAqL1xcblxcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzXFxcIjtcXG5cXG5cXG5cXG5ib2R5LCBkaXYsIGlucHV0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcblxcbi8qIERpc2FibGUgZXZlbnQgY2FwdHVyaW5nIGluIGljb24gU1ZHcyAqL1xcblxcbi5pY29uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG5cXG4vKiBGaWxsIG9yIGh1ZyAqL1xcblxcbi5maWxsQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IHByaW1hcnkgPSBcImNvbG9yOiAjOTc0N0ZGO1wiO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeSA9IFwiY29sb3I6ICNDMTkxRkY7XCI7XG5leHBvcnQgY29uc3QgZXJyb3IgPSBcImNvbG9yOiAjZjMwO1wiO1xuIiwiLyogVHlwZXMgKi8gaW1wb3J0IHsgVUlCbG9jaywgVUlGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N5c3RlbS90eXBlc1wiO1xuZXhwb3J0IGNsYXNzIFVzZXJJbnB1dCBleHRlbmRzIFVJQmxvY2sge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHN1cGVyKG5vZGVzKTtcbiAgICB9XG4gICAgLy8gQWRkcyBhbiBpbnB1dCBjaGlsZC5cbiAgICBhZGRJbnB1dENvbXBvbmVudChub2Rlcykge1xuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKG5vZGVzKTtcbiAgICB9XG4gICAgLy8gR2V0cyBhbGwgaW5wdXQgZnJvbSBjaGlsZHJlbiBmb3JtIGNvbXBvbmVudHMuXG4gICAgZ2V0QWxsSW5wdXQoKSB7XG4gICAgICAgIC8vIFNldCB1cCB0aGUgcmVzdWx0LlxuICAgICAgICBsZXQgZm9ybUlucHV0ID0ge307XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBWYWxpZE5vZGVzLlxuICAgICAgICBsZXQgbm9kZU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbik7XG4gICAgICAgIGZvciAobGV0IG5hbWUgb2Ygbm9kZU5hbWVzKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVUlGb3JtQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIGZvcm1JbnB1dFtuYW1lXSA9IGNoaWxkLmdldElucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1JbnB1dDtcbiAgICB9XG59XG4iLCIvKiBUeXBlcyAqLyBpbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zeXN0ZW0vdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodmFyaWFudCwgY29sb3IsIHNpemUsIGxhYmVsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zdWZmaXhJY29uKVxuICAgICAgICAgICAgdGhpcy5zdWZmaXhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gQ29tcG9uZW50IGRpdi5cbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImNvbXBvbmVudFwiLCBcImJ1dHRvblwiLCB2YXJpYW50LCBjb2xvciwgc2l6ZSwgXCJlbmFibGVkXCIpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmh1ZylcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQob3B0aW9ucy5odWcpO1xuICAgICAgICAvLyBMYWJlbC5cbiAgICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIik7XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gbGFiZWw7XG4gICAgICAgIC8vIEFwcGVuZCBhbGwuXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgICBpZiAodGhpcy5zdWZmaXhJY29uKVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdWZmaXhJY29uKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGNhbGxiYWNrKGUpOyB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5hYmxlZFwiO1xuICAgIH1cbiAgICBlcnJvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlcnJvclwiO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImRpc2FibGVkXCI7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImVuYWJsZWRcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuYWJsZWRcIjtcbiAgICB9XG59XG4iLCIvKiBUeXBlcyAqLyBpbXBvcnQgeyBVSUZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vc3lzdGVtL3R5cGVzXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCAqIGFzIGNyZWF0ZVNWRyBmcm9tIFwiLi4vLi4vaGVscGVycy9jcmVhdGUtc3ZnXCI7XG5leHBvcnQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBVSUZvcm1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gQ29tcG9uZW50IGRpdi5cbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImNvbXBvbmVudFwiLCBcImNoZWNrYm94XCIsIG9wdGlvbnMuc2l6ZSk7XG4gICAgICAgIC8vIENoZWNrYm94LlxuICAgICAgICB0aGlzLmNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpO1xuICAgICAgICBsZXQgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpbGwuY2xhc3NMaXN0LmFkZChcImZpbGxcIik7XG4gICAgICAgIGZpbGwuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgZmlsbC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5maWxsRGlhbWV0ZXIgPSAwO1xuICAgICAgICBsZXQgdGljayA9IGNyZWF0ZVNWRy5pY29uKDI0LCAyNCwgXCJNMTkuMDY5NCA2Ljk4ODFMOS41NDIzNiAxOC4xMDNMNC45Njk2NyAxMy41MzAzTDYuMDMwMzMgMTIuNDY5N0w5LjQ1NzYzIDE1Ljg5N0wxNy45MzA2IDYuMDExOTFMMTkuMDY5NCA2Ljk4ODFaXCIsIFwidmFyKC0tY29sb3ItdGVydGlhcnkpXCIpO1xuICAgICAgICB0aWNrLmNsYXNzTGlzdC5hZGQoXCJ0aWNrXCIsIFwiaWNvblwiKTtcbiAgICAgICAgLy8gVGV4dCBmb3IgY2hlY2tib3guXG4gICAgICAgIGxldCBwcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJpbWFyeS5jbGFzc0xpc3QuYWRkKFwicHJpbWFyeVwiKTtcbiAgICAgICAgcHJpbWFyeS50ZXh0Q29udGVudCA9IG9wdGlvbnMucHJpbWFyeVRleHQ7XG4gICAgICAgIGxldCBzZWNvbmRhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWNvbmRhcnkuY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeVwiKTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNlY29uZGFyeVRleHQpXG4gICAgICAgICAgICBzZWNvbmRhcnkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy50ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgICAgICB0aGlzLnRleHQuYXBwZW5kQ2hpbGQocHJpbWFyeSk7XG4gICAgICAgIHRoaXMudGV4dC5hcHBlbmRDaGlsZChzZWNvbmRhcnkpO1xuICAgICAgICB0aGlzLnRleHQuYXBwZW5kQ2hpbGQodGhpcy5oZWxwZXJUZXh0KTtcbiAgICAgICAgLy8gQXBwZW5kLlxuICAgICAgICB0aGlzLmNoZWNrYm94LmFwcGVuZENoaWxkKGZpbGwpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmFwcGVuZENoaWxkKHRpY2spO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrYm94KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhdGUgYW5kIGxpc3RlbmVycy5cbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrKCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2V0IHVwIGlucHV0IHJldHJpZXZhbC5cbiAgICAgICAgdGhpcy5nZXRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEZpbGxEaWFtZXRlcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmNoZWNrYm94Lm9mZnNldEhlaWdodCAqIHRoaXMuY2hlY2tib3gub2Zmc2V0SGVpZ2h0ICsgdGhpcy5jaGVja2JveC5vZmZzZXRXaWR0aCAqIHRoaXMuY2hlY2tib3gub2Zmc2V0V2lkdGgpO1xuICAgIH1cbiAgICBjaGVjaygpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGwgZGlhbWV0ZXIgaGFzIG5vdCBiZWVuIGNhbGN1bGF0ZWQgeWV0IGFzIHRoZSBjb21wb25lbnQgaXMgbm90IHlldCBhcHBlbmRlZCB0byB0aGUgRE9NLlxuICAgICAgICBpZiAodGhpcy5maWxsRGlhbWV0ZXIgPT09IDApXG4gICAgICAgICAgICB0aGlzLmZpbGxEaWFtZXRlciA9IHRoaXMuZ2V0RmlsbERpYW1ldGVyKCk7XG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5jaGVja2JveC5jaGlsZHJlblswXTtcbiAgICAgICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke1N0cmluZyh0aGlzLmZpbGxEaWFtZXRlcil9cHhgO1xuICAgICAgICBmaWxsLnN0eWxlLmhlaWdodCA9IGAke1N0cmluZyh0aGlzLmZpbGxEaWFtZXRlcil9cHhgO1xuICAgICAgICBsZXQgdGljayA9IHRoaXMuY2hlY2tib3guY2hpbGRyZW5bMV07XG4gICAgICAgIHRpY2suc3R5bGUuZmlsbCA9IFwidmFyKC0tY29sb3ItYmcpXCI7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIHVuY2hlY2soKSB7XG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5jaGVja2JveC5jaGlsZHJlblswXTtcbiAgICAgICAgZmlsbC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICBmaWxsLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICBsZXQgdGljayA9IHRoaXMuY2hlY2tib3guY2hpbGRyZW5bMV07XG4gICAgICAgIHRpY2suc3R5bGUuZmlsbCA9IFwidmFyKC0tY29sb3ItdGVydGlhcnkpXCI7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVQcmltYXJ5VGV4dCh0ZXh0KSB7XG4gICAgICAgIGxldCBwcmltYXJ5VGV4dCA9IHRoaXMudGV4dC5jaGlsZHJlblswXTtcbiAgICAgICAgcHJpbWFyeVRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmZpbGxEaWFtZXRlciA9IHRoaXMuZ2V0RmlsbERpYW1ldGVyKCk7XG4gICAgfVxuICAgIHVwZGF0ZVNlY29uZGFyeVRleHQodGV4dCkge1xuICAgICAgICBsZXQgc2Vjb25kYXJ5VGV4dCA9IHRoaXMudGV4dC5jaGlsZHJlblsxXTtcbiAgICAgICAgc2Vjb25kYXJ5VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHNlY29uZGFyeVRleHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2Vjb25kYXJ5VGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLmZpbGxEaWFtZXRlciA9IHRoaXMuZ2V0RmlsbERpYW1ldGVyKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGljb24od2lkdGgsIGhlaWdodCwgZCwgZmlsbCkge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHdpZHRoKSk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaGVpZ2h0KSk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGZpbGw6ICR7ZmlsbH07YCk7XG4gICAgbGV0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsLXJ1bGVcIiwgXCJldmVub2RkXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiY2xpcC1ydWxlXCIsIFwiZXZlbm9kZFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIHJldHVybiBzdmc7XG59XG4iLCIvKiBUeXBlcyAqLyBpbXBvcnQgeyBVSUJsb2NrLCBVSUNvbXBvbmVudCB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgY2xhc3MgVUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBMb2cgdG8gY29uc29sZSBmb3IgZGVidWdnaW5nLlxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjVUkgY3JlYXRlZC5cIiwgXCJjb2xvcjogI2NjY1wiKTtcbiAgICAgICAgbGV0IGluc2VydGlvblBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKTtcbiAgICAgICAgdGhpcy5wYW5lbCA9IGluc2VydGlvblBvaW50O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhbmVsKTtcbiAgICB9XG4gICAgYXBwZW5kKG5vZGVzKSB7XG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBhIGZyYWdtZW50IGJlZm9yZSBhcHBlbmRpbmcgdG8gdGhlIFVJLlxuICAgICAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgVUlCbG9jayB8fCBub2RlIGluc3RhbmNlb2YgVUlDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5ub2RlKCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cbn1cbi8vIFNlbmQgbWVzc2FnZSB0byB0aGUgcGx1Z2luLlxuZXhwb3J0IGZ1bmN0aW9uIHRvUGx1Z2luKG1lc3NhZ2UpIHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiBtZXNzYWdlIH0sICcqJyk7XG59XG4iLCIvKiBTeXN0ZW0gKi8gaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi9jb25zb2xlLXRoZW1lXCI7XG4vLyBHZW5lcmljIGNvbXBvbmVudCBjbGFzcyB0aGF0IGFsbCBVSUNvbXBvbmVudHMgYXJlIGV4dGVuZGVkIGZyb20uXG5leHBvcnQgY2xhc3MgVUlDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgfVxuICAgIC8vIEdldHMgdGhlIEhUTUwgbm9kZSBvZiB0aGUgY29tcG9uZW50LlxuICAgIG5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG59XG4vLyBHZW5lcmljIGNsYXNzIHRoYXQgYWxsIGZvcm0gY29tcG9uZW5ldHMgYXJlIGV4dGVuZGVkIGZyb20uXG5leHBvcnQgY2xhc3MgVUlGb3JtQ29tcG9uZW50IGV4dGVuZHMgVUlDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZWxlbWVudFwiKTtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGhlbHBlciB0ZXh0IGRpdi4gVGhlIGNvbXBvbmVudCBzaG91bGQgYWRkIHRoaXMgaW4gdGhlIHJpZ2h0IHBsYWNlIG9yIGl0IHdpbGwgbm90IGFwcGVhci5cbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJoZWxwZXJ0ZXh0XCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmFibGVkXCI7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXQgPSAoKSA9PiB7IGNvbnNvbGUubG9nKFwiTm8gZnVuY3Rpb25zIGRlZmluZWQgeWV0LlwiLCBjb25zb2xlVGhlbWUuZXJyb3IpOyB9O1xuICAgIH1cbiAgICAvLyBTZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gZGlzYWJsZWQuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZWRcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJkaXNhYmxlZFwiO1xuICAgIH1cbiAgICAvLyBTZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gZW5hYmxlZC5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiLCBcImVycm9yXCIpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlZFwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5hYmxlZFwiO1xuICAgIH1cbiAgICAvLyBTZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gZXJyb3IuXG4gICAgZXJyb3IobWVzc2FnZSkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVycm9yXCI7XG4gICAgICAgIHRoaXMuaGVscGVyVGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgfVxufVxuLy8gR2VuZXJpYyBibG9jayBjbGFzcyB0aGF0IGFsbCBVSUJsb2NrcyBhcmUgZXh0ZW5kZWQgZnJvbS5cbmV4cG9ydCBjbGFzcyBVSUJsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcihub2Rlcykge1xuICAgICAgICB0aGlzLmJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgaWYgKG5vZGVzKVxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihub2Rlcyk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgc2VsZi5cbiAgICBub2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9jaztcbiAgICB9XG4gICAgLy8gUmV0dXJucyBhIEhUTUxFbGVtZW50LlxuICAgIGdldENoaWxkTm9kZShub2RlTmFtZSkge1xuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW25vZGVOYW1lXTtcbiAgICAgICAgaWYgKCFjaGlsZClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQubm9kZSgpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIHRoZSBjaGlsZCBhcy1pcywgaWYgZm91bmQuXG4gICAgZ2V0Q2hpbGQobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bbm9kZU5hbWVdIHx8IG51bGw7XG4gICAgfVxuICAgIC8vIEFkZHMgYSBjaGlsZCB0byB0aGUgRE9NIGFuZCB0aGUgbGlzdC5cbiAgICBhZGRDaGlsZHJlbihub2Rlcykge1xuICAgICAgICBsZXQgbm9kZU5hbWVzID0gT2JqZWN0LmtleXMobm9kZXMpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggVUlOb2RlTGlzdC5cbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBub2RlTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZCA9IG5vZGVzW25hbWVdO1xuICAgICAgICAgICAgLy8gSWYgZW50cnkgaW4gdGhlIFVJTm9kZUxpc3QgaXMgYSBVSUJsb2NrIG9yIFVJQ29tcG9uZW50LlxuICAgICAgICAgICAgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgVUlCbG9jayB8fCBuZXdDaGlsZCBpbnN0YW5jZW9mIFVJQ29tcG9uZW50IHx8IG5ld0NoaWxkIGluc3RhbmNlb2YgVUlDb250YWluZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hcHBlbmRDaGlsZChuZXdDaGlsZC5ub2RlKCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Vycm9yIGFwcGVuZGluZyBjaGlsZCB0byBCbG9jay4gJHtuYW1lfSBpcyBub3Qgb2YgYSB2YWxpZCB0eXBlLmAsIGNvbnNvbGVUaGVtZS5lcnJvcik7XG4gICAgICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGNoaWxkcmVuIGxpc3QuXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW25hbWVdID0gbm9kZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBHZW5lcmljIGNvbnRhaW5lciBkaXYgdG8gcHV0IGFueSBjb250ZW50LlxuZXhwb3J0IGNsYXNzIFVJQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihub2Rlcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgaWYgKG5vZGVzKVxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihub2Rlcyk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgc2VsZi5cbiAgICBub2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBIVE1MRWxlbWVudC5cbiAgICBnZXRDaGlsZE5vZGUobm9kZU5hbWUpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltub2RlTmFtZV07XG4gICAgICAgIGlmICghY2hpbGQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBVSUJsb2NrIHx8IGNoaWxkIGluc3RhbmNlb2YgVUlDb21wb25lbnQpXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQubm9kZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIC8vIFJldHVybnMgdGhlIGNoaWxkIGFzLWlzLCBpZiBmb3VuZC5cbiAgICBnZXRDaGlsZChub2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltub2RlTmFtZV0gfHwgbnVsbDtcbiAgICB9XG4gICAgLy8gQWRkcyBhIGNoaWxkIHRvIHRoZSBET00gYW5kIHRoZSBsaXN0LlxuICAgIGFkZENoaWxkcmVuKG5vZGVzKSB7XG4gICAgICAgIGxldCBub2RlTmFtZXMgPSBPYmplY3Qua2V5cyhub2Rlcyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBVSU5vZGVMaXN0LlxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIG5vZGVOYW1lcykge1xuICAgICAgICAgICAgbGV0IG5ld0NoaWxkID0gbm9kZXNbbmFtZV07XG4gICAgICAgICAgICAvLyBJZiBlbnRyeSBpbiB0aGUgVUlOb2RlTGlzdCBpcyBhIFVJQmxvY2sgb3IgVUlDb21wb25lbnQuXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBVSUJsb2NrIHx8IG5ld0NoaWxkIGluc3RhbmNlb2YgVUlDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2hpbGQubm9kZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNFcnJvciBhcHBlbmRpbmcgY2hpbGQgdG8gQ29udGFpbmVyLiAke25hbWV9IGlzIG5vdCBvZiBhIHZhbGlkIHR5cGUuYCwgY29uc29sZVRoZW1lLmVycm9yKTtcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bbmFtZV0gPSBub2Rlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVSUZyYWdtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihub2Rlcykge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBsZXQgbm9kZU5hbWVzID0gT2JqZWN0LmtleXMobm9kZXMpO1xuICAgICAgICBmb3IgKGxldCBub2RlTmFtZSBvZiBub2RlTmFtZXMpXG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW25vZGVOYW1lXS5ub2RlKCkpO1xuICAgIH1cbiAgICBhZGROb2Rlcyhub2RlKSB7XG4gICAgfVxuICAgIHB1Ymxpc2hUbyhub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSlcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5mcmFnbWVudCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Vycm9yIGFwcGVuZGluZyBmcmFnbWVudCB0byBub2RlLiBOb2RlIGlzIG5vdCBhIHZhbGlkIERPTSBlbGVtZW50LmAsIFwiY29sb3I6ICNmMzA7XCIpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIFVJICovIGltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4uLy4uL2xpYnJhcnkvdWkvc3lzdGVtL2NvcmVcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBCbG9ja3MgKi8gaW1wb3J0IHsgVXNlcklucHV0IH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvdWkvYmxvY2tzL3VzZXJpbnB1dFwiO1xuLyogQ29tcG9uZW50cyAqLyBpbXBvcnQgeyBVSUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3VpL3N5c3RlbS90eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3VpL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3hcIjtcbi8vIExvZyB0byBjb25zb2xlIGZvciBkZWJ1Z2dpbmcuXG5jb25zb2xlLmxvZyhcIiVjVUkgY3JlYXRlZC5cIiwgXCJjb2xvcjogI2NjY1wiKTtcbi8vIENyZWF0ZSBVSS5cbmxldCB1aSA9IG5ldyBjb3JlLlVJKCk7XG5sZXQgZGltZW5zaW9ucyA9IG5ldyBVSUNvbnRhaW5lcigpO1xuZGltZW5zaW9ucy5ub2RlKCkudGV4dENvbnRlbnQgPSBcIkRpbWVuc2lvbnNcIjtcbmRpbWVuc2lvbnMubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjEuNXJlbSAwLjc1cmVtIDAuNzVyZW1cIjtcbmRpbWVuc2lvbnMubm9kZSgpLnN0eWxlLmZvbnRTaXplID0gXCJ2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpXCI7XG5kaW1lbnNpb25zLm5vZGUoKS5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbmxldCB3aWR0aCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIldpZHRoXCIgfSksIGhlaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkhlaWdodFwiIH0pLCBtYXhXaWR0aCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIk1heC13aWR0aFwiIH0pLCBtaW5XaWR0aCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIk1pbi13aWR0aFwiIH0pLCBtYXhIZWlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNYXgtaGVpZ2h0XCIgfSksIG1pbkhlaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIk1pbi1oZWlnaHRcIiB9KTtcbmxldCBhdXRvTGF5b3V0ID0gbmV3IFVJQ29udGFpbmVyKCk7XG5hdXRvTGF5b3V0Lm5vZGUoKS50ZXh0Q29udGVudCA9IFwiQXV0by1sYXlvdXRcIjtcbmF1dG9MYXlvdXQubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjEuNXJlbSAwLjc1cmVtIDAuNzVyZW1cIjtcbmF1dG9MYXlvdXQubm9kZSgpLnN0eWxlLmZvbnRTaXplID0gXCJ2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpXCI7XG5hdXRvTGF5b3V0Lm5vZGUoKS5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbmxldCBwYWRkaW5nVG9wID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVG9wIHBhZGRpbmdcIiB9KSwgcGFkZGluZ0JvdHRvbSA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkJvdHRvbSBwYWRkaW5nXCIgfSksIHBhZGRpbmdMZWZ0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTGVmdCBwYWRkaW5nXCIgfSksIHBhZGRpbmdSaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIlJpZ2h0IHBhZGRpbmdcIiB9KTtcbmxldCBpdGVtU3BhY2luZyA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkl0ZW0gc3BhY2luZ1wiIH0pLCBjb3VudGVyQXhpc1NwYWNpbmcgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJDb3VudGVyIGF4aXMgc3BhY2luZ1wiIH0pO1xubGV0IHJhZGl1cyA9IG5ldyBVSUNvbnRhaW5lcigpO1xucmFkaXVzLm5vZGUoKS50ZXh0Q29udGVudCA9IFwiUmFkaXVzXCI7XG5yYWRpdXMubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjEuNXJlbSAwLjc1cmVtIDAuNzVyZW1cIjtcbnJhZGl1cy5ub2RlKCkuc3R5bGUuZm9udFNpemUgPSBcInZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSlcIjtcbnJhZGl1cy5ub2RlKCkuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG5sZXQgcmFkaXVzVG9wTGVmdCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIlRvcCBsZWZ0IHJhZGl1c1wiIH0pLCByYWRpdXNUb3BSaWdodCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIlRvcCByaWdodCByYWRpdXNcIiB9KSwgcmFkaXVzQm90dG9tUmlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJCb3R0b20gbGVmdCByYWRpdXNcIiB9KSwgcmFkaXVzQm90dG9tTGVmdCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkJvdHRvbSByaWdodCByYWRpdXNcIiB9KTtcbmxldCBvdGhlcnMgPSBuZXcgVUlDb250YWluZXIoKTtcbm90aGVycy5ub2RlKCkudGV4dENvbnRlbnQgPSBcIk90aGVyc1wiO1xub3RoZXJzLm5vZGUoKS5zdHlsZS5wYWRkaW5nID0gXCIxLjVyZW0gMC43NXJlbSAwLjc1cmVtXCI7XG5vdGhlcnMubm9kZSgpLnN0eWxlLmZvbnRTaXplID0gXCJ2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpXCI7XG5vdGhlcnMubm9kZSgpLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xubGV0IGZpdCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkZpdFwiIH0pLCB2aXNpYmlsaXR5ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVmlzaWJpbGl0eVwiIH0pLCBtb2RlID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTW9kZXNcIiB9KSwgdHlwb2dyYXBoeSA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIlR5cG9ncmFwaHlcIiB9KTtcbmxldCBjdGEgPSBuZXcgVUlDb250YWluZXIoe1xuICAgIHByaW1hcnk6IG5ldyBCdXR0b24oXCJjb250YWluZWRcIiwgXCJwcmltYXJ5XCIsIFwibWVkaXVtXCIsIFwiUmVzZXQgaW5zdGFuY2VzXCIsIHN0YXJ0UGx1Z2luLCB7IGh1ZzogXCJmaWxsQ29udGFpbmVyXCIgfSlcbn0pO1xuY3RhLm5vZGUoKS5zdHlsZS5wYWRkaW5nID0gXCIyLjI1cmVtIDAuNzVyZW0gMC43NXJlbVwiO1xubGV0IHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoe1xuICAgIFwiZGltZW5zaW9uc1wiOiBkaW1lbnNpb25zLFxuICAgIFwid2lkdGhcIjogd2lkdGgsXG4gICAgXCJoZWlnaHRcIjogaGVpZ2h0LFxuICAgIFwibWF4V2lkdGhcIjogbWF4V2lkdGgsXG4gICAgXCJtaW5XaWR0aFwiOiBtaW5XaWR0aCxcbiAgICBcIm1heEhlaWdodFwiOiBtYXhIZWlnaHQsXG4gICAgXCJtaW5IZWlnaHRcIjogbWluSGVpZ2h0LFxuICAgIFwiYXV0b0xheW91dFwiOiBhdXRvTGF5b3V0LFxuICAgIFwicGFkZGluZ1RvcFwiOiBwYWRkaW5nVG9wLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBwYWRkaW5nQm90dG9tLFxuICAgIFwicGFkZGluZ0xlZnRcIjogcGFkZGluZ0xlZnQsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogcGFkZGluZ1JpZ2h0LFxuICAgIFwiaXRlbVNwYWNpbmdcIjogaXRlbVNwYWNpbmcsXG4gICAgXCJjb3VudGVyQXhpc1NwYWNpbmdcIjogY291bnRlckF4aXNTcGFjaW5nLFxuICAgIFwicmFkaXVzXCI6IHJhZGl1cyxcbiAgICBcInJhZGl1c1RvcExlZnRcIjogcmFkaXVzVG9wTGVmdCxcbiAgICBcInJhZGl1c1RvcFJpZ2h0XCI6IHJhZGl1c1RvcFJpZ2h0LFxuICAgIFwicmFkaXVzQm90dG9tUmlnaHRcIjogcmFkaXVzQm90dG9tUmlnaHQsXG4gICAgXCJyYWRpdXNCb3R0b21MZWZ0XCI6IHJhZGl1c0JvdHRvbUxlZnQsXG4gICAgXCJvdGhlcnNcIjogb3RoZXJzLFxuICAgIFwiZml0XCI6IGZpdCxcbiAgICBcInZpc2liaWxpdHlcIjogdmlzaWJpbGl0eSxcbiAgICBcIm1vZGVcIjogbW9kZSxcbiAgICBcInR5cG9ncmFwaHlcIjogdHlwb2dyYXBoeSxcbiAgICBcImN0YVwiOiBjdGFcbn0pO1xudWkuYXBwZW5kKFt1c2VySW5wdXRdKTtcbi8vIFNlbmQgaGVpZ2h0IG9mIFVJIHRvIHRoZSBwbHVnaW4uXG5jb3JlLnRvUGx1Z2luKHsgY29tbWFuZDogXCJyZXNpemVcIiwgYXJnczogeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDkyMCB9IH0pO1xuZnVuY3Rpb24gc3RhcnRQbHVnaW4oZSkge1xuICAgIGxldCBpbnB1dCA9IHVzZXJJbnB1dC5nZXRBbGxJbnB1dCgpO1xuICAgIGNvbnNvbGUubG9nKFwiJWNVc2VyIGlucHV0IHJlY2VpdmVkOlwiLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGNvcmUudG9QbHVnaW4oeyBjb21tYW5kOiBcInN0YXJ0UmVzZXR0aW5nXCIsIGFyZ3M6IHsgaW5wdXQ6IGlucHV0IH0gfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9