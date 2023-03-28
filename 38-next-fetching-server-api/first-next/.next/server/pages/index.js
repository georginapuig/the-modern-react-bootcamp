"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Index = ({ posts  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"next home page\"\n            }, void 0, false, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: post.title\n                }, post.id, false, {\n                    fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/index.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nIndex.getInitialProps = async ()=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\");\n    const { data  } = res;\n    return {\n        posts: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxRQUFRLENBQUMsRUFBRUMsTUFBSyxFQUFFLEdBQUs7SUFDM0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDOzhCQUFrQkQsS0FBS0UsS0FBSzttQkFBcEJGLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7O0FBSXhCO0FBRUFSLE1BQU1TLGVBQWUsR0FBRyxVQUFZO0lBQ2xDLE1BQU1DLE1BQU0sTUFBTVgsaURBQVMsQ0FBQztJQUM1QixNQUFNLEVBQUVhLEtBQUksRUFBRSxHQUFHRjtJQUNqQixPQUFPO1FBQUVULE9BQU9XO0lBQUs7QUFDdkI7QUFFQSxpRUFBZVosS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LW5leHQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+bmV4dCBob21lIHBhZ2U8L2gxPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT57cG9zdC50aXRsZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICByZXR1cm4geyBwb3N0czogZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJJbmRleCIsInBvc3RzIiwiZGl2IiwiaDEiLCJtYXAiLCJwb3N0IiwibGkiLCJ0aXRsZSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();