/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/figma-quickaction.ts":
/*!**********************************!*\
  !*** ./src/figma-quickaction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleLibrary: () => (/* binding */ ModuleLibrary),
/* harmony export */   OperationModule: () => (/* binding */ OperationModule),
/* harmony export */   getPaddingInput: () => (/* binding */ getPaddingInput),
/* harmony export */   loadModules: () => (/* binding */ loadModules)
/* harmony export */ });
// Class for storing quick action parameters for each module.
class OperationModule {
    constructor(command, fn, fixedParameters) {
        this.command = command;
        this.userParameters = [];
        this.fn = fn;
        this.fixedParameters = fixedParameters;
    }
    /*********************************************
    Methods for setting up quick action parameters.
    *********************************************/
    // Set parameters.
    setParameter(parameter) {
        this.userParameters.push(parameter);
    }
    /*********************************************
    Methods for retrieving quick action parameters.
    *********************************************/
    // Get command.
    getCommand() {
        return this.command;
    }
    // Check if parameter exists.
    parameterExists(parameter) {
        if (this.userParameters.indexOf(parameter) >= 0)
            return true;
        else
            return false;
    }
    // Retrieves a list of suggested parameters.
    getParameters() {
        return this.userParameters;
    }
    run(parameters) {
        return this.fn(this.fixedParameters, parameters);
    }
}
class ModuleLibrary {
    constructor() {
        this.modules = new Map();
    }
    loadModule(module) {
        this.modules.set(module.getCommand(), module);
    }
    matchCommandToModule(command) {
        let selectedModule = this.modules.get(command);
        if (selectedModule)
            return selectedModule;
        else
            return null;
    }
}
// Load module data for displaying in the quick action taskbar.
function loadModules(modules) {
    let library = new ModuleLibrary;
    if (modules.length > 0) {
        for (let module of modules) {
            library.loadModule(module);
            console.log(`%cModule loaded: ${module.getCommand()}`, "color: #ccc");
        }
        return library;
    }
    else {
        return null;
    }
}
function getPaddingInput(parameters) {
    // Top, right, bottom, left padding values.
    let padding = [];
    // If there is input.
    if (parameters.padding) {
        // Split the input into individual values.
        let paddingSplit = parameters.padding
            .replace(/\s/g, "")
            .split(",")
            .map((str) => Number(str));
        // Loop through individual values.
        for (let paddingValue of paddingSplit) {
            if (Number.isNaN(paddingValue)) {
                figma.notify("Padding needs to be a number.", { timeout: 5000, error: true });
                figma.closePlugin();
            }
        }
        // Map padding values to padding array.
        switch (paddingSplit.length) {
            case 1:
                padding = [paddingSplit[0], paddingSplit[0], paddingSplit[0], paddingSplit[0]];
                break;
            case 2:
                padding = [paddingSplit[0], paddingSplit[1], paddingSplit[0], paddingSplit[1]];
                break;
            case 3:
                padding = [paddingSplit[0], paddingSplit[1], paddingSplit[2], paddingSplit[1]];
                break;
            case 4:
                padding = [paddingSplit[0], paddingSplit[1], paddingSplit[2], paddingSplit[3]];
                break;
            default:
                figma.notify("The plugin accepts up to 4 values for padding.", { timeout: 5000, error: true });
                figma.closePlugin();
        }
    }
    // If there is no input.
    else
        padding = [0, 0, 0, 0];
    return padding;
}


/***/ }),

/***/ "./src/figma-typegroups.ts":
/*!*********************************!*\
  !*** ./src/figma-typegroups.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAutolayout: () => (/* binding */ canAutolayout),
/* harmony export */   isFigmaLayer: () => (/* binding */ isFigmaLayer),
/* harmony export */   isParentable: () => (/* binding */ isParentable),
/* harmony export */   isResizable: () => (/* binding */ isResizable)
/* harmony export */ });
const isFigmaLayer = (node) => (node.type === "FRAME" ||
    node.type === "COMPONENT_SET" ||
    node.type === "COMPONENT" ||
    node.type === "INSTANCE" ||
    node.type === "GROUP" ||
    node.type === "SECTION" ||
    node.type === "RECTANGLE" ||
    node.type === "ELLIPSE" ||
    node.type === "POLYGON" ||
    node.type === "STAR" ||
    node.type === "TEXT" ||
    node.type === "BOOLEAN_OPERATION");
const isParentable = (node) => (node.type === "FRAME" ||
    node.type === "COMPONENT_SET" ||
    node.type === "COMPONENT" ||
    node.type === "INSTANCE" ||
    node.type === "GROUP" ||
    node.type === "SECTION");
const isResizable = (node) => (node.type === "FRAME" ||
    node.type === "COMPONENT_SET" ||
    node.type === "COMPONENT" ||
    node.type === "INSTANCE" ||
    node.type === "GROUP" ||
    node.type === "SECTION" ||
    node.type === "RECTANGLE" ||
    node.type === "ELLIPSE" ||
    node.type === "POLYGON" ||
    node.type === "STAR" ||
    node.type === "TEXT" ||
    node.type === "BOOLEAN_OPERATION");
const canAutolayout = (node) => (node.type === "FRAME" ||
    node.type === "COMPONENT_SET" ||
    node.type === "COMPONENT" ||
    node.type === "INSTANCE");


/***/ }),

/***/ "./src/modules/dimension.ts":
/*!**********************************!*\
  !*** ./src/modules/dimension.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   height: () => (/* binding */ height),
/* harmony export */   maxHeight: () => (/* binding */ maxHeight),
/* harmony export */   maxWidth: () => (/* binding */ maxWidth),
/* harmony export */   minHeight: () => (/* binding */ minHeight),
/* harmony export */   minWidth: () => (/* binding */ minWidth),
/* harmony export */   width: () => (/* binding */ width),
/* harmony export */   widthHeight: () => (/* binding */ widthHeight)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const all = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allDimensions", main, "both, maxWidth, minWidth, maxHeight, minHeight");
const widthHeight = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("widthHeight", main, "both");
const width = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("width", main, "width");
const height = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("height", main, "height");
const maxWidth = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("maxWidth", main, "maxWidth");
const minWidth = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("minWidth", main, "minWidth");
const maxHeight = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("maxHeight", main, "maxHeight");
const minHeight = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("minHeight", main, "minHeight");
function main(affectedDimension) {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                // Both width and height
                if (affectedDimension === "both") {
                    let newWidth = node.width, newHeight = node.height;
                    if (mainComponent.boundVariables && mainComponent.boundVariables.width)
                        node.setBoundVariable("width", mainComponent.boundVariables.width.id);
                    else
                        newWidth = mainComponent.width;
                    if (mainComponent.boundVariables && mainComponent.boundVariables.height)
                        node.setBoundVariable("height", mainComponent.boundVariables.height.id);
                    else
                        newHeight = mainComponent.height;
                    node.resize(newWidth, newHeight);
                }
                // Width only
                if (affectedDimension === "width") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.width)
                        node.setBoundVariable("width", mainComponent.boundVariables.width.id);
                    else
                        node.resize(mainComponent.width, node.height);
                }
                // Height only
                if (affectedDimension === "height") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.height)
                        node.setBoundVariable("height", mainComponent.boundVariables.height.id);
                    else
                        node.resize(node.width, mainComponent.height);
                }
                // Max-width
                if (affectedDimension === "maxWidth") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.maxWidth)
                        node.setBoundVariable("maxWidth", mainComponent.boundVariables.maxWidth.id);
                    else
                        node.maxWidth = mainComponent.maxWidth;
                }
                // Min-width
                if (affectedDimension === "minWidth") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.minWidth)
                        node.setBoundVariable("minWidth", mainComponent.boundVariables.minWidth.id);
                    else
                        node.minWidth = mainComponent.minWidth;
                }
                // Max-height
                if (affectedDimension === "maxHeight") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.maxHeight)
                        node.setBoundVariable("maxHeight", mainComponent.boundVariables.maxHeight.id);
                    else
                        node.maxHeight = mainComponent.maxHeight;
                }
                // Min-height
                if (affectedDimension === "minHeight") {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.minHeight)
                        node.setBoundVariable("minHeight", mainComponent.boundVariables.minHeight.id);
                    else
                        node.minHeight = mainComponent.minHeight;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/modules/everything-except-content.ts":
