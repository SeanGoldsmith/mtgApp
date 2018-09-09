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
      id: "pos" + props.handPosition,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      className: "jsx-524604321" + " " + "cardTopLevel"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      className: "jsx-524604321" + " " + "topLIneContainer"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      className: "jsx-524604321"
    }, "Card Title"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      className: "jsx-524604321"
    }, "Mana Cost")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      className: "jsx-524604321" + " " + "cardType"
    }, "Card Type"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      className: "jsx-524604321"
    }, "Description | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      className: "jsx-524604321" + " " + "powerAndToughnessContainer"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      className: "jsx-524604321" + " " + "powerHolder"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: "jsx-524604321"
    }, "P: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "number",
      value: "42",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: "jsx-524604321"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-524604321" + " " + "toughnessHolder"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-524604321"
    }, "T: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      type: "number",
      value: "42",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-524604321"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-524604321" + " " + "handposition"
    }, props.handPosition)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "524604321",
      css: [".cardTopLevel.jsx-524604321{position:relative;border:1px solid black;max-width:200px;max-height:250px;background:#dedede;padding:25px;}", ".topLIneContainer.jsx-524604321{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".cardType.jsx-524604321{text-align:right;}", ".powerAndToughnessContainer.jsx-524604321{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".powerAndToughnessContainer.jsx-524604321>.jsx-524604321:nth-child(N+1){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "input.jsx-524604321{max-width:3.5em;}", ".handposition.jsx-524604321{position:absolute;top:0;left:0;color:red;}", "#posTwo.jsx-524604321,#3.jsx-524604321,#4.jsx-524604321,#5.jsx-524604321,#6.jsx-524604321,#7.jsx-524604321,#8.jsx-524604321,#9.jsx-524604321,#10.jsx-524604321{margin-left:-175px;}"]
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
//# sourceMappingURL=5.80d8d8515c65db7b33c8.hot-update.js.map