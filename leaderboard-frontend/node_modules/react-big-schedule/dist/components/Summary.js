"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _default2 = require("../config/default");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Summary(_ref) {
  var schedulerData = _ref.schedulerData,
    summary = _ref.summary,
    left = _ref.left,
    width = _ref.width,
    top = _ref.top;
  var config = schedulerData.config;
  var color = summary.color !== undefined ? summary.color : config.summaryColor;
  var textAlign = 'center';
  if (config.summaryPos === _default2.SummaryPos.TopRight || config.summaryPos === _default2.SummaryPos.BottomRight) {
    textAlign = 'right';
  } else if (config.summaryPos === _default2.SummaryPos.TopLeft || config.summaryPos === _default2.SummaryPos.BottomLeft) {
    textAlign = 'left';
  }
  var style = _objectSpread({
    height: config.eventItemHeight,
    color: color,
    textAlign: textAlign,
    marginLeft: '6px',
    marginRight: '6px'
  }, summary.fontSize !== undefined ? {
    fontSize: summary.fontSize
  } : {});
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "timeline-event header2-text",
    style: {
      left: left,
      width: width,
      top: top,
      cursor: 'default'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, summary.text));
}
Summary.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  summary: _propTypes["default"].object.isRequired,
  left: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  top: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = Summary;