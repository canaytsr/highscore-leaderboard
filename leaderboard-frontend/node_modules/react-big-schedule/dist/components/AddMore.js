"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AddMore(_ref) {
  var schedulerData = _ref.schedulerData,
    number = _ref.number,
    left = _ref.left,
    width = _ref.width,
    top = _ref.top,
    clickAction = _ref.clickAction,
    headerItem = _ref.headerItem;
  var config = schedulerData.config;
  var content = "+".concat(number, " more");
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "timeline-event",
    style: {
      left: left,
      width: width,
      top: top
    },
    onClick: function onClick() {
      return clickAction(headerItem);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: config.eventItemHeight,
      color: '#999',
      textAlign: 'center'
    }
  }, content));
}
AddMore.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  number: _propTypes["default"].number.isRequired,
  left: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  top: _propTypes["default"].number.isRequired,
  clickAction: _propTypes["default"].func.isRequired,
  headerItem: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = AddMore;