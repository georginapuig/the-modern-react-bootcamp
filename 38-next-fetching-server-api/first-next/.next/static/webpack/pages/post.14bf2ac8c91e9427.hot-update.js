"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nconst Post = (param)=>{\n    let { id , comments  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"comment for post number \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            comments.map((comment)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Comment, {\n                    ...comment,\n                    key: comment.id,\n                    __source: {\n                        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: undefined\n                }))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Post;\nconst Comment = (param)=>/*#__PURE__*/ {\n    let { email , body  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: [\n                    email,\n                    \": \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: body\n            }, void 0, false, {\n                fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = Comment;\nPost.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://jsonplaceholder.typicode.com/comments?postId=\".concat(query));\n    const { data  } = res;\n    return {\n        ...query,\n        comments: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); /************\n with router\n*************/  // import { withRouter } from 'next/router';\n // const Post = (props) => <h1>post number {props.router.query.id}</h1>;\n // export default withRouter(Post);\nvar _c, _c1;\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c1, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU8sU0FBc0I7UUFBckIsRUFBRUMsR0FBRSxFQUFFQyxTQUFRLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7O29CQUFHO29CQUF5Qkg7Ozs7Ozs7WUFDNUJDLFNBQVNHLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYixxREFBQ0M7b0JBQVMsR0FBR0QsT0FBTztvQkFBRUUsS0FBS0YsUUFBUUwsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUFJN0M7S0FUTUQ7QUFXTixNQUFNTyxVQUFVLHVCQUNkO1FBRGUsRUFBRUUsTUFBSyxFQUFFQyxLQUFJLEVBQUU7V0FDOUIsOERBQUNQOzswQkFDQyw4REFBQ1E7O29CQUFJRjtvQkFBTTs7Ozs7OzswQkFDWCw4REFBQ0c7MEJBQUdGOzs7Ozs7Ozs7Ozs7QUFDRDtNQUpESDtBQU9OUCxLQUFLYSxlQUFlLEdBQUcsZUFBcUI7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDckMsTUFBTUMsTUFBTSxNQUFNaEIsaURBQVMsQ0FDekIsd0RBQThELE9BQU5lO0lBRTFELE1BQU0sRUFBRUcsS0FBSSxFQUFFLEdBQUdGO0lBQ2pCLE9BQU87UUFBRSxHQUFHRCxLQUFLO1FBQUVaLFVBQVVlO0lBQUs7QUFDcEM7QUFFQSwrREFBZWpCLElBQUlBLEVBQUMsQ0FFcEI7O1lBRVksSUFFWiw0Q0FBNEM7Q0FFNUMsd0VBQXdFO0NBRXhFLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0LmpzPzI1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUG9zdCA9ICh7IGlkLCBjb21tZW50cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5jb21tZW50IGZvciBwb3N0IG51bWJlciB7aWR9PC9oMT5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgPENvbW1lbnQgey4uLmNvbW1lbnR9IGtleT17Y29tbWVudC5pZH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ29tbWVudCA9ICh7IGVtYWlsLCBib2R5IH0pID0+IChcbiAgPGRpdj5cbiAgICA8aDU+e2VtYWlsfTogPC9oNT5cbiAgICA8cD57Ym9keX08L3A+XG4gIDwvZGl2PlxuKTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0ke3F1ZXJ5fWBcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gIHJldHVybiB7IC4uLnF1ZXJ5LCBjb21tZW50czogZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuLyoqKioqKioqKioqKlxuIHdpdGggcm91dGVyXG4qKioqKioqKioqKioqL1xuXG4vLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vLyBjb25zdCBQb3N0ID0gKHByb3BzKSA9PiA8aDE+cG9zdCBudW1iZXIge3Byb3BzLnJvdXRlci5xdWVyeS5pZH08L2gxPjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlBvc3QiLCJpZCIsImNvbW1lbnRzIiwiZGl2IiwiaDEiLCJtYXAiLCJjb21tZW50IiwiQ29tbWVudCIsImtleSIsImVtYWlsIiwiYm9keSIsImg1IiwicCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n"));

/***/ })

});