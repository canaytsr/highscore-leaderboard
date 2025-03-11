"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WrapperFun;
var _react = _interopRequireDefault(require("react"));
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* eslint-disable react/jsx-props-no-spreading */

function WrapperFun(Component) {
  return function WrappedComponent(props) {
    return /*#__PURE__*/_react["default"].createElement(_reactDnd.DndProvider, {
      backend: _reactDndHtml5Backend.HTML5Backend
    }, /*#__PURE__*/_react["default"].createElement(Component, props));
  };
}