/*!**************************************************!*\
  !*** ./src/modules/everything-except-content.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   everythingExceptContent: () => (/* binding */ everythingExceptContent),
/* harmony export */   outermostInstanceOnlyExceptContent: () => (/* binding */ outermostInstanceOnlyExceptContent)
/* harmony export */ });
/* harmony import */ var _figma_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-typegroups */ "./src/figma-typegroups.ts");
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./padding */ "./src/modules/padding.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing */ "./src/modules/spacing.ts");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimension */ "./src/modules/dimension.ts");
/* harmony import */ var _radius__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radius */ "./src/modules/radius.ts");
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility */ "./src/modules/visibility.ts");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mode */ "./src/modules/mode.ts");
/* Types */ 
/* Quick action */ 
/* Modules */ 





const everythingExceptContent = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_1__.OperationModule("everythingExceptContent", main, "everything");
const outermostInstanceOnlyExceptContent = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_1__.OperationModule("outermostInstanceOnlyExceptContent", main, "outermostInstance");
function main(scope) {
    _dimension__WEBPACK_IMPORTED_MODULE_4__.all.run();
    _padding__WEBPACK_IMPORTED_MODULE_2__.all.run();
    _spacing__WEBPACK_IMPORTED_MODULE_3__.all.run();
    _radius__WEBPACK_IMPORTED_MODULE_5__.all.run();
    _visibility__WEBPACK_IMPORTED_MODULE_6__.toggle.run();
    _mode__WEBPACK_IMPORTED_MODULE_7__.all.run();
    if (scope === "everything") {
        // Get selected nodes.
        let userSelection = figma.currentPage.selection;
        for (let node of userSelection) {
            // Get only the instances.
            if (node.type === "INSTANCE") {
                // Get the source component of the instance.
                let mainComponent = node.mainComponent;
                if (mainComponent) {
                    matchChildren(node, mainComponent);
                }
            }
        }
    }
}
function matchChildren(node, refNode) {
    for (let i = 0, childrenCount = node.children.length; i < childrenCount; ++i) {
        let child = node.children[i], refChild = refNode.children[i];
        if (_figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(child) && _figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(refChild)) {
            // Match all variables of child to reference node.
            let variables = refChild.boundVariables;
            if (variables.width)
                child.setBoundVariable("width", variables.width.id);
            if (variables.height)
                child.setBoundVariable("height", variables.height.id);
            if (_figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(child) && _figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(refChild)) {
                if (variables.paddingTop)
                    child.setBoundVariable("paddingTop", variables.paddingTop.id);
                else
                    child.paddingTop = refChild.paddingTop;
                if (variables.paddingBottom)
                    child.setBoundVariable("paddingBottom", variables.paddingBottom.id);
                child.paddingRight = refChild.paddingRight;
                if (variables.paddingLeft)
                    child.setBoundVariable("paddingLeft", variables.paddingLeft.id);
                child.paddingBottom = refChild.paddingBottom;
                if (variables.paddingRight)
                    child.setBoundVariable("paddingRight", variables.paddingRight.id);
                child.paddingLeft = refChild.paddingLeft;
                if (variables.itemSpacing)
                    child.setBoundVariable("itemSpacing", variables.itemSpacing.id);
                else
                    child.itemSpacing = refChild.itemSpacing;
                if (variables.counterAxisSpacing)
                    child.setBoundVariable("counterAxisSpacing", variables.counterAxisSpacing.id);
                else
                    child.counterAxisSpacing = refChild.counterAxisSpacing;
            }
            if (child.type !== "GROUP" && refChild.type !== "GROUP" &&
                child.type !== "SECTION" && refChild.type !== "SECTION" &&
                child.type !== "BOOLEAN_OPERATION" && refChild.type !== "BOOLEAN_OPERATION" &&
                child.type !== "STAR" && refChild.type !== "STAR" &&
                child.type !== "ELLIPSE" && refChild.type !== "ELLIPSE" &&
                child.type !== "POLYGON" && refChild.type !== "POLYGON" &&
                child.type !== "TEXT" && refChild.type !== "TEXT") {
                if (variables.topLeftRadius)
                    child.setBoundVariable("topLeftRadius", variables.topLeftRadius.id);
                else
                    child.topLeftRadius = refChild.topLeftRadius;
                if (variables.topRightRadius)
                    child.setBoundVariable("topRightRadius", variables.topRightRadius.id);
                else
                    child.topRightRadius = refChild.topRightRadius;
                if (variables.bottomLeftRadius)
                    child.setBoundVariable("bottomLeftRadius", variables.bottomLeftRadius.id);
                else
                    child.bottomLeftRadius = refChild.bottomLeftRadius;
                if (variables.bottomRightRadius)
                    child.setBoundVariable("bottomRightRadius", variables.bottomRightRadius.id);
                else
                    child.bottomRightRadius = refChild.bottomRightRadius;
            }
            if (variables.visible)
                child.setBoundVariable("visible", variables.visible.id);
            else
                child.visible = refChild.visible;
        }
        // Drill through existing children and repeat.
        if (_figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(child) && _figma_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(refChild))
            matchChildren(child, refChild);
    }
}


/***/ }),

/***/ "./src/modules/mode.ts":
/*!*****************************!*\
  !*** ./src/modules/mode.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const all = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allModes", main);
function main() {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                let modes = mainComponent.explicitVariableModes, collections = Object.keys(modes);
                if (collections.length !== 0) {
                    for (let collectionID of collections)
                        node.setExplicitVariableModeForCollection(collectionID, modes[collectionID]);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/modules/padding.ts":
/*!********************************!*\
  !*** ./src/modules/padding.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   bottom: () => (/* binding */ bottom),
/* harmony export */   left: () => (/* binding */ left),
/* harmony export */   right: () => (/* binding */ right),
/* harmony export */   top: () => (/* binding */ top)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const all = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allPadding", main, "top, bottom, left, right");
const top = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("topPadding", main, "top");
const bottom = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("bottomPadding", main, "bottom");
const left = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("leftPadding", main, "left");
const right = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("rightPadding", main, "right");
function main(affectedPadding) {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                // Top padding.
                if (affectedPadding.includes("top")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.paddingTop)
                        node.setBoundVariable("paddingTop", mainComponent.boundVariables.paddingTop.id);
                    else
                        node.paddingTop = mainComponent.paddingTop;
                }
                // Bottom padding.
                if (affectedPadding.includes("bottom")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.paddingBottom)
                        node.setBoundVariable("paddingBottom", mainComponent.boundVariables.paddingBottom.id);
                    else
                        node.paddingBottom = mainComponent.paddingBottom;
                }
                // Left padding.
                if (affectedPadding.includes("left")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.paddingLeft)
                        node.setBoundVariable("paddingLeft", mainComponent.boundVariables.paddingLeft.id);
                    else
                        node.paddingLeft = mainComponent.paddingLeft;
                }
                // Right padding.
                if (affectedPadding.includes("right")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.paddingRight)
                        node.setBoundVariable("paddingRight", mainComponent.boundVariables.paddingRight.id);
                    else
                        node.paddingRight = mainComponent.paddingRight;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/modules/radius.ts":
