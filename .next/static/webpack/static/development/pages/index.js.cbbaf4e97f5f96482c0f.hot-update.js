webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Note */ "./components/Note.js");







var _jsxFileName = "C:\\Users\\Daniel Aduro\\Desktop\\Gerilimsiz App\\pages\\app.js";



var TodoApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TodoApp, _React$Component);

  function TodoApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter') {}
    });

    _this.state = {
      noteText: '',
      notes: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoApp, [{
    key: "updateNoteText",
    value: function updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      });
    }
  }, {
    key: "addNote",
    value: function addNote() {
      if (this.state.noteText === '') {
        return;
      }

      var notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({
        noteText: ''
      });
      this.textInput.focus();
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(index) {
      var notesArr = this.state.notes;
      notesArr.slice(index, 1);
      this.setState({
        notes: notesArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notes = this.state.notes.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Note__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: key,
          text: val,
          deleteMethod: function deleteMethod() {
            return _this2.deleteNote(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Gerilimsiz TodoApp"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn",
        onClick: this.addNote.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "+"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        ref: function ref(input) {
          _this2.textInput = input;
        },
        className: "textInput",
        value: this.state.noteText,
        onChange: function onChange(noteText) {
          return _this2.updateNoteText(noteText);
        },
        onKeyPress: this.handleKeyPress.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    }
  }]);

  return TodoApp;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoApp);

/***/ })

})
//# sourceMappingURL=index.js.cbbaf4e97f5f96482c0f.hot-update.js.map