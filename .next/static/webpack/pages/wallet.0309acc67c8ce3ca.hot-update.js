"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wallet",{

/***/ "./components/LoginUD.js":
/*!*******************************!*\
  !*** ./components/LoginUD.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uauth/js */ \"./node_modules/@uauth/js/build/index.module.mjs\");\n/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ \"./components/callback.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginUD() {\n    _s();\n    var uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        clientID: \"db9bc76f-a465-483e-9022-de0bd19ffe95\",\n        redirectUri: \"http://localhost:3000\",\n        scope: \"openid wallet email profile:optional social:optional\"\n    });\n    var login = function() {\n        uauth.loginWithPopup().then(function(authorization) {\n            console.log(authorization);\n        });\n    };\n    var logout = function() {\n        uauth.logout();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var ref;\n        if (window.ethereum && ((ref = window.ethereum) === null || ref === void 0 ? void 0 : ref.selectedAddress)) {\n            router.push(\"/\");\n        }\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"Loginwithud\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: login,\n                style: {\n                    width: \"100px\",\n                    hight: \"50px\"\n                },\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: login,\n                style: {\n                    width: \"100px\",\n                    hight: \"50px\"\n                },\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginUD, \"CuHC/gmkH7n0V0sJOkcbkPBFVeg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginUD;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginUD);\nvar _c;\n$RefreshReg$(_c, \"LoginUD\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luVUQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ0k7QUFDTTtBQUNJO0FBRTVDLFNBQVNLLE9BQU8sR0FBRzs7SUFDakIsSUFBTUMsS0FBSyxHQUFHLElBQUlOLGlEQUFLLENBQUM7UUFDdEJPLFFBQVEsRUFBRSxzQ0FBc0M7UUFDaERDLFdBQVcsRUFBRSx1QkFBdUI7UUFDcENDLEtBQUssRUFBRSxzREFBc0Q7S0FDOUQsQ0FBQztJQUVGLElBQU1DLEtBQUssR0FBRyxXQUFNO1FBQ2xCSixLQUFLLENBQUNLLGNBQWMsRUFBRSxDQUFDQyxJQUFJLENBQUMsU0FBQ0MsYUFBYSxFQUFLO1lBQzdDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBTUcsTUFBTSxHQUFHLFdBQU07UUFDbkJWLEtBQUssQ0FBQ1UsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEYixnREFBUyxDQUFDLFdBQU07WUFDU2MsR0FBZTtRQUF0QyxJQUFJQSxNQUFNLENBQUNDLFFBQVEsSUFBSUQsQ0FBQUEsQ0FBQUEsR0FBZSxHQUFmQSxNQUFNLENBQUNDLFFBQVEsY0FBZkQsR0FBZSxXQUFpQixHQUFoQ0EsS0FBQUEsQ0FBZ0MsR0FBaENBLEdBQWUsQ0FBRUUsZUFBZSxHQUFFO1lBQ3ZEQyxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsSUFBTUQsTUFBTSxHQUFHbEIsc0RBQVMsRUFBRTtJQUUxQixxQkFDRSw4REFBQ29CLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGFBQWE7OzBCQUNuQiw4REFBQ0MsUUFBTTtnQkFDTEMsU0FBUyxFQUFDLGtDQUFrQztnQkFDNUNDLE9BQU8sRUFBRWhCLEtBQUs7Z0JBQ2RpQixLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxPQUFPO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtpQkFBRTswQkFDekMsU0FFRDs7Ozs7b0JBQVM7MEJBQ1QsOERBQUNMLFFBQU07Z0JBQ0xDLFNBQVMsRUFBQyxrQ0FBa0M7Z0JBQzVDQyxPQUFPLEVBQUVoQixLQUFLO2dCQUNkaUIsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsT0FBTztvQkFBRUMsS0FBSyxFQUFFLE1BQU07aUJBQUU7MEJBQ3pDLFNBRUQ7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0FBQ0osQ0FBQztHQXpDUXhCLE9BQU87O1FBcUJDSCxrREFBUzs7O0FBckJqQkcsS0FBQUEsT0FBTztBQTJDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luVUQuanM/MzBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUF1dGggZnJvbSBcIkB1YXV0aC9qc1wiO1xyXG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSBcIi4vY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luVUQoKSB7XHJcbiAgY29uc3QgdWF1dGggPSBuZXcgVUF1dGgoe1xyXG4gICAgY2xpZW50SUQ6IFwiZGI5YmM3NmYtYTQ2NS00ODNlLTkwMjItZGUwYmQxOWZmZTk1XCIsXHJcbiAgICByZWRpcmVjdFVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgIHNjb3BlOiBcIm9wZW5pZCB3YWxsZXQgZW1haWwgcHJvZmlsZTpvcHRpb25hbCBzb2NpYWw6b3B0aW9uYWxcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICB1YXV0aC5sb2dpbldpdGhQb3B1cCgpLnRoZW4oKGF1dGhvcml6YXRpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYXV0aG9yaXphdGlvbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHVhdXRoLmxvZ291dCgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICYmIHdpbmRvdy5ldGhlcmV1bT8uc2VsZWN0ZWRBZGRyZXNzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiTG9naW53aXRodWRcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIHNtYWxsLWJ0biBtb3ZlLXJpZ2h0XCJcclxuICAgICAgICBvbkNsaWNrPXtsb2dpbn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0biBzbWFsbC1idG4gbW92ZS1yaWdodFwiXHJcbiAgICAgICAgb25DbGljaz17bG9naW59XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICBMb2cgb3V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5VRDtcclxuIl0sIm5hbWVzIjpbIlVBdXRoIiwiQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luVUQiLCJ1YXV0aCIsImNsaWVudElEIiwicmVkaXJlY3RVcmkiLCJzY29wZSIsImxvZ2luIiwibG9naW5XaXRoUG9wdXAiLCJ0aGVuIiwiYXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsInJvdXRlciIsInB1c2giLCJkaXYiLCJpZCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdHlsZSIsIndpZHRoIiwiaGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginUD.js\n"));

/***/ })

});