/*!*******************************!*\
  !*** ./src/modules/radius.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   bottomLeft: () => (/* binding */ bottomLeft),
/* harmony export */   bottomRight: () => (/* binding */ bottomRight),
/* harmony export */   topLeft: () => (/* binding */ topLeft),
/* harmony export */   topRight: () => (/* binding */ topRight)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const all = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allRadii", main, "topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius");
const topLeft = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("topLeftRadius", main, "topLeftRadius");
const topRight = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("topRightRadius", main, "topRightRadius");
const bottomLeft = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("bottomLeftRadius", main, "bottomLeftRadius");
const bottomRight = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("bottomRightRadius", main, "bottomRightRadius");
function main(affectedPadding) {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                // Top left radius.
                if (affectedPadding.includes("topLeft")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.topLeftRadius)
                        node.setBoundVariable("topLeftRadius", mainComponent.boundVariables.topLeftRadius.id);
                    else
                        node.topLeftRadius = mainComponent.topLeftRadius;
                }
                // Top right radius.
                if (affectedPadding.includes("topRight")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.topRightRadius)
                        node.setBoundVariable("topRightRadius", mainComponent.boundVariables.topRightRadius.id);
                    else
                        node.topRightRadius = mainComponent.topRightRadius;
                }
                // Bottom left radius.
                if (affectedPadding.includes("bottomLeft")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.bottomLeftRadius)
                        node.setBoundVariable("bottomLeftRadius", mainComponent.boundVariables.bottomLeftRadius.id);
                    else
                        node.bottomLeftRadius = mainComponent.bottomLeftRadius;
                }
                // Bottom right radius.
                if (affectedPadding.includes("bottomRight")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.bottomRightRadius)
                        node.setBoundVariable("bottomRightRadius", mainComponent.boundVariables.bottomRightRadius.id);
                    else
                        node.bottomRightRadius = mainComponent.bottomRightRadius;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/modules/spacing.ts":
/*!********************************!*\
  !*** ./src/modules/spacing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   counterAxis: () => (/* binding */ counterAxis),
/* harmony export */   item: () => (/* binding */ item)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const all = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allSpacing", main, "item, counterAxis");
const item = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("itemSpacing", main, "item");
const counterAxis = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("counterAxisSpacing", main, "counterAxis");
function main(affectedSpacing) {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                // Item spacing.
                if (affectedSpacing.includes("item")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.itemSpacing)
                        node.setBoundVariable("itemSpacing", mainComponent.boundVariables.itemSpacing.id);
                    else
                        node.itemSpacing = mainComponent.itemSpacing;
                }
                // Counter axis spacing.
                if (affectedSpacing.includes("counterAxis")) {
                    if (mainComponent.boundVariables && mainComponent.boundVariables.counterAxisSpacing)
                        node.setBoundVariable("counterAxisSpacing", mainComponent.boundVariables.counterAxisSpacing.id);
                    else
                        node.counterAxisSpacing = mainComponent.counterAxisSpacing;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/modules/visibility.ts":
/*!***********************************!*\
  !*** ./src/modules/visibility.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figma-quickaction */ "./src/figma-quickaction.ts");
/* Quick action */ 
const toggle = new _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.OperationModule("visibility", main);
function main() {
    // Get selected nodes.
    let userSelection = figma.currentPage.selection;
    for (let node of userSelection) {
        // Get only the instances.
        if (node.type === "INSTANCE") {
            // Get the source component of the instance.
            let mainComponent = node.mainComponent;
            if (mainComponent) {
                if (mainComponent.boundVariables && mainComponent.boundVariables.visible)
                    node.setBoundVariable("visible", mainComponent.boundVariables.visible.id);
                else
                    node.visible = mainComponent.visible;
            }
        }
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figma-quickaction */ "./src/figma-quickaction.ts");
/* harmony import */ var _modules_padding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/padding */ "./src/modules/padding.ts");
/* harmony import */ var _modules_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/spacing */ "./src/modules/spacing.ts");
/* harmony import */ var _modules_dimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dimension */ "./src/modules/dimension.ts");
/* harmony import */ var _modules_radius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/radius */ "./src/modules/radius.ts");
/* harmony import */ var _modules_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/visibility */ "./src/modules/visibility.ts");
/* harmony import */ var _modules_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/mode */ "./src/modules/mode.ts");
/* harmony import */ var _modules_everything_except_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/everything-except-content */ "./src/modules/everything-except-content.ts");
/* Quick action */ 
/* Modules */ 






