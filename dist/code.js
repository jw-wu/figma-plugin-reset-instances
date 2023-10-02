/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom/module-library.ts":
/*!**************************************!*\
  !*** ./src/custom/module-library.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   library: () => (/* binding */ library)
/* harmony export */ });
/* harmony import */ var _modules_components_padding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components/padding */ "./src/custom/modules/components/padding.ts");
/* harmony import */ var _modules_components_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/components/spacing */ "./src/custom/modules/components/spacing.ts");
/* harmony import */ var _modules_components_dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/dimension */ "./src/custom/modules/components/dimension.ts");
/* harmony import */ var _modules_components_radius__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/components/radius */ "./src/custom/modules/components/radius.ts");
/* harmony import */ var _modules_components_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components/visibility */ "./src/custom/modules/components/visibility.ts");
/* harmony import */ var _modules_components_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/components/mode */ "./src/custom/modules/components/mode.ts");
/* harmony import */ var _modules_components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/components/typography */ "./src/custom/modules/components/typography.ts");
/* harmony import */ var _modules_everything__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/everything */ "./src/custom/modules/everything.ts");
/* harmony import */ var _modules_outermost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/outermost */ "./src/custom/modules/outermost.ts");
/* harmony import */ var _modules_custom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/custom */ "./src/custom/modules/custom.ts");
/* Modules */ 









const library = [
    // Add modules here.
    _modules_components_padding__WEBPACK_IMPORTED_MODULE_0__.all,
    _modules_components_spacing__WEBPACK_IMPORTED_MODULE_1__.all,
    _modules_components_dimension__WEBPACK_IMPORTED_MODULE_2__.all,
    _modules_components_radius__WEBPACK_IMPORTED_MODULE_3__.all,
    _modules_components_visibility__WEBPACK_IMPORTED_MODULE_4__.toggle, _modules_components_mode__WEBPACK_IMPORTED_MODULE_5__.all,
    _modules_components_typography__WEBPACK_IMPORTED_MODULE_6__.all,
    _modules_everything__WEBPACK_IMPORTED_MODULE_7__.module,
    _modules_outermost__WEBPACK_IMPORTED_MODULE_8__.module,
    _modules_custom__WEBPACK_IMPORTED_MODULE_9__.module
];


/***/ }),

/***/ "./src/custom/modules/components/dimension.ts":
/*!****************************************************!*\
  !*** ./src/custom/modules/components/dimension.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchHeight: () => (/* binding */ matchHeight),
/* harmony export */   matchMaxHeight: () => (/* binding */ matchMaxHeight),
/* harmony export */   matchMaxWidth: () => (/* binding */ matchMaxWidth),
/* harmony export */   matchMinHeight: () => (/* binding */ matchMinHeight),
/* harmony export */   matchMinWidth: () => (/* binding */ matchMinWidth),
/* harmony export */   matchWidth: () => (/* binding */ matchWidth),
/* harmony export */   matchWidthAndHeight: () => (/* binding */ matchWidthAndHeight)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allDimensions", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        width: 0,
        height: 0,
        maxWidth: 0,
        minWidth: 0,
        maxHeight: 0,
        minHeight: 0
    };
    let dimensionLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield dimensionLibrary.addNodesFromSelection();
    yield dimensionLibrary.processEntries((node, reference, topLevel) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isFigmaLayer(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isFigmaLayer(reference)) {
            let dimensionsReset = matchStandardDimensions("both", node, reference);
            scoreCard.width += dimensionsReset[0];
            scoreCard.height += dimensionsReset[1];
            if (topLevel) {
                scoreCard.maxWidth += matchMaxWidth(node, reference);
                scoreCard.minWidth += matchMinWidth(node, reference);
                scoreCard.maxHeight += matchMaxHeight(node, reference);
                scoreCard.minHeight += matchMinHeight(node, reference);
            }
        }
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchWidthAndHeight(node, reference) {
    return matchStandardDimensions("both", node, reference);
}
function matchWidth(node, reference) {
    return matchStandardDimensions("widthOnly", node, reference)[0];
}
function matchHeight(node, reference) {
    return matchStandardDimensions("heightOnly", node, reference)[1];
}
function matchStandardDimensions(dimension, node, reference) {
    var _a, _b, _c, _d, _e, _f;
    let reset = [0, 0];
    let newWidth = node.width, newHeight = node.height, varWidth = "", varHeight = "";
    // Width.
    if (dimension !== "heightOnly") {
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.width) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.width) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.width.id) {
                // Do nothing.
            }
            else {
                varWidth = reference.boundVariables.width.id;
                reset[0] = 1;
            }
        }
        // Reset value.
        else if (node.width !== reference.width) {
            newWidth = reference.width;
            reset[0] = 1;
        }
    }
    // Height.
    if (dimension !== "widthOnly") {
        // Reset variable.
        if ((_d = reference.boundVariables) === null || _d === void 0 ? void 0 : _d.height) {
            if (((_f = (_e = node.boundVariables) === null || _e === void 0 ? void 0 : _e.height) === null || _f === void 0 ? void 0 : _f.id) === reference.boundVariables.height.id) {
                // Do nothing.
            }
            else {
                varHeight = reference.boundVariables.height.id;
                reset[1] = 1;
            }
        }
        // Reset value.
        else if (node.height !== reference.height) {
            newHeight = reference.height;
            reset[1] = 1;
        }
    }
    // Resize.
    if (node.type === "SECTION")
        node.resizeWithoutConstraints(newWidth, newHeight);
    else if (node.type !== "GROUP")
        node.resize(newWidth, newHeight);
    // Apply variables.
    if (varWidth.length !== 0)
        node.setBoundVariable("width", varWidth);
    if (varHeight.length !== 0)
        node.setBoundVariable("height", varHeight);
    // Log changes to console.
    if (reset[0] === 1)
        console.log(`%cWidth reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    if (reset[1] === 1)
        console.log(`%cHeight reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}
function matchMaxWidth(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.maxWidth) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.maxWidth) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.maxWidth.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("maxWidth", reference.boundVariables.maxWidth.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.maxWidth !== reference.maxWidth) {
            node.maxWidth = reference.maxWidth;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cMax-width reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their max-widths adjusted.
        return 0;
    }
}
function matchMinWidth(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.minWidth) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.minWidth) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.minWidth.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("minWidth", reference.boundVariables.minWidth.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.minWidth !== reference.minWidth) {
            node.minWidth = reference.minWidth;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cMin-width reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their min-widths adjusted.
        return 0;
    }
}
function matchMaxHeight(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.maxHeight) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.maxHeight) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.maxHeight.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("maxHeight", reference.boundVariables.maxHeight.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.maxHeight !== reference.maxHeight) {
            node.maxHeight = reference.maxHeight;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cMax-height reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their max-height adjusted.
        return 0;
    }
}
function matchMinHeight(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.minHeight) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.minHeight) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.minHeight.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("minHeight", reference.boundVariables.minHeight.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.minHeight !== reference.minHeight) {
            node.minHeight = reference.minHeight;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cMin-height reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their min-height adjusted.
        return 0;
    }
}


/***/ }),

/***/ "./src/custom/modules/components/fit.ts":
/*!**********************************************!*\
  !*** ./src/custom/modules/components/fit.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchAll: () => (/* binding */ matchAll)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allDimensions", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        fit: 0
    };
    let fitLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield fitLibrary.addNodesFromSelection();
    yield fitLibrary.processEntries((node, reference, topLevel) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(reference)) {
            scoreCard.fit += matchAll(node, reference);
        }
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchAll(node, reference) {
    let reset = 0;
    // Reset variable.
    if (node.layoutSizingHorizontal !== reference.layoutSizingHorizontal) {
        node.layoutSizingHorizontal = reference.layoutSizingHorizontal;
        reset = 1;
    }
    // Reset value.
    else if (node.layoutSizingVertical !== reference.layoutSizingVertical) {
        node.layoutSizingVertical = reference.layoutSizingVertical;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%Horizontal and vertical fit reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}


/***/ }),

/***/ "./src/custom/modules/components/mode.ts":
/*!***********************************************!*\
  !*** ./src/custom/modules/components/mode.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchAll: () => (/* binding */ matchAll)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allModes", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        mode: 0
    };
    let modeLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield modeLibrary.addNodesFromSelection();
    yield modeLibrary.processEntries((node, reference) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isFigmaLayer(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isFigmaLayer(reference))
            scoreCard.mode += matchAll(node, reference);
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchAll(node, reference) {
    // Setting explicit variable modes on instance sublayers is currently unsupported.
    try {
        let reset = 0;
        let referenceCollectionsNames = Object.keys(reference.explicitVariableModes), referenceCollectionCount = referenceCollectionsNames.length;
        // If there are explicitly set variables in the reference object.
        if (referenceCollectionCount !== 0) {
            for (let i = 0; i < referenceCollectionCount; ++i) {
                let collectionId = referenceCollectionsNames[i], modeId = reference.explicitVariableModes[collectionId];
                if (node.explicitVariableModes[collectionId] !== modeId) {
                    node.setExplicitVariableModeForCollection(collectionId, modeId);
                    reset = 1;
                }
            }
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cModes reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
        return reset;
    }
    catch (error) {
        console.log(`%c${error}`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.error);
        figma.notify("Explicit modes may have been set on some layers. Figma does not yet support resetting these modes from the plugin.");
        return 0;
    }
}


/***/ }),

/***/ "./src/custom/modules/components/padding.ts":
/*!**************************************************!*\
  !*** ./src/custom/modules/components/padding.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchBottomPadding: () => (/* binding */ matchBottomPadding),
/* harmony export */   matchLeftPadding: () => (/* binding */ matchLeftPadding),
/* harmony export */   matchRightPadding: () => (/* binding */ matchRightPadding),
/* harmony export */   matchTopPadding: () => (/* binding */ matchTopPadding)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allPadding", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    };
    let paddingLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield paddingLibrary.addNodesFromSelection();
    yield paddingLibrary.processEntries((node, reference) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(reference)) {
            scoreCard.paddingTop += matchTopPadding(node, reference);
            scoreCard.paddingBottom += matchBottomPadding(node, reference);
            scoreCard.paddingLeft += matchLeftPadding(node, reference);
            scoreCard.paddingRight += matchRightPadding(node, reference);
        }
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchTopPadding(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.paddingTop) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.paddingTop) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.paddingTop.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("paddingTop", reference.boundVariables.paddingTop.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.paddingTop !== reference.paddingTop) {
        node.paddingTop = reference.paddingTop;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cTop padding reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}
function matchBottomPadding(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.paddingBottom) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.paddingBottom) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.paddingBottom.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("paddingBottom", reference.boundVariables.paddingBottom.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.paddingBottom !== reference.paddingBottom) {
        node.paddingBottom = reference.paddingBottom;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cBottom padding reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}
function matchLeftPadding(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.paddingLeft) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.paddingLeft) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.paddingLeft.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("paddingLeft", reference.boundVariables.paddingLeft.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.paddingLeft !== reference.paddingLeft) {
        node.paddingLeft = reference.paddingLeft;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cLeft padding reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}
function matchRightPadding(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.paddingRight) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.paddingRight) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.paddingRight.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("paddingRight", reference.boundVariables.paddingRight.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.paddingRight !== reference.paddingRight) {
        node.paddingRight = reference.paddingRight;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cRight padding reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}


/***/ }),

/***/ "./src/custom/modules/components/radius.ts":
/*!*************************************************!*\
  !*** ./src/custom/modules/components/radius.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   canHaveRadii: () => (/* binding */ canHaveRadii),
/* harmony export */   matchBottomLeftRadius: () => (/* binding */ matchBottomLeftRadius),
/* harmony export */   matchBottomRightRadius: () => (/* binding */ matchBottomRightRadius),
/* harmony export */   matchTopLeftRadius: () => (/* binding */ matchTopLeftRadius),
/* harmony export */   matchTopRightRadius: () => (/* binding */ matchTopRightRadius)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 

