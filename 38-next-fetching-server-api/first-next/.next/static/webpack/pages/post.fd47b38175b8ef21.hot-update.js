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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Post = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"post number \",\n            props.id\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georginapuig/code/georginapuig/the-modern-react-bootcamp/38-next-fetching-server-api/first-next/pages/post.js\",\n        lineNumber: 1,\n        columnNumber: 25\n    }, undefined);\n_c = Post;\nPost.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const res = await axios.get(\"https://jsonplaceholder.typicode.com/comments?postId=3\");\n    const { data  } = res;\n    return {\n        posts: data\n    };\n    // /post?id=${post.id}\n    console.log(query); // { id: \"2\" }\n    return {\n        id: query.id\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); /************\n with router\n*************/  // import { withRouter } from 'next/router';\n // const Post = (props) => <h1>post number {props.router.query.id}</h1>;\n // export default withRouter(Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPLENBQUNDLHNCQUFVLDhEQUFDQzs7WUFBRztZQUFhRCxNQUFNRSxFQUFFOzs7Ozs7O0tBQTNDSDtBQUVOQSxLQUFLSSxlQUFlLEdBQUcsZUFBcUI7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDckMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNQyxHQUFHLENBQ3pCO0lBRUYsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0g7SUFDakIsT0FBTztRQUFFSSxPQUFPRDtJQUFLO0lBQ3JCLHNCQUFzQjtJQUN0QkUsUUFBUUMsR0FBRyxDQUFDUCxRQUFRLGNBQWM7SUFDbEMsT0FBTztRQUFFRixJQUFJRSxNQUFNRixFQUFFO0lBQUM7QUFDeEI7QUFFQSwrREFBZUgsSUFBSUEsRUFBQyxDQUVwQjs7WUFFWSxJQUVaLDRDQUE0QztDQUU1Qyx3RUFBd0U7Q0FFeEUsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb3N0ID0gKHByb3BzKSA9PiA8aDE+cG9zdCBudW1iZXIge3Byb3BzLmlkfTwvaDE+O1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPTMnXG4gICk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICByZXR1cm4geyBwb3N0czogZGF0YSB9O1xuICAvLyAvcG9zdD9pZD0ke3Bvc3QuaWR9XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTsgLy8geyBpZDogXCIyXCIgfVxuICByZXR1cm4geyBpZDogcXVlcnkuaWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8qKioqKioqKioqKipcbiB3aXRoIHJvdXRlclxuKioqKioqKioqKioqKi9cblxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuLy8gY29uc3QgUG9zdCA9IChwcm9wcykgPT4gPGgxPnBvc3QgbnVtYmVyIHtwcm9wcy5yb3V0ZXIucXVlcnkuaWR9PC9oMT47XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUG9zdCk7XG4iXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiaDEiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post.js\n"));

/***/ })

});