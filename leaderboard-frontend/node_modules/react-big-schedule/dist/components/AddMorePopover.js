"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _EventItem = _interopRequireDefault(require("./EventItem"));
var _DnDSource = _interopRequireDefault(require("./DnDSource"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function AddMorePopover(props) {
  var schedulerData = props.schedulerData,
    headerItem = props.headerItem,
    left = props.left,
    top = props.top,
    height = props.height,
    closeAction = props.closeAction;
  var config = schedulerData.config,
    localeDayjs = schedulerData.localeDayjs;
  var time = headerItem.time,
    start = headerItem.start,
    end = headerItem.end,
    events = headerItem.events;
  var _useState = (0, _react.useState)(new _DnDSource["default"](function (p) {
      return p.eventItem;
    }, _EventItem["default"], schedulerData.config.dragAndDropEnabled)),
    _useState2 = _slicedToArray(_useState, 1),
    dndSource = _useState2[0];
  var header = localeDayjs(new Date(time)).format(config.addMorePopoverHeaderFormat);
  var durationStart = localeDayjs(new Date(start));
  var durationEnd = localeDayjs(end);
  var DnDEventItem = dndSource.getDragSource();
  var eventList = events.map(function (evt, i) {
    if (evt !== undefined) {
      var eventStart = localeDayjs(evt.eventItem.start);
      var eventEnd = localeDayjs(evt.eventItem.end);
      var isStart = eventStart >= durationStart;
      var isEnd = eventEnd < durationEnd;
      var eventItemTop = 12 + (i + 1) * config.eventItemLineHeight;
      return /*#__PURE__*/_react["default"].createElement(DnDEventItem, _extends({}, props, {
        key: evt.eventItem.id,
        eventItem: evt.eventItem,
        leftIndex: 0,
        isInPopover: true,
        isStart: isStart,
        isEnd: isEnd,
        rightIndex: 1,
        left: 10,
        width: 138,
        top: eventItemTop
      }));
    }
    return null;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "add-more-popover-overlay",
    style: {
      left: left,
      top: top,
      height: height,
      width: '170px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 22
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "base-text"
  }, header)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 2
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return closeAction(undefined);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseOutlined, null)))), eventList === null || eventList === void 0 ? void 0 : eventList.filter(Boolean));
}
AddMorePopover.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  headerItem: _propTypes["default"].object.isRequired,
  left: _propTypes["default"].number.isRequired,
  top: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  closeAction: _propTypes["default"].func.isRequired,
  subtitleGetter: _propTypes["default"].func,
  moveEvent: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  eventItemTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = AddMorePopover;