/* Helpers */ 
const canHaveRadii = (node) => (node.type !== "GROUP" &&
    node.type !== "SECTION" &&
    node.type !== "BOOLEAN_OPERATION" &&
    node.type !== "STAR" &&
    node.type !== "ELLIPSE" &&
    node.type !== "POLYGON" &&
    node.type !== "VECTOR" &&
    node.type !== "TEXT");
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allRadii", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        radiusTopLeft: 0,
        radiusTopRight: 0,
        radiusBottomRight: 0,
        radiusBottomLeft: 0
    };
    let radiusLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_2__.ResetPropertiesLibrary();
    yield radiusLibrary.addNodesFromSelection();
    yield radiusLibrary.processEntries((node, reference) => {
        if (canHaveRadii(node) && canHaveRadii(reference)) {
            scoreCard.radiusTopLeft += matchTopLeftRadius(node, reference);
            scoreCard.radiusTopRight += matchTopRightRadius(node, reference);
            scoreCard.radiusBottomRight += matchBottomRightRadius(node, reference);
            scoreCard.radiusBottomLeft += matchBottomLeftRadius(node, reference);
        }
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchTopLeftRadius(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.topLeftRadius) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.topLeftRadius) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.topLeftRadius.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("topLeftRadius", reference.boundVariables.topLeftRadius.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.topLeftRadius !== reference.topLeftRadius) {
            node.topLeftRadius = reference.topLeftRadius;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cTop left radius reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their radius adjusted.
        return 0;
    }
}
function matchTopRightRadius(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.topRightRadius) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.topRightRadius) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.topRightRadius.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("topRightRadius", reference.boundVariables.topRightRadius.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.topRightRadius !== reference.topRightRadius) {
            node.topRightRadius = reference.topRightRadius;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cTop right radius reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their radius adjusted.
        return 0;
    }
}
function matchBottomRightRadius(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.bottomRightRadius) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.bottomRightRadius) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.bottomRightRadius.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("bottomRightRadius", reference.boundVariables.bottomRightRadius.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.bottomRightRadius !== reference.bottomRightRadius) {
            node.bottomRightRadius = reference.bottomRightRadius;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cBottom right radius reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their radius adjusted.
        return 0;
    }
}
function matchBottomLeftRadius(node, reference) {
    var _a, _b, _c;
    try {
        let reset = 0;
        // Reset variable.
        if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.bottomLeftRadius) {
            if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.bottomLeftRadius) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.bottomLeftRadius.id) {
                // Do nothing.
            }
            else {
                node.setBoundVariable("bottomLeftRadius", reference.boundVariables.bottomLeftRadius.id);
                reset = 1;
            }
        }
        // Reset value.
        else if (node.bottomLeftRadius !== reference.bottomLeftRadius) {
            node.bottomLeftRadius = reference.bottomLeftRadius;
            reset = 1;
        }
        // Log changes to console.
        if (reset === 1)
            console.log(`%cBottom left radius reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
        return reset;
    }
    catch (error) {
        // Nodes within instances cannot have their radius adjusted.
        return 0;
    }
}


/***/ }),

/***/ "./src/custom/modules/components/spacing.ts":
/*!**************************************************!*\
  !*** ./src/custom/modules/components/spacing.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchCounterAxisSpacing: () => (/* binding */ matchCounterAxisSpacing),
/* harmony export */   matchItemSpacing: () => (/* binding */ matchItemSpacing)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("allSpacing", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        itemSpacing: 0,
        counterAxisSpacing: 0
    };
    let spacingLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield spacingLibrary.addNodesFromSelection();
    yield spacingLibrary.processEntries((node, reference) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.canAutolayout(reference)) {
            scoreCard.itemSpacing += matchItemSpacing(node, reference);
            scoreCard.counterAxisSpacing += matchCounterAxisSpacing(node, reference);
        }
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function matchItemSpacing(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.itemSpacing) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.itemSpacing) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.itemSpacing.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("itemSpacing", reference.boundVariables.itemSpacing.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.itemSpacing !== reference.itemSpacing) {
        node.itemSpacing = reference.itemSpacing;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cItem spacing reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}
function matchCounterAxisSpacing(node, reference) {
    var _a, _b, _c;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.counterAxisSpacing) {
        if (((_c = (_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.counterAxisSpacing) === null || _c === void 0 ? void 0 : _c.id) === reference.boundVariables.counterAxisSpacing.id) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("counterAxisSpacing", reference.boundVariables.counterAxisSpacing.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.counterAxisSpacing !== reference.counterAxisSpacing) {
        node.counterAxisSpacing = reference.counterAxisSpacing;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cCounter axis spacing reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
    return reset;
}


/***/ }),

/***/ "./src/custom/modules/components/typography.ts":
/*!*****************************************************!*\
  !*** ./src/custom/modules/components/typography.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetTypographyLibrary: () => (/* binding */ ResetTypographyLibrary),
/* harmony export */   all: () => (/* binding */ all),
/* harmony export */   matchAll: () => (/* binding */ matchAll)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _plugins_figma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/figma/component */ "./src/plugins/figma/component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 


/* Helpers */ 
const all = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("typography", false, () => __awaiter(void 0, void 0, void 0, function* () {
    yield matchAll(figma.currentPage.selection);
}));
function matchAll(nodes) {
    return __awaiter(this, void 0, void 0, function* () {
        let library = new ResetTypographyLibrary();
        yield library.addNodesFromArray(nodes, true);
        yield library.processEntries();
    });
}
class ResetTypographyLibrary {
    constructor() {
        this.nodesWithoutStyle = {};
        this.nodesWithStyle = {};
        this.nodesWithMissingFonts = [];
        this.nodesWithMultipleFonts = [];
        this.catalogingCompleted = () => { };
        this.processingCompleted = () => { };
    }
    addNodesFromSelection(drillDeeper) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get selected nodes.
            let selectedNodes = figma.currentPage.selection;
            yield this.addNodesFromArray(selectedNodes, drillDeeper);
        });
    }
    addNodesFromArray(nodes, drillDeeper) {
        return __awaiter(this, void 0, void 0, function* () {
            drillDeeper = drillDeeper !== null && drillDeeper !== void 0 ? drillDeeper : true;
            console.log(`%cCataloging typography layers...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
            figma.notify(`Cataloging typography layers...`, {
                timeout: 200,
                onDequeue: (reason) => {
                    for (let node of nodes) {
                        // Text nodes cannot be instances, so get text node as children if an instance is received.
                        if (node.type === "INSTANCE") {
                            let parentReference = node.mainComponent;
                            if (parentReference) {
                                if (drillDeeper)
                                    this.catalogAllChildren(node, parentReference);
                                else {
                                    let childrenCount = node.children.length;
                                    for (let i = 0; i < childrenCount; ++i) {
                                        let child = node.children[i], reference = parentReference.children[i];
                                        if (child.type === "TEXT" && reference.type === "TEXT")
                                            this.catalogNode(child, reference);
                                    }
                                }
                            }
                        }
                        // Add node in if it is a text layer, but only if it is within an instance.
                        else {
                            let instanceAncestry = _plugins_figma_component__WEBPACK_IMPORTED_MODULE_3__.withinInstance(node);
                            if (instanceAncestry.true) {
                                // Get the source component of the parent instance.
                                let instance = figma.currentPage.findOne((n) => (n.id === instanceAncestry.instanceId));
                                if ((instance === null || instance === void 0 ? void 0 : instance.type) === "INSTANCE" && instance.mainComponent) {
                                    // Get the reference layer within the component.
                                    let reference = instance.mainComponent;
                                    for (let childIndex of instanceAncestry.path) {
                                        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isParentable(reference))
                                            reference = reference.children[childIndex];
                                    }
                                    if (node.type === "TEXT" && reference.type === "TEXT")
                                        this.catalogNode(node, reference);
                                    // Dig deeper if node is a parent.      
                                    if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isParentable(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isParentable(reference) && drillDeeper)
                                        this.catalogAllChildren(node, reference);
                                }
                            }
                        }
                    }
                    this.catalogingCompleted();
                }
            });
            yield new Promise((resolve, reject) => {
                this.catalogingCompleted = resolve;
                // Set a timeout of 5 mins to reject the operation and close the plugin, in case the plugin hangs.
                setTimeout(reject, 300000);
            });
        });
    }
    catalogAllChildren(parentNode, parentReference) {
        let childrenCount = parentNode.children.length;
        for (let i = 0; i < childrenCount; ++i) {
            console.log(`%cCataloging ${parentNode.name}...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
            let node = parentNode.children[i], reference = parentReference.children[i];
            if (node.type === "TEXT" && reference.type === "TEXT")
                this.catalogNode(node, reference);
            else if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isParentable(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_1__.isParentable(reference))
                this.catalogAllChildren(node, reference);
        }
    }
    catalogNode(node, reference) {
        // If missing fonts exists, log the node to the class.
        if (node.hasMissingFont)
            this.nodesWithMissingFonts.push({ name: node.name, id: node.id });
        else {
            if (reference.type === "TEXT" && this.isFontName(reference.fontName)) {
                // If reference contains multiple fonts, log the node to the class, as it'd be impossible to know how to style the text.
                let referenceFonts = reference.getRangeAllFontNames(0, reference.characters.length);
                if (referenceFonts.length > 1)
                    this.nodesWithMultipleFonts.push({ name: node.name, id: node.id });
                else {
                    let fontFullName = [reference.fontName.family, reference.fontName.style].join(" ");
                    // If text is linked to a text style, log it into nodesWithStyle.
                    if (typeof reference.textStyleId === "string" && reference.textStyleId.length !== 0) {
                        if (node.textStyleId !== reference.textStyleId) {
                            // Create an entry if none exists.
                            if (!this.nodesWithStyle[reference.textStyleId])
                                this.nodesWithStyle[reference.textStyleId] = {
                                    font: reference.fontName,
                                    nodes: [{ self: node, reference: reference }]
                                };
                            // Otherwise push in the node id.
                            else {
                                this.nodesWithStyle[reference.textStyleId].nodes.push({ self: node, reference: reference });
                            }
                        }
                    }
                    // Else add it to nodesWithoutStyle.
                    else if (node.fontName !== reference.fontName) {
                        // Create an entry if none exists.
                        if (!this.nodesWithoutStyle[fontFullName])
                            this.nodesWithoutStyle[fontFullName] = {
                                font: reference.fontName,
                                nodes: [{ self: node, reference: reference }]
                            };
                        // Otherwise push in the node id.
                        else {
                            this.nodesWithoutStyle[fontFullName].nodes.push({ self: node, reference: reference });
                        }
                    }
                }
            }
        }
    }
    processEntries() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`%cProcessing typography layers...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
            figma.notify(`Processing typography layers...`, {
                timeout: 100,
                onDequeue: (reason) => __awaiter(this, void 0, void 0, function* () {
                    // Reset nodes with styles.
                    yield this.resetNodesWithStyles();
                    // Reset nodes without styles.
                    yield this.resetNodesWithoutStyles();
                    // Logs nodes with errors.
                    let missingFontsNodes = [], multipleFontsNodes = [];
                    let errorNodes = this.getMissingFontNodes();
                    for (let errorNode of errorNodes) {
                        missingFontsNodes.push(errorNode.name);
                    }
                    errorNodes = this.getMultipleFontNodes();
                    for (let errorNode of errorNodes) {
                        multipleFontsNodes.push(errorNode.name);
                    }
                    console.log("%cTypography processed.", _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
                    if (missingFontsNodes.length !== 0) {
                        console.log(`%cThe following layers contain missing fonts: ${missingFontsNodes.join(", ")}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.error);
                        figma.notify(`The following layers contain missing fonts: ${missingFontsNodes.join(", ")}.`, { error: true, timeout: 5000 });
                    }
                    if (multipleFontsNodes.length !== 0) {
                        console.log(`%cThe following layers contain multiple fonts: ${multipleFontsNodes.join(", ")}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.error);
                        figma.notify(`The following layers contain multiple fonts: ${multipleFontsNodes.join(", ")}.`, { error: true, timeout: 5000 });
                    }
                    this.processingCompleted();
                })
            });
            yield new Promise((resolve, reject) => {
                this.processingCompleted = resolve;
                // Set a timeout of 15 mins to reject the operation and close the plugin, in case the plugin hangs.
                setTimeout(reject, 900000);
            });
        });
    }
    resetNodesWithStyles() {
        return __awaiter(this, void 0, void 0, function* () {
            let styleIds = Object.keys(this.nodesWithStyle);
            if (styleIds.length !== 0) {
                console.log(`%cLoading fonts for nodes with styles.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.secondary);
                let loadFonts = [];
                // Load fonts.
                for (let styleId of styleIds) {
                    loadFonts.push(figma.loadFontAsync(this.nodesWithStyle[styleId].font));
                }
                yield Promise.all(loadFonts);
                console.log(`%c${loadFonts.length} fonts loaded.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.secondary);
                // Reset nodes.
                for (let styleId of styleIds) {
                    let collectedNodes = this.nodesWithStyle[styleId].nodes;
                    for (let collectedNode of collectedNodes) {
                        let node = collectedNode.self, reference = collectedNode.reference;
                        if (node.type === "TEXT" && reference.type === "TEXT") {
                            node.textStyleId = styleId;
                            node.textAlignHorizontal = reference.textAlignHorizontal;
                            node.textAlignVertical = reference.textAlignVertical;
                            node.textAutoResize = reference.textAutoResize;
                            node.textTruncation = reference.textTruncation;
                            node.maxLines = reference.maxLines;
                            console.log(`%cText style reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
                        }
                    }
                }
            }
        });
    }
    resetNodesWithoutStyles() {
        return __awaiter(this, void 0, void 0, function* () {
            let withoutStyleFontFullNames = Object.keys(this.nodesWithoutStyle);
            if (withoutStyleFontFullNames.length !== 0) {
                console.log(`%cLoading fonts for nodes without styles.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.secondary);
                let loadFonts = [];
                // Load fonts.
                for (let fontFullName of withoutStyleFontFullNames) {
                    loadFonts.push(figma.loadFontAsync(this.nodesWithoutStyle[fontFullName].font));
                }
                yield Promise.all(loadFonts);
                console.log(`%c${loadFonts.length} fonts loaded.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.secondary);
                // Reset nodes.
                for (let fontFullName of withoutStyleFontFullNames) {
                    let fontName = this.nodesWithoutStyle[fontFullName].font, collectedNodes = this.nodesWithoutStyle[fontFullName].nodes;
                    for (let collectedNode of collectedNodes) {
                        let node = collectedNode.self, reference = collectedNode.reference;
                        if (node.type === "TEXT" && reference.type === "TEXT") {
                            node.fontName = fontName;
                            node.textAlignHorizontal = reference.textAlignHorizontal;
                            node.textAlignVertical = reference.textAlignVertical;
                            node.textAutoResize = reference.textAutoResize;
                            node.textTruncation = reference.textTruncation;
                            node.maxLines = reference.maxLines;
                            node.paragraphIndent = reference.paragraphIndent;
                            node.paragraphSpacing = reference.paragraphSpacing;
                            node.listSpacing = reference.listSpacing;
                            node.hangingPunctuation = reference.hangingPunctuation;
                            node.hangingList = reference.hangingList;
                            node.fontSize = reference.fontSize;
                            node.textCase = reference.textCase;
                            node.textDecoration = reference.textDecoration;
                            node.letterSpacing = reference.letterSpacing;
                            node.lineHeight = reference.lineHeight;
                            node.leadingTrim = reference.leadingTrim;
                            console.log(`%cFont reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_2__.primary);
                        }
                    }
                }
            }
        });
    }
    getMissingFontNodes() {
        return this.nodesWithMissingFonts;
    }
    getMultipleFontNodes() {
        return this.nodesWithMultipleFonts;
    }
    isFontName(object) {
        return "family" in object;
    }
}


/***/ }),

/***/ "./src/custom/modules/components/visibility.ts":
/*!*****************************************************!*\
  !*** ./src/custom/modules/components/visibility.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/reset-library */ "./src/custom/modules/core/reset-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* System */ 

/* Helpers */ 
const toggle = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_0__.OperationModule("visibility", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        visibility: 0
    };
    let visibilityLibrary = new _core_reset_library__WEBPACK_IMPORTED_MODULE_2__.ResetPropertiesLibrary();
    yield visibilityLibrary.addNodesFromSelection();
    yield visibilityLibrary.processEntries((node, reference) => {
        scoreCard.visibility += match(node, reference);
    });
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));
function match(node, reference) {
    var _a, _b;
    let reset = 0;
    // Reset variable.
    if ((_a = reference.boundVariables) === null || _a === void 0 ? void 0 : _a.visible) {
        if (((_b = node.boundVariables) === null || _b === void 0 ? void 0 : _b.visible) === reference.boundVariables.visible) {
            // Do nothing.
        }
        else {
            node.setBoundVariable("visible", reference.boundVariables.visible.id);
            reset = 1;
        }
    }
    // Reset value.
    else if (node.visible !== reference.visible) {
        node.visible = reference.visible;
        reset = 1;
    }
    // Log changes to console.
    if (reset === 1)
        console.log(`%cVisibility reset for ${node.name}.`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
    return reset;
}


/***/ }),

/***/ "./src/custom/modules/core/reset-library.ts":
/*!**************************************************!*\
  !*** ./src/custom/modules/core/reset-library.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPropertiesLibrary: () => (/* binding */ ResetPropertiesLibrary)
/* harmony export */ });
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_console_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/console-theme */ "./src/library/console-theme.ts");
/* harmony import */ var _plugins_figma_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plugins/figma/component */ "./src/plugins/figma/component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Types */ 
/* System */ 
/* Helpers */ 
class ResetPropertiesLibrary {
    constructor() {
        this.entries = [];
        this.completedEntries = 0;
        this.processingCompleted = () => { };
        this.catalogingCompleted = () => { };
    }
    addNodesFromSelection(drillDeeper) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get selected nodes.
            let selectedNodes = figma.currentPage.selection;
            yield this.addNodesFromArray(selectedNodes, drillDeeper);
        });
    }
    addNodesFromArray(nodes, drillDeeper) {
        return __awaiter(this, void 0, void 0, function* () {
            drillDeeper = drillDeeper !== null && drillDeeper !== void 0 ? drillDeeper : true;
            console.log(`%cCataloging layers...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
            figma.notify(`Cataloging layers...`, {
                timeout: 200,
                onDequeue: (reason) => {
                    for (let node of nodes) {
                        if (node.type === "INSTANCE") {
                            let reference = node.mainComponent;
                            if (reference) {
                                this.entries.push({ node: node, reference: reference, topLevel: true });
                                if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(reference) && drillDeeper)
                                    this.catalogAllChildren(node, reference);
                                this.catalogingCompleted();
                            }
                        }
                        else {
                            let instanceAncestry = _plugins_figma_component__WEBPACK_IMPORTED_MODULE_2__.withinInstance(node);
                            if (instanceAncestry.true) {
                                // Get the source component of the parent instance.
                                let instance = figma.currentPage.findOne((n) => (n.id === instanceAncestry.instanceId));
                                if ((instance === null || instance === void 0 ? void 0 : instance.type) === "INSTANCE" && instance.mainComponent) {
                                    // Get the reference layer within the component.
                                    let reference = instance.mainComponent;
                                    for (let childIndex of instanceAncestry.path) {
                                        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(reference)) {
                                            reference = reference.children[childIndex];
                                        }
                                    }
                                    this.entries.push({ node: node, reference: reference, topLevel: false });
                                    if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(reference) && drillDeeper)
                                        this.catalogAllChildren(node, reference);
                                    this.catalogingCompleted();
                                }
                            }
                        }
                    }
                }
            });
            yield new Promise((resolve, reject) => {
                this.catalogingCompleted = resolve;
                // Set a timeout of 5 mins to reject the operation and close the plugin, in case the plugin hangs.
                setTimeout(reject, 300000);
            });
        });
    }
    catalogAllChildren(parentNode, parentReference) {
        let childrenCount = parentNode.children.length;
        for (let i = 0; i < childrenCount; ++i) {
            console.log(`%cStoring ${parentNode.name}...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
            let node = parentNode.children[i], reference = parentReference.children[i];
            this.entries.push({ node: node, reference: reference, topLevel: false });
            if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(reference))
                this.catalogAllChildren(node, reference);
        }
    }
    processEntries(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`%cProcessing ${this.entries.length} layers...`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
            figma.notify(`Processing ${this.entries.length} layers...`, {
                timeout: 200,
                onDequeue: (reason) => {
                    this.processThroughEntries(this.completedEntries, fn);
                }
            });
            yield new Promise((resolve, reject) => {
                this.processingCompleted = resolve;
                // Set a timeout of 15 mins to reject the operation and close the plugin, in case the plugin hangs.
                setTimeout(reject, 900000);
            });
        });
    }
    processThroughEntries(entryIndex, fn) {
        let entry = this.entries[entryIndex];
        if (entry) {
            console.log(`%cProcessing ${entry.node.name}... ${this.completedEntries + 1} / ${this.entries.length}`, _library_console_theme__WEBPACK_IMPORTED_MODULE_1__.primary);
            figma.notify(`Processing ${entry.node.name}... ${this.completedEntries + 1} / ${this.entries.length}`, {
                timeout: 50,
                onDequeue: (reason) => {
                    this.processEachEntry(entry, fn);
                }
            });
        }
        else {
            this.processingCompleted();
        }
    }
    processEachEntry(entry, fn) {
        fn(entry.node, entry.reference, entry.topLevel);
        this.completedEntries += 1;
        this.processThroughEntries(this.completedEntries, fn);
    }
}


/***/ }),

/***/ "./src/custom/modules/custom.ts":
/*!**************************************!*\
  !*** ./src/custom/modules/custom.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   module: () => (/* binding */ module)
