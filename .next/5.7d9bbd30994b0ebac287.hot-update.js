webpackHotUpdate(5,{

/***/ "./pages/sections/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jonkn\\Documents\\GitHub\\mtgApp\\pages\\sections\\card.js";



var Card = function Card(props) {
  return (// const position = {porps.handPosition}
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      className: "jsx-4185631141" + " " + "cardTopLevel"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      className: "jsx-4185631141" + " " + "topLIneContainer"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      className: "jsx-4185631141"
    }, "Card Title"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      className: "jsx-4185631141"
    }, "Mana Cost")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      className: "jsx-4185631141" + " " + "cardType"
    }, "Card Type"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      className: "jsx-4185631141"
    }, "Description | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      className: "jsx-4185631141" + " " + "powerAndToughnessContainer"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      className: "jsx-4185631141" + " " + "powerHolder"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: "jsx-4185631141"
    }, "P: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "number",
      value: "42",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: "jsx-4185631141"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-4185631141" + " " + "toughnessHolder"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-4185631141"
    }, "T: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "number",
      value: "42",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-4185631141"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-4185631141" + " " + "handposition"
    }, props.handPosition)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4185631141",
      css: [".cardTopLevel.jsx-4185631141{position:relative;border:1px solid black;max-width:200px;max-height:250px;background:#dedede;padding:25px;}", ".topLIneContainer.jsx-4185631141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".cardType.jsx-4185631141{text-align:right;}", ".powerAndToughnessContainer.jsx-4185631141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".powerAndToughnessContainer.jsx-4185631141>.jsx-4185631141:nth-child(N+1){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "input.jsx-4185631141{max-width:3.5em;}", ".handposition.jsx-4185631141{position:absolute;top:0;left:0;color:red;}", "#pos2.jsx-4185631141,#3.jsx-4185631141,#4.jsx-4185631141,#5.jsx-4185631141,#6.jsx-4185631141,#7.jsx-4185631141,#8.jsx-4185631141,#9.jsx-4185631141,#10.jsx-4185631141{margin-left:-175px;}"]
    }))
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Card);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sections\\card")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.7d9bbd30994b0ebac287.hot-update.js.map