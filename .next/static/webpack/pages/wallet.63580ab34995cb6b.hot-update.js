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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uauth/js */ \"./node_modules/@uauth/js/build/index.module.mjs\");\n/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ \"./components/callback.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginUD() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isLoggedIn = ref[0], setIsLoggedIn = ref[1];\n    var uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        clientID: \"db9bc76f-a465-483e-9022-de0bd19ffe95\",\n        redirectUri: \"http://localhost:3000\",\n        scope: \"openid wallet email profile:optional social:optional\"\n    });\n    var login = function() {\n        uauth.loginWithPopup().then(function(authorization) {\n            console.log(authorization);\n            setIsLoggedIn(true);\n            localStorage.setItem(\"isLoggedIn\", \"true\");\n        });\n    };\n    var logout = function() {\n        uauth.logout();\n        setIsLoggedIn(false);\n        localStorage.removeItem(\"isLoggedIn\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var ref;\n        if (window.ethereum && ((ref = window.ethereum) === null || ref === void 0 ? void 0 : ref.selectedAddress)) {\n            setIsLoggedIn(true);\n            router.push(\"/\");\n        } else {\n            setIsLoggedIn(false);\n        }\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"Loginwithud\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: login,\n                style: {\n                    width: \"100px\",\n                    height: \"50px\"\n                },\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: logout,\n                style: {\n                    width: \"100px\",\n                    height: \"50px\"\n                },\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginUD, \"ui3tJ7nPcSBo4e9RzEhBw6/oJ1M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginUD;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginUD);\nvar _c;\n$RefreshReg$(_c, \"LoginUD\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luVUQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ0k7QUFDTTtBQUNJO0FBRTVDLFNBQVNLLE9BQU8sR0FBRzs7SUFDakIsSUFBb0NELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNFLFVBQVUsR0FBbUJGLEdBQWUsR0FBbEMsRUFBRUcsYUFBYSxHQUFJSCxHQUFlLEdBQW5CO0lBQ2hDLElBQU1JLEtBQUssR0FBRyxJQUFJUixpREFBSyxDQUFDO1FBQ3RCUyxRQUFRLEVBQUUsc0NBQXNDO1FBQ2hEQyxXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDQyxLQUFLLEVBQUUsc0RBQXNEO0tBQzlELENBQUM7SUFFRixJQUFNQyxLQUFLLEdBQUcsV0FBTTtRQUNsQkosS0FBSyxDQUFDSyxjQUFjLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLGFBQWEsRUFBSztZQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGFBQWEsQ0FBQyxDQUFDO1lBQzNCUixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEJXLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFNQyxNQUFNLEdBQUcsV0FBTTtRQUNuQlosS0FBSyxDQUFDWSxNQUFNLEVBQUUsQ0FBQztRQUNmYixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckJXLFlBQVksQ0FBQ0csVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRGxCLGdEQUFTLENBQUMsV0FBTTtZQUNTbUIsR0FBZTtRQUF0QyxJQUFJQSxNQUFNLENBQUNDLFFBQVEsSUFBSUQsQ0FBQUEsQ0FBQUEsR0FBZSxHQUFmQSxNQUFNLENBQUNDLFFBQVEsY0FBZkQsR0FBZSxXQUFpQixHQUFoQ0EsS0FBQUEsQ0FBZ0MsR0FBaENBLEdBQWUsQ0FBRUUsZUFBZSxHQUFFO1lBQ3ZEakIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCa0IsTUFBTSxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTztZQUNMbkIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNa0IsTUFBTSxHQUFHdkIsc0RBQVMsRUFBRTtJQUUxQixxQkFDRSw4REFBQ3lCLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGFBQWE7OzBCQUNuQiw4REFBQ0MsUUFBTTtnQkFDTEMsU0FBUyxFQUFDLGtDQUFrQztnQkFDNUNDLE9BQU8sRUFBRW5CLEtBQUs7Z0JBQ2RvQixLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxPQUFPO29CQUFFQyxNQUFNLEVBQUUsTUFBTTtpQkFBRTswQkFDMUMsU0FFRDs7Ozs7b0JBQVM7WUFDUjVCLFVBQVUsa0JBQ1QsOERBQUN1QixRQUFNO2dCQUNMQyxTQUFTLEVBQUMsa0NBQWtDO2dCQUM1Q0MsT0FBTyxFQUFFWCxNQUFNO2dCQUNmWSxLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxPQUFPO29CQUFFQyxNQUFNLEVBQUUsTUFBTTtpQkFBRTswQkFDMUMsU0FFRDs7Ozs7b0JBQVM7Ozs7OztZQUVQLENBQ047QUFDSixDQUFDO0dBckRRN0IsT0FBTzs7UUErQkNILGtEQUFTOzs7QUEvQmpCRyxLQUFBQSxPQUFPO0FBdURoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5VRC5qcz8zMGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVQXV0aCBmcm9tIFwiQHVhdXRoL2pzXCI7XHJcbmltcG9ydCBDYWxsYmFjayBmcm9tIFwiLi9jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9naW5VRCgpIHtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdWF1dGggPSBuZXcgVUF1dGgoe1xyXG4gICAgY2xpZW50SUQ6IFwiZGI5YmM3NmYtYTQ2NS00ODNlLTkwMjItZGUwYmQxOWZmZTk1XCIsXHJcbiAgICByZWRpcmVjdFVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgIHNjb3BlOiBcIm9wZW5pZCB3YWxsZXQgZW1haWwgcHJvZmlsZTpvcHRpb25hbCBzb2NpYWw6b3B0aW9uYWxcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICB1YXV0aC5sb2dpbldpdGhQb3B1cCgpLnRoZW4oKGF1dGhvcml6YXRpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYXV0aG9yaXphdGlvbik7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNMb2dnZWRJblwiLCBcInRydWVcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB1YXV0aC5sb2dvdXQoKTtcclxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJpc0xvZ2dlZEluXCIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICYmIHdpbmRvdy5ldGhlcmV1bT8uc2VsZWN0ZWRBZGRyZXNzKSB7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiTG9naW53aXRodWRcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIHNtYWxsLWJ0biBtb3ZlLXJpZ2h0XCJcclxuICAgICAgICBvbkNsaWNrPXtsb2dpbn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICBTaWduIGluXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7aXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG4gc21hbGwtYnRuIG1vdmUtcmlnaHRcIlxyXG4gICAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luVUQ7XHJcbiJdLCJuYW1lcyI6WyJVQXV0aCIsIkNhbGxiYWNrIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpblVEIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1YXV0aCIsImNsaWVudElEIiwicmVkaXJlY3RVcmkiLCJzY29wZSIsImxvZ2luIiwibG9naW5XaXRoUG9wdXAiLCJ0aGVuIiwiYXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwicm91dGVyIiwicHVzaCIsImRpdiIsImlkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginUD.js\n"));

/***/ })

});