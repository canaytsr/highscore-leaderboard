"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SelectedArea(_ref) {
  var left = _ref.left,
    width = _ref.width,
    schedulerData = _ref.schedulerData;
  var config = schedulerData.config;
  var selectedAreaStyle = {
    left: left,
    width: width,
    top: 0,
    bottom: 0,
    backgroundColor: config.selectedAreaColor
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "selected-area",
    style: selectedAreaStyle
  });
}
SelectedArea.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  left: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = SelectedArea;