// Log to console for debugging.
console.log("%cPlugin has started.", "color: #ccc");
// Load operation modules.
let modules = _figma_quickaction__WEBPACK_IMPORTED_MODULE_0__.loadModules([
    // Add modules to load below.
    _modules_padding__WEBPACK_IMPORTED_MODULE_1__.all, _modules_padding__WEBPACK_IMPORTED_MODULE_1__.top, _modules_padding__WEBPACK_IMPORTED_MODULE_1__.bottom, _modules_padding__WEBPACK_IMPORTED_MODULE_1__.left, _modules_padding__WEBPACK_IMPORTED_MODULE_1__.right,
    _modules_spacing__WEBPACK_IMPORTED_MODULE_2__.all, _modules_spacing__WEBPACK_IMPORTED_MODULE_2__.item, _modules_spacing__WEBPACK_IMPORTED_MODULE_2__.counterAxis,
    _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.all, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.widthHeight, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.width, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.height,
    _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.maxWidth, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.minWidth, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.maxHeight, _modules_dimension__WEBPACK_IMPORTED_MODULE_3__.minHeight,
    _modules_radius__WEBPACK_IMPORTED_MODULE_4__.all, _modules_radius__WEBPACK_IMPORTED_MODULE_4__.topLeft, _modules_radius__WEBPACK_IMPORTED_MODULE_4__.topRight, _modules_radius__WEBPACK_IMPORTED_MODULE_4__.bottomLeft, _modules_radius__WEBPACK_IMPORTED_MODULE_4__.bottomRight,
    _modules_visibility__WEBPACK_IMPORTED_MODULE_5__.toggle, _modules_mode__WEBPACK_IMPORTED_MODULE_6__.all,
    _modules_everything_except_content__WEBPACK_IMPORTED_MODULE_7__.everythingExceptContent, _modules_everything_except_content__WEBPACK_IMPORTED_MODULE_7__.outermostInstanceOnlyExceptContent
]);
// When plugin is running.
figma.on("run", () => {
    // No modules loaded.
    if (!modules) {
        figma.notify("No operation modules loaded.", { timeout: 5000, error: true });
        figma.closePlugin();
    }
    // Run module if it is found.
    if (modules) {
        let selectedModule = modules.matchCommandToModule(figma.command);
        if (selectedModule)
            selectedModule.run();
        figma.closePlugin();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGNBQWMsMkRBQXVCO0FBQ3JDO0FBQ0EsSUFBSSxpREFBVyxFQUFFLGlEQUFXLEVBQUUsb0RBQWMsRUFBRSxrREFBWSxFQUFFLG1EQUFhO0FBQ3pFLElBQUksaURBQVcsRUFBRSxrREFBWSxFQUFFLHlEQUFtQjtBQUNsRCxJQUFJLG1EQUFhLEVBQUUsMkRBQXFCLEVBQUUscURBQWUsRUFBRSxzREFBZ0I7QUFDM0UsSUFBSSx3REFBa0IsRUFBRSx3REFBa0IsRUFBRSx5REFBbUIsRUFBRSx5REFBbUI7QUFDcEYsSUFBSSxnREFBVSxFQUFFLG9EQUFjLEVBQUUscURBQWUsRUFBRSx1REFBaUIsRUFBRSx3REFBa0I7QUFDdEYsSUFBSSx1REFBZ0IsRUFBRSw4Q0FBUTtBQUM5QixJQUFJLHVGQUF1QixFQUFFLGtHQUFrQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDRCQUE0QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvZmlnbWEtcXVpY2thY3Rpb24udHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvZmlnbWEtdHlwZWdyb3Vwcy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9tb2R1bGVzL2RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9tb2R1bGVzL2V2ZXJ5dGhpbmctZXhjZXB0LWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbW9kdWxlcy9tb2RlLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL21vZHVsZXMvcGFkZGluZy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9tb2R1bGVzL3JhZGl1cy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9tb2R1bGVzL3NwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbW9kdWxlcy92aXNpYmlsaXR5LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDbGFzcyBmb3Igc3RvcmluZyBxdWljayBhY3Rpb24gcGFyYW1ldGVycyBmb3IgZWFjaCBtb2R1bGUuXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBmbiwgZml4ZWRQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgIHRoaXMudXNlclBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgICB0aGlzLmZpeGVkUGFyYW1ldGVycyA9IGZpeGVkUGFyYW1ldGVycztcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIE1ldGhvZHMgZm9yIHNldHRpbmcgdXAgcXVpY2sgYWN0aW9uIHBhcmFtZXRlcnMuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIFNldCBwYXJhbWV0ZXJzLlxuICAgIHNldFBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICAgICAgdGhpcy51c2VyUGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBNZXRob2RzIGZvciByZXRyaWV2aW5nIHF1aWNrIGFjdGlvbiBwYXJhbWV0ZXJzLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvLyBHZXQgY29tbWFuZC5cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgIHBhcmFtZXRlckV4aXN0cyhwYXJhbWV0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlclBhcmFtZXRlcnMuaW5kZXhPZihwYXJhbWV0ZXIpID49IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZXRyaWV2ZXMgYSBsaXN0IG9mIHN1Z2dlc3RlZCBwYXJhbWV0ZXJzLlxuICAgIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBydW4ocGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5mbih0aGlzLmZpeGVkUGFyYW1ldGVycywgcGFyYW1ldGVycyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1vZHVsZUxpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGxvYWRNb2R1bGUobW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobW9kdWxlLmdldENvbW1hbmQoKSwgbW9kdWxlKTtcbiAgICB9XG4gICAgbWF0Y2hDb21tYW5kVG9Nb2R1bGUoY29tbWFuZCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KGNvbW1hbmQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNb2R1bGUpXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRNb2R1bGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbi8vIExvYWQgbW9kdWxlIGRhdGEgZm9yIGRpc3BsYXlpbmcgaW4gdGhlIHF1aWNrIGFjdGlvbiB0YXNrYmFyLlxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMpIHtcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBNb2R1bGVMaWJyYXJ5O1xuICAgIGlmIChtb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGxpYnJhcnkubG9hZE1vZHVsZShtb2R1bGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTW9kdWxlIGxvYWRlZDogJHttb2R1bGUuZ2V0Q29tbWFuZCgpfWAsIFwiY29sb3I6ICNjY2NcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpYnJhcnk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFkZGluZ0lucHV0KHBhcmFtZXRlcnMpIHtcbiAgICAvLyBUb3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgcGFkZGluZyB2YWx1ZXMuXG4gICAgbGV0IHBhZGRpbmcgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBpbnB1dC5cbiAgICBpZiAocGFyYW1ldGVycy5wYWRkaW5nKSB7XG4gICAgICAgIC8vIFNwbGl0IHRoZSBpbnB1dCBpbnRvIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgICAgICBsZXQgcGFkZGluZ1NwbGl0ID0gcGFyYW1ldGVycy5wYWRkaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAubWFwKChzdHIpID0+IE51bWJlcihzdHIpKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgICAgICBmb3IgKGxldCBwYWRkaW5nVmFsdWUgb2YgcGFkZGluZ1NwbGl0KSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhZGRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJQYWRkaW5nIG5lZWRzIHRvIGJlIGEgbnVtYmVyLlwiLCB7IHRpbWVvdXQ6IDUwMDAsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFwIHBhZGRpbmcgdmFsdWVzIHRvIHBhZGRpbmcgYXJyYXkuXG4gICAgICAgIHN3aXRjaCAocGFkZGluZ1NwbGl0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHBhZGRpbmcgPSBbcGFkZGluZ1NwbGl0WzBdLCBwYWRkaW5nU3BsaXRbMF0sIHBhZGRpbmdTcGxpdFswXSwgcGFkZGluZ1NwbGl0WzBdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwYWRkaW5nID0gW3BhZGRpbmdTcGxpdFswXSwgcGFkZGluZ1NwbGl0WzFdLCBwYWRkaW5nU3BsaXRbMF0sIHBhZGRpbmdTcGxpdFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcGFkZGluZyA9IFtwYWRkaW5nU3BsaXRbMF0sIHBhZGRpbmdTcGxpdFsxXSwgcGFkZGluZ1NwbGl0WzJdLCBwYWRkaW5nU3BsaXRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHBhZGRpbmcgPSBbcGFkZGluZ1NwbGl0WzBdLCBwYWRkaW5nU3BsaXRbMV0sIHBhZGRpbmdTcGxpdFsyXSwgcGFkZGluZ1NwbGl0WzNdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiVGhlIHBsdWdpbiBhY2NlcHRzIHVwIHRvIDQgdmFsdWVzIGZvciBwYWRkaW5nLlwiLCB7IHRpbWVvdXQ6IDUwMDAsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gaW5wdXQuXG4gICAgZWxzZVxuICAgICAgICBwYWRkaW5nID0gWzAsIDAsIDAsIDBdO1xuICAgIHJldHVybiBwYWRkaW5nO1xufVxuIiwiZXhwb3J0IGNvbnN0IGlzRmlnbWFMYXllciA9IChub2RlKSA9PiAobm9kZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UX1NFVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiR1JPVVBcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJTRUNUSU9OXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiRUxMSVBTRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlBPTFlHT05cIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJTVEFSXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiVEVYVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkJPT0xFQU5fT1BFUkFUSU9OXCIpO1xuZXhwb3J0IGNvbnN0IGlzUGFyZW50YWJsZSA9IChub2RlKSA9PiAobm9kZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UX1NFVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiR1JPVVBcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJTRUNUSU9OXCIpO1xuZXhwb3J0IGNvbnN0IGlzUmVzaXphYmxlID0gKG5vZGUpID0+IChub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDT01QT05FTlRfU0VUXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlNFQ1RJT05cIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJFTExJUFNFXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlNUQVJcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJURVhUXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIik7XG5leHBvcnQgY29uc3QgY2FuQXV0b2xheW91dCA9IChub2RlKSA9PiAobm9kZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UX1NFVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkNPTVBPTkVOVFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpO1xuIiwiLyogUXVpY2sgYWN0aW9uICovIGltcG9ydCAqIGFzIHF1aWNrQWN0aW9uIGZyb20gXCIuLi9maWdtYS1xdWlja2FjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJhbGxEaW1lbnNpb25zXCIsIG1haW4sIFwiYm90aCwgbWF4V2lkdGgsIG1pbldpZHRoLCBtYXhIZWlnaHQsIG1pbkhlaWdodFwiKTtcbmV4cG9ydCBjb25zdCB3aWR0aEhlaWdodCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJ3aWR0aEhlaWdodFwiLCBtYWluLCBcImJvdGhcIik7XG5leHBvcnQgY29uc3Qgd2lkdGggPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwid2lkdGhcIiwgbWFpbiwgXCJ3aWR0aFwiKTtcbmV4cG9ydCBjb25zdCBoZWlnaHQgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiaGVpZ2h0XCIsIG1haW4sIFwiaGVpZ2h0XCIpO1xuZXhwb3J0IGNvbnN0IG1heFdpZHRoID0gbmV3IHF1aWNrQWN0aW9uLk9wZXJhdGlvbk1vZHVsZShcIm1heFdpZHRoXCIsIG1haW4sIFwibWF4V2lkdGhcIik7XG5leHBvcnQgY29uc3QgbWluV2lkdGggPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwibWluV2lkdGhcIiwgbWFpbiwgXCJtaW5XaWR0aFwiKTtcbmV4cG9ydCBjb25zdCBtYXhIZWlnaHQgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwibWF4SGVpZ2h0XCIsIG1haW4sIFwibWF4SGVpZ2h0XCIpO1xuZXhwb3J0IGNvbnN0IG1pbkhlaWdodCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJtaW5IZWlnaHRcIiwgbWFpbiwgXCJtaW5IZWlnaHRcIik7XG5mdW5jdGlvbiBtYWluKGFmZmVjdGVkRGltZW5zaW9uKSB7XG4gICAgLy8gR2V0IHNlbGVjdGVkIG5vZGVzLlxuICAgIGxldCB1c2VyU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IG5vZGUgb2YgdXNlclNlbGVjdGlvbikge1xuICAgICAgICAvLyBHZXQgb25seSB0aGUgaW5zdGFuY2VzLlxuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIGNvbXBvbmVudCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICAgICAgICBsZXQgbWFpbkNvbXBvbmVudCA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQm90aCB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkRGltZW5zaW9uID09PSBcImJvdGhcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3V2lkdGggPSBub2RlLndpZHRoLCBuZXdIZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIndpZHRoXCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMud2lkdGguaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1haW5Db21wb25lbnQud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiaGVpZ2h0XCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMuaGVpZ2h0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbWFpbkNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVzaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXaWR0aCBvbmx5XG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkRGltZW5zaW9uID09PSBcIndpZHRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIndpZHRoXCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMud2lkdGguaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlc2l6ZShtYWluQ29tcG9uZW50LndpZHRoLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEhlaWdodCBvbmx5XG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkRGltZW5zaW9uID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiaGVpZ2h0XCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMuaGVpZ2h0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZXNpemUobm9kZS53aWR0aCwgbWFpbkNvbXBvbmVudC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYXgtd2lkdGhcbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWREaW1lbnNpb24gPT09IFwibWF4V2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcyAmJiBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLm1heFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWF4V2lkdGhcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5tYXhXaWR0aC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWF4V2lkdGggPSBtYWluQ29tcG9uZW50Lm1heFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNaW4td2lkdGhcbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWREaW1lbnNpb24gPT09IFwibWluV2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcyAmJiBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLm1pbldpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWluV2lkdGhcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5taW5XaWR0aC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWluV2lkdGggPSBtYWluQ29tcG9uZW50Lm1pbldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYXgtaGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkRGltZW5zaW9uID09PSBcIm1heEhlaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMubWF4SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWF4SGVpZ2h0XCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMubWF4SGVpZ2h0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5tYXhIZWlnaHQgPSBtYWluQ29tcG9uZW50Lm1heEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWluLWhlaWdodFxuICAgICAgICAgICAgICAgIGlmIChhZmZlY3RlZERpbWVuc2lvbiA9PT0gXCJtaW5IZWlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcyAmJiBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLm1pbkhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIm1pbkhlaWdodFwiLCBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLm1pbkhlaWdodC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWluSGVpZ2h0ID0gbWFpbkNvbXBvbmVudC5taW5IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogVHlwZXMgKi8gaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vZmlnbWEtdHlwZWdyb3Vwc1wiO1xuLyogUXVpY2sgYWN0aW9uICovIGltcG9ydCAqIGFzIHF1aWNrQWN0aW9uIGZyb20gXCIuLi9maWdtYS1xdWlja2FjdGlvblwiO1xuLyogTW9kdWxlcyAqLyBpbXBvcnQgKiBhcyBwYWRkaW5nIGZyb20gXCIuL3BhZGRpbmdcIjtcbmltcG9ydCAqIGFzIHNwYWNpbmcgZnJvbSBcIi4vc3BhY2luZ1wiO1xuaW1wb3J0ICogYXMgZGltZW5zaW9ucyBmcm9tIFwiLi9kaW1lbnNpb25cIjtcbmltcG9ydCAqIGFzIHJhZGl1cyBmcm9tIFwiLi9yYWRpdXNcIjtcbmltcG9ydCAqIGFzIHZpc2liaWx0eSBmcm9tIFwiLi92aXNpYmlsaXR5XCI7XG5pbXBvcnQgKiBhcyBtb2RlIGZyb20gXCIuL21vZGVcIjtcbmV4cG9ydCBjb25zdCBldmVyeXRoaW5nRXhjZXB0Q29udGVudCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJldmVyeXRoaW5nRXhjZXB0Q29udGVudFwiLCBtYWluLCBcImV2ZXJ5dGhpbmdcIik7XG5leHBvcnQgY29uc3Qgb3V0ZXJtb3N0SW5zdGFuY2VPbmx5RXhjZXB0Q29udGVudCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJvdXRlcm1vc3RJbnN0YW5jZU9ubHlFeGNlcHRDb250ZW50XCIsIG1haW4sIFwib3V0ZXJtb3N0SW5zdGFuY2VcIik7XG5mdW5jdGlvbiBtYWluKHNjb3BlKSB7XG4gICAgZGltZW5zaW9ucy5hbGwucnVuKCk7XG4gICAgcGFkZGluZy5hbGwucnVuKCk7XG4gICAgc3BhY2luZy5hbGwucnVuKCk7XG4gICAgcmFkaXVzLmFsbC5ydW4oKTtcbiAgICB2aXNpYmlsdHkudG9nZ2xlLnJ1bigpO1xuICAgIG1vZGUuYWxsLnJ1bigpO1xuICAgIGlmIChzY29wZSA9PT0gXCJldmVyeXRoaW5nXCIpIHtcbiAgICAgICAgLy8gR2V0IHNlbGVjdGVkIG5vZGVzLlxuICAgICAgICBsZXQgdXNlclNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB1c2VyU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBHZXQgb25seSB0aGUgaW5zdGFuY2VzLlxuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgY29tcG9uZW50IG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICBsZXQgbWFpbkNvbXBvbmVudCA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaENoaWxkcmVuKG5vZGUsIG1haW5Db21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1hdGNoQ2hpbGRyZW4obm9kZSwgcmVmTm9kZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBjaGlsZHJlbkNvdW50ID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBjaGlsZHJlbkNvdW50OyArK2kpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXSwgcmVmQ2hpbGQgPSByZWZOb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAodHlwZS5pc0ZpZ21hTGF5ZXIoY2hpbGQpICYmIHR5cGUuaXNGaWdtYUxheWVyKHJlZkNoaWxkKSkge1xuICAgICAgICAgICAgLy8gTWF0Y2ggYWxsIHZhcmlhYmxlcyBvZiBjaGlsZCB0byByZWZlcmVuY2Ugbm9kZS5cbiAgICAgICAgICAgIGxldCB2YXJpYWJsZXMgPSByZWZDaGlsZC5ib3VuZFZhcmlhYmxlcztcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZXMud2lkdGgpXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcIndpZHRoXCIsIHZhcmlhYmxlcy53aWR0aC5pZCk7XG4gICAgICAgICAgICBpZiAodmFyaWFibGVzLmhlaWdodClcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZFZhcmlhYmxlKFwiaGVpZ2h0XCIsIHZhcmlhYmxlcy5oZWlnaHQuaWQpO1xuICAgICAgICAgICAgaWYgKHR5cGUuY2FuQXV0b2xheW91dChjaGlsZCkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZkNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMucGFkZGluZ1RvcClcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdUb3BcIiwgdmFyaWFibGVzLnBhZGRpbmdUb3AuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucGFkZGluZ1RvcCA9IHJlZkNoaWxkLnBhZGRpbmdUb3A7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5wYWRkaW5nQm90dG9tKVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ0JvdHRvbVwiLCB2YXJpYWJsZXMucGFkZGluZ0JvdHRvbS5pZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFkZGluZ1JpZ2h0ID0gcmVmQ2hpbGQucGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMucGFkZGluZ0xlZnQpXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEJvdW5kVmFyaWFibGUoXCJwYWRkaW5nTGVmdFwiLCB2YXJpYWJsZXMucGFkZGluZ0xlZnQuaWQpO1xuICAgICAgICAgICAgICAgIGNoaWxkLnBhZGRpbmdCb3R0b20gPSByZWZDaGlsZC5wYWRkaW5nQm90dG9tO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMucGFkZGluZ1JpZ2h0KVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ1JpZ2h0XCIsIHZhcmlhYmxlcy5wYWRkaW5nUmlnaHQuaWQpO1xuICAgICAgICAgICAgICAgIGNoaWxkLnBhZGRpbmdMZWZ0ID0gcmVmQ2hpbGQucGFkZGluZ0xlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pdGVtU3BhY2luZylcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcIml0ZW1TcGFjaW5nXCIsIHZhcmlhYmxlcy5pdGVtU3BhY2luZy5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5pdGVtU3BhY2luZyA9IHJlZkNoaWxkLml0ZW1TcGFjaW5nO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMuY291bnRlckF4aXNTcGFjaW5nKVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZFZhcmlhYmxlKFwiY291bnRlckF4aXNTcGFjaW5nXCIsIHZhcmlhYmxlcy5jb3VudGVyQXhpc1NwYWNpbmcuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY291bnRlckF4aXNTcGFjaW5nID0gcmVmQ2hpbGQuY291bnRlckF4aXNTcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT09IFwiR1JPVVBcIiAmJiByZWZDaGlsZC50eXBlICE9PSBcIkdST1VQXCIgJiZcbiAgICAgICAgICAgICAgICBjaGlsZC50eXBlICE9PSBcIlNFQ1RJT05cIiAmJiByZWZDaGlsZC50eXBlICE9PSBcIlNFQ1RJT05cIiAmJlxuICAgICAgICAgICAgICAgIGNoaWxkLnR5cGUgIT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIiAmJiByZWZDaGlsZC50eXBlICE9PSBcIkJPT0xFQU5fT1BFUkFUSU9OXCIgJiZcbiAgICAgICAgICAgICAgICBjaGlsZC50eXBlICE9PSBcIlNUQVJcIiAmJiByZWZDaGlsZC50eXBlICE9PSBcIlNUQVJcIiAmJlxuICAgICAgICAgICAgICAgIGNoaWxkLnR5cGUgIT09IFwiRUxMSVBTRVwiICYmIHJlZkNoaWxkLnR5cGUgIT09IFwiRUxMSVBTRVwiICYmXG4gICAgICAgICAgICAgICAgY2hpbGQudHlwZSAhPT0gXCJQT0xZR09OXCIgJiYgcmVmQ2hpbGQudHlwZSAhPT0gXCJQT0xZR09OXCIgJiZcbiAgICAgICAgICAgICAgICBjaGlsZC50eXBlICE9PSBcIlRFWFRcIiAmJiByZWZDaGlsZC50eXBlICE9PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMudG9wTGVmdFJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcInRvcExlZnRSYWRpdXNcIiwgdmFyaWFibGVzLnRvcExlZnRSYWRpdXMuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudG9wTGVmdFJhZGl1cyA9IHJlZkNoaWxkLnRvcExlZnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy50b3BSaWdodFJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcInRvcFJpZ2h0UmFkaXVzXCIsIHZhcmlhYmxlcy50b3BSaWdodFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC50b3BSaWdodFJhZGl1cyA9IHJlZkNoaWxkLnRvcFJpZ2h0UmFkaXVzO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMuYm90dG9tTGVmdFJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcImJvdHRvbUxlZnRSYWRpdXNcIiwgdmFyaWFibGVzLmJvdHRvbUxlZnRSYWRpdXMuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYm90dG9tTGVmdFJhZGl1cyA9IHJlZkNoaWxkLmJvdHRvbUxlZnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5ib3R0b21SaWdodFJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRWYXJpYWJsZShcImJvdHRvbVJpZ2h0UmFkaXVzXCIsIHZhcmlhYmxlcy5ib3R0b21SaWdodFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5ib3R0b21SaWdodFJhZGl1cyA9IHJlZkNoaWxkLmJvdHRvbVJpZ2h0UmFkaXVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNoaWxkLnNldEJvdW5kVmFyaWFibGUoXCJ2aXNpYmxlXCIsIHZhcmlhYmxlcy52aXNpYmxlLmlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjaGlsZC52aXNpYmxlID0gcmVmQ2hpbGQudmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmlsbCB0aHJvdWdoIGV4aXN0aW5nIGNoaWxkcmVuIGFuZCByZXBlYXQuXG4gICAgICAgIGlmICh0eXBlLmlzUGFyZW50YWJsZShjaGlsZCkgJiYgdHlwZS5pc1BhcmVudGFibGUocmVmQ2hpbGQpKVxuICAgICAgICAgICAgbWF0Y2hDaGlsZHJlbihjaGlsZCwgcmVmQ2hpbGQpO1xuICAgIH1cbn1cbiIsIi8qIFF1aWNrIGFjdGlvbiAqLyBpbXBvcnQgKiBhcyBxdWlja0FjdGlvbiBmcm9tIFwiLi4vZmlnbWEtcXVpY2thY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiYWxsTW9kZXNcIiwgbWFpbik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIC8vIEdldCBzZWxlY3RlZCBub2Rlcy5cbiAgICBsZXQgdXNlclNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBub2RlIG9mIHVzZXJTZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gR2V0IG9ubHkgdGhlIGluc3RhbmNlcy5cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBjb21wb25lbnQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAgICAgICAgbGV0IG1haW5Db21wb25lbnQgPSBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBtb2RlcyA9IG1haW5Db21wb25lbnQuZXhwbGljaXRWYXJpYWJsZU1vZGVzLCBjb2xsZWN0aW9ucyA9IE9iamVjdC5rZXlzKG1vZGVzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbGxlY3Rpb25JRCBvZiBjb2xsZWN0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0RXhwbGljaXRWYXJpYWJsZU1vZGVGb3JDb2xsZWN0aW9uKGNvbGxlY3Rpb25JRCwgbW9kZXNbY29sbGVjdGlvbklEXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogUXVpY2sgYWN0aW9uICovIGltcG9ydCAqIGFzIHF1aWNrQWN0aW9uIGZyb20gXCIuLi9maWdtYS1xdWlja2FjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJhbGxQYWRkaW5nXCIsIG1haW4sIFwidG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XCIpO1xuZXhwb3J0IGNvbnN0IHRvcCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJ0b3BQYWRkaW5nXCIsIG1haW4sIFwidG9wXCIpO1xuZXhwb3J0IGNvbnN0IGJvdHRvbSA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJib3R0b21QYWRkaW5nXCIsIG1haW4sIFwiYm90dG9tXCIpO1xuZXhwb3J0IGNvbnN0IGxlZnQgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwibGVmdFBhZGRpbmdcIiwgbWFpbiwgXCJsZWZ0XCIpO1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gbmV3IHF1aWNrQWN0aW9uLk9wZXJhdGlvbk1vZHVsZShcInJpZ2h0UGFkZGluZ1wiLCBtYWluLCBcInJpZ2h0XCIpO1xuZnVuY3Rpb24gbWFpbihhZmZlY3RlZFBhZGRpbmcpIHtcbiAgICAvLyBHZXQgc2VsZWN0ZWQgbm9kZXMuXG4gICAgbGV0IHVzZXJTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZm9yIChsZXQgbm9kZSBvZiB1c2VyU2VsZWN0aW9uKSB7XG4gICAgICAgIC8vIEdldCBvbmx5IHRoZSBpbnN0YW5jZXMuXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgY29tcG9uZW50IG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICAgIGxldCBtYWluQ29tcG9uZW50ID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUb3AgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWRQYWRkaW5nLmluY2x1ZGVzKFwidG9wXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMucGFkZGluZ1RvcClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdUb3BcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nVG9wLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYWRkaW5nVG9wID0gbWFpbkNvbXBvbmVudC5wYWRkaW5nVG9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBCb3R0b20gcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWRQYWRkaW5nLmluY2x1ZGVzKFwiYm90dG9tXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMucGFkZGluZ0JvdHRvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdCb3R0b21cIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nQm90dG9tLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYWRkaW5nQm90dG9tID0gbWFpbkNvbXBvbmVudC5wYWRkaW5nQm90dG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IHBhZGRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkUGFkZGluZy5pbmNsdWRlcyhcImxlZnRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nTGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdMZWZ0XCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMucGFkZGluZ0xlZnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhZGRpbmdMZWZ0ID0gbWFpbkNvbXBvbmVudC5wYWRkaW5nTGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWRQYWRkaW5nLmluY2x1ZGVzKFwicmlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nUmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJwYWRkaW5nUmlnaHRcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nUmlnaHQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhZGRpbmdSaWdodCA9IG1haW5Db21wb25lbnQucGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIFF1aWNrIGFjdGlvbiAqLyBpbXBvcnQgKiBhcyBxdWlja0FjdGlvbiBmcm9tIFwiLi4vZmlnbWEtcXVpY2thY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiYWxsUmFkaWlcIiwgbWFpbiwgXCJ0b3BMZWZ0UmFkaXVzLCB0b3BSaWdodFJhZGl1cywgYm90dG9tTGVmdFJhZGl1cywgYm90dG9tUmlnaHRSYWRpdXNcIik7XG5leHBvcnQgY29uc3QgdG9wTGVmdCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJ0b3BMZWZ0UmFkaXVzXCIsIG1haW4sIFwidG9wTGVmdFJhZGl1c1wiKTtcbmV4cG9ydCBjb25zdCB0b3BSaWdodCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJ0b3BSaWdodFJhZGl1c1wiLCBtYWluLCBcInRvcFJpZ2h0UmFkaXVzXCIpO1xuZXhwb3J0IGNvbnN0IGJvdHRvbUxlZnQgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiYm90dG9tTGVmdFJhZGl1c1wiLCBtYWluLCBcImJvdHRvbUxlZnRSYWRpdXNcIik7XG5leHBvcnQgY29uc3QgYm90dG9tUmlnaHQgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiYm90dG9tUmlnaHRSYWRpdXNcIiwgbWFpbiwgXCJib3R0b21SaWdodFJhZGl1c1wiKTtcbmZ1bmN0aW9uIG1haW4oYWZmZWN0ZWRQYWRkaW5nKSB7XG4gICAgLy8gR2V0IHNlbGVjdGVkIG5vZGVzLlxuICAgIGxldCB1c2VyU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IG5vZGUgb2YgdXNlclNlbGVjdGlvbikge1xuICAgICAgICAvLyBHZXQgb25seSB0aGUgaW5zdGFuY2VzLlxuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIGNvbXBvbmVudCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICAgICAgICBsZXQgbWFpbkNvbXBvbmVudCA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVG9wIGxlZnQgcmFkaXVzLlxuICAgICAgICAgICAgICAgIGlmIChhZmZlY3RlZFBhZGRpbmcuaW5jbHVkZXMoXCJ0b3BMZWZ0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMudG9wTGVmdFJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInRvcExlZnRSYWRpdXNcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy50b3BMZWZ0UmFkaXVzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50b3BMZWZ0UmFkaXVzID0gbWFpbkNvbXBvbmVudC50b3BMZWZ0UmFkaXVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUb3AgcmlnaHQgcmFkaXVzLlxuICAgICAgICAgICAgICAgIGlmIChhZmZlY3RlZFBhZGRpbmcuaW5jbHVkZXMoXCJ0b3BSaWdodFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcyAmJiBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLnRvcFJpZ2h0UmFkaXVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwidG9wUmlnaHRSYWRpdXNcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy50b3BSaWdodFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudG9wUmlnaHRSYWRpdXMgPSBtYWluQ29tcG9uZW50LnRvcFJpZ2h0UmFkaXVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBCb3R0b20gbGVmdCByYWRpdXMuXG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkUGFkZGluZy5pbmNsdWRlcyhcImJvdHRvbUxlZnRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5ib3R0b21MZWZ0UmFkaXVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiYm90dG9tTGVmdFJhZGl1c1wiLCBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLmJvdHRvbUxlZnRSYWRpdXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmJvdHRvbUxlZnRSYWRpdXMgPSBtYWluQ29tcG9uZW50LmJvdHRvbUxlZnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEJvdHRvbSByaWdodCByYWRpdXMuXG4gICAgICAgICAgICAgICAgaWYgKGFmZmVjdGVkUGFkZGluZy5pbmNsdWRlcyhcImJvdHRvbVJpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzICYmIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMuYm90dG9tUmlnaHRSYWRpdXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJib3R0b21SaWdodFJhZGl1c1wiLCBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLmJvdHRvbVJpZ2h0UmFkaXVzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ib3R0b21SaWdodFJhZGl1cyA9IG1haW5Db21wb25lbnQuYm90dG9tUmlnaHRSYWRpdXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogUXVpY2sgYWN0aW9uICovIGltcG9ydCAqIGFzIHF1aWNrQWN0aW9uIGZyb20gXCIuLi9maWdtYS1xdWlja2FjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJhbGxTcGFjaW5nXCIsIG1haW4sIFwiaXRlbSwgY291bnRlckF4aXNcIik7XG5leHBvcnQgY29uc3QgaXRlbSA9IG5ldyBxdWlja0FjdGlvbi5PcGVyYXRpb25Nb2R1bGUoXCJpdGVtU3BhY2luZ1wiLCBtYWluLCBcIml0ZW1cIik7XG5leHBvcnQgY29uc3QgY291bnRlckF4aXMgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwiY291bnRlckF4aXNTcGFjaW5nXCIsIG1haW4sIFwiY291bnRlckF4aXNcIik7XG5mdW5jdGlvbiBtYWluKGFmZmVjdGVkU3BhY2luZykge1xuICAgIC8vIEdldCBzZWxlY3RlZCBub2Rlcy5cbiAgICBsZXQgdXNlclNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmb3IgKGxldCBub2RlIG9mIHVzZXJTZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gR2V0IG9ubHkgdGhlIGluc3RhbmNlcy5cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBjb21wb25lbnQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAgICAgICAgbGV0IG1haW5Db21wb25lbnQgPSBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIC8vIEl0ZW0gc3BhY2luZy5cbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWRTcGFjaW5nLmluY2x1ZGVzKFwiaXRlbVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcyAmJiBtYWluQ29tcG9uZW50LmJvdW5kVmFyaWFibGVzLml0ZW1TcGFjaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiaXRlbVNwYWNpbmdcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5pdGVtU3BhY2luZy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBtYWluQ29tcG9uZW50Lml0ZW1TcGFjaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDb3VudGVyIGF4aXMgc3BhY2luZy5cbiAgICAgICAgICAgICAgICBpZiAoYWZmZWN0ZWRTcGFjaW5nLmluY2x1ZGVzKFwiY291bnRlckF4aXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5jb3VudGVyQXhpc1NwYWNpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJjb3VudGVyQXhpc1NwYWNpbmdcIiwgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy5jb3VudGVyQXhpc1NwYWNpbmcuaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNvdW50ZXJBeGlzU3BhY2luZyA9IG1haW5Db21wb25lbnQuY291bnRlckF4aXNTcGFjaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIFF1aWNrIGFjdGlvbiAqLyBpbXBvcnQgKiBhcyBxdWlja0FjdGlvbiBmcm9tIFwiLi4vZmlnbWEtcXVpY2thY3Rpb25cIjtcbmV4cG9ydCBjb25zdCB0b2dnbGUgPSBuZXcgcXVpY2tBY3Rpb24uT3BlcmF0aW9uTW9kdWxlKFwidmlzaWJpbGl0eVwiLCBtYWluKTtcbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gR2V0IHNlbGVjdGVkIG5vZGVzLlxuICAgIGxldCB1c2VyU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAobGV0IG5vZGUgb2YgdXNlclNlbGVjdGlvbikge1xuICAgICAgICAvLyBHZXQgb25seSB0aGUgaW5zdGFuY2VzLlxuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIGNvbXBvbmVudCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICAgICAgICBsZXQgbWFpbkNvbXBvbmVudCA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChtYWluQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMgJiYgbWFpbkNvbXBvbmVudC5ib3VuZFZhcmlhYmxlcy52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJ2aXNpYmxlXCIsIG1haW5Db21wb25lbnQuYm91bmRWYXJpYWJsZXMudmlzaWJsZS5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBub2RlLnZpc2libGUgPSBtYWluQ29tcG9uZW50LnZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIFF1aWNrIGFjdGlvbiAqLyBpbXBvcnQgKiBhcyBxdWlja0FjdGlvbiBmcm9tIFwiLi9maWdtYS1xdWlja2FjdGlvblwiO1xuLyogTW9kdWxlcyAqLyBpbXBvcnQgKiBhcyBwYWRkaW5nIGZyb20gXCIuL21vZHVsZXMvcGFkZGluZ1wiO1xuaW1wb3J0ICogYXMgc3BhY2luZyBmcm9tIFwiLi9tb2R1bGVzL3NwYWNpbmdcIjtcbmltcG9ydCAqIGFzIGRpbWVuc2lvbiBmcm9tIFwiLi9tb2R1bGVzL2RpbWVuc2lvblwiO1xuaW1wb3J0ICogYXMgcmFkaXVzIGZyb20gXCIuL21vZHVsZXMvcmFkaXVzXCI7XG5pbXBvcnQgKiBhcyB2aXNpYmlsdHkgZnJvbSBcIi4vbW9kdWxlcy92aXNpYmlsaXR5XCI7XG5pbXBvcnQgKiBhcyBtb2RlIGZyb20gXCIuL21vZHVsZXMvbW9kZVwiO1xuaW1wb3J0IHsgZXZlcnl0aGluZ0V4Y2VwdENvbnRlbnQsIG91dGVybW9zdEluc3RhbmNlT25seUV4Y2VwdENvbnRlbnQgfSBmcm9tIFwiLi9tb2R1bGVzL2V2ZXJ5dGhpbmctZXhjZXB0LWNvbnRlbnRcIjtcbi8vIExvZyB0byBjb25zb2xlIGZvciBkZWJ1Z2dpbmcuXG5jb25zb2xlLmxvZyhcIiVjUGx1Z2luIGhhcyBzdGFydGVkLlwiLCBcImNvbG9yOiAjY2NjXCIpO1xuLy8gTG9hZCBvcGVyYXRpb24gbW9kdWxlcy5cbmxldCBtb2R1bGVzID0gcXVpY2tBY3Rpb24ubG9hZE1vZHVsZXMoW1xuICAgIC8vIEFkZCBtb2R1bGVzIHRvIGxvYWQgYmVsb3cuXG4gICAgcGFkZGluZy5hbGwsIHBhZGRpbmcudG9wLCBwYWRkaW5nLmJvdHRvbSwgcGFkZGluZy5sZWZ0LCBwYWRkaW5nLnJpZ2h0LFxuICAgIHNwYWNpbmcuYWxsLCBzcGFjaW5nLml0ZW0sIHNwYWNpbmcuY291bnRlckF4aXMsXG4gICAgZGltZW5zaW9uLmFsbCwgZGltZW5zaW9uLndpZHRoSGVpZ2h0LCBkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsXG4gICAgZGltZW5zaW9uLm1heFdpZHRoLCBkaW1lbnNpb24ubWluV2lkdGgsIGRpbWVuc2lvbi5tYXhIZWlnaHQsIGRpbWVuc2lvbi5taW5IZWlnaHQsXG4gICAgcmFkaXVzLmFsbCwgcmFkaXVzLnRvcExlZnQsIHJhZGl1cy50b3BSaWdodCwgcmFkaXVzLmJvdHRvbUxlZnQsIHJhZGl1cy5ib3R0b21SaWdodCxcbiAgICB2aXNpYmlsdHkudG9nZ2xlLCBtb2RlLmFsbCxcbiAgICBldmVyeXRoaW5nRXhjZXB0Q29udGVudCwgb3V0ZXJtb3N0SW5zdGFuY2VPbmx5RXhjZXB0Q29udGVudFxuXSk7XG4vLyBXaGVuIHBsdWdpbiBpcyBydW5uaW5nLlxuZmlnbWEub24oXCJydW5cIiwgKCkgPT4ge1xuICAgIC8vIE5vIG1vZHVsZXMgbG9hZGVkLlxuICAgIGlmICghbW9kdWxlcykge1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJObyBvcGVyYXRpb24gbW9kdWxlcyBsb2FkZWQuXCIsIHsgdGltZW91dDogNTAwMCwgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIC8vIFJ1biBtb2R1bGUgaWYgaXQgaXMgZm91bmQuXG4gICAgaWYgKG1vZHVsZXMpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTW9kdWxlID0gbW9kdWxlcy5tYXRjaENvbW1hbmRUb01vZHVsZShmaWdtYS5jb21tYW5kKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkTW9kdWxlKVxuICAgICAgICAgICAgc2VsZWN0ZWRNb2R1bGUucnVuKCk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=