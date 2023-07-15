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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uauth/js */ \"./node_modules/@uauth/js/build/index.module.mjs\");\n/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ \"./components/callback.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginUD() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isLoggedIn = ref[0], setIsLoggedIn = ref[1];\n    var uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        clientID: \"db9bc76f-a465-483e-9022-de0bd19ffe95\",\n        redirectUri: \"http://localhost:3000\",\n        scope: \"openid wallet email profile:optional social:optional\"\n    });\n    var login = function() {\n        uauth.loginWithPopup().then(function(authorization) {\n            console.log(authorization);\n            setIsLoggedIn(true);\n            localStorage.setItem(\"isLoggedIn\", \"true\");\n        });\n    };\n    var logout = function() {\n        uauth.logout();\n        setIsLoggedIn(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var ref;\n        if (window.ethereum && ((ref = window.ethereum) === null || ref === void 0 ? void 0 : ref.selectedAddress)) {\n            setIsLoggedIn(true);\n            router.push(\"/\");\n        } else {\n            setIsLoggedIn(false);\n        }\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"Loginwithud\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: login,\n                style: {\n                    width: \"100px\",\n                    height: \"50px\"\n                },\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"default-btn small-btn move-right\",\n                onClick: logout,\n                style: {\n                    width: \"100px\",\n                    height: \"50px\"\n                },\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\free_\\\\2pi-market-bulls\\\\components\\\\LoginUD.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginUD, \"ui3tJ7nPcSBo4e9RzEhBw6/oJ1M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginUD;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginUD);\nvar _c;\n$RefreshReg$(_c, \"LoginUD\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luVUQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ0k7QUFDTTtBQUNJO0FBRTVDLFNBQVNLLE9BQU8sR0FBRzs7SUFDakIsSUFBb0NELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNFLFVBQVUsR0FBbUJGLEdBQWUsR0FBbEMsRUFBRUcsYUFBYSxHQUFJSCxHQUFlLEdBQW5CO0lBQ2hDLElBQU1JLEtBQUssR0FBRyxJQUFJUixpREFBSyxDQUFDO1FBQ3RCUyxRQUFRLEVBQUUsc0NBQXNDO1FBQ2hEQyxXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDQyxLQUFLLEVBQUUsc0RBQXNEO0tBQzlELENBQUM7SUFFRixJQUFNQyxLQUFLLEdBQUcsV0FBTTtRQUNsQkosS0FBSyxDQUFDSyxjQUFjLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLGFBQWEsRUFBSztZQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGFBQWEsQ0FBQyxDQUFDO1lBQzNCUixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEJXLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFNQyxNQUFNLEdBQUcsV0FBTTtRQUNuQlosS0FBSyxDQUFDWSxNQUFNLEVBQUUsQ0FBQztRQUNmYixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVESixnREFBUyxDQUFDLFdBQU07WUFDU2tCLEdBQWU7UUFBdEMsSUFBSUEsTUFBTSxDQUFDQyxRQUFRLElBQUlELENBQUFBLENBQUFBLEdBQWUsR0FBZkEsTUFBTSxDQUFDQyxRQUFRLGNBQWZELEdBQWUsV0FBaUIsR0FBaENBLEtBQUFBLENBQWdDLEdBQWhDQSxHQUFlLENBQUVFLGVBQWUsR0FBRTtZQUN2RGhCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQmlCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE9BQU87WUFDTGxCLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTWlCLE1BQU0sR0FBR3RCLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0UsOERBQUN3QixLQUFHO1FBQUNDLEVBQUUsRUFBQyxhQUFhOzswQkFDbkIsOERBQUNDLFFBQU07Z0JBQ0xDLFNBQVMsRUFBQyxrQ0FBa0M7Z0JBQzVDQyxPQUFPLEVBQUVsQixLQUFLO2dCQUNkbUIsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsT0FBTztvQkFBRUMsTUFBTSxFQUFFLE1BQU07aUJBQUU7MEJBQzFDLFNBRUQ7Ozs7O29CQUFTO1lBQ1IzQixVQUFVLGtCQUNULDhEQUFDc0IsUUFBTTtnQkFDTEMsU0FBUyxFQUFDLGtDQUFrQztnQkFDNUNDLE9BQU8sRUFBRVYsTUFBTTtnQkFDZlcsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsT0FBTztvQkFBRUMsTUFBTSxFQUFFLE1BQU07aUJBQUU7MEJBQzFDLFNBRUQ7Ozs7O29CQUFTOzs7Ozs7WUFFUCxDQUNOO0FBQ0osQ0FBQztHQXBEUTVCLE9BQU87O1FBOEJDSCxrREFBUzs7O0FBOUJqQkcsS0FBQUEsT0FBTztBQXNEaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luVUQuanM/MzBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUF1dGggZnJvbSBcIkB1YXV0aC9qc1wiO1xyXG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSBcIi4vY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luVUQoKSB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVhdXRoID0gbmV3IFVBdXRoKHtcclxuICAgIGNsaWVudElEOiBcImRiOWJjNzZmLWE0NjUtNDgzZS05MDIyLWRlMGJkMTlmZmU5NVwiLFxyXG4gICAgcmVkaXJlY3RVcmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgICBzY29wZTogXCJvcGVuaWQgd2FsbGV0IGVtYWlsIHByb2ZpbGU6b3B0aW9uYWwgc29jaWFsOm9wdGlvbmFsXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKCkgPT4ge1xyXG4gICAgdWF1dGgubG9naW5XaXRoUG9wdXAoKS50aGVuKChhdXRob3JpemF0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF1dGhvcml6YXRpb24pO1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzTG9nZ2VkSW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdWF1dGgubG9nb3V0KCk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSAmJiB3aW5kb3cuZXRoZXJldW0/LnNlbGVjdGVkQWRkcmVzcykge1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIkxvZ2lud2l0aHVkXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0biBzbWFsbC1idG4gbW92ZS1yaWdodFwiXHJcbiAgICAgICAgb25DbGljaz17bG9naW59XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2lnbiBpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIHNtYWxsLWJ0biBtb3ZlLXJpZ2h0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblVEO1xyXG4iXSwibmFtZXMiOlsiVUF1dGgiLCJDYWxsYmFjayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW5VRCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidWF1dGgiLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwic2NvcGUiLCJsb2dpbiIsImxvZ2luV2l0aFBvcHVwIiwidGhlbiIsImF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvZ291dCIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwicm91dGVyIiwicHVzaCIsImRpdiIsImlkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginUD.js\n"));

/***/ })

});