/* harmony export */ });
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/reset-library */ "./src/custom/modules/core/reset-library.ts");
/* harmony import */ var _components_padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/padding */ "./src/custom/modules/components/padding.ts");
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/spacing */ "./src/custom/modules/components/spacing.ts");
/* harmony import */ var _components_dimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dimension */ "./src/custom/modules/components/dimension.ts");
/* harmony import */ var _components_fit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fit */ "./src/custom/modules/components/fit.ts");
/* harmony import */ var _components_radius__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/radius */ "./src/custom/modules/components/radius.ts");
/* harmony import */ var _components_visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/visibility */ "./src/custom/modules/components/visibility.ts");
/* harmony import */ var _components_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mode */ "./src/custom/modules/components/mode.ts");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/typography */ "./src/custom/modules/components/typography.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Types */ 
/* System */ 
/* Helpers */ 
/* Modules */ 







const module = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__.OperationModule("custom", true, () => __awaiter(void 0, void 0, void 0, function* () {
    // Show UI.
    figma.showUI(__uiFiles__.customProperties, { width: 250, height: 800, themeColors: true });
    // Listen for UI updates.
    figma.ui.onmessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
        switch (message.command) {
            case "resize":
                figma.ui.resize(message.args.width, message.args.height);
                break;
            case "startResetting":
                yield match(message.args.input);
                break;
        }
    });
}));
function match(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let scoreCard = {
            "Layers processed": 0,
            "Visibility": 0,
            "Fit": 0,
            dimensions: {
                "Width": 0, "Height": 0,
                "Max-width": 0, "Min-width": 0, "Max-height": 0, "Min-height": 0
            },
            padding: {
                "Top": 0, "Bottom": 0, "Left": 0, "Right": 0,
            },
            spacing: {
                "Item spacing": 0, "Counter axis spacing": 0,
            },
            radius: {
                "Top left": 0, "Top right": 0, "Bottom right": 0, "Bottom left": 0,
            },
            "Modes": 0
        };
        // Find out if any property except typography has been selected for a reset.
        let inputCheck = Object.assign({}, input);
        delete inputCheck.typography;
        let userInputForNonTypoProperties = Object.values(inputCheck);
        if (userInputForNonTypoProperties.includes(true)) {
            let library = new _core_reset_library__WEBPACK_IMPORTED_MODULE_2__.ResetPropertiesLibrary();
            yield library.addNodesFromSelection();
            yield library.processEntries((node, reference, topLevel) => {
                if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(reference)) {
                    scoreCard["Layers processed"] += 1;
                    if (topLevel) {
                        if (input.width && input.height) {
                            let dimensionsReset = _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchWidthAndHeight(node, reference);
                            scoreCard.dimensions.Width += dimensionsReset[0];
                            scoreCard.dimensions.Height += dimensionsReset[1];
                        }
                        else if (input.width) {
                            scoreCard.dimensions.Width += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchWidth(node, reference);
                        }
                        else if (input.height) {
                            scoreCard.dimensions.Width += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchHeight(node, reference);
                        }
                        if (input.maxWidth)
                            scoreCard.dimensions["Max-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxWidth(node, reference);
                        if (input.minWidth)
                            scoreCard.dimensions["Min-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinWidth(node, reference);
                        if (input.maxHeight)
                            scoreCard.dimensions["Max-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxHeight(node, reference);
                        if (input.minHeight)
                            scoreCard.dimensions["Min-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinHeight(node, reference);
                        // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
                        if (input.mode)
                            scoreCard["Modes"] += _components_mode__WEBPACK_IMPORTED_MODULE_9__.matchAll(node, reference);
                    }
                    if (input.visibility)
                        scoreCard["Visibility"] += _components_visibility__WEBPACK_IMPORTED_MODULE_8__.match(node, reference);
                    if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(reference)) {
                        if (input.fit)
                            scoreCard["Fit"] += _components_fit__WEBPACK_IMPORTED_MODULE_6__.matchAll(node, reference);
                        if (input.paddingTop)
                            scoreCard.padding["Top"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchTopPadding(node, reference);
                        if (input.paddingBottom)
                            scoreCard.padding["Bottom"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchBottomPadding(node, reference);
                        if (input.paddingLeft)
                            scoreCard.padding["Left"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchLeftPadding(node, reference);
                        if (input.paddingRight)
                            scoreCard.padding["Right"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchRightPadding(node, reference);
                        if (input.itemSpacing)
                            scoreCard.spacing["Item spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_4__.matchItemSpacing(node, reference);
                        if (input.counterAxisSpacing)
                            scoreCard.spacing["Counter axis spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_4__.matchCounterAxisSpacing(node, reference);
                    }
                    if (_components_radius__WEBPACK_IMPORTED_MODULE_7__.canHaveRadii(node) && _components_radius__WEBPACK_IMPORTED_MODULE_7__.canHaveRadii(reference)) {
                        if (input.radiusTopLeft)
                            scoreCard.radius["Top left"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchTopLeftRadius(node, reference);
                        if (input.radiusTopRight)
                            scoreCard.radius["Top right"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchTopRightRadius(node, reference);
                        if (input.radiusBottomRight)
                            scoreCard.radius["Bottom right"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchBottomRightRadius(node, reference);
                        if (input.radiusBottomLeft)
                            scoreCard.radius["Bottom left"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchBottomLeftRadius(node, reference);
                    }
                }
            });
        }
        if (input.typography)
            yield _components_typography__WEBPACK_IMPORTED_MODULE_10__.matchAll(figma.currentPage.selection);
        console.log(scoreCard);
        figma.notify("Process completed.", { timeout: 500 });
    });
}


/***/ }),

/***/ "./src/custom/modules/everything.ts":
/*!******************************************!*\
  !*** ./src/custom/modules/everything.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   module: () => (/* binding */ module)
/* harmony export */ });
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/reset-library */ "./src/custom/modules/core/reset-library.ts");
/* harmony import */ var _components_padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/padding */ "./src/custom/modules/components/padding.ts");
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/spacing */ "./src/custom/modules/components/spacing.ts");
/* harmony import */ var _components_dimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dimension */ "./src/custom/modules/components/dimension.ts");
/* harmony import */ var _components_fit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fit */ "./src/custom/modules/components/fit.ts");
/* harmony import */ var _components_radius__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/radius */ "./src/custom/modules/components/radius.ts");
/* harmony import */ var _components_visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/visibility */ "./src/custom/modules/components/visibility.ts");
/* harmony import */ var _components_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mode */ "./src/custom/modules/components/mode.ts");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/typography */ "./src/custom/modules/components/typography.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Types */ 
/* System */ 
/* Components */ 








const module = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__.OperationModule("everything", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        "Layers processed": 0,
        "Visibility": 0,
        "Fit": 0,
        dimensions: {
            "Width": 0, "Height": 0,
            "Max-width": 0, "Min-width": 0, "Max-height": 0, "Min-height": 0
        },
        padding: {
            "Top": 0, "Bottom": 0, "Left": 0, "Right": 0,
        },
        spacing: {
            "Item spacing": 0, "Counter axis spacing": 0,
        },
        radius: {
            "Top left": 0, "Top right": 0, "Bottom right": 0, "Bottom left": 0,
        },
        "Modes": 0
    };
    let library = new _core_reset_library__WEBPACK_IMPORTED_MODULE_2__.ResetPropertiesLibrary();
    yield library.addNodesFromSelection();
    yield library.processEntries((node, reference, topLevel) => {
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(reference)) {
            scoreCard["Layers processed"] += 1;
            if (topLevel) {
                let dimensionsReset = _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchWidthAndHeight(node, reference);
                scoreCard.dimensions.Width += dimensionsReset[0];
                scoreCard.dimensions.Height += dimensionsReset[1];
                scoreCard.dimensions["Max-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxWidth(node, reference);
                scoreCard.dimensions["Min-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinWidth(node, reference);
                scoreCard.dimensions["Max-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxHeight(node, reference);
                scoreCard.dimensions["Min-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinHeight(node, reference);
                // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
                scoreCard["Modes"] += _components_mode__WEBPACK_IMPORTED_MODULE_9__.matchAll(node, reference);
            }
            scoreCard["Visibility"] += _components_visibility__WEBPACK_IMPORTED_MODULE_8__.match(node, reference);
            if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(reference)) {
                scoreCard["Fit"] += _components_fit__WEBPACK_IMPORTED_MODULE_6__.matchAll(node, reference);
                scoreCard.padding["Top"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchTopPadding(node, reference);
                scoreCard.padding["Bottom"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchBottomPadding(node, reference);
                scoreCard.padding["Left"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchLeftPadding(node, reference);
                scoreCard.padding["Right"] += _components_padding__WEBPACK_IMPORTED_MODULE_3__.matchRightPadding(node, reference);
                scoreCard.spacing["Item spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_4__.matchItemSpacing(node, reference);
                scoreCard.spacing["Counter axis spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_4__.matchCounterAxisSpacing(node, reference);
            }
            if (_components_radius__WEBPACK_IMPORTED_MODULE_7__.canHaveRadii(node) && _components_radius__WEBPACK_IMPORTED_MODULE_7__.canHaveRadii(reference)) {
                scoreCard.radius["Top left"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchTopLeftRadius(node, reference);
                scoreCard.radius["Top right"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchTopRightRadius(node, reference);
                scoreCard.radius["Bottom right"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchBottomRightRadius(node, reference);
                scoreCard.radius["Bottom left"] += _components_radius__WEBPACK_IMPORTED_MODULE_7__.matchBottomLeftRadius(node, reference);
            }
        }
    });
    yield _components_typography__WEBPACK_IMPORTED_MODULE_10__.matchAll(figma.currentPage.selection);
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));


/***/ }),

/***/ "./src/custom/modules/outermost.ts":
/*!*****************************************!*\
  !*** ./src/custom/modules/outermost.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   module: () => (/* binding */ module)
/* harmony export */ });
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* harmony import */ var _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/figma/system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _plugins_figma_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/figma/component */ "./src/plugins/figma/component.ts");
/* harmony import */ var _core_reset_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/reset-library */ "./src/custom/modules/core/reset-library.ts");
/* harmony import */ var _components_padding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/padding */ "./src/custom/modules/components/padding.ts");
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spacing */ "./src/custom/modules/components/spacing.ts");
/* harmony import */ var _components_dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dimension */ "./src/custom/modules/components/dimension.ts");
/* harmony import */ var _components_fit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fit */ "./src/custom/modules/components/fit.ts");
/* harmony import */ var _components_radius__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/radius */ "./src/custom/modules/components/radius.ts");
/* harmony import */ var _components_visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/visibility */ "./src/custom/modules/components/visibility.ts");
/* harmony import */ var _components_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mode */ "./src/custom/modules/components/mode.ts");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/typography */ "./src/custom/modules/components/typography.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Types */ 
/* System */ 
/* Plug-ins */ 
/* Components */ 








const module = new _library_figma_system_modules__WEBPACK_IMPORTED_MODULE_1__.OperationModule("outermost", false, () => __awaiter(void 0, void 0, void 0, function* () {
    let scoreCard = {
        "Layers processed": 0,
        "Visibility": 0,
        "Fit": 0,
        dimensions: {
            "Width": 0, "Height": 0,
            "Max-width": 0, "Min-width": 0, "Max-height": 0, "Min-height": 0
        },
        padding: {
            "Top": 0, "Bottom": 0, "Left": 0, "Right": 0,
        },
        spacing: {
            "Item spacing": 0, "Counter axis spacing": 0,
        },
        radius: {
            "Top left": 0, "Top right": 0, "Bottom right": 0, "Bottom left": 0,
        },
        "Modes": 0
    };
    let library = new _core_reset_library__WEBPACK_IMPORTED_MODULE_3__.ResetPropertiesLibrary();
    yield library.addNodesFromSelection(false);
    yield library.processEntries((node, reference, topLevel) => {
        let nodes = figma.currentPage.selection;
        for (let node of nodes) {
            if (node.type === "INSTANCE") {
                let reference = node.mainComponent;
                if (reference) {
                    let topLevel = (0,_plugins_figma_component__WEBPACK_IMPORTED_MODULE_2__.withinInstance)(node);
                    scoreCard["Layers processed"] += 1;
                    scoreCard["Visibility"] += _components_visibility__WEBPACK_IMPORTED_MODULE_9__.match(node, reference);
                    let dimensionsReset = _components_dimension__WEBPACK_IMPORTED_MODULE_6__.matchWidthAndHeight(node, reference);
                    scoreCard.dimensions["Width"] += dimensionsReset[0];
                    scoreCard.dimensions["Height"] += dimensionsReset[1];
                    scoreCard.dimensions["Max-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_6__.matchMaxWidth(node, reference);
                    scoreCard.dimensions["Min-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_6__.matchMinWidth(node, reference);
                    scoreCard.dimensions["Max-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_6__.matchMaxHeight(node, reference);
                    scoreCard.dimensions["Min-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_6__.matchMinHeight(node, reference);
                    // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
                    scoreCard["Modes"] += _components_mode__WEBPACK_IMPORTED_MODULE_10__.matchAll(node, reference);
                    if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.canAutolayout(reference)) {
                        scoreCard["Fit"] += _components_fit__WEBPACK_IMPORTED_MODULE_7__.matchAll(node, reference);
                        scoreCard.padding["Top"] += _components_padding__WEBPACK_IMPORTED_MODULE_4__.matchTopPadding(node, reference);
                        scoreCard.padding["Bottom"] += _components_padding__WEBPACK_IMPORTED_MODULE_4__.matchBottomPadding(node, reference);
                        scoreCard.padding["Left"] += _components_padding__WEBPACK_IMPORTED_MODULE_4__.matchLeftPadding(node, reference);
                        scoreCard.padding["Right"] += _components_padding__WEBPACK_IMPORTED_MODULE_4__.matchRightPadding(node, reference);
                        scoreCard.spacing["Item spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_5__.matchItemSpacing(node, reference);
                        scoreCard.spacing["Counter axis spacing"] += _components_spacing__WEBPACK_IMPORTED_MODULE_5__.matchCounterAxisSpacing(node, reference);
                    }
                    if (_components_radius__WEBPACK_IMPORTED_MODULE_8__.canHaveRadii(node) && _components_radius__WEBPACK_IMPORTED_MODULE_8__.canHaveRadii(reference)) {
                        scoreCard.radius["Top left"] += _components_radius__WEBPACK_IMPORTED_MODULE_8__.matchTopLeftRadius(node, reference);
                        scoreCard.radius["Top right"] += _components_radius__WEBPACK_IMPORTED_MODULE_8__.matchTopRightRadius(node, reference);
                        scoreCard.radius["Bottom right"] += _components_radius__WEBPACK_IMPORTED_MODULE_8__.matchBottomRightRadius(node, reference);
                        scoreCard.radius["Bottom left"] += _components_radius__WEBPACK_IMPORTED_MODULE_8__.matchBottomLeftRadius(node, reference);
                    }
                }
            }
        }
    });
    yield _components_typography__WEBPACK_IMPORTED_MODULE_11__.matchAll(figma.currentPage.selection);
    console.log(scoreCard);
    figma.notify("Process completed.", { timeout: 500 });
}));


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

/***/ "./src/library/figma/system/modules.ts":
/*!*********************************************!*\
  !*** ./src/library/figma/system/modules.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleLibrary: () => (/* binding */ ModuleLibrary),
/* harmony export */   OperationModule: () => (/* binding */ OperationModule),
/* harmony export */   load: () => (/* binding */ load)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Class for storing quick action parameters for each module.
class OperationModule {
    constructor(command, hasUI, fn) {
        this.command = command;
        this.hasUI = hasUI;
        this.userParameters = {};
        const AsyncFunction = (() => __awaiter(this, void 0, void 0, function* () { })).constructor;
        this.isAsync = fn instanceof AsyncFunction;
        this.fn = fn;
    }
    /*********************************************
    Methods for setting up quick action parameters.
    *********************************************/
    // Set parameters.
    setParameterSuggestion(key, parameterSuggestion) {
        if (this.userParameters[key])
            this.userParameters[key].push(parameterSuggestion);
        else
            this.userParameters[key] = [parameterSuggestion];
    }
    /*********************************************
    Methods for retrieving quick action parameters.
    *********************************************/
    // Get command.
    getCommand() {
        return this.command;
    }
    // Check if parameter exists.
    parameterExists(key, parameter) {
        if (this.userParameters[key].indexOf(parameter) >= 0)
            return true;
        else
            return false;
    }
    // Retrieves a list of suggested parameters.
    getParameterSuggestions(key) {
        return this.userParameters[key] || [];
    }
    run(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInput = parameters || {};
            if (this.isAsync)
                return yield this.fn(userInput);
            else
                return this.fn(userInput);
        });
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
function load(modules) {
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


/***/ }),

/***/ "./src/library/figma/system/typegroups.ts":
/*!************************************************!*\
  !*** ./src/library/figma/system/typegroups.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAutolayout: () => (/* binding */ canAutolayout),
/* harmony export */   canBeFilled: () => (/* binding */ canBeFilled),
/* harmony export */   canBeStroked: () => (/* binding */ canBeStroked),
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
    node.type === "VECTOR" ||
    node.type === "TEXT" ||
    node.type === "BOOLEAN_OPERATION");
