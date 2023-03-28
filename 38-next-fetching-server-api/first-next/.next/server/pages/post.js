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
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Post = ({ id , comments  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"comment for post number \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            comments.map((comment)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Comment, {\n                    ...comment,\n                    key: comment.id,\n                    __source: {\n                        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: undefined\n                }))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\nconst Comment = ({ email , body  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: [\n                    email,\n                    \": \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: body\n            }, void 0, false, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\nPost.getInitialProps = async ({ query  })=>{\n    console.log(query);\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);\n    const { data  } = res;\n    return {\n        ...query,\n        comments: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post); /************\n with router\n*************/  // import { withRouter } from 'next/router';\n // const Post = (props) => <h1>post number {props.router.query.id}</h1>;\n // export default withRouter(Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU8sQ0FBQyxFQUFFQyxHQUFFLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ2pDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOztvQkFBRztvQkFBeUJIOzs7Ozs7O1lBQzVCQyxTQUFTRyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IscURBQUNDO29CQUFTLEdBQUdELE9BQU87b0JBQUVFLEtBQUtGLFFBQVFMLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0FBRUEsTUFBTU0sVUFBVSxDQUFDLEVBQUVFLE1BQUssRUFBRUMsS0FBSSxFQUFFLGlCQUM5Qiw4REFBQ1A7OzBCQUNDLDhEQUFDUTs7b0JBQUlGO29CQUFNOzs7Ozs7OzBCQUNYLDhEQUFDRzswQkFBR0Y7Ozs7Ozs7Ozs7OztBQUlSVixLQUFLYSxlQUFlLEdBQUcsT0FBTyxFQUFFQyxNQUFLLEVBQUUsR0FBSztJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLE1BQU1HLE1BQU0sTUFBTWxCLGlEQUFTLENBQ3pCLENBQUMscURBQXFELEVBQUVlLE1BQU1iLEVBQUUsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sRUFBRWtCLEtBQUksRUFBRSxHQUFHRjtJQUNqQixPQUFPO1FBQUUsR0FBR0gsS0FBSztRQUFFWixVQUFVaUI7SUFBSztBQUNwQztBQUVBLGlFQUFlbkIsSUFBSUEsRUFBQyxDQUVwQjs7WUFFWSxJQUVaLDRDQUE0QztDQUU1Qyx3RUFBd0U7Q0FFeEUsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3QtbmV4dC8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBQb3N0ID0gKHsgaWQsIGNvbW1lbnRzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPmNvbW1lbnQgZm9yIHBvc3QgbnVtYmVyIHtpZH08L2gxPlxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICA8Q29tbWVudCB7Li4uY29tbWVudH0ga2V5PXtjb21tZW50LmlkfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDb21tZW50ID0gKHsgZW1haWwsIGJvZHkgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxoNT57ZW1haWx9OiA8L2g1PlxuICAgIDxwPntib2R5fTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc29sZS5sb2cocXVlcnkpO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0ke3F1ZXJ5LmlkfWBcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gIHJldHVybiB7IC4uLnF1ZXJ5LCBjb21tZW50czogZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuLyoqKioqKioqKioqKlxuIHdpdGggcm91dGVyXG4qKioqKioqKioqKioqL1xuXG4vLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vLyBjb25zdCBQb3N0ID0gKHByb3BzKSA9PiA8aDE+cG9zdCBudW1iZXIge3Byb3BzLnJvdXRlci5xdWVyeS5pZH08L2gxPjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlBvc3QiLCJpZCIsImNvbW1lbnRzIiwiZGl2IiwiaDEiLCJtYXAiLCJjb21tZW50IiwiQ29tbWVudCIsImtleSIsImVtYWlsIiwiYm9keSIsImg1IiwicCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJlcyIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();