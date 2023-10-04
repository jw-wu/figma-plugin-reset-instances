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
    let library = new _core_reset_library__WEBPACK_IMPORTED_MODULE_2__.ResetPropertiesLibrary();
    yield library.addNodesFromSelection(false);
    yield library.processEntries((node, reference, topLevel) => {
        scoreCard["Layers processed"] += 1;
        scoreCard["Visibility"] += _components_visibility__WEBPACK_IMPORTED_MODULE_8__.match(node, reference);
        if (_library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(node) && _library_figma_system_typegroups__WEBPACK_IMPORTED_MODULE_0__.isFigmaLayer(reference)) {
            let dimensionsReset = _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchWidthAndHeight(node, reference);
            scoreCard.dimensions["Width"] += dimensionsReset[0];
            scoreCard.dimensions["Height"] += dimensionsReset[1];
            scoreCard.dimensions["Max-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxWidth(node, reference);
            scoreCard.dimensions["Min-width"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinWidth(node, reference);
            scoreCard.dimensions["Max-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMaxHeight(node, reference);
            scoreCard.dimensions["Min-height"] += _components_dimension__WEBPACK_IMPORTED_MODULE_5__.matchMinHeight(node, reference);
            // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
            scoreCard["Modes"] += _components_mode__WEBPACK_IMPORTED_MODULE_9__.matchAll(node, reference);
        }
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
    });
    yield _components_typography__WEBPACK_IMPORTED_MODULE_10__.matchAll(figma.currentPage.selection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBMEQ7QUFDSjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVksQ0FBQywyREFBTztBQUN4QztBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDRCQUE0QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHLDRCQUE0QjtBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZS1saWJyYXJ5LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvZGltZW5zaW9uLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvZml0LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvbW9kZS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jb21wb25lbnRzL3BhZGRpbmcudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy9yYWRpdXMudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29tcG9uZW50cy9zcGFjaW5nLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2NvbXBvbmVudHMvdHlwb2dyYXBoeS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9jb21wb25lbnRzL3Zpc2liaWxpdHkudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvY3VzdG9tL21vZHVsZXMvY29yZS9yZXNldC1saWJyYXJ5LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL2N1c3RvbS50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9jdXN0b20vbW9kdWxlcy9ldmVyeXRoaW5nLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL2N1c3RvbS9tb2R1bGVzL291dGVybW9zdC50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L2NvbnNvbGUtdGhlbWUudHMiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlcy50cyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS8uL3NyYy9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzLnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlLy4vc3JjL3BsdWdpbnMvZmlnbWEvY29tcG9uZW50LnRzIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9SZXNldC1pbnN0YW5jZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Jlc2V0LWluc3RhbmNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzZXQtaW5zdGFuY2UvLi9zcmMvbGlicmFyeS9maWdtYS9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIE1vZHVsZXMgKi8gaW1wb3J0ICogYXMgcGFkZGluZyBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvcGFkZGluZ1wiO1xuaW1wb3J0ICogYXMgc3BhY2luZyBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvc3BhY2luZ1wiO1xuaW1wb3J0ICogYXMgZGltZW5zaW9uIGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9kaW1lbnNpb25cIjtcbmltcG9ydCAqIGFzIHJhZGl1cyBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvcmFkaXVzXCI7XG5pbXBvcnQgKiBhcyB2aXNpYmlsdHkgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL3Zpc2liaWxpdHlcIjtcbmltcG9ydCAqIGFzIG1vZGUgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL21vZGVcIjtcbmltcG9ydCAqIGFzIHR5cG9ncmFwaHkgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcbmltcG9ydCAqIGFzIGV2ZXJ5dGhpbmcgZnJvbSBcIi4vbW9kdWxlcy9ldmVyeXRoaW5nXCI7XG5pbXBvcnQgKiBhcyBvdXRlcm1vc3QgZnJvbSBcIi4vbW9kdWxlcy9vdXRlcm1vc3RcIjtcbmltcG9ydCAqIGFzIGN1c3RvbSBmcm9tIFwiLi9tb2R1bGVzL2N1c3RvbVwiO1xuZXhwb3J0IGNvbnN0IGxpYnJhcnkgPSBbXG4gICAgLy8gQWRkIG1vZHVsZXMgaGVyZS5cbiAgICBwYWRkaW5nLmFsbCxcbiAgICBzcGFjaW5nLmFsbCxcbiAgICBkaW1lbnNpb24uYWxsLFxuICAgIHJhZGl1cy5hbGwsXG4gICAgdmlzaWJpbHR5LnRvZ2dsZSwgbW9kZS5hbGwsXG4gICAgdHlwb2dyYXBoeS5hbGwsXG4gICAgZXZlcnl0aGluZy5tb2R1bGUsXG4gICAgb3V0ZXJtb3N0Lm1vZHVsZSxcbiAgICBjdXN0b20ubW9kdWxlXG5dO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5leHBvcnQgY29uc3QgYWxsID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImFsbERpbWVuc2lvbnNcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1heFdpZHRoOiAwLFxuICAgICAgICBtaW5XaWR0aDogMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDBcbiAgICB9O1xuICAgIGxldCBkaW1lbnNpb25MaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBkaW1lbnNpb25MaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgIHlpZWxkIGRpbWVuc2lvbkxpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSwgdG9wTGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKHR5cGUuaXNGaWdtYUxheWVyKG5vZGUpICYmIHR5cGUuaXNGaWdtYUxheWVyKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIGxldCBkaW1lbnNpb25zUmVzZXQgPSBtYXRjaFN0YW5kYXJkRGltZW5zaW9ucyhcImJvdGhcIiwgbm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC53aWR0aCArPSBkaW1lbnNpb25zUmVzZXRbMF07XG4gICAgICAgICAgICBzY29yZUNhcmQuaGVpZ2h0ICs9IGRpbWVuc2lvbnNSZXNldFsxXTtcbiAgICAgICAgICAgIGlmICh0b3BMZXZlbCkge1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5tYXhXaWR0aCArPSBtYXRjaE1heFdpZHRoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLm1pbldpZHRoICs9IG1hdGNoTWluV2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQubWF4SGVpZ2h0ICs9IG1hdGNoTWF4SGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLm1pbkhlaWdodCArPSBtYXRjaE1pbkhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hXaWR0aEFuZEhlaWdodChub2RlLCByZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gbWF0Y2hTdGFuZGFyZERpbWVuc2lvbnMoXCJib3RoXCIsIG5vZGUsIHJlZmVyZW5jZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hXaWR0aChub2RlLCByZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gbWF0Y2hTdGFuZGFyZERpbWVuc2lvbnMoXCJ3aWR0aE9ubHlcIiwgbm9kZSwgcmVmZXJlbmNlKVswXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEhlaWdodChub2RlLCByZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gbWF0Y2hTdGFuZGFyZERpbWVuc2lvbnMoXCJoZWlnaHRPbmx5XCIsIG5vZGUsIHJlZmVyZW5jZSlbMV07XG59XG5mdW5jdGlvbiBtYXRjaFN0YW5kYXJkRGltZW5zaW9ucyhkaW1lbnNpb24sIG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgIGxldCByZXNldCA9IFswLCAwXTtcbiAgICBsZXQgbmV3V2lkdGggPSBub2RlLndpZHRoLCBuZXdIZWlnaHQgPSBub2RlLmhlaWdodCwgdmFyV2lkdGggPSBcIlwiLCB2YXJIZWlnaHQgPSBcIlwiO1xuICAgIC8vIFdpZHRoLlxuICAgIGlmIChkaW1lbnNpb24gIT09IFwiaGVpZ2h0T25seVwiKSB7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eud2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLndpZHRoKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMud2lkdGguaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyV2lkdGggPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMud2lkdGguaWQ7XG4gICAgICAgICAgICAgICAgcmVzZXRbMF0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLndpZHRoICE9PSByZWZlcmVuY2Uud2lkdGgpIHtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gcmVmZXJlbmNlLndpZHRoO1xuICAgICAgICAgICAgcmVzZXRbMF0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEhlaWdodC5cbiAgICBpZiAoZGltZW5zaW9uICE9PSBcIndpZHRoT25seVwiKSB7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9kID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoKChfZiA9IChfZSA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5oZWlnaHQpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5oZWlnaHQuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFySGVpZ2h0ID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmhlaWdodC5pZDtcbiAgICAgICAgICAgICAgICByZXNldFsxXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUuaGVpZ2h0ICE9PSByZWZlcmVuY2UuaGVpZ2h0KSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSByZWZlcmVuY2UuaGVpZ2h0O1xuICAgICAgICAgICAgcmVzZXRbMV0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2l6ZS5cbiAgICBpZiAobm9kZS50eXBlID09PSBcIlNFQ1RJT05cIilcbiAgICAgICAgbm9kZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMobmV3V2lkdGgsIG5ld0hlaWdodCk7XG4gICAgZWxzZSBpZiAobm9kZS50eXBlICE9PSBcIkdST1VQXCIpXG4gICAgICAgIG5vZGUucmVzaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuICAgIC8vIEFwcGx5IHZhcmlhYmxlcy5cbiAgICBpZiAodmFyV2lkdGgubGVuZ3RoICE9PSAwKVxuICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUoXCJ3aWR0aFwiLCB2YXJXaWR0aCk7XG4gICAgaWYgKHZhckhlaWdodC5sZW5ndGggIT09IDApXG4gICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcImhlaWdodFwiLCB2YXJIZWlnaHQpO1xuICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgaWYgKHJlc2V0WzBdID09PSAxKVxuICAgICAgICBjb25zb2xlLmxvZyhgJWNXaWR0aCByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICBpZiAocmVzZXRbMV0gPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY0hlaWdodCByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNYXhXaWR0aChub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzZXQgPSAwO1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICAgICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1heFdpZHRoKSB7XG4gICAgICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tYXhXaWR0aCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLm1heFdpZHRoLmlkKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIm1heFdpZHRoXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5tYXhXaWR0aC5pZCk7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLm1heFdpZHRoICE9PSByZWZlcmVuY2UubWF4V2lkdGgpIHtcbiAgICAgICAgICAgIG5vZGUubWF4V2lkdGggPSByZWZlcmVuY2UubWF4V2lkdGg7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICAgICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTWF4LXdpZHRoIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIG1heC13aWR0aHMgYWRqdXN0ZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE1pbldpZHRoKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWluV2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1pbldpZHRoKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMubWluV2lkdGguaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWluV2lkdGhcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLm1pbldpZHRoLmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUubWluV2lkdGggIT09IHJlZmVyZW5jZS5taW5XaWR0aCkge1xuICAgICAgICAgICAgbm9kZS5taW5XaWR0aCA9IHJlZmVyZW5jZS5taW5XaWR0aDtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNNaW4td2lkdGggcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgbWluLXdpZHRocyBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTWF4SGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tYXhIZWlnaHQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5tYXhIZWlnaHQuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwibWF4SGVpZ2h0XCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5tYXhIZWlnaHQuaWQpO1xuICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5tYXhIZWlnaHQgIT09IHJlZmVyZW5jZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIG5vZGUubWF4SGVpZ2h0ID0gcmVmZXJlbmNlLm1heEhlaWdodDtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNNYXgtaGVpZ2h0IHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIG1heC1oZWlnaHQgYWRqdXN0ZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE1pbkhlaWdodChub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzZXQgPSAwO1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICAgICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1pbkhlaWdodCkge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWluSGVpZ2h0KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMubWluSGVpZ2h0LmlkKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcIm1pbkhlaWdodFwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMubWluSGVpZ2h0LmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUubWluSGVpZ2h0ICE9PSByZWZlcmVuY2UubWluSGVpZ2h0KSB7XG4gICAgICAgICAgICBub2RlLm1pbkhlaWdodCA9IHJlZmVyZW5jZS5taW5IZWlnaHQ7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICAgICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTWluLWhlaWdodCByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc2V0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm9kZXMgd2l0aGluIGluc3RhbmNlcyBjYW5ub3QgaGF2ZSB0aGVpciBtaW4taGVpZ2h0IGFkanVzdGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiYWxsRGltZW5zaW9uc1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgZml0OiAwXG4gICAgfTtcbiAgICBsZXQgZml0TGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgZml0TGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCBmaXRMaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UsIHRvcExldmVsKSA9PiB7XG4gICAgICAgIGlmICh0eXBlLmNhbkF1dG9sYXlvdXQobm9kZSkgJiYgdHlwZS5jYW5BdXRvbGF5b3V0KHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5maXQgKz0gbWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlQ2FyZCk7XG4gICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xufSkpO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIGxldCByZXNldCA9IDA7XG4gICAgLy8gUmVzZXQgdmFyaWFibGUuXG4gICAgaWYgKG5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCAhPT0gcmVmZXJlbmNlLmxheW91dFNpemluZ0hvcml6b250YWwpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gcmVmZXJlbmNlLmxheW91dFNpemluZ0hvcml6b250YWw7XG4gICAgICAgIHJlc2V0ID0gMTtcbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCAhPT0gcmVmZXJlbmNlLmxheW91dFNpemluZ1ZlcnRpY2FsKSB7XG4gICAgICAgIG5vZGUubGF5b3V0U2l6aW5nVmVydGljYWwgPSByZWZlcmVuY2UubGF5b3V0U2l6aW5nVmVydGljYWw7XG4gICAgICAgIHJlc2V0ID0gMTtcbiAgICB9XG4gICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlSG9yaXpvbnRhbCBhbmQgdmVydGljYWwgZml0IHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgIHJldHVybiByZXNldDtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyogU3lzdGVtICovIGltcG9ydCB7IE9wZXJhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS9tb2R1bGVzXCI7XG5pbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG5pbXBvcnQgKiBhcyBjb25zb2xlVGhlbWUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvY29uc29sZS10aGVtZVwiO1xuLyogSGVscGVycyAqLyBpbXBvcnQgeyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5IH0gZnJvbSBcIi4uL2NvcmUvcmVzZXQtbGlicmFyeVwiO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJhbGxNb2Rlc1wiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgbW9kZTogMFxuICAgIH07XG4gICAgbGV0IG1vZGVMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCBtb2RlTGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCBtb2RlTGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlLmlzRmlnbWFMYXllcihub2RlKSAmJiB0eXBlLmlzRmlnbWFMYXllcihyZWZlcmVuY2UpKVxuICAgICAgICAgICAgc2NvcmVDYXJkLm1vZGUgKz0gbWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFsbChub2RlLCByZWZlcmVuY2UpIHtcbiAgICAvLyBTZXR0aW5nIGV4cGxpY2l0IHZhcmlhYmxlIG1vZGVzIG9uIGluc3RhbmNlIHN1YmxheWVycyBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWQuXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc2V0ID0gMDtcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvbGxlY3Rpb25zTmFtZXMgPSBPYmplY3Qua2V5cyhyZWZlcmVuY2UuZXhwbGljaXRWYXJpYWJsZU1vZGVzKSwgcmVmZXJlbmNlQ29sbGVjdGlvbkNvdW50ID0gcmVmZXJlbmNlQ29sbGVjdGlvbnNOYW1lcy5sZW5ndGg7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBleHBsaWNpdGx5IHNldCB2YXJpYWJsZXMgaW4gdGhlIHJlZmVyZW5jZSBvYmplY3QuXG4gICAgICAgIGlmIChyZWZlcmVuY2VDb2xsZWN0aW9uQ291bnQgIT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlQ29sbGVjdGlvbkNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sbGVjdGlvbklkID0gcmVmZXJlbmNlQ29sbGVjdGlvbnNOYW1lc1tpXSwgbW9kZUlkID0gcmVmZXJlbmNlLmV4cGxpY2l0VmFyaWFibGVNb2Rlc1tjb2xsZWN0aW9uSWRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4cGxpY2l0VmFyaWFibGVNb2Rlc1tjb2xsZWN0aW9uSWRdICE9PSBtb2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRFeHBsaWNpdFZhcmlhYmxlTW9kZUZvckNvbGxlY3Rpb24oY29sbGVjdGlvbklkLCBtb2RlSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIExvZyBjaGFuZ2VzIHRvIGNvbnNvbGUuXG4gICAgICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY01vZGVzIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke2Vycm9yfWAsIGNvbnNvbGVUaGVtZS5lcnJvcik7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIkV4cGxpY2l0IG1vZGVzIG1heSBoYXZlIGJlZW4gc2V0IG9uIHNvbWUgbGF5ZXJzLiBGaWdtYSBkb2VzIG5vdCB5ZXQgc3VwcG9ydCByZXNldHRpbmcgdGhlc2UgbW9kZXMgZnJvbSB0aGUgcGx1Z2luLlwiKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5leHBvcnQgY29uc3QgYWxsID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImFsbFBhZGRpbmdcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDBcbiAgICB9O1xuICAgIGxldCBwYWRkaW5nTGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgcGFkZGluZ0xpYnJhcnkuYWRkTm9kZXNGcm9tU2VsZWN0aW9uKCk7XG4gICAgeWllbGQgcGFkZGluZ0xpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICBpZiAodHlwZS5jYW5BdXRvbGF5b3V0KG5vZGUpICYmIHR5cGUuY2FuQXV0b2xheW91dChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1RvcCArPSBtYXRjaFRvcFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nQm90dG9tICs9IG1hdGNoQm90dG9tUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdMZWZ0ICs9IG1hdGNoTGVmdFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nUmlnaHQgKz0gbWF0Y2hSaWdodFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlQ2FyZCk7XG4gICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xufSkpO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVG9wUGFkZGluZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWRkaW5nVG9wKSB7XG4gICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhZGRpbmdUb3ApID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nVG9wLmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ1RvcFwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMucGFkZGluZ1RvcC5pZCk7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS5wYWRkaW5nVG9wICE9PSByZWZlcmVuY2UucGFkZGluZ1RvcCkge1xuICAgICAgICBub2RlLnBhZGRpbmdUb3AgPSByZWZlcmVuY2UucGFkZGluZ1RvcDtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjVG9wIHBhZGRpbmcgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQm90dG9tUGFkZGluZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYWRkaW5nQm90dG9tKSB7XG4gICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhZGRpbmdCb3R0b20pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nQm90dG9tLmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwicGFkZGluZ0JvdHRvbVwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMucGFkZGluZ0JvdHRvbS5pZCk7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS5wYWRkaW5nQm90dG9tICE9PSByZWZlcmVuY2UucGFkZGluZ0JvdHRvbSkge1xuICAgICAgICBub2RlLnBhZGRpbmdCb3R0b20gPSByZWZlcmVuY2UucGFkZGluZ0JvdHRvbTtcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjQm90dG9tIHBhZGRpbmcgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTGVmdFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgbGV0IHJlc2V0ID0gMDtcbiAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFkZGluZ0xlZnQpIHtcbiAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFkZGluZ0xlZnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nTGVmdC5pZCkge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdMZWZ0XCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5wYWRkaW5nTGVmdC5pZCk7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgZWxzZSBpZiAobm9kZS5wYWRkaW5nTGVmdCAhPT0gcmVmZXJlbmNlLnBhZGRpbmdMZWZ0KSB7XG4gICAgICAgIG5vZGUucGFkZGluZ0xlZnQgPSByZWZlcmVuY2UucGFkZGluZ0xlZnQ7XG4gICAgICAgIHJlc2V0ID0gMTtcbiAgICB9XG4gICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY0xlZnQgcGFkZGluZyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICByZXR1cm4gcmVzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hSaWdodFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgbGV0IHJlc2V0ID0gMDtcbiAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhZGRpbmdSaWdodCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnBhZGRpbmdSaWdodC5pZCkge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInBhZGRpbmdSaWdodFwiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMucGFkZGluZ1JpZ2h0LmlkKTtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLnBhZGRpbmdSaWdodCAhPT0gcmVmZXJlbmNlLnBhZGRpbmdSaWdodCkge1xuICAgICAgICBub2RlLnBhZGRpbmdSaWdodCA9IHJlZmVyZW5jZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgIHJlc2V0ID0gMTtcbiAgICB9XG4gICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY1JpZ2h0IHBhZGRpbmcgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5leHBvcnQgY29uc3QgY2FuSGF2ZVJhZGlpID0gKG5vZGUpID0+IChub2RlLnR5cGUgIT09IFwiR1JPVVBcIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJTRUNUSU9OXCIgJiZcbiAgICBub2RlLnR5cGUgIT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJTVEFSXCIgJiZcbiAgICBub2RlLnR5cGUgIT09IFwiRUxMSVBTRVwiICYmXG4gICAgbm9kZS50eXBlICE9PSBcIlBPTFlHT05cIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJWRUNUT1JcIiAmJlxuICAgIG5vZGUudHlwZSAhPT0gXCJURVhUXCIpO1xuZXhwb3J0IGNvbnN0IGFsbCA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJhbGxSYWRpaVwiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgcmFkaXVzVG9wTGVmdDogMCxcbiAgICAgICAgcmFkaXVzVG9wUmlnaHQ6IDAsXG4gICAgICAgIHJhZGl1c0JvdHRvbVJpZ2h0OiAwLFxuICAgICAgICByYWRpdXNCb3R0b21MZWZ0OiAwXG4gICAgfTtcbiAgICBsZXQgcmFkaXVzTGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgcmFkaXVzTGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCByYWRpdXNMaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UpID0+IHtcbiAgICAgICAgaWYgKGNhbkhhdmVSYWRpaShub2RlKSAmJiBjYW5IYXZlUmFkaWkocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1RvcExlZnQgKz0gbWF0Y2hUb3BMZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzVG9wUmlnaHQgKz0gbWF0Y2hUb3BSaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c0JvdHRvbVJpZ2h0ICs9IG1hdGNoQm90dG9tUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNCb3R0b21MZWZ0ICs9IG1hdGNoQm90dG9tTGVmdFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hUb3BMZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9wTGVmdFJhZGl1cykge1xuICAgICAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9wTGVmdFJhZGl1cykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnRvcExlZnRSYWRpdXMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwidG9wTGVmdFJhZGl1c1wiLCByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMudG9wTGVmdFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLnRvcExlZnRSYWRpdXMgIT09IHJlZmVyZW5jZS50b3BMZWZ0UmFkaXVzKSB7XG4gICAgICAgICAgICBub2RlLnRvcExlZnRSYWRpdXMgPSByZWZlcmVuY2UudG9wTGVmdFJhZGl1cztcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNUb3AgbGVmdCByYWRpdXMgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgIHJldHVybiByZXNldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vZGVzIHdpdGhpbiBpbnN0YW5jZXMgY2Fubm90IGhhdmUgdGhlaXIgcmFkaXVzIGFkanVzdGVkLlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hUb3BSaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzZXQgPSAwO1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICAgICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvcFJpZ2h0UmFkaXVzKSB7XG4gICAgICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b3BSaWdodFJhZGl1cykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnRvcFJpZ2h0UmFkaXVzLmlkKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInRvcFJpZ2h0UmFkaXVzXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy50b3BSaWdodFJhZGl1cy5pZCk7XG4gICAgICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgICAgICBlbHNlIGlmIChub2RlLnRvcFJpZ2h0UmFkaXVzICE9PSByZWZlcmVuY2UudG9wUmlnaHRSYWRpdXMpIHtcbiAgICAgICAgICAgIG5vZGUudG9wUmlnaHRSYWRpdXMgPSByZWZlcmVuY2UudG9wUmlnaHRSYWRpdXM7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICAgICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjVG9wIHJpZ2h0IHJhZGl1cyByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc2V0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm9kZXMgd2l0aGluIGluc3RhbmNlcyBjYW5ub3QgaGF2ZSB0aGVpciByYWRpdXMgYWRqdXN0ZWQuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEJvdHRvbVJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNldCA9IDA7XG4gICAgICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgICAgICBpZiAoKF9hID0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm90dG9tUmlnaHRSYWRpdXMpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvdHRvbVJpZ2h0UmFkaXVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuYm90dG9tUmlnaHRSYWRpdXMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiYm90dG9tUmlnaHRSYWRpdXNcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmJvdHRvbVJpZ2h0UmFkaXVzLmlkKTtcbiAgICAgICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdmFsdWUuXG4gICAgICAgIGVsc2UgaWYgKG5vZGUuYm90dG9tUmlnaHRSYWRpdXMgIT09IHJlZmVyZW5jZS5ib3R0b21SaWdodFJhZGl1cykge1xuICAgICAgICAgICAgbm9kZS5ib3R0b21SaWdodFJhZGl1cyA9IHJlZmVyZW5jZS5ib3R0b21SaWdodFJhZGl1cztcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgICAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNCb3R0b20gcmlnaHQgcmFkaXVzIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIHJhZGl1cyBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQm90dG9tTGVmdFJhZGl1cyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzZXQgPSAwO1xuICAgICAgICAvLyBSZXNldCB2YXJpYWJsZS5cbiAgICAgICAgaWYgKChfYSA9IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJvdHRvbUxlZnRSYWRpdXMpIHtcbiAgICAgICAgICAgIGlmICgoKF9jID0gKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvdHRvbUxlZnRSYWRpdXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pZCkgPT09IHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5ib3R0b21MZWZ0UmFkaXVzLmlkKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcImJvdHRvbUxlZnRSYWRpdXNcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLmJvdHRvbUxlZnRSYWRpdXMuaWQpO1xuICAgICAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICAgICAgZWxzZSBpZiAobm9kZS5ib3R0b21MZWZ0UmFkaXVzICE9PSByZWZlcmVuY2UuYm90dG9tTGVmdFJhZGl1cykge1xuICAgICAgICAgICAgbm9kZS5ib3R0b21MZWZ0UmFkaXVzID0gcmVmZXJlbmNlLmJvdHRvbUxlZnRSYWRpdXM7XG4gICAgICAgICAgICByZXNldCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICAgICAgaWYgKHJlc2V0ID09PSAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjQm90dG9tIGxlZnQgcmFkaXVzIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICByZXR1cm4gcmVzZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBOb2RlcyB3aXRoaW4gaW5zdGFuY2VzIGNhbm5vdCBoYXZlIHRoZWlyIHJhZGl1cyBhZGp1c3RlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi4vY29yZS9yZXNldC1saWJyYXJ5XCI7XG5leHBvcnQgY29uc3QgYWxsID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImFsbFNwYWNpbmdcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIGl0ZW1TcGFjaW5nOiAwLFxuICAgICAgICBjb3VudGVyQXhpc1NwYWNpbmc6IDBcbiAgICB9O1xuICAgIGxldCBzcGFjaW5nTGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgc3BhY2luZ0xpYnJhcnkuYWRkTm9kZXNGcm9tU2VsZWN0aW9uKCk7XG4gICAgeWllbGQgc3BhY2luZ0xpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICBpZiAodHlwZS5jYW5BdXRvbGF5b3V0KG5vZGUpICYmIHR5cGUuY2FuQXV0b2xheW91dChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBzY29yZUNhcmQuaXRlbVNwYWNpbmcgKz0gbWF0Y2hJdGVtU3BhY2luZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLmNvdW50ZXJBeGlzU3BhY2luZyArPSBtYXRjaENvdW50ZXJBeGlzU3BhY2luZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJdGVtU3BhY2luZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pdGVtU3BhY2luZykge1xuICAgICAgICBpZiAoKChfYyA9IChfYiA9IG5vZGUuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pdGVtU3BhY2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlkKSA9PT0gcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLml0ZW1TcGFjaW5nLmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiaXRlbVNwYWNpbmdcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLml0ZW1TcGFjaW5nLmlkKTtcbiAgICAgICAgICAgIHJlc2V0ID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNldCB2YWx1ZS5cbiAgICBlbHNlIGlmIChub2RlLml0ZW1TcGFjaW5nICE9PSByZWZlcmVuY2UuaXRlbVNwYWNpbmcpIHtcbiAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IHJlZmVyZW5jZS5pdGVtU3BhY2luZztcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjSXRlbSBzcGFjaW5nIHJlc2V0IGZvciAke25vZGUubmFtZX0uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgIHJldHVybiByZXNldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaENvdW50ZXJBeGlzU3BhY2luZyhub2RlLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb3VudGVyQXhpc1NwYWNpbmcpIHtcbiAgICAgICAgaWYgKCgoX2MgPSAoX2IgPSBub2RlLmJvdW5kVmFyaWFibGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY291bnRlckF4aXNTcGFjaW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMuY291bnRlckF4aXNTcGFjaW5nLmlkKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKFwiY291bnRlckF4aXNTcGFjaW5nXCIsIHJlZmVyZW5jZS5ib3VuZFZhcmlhYmxlcy5jb3VudGVyQXhpc1NwYWNpbmcuaWQpO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgIGVsc2UgaWYgKG5vZGUuY291bnRlckF4aXNTcGFjaW5nICE9PSByZWZlcmVuY2UuY291bnRlckF4aXNTcGFjaW5nKSB7XG4gICAgICAgIG5vZGUuY291bnRlckF4aXNTcGFjaW5nID0gcmVmZXJlbmNlLmNvdW50ZXJBeGlzU3BhY2luZztcbiAgICAgICAgcmVzZXQgPSAxO1xuICAgIH1cbiAgICAvLyBMb2cgY2hhbmdlcyB0byBjb25zb2xlLlxuICAgIGlmIChyZXNldCA9PT0gMSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjQ291bnRlciBheGlzIHNwYWNpbmcgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbmltcG9ydCAqIGFzIGNvbnNvbGVUaGVtZSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9jb25zb2xlLXRoZW1lXCI7XG4vKiBIZWxwZXJzICovIGltcG9ydCAqIGFzIGNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vcGx1Z2lucy9maWdtYS9jb21wb25lbnRcIjtcbmV4cG9ydCBjb25zdCBhbGwgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwidHlwb2dyYXBoeVwiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgbWF0Y2hBbGwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbn0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFsbChub2Rlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBsaWJyYXJ5ID0gbmV3IFJlc2V0VHlwb2dyYXBoeUxpYnJhcnkoKTtcbiAgICAgICAgeWllbGQgbGlicmFyeS5hZGROb2Rlc0Zyb21BcnJheShub2RlcywgdHJ1ZSk7XG4gICAgICAgIHlpZWxkIGxpYnJhcnkucHJvY2Vzc0VudHJpZXMoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBSZXNldFR5cG9ncmFwaHlMaWJyYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1dpdGhvdXRTdHlsZSA9IHt9O1xuICAgICAgICB0aGlzLm5vZGVzV2l0aFN0eWxlID0ge307XG4gICAgICAgIHRoaXMubm9kZXNXaXRoTWlzc2luZ0ZvbnRzID0gW107XG4gICAgICAgIHRoaXMubm9kZXNXaXRoTXVsdGlwbGVGb250cyA9IFtdO1xuICAgICAgICB0aGlzLmNhdGFsb2dpbmdDb21wbGV0ZWQgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZ0NvbXBsZXRlZCA9ICgpID0+IHsgfTtcbiAgICB9XG4gICAgYWRkTm9kZXNGcm9tU2VsZWN0aW9uKGRyaWxsRGVlcGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgbm9kZXMuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWROb2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuYWRkTm9kZXNGcm9tQXJyYXkoc2VsZWN0ZWROb2RlcywgZHJpbGxEZWVwZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkTm9kZXNGcm9tQXJyYXkobm9kZXMsIGRyaWxsRGVlcGVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBkcmlsbERlZXBlciA9IGRyaWxsRGVlcGVyICE9PSBudWxsICYmIGRyaWxsRGVlcGVyICE9PSB2b2lkIDAgPyBkcmlsbERlZXBlciA6IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNDYXRhbG9naW5nIHR5cG9ncmFwaHkgbGF5ZXJzLi4uYCwgY29uc29sZVRoZW1lLnByaW1hcnkpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBDYXRhbG9naW5nIHR5cG9ncmFwaHkgbGF5ZXJzLi4uYCwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMCxcbiAgICAgICAgICAgICAgICBvbkRlcXVldWU6IChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlcyBjYW5ub3QgYmUgaW5zdGFuY2VzLCBzbyBnZXQgdGV4dCBub2RlIGFzIGNoaWxkcmVuIGlmIGFuIGluc3RhbmNlIGlzIHJlY2VpdmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudFJlZmVyZW5jZSA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmlsbERlZXBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ0FsbENoaWxkcmVuKG5vZGUsIHBhcmVudFJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5Db3VudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXSwgcmVmZXJlbmNlID0gcGFyZW50UmVmZXJlbmNlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIlRFWFRcIiAmJiByZWZlcmVuY2UudHlwZSA9PT0gXCJURVhUXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ05vZGUoY2hpbGQsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbm9kZSBpbiBpZiBpdCBpcyBhIHRleHQgbGF5ZXIsIGJ1dCBvbmx5IGlmIGl0IGlzIHdpdGhpbiBhbiBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZUFuY2VzdHJ5ID0gY29tcG9uZW50LndpdGhpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZUFuY2VzdHJ5LnRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgY29tcG9uZW50IG9mIHRoZSBwYXJlbnQgaW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoKG4pID0+IChuLmlkID09PSBpbnN0YW5jZUFuY2VzdHJ5Lmluc3RhbmNlSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpbnN0YW5jZSA9PT0gbnVsbCB8fCBpbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5zdGFuY2UudHlwZSkgPT09IFwiSU5TVEFOQ0VcIiAmJiBpbnN0YW5jZS5tYWluQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSBsYXllciB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2UgPSBpbnN0YW5jZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCBvZiBpbnN0YW5jZUFuY2VzdHJ5LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlLmNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgcmVmZXJlbmNlLnR5cGUgPT09IFwiVEVYVFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ05vZGUobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpZyBkZWVwZXIgaWYgbm9kZSBpcyBhIHBhcmVudC4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLmlzUGFyZW50YWJsZShub2RlKSAmJiB0eXBlLmlzUGFyZW50YWJsZShyZWZlcmVuY2UpICYmIGRyaWxsRGVlcGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ0FsbENoaWxkcmVuKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9naW5nQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9naW5nQ29tcGxldGVkID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSB0aW1lb3V0IG9mIDUgbWlucyB0byByZWplY3QgdGhlIG9wZXJhdGlvbiBhbmQgY2xvc2UgdGhlIHBsdWdpbiwgaW4gY2FzZSB0aGUgcGx1Z2luIGhhbmdzLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVqZWN0LCAzMDAwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRhbG9nQWxsQ2hpbGRyZW4ocGFyZW50Tm9kZSwgcGFyZW50UmVmZXJlbmNlKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbkNvdW50ID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5Db3VudDsgKytpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNDYXRhbG9naW5nICR7cGFyZW50Tm9kZS5uYW1lfS4uLmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGxldCBub2RlID0gcGFyZW50Tm9kZS5jaGlsZHJlbltpXSwgcmVmZXJlbmNlID0gcGFyZW50UmVmZXJlbmNlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgcmVmZXJlbmNlLnR5cGUgPT09IFwiVEVYVFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ05vZGUobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuaXNQYXJlbnRhYmxlKG5vZGUpICYmIHR5cGUuaXNQYXJlbnRhYmxlKHJlZmVyZW5jZSkpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRhbG9nTm9kZShub2RlLCByZWZlcmVuY2UpIHtcbiAgICAgICAgLy8gSWYgbWlzc2luZyBmb250cyBleGlzdHMsIGxvZyB0aGUgbm9kZSB0byB0aGUgY2xhc3MuXG4gICAgICAgIGlmIChub2RlLmhhc01pc3NpbmdGb250KVxuICAgICAgICAgICAgdGhpcy5ub2Rlc1dpdGhNaXNzaW5nRm9udHMucHVzaCh7IG5hbWU6IG5vZGUubmFtZSwgaWQ6IG5vZGUuaWQgfSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZS50eXBlID09PSBcIlRFWFRcIiAmJiB0aGlzLmlzRm9udE5hbWUocmVmZXJlbmNlLmZvbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHJlZmVyZW5jZSBjb250YWlucyBtdWx0aXBsZSBmb250cywgbG9nIHRoZSBub2RlIHRvIHRoZSBjbGFzcywgYXMgaXQnZCBiZSBpbXBvc3NpYmxlIHRvIGtub3cgaG93IHRvIHN0eWxlIHRoZSB0ZXh0LlxuICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2VGb250cyA9IHJlZmVyZW5jZS5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCByZWZlcmVuY2UuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWZlcmVuY2VGb250cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzV2l0aE11bHRpcGxlRm9udHMucHVzaCh7IG5hbWU6IG5vZGUubmFtZSwgaWQ6IG5vZGUuaWQgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb250RnVsbE5hbWUgPSBbcmVmZXJlbmNlLmZvbnROYW1lLmZhbWlseSwgcmVmZXJlbmNlLmZvbnROYW1lLnN0eWxlXS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBsaW5rZWQgdG8gYSB0ZXh0IHN0eWxlLCBsb2cgaXQgaW50byBub2Rlc1dpdGhTdHlsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZlcmVuY2UudGV4dFN0eWxlSWQgPT09IFwic3RyaW5nXCIgJiYgcmVmZXJlbmNlLnRleHRTdHlsZUlkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dFN0eWxlSWQgIT09IHJlZmVyZW5jZS50ZXh0U3R5bGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBlbnRyeSBpZiBub25lIGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZXNXaXRoU3R5bGVbcmVmZXJlbmNlLnRleHRTdHlsZUlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlc1dpdGhTdHlsZVtyZWZlcmVuY2UudGV4dFN0eWxlSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogcmVmZXJlbmNlLmZvbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFt7IHNlbGY6IG5vZGUsIHJlZmVyZW5jZTogcmVmZXJlbmNlIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaW4gdGhlIG5vZGUgaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXNXaXRoU3R5bGVbcmVmZXJlbmNlLnRleHRTdHlsZUlkXS5ub2Rlcy5wdXNoKHsgc2VsZjogbm9kZSwgcmVmZXJlbmNlOiByZWZlcmVuY2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UgYWRkIGl0IHRvIG5vZGVzV2l0aG91dFN0eWxlLlxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmZvbnROYW1lICE9PSByZWZlcmVuY2UuZm9udE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBlbnRyeSBpZiBub25lIGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ub2Rlc1dpdGhvdXRTdHlsZVtmb250RnVsbE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXNXaXRob3V0U3R5bGVbZm9udEZ1bGxOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogcmVmZXJlbmNlLmZvbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlczogW3sgc2VsZjogbm9kZSwgcmVmZXJlbmNlOiByZWZlcmVuY2UgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaW4gdGhlIG5vZGUgaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzV2l0aG91dFN0eWxlW2ZvbnRGdWxsTmFtZV0ubm9kZXMucHVzaCh7IHNlbGY6IG5vZGUsIHJlZmVyZW5jZTogcmVmZXJlbmNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NFbnRyaWVzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjUHJvY2Vzc2luZyB0eXBvZ3JhcGh5IGxheWVycy4uLmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgUHJvY2Vzc2luZyB0eXBvZ3JhcGh5IGxheWVycy4uLmAsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAsXG4gICAgICAgICAgICAgICAgb25EZXF1ZXVlOiAocmVhc29uKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IG5vZGVzIHdpdGggc3R5bGVzLlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlc2V0Tm9kZXNXaXRoU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IG5vZGVzIHdpdGhvdXQgc3R5bGVzLlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlc2V0Tm9kZXNXaXRob3V0U3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZ3Mgbm9kZXMgd2l0aCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaXNzaW5nRm9udHNOb2RlcyA9IFtdLCBtdWx0aXBsZUZvbnRzTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yTm9kZXMgPSB0aGlzLmdldE1pc3NpbmdGb250Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZXJyb3JOb2RlIG9mIGVycm9yTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdGb250c05vZGVzLnB1c2goZXJyb3JOb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTm9kZXMgPSB0aGlzLmdldE11bHRpcGxlRm9udE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVycm9yTm9kZSBvZiBlcnJvck5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZUZvbnRzTm9kZXMucHVzaChlcnJvck5vZGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1R5cG9ncmFwaHkgcHJvY2Vzc2VkLlwiLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nRm9udHNOb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY1RoZSBmb2xsb3dpbmcgbGF5ZXJzIGNvbnRhaW4gbWlzc2luZyBmb250czogJHttaXNzaW5nRm9udHNOb2Rlcy5qb2luKFwiLCBcIil9LmAsIGNvbnNvbGVUaGVtZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoYFRoZSBmb2xsb3dpbmcgbGF5ZXJzIGNvbnRhaW4gbWlzc2luZyBmb250czogJHttaXNzaW5nRm9udHNOb2Rlcy5qb2luKFwiLCBcIil9LmAsIHsgZXJyb3I6IHRydWUsIHRpbWVvdXQ6IDUwMDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxlRm9udHNOb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY1RoZSBmb2xsb3dpbmcgbGF5ZXJzIGNvbnRhaW4gbXVsdGlwbGUgZm9udHM6ICR7bXVsdGlwbGVGb250c05vZGVzLmpvaW4oXCIsIFwiKX0uYCwgY29uc29sZVRoZW1lLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgVGhlIGZvbGxvd2luZyBsYXllcnMgY29udGFpbiBtdWx0aXBsZSBmb250czogJHttdWx0aXBsZUZvbnRzTm9kZXMuam9pbihcIiwgXCIpfS5gLCB7IGVycm9yOiB0cnVlLCB0aW1lb3V0OiA1MDAwIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ0NvbXBsZXRlZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdDb21wbGV0ZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIC8vIFNldCBhIHRpbWVvdXQgb2YgMTUgbWlucyB0byByZWplY3QgdGhlIG9wZXJhdGlvbiBhbmQgY2xvc2UgdGhlIHBsdWdpbiwgaW4gY2FzZSB0aGUgcGx1Z2luIGhhbmdzLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVqZWN0LCA5MDAwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXNldE5vZGVzV2l0aFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUlkcyA9IE9iamVjdC5rZXlzKHRoaXMubm9kZXNXaXRoU3R5bGUpO1xuICAgICAgICAgICAgaWYgKHN0eWxlSWRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0xvYWRpbmcgZm9udHMgZm9yIG5vZGVzIHdpdGggc3R5bGVzLmAsIGNvbnNvbGVUaGVtZS5zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGxldCBsb2FkRm9udHMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIGZvbnRzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN0eWxlSWQgb2Ygc3R5bGVJZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEZvbnRzLnB1c2goZmlnbWEubG9hZEZvbnRBc3luYyh0aGlzLm5vZGVzV2l0aFN0eWxlW3N0eWxlSWRdLmZvbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwobG9hZEZvbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2xvYWRGb250cy5sZW5ndGh9IGZvbnRzIGxvYWRlZC5gLCBjb25zb2xlVGhlbWUuc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBub2Rlcy5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdHlsZUlkIG9mIHN0eWxlSWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xsZWN0ZWROb2RlcyA9IHRoaXMubm9kZXNXaXRoU3R5bGVbc3R5bGVJZF0ubm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbGxlY3RlZE5vZGUgb2YgY29sbGVjdGVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY29sbGVjdGVkTm9kZS5zZWxmLCByZWZlcmVuY2UgPSBjb2xsZWN0ZWROb2RlLnJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmIHJlZmVyZW5jZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dFN0eWxlSWQgPSBzdHlsZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCA9IHJlZmVyZW5jZS50ZXh0QWxpZ25Ib3Jpem9udGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dEFsaWduVmVydGljYWwgPSByZWZlcmVuY2UudGV4dEFsaWduVmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IHJlZmVyZW5jZS50ZXh0QXV0b1Jlc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRUcnVuY2F0aW9uID0gcmVmZXJlbmNlLnRleHRUcnVuY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWF4TGluZXMgPSByZWZlcmVuY2UubWF4TGluZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjVGV4dCBzdHlsZSByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0Tm9kZXNXaXRob3V0U3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHdpdGhvdXRTdHlsZUZvbnRGdWxsTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLm5vZGVzV2l0aG91dFN0eWxlKTtcbiAgICAgICAgICAgIGlmICh3aXRob3V0U3R5bGVGb250RnVsbE5hbWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0xvYWRpbmcgZm9udHMgZm9yIG5vZGVzIHdpdGhvdXQgc3R5bGVzLmAsIGNvbnNvbGVUaGVtZS5zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGxldCBsb2FkRm9udHMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIGZvbnRzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZvbnRGdWxsTmFtZSBvZiB3aXRob3V0U3R5bGVGb250RnVsbE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRGb250cy5wdXNoKGZpZ21hLmxvYWRGb250QXN5bmModGhpcy5ub2Rlc1dpdGhvdXRTdHlsZVtmb250RnVsbE5hbWVdLmZvbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwobG9hZEZvbnRzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2xvYWRGb250cy5sZW5ndGh9IGZvbnRzIGxvYWRlZC5gLCBjb25zb2xlVGhlbWUuc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBub2Rlcy5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmb250RnVsbE5hbWUgb2Ygd2l0aG91dFN0eWxlRm9udEZ1bGxOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm9udE5hbWUgPSB0aGlzLm5vZGVzV2l0aG91dFN0eWxlW2ZvbnRGdWxsTmFtZV0uZm9udCwgY29sbGVjdGVkTm9kZXMgPSB0aGlzLm5vZGVzV2l0aG91dFN0eWxlW2ZvbnRGdWxsTmFtZV0ubm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbGxlY3RlZE5vZGUgb2YgY29sbGVjdGVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY29sbGVjdGVkTm9kZS5zZWxmLCByZWZlcmVuY2UgPSBjb2xsZWN0ZWROb2RlLnJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmIHJlZmVyZW5jZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZm9udE5hbWUgPSBmb250TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRBbGlnbkhvcml6b250YWwgPSByZWZlcmVuY2UudGV4dEFsaWduSG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRBbGlnblZlcnRpY2FsID0gcmVmZXJlbmNlLnRleHRBbGlnblZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dEF1dG9SZXNpemUgPSByZWZlcmVuY2UudGV4dEF1dG9SZXNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0VHJ1bmNhdGlvbiA9IHJlZmVyZW5jZS50ZXh0VHJ1bmNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1heExpbmVzID0gcmVmZXJlbmNlLm1heExpbmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyYWdyYXBoSW5kZW50ID0gcmVmZXJlbmNlLnBhcmFncmFwaEluZGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmFncmFwaFNwYWNpbmcgPSByZWZlcmVuY2UucGFyYWdyYXBoU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxpc3RTcGFjaW5nID0gcmVmZXJlbmNlLmxpc3RTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaGFuZ2luZ1B1bmN0dWF0aW9uID0gcmVmZXJlbmNlLmhhbmdpbmdQdW5jdHVhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmhhbmdpbmdMaXN0ID0gcmVmZXJlbmNlLmhhbmdpbmdMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZm9udFNpemUgPSByZWZlcmVuY2UuZm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q2FzZSA9IHJlZmVyZW5jZS50ZXh0Q2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHREZWNvcmF0aW9uID0gcmVmZXJlbmNlLnRleHREZWNvcmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGV0dGVyU3BhY2luZyA9IHJlZmVyZW5jZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGluZUhlaWdodCA9IHJlZmVyZW5jZS5saW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGVhZGluZ1RyaW0gPSByZWZlcmVuY2UubGVhZGluZ1RyaW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRm9udCByZXNldCBmb3IgJHtub2RlLm5hbWV9LmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE1pc3NpbmdGb250Tm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzV2l0aE1pc3NpbmdGb250cztcbiAgICB9XG4gICAgZ2V0TXVsdGlwbGVGb250Tm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzV2l0aE11bHRpcGxlRm9udHM7XG4gICAgfVxuICAgIGlzRm9udE5hbWUob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBcImZhbWlseVwiIGluIG9iamVjdDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8qIFN5c3RlbSAqLyBpbXBvcnQgeyBPcGVyYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vbW9kdWxlc1wiO1xuaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmV4cG9ydCBjb25zdCB0b2dnbGUgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwidmlzaWJpbGl0eVwiLCBmYWxzZSwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHNjb3JlQ2FyZCA9IHtcbiAgICAgICAgdmlzaWJpbGl0eTogMFxuICAgIH07XG4gICAgbGV0IHZpc2liaWxpdHlMaWJyYXJ5ID0gbmV3IFJlc2V0UHJvcGVydGllc0xpYnJhcnkoKTtcbiAgICB5aWVsZCB2aXNpYmlsaXR5TGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCB2aXNpYmlsaXR5TGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIHNjb3JlQ2FyZC52aXNpYmlsaXR5ICs9IG1hdGNoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICBmaWdtYS5ub3RpZnkoXCJQcm9jZXNzIGNvbXBsZXRlZC5cIiwgeyB0aW1lb3V0OiA1MDAgfSk7XG59KSk7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2gobm9kZSwgcmVmZXJlbmNlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBsZXQgcmVzZXQgPSAwO1xuICAgIC8vIFJlc2V0IHZhcmlhYmxlLlxuICAgIGlmICgoX2EgPSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52aXNpYmxlKSB7XG4gICAgICAgIGlmICgoKF9iID0gbm9kZS5ib3VuZFZhcmlhYmxlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZpc2libGUpID09PSByZWZlcmVuY2UuYm91bmRWYXJpYWJsZXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShcInZpc2libGVcIiwgcmVmZXJlbmNlLmJvdW5kVmFyaWFibGVzLnZpc2libGUuaWQpO1xuICAgICAgICAgICAgcmVzZXQgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2V0IHZhbHVlLlxuICAgIGVsc2UgaWYgKG5vZGUudmlzaWJsZSAhPT0gcmVmZXJlbmNlLnZpc2libGUpIHtcbiAgICAgICAgbm9kZS52aXNpYmxlID0gcmVmZXJlbmNlLnZpc2libGU7XG4gICAgICAgIHJlc2V0ID0gMTtcbiAgICB9XG4gICAgLy8gTG9nIGNoYW5nZXMgdG8gY29uc29sZS5cbiAgICBpZiAocmVzZXQgPT09IDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY1Zpc2liaWxpdHkgcmVzZXQgZm9yICR7bm9kZS5uYW1lfS5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgcmV0dXJuIHJlc2V0O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBUeXBlcyAqLyBpbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG4vKiBTeXN0ZW0gKi8gaW1wb3J0ICogYXMgY29uc29sZVRoZW1lIGZyb20gXCIuLi8uLi8uLi9saWJyYXJ5L2NvbnNvbGUtdGhlbWVcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0ICogYXMgY29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9wbHVnaW5zL2ZpZ21hL2NvbXBvbmVudFwiO1xuZXhwb3J0IGNsYXNzIFJlc2V0UHJvcGVydGllc0xpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRFbnRyaWVzID0gMDtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nQ29tcGxldGVkID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLmNhdGFsb2dpbmdDb21wbGV0ZWQgPSAoKSA9PiB7IH07XG4gICAgfVxuICAgIGFkZE5vZGVzRnJvbVNlbGVjdGlvbihkcmlsbERlZXBlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gR2V0IHNlbGVjdGVkIG5vZGVzLlxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkTm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmFkZE5vZGVzRnJvbUFycmF5KHNlbGVjdGVkTm9kZXMsIGRyaWxsRGVlcGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZE5vZGVzRnJvbUFycmF5KG5vZGVzLCBkcmlsbERlZXBlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZHJpbGxEZWVwZXIgPSBkcmlsbERlZXBlciAhPT0gbnVsbCAmJiBkcmlsbERlZXBlciAhPT0gdm9pZCAwID8gZHJpbGxEZWVwZXIgOiB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjQ2F0YWxvZ2luZyBsYXllcnMuLi5gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoYENhdGFsb2dpbmcgbGF5ZXJzLi4uYCwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMCxcbiAgICAgICAgICAgICAgICBvbkRlcXVldWU6IChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcy5wdXNoKHsgbm9kZTogbm9kZSwgcmVmZXJlbmNlOiByZWZlcmVuY2UsIHRvcExldmVsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5pc1BhcmVudGFibGUobm9kZSkgJiYgdHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSAmJiBkcmlsbERlZXBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ0FsbENoaWxkcmVuKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ2luZ0NvbXBsZXRlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZUFuY2VzdHJ5ID0gY29tcG9uZW50LndpdGhpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZUFuY2VzdHJ5LnRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgY29tcG9uZW50IG9mIHRoZSBwYXJlbnQgaW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoKG4pID0+IChuLmlkID09PSBpbnN0YW5jZUFuY2VzdHJ5Lmluc3RhbmNlSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpbnN0YW5jZSA9PT0gbnVsbCB8fCBpbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5zdGFuY2UudHlwZSkgPT09IFwiSU5TVEFOQ0VcIiAmJiBpbnN0YW5jZS5tYWluQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSBsYXllciB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2UgPSBpbnN0YW5jZS5tYWluQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCBvZiBpbnN0YW5jZUFuY2VzdHJ5LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5pc1BhcmVudGFibGUocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2UuY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goeyBub2RlOiBub2RlLCByZWZlcmVuY2U6IHJlZmVyZW5jZSwgdG9wTGV2ZWw6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUuaXNQYXJlbnRhYmxlKG5vZGUpICYmIHR5cGUuaXNQYXJlbnRhYmxlKHJlZmVyZW5jZSkgJiYgZHJpbGxEZWVwZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0YWxvZ2luZ0NvbXBsZXRlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9naW5nQ29tcGxldGVkID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSB0aW1lb3V0IG9mIDUgbWlucyB0byByZWplY3QgdGhlIG9wZXJhdGlvbiBhbmQgY2xvc2UgdGhlIHBsdWdpbiwgaW4gY2FzZSB0aGUgcGx1Z2luIGhhbmdzLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVqZWN0LCAzMDAwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRhbG9nQWxsQ2hpbGRyZW4ocGFyZW50Tm9kZSwgcGFyZW50UmVmZXJlbmNlKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbkNvdW50ID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5Db3VudDsgKytpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNTdG9yaW5nICR7cGFyZW50Tm9kZS5uYW1lfS4uLmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGxldCBub2RlID0gcGFyZW50Tm9kZS5jaGlsZHJlbltpXSwgcmVmZXJlbmNlID0gcGFyZW50UmVmZXJlbmNlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goeyBub2RlOiBub2RlLCByZWZlcmVuY2U6IHJlZmVyZW5jZSwgdG9wTGV2ZWw6IGZhbHNlIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGUuaXNQYXJlbnRhYmxlKG5vZGUpICYmIHR5cGUuaXNQYXJlbnRhYmxlKHJlZmVyZW5jZSkpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRhbG9nQWxsQ2hpbGRyZW4obm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzRW50cmllcyhmbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjUHJvY2Vzc2luZyAke3RoaXMuZW50cmllcy5sZW5ndGh9IGxheWVycy4uLmAsIGNvbnNvbGVUaGVtZS5wcmltYXJ5KTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgUHJvY2Vzc2luZyAke3RoaXMuZW50cmllcy5sZW5ndGh9IGxheWVycy4uLmAsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAsXG4gICAgICAgICAgICAgICAgb25EZXF1ZXVlOiAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Rocm91Z2hFbnRyaWVzKHRoaXMuY29tcGxldGVkRW50cmllcywgZm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ0NvbXBsZXRlZCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGEgdGltZW91dCBvZiAxNSBtaW5zIHRvIHJlamVjdCB0aGUgb3BlcmF0aW9uIGFuZCBjbG9zZSB0aGUgcGx1Z2luLCBpbiBjYXNlIHRoZSBwbHVnaW4gaGFuZ3MuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWplY3QsIDkwMDAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb2Nlc3NUaHJvdWdoRW50cmllcyhlbnRyeUluZGV4LCBmbikge1xuICAgICAgICBsZXQgZW50cnkgPSB0aGlzLmVudHJpZXNbZW50cnlJbmRleF07XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjUHJvY2Vzc2luZyAke2VudHJ5Lm5vZGUubmFtZX0uLi4gJHt0aGlzLmNvbXBsZXRlZEVudHJpZXMgKyAxfSAvICR7dGhpcy5lbnRyaWVzLmxlbmd0aH1gLCBjb25zb2xlVGhlbWUucHJpbWFyeSk7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoYFByb2Nlc3NpbmcgJHtlbnRyeS5ub2RlLm5hbWV9Li4uICR7dGhpcy5jb21wbGV0ZWRFbnRyaWVzICsgMX0gLyAke3RoaXMuZW50cmllcy5sZW5ndGh9YCwge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwLFxuICAgICAgICAgICAgICAgIG9uRGVxdWV1ZTogKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFYWNoRW50cnkoZW50cnksIGZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZ0NvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NFYWNoRW50cnkoZW50cnksIGZuKSB7XG4gICAgICAgIGZuKGVudHJ5Lm5vZGUsIGVudHJ5LnJlZmVyZW5jZSwgZW50cnkudG9wTGV2ZWwpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZEVudHJpZXMgKz0gMTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVGhyb3VnaEVudHJpZXModGhpcy5jb21wbGV0ZWRFbnRyaWVzLCBmbik7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBUeXBlcyAqLyBpbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbi8qIEhlbHBlcnMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuL2NvcmUvcmVzZXQtbGlicmFyeVwiO1xuLyogTW9kdWxlcyAqLyBpbXBvcnQgKiBhcyBwYWRkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvcGFkZGluZ1wiO1xuaW1wb3J0ICogYXMgc3BhY2luZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwYWNpbmdcIjtcbmltcG9ydCAqIGFzIGRpbWVuc2lvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9kaW1lbnNpb25cIjtcbmltcG9ydCAqIGFzIGZpdCBmcm9tIFwiLi9jb21wb25lbnRzL2ZpdFwiO1xuaW1wb3J0ICogYXMgcmFkaXVzIGZyb20gXCIuL2NvbXBvbmVudHMvcmFkaXVzXCI7XG5pbXBvcnQgKiBhcyB2aXNpYmlsdHkgZnJvbSBcIi4vY29tcG9uZW50cy92aXNpYmlsaXR5XCI7XG5pbXBvcnQgKiBhcyBtb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kZVwiO1xuaW1wb3J0ICogYXMgdHlwb2dyYXBoeSBmcm9tIFwiLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcbmV4cG9ydCBjb25zdCBtb2R1bGUgPSBuZXcgT3BlcmF0aW9uTW9kdWxlKFwiY3VzdG9tXCIsIHRydWUsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIFNob3cgVUkuXG4gICAgZmlnbWEuc2hvd1VJKF9fdWlGaWxlc19fLmN1c3RvbVByb3BlcnRpZXMsIHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiA4MDAsIHRoZW1lQ29sb3JzOiB0cnVlIH0pO1xuICAgIC8vIExpc3RlbiBmb3IgVUkgdXBkYXRlcy5cbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5jb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKG1lc3NhZ2UuYXJncy53aWR0aCwgbWVzc2FnZS5hcmdzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhcnRSZXNldHRpbmdcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBtYXRjaChtZXNzYWdlLmFyZ3MuaW5wdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59KSk7XG5mdW5jdGlvbiBtYXRjaChpbnB1dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgICAgICBcIkxheWVycyBwcm9jZXNzZWRcIjogMCxcbiAgICAgICAgICAgIFwiVmlzaWJpbGl0eVwiOiAwLFxuICAgICAgICAgICAgXCJGaXRcIjogMCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICBcIldpZHRoXCI6IDAsIFwiSGVpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJNYXgtd2lkdGhcIjogMCwgXCJNaW4td2lkdGhcIjogMCwgXCJNYXgtaGVpZ2h0XCI6IDAsIFwiTWluLWhlaWdodFwiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIFwiVG9wXCI6IDAsIFwiQm90dG9tXCI6IDAsIFwiTGVmdFwiOiAwLCBcIlJpZ2h0XCI6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgICAgIFwiSXRlbSBzcGFjaW5nXCI6IDAsIFwiQ291bnRlciBheGlzIHNwYWNpbmdcIjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYWRpdXM6IHtcbiAgICAgICAgICAgICAgICBcIlRvcCBsZWZ0XCI6IDAsIFwiVG9wIHJpZ2h0XCI6IDAsIFwiQm90dG9tIHJpZ2h0XCI6IDAsIFwiQm90dG9tIGxlZnRcIjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIk1vZGVzXCI6IDBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gRmluZCBvdXQgaWYgYW55IHByb3BlcnR5IGV4Y2VwdCB0eXBvZ3JhcGh5IGhhcyBiZWVuIHNlbGVjdGVkIGZvciBhIHJlc2V0LlxuICAgICAgICBsZXQgaW5wdXRDaGVjayA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcbiAgICAgICAgZGVsZXRlIGlucHV0Q2hlY2sudHlwb2dyYXBoeTtcbiAgICAgICAgbGV0IHVzZXJJbnB1dEZvck5vblR5cG9Qcm9wZXJ0aWVzID0gT2JqZWN0LnZhbHVlcyhpbnB1dENoZWNrKTtcbiAgICAgICAgaWYgKHVzZXJJbnB1dEZvck5vblR5cG9Qcm9wZXJ0aWVzLmluY2x1ZGVzKHRydWUpKSB7XG4gICAgICAgICAgICBsZXQgbGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgICAgICAgICB5aWVsZCBsaWJyYXJ5LmFkZE5vZGVzRnJvbVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgeWllbGQgbGlicmFyeS5wcm9jZXNzRW50cmllcygobm9kZSwgcmVmZXJlbmNlLCB0b3BMZXZlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlLmlzRmlnbWFMYXllcihub2RlKSAmJiB0eXBlLmlzRmlnbWFMYXllcihyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZFtcIkxheWVycyBwcm9jZXNzZWRcIl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQud2lkdGggJiYgaW5wdXQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpbWVuc2lvbnNSZXNldCA9IGRpbWVuc2lvbnMubWF0Y2hXaWR0aEFuZEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zLldpZHRoICs9IGRpbWVuc2lvbnNSZXNldFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9ucy5IZWlnaHQgKz0gZGltZW5zaW9uc1Jlc2V0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9ucy5XaWR0aCArPSBkaW1lbnNpb25zLm1hdGNoV2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zLldpZHRoICs9IGRpbWVuc2lvbnMubWF0Y2hIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5tYXhXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWF4V2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5taW5XaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1pbi13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWluV2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5tYXhIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNYXgtaGVpZ2h0XCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNYXhIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5taW5IZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNaW4taGVpZ2h0XCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNaW5IZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgZXhwbGljaXQgdmFyaWFibGUgbW9kZXMgb24gaW5zdGFuY2Ugc3VibGF5ZXJzIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZCBpbiB0aGUgRmlnbWEgQVBJLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiTW9kZXNcIl0gKz0gbW9kZS5tYXRjaEFsbChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC52aXNpYmlsaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiVmlzaWJpbGl0eVwiXSArPSB2aXNpYmlsdHkubWF0Y2gobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUuY2FuQXV0b2xheW91dChub2RlKSAmJiB0eXBlLmNhbkF1dG9sYXlvdXQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmRbXCJGaXRcIl0gKz0gZml0Lm1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQucGFkZGluZ1RvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIlRvcFwiXSArPSBwYWRkaW5nLm1hdGNoVG9wUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnBhZGRpbmdCb3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJCb3R0b21cIl0gKz0gcGFkZGluZy5tYXRjaEJvdHRvbVBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5wYWRkaW5nTGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIkxlZnRcIl0gKz0gcGFkZGluZy5tYXRjaExlZnRQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQucGFkZGluZ1JpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiUmlnaHRcIl0gKz0gcGFkZGluZy5tYXRjaFJpZ2h0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lml0ZW1TcGFjaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5zcGFjaW5nW1wiSXRlbSBzcGFjaW5nXCJdICs9IHNwYWNpbmcubWF0Y2hJdGVtU3BhY2luZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmNvdW50ZXJBeGlzU3BhY2luZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNhcmQuc3BhY2luZ1tcIkNvdW50ZXIgYXhpcyBzcGFjaW5nXCJdICs9IHNwYWNpbmcubWF0Y2hDb3VudGVyQXhpc1NwYWNpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaXVzLmNhbkhhdmVSYWRpaShub2RlKSAmJiByYWRpdXMuY2FuSGF2ZVJhZGlpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5yYWRpdXNUb3BMZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJUb3AgbGVmdFwiXSArPSByYWRpdXMubWF0Y2hUb3BMZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQucmFkaXVzVG9wUmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIlRvcCByaWdodFwiXSArPSByYWRpdXMubWF0Y2hUb3BSaWdodFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnJhZGl1c0JvdHRvbVJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJCb3R0b20gcmlnaHRcIl0gKz0gcmFkaXVzLm1hdGNoQm90dG9tUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5yYWRpdXNCb3R0b21MZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJCb3R0b20gbGVmdFwiXSArPSByYWRpdXMubWF0Y2hCb3R0b21MZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQudHlwb2dyYXBoeSlcbiAgICAgICAgICAgIHlpZWxkIHR5cG9ncmFwaHkubWF0Y2hBbGwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coc2NvcmVDYXJkKTtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBUeXBlcyAqLyBpbXBvcnQgKiBhcyB0eXBlIGZyb20gXCIuLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS90eXBlZ3JvdXBzXCI7XG4vKiBTeXN0ZW0gKi8gaW1wb3J0IHsgT3BlcmF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL21vZHVsZXNcIjtcbi8qIENvbXBvbmVudHMgKi8gaW1wb3J0IHsgUmVzZXRQcm9wZXJ0aWVzTGlicmFyeSB9IGZyb20gXCIuL2NvcmUvcmVzZXQtbGlicmFyeVwiO1xuaW1wb3J0ICogYXMgcGFkZGluZyBmcm9tIFwiLi9jb21wb25lbnRzL3BhZGRpbmdcIjtcbmltcG9ydCAqIGFzIHNwYWNpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9zcGFjaW5nXCI7XG5pbXBvcnQgKiBhcyBkaW1lbnNpb25zIGZyb20gXCIuL2NvbXBvbmVudHMvZGltZW5zaW9uXCI7XG5pbXBvcnQgKiBhcyBmaXQgZnJvbSBcIi4vY29tcG9uZW50cy9maXRcIjtcbmltcG9ydCAqIGFzIHJhZGl1cyBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGl1c1wiO1xuaW1wb3J0ICogYXMgdmlzaWJpbHR5IGZyb20gXCIuL2NvbXBvbmVudHMvdmlzaWJpbGl0eVwiO1xuaW1wb3J0ICogYXMgbW9kZSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGVcIjtcbmltcG9ydCAqIGFzIHR5cG9ncmFwaHkgZnJvbSBcIi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XG5leHBvcnQgY29uc3QgbW9kdWxlID0gbmV3IE9wZXJhdGlvbk1vZHVsZShcImV2ZXJ5dGhpbmdcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIFwiTGF5ZXJzIHByb2Nlc3NlZFwiOiAwLFxuICAgICAgICBcIlZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgXCJGaXRcIjogMCxcbiAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgXCJXaWR0aFwiOiAwLCBcIkhlaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJNYXgtd2lkdGhcIjogMCwgXCJNaW4td2lkdGhcIjogMCwgXCJNYXgtaGVpZ2h0XCI6IDAsIFwiTWluLWhlaWdodFwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIFwiVG9wXCI6IDAsIFwiQm90dG9tXCI6IDAsIFwiTGVmdFwiOiAwLCBcIlJpZ2h0XCI6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIFwiSXRlbSBzcGFjaW5nXCI6IDAsIFwiQ291bnRlciBheGlzIHNwYWNpbmdcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBcIlRvcCBsZWZ0XCI6IDAsIFwiVG9wIHJpZ2h0XCI6IDAsIFwiQm90dG9tIHJpZ2h0XCI6IDAsIFwiQm90dG9tIGxlZnRcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb2Rlc1wiOiAwXG4gICAgfTtcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgbGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oKTtcbiAgICB5aWVsZCBsaWJyYXJ5LnByb2Nlc3NFbnRyaWVzKChub2RlLCByZWZlcmVuY2UsIHRvcExldmVsKSA9PiB7XG4gICAgICAgIGlmICh0eXBlLmlzRmlnbWFMYXllcihub2RlKSAmJiB0eXBlLmlzRmlnbWFMYXllcihyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBzY29yZUNhcmRbXCJMYXllcnMgcHJvY2Vzc2VkXCJdICs9IDE7XG4gICAgICAgICAgICBpZiAodG9wTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGltZW5zaW9uc1Jlc2V0ID0gZGltZW5zaW9ucy5tYXRjaFdpZHRoQW5kSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnMuV2lkdGggKz0gZGltZW5zaW9uc1Jlc2V0WzBdO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zLkhlaWdodCArPSBkaW1lbnNpb25zUmVzZXRbMV07XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNYXgtd2lkdGhcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1heFdpZHRoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNaW4td2lkdGhcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1pbldpZHRoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNYXgtaGVpZ2h0XCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNYXhIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1pbi1oZWlnaHRcIl0gKz0gZGltZW5zaW9ucy5tYXRjaE1pbkhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgZXhwbGljaXQgdmFyaWFibGUgbW9kZXMgb24gaW5zdGFuY2Ugc3VibGF5ZXJzIGlzIGN1cnJlbnRseSB1bnN1cHBvcnRlZCBpbiB0aGUgRmlnbWEgQVBJLlxuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZFtcIk1vZGVzXCJdICs9IG1vZGUubWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjb3JlQ2FyZFtcIlZpc2liaWxpdHlcIl0gKz0gdmlzaWJpbHR5Lm1hdGNoKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBpZiAodHlwZS5jYW5BdXRvbGF5b3V0KG5vZGUpICYmIHR5cGUuY2FuQXV0b2xheW91dChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkW1wiRml0XCJdICs9IGZpdC5tYXRjaEFsbChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiVG9wXCJdICs9IHBhZGRpbmcubWF0Y2hUb3BQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJCb3R0b21cIl0gKz0gcGFkZGluZy5tYXRjaEJvdHRvbVBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIkxlZnRcIl0gKz0gcGFkZGluZy5tYXRjaExlZnRQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJSaWdodFwiXSArPSBwYWRkaW5nLm1hdGNoUmlnaHRQYWRkaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnNwYWNpbmdbXCJJdGVtIHNwYWNpbmdcIl0gKz0gc3BhY2luZy5tYXRjaEl0ZW1TcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnNwYWNpbmdbXCJDb3VudGVyIGF4aXMgc3BhY2luZ1wiXSArPSBzcGFjaW5nLm1hdGNoQ291bnRlckF4aXNTcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFkaXVzLmNhbkhhdmVSYWRpaShub2RlKSAmJiByYWRpdXMuY2FuSGF2ZVJhZGlpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiVG9wIGxlZnRcIl0gKz0gcmFkaXVzLm1hdGNoVG9wTGVmdFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJUb3AgcmlnaHRcIl0gKz0gcmFkaXVzLm1hdGNoVG9wUmlnaHRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiQm90dG9tIHJpZ2h0XCJdICs9IHJhZGl1cy5tYXRjaEJvdHRvbVJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVDYXJkLnJhZGl1c1tcIkJvdHRvbSBsZWZ0XCJdICs9IHJhZGl1cy5tYXRjaEJvdHRvbUxlZnRSYWRpdXMobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHlpZWxkIHR5cG9ncmFwaHkubWF0Y2hBbGwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhzY29yZUNhcmQpO1xuICAgIGZpZ21hLm5vdGlmeShcIlByb2Nlc3MgY29tcGxldGVkLlwiLCB7IHRpbWVvdXQ6IDUwMCB9KTtcbn0pKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyogVHlwZXMgKi8gaW1wb3J0ICogYXMgdHlwZSBmcm9tIFwiLi4vLi4vbGlicmFyeS9maWdtYS9zeXN0ZW0vdHlwZWdyb3Vwc1wiO1xuLyogU3lzdGVtICovIGltcG9ydCB7IE9wZXJhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2ZpZ21hL3N5c3RlbS9tb2R1bGVzXCI7XG4vKiBDb21wb25lbnRzICovIGltcG9ydCB7IFJlc2V0UHJvcGVydGllc0xpYnJhcnkgfSBmcm9tIFwiLi9jb3JlL3Jlc2V0LWxpYnJhcnlcIjtcbmltcG9ydCAqIGFzIHBhZGRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9wYWRkaW5nXCI7XG5pbXBvcnQgKiBhcyBzcGFjaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvc3BhY2luZ1wiO1xuaW1wb3J0ICogYXMgZGltZW5zaW9ucyBmcm9tIFwiLi9jb21wb25lbnRzL2RpbWVuc2lvblwiO1xuaW1wb3J0ICogYXMgZml0IGZyb20gXCIuL2NvbXBvbmVudHMvZml0XCI7XG5pbXBvcnQgKiBhcyByYWRpdXMgZnJvbSBcIi4vY29tcG9uZW50cy9yYWRpdXNcIjtcbmltcG9ydCAqIGFzIHZpc2liaWx0eSBmcm9tIFwiLi9jb21wb25lbnRzL3Zpc2liaWxpdHlcIjtcbmltcG9ydCAqIGFzIG1vZGUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RlXCI7XG5pbXBvcnQgKiBhcyB0eXBvZ3JhcGh5IGZyb20gXCIuL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xuZXhwb3J0IGNvbnN0IG1vZHVsZSA9IG5ldyBPcGVyYXRpb25Nb2R1bGUoXCJvdXRlcm1vc3RcIiwgZmFsc2UsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBzY29yZUNhcmQgPSB7XG4gICAgICAgIFwiTGF5ZXJzIHByb2Nlc3NlZFwiOiAwLFxuICAgICAgICBcIlZpc2liaWxpdHlcIjogMCxcbiAgICAgICAgXCJGaXRcIjogMCxcbiAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgXCJXaWR0aFwiOiAwLCBcIkhlaWdodFwiOiAwLFxuICAgICAgICAgICAgXCJNYXgtd2lkdGhcIjogMCwgXCJNaW4td2lkdGhcIjogMCwgXCJNYXgtaGVpZ2h0XCI6IDAsIFwiTWluLWhlaWdodFwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIFwiVG9wXCI6IDAsIFwiQm90dG9tXCI6IDAsIFwiTGVmdFwiOiAwLCBcIlJpZ2h0XCI6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIFwiSXRlbSBzcGFjaW5nXCI6IDAsIFwiQ291bnRlciBheGlzIHNwYWNpbmdcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBcIlRvcCBsZWZ0XCI6IDAsIFwiVG9wIHJpZ2h0XCI6IDAsIFwiQm90dG9tIHJpZ2h0XCI6IDAsIFwiQm90dG9tIGxlZnRcIjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb2Rlc1wiOiAwXG4gICAgfTtcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBSZXNldFByb3BlcnRpZXNMaWJyYXJ5KCk7XG4gICAgeWllbGQgbGlicmFyeS5hZGROb2Rlc0Zyb21TZWxlY3Rpb24oZmFsc2UpO1xuICAgIHlpZWxkIGxpYnJhcnkucHJvY2Vzc0VudHJpZXMoKG5vZGUsIHJlZmVyZW5jZSwgdG9wTGV2ZWwpID0+IHtcbiAgICAgICAgc2NvcmVDYXJkW1wiTGF5ZXJzIHByb2Nlc3NlZFwiXSArPSAxO1xuICAgICAgICBzY29yZUNhcmRbXCJWaXNpYmlsaXR5XCJdICs9IHZpc2liaWx0eS5tYXRjaChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICBpZiAodHlwZS5pc0ZpZ21hTGF5ZXIobm9kZSkgJiYgdHlwZS5pc0ZpZ21hTGF5ZXIocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgbGV0IGRpbWVuc2lvbnNSZXNldCA9IGRpbWVuc2lvbnMubWF0Y2hXaWR0aEFuZEhlaWdodChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJXaWR0aFwiXSArPSBkaW1lbnNpb25zUmVzZXRbMF07XG4gICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIkhlaWdodFwiXSArPSBkaW1lbnNpb25zUmVzZXRbMV07XG4gICAgICAgICAgICBzY29yZUNhcmQuZGltZW5zaW9uc1tcIk1heC13aWR0aFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWF4V2lkdGgobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWluLXdpZHRoXCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNaW5XaWR0aChub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLmRpbWVuc2lvbnNbXCJNYXgtaGVpZ2h0XCJdICs9IGRpbWVuc2lvbnMubWF0Y2hNYXhIZWlnaHQobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5kaW1lbnNpb25zW1wiTWluLWhlaWdodFwiXSArPSBkaW1lbnNpb25zLm1hdGNoTWluSGVpZ2h0KG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIGV4cGxpY2l0IHZhcmlhYmxlIG1vZGVzIG9uIGluc3RhbmNlIHN1YmxheWVycyBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWQgaW4gdGhlIEZpZ21hIEFQSS5cbiAgICAgICAgICAgIHNjb3JlQ2FyZFtcIk1vZGVzXCJdICs9IG1vZGUubWF0Y2hBbGwobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5jYW5BdXRvbGF5b3V0KG5vZGUpICYmIHR5cGUuY2FuQXV0b2xheW91dChyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBzY29yZUNhcmRbXCJGaXRcIl0gKz0gZml0Lm1hdGNoQWxsKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucGFkZGluZ1tcIlRvcFwiXSArPSBwYWRkaW5nLm1hdGNoVG9wUGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnBhZGRpbmdbXCJCb3R0b21cIl0gKz0gcGFkZGluZy5tYXRjaEJvdHRvbVBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiTGVmdFwiXSArPSBwYWRkaW5nLm1hdGNoTGVmdFBhZGRpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5wYWRkaW5nW1wiUmlnaHRcIl0gKz0gcGFkZGluZy5tYXRjaFJpZ2h0UGFkZGluZyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICAgICAgc2NvcmVDYXJkLnNwYWNpbmdbXCJJdGVtIHNwYWNpbmdcIl0gKz0gc3BhY2luZy5tYXRjaEl0ZW1TcGFjaW5nKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQuc3BhY2luZ1tcIkNvdW50ZXIgYXhpcyBzcGFjaW5nXCJdICs9IHNwYWNpbmcubWF0Y2hDb3VudGVyQXhpc1NwYWNpbmcobm9kZSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFkaXVzLmNhbkhhdmVSYWRpaShub2RlKSAmJiByYWRpdXMuY2FuSGF2ZVJhZGlpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHNjb3JlQ2FyZC5yYWRpdXNbXCJUb3AgbGVmdFwiXSArPSByYWRpdXMubWF0Y2hUb3BMZWZ0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiVG9wIHJpZ2h0XCJdICs9IHJhZGl1cy5tYXRjaFRvcFJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiQm90dG9tIHJpZ2h0XCJdICs9IHJhZGl1cy5tYXRjaEJvdHRvbVJpZ2h0UmFkaXVzKG5vZGUsIHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBzY29yZUNhcmQucmFkaXVzW1wiQm90dG9tIGxlZnRcIl0gKz0gcmFkaXVzLm1hdGNoQm90dG9tTGVmdFJhZGl1cyhub2RlLCByZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgeWllbGQgdHlwb2dyYXBoeS5tYXRjaEFsbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlQ2FyZCk7XG4gICAgZmlnbWEubm90aWZ5KFwiUHJvY2VzcyBjb21wbGV0ZWQuXCIsIHsgdGltZW91dDogNTAwIH0pO1xufSkpO1xuIiwiZXhwb3J0IGNvbnN0IHByaW1hcnkgPSBcImNvbG9yOiAjOTc0N0ZGO1wiO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeSA9IFwiY29sb3I6ICNDMTkxRkY7XCI7XG5leHBvcnQgY29uc3QgZXJyb3IgPSBcImNvbG9yOiAjZjMwO1wiO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBDbGFzcyBmb3Igc3RvcmluZyBxdWljayBhY3Rpb24gcGFyYW1ldGVycyBmb3IgZWFjaCBtb2R1bGUuXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21tYW5kLCBoYXNVSSwgZm4pIHtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICAgICAgdGhpcy5oYXNVSSA9IGhhc1VJO1xuICAgICAgICB0aGlzLnVzZXJQYXJhbWV0ZXJzID0ge307XG4gICAgICAgIGNvbnN0IEFzeW5jRnVuY3Rpb24gPSAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyB9KSkuY29uc3RydWN0b3I7XG4gICAgICAgIHRoaXMuaXNBc3luYyA9IGZuIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbjtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgIH1cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgTWV0aG9kcyBmb3Igc2V0dGluZyB1cCBxdWljayBhY3Rpb24gcGFyYW1ldGVycy5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy8gU2V0IHBhcmFtZXRlcnMuXG4gICAgc2V0UGFyYW1ldGVyU3VnZ2VzdGlvbihrZXksIHBhcmFtZXRlclN1Z2dlc3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMudXNlclBhcmFtZXRlcnNba2V5XSlcbiAgICAgICAgICAgIHRoaXMudXNlclBhcmFtZXRlcnNba2V5XS5wdXNoKHBhcmFtZXRlclN1Z2dlc3Rpb24pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnVzZXJQYXJhbWV0ZXJzW2tleV0gPSBbcGFyYW1ldGVyU3VnZ2VzdGlvbl07XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBNZXRob2RzIGZvciByZXRyaWV2aW5nIHF1aWNrIGFjdGlvbiBwYXJhbWV0ZXJzLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvLyBHZXQgY29tbWFuZC5cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgIHBhcmFtZXRlckV4aXN0cyhrZXksIHBhcmFtZXRlcikge1xuICAgICAgICBpZiAodGhpcy51c2VyUGFyYW1ldGVyc1trZXldLmluZGV4T2YocGFyYW1ldGVyKSA+PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gUmV0cmlldmVzIGEgbGlzdCBvZiBzdWdnZXN0ZWQgcGFyYW1ldGVycy5cbiAgICBnZXRQYXJhbWV0ZXJTdWdnZXN0aW9ucyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclBhcmFtZXRlcnNba2V5XSB8fCBbXTtcbiAgICB9XG4gICAgcnVuKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB1c2VySW5wdXQgPSBwYXJhbWV0ZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBc3luYylcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5mbih1c2VySW5wdXQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZuKHVzZXJJbnB1dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNb2R1bGVMaWJyYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBsb2FkTW9kdWxlKG1vZHVsZSkge1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG1vZHVsZS5nZXRDb21tYW5kKCksIG1vZHVsZSk7XG4gICAgfVxuICAgIG1hdGNoQ29tbWFuZFRvTW9kdWxlKGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTW9kdWxlID0gdGhpcy5tb2R1bGVzLmdldChjb21tYW5kKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkTW9kdWxlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkTW9kdWxlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4vLyBMb2FkIG1vZHVsZSBkYXRhIGZvciBkaXNwbGF5aW5nIGluIHRoZSBxdWljayBhY3Rpb24gdGFza2Jhci5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKG1vZHVsZXMpIHtcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBNb2R1bGVMaWJyYXJ5O1xuICAgIGlmIChtb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGxpYnJhcnkubG9hZE1vZHVsZShtb2R1bGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjTW9kdWxlIGxvYWRlZDogJHttb2R1bGUuZ2V0Q29tbWFuZCgpfWAsIFwiY29sb3I6ICNjY2NcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpYnJhcnk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgaXNGaWdtYUxheWVyID0gKG5vZGUpID0+IChub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDT01QT05FTlRfU0VUXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlNFQ1RJT05cIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJFTExJUFNFXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlNUQVJcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJWRUNUT1JcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJURVhUXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQk9PTEVBTl9PUEVSQVRJT05cIik7XG5leHBvcnQgY29uc3QgaXNSZXNpemFibGUgPSAobm9kZSkgPT4gKGlzRmlnbWFMYXllcihub2RlKSk7XG5leHBvcnQgY29uc3QgaXNQYXJlbnRhYmxlID0gKG5vZGUpID0+IChub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDT01QT05FTlRfU0VUXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICBub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4gICAgbm9kZS50eXBlID09PSBcIlNFQ1RJT05cIik7XG5leHBvcnQgY29uc3QgY2FuQXV0b2xheW91dCA9IChub2RlKSA9PiAoaXNGaWdtYUxheWVyKG5vZGUpICYmXG4gICAgKG5vZGUudHlwZSAhPT0gXCJHUk9VUFwiICYmXG4gICAgICAgIG5vZGUudHlwZSAhPT0gXCJTRUNUSU9OXCIpKTtcbmV4cG9ydCBjb25zdCBjYW5CZUZpbGxlZCA9IChub2RlKSA9PiAoaXNGaWdtYUxheWVyKG5vZGUpICYmXG4gICAgbm9kZS50eXBlICE9PSBcIkdST1VQXCIpO1xuZXhwb3J0IGNvbnN0IGNhbkJlU3Ryb2tlZCA9IChub2RlKSA9PiAoaXNGaWdtYUxheWVyKG5vZGUpICYmXG4gICAgKG5vZGUudHlwZSAhPT0gXCJHUk9VUFwiICYmXG4gICAgICAgIG5vZGUudHlwZSAhPT0gXCJTRUNUSU9OXCIpKTtcbiIsIi8qIFR5cGVzICovIGltcG9ydCAqIGFzIHR5cGUgZnJvbSBcIi4uLy4uL2xpYnJhcnkvZmlnbWEvc3lzdGVtL3R5cGVncm91cHNcIjtcbi8vIFJldHVybnMgYSBib29sZWFuIGJhc2VkIG9uIHdoZXRoZXIgbm9kZSBpcyBuZXN0ZWQgd2l0aGluIGFuIGluc3RhbmNlLFxuLy8gYSBzdHJpbmcgb2Ygbm9uLXplcm8gbGVuZ3RoIGNvbnRhaW5pbmcgdGhlIGluc3RhbmNlIGlkLFxuLy8gYW5kIHRoZSBwYXRoIHRvIHRoZSByZWZlcmVuY2UgbGF5ZXIgd2l0aGluIHRoZSBjb21wb25lbnQuXG5leHBvcnQgZnVuY3Rpb24gd2l0aGluSW5zdGFuY2Uobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZSwgaW5zdGFuY2VJZCA9IFwiXCIsIHBhdGggPSBbXSwgY3VycmVudFRhcmdldCA9IG5vZGU7XG4gICAgZG8ge1xuICAgICAgICBsZXQgcGFyZW50SWQgPSAoY3VycmVudFRhcmdldC5wYXJlbnQpID8gY3VycmVudFRhcmdldC5wYXJlbnQuaWQgOiBcIlwiO1xuICAgICAgICBsZXQgcGFyZW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgobikgPT4gKG4uaWQgPT09IHBhcmVudElkKSkgfHwgZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgICAgIGlmIChwYXJlbnQudHlwZSAhPT0gXCJQQUdFXCIgJiYgdHlwZS5pc1BhcmVudGFibGUocGFyZW50KSkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGN1cnJlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUlkID0gcGFyZW50LmlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBicmVhaztcbiAgICB9IHdoaWxlICghcmVzdWx0KTtcbiAgICBwYXRoLnJldmVyc2UoKTtcbiAgICByZXR1cm4geyB0cnVlOiByZXN1bHQsIGluc3RhbmNlSWQ6IGluc3RhbmNlSWQsIHBhdGg6IHBhdGggfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vKiBNb2R1bGVzICovIGltcG9ydCAqIGFzIG1vZHVsZXMgZnJvbSBcIi4vc3lzdGVtL21vZHVsZXNcIjtcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tIFwiLi4vLi4vY3VzdG9tL21vZHVsZS1saWJyYXJ5XCI7XG4vLyBMb2cgdG8gY29uc29sZSBmb3IgZGVidWdnaW5nLlxuY29uc29sZS5sb2coXCIlY1BsdWdpbiBoYXMgc3RhcnRlZC5cIiwgXCJjb2xvcjogI2NjY1wiKTtcbi8vIExvYWQgbW9kdWxlcy5cbmxldCBwbHVnaW5Nb2R1bGVzID0gbW9kdWxlcy5sb2FkKGxpYnJhcnkpO1xuLy8gU2V0IHN1Z2dlc3Rpb25zIGZvciBpbnB1dCBwYXJhbWV0ZXJzLlxuZmlnbWEucGFyYW1ldGVycy5vbihcImlucHV0XCIsICh7IHBhcmFtZXRlcnMsIGtleSwgcmVzdWx0IH0pID0+IHtcbiAgICBpZiAocGx1Z2luTW9kdWxlcykge1xuICAgICAgICBsZXQgc2VsZWN0ZWRNb2R1bGUgPSBwbHVnaW5Nb2R1bGVzLm1hdGNoQ29tbWFuZFRvTW9kdWxlKGZpZ21hLmNvbW1hbmQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNb2R1bGUpXG4gICAgICAgICAgICByZXN1bHQuc2V0U3VnZ2VzdGlvbnMoc2VsZWN0ZWRNb2R1bGUuZ2V0UGFyYW1ldGVyU3VnZ2VzdGlvbnMoa2V5KSk7XG4gICAgfVxufSk7XG4vLyBXaGVuIHBsdWdpbiBpcyBydW5uaW5nLlxuZmlnbWEub24oXCJydW5cIiwgKHsgcGFyYW1ldGVycyB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBMb2cgdXNlciBpbnB1dCB0byBjb25zb2xlLlxuICAgIGlmIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY1VzZXIgaW5wdXQgbG9nZ2VkOmAsIFwiY29sb3I6ICNjY2NcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICAvLyBObyBtb2R1bGVzIGxvYWRlZC5cbiAgICBpZiAoIXBsdWdpbk1vZHVsZXMpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiTm8gb3BlcmF0aW9uIG1vZHVsZXMgbG9hZGVkLlwiLCB7IHRpbWVvdXQ6IDUwMDAsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH1cbiAgICAvLyBSdW4gbW9kdWxlIGlmIGl0IGlzIGZvdW5kLlxuICAgIGlmIChwbHVnaW5Nb2R1bGVzKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZE1vZHVsZSA9IHBsdWdpbk1vZHVsZXMubWF0Y2hDb21tYW5kVG9Nb2R1bGUoZmlnbWEuY29tbWFuZCk7XG4gICAgICAgIGlmIChzZWxlY3RlZE1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTW9kdWxlLmlzQXN5bmMpXG4gICAgICAgICAgICAgICAgeWllbGQgc2VsZWN0ZWRNb2R1bGUucnVuKHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkTW9kdWxlLnJ1bihwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGlmICghc2VsZWN0ZWRNb2R1bGUuaGFzVUkpXG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdGVkIG9wZXJhdGlvbiBoYXMgbm8gY29ycmVzcG9uZGluZyBtb2R1bGUgbG9hZGVkISBDbG9zaW5nIHBsdWdpbi4uLlwiLCB7IHRpbWVvdXQ6IDUwMDAsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBubyBpbnB1dCBoYXMgYmVlbiByZWNlaXZlZC5cbiAgICBlbHNlXG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=