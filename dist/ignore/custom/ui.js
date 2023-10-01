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
let fit = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Fit" }), fill = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Fill" }), stroke = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Stroke" }), visibility = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Visibility" }), mode = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Modes" }), typography = new _library_ui_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox({ size: "medium", primaryText: "Typography" });
let cta = new _library_ui_system_types__WEBPACK_IMPORTED_MODULE_3__.UIContainer({
    primary: new _library_ui_components_button_button__WEBPACK_IMPORTED_MODULE_4__.Button("contained", "primary", "medium", "Reset instances", startPlugin, { hug: "fillContainer" })
});
cta.node().style.padding = "0.75rem";
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
    "fill": fill,
    "stroke": stroke,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL3VpLXBhbGV0dGUuY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS91aS10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9ibG9ja3MvYmxvY2suY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNzcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL21haW4uY3NzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS9jb25zb2xlLXRoZW1lLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvdWkvYmxvY2tzL3VzZXJpbnB1dC50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9oZWxwZXJzL2NyZWF0ZS1zdmcudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9zeXN0ZW0vY29yZS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L3VpL3N5c3RlbS90eXBlcy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jdXN0b20tdWkudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS91aS9tYWluLmNzcz80OTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJpbWFyeS5jb250YWluZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG4ucHJpbWFyeS5jb250YWluZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuLnByaW1hcnkub3V0bGluZWQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jdXN0b20vdWktcGFsZXR0ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByaW1hcnkuY29udGFpbmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xcbn1cXG5cXG4ucHJpbWFyeS5jb250YWluZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5wcmltYXJ5Lm91dGxpbmVkIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuOnJvb3Qge1xuXG4gIC8qIFR5cG9ncmFwaHkgKi9cblxuICAtLXR5cG9ncmFwaHktaDEtc2l6ZTogNHJlbTtcbiAgLS10eXBvZ3JhcGh5LWgyLXNpemU6IDJyZW07XG4gIC0tdHlwb2dyYXBoeS1ib2R5MS1zaXplOiAxcmVtO1xuICAtLXR5cG9ncmFwaHktYm9keTItc2l6ZTogMC43NXJlbTtcbiAgLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZTogMC43NXJlbTtcblxuXG5cbiAgLyogQ29sb3JzICovXG5cbiAgLS1jb2xvci1iZzogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xuXG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZGFyazogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG4gIC0tY29sb3ItcHJpbWFyeS1jb250cmFzdDogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmludmVyc2UpO1xuXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG5cbiAgLS1jb2xvci10ZXJ0aWFyeTogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpZ21hLWNvbG9yLWJnLXRlcnRpYXJ5KSA1MCUsIHZhcigtLWNvbG9yLWJnKSk7XG5cbiAgLS1jb2xvci10ZXh0LXByaW1hcnk6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICAtLWNvbG9yLXRleHQtc2Vjb25kYXJ5OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIC0tY29sb3ItdGV4dC1kaXNhYmxlZDogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG5cbiAgLS1jb2xvci1lcnJvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xuXG5cblxuICAvKiBCb3JkZXIgKi9cblxuICAtLWJvcmRlci1kaXZpZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcblxuXG5cbiAgLyogQm9yZGVyIHJhZGl1cyAqL1xuXG4gIC0tYm9yZGVyLXJhZGl1cy1tZWRpdW06IDAuMTI1cmVtO1xuXG5cbiAgXG4gIC8qIEFuaW1hdGlvbiAqL1xuXG4gIC0tYW5pbWF0aW9uLWZhc3Q6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjQsIDEpO1xuICAtLWFuaW1hdGlvbi1tZWRpdW06IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjQsIDEpO1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3VzdG9tL3VpLXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTs7RUFFZiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMscUNBQXFDOzs7O0VBSXJDLFdBQVc7O0VBRVgsaUNBQWlDOztFQUVqQyx3Q0FBd0M7RUFDeEMsd0RBQXdEO0VBQ3hELDZDQUE2QztFQUM3QywyREFBMkQ7O0VBRTNELG9EQUFvRDs7RUFFcEQseUZBQXlGOztFQUV6Riw2Q0FBNkM7RUFDN0MseURBQXlEO0VBQ3pELHVEQUF1RDs7RUFFdkQsNkNBQTZDOzs7O0VBSTdDLFdBQVc7O0VBRVgscURBQXFEOzs7O0VBSXJELGtCQUFrQjs7RUFFbEIsZ0NBQWdDOzs7O0VBSWhDLGNBQWM7O0VBRWQsd0RBQXdEO0VBQ3hELDBEQUEwRDs7QUFFNURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpyb290IHtcXG5cXG4gIC8qIFR5cG9ncmFwaHkgKi9cXG5cXG4gIC0tdHlwb2dyYXBoeS1oMS1zaXplOiA0cmVtO1xcbiAgLS10eXBvZ3JhcGh5LWgyLXNpemU6IDJyZW07XFxuICAtLXR5cG9ncmFwaHktYm9keTEtc2l6ZTogMXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplOiAwLjc1cmVtO1xcbiAgLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZTogMC43NXJlbTtcXG5cXG5cXG5cXG4gIC8qIENvbG9ycyAqL1xcblxcbiAgLS1jb2xvci1iZzogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xcblxcbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcXG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1zZWNvbmRhcnkpO1xcbiAgLS1jb2xvci1wcmltYXJ5LWRhcms6IHZhcigtLWZpZ21hLWNvbG9yLWljb24pO1xcbiAgLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSk7XFxuXFxuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1zZWNvbmRhcnkpO1xcblxcbiAgLS1jb2xvci10ZXJ0aWFyeTogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpZ21hLWNvbG9yLWJnLXRlcnRpYXJ5KSA1MCUsIHZhcigtLWNvbG9yLWJnKSk7XFxuXFxuICAtLWNvbG9yLXRleHQtcHJpbWFyeTogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuICAtLWNvbG9yLXRleHQtc2Vjb25kYXJ5OiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XFxuICAtLWNvbG9yLXRleHQtZGlzYWJsZWQ6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xcblxcbiAgLS1jb2xvci1lcnJvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xcblxcblxcblxcbiAgLyogQm9yZGVyICovXFxuXFxuICAtLWJvcmRlci1kaXZpZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcXG5cXG5cXG5cXG4gIC8qIEJvcmRlciByYWRpdXMgKi9cXG5cXG4gIC0tYm9yZGVyLXJhZGl1cy1tZWRpdW06IDAuMTI1cmVtO1xcblxcblxcbiAgXFxuICAvKiBBbmltYXRpb24gKi9cXG5cXG4gIC0tYW5pbWF0aW9uLWZhc3Q6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjQsIDEpO1xcbiAgLS1hbmltYXRpb24tbWVkaXVtOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC40LCAxKTtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCbG9jayAqL1xuXG4uYmxvY2sge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiByb3ctZ2FwOiAwLjVyZW07ICovXG5cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5ibG9jazpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvdWkvYmxvY2tzL2Jsb2NrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVOztBQUVWO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjs7RUFFckIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJsb2NrICovXFxuXFxuLmJsb2NrIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiByb3ctZ2FwOiAwLjVyZW07ICovXFxuXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmJsb2NrOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJ1dHRvbiAqL1xuXG5cbi5jb21wb25lbnQuYnV0dG9uLm1lZGl1bSB7XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMC41cmVtO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWVkaXVtKTtcbn1cblxuLmNvbXBvbmVudC5idXR0b24gLmxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSkgIWltcG9ydGFudDtcblxuICBjb2xvcjogaW5oZXJpdDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWJyYXJ5L3VpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVzs7O0FBR1g7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTs7RUFFZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixrREFBa0Q7O0VBRWxELGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQnV0dG9uICovXFxuXFxuXFxuLmNvbXBvbmVudC5idXR0b24ubWVkaXVtIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWVkaXVtKTtcXG59XFxuXFxuLmNvbXBvbmVudC5idXR0b24gLmxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpICFpbXBvcnRhbnQ7XFxuXFxuICBjb2xvcjogaW5oZXJpdDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBUZXh0RmllbGQgKi9cblxuXG4uY29tcG9uZW50LmNoZWNrYm94IHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sdW1uLWdhcDogMC43NXJlbTtcblxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXItZGl2aWRlcik7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3g6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveC5tZWRpdW0ge1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgbWluLWhlaWdodDogM3JlbTtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveC5sYXJnZSB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbn1cblxuXG5cbi8qIENoZWNrYm94ICovXG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRvZ2dsZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXhib3g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZWRpdW0pO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94Lm1lZGl1bSAudG9nZ2xlIHtcbiAgbWluLXdpZHRoOiAxLjI1cmVtO1xuICBtYXJnaW46IDAuM3JlbSAwO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94LmxhcmdlIC50b2dnbGUge1xuICBtaW4td2lkdGg6IDEuNzVyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbXBvbmVudC5jaGVja2JveCAudG9nZ2xlIC5maWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG5cbiAgdHJhbnNpdGlvbjogdmFyKC0tYW5pbWF0aW9uLWZhc3QpO1xufVxuXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUgLnRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKGNhbGMoMjAvMjQpKTtcbn1cblxuXG5cbi8qIFRleHQgKi9cblxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICBwYWRkaW5nOiAwIDAuMjVyZW07XG59XG5cblxuXG4vKiBQcmltYXJ5IHRleHQgKi9cblxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAucHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSk7XG59XG5cblxuXG4vKiBTZWNvbmRhcnkgdGV4dCAqL1xuXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keTItc2l6ZSk7XG59XG5cbi5jb21wb25lbnQuY2hlY2tib3ggLnRleHQgLnNlY29uZGFyeS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7O0FBR2Q7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7OztBQUlBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCOztFQUV2Qix1Q0FBdUM7O0VBRXZDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDOztFQUVoQyxrQkFBa0I7O0VBRWxCLHNDQUFzQzs7RUFFdEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbURBQW1EO0FBQ3JEOzs7O0FBSUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjs7RUFFcEIsa0JBQWtCO0FBQ3BCOzs7O0FBSUEsaUJBQWlCOztBQUVqQjtFQUNFLGdDQUFnQztFQUNoQyx1Q0FBdUM7QUFDekM7Ozs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUZXh0RmllbGQgKi9cXG5cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBjb2x1bW4tZ2FwOiAwLjc1cmVtO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWRpdmlkZXIpO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94Omxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94Lm1lZGl1bSB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxufVxcblxcbi5jb21wb25lbnQuY2hlY2tib3gubGFyZ2Uge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuXFxuXFxuLyogQ2hlY2tib3ggKi9cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBkaXNwbGF5OiBmbGV4Ym94O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWVkaXVtKTtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveC5tZWRpdW0gLnRvZ2dsZSB7XFxuICBtaW4td2lkdGg6IDEuMjVyZW07XFxuICBtYXJnaW46IDAuM3JlbSAwO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94LmxhcmdlIC50b2dnbGUge1xcbiAgbWluLXdpZHRoOiAxLjc1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUgLmZpbGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcblxcbiAgdHJhbnNpdGlvbjogdmFyKC0tYW5pbWF0aW9uLWZhc3QpO1xcbn1cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50b2dnbGUgLnRpY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZShjYWxjKDIwLzI0KSk7XFxufVxcblxcblxcblxcbi8qIFRleHQgKi9cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG59XFxuXFxuXFxuXFxuLyogUHJpbWFyeSB0ZXh0ICovXFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAucHJpbWFyeSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKTtcXG59XFxuXFxuXFxuXFxuLyogU2Vjb25kYXJ5IHRleHQgKi9cXG5cXG4uY29tcG9uZW50LmNoZWNrYm94IC50ZXh0IC5zZWNvbmRhcnkge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKTtcXG59XFxuXFxuLmNvbXBvbmVudC5jaGVja2JveCAudGV4dCAuc2Vjb25kYXJ5LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRleHRGaWVsZCAqL1xuXG5cbi5jb21wb25lbnQudGV4dGZpZWxkIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMC41cmVtO1xuXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1kaXZpZGVyKTtcbn1cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQ6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuXG5cbi8qIExhYmVsICovXG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG5cbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWlucHV0bGFiZWwtc2l6ZSkgIWltcG9ydGFudDtcbn1cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLnN1ZmZpeGxhYmVsIHtcbiAgZmxleC1zaHJpbms6IDEwO1xuXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG5cblxuLyogSW5wdXQgd3JhcHBlciAqL1xuXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaW5wdXR3cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuXG5cbi8qIElucHV0ICovXG5cbmlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQuc21hbGwge1xuICBoZWlnaHQ6IDJyZW07XG5cbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkxLXNpemUpICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0Lm1lZGl1bSB7XG4gIGhlaWdodDogM3JlbTtcblxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaDItc2l6ZSkgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG59XG5cbmlucHV0LmxhcmdlIHtcbiAgaGVpZ2h0OiA1cmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1oMS1zaXplKSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDZlbTtcbn1cblxuaW5wdXQuZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cblxuXG4vKiBIZWxwZXIgdGV4dHMgKi9cblxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmhlbHBlcnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuXG4gIHRyYW5zaXRpb246IHZhcigtLWFuaW1hdGlvbi1tZWRpdW0pO1xufVxuXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dC5lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG59XG5cbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0LmhpZGRlbiB7XG4gIGhlaWdodDogMXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvdWkvY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOzs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTs7RUFFZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7QUFJQSxVQUFVOztBQUVWO0VBQ0UsV0FBVzs7RUFFWCxtQkFBbUI7O0VBRW5CLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsaUJBQWlCO0VBQ2pCLHVEQUF1RDtFQUN2RCxrQ0FBa0M7QUFDcEM7Ozs7QUFJQSxrQkFBa0I7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOzs7O0FBSUEsVUFBVTs7QUFFVjtFQUNFLFNBQVM7RUFDVCxXQUFXOztFQUVYLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLGdDQUFnQzs7RUFFaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxZQUFZOztFQUVaLCtDQUErQztFQUMvQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLCtDQUErQztFQUMvQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7Ozs7QUFJQSxpQkFBaUI7O0FBRWpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7O0VBRXRCLGFBQWE7RUFDYixxQkFBcUI7O0VBRXJCLHVEQUF1RDtFQUN2RCxrQ0FBa0M7O0VBRWxDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUZXh0RmllbGQgKi9cXG5cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCB7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXG5cXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1kaXZpZGVyKTtcXG59XFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQ6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcblxcblxcbi8qIExhYmVsICovXFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5zdWZmaXhsYWJlbCB7XFxuICBmbGV4LXNocmluazogMTA7XFxuXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS1pbnB1dGxhYmVsLXNpemUpICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xcbn1cXG5cXG5cXG5cXG4vKiBJbnB1dCB3cmFwcGVyICovXFxuXFxuLmNvbXBvbmVudC50ZXh0ZmllbGQgLmlucHV0d3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG5cXG5cXG4vKiBJbnB1dCAqL1xcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQuc21hbGwge1xcbiAgaGVpZ2h0OiAycmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWJvZHkxLXNpemUpICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0Lm1lZGl1bSB7XFxuICBoZWlnaHQ6IDNyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaDItc2l6ZSkgIWltcG9ydGFudDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xcbn1cXG5cXG5pbnB1dC5sYXJnZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaDEtc2l6ZSkgIWltcG9ydGFudDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xcbn1cXG5cXG5pbnB1dC5kaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kaXNhYmxlZCk7XFxufVxcblxcblxcblxcbi8qIEhlbHBlciB0ZXh0cyAqL1xcblxcbi5jb21wb25lbnQudGV4dGZpZWxkIC5oZWxwZXJ0ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktaW5wdXRsYWJlbC1zaXplKSAhaW1wb3J0YW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcXG5cXG4gIHRyYW5zaXRpb246IHZhcigtLWFuaW1hdGlvbi1tZWRpdW0pO1xcbn1cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dC5lcnJvciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xcbn1cXG5cXG4uY29tcG9uZW50LnRleHRmaWVsZCAuaGVscGVydGV4dC5oaWRkZW4ge1xcbiAgaGVpZ2h0OiAxcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vY3VzdG9tL3VpLXRoZW1lLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9jdXN0b20vdWktcGFsZXR0ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ibG9ja3MvYmxvY2suY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBUaGVtZSAqL1xuXG5cbi8qIEJsb2NrcyAqL1xuXG5cbi8qIENvbXBvbmVudHMgKi9cblxuXG5cbmJvZHksIGRpdiwgaW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuLyogRGlzYWJsZSBldmVudCBjYXB0dXJpbmcgaW4gaWNvbiBTVkdzICovXG5cbi5pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuXG4vKiBGaWxsIG9yIGh1ZyAqL1xuXG4uZmlsbENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvdWkvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7O0FBTVYsV0FBVzs7O0FBS1gsZUFBZTs7OztBQVFmO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxR0FBcUc7RUFDckcsa0JBQWtCO0VBQ2xCLDhCQUE4Qjs7RUFFOUIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBLHlDQUF5Qzs7QUFFekM7RUFDRSxvQkFBb0I7QUFDdEI7Ozs7QUFJQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZW1lICovXFxuXFxuQGltcG9ydCBcXFwiLi4vLi4vY3VzdG9tL3VpLXRoZW1lLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vY3VzdG9tL3VpLXBhbGV0dGUuY3NzXFxcIjtcXG5cXG5cXG4vKiBCbG9ja3MgKi9cXG5cXG5AaW1wb3J0IFxcXCIuL2Jsb2Nrcy9ibG9jay5jc3NcXFwiO1xcblxcblxcbi8qIENvbXBvbmVudHMgKi9cXG5cXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvdGV4dGZpZWxkL3RleHRmaWVsZC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzc1xcXCI7XFxuXFxuXFxuXFxuYm9keSwgZGl2LCBpbnB1dCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5cXG4vKiBEaXNhYmxlIGV2ZW50IGNhcHR1cmluZyBpbiBpY29uIFNWR3MgKi9cXG5cXG4uaWNvbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuXFxuXFxuLyogRmlsbCBvciBodWcgKi9cXG5cXG4uZmlsbENvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBwcmltYXJ5ID0gXCJjb2xvcjogIzk3NDdGRjtcIjtcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnkgPSBcImNvbG9yOiAjQzE5MUZGO1wiO1xuZXhwb3J0IGNvbnN0IGVycm9yID0gXCJjb2xvcjogI2YzMDtcIjtcbiIsIi8qIFR5cGVzICovIGltcG9ydCB7IFVJQmxvY2ssIFVJRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuLi9zeXN0ZW0vdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBVc2VySW5wdXQgZXh0ZW5kcyBVSUJsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcihub2Rlcykge1xuICAgICAgICBzdXBlcihub2Rlcyk7XG4gICAgfVxuICAgIC8vIEFkZHMgYW4gaW5wdXQgY2hpbGQuXG4gICAgYWRkSW5wdXRDb21wb25lbnQobm9kZXMpIHtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihub2Rlcyk7XG4gICAgfVxuICAgIC8vIEdldHMgYWxsIGlucHV0IGZyb20gY2hpbGRyZW4gZm9ybSBjb21wb25lbnRzLlxuICAgIGdldEFsbElucHV0KCkge1xuICAgICAgICAvLyBTZXQgdXAgdGhlIHJlc3VsdC5cbiAgICAgICAgbGV0IGZvcm1JbnB1dCA9IHt9O1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggVmFsaWROb2Rlcy5cbiAgICAgICAgbGV0IG5vZGVOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY2hpbGRyZW4pO1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIG5vZGVOYW1lcykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFVJRm9ybUNvbXBvbmVudClcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXRbbmFtZV0gPSBjaGlsZC5nZXRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtSW5wdXQ7XG4gICAgfVxufVxuIiwiLyogVHlwZXMgKi8gaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vc3lzdGVtL3R5cGVzXCI7XG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgVUlDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHZhcmlhbnQsIGNvbG9yLCBzaXplLCBsYWJlbCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc3VmZml4SWNvbilcbiAgICAgICAgICAgIHRoaXMuc3VmZml4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIENvbXBvbmVudCBkaXYuXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wb25lbnRcIiwgXCJidXR0b25cIiwgdmFyaWFudCwgY29sb3IsIHNpemUsIFwiZW5hYmxlZFwiKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5odWcpXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKG9wdGlvbnMuaHVnKTtcbiAgICAgICAgLy8gTGFiZWwuXG4gICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0LmFkZChcImxhYmVsXCIpO1xuICAgICAgICB0aGlzLmxhYmVsLmlubmVyVGV4dCA9IGxhYmVsO1xuICAgICAgICAvLyBBcHBlbmQgYWxsLlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcbiAgICAgICAgaWYgKHRoaXMuc3VmZml4SWNvbilcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFwcGVuZENoaWxkKHRoaXMuc3VmZml4SWNvbik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBjYWxsYmFjayhlKTsgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuYWJsZWRcIjtcbiAgICB9XG4gICAgZXJyb3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZXJyb3JcIjtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJkaXNhYmxlZFwiO1xuICAgIH1cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJlbmFibGVkXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmFibGVkXCI7XG4gICAgfVxufVxuIiwiLyogVHlwZXMgKi8gaW1wb3J0IHsgVUlGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3N5c3RlbS90eXBlc1wiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgKiBhcyBjcmVhdGVTVkcgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3JlYXRlLXN2Z1wiO1xuZXhwb3J0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgVUlGb3JtQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIENvbXBvbmVudCBkaXYuXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wb25lbnRcIiwgXCJjaGVja2JveFwiLCBvcHRpb25zLnNpemUpO1xuICAgICAgICAvLyBDaGVja2JveC5cbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiKTtcbiAgICAgICAgbGV0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWxsLmNsYXNzTGlzdC5hZGQoXCJmaWxsXCIpO1xuICAgICAgICBmaWxsLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICAgIGZpbGwuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuZmlsbERpYW1ldGVyID0gMDtcbiAgICAgICAgbGV0IHRpY2sgPSBjcmVhdGVTVkcuaWNvbigyNCwgMjQsIFwiTTE5LjA2OTQgNi45ODgxTDkuNTQyMzYgMTguMTAzTDQuOTY5NjcgMTMuNTMwM0w2LjAzMDMzIDEyLjQ2OTdMOS40NTc2MyAxNS44OTdMMTcuOTMwNiA2LjAxMTkxTDE5LjA2OTQgNi45ODgxWlwiLCBcInZhcigtLWNvbG9yLXRlcnRpYXJ5KVwiKTtcbiAgICAgICAgdGljay5jbGFzc0xpc3QuYWRkKFwidGlja1wiLCBcImljb25cIik7XG4gICAgICAgIC8vIFRleHQgZm9yIGNoZWNrYm94LlxuICAgICAgICBsZXQgcHJpbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW1hcnkuY2xhc3NMaXN0LmFkZChcInByaW1hcnlcIik7XG4gICAgICAgIHByaW1hcnkudGV4dENvbnRlbnQgPSBvcHRpb25zLnByaW1hcnlUZXh0O1xuICAgICAgICBsZXQgc2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnlcIik7XG4gICAgICAgIGlmICghb3B0aW9ucy5zZWNvbmRhcnlUZXh0KVxuICAgICAgICAgICAgc2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMudGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgdGhpcy50ZXh0LmFwcGVuZENoaWxkKHByaW1hcnkpO1xuICAgICAgICB0aGlzLnRleHQuYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5KTtcbiAgICAgICAgdGhpcy50ZXh0LmFwcGVuZENoaWxkKHRoaXMuaGVscGVyVGV4dCk7XG4gICAgICAgIC8vIEFwcGVuZC5cbiAgICAgICAgdGhpcy5jaGVja2JveC5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgICAgdGhpcy5jaGVja2JveC5hcHBlbmRDaGlsZCh0aWNrKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwZW5kQ2hpbGQodGhpcy5jaGVja2JveCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XG4gICAgICAgIC8vIFN0YXRlIGFuZCBsaXN0ZW5lcnMuXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKVxuICAgICAgICAgICAgICAgIHRoaXMudW5jaGVjaygpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNldCB1cCBpbnB1dCByZXRyaWV2YWwuXG4gICAgICAgIHRoaXMuZ2V0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRGaWxsRGlhbWV0ZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5jaGVja2JveC5vZmZzZXRIZWlnaHQgKiB0aGlzLmNoZWNrYm94Lm9mZnNldEhlaWdodCArIHRoaXMuY2hlY2tib3gub2Zmc2V0V2lkdGggKiB0aGlzLmNoZWNrYm94Lm9mZnNldFdpZHRoKTtcbiAgICB9XG4gICAgY2hlY2soKSB7XG4gICAgICAgIC8vIElmIHRoZSBmaWxsIGRpYW1ldGVyIGhhcyBub3QgYmVlbiBjYWxjdWxhdGVkIHlldCBhcyB0aGUgY29tcG9uZW50IGlzIG5vdCB5ZXQgYXBwZW5kZWQgdG8gdGhlIERPTS5cbiAgICAgICAgaWYgKHRoaXMuZmlsbERpYW1ldGVyID09PSAwKVxuICAgICAgICAgICAgdGhpcy5maWxsRGlhbWV0ZXIgPSB0aGlzLmdldEZpbGxEaWFtZXRlcigpO1xuICAgICAgICBsZXQgZmlsbCA9IHRoaXMuY2hlY2tib3guY2hpbGRyZW5bMF07XG4gICAgICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtTdHJpbmcodGhpcy5maWxsRGlhbWV0ZXIpfXB4YDtcbiAgICAgICAgZmlsbC5zdHlsZS5oZWlnaHQgPSBgJHtTdHJpbmcodGhpcy5maWxsRGlhbWV0ZXIpfXB4YDtcbiAgICAgICAgbGV0IHRpY2sgPSB0aGlzLmNoZWNrYm94LmNoaWxkcmVuWzFdO1xuICAgICAgICB0aWNrLnN0eWxlLmZpbGwgPSBcInZhcigtLWNvbG9yLWJnKVwiO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1bmNoZWNrKCkge1xuICAgICAgICBsZXQgZmlsbCA9IHRoaXMuY2hlY2tib3guY2hpbGRyZW5bMF07XG4gICAgICAgIGZpbGwuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgZmlsbC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgbGV0IHRpY2sgPSB0aGlzLmNoZWNrYm94LmNoaWxkcmVuWzFdO1xuICAgICAgICB0aWNrLnN0eWxlLmZpbGwgPSBcInZhcigtLWNvbG9yLXRlcnRpYXJ5KVwiO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlUHJpbWFyeVRleHQodGV4dCkge1xuICAgICAgICBsZXQgcHJpbWFyeVRleHQgPSB0aGlzLnRleHQuY2hpbGRyZW5bMF07XG4gICAgICAgIHByaW1hcnlUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgdGhpcy5maWxsRGlhbWV0ZXIgPSB0aGlzLmdldEZpbGxEaWFtZXRlcigpO1xuICAgIH1cbiAgICB1cGRhdGVTZWNvbmRhcnlUZXh0KHRleHQpIHtcbiAgICAgICAgbGV0IHNlY29uZGFyeVRleHQgPSB0aGlzLnRleHQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlY29uZGFyeVRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBzZWNvbmRhcnlUZXh0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlY29uZGFyeVRleHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5maWxsRGlhbWV0ZXIgPSB0aGlzLmdldEZpbGxEaWFtZXRlcigpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpY29uKHdpZHRoLCBoZWlnaHQsIGQsIGZpbGwpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3aWR0aCkpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGhlaWdodCkpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBmaWxsOiAke2ZpbGx9O2ApO1xuICAgIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbC1ydWxlXCIsIFwiZXZlbm9kZFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImNsaXAtcnVsZVwiLCBcImV2ZW5vZGRcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICByZXR1cm4gc3ZnO1xufVxuIiwiLyogVHlwZXMgKi8gaW1wb3J0IHsgVUlCbG9jaywgVUlDb21wb25lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGNsYXNzIFVJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gTG9nIHRvIGNvbnNvbGUgZm9yIGRlYnVnZ2luZy5cbiAgICAgICAgY29uc29sZS5sb2coXCIlY1VJIGNyZWF0ZWQuXCIsIFwiY29sb3I6ICNjY2NcIik7XG4gICAgICAgIGxldCBpbnNlcnRpb25Qb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIik7XG4gICAgICAgIHRoaXMucGFuZWwgPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYW5lbCk7XG4gICAgfVxuICAgIGFwcGVuZChub2Rlcykge1xuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gYSBmcmFnbWVudCBiZWZvcmUgYXBwZW5kaW5nIHRvIHRoZSBVSS5cbiAgICAgICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFVJQmxvY2sgfHwgbm9kZSBpbnN0YW5jZW9mIFVJQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUubm9kZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG59XG4vLyBTZW5kIG1lc3NhZ2UgdG8gdGhlIHBsdWdpbi5cbmV4cG9ydCBmdW5jdGlvbiB0b1BsdWdpbihtZXNzYWdlKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogbWVzc2FnZSB9LCAnKicpO1xufVxuIiwiLyogU3lzdGVtICovIGltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vY29uc29sZS10aGVtZVwiO1xuLy8gR2VuZXJpYyBjb21wb25lbnQgY2xhc3MgdGhhdCBhbGwgVUlDb21wb25lbnRzIGFyZSBleHRlbmRlZCBmcm9tLlxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICAvLyBHZXRzIHRoZSBIVE1MIG5vZGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICBub2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gICAgfVxufVxuLy8gR2VuZXJpYyBjbGFzcyB0aGF0IGFsbCBmb3JtIGNvbXBvbmVuZXRzIGFyZSBleHRlbmRlZCBmcm9tLlxuZXhwb3J0IGNsYXNzIFVJRm9ybUNvbXBvbmVudCBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImlucHV0LWVsZW1lbnRcIik7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBoZWxwZXIgdGV4dCBkaXYuIFRoZSBjb21wb25lbnQgc2hvdWxkIGFkZCB0aGlzIGluIHRoZSByaWdodCBwbGFjZSBvciBpdCB3aWxsIG5vdCBhcHBlYXIuXG4gICAgICAgIHRoaXMuaGVscGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuaGVscGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVscGVydGV4dFwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5hYmxlZFwiO1xuICAgICAgICB0aGlzLmdldElucHV0ID0gKCkgPT4geyBjb25zb2xlLmxvZyhcIk5vIGZ1bmN0aW9ucyBkZWZpbmVkIHlldC5cIiwgY29uc29sZVRoZW1lLmVycm9yKTsgfTtcbiAgICB9XG4gICAgLy8gU2V0cyB0aGUgY29tcG9uZW50IHN0YXRlIHRvIGRpc2FibGVkLlxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGVkXCIsIFwiZXJyb3JcIik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZGlzYWJsZWRcIjtcbiAgICB9XG4gICAgLy8gU2V0cyB0aGUgY29tcG9uZW50IHN0YXRlIHRvIGVuYWJsZWQuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImVuYWJsZWRcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuYWJsZWRcIjtcbiAgICB9XG4gICAgLy8gU2V0cyB0aGUgY29tcG9uZW50IHN0YXRlIHRvIGVycm9yLlxuICAgIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJlcnJvclwiO1xuICAgICAgICB0aGlzLmhlbHBlclRleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIH1cbn1cbi8vIEdlbmVyaWMgYmxvY2sgY2xhc3MgdGhhdCBhbGwgVUlCbG9ja3MgYXJlIGV4dGVuZGVkIGZyb20uXG5leHBvcnQgY2xhc3MgVUlCbG9jayB7XG4gICAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAgICAgdGhpcy5ibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgICAgIGlmIChub2RlcylcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4obm9kZXMpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIHNlbGYuXG4gICAgbm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2s7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBIVE1MRWxlbWVudC5cbiAgICBnZXRDaGlsZE5vZGUobm9kZU5hbWUpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltub2RlTmFtZV07XG4gICAgICAgIGlmICghY2hpbGQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLm5vZGUoKTtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgY2hpbGQgYXMtaXMsIGlmIGZvdW5kLlxuICAgIGdldENoaWxkKG5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW25vZGVOYW1lXSB8fCBudWxsO1xuICAgIH1cbiAgICAvLyBBZGRzIGEgY2hpbGQgdG8gdGhlIERPTSBhbmQgdGhlIGxpc3QuXG4gICAgYWRkQ2hpbGRyZW4obm9kZXMpIHtcbiAgICAgICAgbGV0IG5vZGVOYW1lcyA9IE9iamVjdC5rZXlzKG5vZGVzKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIFVJTm9kZUxpc3QuXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2Ygbm9kZU5hbWVzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q2hpbGQgPSBub2Rlc1tuYW1lXTtcbiAgICAgICAgICAgIC8vIElmIGVudHJ5IGluIHRoZSBVSU5vZGVMaXN0IGlzIGEgVUlCbG9jayBvciBVSUNvbXBvbmVudC5cbiAgICAgICAgICAgIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIFVJQmxvY2sgfHwgbmV3Q2hpbGQgaW5zdGFuY2VvZiBVSUNvbXBvbmVudCB8fCBuZXdDaGlsZCBpbnN0YW5jZW9mIFVJQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2suYXBwZW5kQ2hpbGQobmV3Q2hpbGQubm9kZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNFcnJvciBhcHBlbmRpbmcgY2hpbGQgdG8gQmxvY2suICR7bmFtZX0gaXMgbm90IG9mIGEgdmFsaWQgdHlwZS5gLCBjb25zb2xlVGhlbWUuZXJyb3IpO1xuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBjaGlsZHJlbiBsaXN0LlxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltuYW1lXSA9IG5vZGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gR2VuZXJpYyBjb250YWluZXIgZGl2IHRvIHB1dCBhbnkgY29udGVudC5cbmV4cG9ydCBjbGFzcyBVSUNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgICAgIGlmIChub2RlcylcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4obm9kZXMpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIHNlbGYuXG4gICAgbm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIGEgSFRNTEVsZW1lbnQuXG4gICAgZ2V0Q2hpbGROb2RlKG5vZGVOYW1lKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bbm9kZU5hbWVdO1xuICAgICAgICBpZiAoIWNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgVUlCbG9jayB8fCBjaGlsZCBpbnN0YW5jZW9mIFVJQ29tcG9uZW50KVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLm5vZGUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIHRoZSBjaGlsZCBhcy1pcywgaWYgZm91bmQuXG4gICAgZ2V0Q2hpbGQobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bbm9kZU5hbWVdIHx8IG51bGw7XG4gICAgfVxuICAgIC8vIEFkZHMgYSBjaGlsZCB0byB0aGUgRE9NIGFuZCB0aGUgbGlzdC5cbiAgICBhZGRDaGlsZHJlbihub2Rlcykge1xuICAgICAgICBsZXQgbm9kZU5hbWVzID0gT2JqZWN0LmtleXMobm9kZXMpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggVUlOb2RlTGlzdC5cbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBub2RlTmFtZXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdDaGlsZCA9IG5vZGVzW25hbWVdO1xuICAgICAgICAgICAgLy8gSWYgZW50cnkgaW4gdGhlIFVJTm9kZUxpc3QgaXMgYSBVSUJsb2NrIG9yIFVJQ29tcG9uZW50LlxuICAgICAgICAgICAgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgVUlCbG9jayB8fCBuZXdDaGlsZCBpbnN0YW5jZW9mIFVJQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NoaWxkLm5vZGUoKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRXJyb3IgYXBwZW5kaW5nIGNoaWxkIHRvIENvbnRhaW5lci4gJHtuYW1lfSBpcyBub3Qgb2YgYSB2YWxpZCB0eXBlLmAsIGNvbnNvbGVUaGVtZS5lcnJvcik7XG4gICAgICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGNoaWxkcmVuIGxpc3QuXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW25hbWVdID0gbm9kZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVUlGcmFnbWVudCB7XG4gICAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgbGV0IG5vZGVOYW1lcyA9IE9iamVjdC5rZXlzKG5vZGVzKTtcbiAgICAgICAgZm9yIChsZXQgbm9kZU5hbWUgb2Ygbm9kZU5hbWVzKVxuICAgICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tub2RlTmFtZV0ubm9kZSgpKTtcbiAgICB9XG4gICAgYWRkTm9kZXMobm9kZSkge1xuICAgIH1cbiAgICBwdWJsaXNoVG8obm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpXG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNFcnJvciBhcHBlbmRpbmcgZnJhZ21lbnQgdG8gbm9kZS4gTm9kZSBpcyBub3QgYSB2YWxpZCBET00gZWxlbWVudC5gLCBcImNvbG9yOiAjZjMwO1wiKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBVSSAqLyBpbXBvcnQgKiBhcyBjb3JlIGZyb20gXCIuLi8uLi9saWJyYXJ5L3VpL3N5c3RlbS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uL2xpYnJhcnkvY29uc29sZS10aGVtZVwiO1xuLyogQmxvY2tzICovIGltcG9ydCB7IFVzZXJJbnB1dCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3VpL2Jsb2Nrcy91c2VyaW5wdXRcIjtcbi8qIENvbXBvbmVudHMgKi8gaW1wb3J0IHsgVUlDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS91aS9zeXN0ZW0vdHlwZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3VpL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiLi4vLi4vbGlicmFyeS91aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94XCI7XG4vLyBMb2cgdG8gY29uc29sZSBmb3IgZGVidWdnaW5nLlxuY29uc29sZS5sb2coXCIlY1VJIGNyZWF0ZWQuXCIsIFwiY29sb3I6ICNjY2NcIik7XG4vLyBDcmVhdGUgVUkuXG5sZXQgdWkgPSBuZXcgY29yZS5VSSgpO1xubGV0IGRpbWVuc2lvbnMgPSBuZXcgVUlDb250YWluZXIoKTtcbmRpbWVuc2lvbnMubm9kZSgpLnRleHRDb250ZW50ID0gXCJEaW1lbnNpb25zXCI7XG5kaW1lbnNpb25zLm5vZGUoKS5zdHlsZS5wYWRkaW5nID0gXCIxLjVyZW0gMC43NXJlbSAwLjc1cmVtXCI7XG5kaW1lbnNpb25zLm5vZGUoKS5zdHlsZS5mb250U2l6ZSA9IFwidmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKVwiO1xuZGltZW5zaW9ucy5ub2RlKCkuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG5sZXQgd2lkdGggPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJXaWR0aFwiIH0pLCBoZWlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJIZWlnaHRcIiB9KSwgbWF4V2lkdGggPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNYXgtd2lkdGhcIiB9KSwgbWluV2lkdGggPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNaW4td2lkdGhcIiB9KSwgbWF4SGVpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiTWF4LWhlaWdodFwiIH0pLCBtaW5IZWlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNaW4taGVpZ2h0XCIgfSk7XG5sZXQgYXV0b0xheW91dCA9IG5ldyBVSUNvbnRhaW5lcigpO1xuYXV0b0xheW91dC5ub2RlKCkudGV4dENvbnRlbnQgPSBcIkF1dG8tbGF5b3V0XCI7XG5hdXRvTGF5b3V0Lm5vZGUoKS5zdHlsZS5wYWRkaW5nID0gXCIxLjVyZW0gMC43NXJlbSAwLjc1cmVtXCI7XG5hdXRvTGF5b3V0Lm5vZGUoKS5zdHlsZS5mb250U2l6ZSA9IFwidmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKVwiO1xuYXV0b0xheW91dC5ub2RlKCkuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG5sZXQgcGFkZGluZ1RvcCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIlRvcCBwYWRkaW5nXCIgfSksIHBhZGRpbmdCb3R0b20gPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJCb3R0b20gcGFkZGluZ1wiIH0pLCBwYWRkaW5nTGVmdCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkxlZnQgcGFkZGluZ1wiIH0pLCBwYWRkaW5nUmlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJSaWdodCBwYWRkaW5nXCIgfSk7XG5sZXQgaXRlbVNwYWNpbmcgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJJdGVtIHNwYWNpbmdcIiB9KSwgY291bnRlckF4aXNTcGFjaW5nID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiQ291bnRlciBheGlzIHNwYWNpbmdcIiB9KTtcbmxldCByYWRpdXMgPSBuZXcgVUlDb250YWluZXIoKTtcbnJhZGl1cy5ub2RlKCkudGV4dENvbnRlbnQgPSBcIlJhZGl1c1wiO1xucmFkaXVzLm5vZGUoKS5zdHlsZS5wYWRkaW5nID0gXCIxLjVyZW0gMC43NXJlbSAwLjc1cmVtXCI7XG5yYWRpdXMubm9kZSgpLnN0eWxlLmZvbnRTaXplID0gXCJ2YXIoLS10eXBvZ3JhcGh5LWJvZHkyLXNpemUpXCI7XG5yYWRpdXMubm9kZSgpLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xubGV0IHJhZGl1c1RvcExlZnQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJUb3AgbGVmdCByYWRpdXNcIiB9KSwgcmFkaXVzVG9wUmlnaHQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJUb3AgcmlnaHQgcmFkaXVzXCIgfSksIHJhZGl1c0JvdHRvbVJpZ2h0ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiQm90dG9tIGxlZnQgcmFkaXVzXCIgfSksIHJhZGl1c0JvdHRvbUxlZnQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJCb3R0b20gcmlnaHQgcmFkaXVzXCIgfSk7XG5sZXQgb3RoZXJzID0gbmV3IFVJQ29udGFpbmVyKCk7XG5vdGhlcnMubm9kZSgpLnRleHRDb250ZW50ID0gXCJPdGhlcnNcIjtcbm90aGVycy5ub2RlKCkuc3R5bGUucGFkZGluZyA9IFwiMS41cmVtIDAuNzVyZW0gMC43NXJlbVwiO1xub3RoZXJzLm5vZGUoKS5zdHlsZS5mb250U2l6ZSA9IFwidmFyKC0tdHlwb2dyYXBoeS1ib2R5Mi1zaXplKVwiO1xub3RoZXJzLm5vZGUoKS5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbmxldCBmaXQgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJGaXRcIiB9KSwgZmlsbCA9IG5ldyBDaGVja2JveCh7IHNpemU6IFwibWVkaXVtXCIsIHByaW1hcnlUZXh0OiBcIkZpbGxcIiB9KSwgc3Ryb2tlID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiU3Ryb2tlXCIgfSksIHZpc2liaWxpdHkgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJWaXNpYmlsaXR5XCIgfSksIG1vZGUgPSBuZXcgQ2hlY2tib3goeyBzaXplOiBcIm1lZGl1bVwiLCBwcmltYXJ5VGV4dDogXCJNb2Rlc1wiIH0pLCB0eXBvZ3JhcGh5ID0gbmV3IENoZWNrYm94KHsgc2l6ZTogXCJtZWRpdW1cIiwgcHJpbWFyeVRleHQ6IFwiVHlwb2dyYXBoeVwiIH0pO1xubGV0IGN0YSA9IG5ldyBVSUNvbnRhaW5lcih7XG4gICAgcHJpbWFyeTogbmV3IEJ1dHRvbihcImNvbnRhaW5lZFwiLCBcInByaW1hcnlcIiwgXCJtZWRpdW1cIiwgXCJSZXNldCBpbnN0YW5jZXNcIiwgc3RhcnRQbHVnaW4sIHsgaHVnOiBcImZpbGxDb250YWluZXJcIiB9KVxufSk7XG5jdGEubm9kZSgpLnN0eWxlLnBhZGRpbmcgPSBcIjAuNzVyZW1cIjtcbmxldCB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KHtcbiAgICBcImRpbWVuc2lvbnNcIjogZGltZW5zaW9ucyxcbiAgICBcIndpZHRoXCI6IHdpZHRoLFxuICAgIFwiaGVpZ2h0XCI6IGhlaWdodCxcbiAgICBcIm1heFdpZHRoXCI6IG1heFdpZHRoLFxuICAgIFwibWluV2lkdGhcIjogbWluV2lkdGgsXG4gICAgXCJtYXhIZWlnaHRcIjogbWF4SGVpZ2h0LFxuICAgIFwibWluSGVpZ2h0XCI6IG1pbkhlaWdodCxcbiAgICBcImF1dG9MYXlvdXRcIjogYXV0b0xheW91dCxcbiAgICBcInBhZGRpbmdUb3BcIjogcGFkZGluZ1RvcCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogcGFkZGluZ0JvdHRvbSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IHBhZGRpbmdMZWZ0LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IHBhZGRpbmdSaWdodCxcbiAgICBcIml0ZW1TcGFjaW5nXCI6IGl0ZW1TcGFjaW5nLFxuICAgIFwiY291bnRlckF4aXNTcGFjaW5nXCI6IGNvdW50ZXJBeGlzU3BhY2luZyxcbiAgICBcInJhZGl1c1wiOiByYWRpdXMsXG4gICAgXCJyYWRpdXNUb3BMZWZ0XCI6IHJhZGl1c1RvcExlZnQsXG4gICAgXCJyYWRpdXNUb3BSaWdodFwiOiByYWRpdXNUb3BSaWdodCxcbiAgICBcInJhZGl1c0JvdHRvbVJpZ2h0XCI6IHJhZGl1c0JvdHRvbVJpZ2h0LFxuICAgIFwicmFkaXVzQm90dG9tTGVmdFwiOiByYWRpdXNCb3R0b21MZWZ0LFxuICAgIFwib3RoZXJzXCI6IG90aGVycyxcbiAgICBcImZpdFwiOiBmaXQsXG4gICAgXCJmaWxsXCI6IGZpbGwsXG4gICAgXCJzdHJva2VcIjogc3Ryb2tlLFxuICAgIFwidmlzaWJpbGl0eVwiOiB2aXNpYmlsaXR5LFxuICAgIFwibW9kZVwiOiBtb2RlLFxuICAgIFwidHlwb2dyYXBoeVwiOiB0eXBvZ3JhcGh5LFxuICAgIFwiY3RhXCI6IGN0YVxufSk7XG51aS5hcHBlbmQoW3VzZXJJbnB1dF0pO1xuLy8gU2VuZCBoZWlnaHQgb2YgVUkgdG8gdGhlIHBsdWdpbi5cbmNvcmUudG9QbHVnaW4oeyBjb21tYW5kOiBcInJlc2l6ZVwiLCBhcmdzOiB7IHdpZHRoOiAzMjAsIGhlaWdodDogOTIwIH0gfSk7XG5mdW5jdGlvbiBzdGFydFBsdWdpbihlKSB7XG4gICAgbGV0IGlucHV0ID0gdXNlcklucHV0LmdldEFsbElucHV0KCk7XG4gICAgY29uc29sZS5sb2coXCIlY1VzZXIgaW5wdXQgcmVjZWl2ZWQ6XCIsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgY29yZS50b1BsdWdpbih7IGNvbW1hbmQ6IFwic3RhcnRSZXNldHRpbmdcIiwgYXJnczogeyBpbnB1dDogaW5wdXQgfSB9KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=