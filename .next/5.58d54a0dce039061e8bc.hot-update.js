webpackHotUpdate(5,{

/***/ "./pages/sections/lifeCounter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export LifeCounter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Jonkn\\Documents\\GitHub\\mtgApp\\pages\\sections\\lifeCounter.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const LifeCounter = (props) => (
//
//   <div>
//     <h3 id="{playerOne}">Player One: {playerOneLIfe}</h3>
//     <h3 id="{playerTwo}">Player One: {playerTwoLIfe}</h3>
//   </div>
// )
//
// export default LifeCounter
var LifeCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LifeCounter, _React$Component);

  function LifeCounter(props) {
    var _this;

    _classCallCheck(this, LifeCounter);

    _this = _possibleConstructorReturn(this, (LifeCounter.__proto__ || Object.getPrototypeOf(LifeCounter)).call(this, props));
    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(LifeCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Hello, world!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "It is ", this.state.date.toLocaleTimeString(), "."));
    }
  }]);

  return LifeCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sections\\lifeCounter")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.58d54a0dce039061e8bc.hot-update.js.map