const isResizable = (node) => (isFigmaLayer(node));
const isParentable = (node) => (node.type === "FRAME" ||
    node.type === "COMPONENT_SET" ||
    node.type === "COMPONENT" ||
    node.type === "INSTANCE" ||
    node.type === "GROUP" ||
    node.type === "SECTION");
const canAutolayout = (node) => (isFigmaLayer(node) &&
    (node.type !== "GROUP" &&
        node.type !== "SECTION"));
const canBeFilled = (node) => (isFigmaLayer(node) &&
    node.type !== "GROUP");
const canBeStroked = (node) => (isFigmaLayer(node) &&
    (node.type !== "GROUP" &&
        node.type !== "SECTION"));


/***/ }),

/***/ "./src/plugins/figma/component.ts":
/*!****************************************!*\
  !*** ./src/plugins/figma/component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withinInstance: () => (/* binding */ withinInstance)
/* harmony export */ });
/* harmony import */ var _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/figma/system/typegroups */ "./src/library/figma/system/typegroups.ts");
/* Types */ 
// Returns a boolean based on whether node is nested within an instance,
// a string of non-zero length containing the instance id,
// and the path to the reference layer within the component.
function withinInstance(node) {
    let result = false, instanceId = "", path = [], currentTarget = node;
    do {
        let parentId = (currentTarget.parent) ? currentTarget.parent.id : "";
        let parent = figma.currentPage.findOne((n) => (n.id === parentId)) || figma.currentPage;
        if (parent.type !== "PAGE" && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isParentable(parent)) {
            path.push(parent.children.indexOf(currentTarget));
            if (parent.type === "INSTANCE") {
                result = true;
                instanceId = parent.id;
                break;
            }
            else {
                currentTarget = parent;
            }
        }
        else
            break;
    } while (!result);
    path.reverse();
    return { true: result, instanceId: instanceId, path: path };
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
/*!***********************************!*\
  !*** ./src/library/figma/main.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system/modules */ "./src/library/figma/system/modules.ts");
/* harmony import */ var _custom_module_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../custom/module-library */ "./src/custom/module-library.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Modules */ 

// Log to console for debugging.
console.log("%cPlugin has started.", "color: #ccc");
// Load modules.
let pluginModules = _system_modules__WEBPACK_IMPORTED_MODULE_0__.load(_custom_module_library__WEBPACK_IMPORTED_MODULE_1__.library);
// Set suggestions for input parameters.
figma.parameters.on("input", ({ parameters, key, result }) => {
    if (pluginModules) {
        let selectedModule = pluginModules.matchCommandToModule(figma.command);
        if (selectedModule)
            result.setSuggestions(selectedModule.getParameterSuggestions(key));
    }
});
// When plugin is running.
figma.on("run", ({ parameters }) => __awaiter(void 0, void 0, void 0, function* () {
    // Log user input to console.
    if (parameters) {
        console.log(`%cUser input logged:`, "color: #ccc");
        console.log(parameters);
    }
    // No modules loaded.
    if (!pluginModules) {
        figma.notify("No operation modules loaded.", { timeout: 5000, error: true });
        figma.closePlugin();
    }
    // Run module if it is found.
    if (pluginModules) {
        let selectedModule = pluginModules.matchCommandToModule(figma.command);
        if (selectedModule) {
            if (selectedModule.isAsync)
                yield selectedModule.run(parameters);
            else
                selectedModule.run(parameters);
            if (!selectedModule.hasUI)
                figma.closePlugin();
        }
        else {
            figma.notify("Selected operation has no corresponding module loaded! Closing plugin...", { timeout: 5000, error: true });
            figma.closePlugin();
        }
    }
    // If no input has been received.
    else
        figma.closePlugin();
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUEwRDtBQUNKO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBWSxDQUFDLDJEQUFPO0FBQ3hDO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNEJBQTRCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsNEJBQTRCO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlLWxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy9kaW1lbnNpb24udHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy9maXQudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy9tb2RlLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvcGFkZGluZy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jb21wb25lbnRzL3JhZGl1cy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jb21wb25lbnRzL3NwYWNpbmcudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy90eXBvZ3JhcGh5LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvdmlzaWJpbGl0eS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jb3JlL3Jlc2V0LWxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY3VzdG9tLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2V2ZXJ5dGhpbmcudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvb3V0ZXJtb3N0LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvY29uc29sZS10aGVtZS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L2ZpZ21hL3N5c3RlbS9tb2R1bGVzLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHMudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvcGx1Z2lucy9maWdtYS9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L2ZpZ21hL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kdWxlcyAqLyBpbXBvcnQgKiBhcyBwYWRkaW5nIGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9wYWRkaW5nXCI7XG5pbXBvcnQgKiBhcyBzcGFjaW5nIGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9zcGFjaW5nXCI7XG5pbXBvcnQgKiBhcyBkaW1lbnNpb24gZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL2RpbWVuc2lvblwiO1xuaW1wb3J0ICogYXMgcmFkaXVzIGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9yYWRpdXNcIjtcbmltcG9ydCAqIGFzIHZpc2liaWx0eSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvdmlzaWJpbGl0eVwiO1xuaW1wb3J0ICogYXMgbW9kZSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvbW9kZVwiO1xuaW1wb3J0ICogYXMgdHlwb2dyYXBoeSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xuaW1wb3J0ICogYXMgZXZlcnl0aGluZyBmcm9tIFwiLi9tb2R1bGVzL2V2ZXJ5dGhpbmdcIjtcbmltcG9ydCAqIGFzIG91dGVybW9zdCBmcm9tIFwiLi9tb2R1bGVzL291dGVybW9zdFwiO1xuaW1wb3J0ICogYXMgY3VzdG9tIGZyb20gXCIuL21vZHVsZXMvY3VzdG9tXCI7XG5leHBvcnQgY29uc3QgbGlicmFyeSA9IFtcbiAgICAvLyBBZGQgbW9kdWxlcyBoZXJlLlxuICAgIHBhZGRpbmcuYWxsLFxuICAgIHNwYWNpbmcuYWxsLFxuICAgIGRpbWVuc2lvbi5hbGwsXG4gICAgcmFkaXVzLmFsbCxcbiAgICB2aXNpYmlsdHkudG9nZ2xlLCBtb2RlLmFsbCxcbiAgICB0eXBvZ3JhcGh5LmFsbCxcbiAgICBldmVyeXRoaW5nLm1vZHVsZSxcbiAgICBvdXRlcm1vc3QubW9kdWxlLFxuICAgIGN1c3RvbS5tb2R1bGVcbl07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiYWxsRGltZW5zaW9uc1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWF4V2lkdGg6IDAsXG4gICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDAsXG4gICAgICAgIG1pbkhlaWdodDogMFxuICAgIH07XG4gICAgbGV0IGRpbWVuc2lvbkxpYnJhcnkgPSBuZXcgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSgpO1xuICAgIHlpZWxkIGRpbWVuc2lvbkxpYnJhcnkuYWRkTm9kZXNGcm9tU2VsZWN0aW9uKCk7XG4gICAgeWllbGQgZGltZW5zaW9uTGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlLCB0b3BMZXZlbCkgPT4ge1xuICAgICAgICBpZiAodHlwZS5pc0ZpZ21hTGF5ZXIobm9kZSkgJiYgdHlwZS5pc0ZpZ21hTGF5ZXIocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgbGV0IGRpbWVuc2lvbnNSZXNldCA9IG1hdGNoU3RhbmRhcmREaW1lbnNpb25zKFwiYm90aFwiLCBub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLndpZHRoICs9IGRpbWVuc2lvbnNSZXNldFswXTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5oZWlnaHQgKz0gZGltZW5zaW9uc1Jlc2V0WzFdO1xuICAgICAgICAgICAgaWYgKHRvcExldmVsKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLm1heFdpZHRoICs9IG1hdGNoTWF4V2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQubWluV2lkdGggKz0gbWF0Y2hNaW5XaWR0aChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5tYXhIZWlnaHQgKz0gbWF0Y2hNYXhIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQubWluSGVpZ2h0ICs9IG1hdGNoTWluSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFdpZHRoQW5kSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHJldHVybiBtYXRjaFN0YW5kYXJkRGltZW5zaW9ucyhcImJvdGhcIiwgbm9kZSwgcmVmZXJlbmNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFdpZHRoKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHJldHVybiBtYXRjaFN0YW5kYXJkRGltZW5zaW9ucyhcIndpZHRoT25seVwiLCBub2RlLCByZWZlcmVuY2UpWzBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHJldHVybiBtYXRjaFN0YW5kYXJkRGltZW5zaW9ucyhcImhlaWdodE9ubHlcIiwgbm9kZSwgcmVmZXJlbmNlKVsxXTtcbn1cbmZ1bmN0aW9uIG1hdGNoU3RhbmRhcmREaW1lbnNpb25zKGRpbWVuc2lvbiwgbm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgbGV0IHJlc2V0ID0gWzAsIDBdO1xuICAgIGxldCBuZXdXaWR0aCA9IG5vZGUud2lkdGgsIG5ld0hlaWdodCA9IG5vZGUuaGVpZ2h0LCB2YXJXaWR0aCA9IFwiXCIsIHZhckhlaWdodCA9IFwiXCI7XG4gICAgLy8gV2lkdGguXG4gICAgaWYgKGRpbWVuc2lvbiAhPT0gXCJoZWlnaHRPbmx5XCIpIHtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS53aWR0aCkge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iud2lkdGgpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy53aWR0aC5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJXaWR0aCA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy53aWR0aC5pZDtcbiAgICAgICAgICAgICAgICByZXNldFswXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUud2lkdGggIT09IHJlZmVyZW5jZS53aWR0aCkge1xuICAgICAgICAgICAgbmV3V2lkdGggPSByZWZlcmVuY2Uud2lkdGg7XG4gICAgICAgICAgICByZXNldFswXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGVpZ2h0LlxuICAgIGlmIChkaW1lbnNpb24gIT09IFwid2lkdGhPbmx5XCIpIHtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2QgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICgoKF9mID0gKF9lID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmhlaWdodCkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmhlaWdodC5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJIZWlnaHQgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuaGVpZ2h0LmlkO1xuICAgICAgICAgICAgICAgIHJlc2V0WzFdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5oZWlnaHQgIT09IHJlZmVyZW5jZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IHJlZmVyZW5jZS5oZWlnaHQ7XG4gICAgICAgICAgICByZXNldFsxXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzaXplLlxuICAgIGlmIChub2RlLnR5cGUgPT09IFwiU0VDVElPTlwiKVxuICAgICAgICBub2RlLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyhuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcbiAgICBlbHNlIGlmIChub2RlLnR5cGUgIT09IFwiR1JPVVBcIilcbiAgICAgICAgbm9kZS5yZXNpemUobmV3V2lkdGgsIG5ld0hlaWdodCk7XG4gICAgLy8gQXBwbHkgdmFyaWFibGVzLlxuICAgIGlmICh2YXJXaWR0aC5sZW5ndGggIT09IDApXG4gICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIndpZHRoXCIsIHZhcldpZHRoKTtcbiAgICBpZiAodmFySGVpZ2h0Lmxlbmd0aCAhPT0gMClcbiAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiaGVpZ2h0XCIsIHZhckhlaWdodCk7XG4gICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICBpZiAocmVzZXRbMF0gPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY1dpZHRoIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgIGlmIChyZXNldFsxXSA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjSGVpZ2h0IHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgIHJldHVybiByZXNldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE1heFdpZHRoKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWF4V2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1heFdpZHRoKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMubWF4V2lkdGguaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWF4V2lkdGhcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLm1heFdpZHRoLmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUubWF4V2lkdGggIT09IHJlZmVyZW5jZS5tYXhXaWR0aCkge1xuICAgICAgICAgICAgbm9kZS5tYXhXaWR0aCA9IHJlZmVyZW5jZS5tYXhXaWR0aDtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNNYXgtd2lkdGggcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgbWF4LXdpZHRocyBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTWluV2lkdGgobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc2V0ID0gMDtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5taW5XaWR0aCkge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWluV2lkdGgpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5taW5XaWR0aC5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJtaW5XaWR0aFwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMubWluV2lkdGguaWQpO1xuICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5taW5XaWR0aCAhPT0gcmVmZXJlbmNlLm1pbldpZHRoKSB7XG4gICAgICAgICAgICBub2RlLm1pbldpZHRoID0gcmVmZXJlbmNlLm1pbldpZHRoO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY01pbi13aWR0aCByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc2V0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm9kZXMgd2l0aGluIGluc3RhbmNlcyBjYW5ub3QgaGF2ZSB0aGVpciBtaW4td2lkdGhzIGFkanVzdGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNYXhIZWlnaHQobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc2V0ID0gMDtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1heEhlaWdodCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLm1heEhlaWdodC5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJtYXhIZWlnaHRcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLm1heEhlaWdodC5pZCk7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLm1heEhlaWdodCAhPT0gcmVmZXJlbmNlLm1heEhlaWdodCkge1xuICAgICAgICAgICAgbm9kZS5tYXhIZWlnaHQgPSByZWZlcmVuY2UubWF4SGVpZ2h0O1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY01heC1oZWlnaHQgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgbWF4LWhlaWdodCBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTWluSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWluSGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5taW5IZWlnaHQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5taW5IZWlnaHQuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWluSGVpZ2h0XCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5taW5IZWlnaHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5taW5IZWlnaHQgIT09IHJlZmVyZW5jZS5taW5IZWlnaHQpIHtcbiAgICAgICAgICAgIG5vZGUubWluSGVpZ2h0ID0gcmVmZXJlbmNlLm1pbkhlaWdodDtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNNaW4taGVpZ2h0IHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIG1pbi1oZWlnaHQgYWRqdXN0ZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyogU3lzdGVtICovIGltcG9ydCB7IE9wZXJhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS9tb2R1bGVzXCI7XG5pbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG5pbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvY29uc29sZS10aGVtZVwiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgeyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5IH0gZnJvbSBcIi4uL2NvcmUvcmVzZXQtbGlicmFyeVwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJhbGxEaW1lbnNpb25zXCIsIGZhbHNlLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc2NvcmVDYXJkID0ge1xuICAgICAgICBmaXQ6IDBcbiAgICB9O1xuICAgIGxldCBmaXRMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBmaXRMaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIGZpdExpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSwgdG9wTGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKHR5cGUuY2FuQXV0b2xheW91dChub2RlKSAmJiB0eXBlLmNhbkF1dG9sYXlvdXQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgc2NvcmVDYXJkLmZpdCArPSBtYXRjaEFsbChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgbGV0IHJlc2V0ID0gMDtcbiAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICBpZiAobm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsICE9PSByZWZlcmVuY2UubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCkge1xuICAgICAgICBub2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSByZWZlcmVuY2UubGF5b3V0U2l6aW5nSG9yaXpvbnRhbDtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLmxheW91dFNpemluZ1ZlcnRpY2FsICE9PSByZWZlcmVuY2UubGF5b3V0U2l6aW5nVmVydGljYWwpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IHJlZmVyZW5jZS5sYXlvdXRTaXppbmdWZXJ0aWNhbDtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVIb3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBmaXQgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5leHBvcnQgY29uc3QgYWxsID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImFsbE1vZGVzXCIsIGZhbHNlLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc2NvcmVDYXJkID0ge1xuICAgICAgICBtb2RlOiAwXG4gICAgfTtcbiAgICBsZXQgbW9kZUxpYnJhcnkgPSBuZXcgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSgpO1xuICAgIHlpZWxkIG1vZGVMaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIG1vZGVMaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UpID0+IHtcbiAgICAgICAgaWYgKHR5cGUuaXNGaWdtYUxheWVyKG5vZGUpICYmIHR5cGUuaXNGaWdtYUxheWVyKHJlZmVyZW5jZSkpXG4gICAgICAgICAgICBzY29yZUNhcmQubW9kZSArPSBtYXRjaEFsbChub2RlLCByZWZlcmVuY2UpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlQ2FyZCk7XG4gICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xufSkpO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIC8vIFNldHRpbmcgZXhwbGljaXQgdmFyaWFibGUgbW9kZXMgb24gaW5zdGFuY2Ugc3VibGF5ZXJzIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZC5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzZXQgPSAwO1xuICAgICAgICBsZXQgcmVmZXJlbmNlQ29sbGVjdGlvbnNOYW1lcyA9IE9iamVjdC5rZXlzKHJlZmVyZW5jZS5leHBsaWNpdFZhcmlhYmxlTW9kZXMpLCByZWZlcmVuY2VDb2xsZWN0aW9uQ291bnQgPSByZWZlcmVuY2VDb2xsZWN0aW9uc05hbWVzLmxlbmd0aDtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGV4cGxpY2l0bHkgc2V0IHZhcmlhYmxlcyBpbiB0aGUgcmVmZXJlbmNlIG9iamVjdC5cbiAgICAgICAgaWYgKHJlZmVyZW5jZUNvbGxlY3Rpb25Db3VudCAhPT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2VDb2xsZWN0aW9uQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uSWQgPSByZWZlcmVuY2VDb2xsZWN0aW9uc05hbWVzW2ldLCBtb2RlSWQgPSByZWZlcmVuY2UuZXhwbGljaXRWYXJpYWJsZU1vZGVzW2NvbGxlY3Rpb25JZF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXhwbGljaXRWYXJpYWJsZU1vZGVzW2NvbGxlY3Rpb25JZF0gIT09IG1vZGVJZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEV4cGxpY2l0VmFyaWFibGVNb2RlRm9yQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQsIG1vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICAgICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTW9kZXMgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7ZXJyb3J9YCwgY29uc29sZVRoZW1lLmVycm9yKTtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiRXhwbGljaXQgbW9kZXMgbWF5IGhhdmUgYmVlbiBzZXQgb24gc29tZSBsYXllcnMuIEZpZ21hIGRvZXMgbm90IHlldCBzdXBwb3J0IHJlc2V0dGluZyB0aGVzZSBtb2RlcyBmcm9tIHRoZSBwbHVnaW4uXCIpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiYWxsUGFkZGluZ1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgIH07XG4gICAgbGV0IHBhZGRpbmdMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBwYWRkaW5nTGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCBwYWRkaW5nTGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlLmNhbkF1dG9sYXlvdXQobm9kZSkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nVG9wICs9IG1hdGNoVG9wUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdCb3R0b20gKz0gbWF0Y2hCb3R0b21QYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ0xlZnQgKz0gbWF0Y2hMZWZ0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdSaWdodCArPSBtYXRjaFJpZ2h0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hUb3BQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZGRpbmdUb3ApIHtcbiAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFkZGluZ1RvcCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnBhZGRpbmdUb3AuaWQpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJwYWRkaW5nVG9wXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nVG9wLmlkKTtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLnBhZGRpbmdUb3AgIT09IHJlZmVyZW5jZS5wYWRkaW5nVG9wKSB7XG4gICAgICAgIG5vZGUucGFkZGluZ1RvcCA9IHJlZmVyZW5jZS5wYWRkaW5nVG9wO1xuICAgICAgICByZXNldCA9IDE7XG4gICAgfVxuICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICBjb25zb2xlLmxvZyhgJWNUb3AgcGFkZGluZyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hCb3R0b21QYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhZGRpbmdCb3R0b20pIHtcbiAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFkZGluZ0JvdHRvbSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnBhZGRpbmdCb3R0b20uaWQpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJwYWRkaW5nQm90dG9tXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nQm90dG9tLmlkKTtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLnBhZGRpbmdCb3R0b20gIT09IHJlZmVyZW5jZS5wYWRkaW5nQm90dG9tKSB7XG4gICAgICAgIG5vZGUucGFkZGluZ0JvdHRvbSA9IHJlZmVyZW5jZS5wYWRkaW5nQm90dG9tO1xuICAgICAgICByZXNldCA9IDE7XG4gICAgfVxuICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICBjb25zb2xlLmxvZyhgJWNCb3R0b20gcGFkZGluZyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hMZWZ0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWRkaW5nTGVmdCkge1xuICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYWRkaW5nTGVmdCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnBhZGRpbmdMZWZ0LmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ0xlZnRcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnBhZGRpbmdMZWZ0LmlkKTtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLnBhZGRpbmdMZWZ0ICE9PSByZWZlcmVuY2UucGFkZGluZ0xlZnQpIHtcbiAgICAgICAgbm9kZS5wYWRkaW5nTGVmdCA9IHJlZmVyZW5jZS5wYWRkaW5nTGVmdDtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjTGVmdCBwYWRkaW5nIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgIHJldHVybiByZXNldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFJpZ2h0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFkZGluZ1JpZ2h0KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMucGFkZGluZ1JpZ2h0LmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ1JpZ2h0XCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nUmlnaHQuaWQpO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgIGVsc2UgaWYgKG5vZGUucGFkZGluZ1JpZ2h0ICE9PSByZWZlcmVuY2UucGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIG5vZGUucGFkZGluZ1JpZ2h0ID0gcmVmZXJlbmNlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjUmlnaHQgcGFkZGluZyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCBjYW5IYXZlUmFkaWkgPSAobm9kZSkgPT4gKG5vZGUudHlwZSAhPT0gXCJHUk9VUFwiICYmXG4gICAgbm9kZS50eXBlICE9PSBcIlNFQ1RJT05cIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJCT09MRUFOX09QRVJBVElPTlwiICYmXG4gICAgbm9kZS50eXBlICE9PSBcIlNUQVJcIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJFTExJUFNFXCIgJiZcbiAgICBub2RlLnR5cGUgIT09IFwiUE9MWUdPTlwiICYmXG4gICAgbm9kZS50eXBlICE9PSBcIlZFQ1RPUlwiICYmXG4gICAgbm9kZS50eXBlICE9PSBcIlRFWFRcIik7XG5leHBvcnQgY29uc3QgYWxsID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImFsbFJhZGlpXCIsIGZhbHNlLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc2NvcmVDYXJkID0ge1xuICAgICAgICByYWRpdXNUb3BMZWZ0OiAwLFxuICAgICAgICByYWRpdXNUb3BSaWdodDogMCxcbiAgICAgICAgcmFkaXVzQm90dG9tUmlnaHQ6IDAsXG4gICAgICAgIHJhZGl1c0JvdHRvbUxlZnQ6IDBcbiAgICB9O1xuICAgIGxldCByYWRpdXNMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCByYWRpdXNMaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIHJhZGl1c0xpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICBpZiAoY2FuSGF2ZVJhZGlpKG5vZGUpICYmIGNhbkhhdmVSYWRpaShyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzVG9wTGVmdCArPSBtYXRjaFRvcExlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNUb3BSaWdodCArPSBtYXRjaFRvcFJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzQm90dG9tUmlnaHQgKz0gbWF0Y2hCb3R0b21SaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c0JvdHRvbUxlZnQgKz0gbWF0Y2hCb3R0b21MZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFRvcExlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc2V0ID0gMDtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b3BMZWZ0UmFkaXVzKSB7XG4gICAgICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b3BMZWZ0UmFkaXVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMudG9wTGVmdFJhZGl1cy5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJ0b3BMZWZ0UmFkaXVzXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy50b3BMZWZ0UmFkaXVzLmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUudG9wTGVmdFJhZGl1cyAhPT0gcmVmZXJlbmNlLnRvcExlZnRSYWRpdXMpIHtcbiAgICAgICAgICAgIG5vZGUudG9wTGVmdFJhZGl1cyA9IHJlZmVyZW5jZS50b3BMZWZ0UmFkaXVzO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY1RvcCBsZWZ0IHJhZGl1cyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc2V0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm9kZXMgd2l0aGluIGluc3RhbmNlcyBjYW5ub3QgaGF2ZSB0aGVpciByYWRpdXMgYWRqdXN0ZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFRvcFJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9wUmlnaHRSYWRpdXMpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvcFJpZ2h0UmFkaXVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMudG9wUmlnaHRSYWRpdXMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwidG9wUmlnaHRSYWRpdXNcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnRvcFJpZ2h0UmFkaXVzLmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUudG9wUmlnaHRSYWRpdXMgIT09IHJlZmVyZW5jZS50b3BSaWdodFJhZGl1cykge1xuICAgICAgICAgICAgbm9kZS50b3BSaWdodFJhZGl1cyA9IHJlZmVyZW5jZS50b3BSaWdodFJhZGl1cztcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNUb3AgcmlnaHQgcmFkaXVzIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIHJhZGl1cyBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQm90dG9tUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc2V0ID0gMDtcbiAgICAgICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ib3R0b21SaWdodFJhZGl1cykge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYm90dG9tUmlnaHRSYWRpdXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5ib3R0b21SaWdodFJhZGl1cy5pZCkge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJib3R0b21SaWdodFJhZGl1c1wiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuYm90dG9tUmlnaHRSYWRpdXMuaWQpO1xuICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5ib3R0b21SaWdodFJhZGl1cyAhPT0gcmVmZXJlbmNlLmJvdHRvbVJpZ2h0UmFkaXVzKSB7XG4gICAgICAgICAgICBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzID0gcmVmZXJlbmNlLmJvdHRvbVJpZ2h0UmFkaXVzO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0JvdHRvbSByaWdodCByYWRpdXMgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgcmFkaXVzIGFkanVzdGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hCb3R0b21MZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm90dG9tTGVmdFJhZGl1cykge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYm90dG9tTGVmdFJhZGl1cykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmJvdHRvbUxlZnRSYWRpdXMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiYm90dG9tTGVmdFJhZGl1c1wiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuYm90dG9tTGVmdFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLmJvdHRvbUxlZnRSYWRpdXMgIT09IHJlZmVyZW5jZS5ib3R0b21MZWZ0UmFkaXVzKSB7XG4gICAgICAgICAgICBub2RlLmJvdHRvbUxlZnRSYWRpdXMgPSByZWZlcmVuY2UuYm90dG9tTGVmdFJhZGl1cztcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNCb3R0b20gbGVmdCByYWRpdXMgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgcmFkaXVzIGFkanVzdGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiYWxsU3BhY2luZ1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgaXRlbVNwYWNpbmc6IDAsXG4gICAgICAgIGNvdW50ZXJBeGlzU3BhY2luZzogMFxuICAgIH07XG4gICAgbGV0IHNwYWNpbmdMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBzcGFjaW5nTGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCBzcGFjaW5nTGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlLmNhbkF1dG9sYXlvdXQobm9kZSkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5pdGVtU3BhY2luZyArPSBtYXRjaEl0ZW1TcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQuY291bnRlckF4aXNTcGFjaW5nICs9IG1hdGNoQ291bnRlckF4aXNTcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEl0ZW1TcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLml0ZW1TcGFjaW5nKSB7XG4gICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLml0ZW1TcGFjaW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuaXRlbVNwYWNpbmcuaWQpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJpdGVtU3BhY2luZ1wiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuaXRlbVNwYWNpbmcuaWQpO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgIGVsc2UgaWYgKG5vZGUuaXRlbVNwYWNpbmcgIT09IHJlZmVyZW5jZS5pdGVtU3BhY2luZykge1xuICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gcmVmZXJlbmNlLml0ZW1TcGFjaW5nO1xuICAgICAgICByZXNldCA9IDE7XG4gICAgfVxuICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICBjb25zb2xlLmxvZyhgJWNJdGVtIHNwYWNpbmcgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQ291bnRlckF4aXNTcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvdW50ZXJBeGlzU3BhY2luZykge1xuICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb3VudGVyQXhpc1NwYWNpbmcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5jb3VudGVyQXhpc1NwYWNpbmcuaWQpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJjb3VudGVyQXhpc1NwYWNpbmdcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmNvdW50ZXJBeGlzU3BhY2luZy5pZCk7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS5jb3VudGVyQXhpc1NwYWNpbmcgIT09IHJlZmVyZW5jZS5jb3VudGVyQXhpc1NwYWNpbmcpIHtcbiAgICAgICAgbm9kZS5jb3VudGVyQXhpc1NwYWNpbmcgPSByZWZlcmVuY2UuY291bnRlckF4aXNTcGFjaW5nO1xuICAgICAgICByZXNldCA9IDE7XG4gICAgfVxuICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICBjb25zb2xlLmxvZyhgJWNDb3VudGVyIGF4aXMgc3BhY2luZyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0ICogYXMgY29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9wbHVnaW5zL2ZpZ21hL2NvbXBvbmVudFwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJ0eXBvZ3JhcGh5XCIsIGZhbHNlLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBtYXRjaEFsbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xufSkpO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQWxsKG5vZGVzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGxpYnJhcnkgPSBuZXcgUmVzZXRUeXBvZ3JhcGh5TGlicmFyeSgpO1xuICAgICAgICB5aWVsZCBsaWJyYXJ5LmFkZE5vZGVzRnJvbUFycmF5KG5vZGVzLCB0cnVlKTtcbiAgICAgICAgeWllbGQgbGlicmFyeS5wcm9jZXNzRW50cmllcygpO1xuICAgIH0pO1xufVxuZXhwb3J0IGNsYXNzIFJlc2V0VHlwb2dyYXBoeUxpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vZGVzV2l0aG91dFN0eWxlID0ge307XG4gICAgICAgIHRoaXMubm9kZXNXaXRoU3R5bGUgPSB7fTtcbiAgICAgICAgdGhpcy5ub2Rlc1dpdGhNaXNzaW5nRm9udHMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2Rlc1dpdGhNdWx0aXBsZUZvbnRzID0gW107XG4gICAgICAgIHRoaXMuY2F0YWxvZ2luZ0NvbXBsZXRlZCA9ICgpID0+IHsgfTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nQ29tcGxldGVkID0gKCkgPT4geyB9O1xuICAgIH1cbiAgICBhZGROb2Rlc0Zyb21TZWxlY3Rpb24oZHJpbGxEZWVwZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEdldCBzZWxlY3RlZCBub2Rlcy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAgICAgeWllbGQgdGhpcy5hZGROb2Rlc0Zyb21BcnJheShzZWxlY3RlZE5vZGVzLCBkcmlsbERlZXBlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGROb2Rlc0Zyb21BcnJheShub2RlcywgZHJpbGxEZWVwZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGRyaWxsRGVlcGVyID0gZHJpbGxEZWVwZXIgIT09IG51bGwgJiYgZHJpbGxEZWVwZXIgIT09IHZvaWQgMCA/IGRyaWxsRGVlcGVyIDogdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0NhdGFsb2dpbmcgdHlwb2dyYXBoeSBsYXllcnMuLi5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoYENhdGFsb2dpbmcgdHlwb2dyYXBoeSBsYXllcnMuLi5gLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwLFxuICAgICAgICAgICAgICAgIG9uRGVxdWV1ZTogKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGVzIGNhbm5vdCBiZSBpbnN0YW5jZXMsIHNvIGdldCB0ZXh0IG5vZGUgYXMgY2hpbGRyZW4gaWYgYW4gaW5zdGFuY2UgaXMgcmVjZWl2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50UmVmZXJlbmNlID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyaWxsRGVlcGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcGFyZW50UmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5Db3VudCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldLCByZWZlcmVuY2UgPSBwYXJlbnRSZWZlcmVuY2UuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiVEVYVFwiICYmIHJlZmVyZW5jZS50eXBlID09PSBcIlRFWFRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nTm9kZShjaGlsZCwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBub2RlIGluIGlmIGl0IGlzIGEgdGV4dCBsYXllciwgYnV0IG9ubHkgaWYgaXQgaXMgd2l0aGluIGFuIGluc3RhbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlQW5jZXN0cnkgPSBjb21wb25lbnQud2l0aGluSW5zdGFuY2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlQW5jZXN0cnkudHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBjb21wb25lbnQgb2YgdGhlIHBhcmVudCBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgobikgPT4gKG4uaWQgPT09IGluc3RhbmNlQW5jZXN0cnkuaW5zdGFuY2VJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS50eXBlKSA9PT0gXCJJTlNUQU5DRVwiICYmIGluc3RhbmNlLm1haW5Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIGxheWVyIHdpdGhpbiB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IGluc3RhbmNlLm1haW5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4IG9mIGluc3RhbmNlQW5jZXN0cnkucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLmlzUGFyZW50YWJsZShyZWZlcmVuY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2UuY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIiAmJiByZWZlcmVuY2UudHlwZSA9PT0gXCJURVhUXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nTm9kZShub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlnIGRlZXBlciBpZiBub2RlIGlzIGEgcGFyZW50LiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUuaXNQYXJlbnRhYmxlKG5vZGUpICYmIHR5cGUuaXNQYXJlbnRhYmxlKHJlZmVyZW5jZSkgJiYgZHJpbGxEZWVwZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dpbmdDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dpbmdDb21wbGV0ZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIC8vIFNldCBhIHRpbWVvdXQgb2YgNSBtaW5zIHRvIHJlamVjdCB0aGUgb3BlcmF0aW9uIGFuZCBjbG9zZSB0aGUgcGx1Z2luLCBpbiBjYXNlIHRoZSBwbHVnaW4gaGFuZ3MuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWplY3QsIDMwMDAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGFsb2dBbGxDaGlsZHJlbihwYXJlbnROb2RlLCBwYXJlbnRSZWZlcmVuY2UpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0NhdGFsb2dpbmcgJHtwYXJlbnROb2RlLm5hbWV9Li4uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBwYXJlbnROb2RlLmNoaWxkcmVuW2ldLCByZWZlcmVuY2UgPSBwYXJlbnRSZWZlcmVuY2UuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIiAmJiByZWZlcmVuY2UudHlwZSA9PT0gXCJURVhUXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nTm9kZShub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZS5pc1BhcmVudGFibGUobm9kZSkgJiYgdHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSlcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dBbGxDaGlsZHJlbihub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGFsb2dOb2RlKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgICAgICAvLyBJZiBtaXNzaW5nIGZvbnRzIGV4aXN0cywgbG9nIHRoZSBub2RlIHRvIHRoZSBjbGFzcy5cbiAgICAgICAgaWYgKG5vZGUuaGFzTWlzc2luZ0ZvbnQpXG4gICAgICAgICAgICB0aGlzLm5vZGVzV2l0aE1pc3NpbmdGb250cy5wdXNoKHsgbmFtZTogbm9kZS5uYW1lLCBpZDogbm9kZS5pZCB9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlLnR5cGUgPT09IFwiVEVYVFwiICYmIHRoaXMuaXNGb250TmFtZShyZWZlcmVuY2UuZm9udE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcmVmZXJlbmNlIGNvbnRhaW5zIG11bHRpcGxlIGZvbnRzLCBsb2cgdGhlIG5vZGUgdG8gdGhlIGNsYXNzLCBhcyBpdCdkIGJlIGltcG9zc2libGUgdG8ga25vdyBob3cgdG8gc3R5bGUgdGhlIHRleHQuXG4gICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUZvbnRzID0gcmVmZXJlbmNlLmdldFJhbmdlQWxsRm9udE5hbWVzKDAsIHJlZmVyZW5jZS5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUZvbnRzLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXNXaXRoTXVsdGlwbGVGb250cy5wdXNoKHsgbmFtZTogbm9kZS5uYW1lLCBpZDogbm9kZS5pZCB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvbnRGdWxsTmFtZSA9IFtyZWZlcmVuY2UuZm9udE5hbWUuZmFtaWx5LCByZWZlcmVuY2UuZm9udE5hbWUuc3R5bGVdLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIGxpbmtlZCB0byBhIHRleHQgc3R5bGUsIGxvZyBpdCBpbnRvIG5vZGVzV2l0aFN0eWxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZmVyZW5jZS50ZXh0U3R5bGVJZCA9PT0gXCJzdHJpbmdcIiAmJiByZWZlcmVuY2UudGV4dFN0eWxlSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0U3R5bGVJZCAhPT0gcmVmZXJlbmNlLnRleHRTdHlsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGVudHJ5IGlmIG5vbmUgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ub2Rlc1dpdGhTdHlsZVtyZWZlcmVuY2UudGV4dFN0eWxlSWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzV2l0aFN0eWxlW3JlZmVyZW5jZS50ZXh0U3R5bGVJZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiByZWZlcmVuY2UuZm9udE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlczogW3sgc2VsZjogbm9kZSwgcmVmZXJlbmNlOiByZWZlcmVuY2UgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpbiB0aGUgbm9kZSBpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlc1dpdGhTdHlsZVtyZWZlcmVuY2UudGV4dFN0eWxlSWRdLm5vZGVzLnB1c2goeyBzZWxmOiBub2RlLCByZWZlcmVuY2U6IHJlZmVyZW5jZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSBhZGQgaXQgdG8gbm9kZXNXaXRob3V0U3R5bGUuXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuZm9udE5hbWUgIT09IHJlZmVyZW5jZS5mb250TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGVudHJ5IGlmIG5vbmUgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGVzV2l0aG91dFN0eWxlW2ZvbnRGdWxsTmFtZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlc1dpdGhvdXRTdHlsZVtmb250RnVsbE5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiByZWZlcmVuY2UuZm9udE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbeyBzZWxmOiBub2RlLCByZWZlcmVuY2U6IHJlZmVyZW5jZSB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpbiB0aGUgbm9kZSBpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXNXaXRob3V0U3R5bGVbZm9udEZ1bGxOYW1lXS5ub2Rlcy5wdXNoKHsgc2VsZjogbm9kZSwgcmVmZXJlbmNlOiByZWZlcmVuY2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0VudHJpZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNQcm9jZXNzaW5nIHR5cG9ncmFwaHkgbGF5ZXJzLi4uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBQcm9jZXNzaW5nIHR5cG9ncmFwaHkgbGF5ZXJzLi4uYCwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvbkRlcXVldWU6IChyZWFzb24pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgbm9kZXMgd2l0aCBzdHlsZXMuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVzZXROb2Rlc1dpdGhTdHlsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgbm9kZXMgd2l0aG91dCBzdHlsZXMuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVzZXROb2Rlc1dpdGhvdXRTdHlsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9ncyBub2RlcyB3aXRoIGVycm9ycy5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pc3NpbmdGb250c05vZGVzID0gW10sIG11bHRpcGxlRm9udHNOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JOb2RlcyA9IHRoaXMuZ2V0TWlzc2luZ0ZvbnROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBlcnJvck5vZGUgb2YgZXJyb3JOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0ZvbnRzTm9kZXMucHVzaChlcnJvck5vZGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JOb2RlcyA9IHRoaXMuZ2V0TXVsdGlwbGVGb250Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZXJyb3JOb2RlIG9mIGVycm9yTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlRm9udHNOb2Rlcy5wdXNoKGVycm9yTm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjVHlwb2dyYXBoeSBwcm9jZXNzZWQuXCIsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdGb250c05vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjVGhlIGZvbGxvd2luZyBsYXllcnMgY29udGFpbiBtaXNzaW5nIGZvbnRzOiAke21pc3NpbmdGb250c05vZGVzLmpvaW4oXCIsIFwiKX0uYCwgY29uc29sZVRoZW1lLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgVGhlIGZvbGxvd2luZyBsYXllcnMgY29udGFpbiBtaXNzaW5nIGZvbnRzOiAke21pc3NpbmdGb250c05vZGVzLmpvaW4oXCIsIFwiKX0uYCwgeyBlcnJvcjogdHJ1ZSwgdGltZW91dDogNTAwMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGVGb250c05vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjVGhlIGZvbGxvd2luZyBsYXllcnMgY29udGFpbiBtdWx0aXBsZSBmb250czogJHttdWx0aXBsZUZvbnRzTm9kZXMuam9pbihcIiwgXCIpfS5gLCBjb25zb2xlVGhlbWUuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBUaGUgZm9sbG93aW5nIGxheWVycyBjb250YWluIG11bHRpcGxlIGZvbnRzOiAke211bHRpcGxlRm9udHNOb2Rlcy5qb2luKFwiLCBcIil9LmAsIHsgZXJyb3I6IHRydWUsIHRpbWVvdXQ6IDUwMDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ0NvbXBsZXRlZCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGEgdGltZW91dCBvZiAxNSBtaW5zIHRvIHJlamVjdCB0aGUgb3BlcmF0aW9uIGFuZCBjbG9zZSB0aGUgcGx1Z2luLCBpbiBjYXNlIHRoZSBwbHVnaW4gaGFuZ3MuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWplY3QsIDkwMDAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0Tm9kZXNXaXRoU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWRzID0gT2JqZWN0LmtleXModGhpcy5ub2Rlc1dpdGhTdHlsZSk7XG4gICAgICAgICAgICBpZiAoc3R5bGVJZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTG9hZGluZyBmb250cyBmb3Igbm9kZXMgd2l0aCBzdHlsZXMuYCwgY29uc29sZVRoZW1lLnNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvYWRGb250cyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExvYWQgZm9udHMuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3R5bGVJZCBvZiBzdHlsZUlkcykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkRm9udHMucHVzaChmaWdtYS5sb2FkRm9udEFzeW5jKHRoaXMubm9kZXNXaXRoU3R5bGVbc3R5bGVJZF0uZm9udCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChsb2FkRm9udHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7bG9hZEZvbnRzLmxlbmd0aH0gZm9udHMgbG9hZGVkLmAsIGNvbnNvbGVUaGVtZS5zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG5vZGVzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN0eWxlSWQgb2Ygc3R5bGVJZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxlY3RlZE5vZGVzID0gdGhpcy5ub2Rlc1dpdGhTdHlsZVtzdHlsZUlkXS5ub2RlcztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sbGVjdGVkTm9kZSBvZiBjb2xsZWN0ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjb2xsZWN0ZWROb2RlLnNlbGYsIHJlZmVyZW5jZSA9IGNvbGxlY3RlZE5vZGUucmVmZXJlbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgcmVmZXJlbmNlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0U3R5bGVJZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gcmVmZXJlbmNlLnRleHRBbGlnbkhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbCA9IHJlZmVyZW5jZS50ZXh0QWxpZ25WZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRBdXRvUmVzaXplID0gcmVmZXJlbmNlLnRleHRBdXRvUmVzaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dFRydW5jYXRpb24gPSByZWZlcmVuY2UudGV4dFRydW5jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5tYXhMaW5lcyA9IHJlZmVyZW5jZS5tYXhMaW5lcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNUZXh0IHN0eWxlIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXROb2Rlc1dpdGhvdXRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgd2l0aG91dFN0eWxlRm9udEZ1bGxOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMubm9kZXNXaXRob3V0U3R5bGUpO1xuICAgICAgICAgICAgaWYgKHdpdGhvdXRTdHlsZUZvbnRGdWxsTmFtZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTG9hZGluZyBmb250cyBmb3Igbm9kZXMgd2l0aG91dCBzdHlsZXMuYCwgY29uc29sZVRoZW1lLnNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvYWRGb250cyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExvYWQgZm9udHMuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZm9udEZ1bGxOYW1lIG9mIHdpdGhvdXRTdHlsZUZvbnRGdWxsTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEZvbnRzLnB1c2goZmlnbWEubG9hZEZvbnRBc3luYyh0aGlzLm5vZGVzV2l0aG91dFN0eWxlW2ZvbnRGdWxsTmFtZV0uZm9udCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChsb2FkRm9udHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7bG9hZEZvbnRzLmxlbmd0aH0gZm9udHMgbG9hZGVkLmAsIGNvbnNvbGVUaGVtZS5zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG5vZGVzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZvbnRGdWxsTmFtZSBvZiB3aXRob3V0U3R5bGVGb250RnVsbE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb250TmFtZSA9IHRoaXMubm9kZXNXaXRob3V0U3R5bGVbZm9udEZ1bGxOYW1lXS5mb250LCBjb2xsZWN0ZWROb2RlcyA9IHRoaXMubm9kZXNXaXRob3V0U3R5bGVbZm9udEZ1bGxOYW1lXS5ub2RlcztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sbGVjdGVkTm9kZSBvZiBjb2xsZWN0ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjb2xsZWN0ZWROb2RlLnNlbGYsIHJlZmVyZW5jZSA9IGNvbGxlY3RlZE5vZGUucmVmZXJlbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgcmVmZXJlbmNlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5mb250TmFtZSA9IGZvbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCA9IHJlZmVyZW5jZS50ZXh0QWxpZ25Ib3Jpem9udGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dEFsaWduVmVydGljYWwgPSByZWZlcmVuY2UudGV4dEFsaWduVmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IHJlZmVyZW5jZS50ZXh0QXV0b1Jlc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRUcnVuY2F0aW9uID0gcmVmZXJlbmNlLnRleHRUcnVuY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWF4TGluZXMgPSByZWZlcmVuY2UubWF4TGluZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJhZ3JhcGhJbmRlbnQgPSByZWZlcmVuY2UucGFyYWdyYXBoSW5kZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyYWdyYXBoU3BhY2luZyA9IHJlZmVyZW5jZS5wYXJhZ3JhcGhTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGlzdFNwYWNpbmcgPSByZWZlcmVuY2UubGlzdFNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5oYW5naW5nUHVuY3R1YXRpb24gPSByZWZlcmVuY2UuaGFuZ2luZ1B1bmN0dWF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaGFuZ2luZ0xpc3QgPSByZWZlcmVuY2UuaGFuZ2luZ0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5mb250U2l6ZSA9IHJlZmVyZW5jZS5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDYXNlID0gcmVmZXJlbmNlLnRleHRDYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dERlY29yYXRpb24gPSByZWZlcmVuY2UudGV4dERlY29yYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXR0ZXJTcGFjaW5nID0gcmVmZXJlbmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5saW5lSGVpZ2h0ID0gcmVmZXJlbmNlLmxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWFkaW5nVHJpbSA9IHJlZmVyZW5jZS5sZWFkaW5nVHJpbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNGb250IHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TWlzc2luZ0ZvbnROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNXaXRoTWlzc2luZ0ZvbnRzO1xuICAgIH1cbiAgICBnZXRNdWx0aXBsZUZvbnROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNXaXRoTXVsdGlwbGVGb250cztcbiAgICB9XG4gICAgaXNGb250TmFtZShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIFwiZmFtaWx5XCIgaW4gb2JqZWN0O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyogU3lzdGVtICovIGltcG9ydCB7IE9wZXJhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS9tb2R1bGVzXCI7XG5pbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvY29uc29sZS10aGVtZVwiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgeyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5IH0gZnJvbSBcIi4uL2NvcmUvcmVzZXQtbGlicmFyeVwiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZSA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJ2aXNpYmlsaXR5XCIsIGZhbHNlLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc2NvcmVDYXJkID0ge1xuICAgICAgICB2aXNpYmlsaXR5OiAwXG4gICAgfTtcbiAgICBsZXQgdmlzaWJpbGl0eUxpYnJhcnkgPSBuZXcgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSgpO1xuICAgIHlpZWxkIHZpc2liaWxpdHlMaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIHZpc2liaWxpdHlMaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UpID0+IHtcbiAgICAgICAgc2NvcmVDYXJkLnZpc2liaWxpdHkgKz0gbWF0Y2gobm9kZSwgcmVmZXJlbmNlKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZpc2libGUpIHtcbiAgICAgICAgaWYgKCgoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmlzaWJsZSkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwidmlzaWJsZVwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMudmlzaWJsZS5pZCk7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS52aXNpYmxlICE9PSByZWZlcmVuY2UudmlzaWJsZSkge1xuICAgICAgICBub2RlLnZpc2libGUgPSByZWZlcmVuY2UudmlzaWJsZTtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjVmlzaWJpbGl0eSByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFR5cGVzICovIGltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvY29uc29sZS10aGVtZVwiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgKiBhcyBjb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL3BsdWdpbnMvZmlnbWEvY29tcG9uZW50XCI7XG5leHBvcnQgY2xhc3MgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZEVudHJpZXMgPSAwO1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmdDb21wbGV0ZWQgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMuY2F0YWxvZ2luZ0NvbXBsZXRlZCA9ICgpID0+IHsgfTtcbiAgICB9XG4gICAgYWRkTm9kZXNGcm9tU2VsZWN0aW9uKGRyaWxsRGVlcGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgbm9kZXMuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWROb2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuYWRkTm9kZXNGcm9tQXJyYXkoc2VsZWN0ZWROb2RlcywgZHJpbGxEZWVwZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkTm9kZXNGcm9tQXJyYXkobm9kZXMsIGRyaWxsRGVlcGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBkcmlsbERlZXBlciA9IGRyaWxsRGVlcGVyICE9PSBudWxsICYmIGRyaWxsRGVlcGVyICE9PSB2b2lkIDAgPyBkcmlsbERlZXBlciA6IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNDYXRhbG9naW5nIGxheWVycy4uLmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgQ2F0YWxvZ2luZyBsYXllcnMuLi5gLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwLFxuICAgICAgICAgICAgICAgIG9uRGVxdWV1ZTogKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goeyBub2RlOiBub2RlLCByZWZlcmVuY2U6IHJlZmVyZW5jZSwgdG9wTGV2ZWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLmlzUGFyZW50YWJsZShub2RlKSAmJiB0eXBlLmlzUGFyZW50YWJsZShyZWZlcmVuY2UpICYmIGRyaWxsRGVlcGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9naW5nQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlQW5jZXN0cnkgPSBjb21wb25lbnQud2l0aGluSW5zdGFuY2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlQW5jZXN0cnkudHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHNvdXJjZSBjb21wb25lbnQgb2YgdGhlIHBhcmVudCBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgobikgPT4gKG4uaWQgPT09IGluc3RhbmNlQW5jZXN0cnkuaW5zdGFuY2VJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS50eXBlKSA9PT0gXCJJTlNUQU5DRVwiICYmIGluc3RhbmNlLm1haW5Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIGxheWVyIHdpdGhpbiB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IGluc3RhbmNlLm1haW5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4IG9mIGluc3RhbmNlQW5jZXN0cnkucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLmlzUGFyZW50YWJsZShyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZS5jaGlsZHJlbltjaGlsZEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMucHVzaCh7IG5vZGU6IG5vZGUsIHJlZmVyZW5jZTogcmVmZXJlbmNlLCB0b3BMZXZlbDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5pc1BhcmVudGFibGUobm9kZSkgJiYgdHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSAmJiBkcmlsbERlZXBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dBbGxDaGlsZHJlbihub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9naW5nQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dpbmdDb21wbGV0ZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIC8vIFNldCBhIHRpbWVvdXQgb2YgNSBtaW5zIHRvIHJlamVjdCB0aGUgb3BlcmF0aW9uIGFuZCBjbG9zZSB0aGUgcGx1Z2luLCBpbiBjYXNlIHRoZSBwbHVnaW4gaGFuZ3MuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWplY3QsIDMwMDAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGFsb2dBbGxDaGlsZHJlbihwYXJlbnROb2RlLCBwYXJlbnRSZWZlcmVuY2UpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY1N0b3JpbmcgJHtwYXJlbnROb2RlLm5hbWV9Li4uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBwYXJlbnROb2RlLmNoaWxkcmVuW2ldLCByZWZlcmVuY2UgPSBwYXJlbnRSZWZlcmVuY2UuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMucHVzaCh7IG5vZGU6IG5vZGUsIHJlZmVyZW5jZTogcmVmZXJlbmNlLCB0b3BMZXZlbDogZmFsc2UgfSk7XG4gICAgICAgICAgICBpZiAodHlwZS5pc1BhcmVudGFibGUobm9kZSkgJiYgdHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSlcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGFsb2dBbGxDaGlsZHJlbihub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NFbnRyaWVzKGZuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNQcm9jZXNzaW5nICR7dGhpcy5lbnRyaWVzLmxlbmd0aH0gbGF5ZXJzLi4uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBQcm9jZXNzaW5nICR7dGhpcy5lbnRyaWVzLmxlbmd0aH0gbGF5ZXJzLi4uYCwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMCxcbiAgICAgICAgICAgICAgICBvbkRlcXVldWU6IChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVGhyb3VnaEVudHJpZXModGhpcy5jb21wbGV0ZWRFbnRyaWVzLCBmbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nQ29tcGxldGVkID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSB0aW1lb3V0IG9mIDE1IG1pbnMgdG8gcmVqZWN0IHRoZSBvcGVyYXRpb24gYW5kIGNsb3NlIHRoZSBwbHVnaW4sIGluIGNhc2UgdGhlIHBsdWdpbiBoYW5ncy5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlamVjdCwgOTAwMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1Rocm91Z2hFbnRyaWVzKGVudHJ5SW5kZXgsIGZuKSB7XG4gICAgICAgIGxldCBlbnRyeSA9IHRoaXMuZW50cmllc1tlbnRyeUluZGV4XTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNQcm9jZXNzaW5nICR7ZW50cnkubm9kZS5uYW1lfS4uLiAke3RoaXMuY29tcGxldGVkRW50cmllcyArIDF9IC8gJHt0aGlzLmVudHJpZXMubGVuZ3RofWAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgUHJvY2Vzc2luZyAke2VudHJ5Lm5vZGUubmFtZX0uLi4gJHt0aGlzLmNvbXBsZXRlZEVudHJpZXMgKyAxfSAvICR7dGhpcy5lbnRyaWVzLmxlbmd0aH1gLCB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAsXG4gICAgICAgICAgICAgICAgb25EZXF1ZXVlOiAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0VhY2hFbnRyeShlbnRyeSwgZm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0VhY2hFbnRyeShlbnRyeSwgZm4pIHtcbiAgICAgICAgZm4oZW50cnkubm9kZSwgZW50cnkucmVmZXJlbmNlLCBlbnRyeS50b3BMZXZlbCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkRW50cmllcyArPSAxO1xuICAgICAgICB0aGlzLnByb2Nlc3NUaHJvdWdoRW50cmllcyh0aGlzLmNvbXBsZXRlZEVudHJpZXMsIGZuKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFR5cGVzICovIGltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgeyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5IH0gZnJvbSBcIi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG4vKiBNb2R1bGVzICovIGltcG9ydCAqIGFzIHBhZGRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9wYWRkaW5nXCI7XG5pbXBvcnQgKiBhcyBzcGFjaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvc3BhY2luZ1wiO1xuaW1wb3J0ICogYXMgZGltZW5zaW9ucyBmcm9tIFwiLi9jb21wb25lbnRzL2RpbWVuc2lvblwiO1xuaW1wb3J0ICogYXMgZml0IGZyb20gXCIuL2NvbXBvbmVudHMvZml0XCI7XG5pbXBvcnQgKiBhcyByYWRpdXMgZnJvbSBcIi4vY29tcG9uZW50cy9yYWRpdXNcIjtcbmltcG9ydCAqIGFzIHZpc2liaWx0eSBmcm9tIFwiLi9jb21wb25lbnRzL3Zpc2liaWxpdHlcIjtcbmltcG9ydCAqIGFzIG1vZGUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RlXCI7XG5pbXBvcnQgKiBhcyB0eXBvZ3JhcGh5IGZyb20gXCIuL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xuZXhwb3J0IGNvbnN0IG1vZHVsZSA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJjdXN0b21cIiwgdHJ1ZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gU2hvdyBVSS5cbiAgICBmaWdtYS5zaG93VUkoX191aUZpbGVzX18uY3VzdG9tUHJvcGVydGllcywgeyB3aWR0aDogMjUwLCBoZWlnaHQ6IDgwMCwgdGhlbWVDb2xvcnM6IHRydWUgfSk7XG4gICAgLy8gTGlzdGVuIGZvciBVSSB1cGRhdGVzLlxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyZXNpemVcIjpcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUobWVzc2FnZS5hcmdzLndpZHRoLCBtZXNzYWdlLmFyZ3MuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFydFJlc2V0dGluZ1wiOlxuICAgICAgICAgICAgICAgIHlpZWxkIG1hdGNoKG1lc3NhZ2UuYXJncy5pbnB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKTtcbmZ1bmN0aW9uIG1hdGNoKGlucHV0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgICAgIFwiTGF5ZXJzIHByb2Nlc3NlZFwiOiAwLFxuICAgICAgICAgICAgXCJWaXNpYmlsaXR5XCI6IDAsXG4gICAgICAgICAgICBcIkZpdFwiOiAwLFxuICAgICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIFwiV2lkdGhcIjogMCwgXCJIZWlnaHRcIjogMCxcbiAgICAgICAgICAgICAgICBcIk1heC13aWR0aFwiOiAwLCBcIk1pbi13aWR0aFwiOiAwLCBcIk1heC1oZWlnaHRcIjogMCwgXCJNaW4taGVpZ2h0XCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgXCJUb3BcIjogMCwgXCJCb3R0b21cIjogMCwgXCJMZWZ0XCI6IDAsIFwiUmlnaHRcIjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgXCJJdGVtIHNwYWNpbmdcIjogMCwgXCJDb3VudGVyIGF4aXMgc3BhY2luZ1wiOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgICAgIFwiVG9wIGxlZnRcIjogMCwgXCJUb3AgcmlnaHRcIjogMCwgXCJCb3R0b20gcmlnaHRcIjogMCwgXCJCb3R0b20gbGVmdFwiOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiTW9kZXNcIjogMFxuICAgICAgICB9O1xuICAgICAgICAvLyBGaW5kIG91dCBpZiBhbnkgcHJvcGVydHkgZXhjZXB0IHR5cG9ncmFwaHkgaGFzIGJlZW4gc2VsZWN0ZWQgZm9yIGEgcmVzZXQuXG4gICAgICAgIGxldCBpbnB1dENoZWNrID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuICAgICAgICBkZWxldGUgaW5wdXRDaGVjay50eXBvZ3JhcGh5O1xuICAgICAgICBsZXQgdXNlcklucHV0Rm9yTm9uVHlwb1Byb3BlcnRpZXMgPSBPYmplY3QudmFsdWVzKGlucHV0Q2hlY2spO1xuICAgICAgICBpZiAodXNlcklucHV0Rm9yTm9uVHlwb1Byb3BlcnRpZXMuaW5jbHVkZXModHJ1ZSkpIHtcbiAgICAgICAgICAgIGxldCBsaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICAgICAgICAgIHlpZWxkIGxpYnJhcnkuYWRkTm9kZXNGcm9tU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB5aWVsZCBsaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UsIHRvcExldmVsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUuaXNGaWdtYUxheWVyKG5vZGUpICYmIHR5cGUuaXNGaWdtYUxheWVyKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiTGF5ZXJzIHByb2Nlc3NlZFwiXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9wTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC53aWR0aCAmJiBpbnB1dC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGltZW5zaW9uc1Jlc2V0ID0gZGltZW5zaW9ucy5tYXRjaFdpZHRoQW5kSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnMuV2lkdGggKz0gZGltZW5zaW9uc1Jlc2V0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zLkhlaWdodCArPSBkaW1lbnNpb25zUmVzZXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnB1dC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zLldpZHRoICs9IGRpbWVuc2lvbnMubWF0Y2hXaWR0aChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnMuV2lkdGggKz0gZGltZW5zaW9ucy5tYXRjaEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1heFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWF4LXdpZHRoXCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNYXhXaWR0aChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1pbldpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWluLXdpZHRoXCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNaW5XaWR0aChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1heEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC1oZWlnaHRcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1heEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1pbkhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1pbi1oZWlnaHRcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1pbkhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyBleHBsaWNpdCB2YXJpYWJsZSBtb2RlcyBvbiBpbnN0YW5jZSBzdWJsYXllcnMgaXMgY3VycmVudGx5IHVuc3VwcG9ydGVkIGluIHRoZSBGaWdtYSBBUEkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQubW9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmRbXCJNb2Rlc1wiXSArPSBtb2RlLm1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnZpc2liaWxpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmRbXCJWaXNpYmlsaXR5XCJdICs9IHZpc2liaWx0eS5tYXRjaChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5jYW5BdXRvbGF5b3V0KG5vZGUpICYmIHR5cGUuY2FuQXV0b2xheW91dChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZFtcIkZpdFwiXSArPSBmaXQubWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5wYWRkaW5nVG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiVG9wXCJdICs9IHBhZGRpbmcubWF0Y2hUb3BQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQucGFkZGluZ0JvdHRvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIkJvdHRvbVwiXSArPSBwYWRkaW5nLm1hdGNoQm90dG9tUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnBhZGRpbmdMZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiTGVmdFwiXSArPSBwYWRkaW5nLm1hdGNoTGVmdFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5wYWRkaW5nUmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJSaWdodFwiXSArPSBwYWRkaW5nLm1hdGNoUmlnaHRQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaXRlbVNwYWNpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnNwYWNpbmdbXCJJdGVtIHNwYWNpbmdcIl0gKz0gc3BhY2luZy5tYXRjaEl0ZW1TcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuY291bnRlckF4aXNTcGFjaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5zcGFjaW5nW1wiQ291bnRlciBheGlzIHNwYWNpbmdcIl0gKz0gc3BhY2luZy5tYXRjaENvdW50ZXJBeGlzU3BhY2luZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYWRpdXMuY2FuSGF2ZVJhZGlpKG5vZGUpICYmIHJhZGl1cy5jYW5IYXZlUmFkaWkocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnJhZGl1c1RvcExlZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIlRvcCBsZWZ0XCJdICs9IHJhZGl1cy5tYXRjaFRvcExlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5yYWRpdXNUb3BSaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiVG9wIHJpZ2h0XCJdICs9IHJhZGl1cy5tYXRjaFRvcFJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQucmFkaXVzQm90dG9tUmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIkJvdHRvbSByaWdodFwiXSArPSByYWRpdXMubWF0Y2hCb3R0b21SaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnJhZGl1c0JvdHRvbUxlZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIkJvdHRvbSBsZWZ0XCJdICs9IHJhZGl1cy5tYXRjaEJvdHRvbUxlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dC50eXBvZ3JhcGh5KVxuICAgICAgICAgICAgeWllbGQgdHlwb2dyYXBoeS5tYXRjaEFsbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFR5cGVzICovIGltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuLyogQ29tcG9uZW50cyAqLyBpbXBvcnQgeyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5IH0gZnJvbSBcIi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5pbXBvcnQgKiBhcyBwYWRkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvcGFkZGluZ1wiO1xuaW1wb3J0ICogYXMgc3BhY2luZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwYWNpbmdcIjtcbmltcG9ydCAqIGFzIGRpbWVuc2lvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9kaW1lbnNpb25cIjtcbmltcG9ydCAqIGFzIGZpdCBmcm9tIFwiLi9jb21wb25lbnRzL2ZpdFwiO1xuaW1wb3J0ICogYXMgcmFkaXVzIGZyb20gXCIuL2NvbXBvbmVudHMvcmFkaXVzXCI7XG5pbXBvcnQgKiBhcyB2aXNpYmlsdHkgZnJvbSBcIi4vY29tcG9uZW50cy92aXNpYmlsaXR5XCI7XG5pbXBvcnQgKiBhcyBtb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kZVwiO1xuaW1wb3J0ICogYXMgdHlwb2dyYXBoeSBmcm9tIFwiLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcbmV4cG9ydCBjb25zdCBtb2R1bGUgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiZXZlcnl0aGluZ1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgXCJMYXllcnMgcHJvY2Vzc2VkXCI6IDAsXG4gICAgICAgIFwiVmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICBcIkZpdFwiOiAwLFxuICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBcIldpZHRoXCI6IDAsIFwiSGVpZ2h0XCI6IDAsXG4gICAgICAgICAgICBcIk1heC13aWR0aFwiOiAwLCBcIk1pbi13aWR0aFwiOiAwLCBcIk1heC1oZWlnaHRcIjogMCwgXCJNaW4taGVpZ2h0XCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgXCJUb3BcIjogMCwgXCJCb3R0b21cIjogMCwgXCJMZWZ0XCI6IDAsIFwiUmlnaHRcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgXCJJdGVtIHNwYWNpbmdcIjogMCwgXCJDb3VudGVyIGF4aXMgc3BhY2luZ1wiOiAwLFxuICAgICAgICB9LFxuICAgICAgICByYWRpdXM6IHtcbiAgICAgICAgICAgIFwiVG9wIGxlZnRcIjogMCwgXCJUb3AgcmlnaHRcIjogMCwgXCJCb3R0b20gcmlnaHRcIjogMCwgXCJCb3R0b20gbGVmdFwiOiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIk1vZGVzXCI6IDBcbiAgICB9O1xuICAgIGxldCBsaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBsaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIGxpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSwgdG9wTGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKHR5cGUuaXNGaWdtYUxheWVyKG5vZGUpICYmIHR5cGUuaXNGaWdtYUxheWVyKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHNjb3JlQ2FyZFtcIkxheWVycyBwcm9jZXNzZWRcIl0gKz0gMTtcbiAgICAgICAgICAgIGlmICh0b3BMZXZlbCkge1xuICAgICAgICAgICAgICAgIGxldCBkaW1lbnNpb25zUmVzZXQgPSBkaW1lbnNpb25zLm1hdGNoV2lkdGhBbmRIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9ucy5XaWR0aCArPSBkaW1lbnNpb25zUmVzZXRbMF07XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnMuSGVpZ2h0ICs9IGRpbWVuc2lvbnNSZXNldFsxXTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWF4V2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1pbi13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWluV2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC1oZWlnaHRcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1heEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWluLWhlaWdodFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWluSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgLy8gU2V0dGluZyBleHBsaWNpdCB2YXJpYWJsZSBtb2RlcyBvbiBpbnN0YW5jZSBzdWJsYXllcnMgaXMgY3VycmVudGx5IHVuc3VwcG9ydGVkIGluIHRoZSBGaWdtYSBBUEkuXG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiTW9kZXNcIl0gKz0gbW9kZS5tYXRjaEFsbChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcmVDYXJkW1wiVmlzaWJpbGl0eVwiXSArPSB2aXNpYmlsdHkubWF0Y2gobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIGlmICh0eXBlLmNhbkF1dG9sYXlvdXQobm9kZSkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmRbXCJGaXRcIl0gKz0gZml0Lm1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJUb3BcIl0gKz0gcGFkZGluZy5tYXRjaFRvcFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIkJvdHRvbVwiXSArPSBwYWRkaW5nLm1hdGNoQm90dG9tUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiTGVmdFwiXSArPSBwYWRkaW5nLm1hdGNoTGVmdFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIlJpZ2h0XCJdICs9IHBhZGRpbmcubWF0Y2hSaWdodFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuc3BhY2luZ1tcIkl0ZW0gc3BhY2luZ1wiXSArPSBzcGFjaW5nLm1hdGNoSXRlbVNwYWNpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuc3BhY2luZ1tcIkNvdW50ZXIgYXhpcyBzcGFjaW5nXCJdICs9IHNwYWNpbmcubWF0Y2hDb3VudGVyQXhpc1NwYWNpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYWRpdXMuY2FuSGF2ZVJhZGlpKG5vZGUpICYmIHJhZGl1cy5jYW5IYXZlUmFkaWkocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJUb3AgbGVmdFwiXSArPSByYWRpdXMubWF0Y2hUb3BMZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIlRvcCByaWdodFwiXSArPSByYWRpdXMubWF0Y2hUb3BSaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJCb3R0b20gcmlnaHRcIl0gKz0gcmFkaXVzLm1hdGNoQm90dG9tUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiQm90dG9tIGxlZnRcIl0gKz0gcmFkaXVzLm1hdGNoQm90dG9tTGVmdFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgeWllbGQgdHlwb2dyYXBoeS5tYXRjaEFsbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlQ2FyZCk7XG4gICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xufSkpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBUeXBlcyAqLyBpbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbi8qIFBsdWctaW5zICovIGltcG9ydCB7IHdpdGhpbkluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvZmlnbWEvY29tcG9uZW50XCI7XG4vKiBDb21wb25lbnRzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmltcG9ydCAqIGFzIHBhZGRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9wYWRkaW5nXCI7XG5pbXBvcnQgKiBhcyBzcGFjaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvc3BhY2luZ1wiO1xuaW1wb3J0ICogYXMgZGltZW5zaW9ucyBmcm9tIFwiLi9jb21wb25lbnRzL2RpbWVuc2lvblwiO1xuaW1wb3J0ICogYXMgZml0IGZyb20gXCIuL2NvbXBvbmVudHMvZml0XCI7XG5pbXBvcnQgKiBhcyByYWRpdXMgZnJvbSBcIi4vY29tcG9uZW50cy9yYWRpdXNcIjtcbmltcG9ydCAqIGFzIHZpc2liaWx0eSBmcm9tIFwiLi9jb21wb25lbnRzL3Zpc2liaWxpdHlcIjtcbmltcG9ydCAqIGFzIG1vZGUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RlXCI7XG5pbXBvcnQgKiBhcyB0eXBvZ3JhcGh5IGZyb20gXCIuL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xuZXhwb3J0IGNvbnN0IG1vZHVsZSA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJvdXRlcm1vc3RcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIFwiTGF5ZXJzIHByb2Nlc3NlZFwiOiAwLFxuICAgICAgICBcIlZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgXCJGaXRcIjogMCxcbiAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgXCJXaWR0aFwiOiAwLCBcIkhlaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJNYXgtd2lkdGhcIjogMCwgXCJNaW4td2lkdGhcIjogMCwgXCJNYXgtaGVpZ2h0XCI6IDAsIFwiTWluLWhlaWdodFwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIFwiVG9wXCI6IDAsIFwiQm90dG9tXCI6IDAsIFwiTGVmdFwiOiAwLCBcIlJpZ2h0XCI6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIFwiSXRlbSBzcGFjaW5nXCI6IDAsIFwiQ291bnRlciBheGlzIHNwYWNpbmdcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBcIlRvcCBsZWZ0XCI6IDAsIFwiVG9wIHJpZ2h0XCI6IDAsIFwiQm90dG9tIHJpZ2h0XCI6IDAsIFwiQm90dG9tIGxlZnRcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb2Rlc1wiOiAwXG4gICAgfTtcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgbGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oZmFsc2UpO1xuICAgIHlpZWxkIGxpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSwgdG9wTGV2ZWwpID0+IHtcbiAgICAgICAgbGV0IG5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIGlmIChyZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsID0gd2l0aGluSW5zdGFuY2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZFtcIkxheWVycyBwcm9jZXNzZWRcIl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiVmlzaWJpbGl0eVwiXSArPSB2aXNpYmlsdHkubWF0Y2gobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpbWVuc2lvbnNSZXNldCA9IGRpbWVuc2lvbnMubWF0Y2hXaWR0aEFuZEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIldpZHRoXCJdICs9IGRpbWVuc2lvbnNSZXNldFswXTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJIZWlnaHRcIl0gKz0gZGltZW5zaW9uc1Jlc2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWF4V2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNaW4td2lkdGhcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1pbldpZHRoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWF4LWhlaWdodFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWF4SGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWluLWhlaWdodFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWluSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgZXhwbGljaXQgdmFyaWFibGUgbW9kZXMgb24gaW5zdGFuY2Ugc3VibGF5ZXJzIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZCBpbiB0aGUgRmlnbWEgQVBJLlxuICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmRbXCJNb2Rlc1wiXSArPSBtb2RlLm1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLmNhbkF1dG9sYXlvdXQobm9kZSkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZFtcIkZpdFwiXSArPSBmaXQubWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiVG9wXCJdICs9IHBhZGRpbmcubWF0Y2hUb3BQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIkJvdHRvbVwiXSArPSBwYWRkaW5nLm1hdGNoQm90dG9tUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJMZWZ0XCJdICs9IHBhZGRpbmcubWF0Y2hMZWZ0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJSaWdodFwiXSArPSBwYWRkaW5nLm1hdGNoUmlnaHRQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuc3BhY2luZ1tcIkl0ZW0gc3BhY2luZ1wiXSArPSBzcGFjaW5nLm1hdGNoSXRlbVNwYWNpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5zcGFjaW5nW1wiQ291bnRlciBheGlzIHNwYWNpbmdcIl0gKz0gc3BhY2luZy5tYXRjaENvdW50ZXJBeGlzU3BhY2luZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYWRpdXMuY2FuSGF2ZVJhZGlpKG5vZGUpICYmIHJhZGl1cy5jYW5IYXZlUmFkaWkocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIlRvcCBsZWZ0XCJdICs9IHJhZGl1cy5tYXRjaFRvcExlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJUb3AgcmlnaHRcIl0gKz0gcmFkaXVzLm1hdGNoVG9wUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJCb3R0b20gcmlnaHRcIl0gKz0gcmFkaXVzLm1hdGNoQm90dG9tUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJCb3R0b20gbGVmdFwiXSArPSByYWRpdXMubWF0Y2hCb3R0b21MZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB5aWVsZCB0eXBvZ3JhcGh5Lm1hdGNoQWxsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG4iLCJleHBvcnQgY29uc3QgcHJpbWFyeSA9IFwiY29sb3I6ICM5NzQ3RkY7XCI7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5ID0gXCJjb2xvcjogI0MxOTFGRjtcIjtcbmV4cG9ydCBjb25zdCBlcnJvciA9IFwiY29sb3I6ICNmMzA7XCI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIENsYXNzIGZvciBzdG9yaW5nIHF1aWNrIGFjdGlvbiBwYXJhbWV0ZXJzIGZvciBlYWNoIG1vZHVsZS5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25Nb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbW1hbmQsIGhhc1VJLCBmbikge1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICB0aGlzLmhhc1VJID0gaGFzVUk7XG4gICAgICAgIHRoaXMudXNlclBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgY29uc3QgQXN5bmNGdW5jdGlvbiA9ICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pKS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdGhpcy5pc0FzeW5jID0gZm4gaW5zdGFuY2VvZiBBc3luY0Z1bmN0aW9uO1xuICAgICAgICB0aGlzLmZuID0gZm47XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBNZXRob2RzIGZvciBzZXR0aW5nIHVwIHF1aWNrIGFjdGlvbiBwYXJhbWV0ZXJzLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvLyBTZXQgcGFyYW1ldGVycy5cbiAgICBzZXRQYXJhbWV0ZXJTdWdnZXN0aW9uKGtleSwgcGFyYW1ldGVyU3VnZ2VzdGlvbikge1xuICAgICAgICBpZiAodGhpcy51c2VyUGFyYW1ldGVyc1trZXldKVxuICAgICAgICAgICAgdGhpcy51c2VyUGFyYW1ldGVyc1trZXldLnB1c2gocGFyYW1ldGVyU3VnZ2VzdGlvbik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudXNlclBhcmFtZXRlcnNba2V5XSA9IFtwYXJhbWV0ZXJTdWdnZXN0aW9uXTtcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIE1ldGhvZHMgZm9yIHJldHJpZXZpbmcgcXVpY2sgYWN0aW9uIHBhcmFtZXRlcnMuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIEdldCBjb21tYW5kLlxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHBhcmFtZXRlciBleGlzdHMuXG4gICAgcGFyYW1ldGVyRXhpc3RzKGtleSwgcGFyYW1ldGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJQYXJhbWV0ZXJzW2tleV0uaW5kZXhPZihwYXJhbWV0ZXIpID49IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZXRyaWV2ZXMgYSBsaXN0IG9mIHN1Z2dlc3RlZCBwYXJhbWV0ZXJzLlxuICAgIGdldFBhcmFtZXRlclN1Z2dlc3Rpb25zKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyUGFyYW1ldGVyc1trZXldIHx8IFtdO1xuICAgIH1cbiAgICBydW4ocGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dCA9IHBhcmFtZXRlcnMgfHwge307XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FzeW5jKVxuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCB0aGlzLmZuKHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm4odXNlcklucHV0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1vZHVsZUxpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGxvYWRNb2R1bGUobW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobW9kdWxlLmdldENvbW1hbmQoKSwgbW9kdWxlKTtcbiAgICB9XG4gICAgbWF0Y2hDb21tYW5kVG9Nb2R1bGUoY29tbWFuZCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KGNvbW1hbmQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNb2R1bGUpXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRNb2R1bGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbi8vIExvYWQgbW9kdWxlIGRhdGEgZm9yIGRpc3BsYXlpbmcgaW4gdGhlIHF1aWNrIGFjdGlvbiB0YXNrYmFyLlxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQobW9kdWxlcykge1xuICAgIGxldCBsaWJyYXJ5ID0gbmV3IE1vZHVsZUxpYnJhcnk7XG4gICAgaWYgKG1vZHVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgbGlicmFyeS5sb2FkTW9kdWxlKG1vZHVsZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNNb2R1bGUgbG9hZGVkOiAke21vZHVsZS5nZXRDb21tYW5kKCl9YCwgXCJjb2xvcjogI2NjY1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlicmFyeTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpc0ZpZ21hTGF5ZXIgPSAobm9kZSkgPT4gKG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkNPTVBPTkVOVF9TRVRcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDT01QT05FTlRcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkdST1VQXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiU0VDVElPTlwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiU1RBUlwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlZFQ1RPUlwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlRFWFRcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJCT09MRUFOX09QRVJBVElPTlwiKTtcbmV4cG9ydCBjb25zdCBpc1Jlc2l6YWJsZSA9IChub2RlKSA9PiAoaXNGaWdtYUxheWVyKG5vZGUpKTtcbmV4cG9ydCBjb25zdCBpc1BhcmVudGFibGUgPSAobm9kZSkgPT4gKG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkNPTVBPTkVOVF9TRVRcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDT01QT05FTlRcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIkdST1VQXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiU0VDVElPTlwiKTtcbmV4cG9ydCBjb25zdCBjYW5BdXRvbGF5b3V0ID0gKG5vZGUpID0+IChpc0ZpZ21hTGF5ZXIobm9kZSkgJiZcbiAgICAobm9kZS50eXBlICE9PSBcIkdST1VQXCIgJiZcbiAgICAgICAgbm9kZS50eXBlICE9PSBcIlNFQ1RJT05cIikpO1xuZXhwb3J0IGNvbnN0IGNhbkJlRmlsbGVkID0gKG5vZGUpID0+IChpc0ZpZ21hTGF5ZXIobm9kZSkgJiZcbiAgICBub2RlLnR5cGUgIT09IFwiR1JPVVBcIik7XG5leHBvcnQgY29uc3QgY2FuQmVTdHJva2VkID0gKG5vZGUpID0+IChpc0ZpZ21hTGF5ZXIobm9kZSkgJiZcbiAgICAobm9kZS50eXBlICE9PSBcIkdST1VQXCIgJiZcbiAgICAgICAgbm9kZS50eXBlICE9PSBcIlNFQ1RJT05cIikpO1xuIiwiLyogVHlwZXMgKi8gaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuLy8gUmV0dXJucyBhIGJvb2xlYW4gYmFzZWQgb24gd2hldGhlciBub2RlIGlzIG5lc3RlZCB3aXRoaW4gYW4gaW5zdGFuY2UsXG4vLyBhIHN0cmluZyBvZiBub24temVybyBsZW5ndGggY29udGFpbmluZyB0aGUgaW5zdGFuY2UgaWQsXG4vLyBhbmQgdGhlIHBhdGggdG8gdGhlIHJlZmVyZW5jZSBsYXllciB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5JbnN0YW5jZShub2RlKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlLCBpbnN0YW5jZUlkID0gXCJcIiwgcGF0aCA9IFtdLCBjdXJyZW50VGFyZ2V0ID0gbm9kZTtcbiAgICBkbyB7XG4gICAgICAgIGxldCBwYXJlbnRJZCA9IChjdXJyZW50VGFyZ2V0LnBhcmVudCkgPyBjdXJyZW50VGFyZ2V0LnBhcmVudC5pZCA6IFwiXCI7XG4gICAgICAgIGxldCBwYXJlbnQgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kT25lKChuKSA9PiAobi5pZCA9PT0gcGFyZW50SWQpKSB8fCBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgaWYgKHBhcmVudC50eXBlICE9PSBcIlBBR0VcIiAmJiB0eXBlLmlzUGFyZW50YWJsZShwYXJlbnQpKSB7XG4gICAgICAgICAgICBwYXRoLnB1c2gocGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY3VycmVudFRhcmdldCkpO1xuICAgICAgICAgICAgaWYgKHBhcmVudC50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlSWQgPSBwYXJlbnQuaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH0gd2hpbGUgKCFyZXN1bHQpO1xuICAgIHBhdGgucmV2ZXJzZSgpO1xuICAgIHJldHVybiB7IHRydWU6IHJlc3VsdCwgaW5zdGFuY2VJZDogaW5zdGFuY2VJZCwgcGF0aDogcGF0aCB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIE1vZHVsZXMgKi8gaW1wb3J0ICogYXMgbW9kdWxlcyBmcm9tIFwiLi9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCIuLi8uLi9jdXN0b20vbW9kdWxlLWxpYnJhcnlcIjtcbi8vIExvZyB0byBjb25zb2xlIGZvciBkZWJ1Z2dpbmcuXG5jb25zb2xlLmxvZyhcIiVjUGx1Z2luIGhhcyBzdGFydGVkLlwiLCBcImNvbG9yOiAjY2NjXCIpO1xuLy8gTG9hZCBtb2R1bGVzLlxubGV0IHBsdWdpbk1vZHVsZXMgPSBtb2R1bGVzLmxvYWQobGlicmFyeSk7XG4vLyBTZXQgc3VnZ2VzdGlvbnMgZm9yIGlucHV0IHBhcmFtZXRlcnMuXG5maWdtYS5wYXJhbWV0ZXJzLm9uKFwiaW5wdXRcIiwgKHsgcGFyYW1ldGVycywga2V5LCByZXN1bHQgfSkgPT4ge1xuICAgIGlmIChwbHVnaW5Nb2R1bGVzKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZE1vZHVsZSA9IHBsdWdpbk1vZHVsZXMubWF0Y2hDb21tYW5kVG9Nb2R1bGUoZmlnbWEuY29tbWFuZCk7XG4gICAgICAgIGlmIChzZWxlY3RlZE1vZHVsZSlcbiAgICAgICAgICAgIHJlc3VsdC5zZXRTdWdnZXN0aW9ucyhzZWxlY3RlZE1vZHVsZS5nZXRQYXJhbWV0ZXJTdWdnZXN0aW9ucyhrZXkpKTtcbiAgICB9XG59KTtcbi8vIFdoZW4gcGx1Z2luIGlzIHJ1bm5pbmcuXG5maWdtYS5vbihcInJ1blwiLCAoeyBwYXJhbWV0ZXJzIH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIExvZyB1c2VyIGlucHV0IHRvIGNvbnNvbGUuXG4gICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjVXNlciBpbnB1dCBsb2dnZWQ6YCwgXCJjb2xvcjogI2NjY1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1ldGVycyk7XG4gICAgfVxuICAgIC8vIE5vIG1vZHVsZXMgbG9hZGVkLlxuICAgIGlmICghcGx1Z2luTW9kdWxlcykge1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJObyBvcGVyYXRpb24gbW9kdWxlcyBsb2FkZWQuXCIsIHsgdGltZW91dDogNTAwMCwgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIC8vIFJ1biBtb2R1bGUgaWYgaXQgaXMgZm91bmQuXG4gICAgaWYgKHBsdWdpbk1vZHVsZXMpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTW9kdWxlID0gcGx1Z2luTW9kdWxlcy5tYXRjaENvbW1hbmRUb01vZHVsZShmaWdtYS5jb21tYW5kKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkTW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRNb2R1bGUuaXNBc3luYylcbiAgICAgICAgICAgICAgICB5aWVsZCBzZWxlY3RlZE1vZHVsZS5ydW4ocGFyYW1ldGVycyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNb2R1bGUucnVuKHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZE1vZHVsZS5oYXNVSSlcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0ZWQgb3BlcmF0aW9uIGhhcyBubyBjb3JyZXNwb25kaW5nIG1vZHVsZSBsb2FkZWQhIENsb3NpbmcgcGx1Z2luLi4uXCIsIHsgdGltZW91dDogNTAwMCwgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIGlucHV0IGhhcyBiZWVuIHJlY2VpdmVkLlxuICAgIGVsc2VcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==