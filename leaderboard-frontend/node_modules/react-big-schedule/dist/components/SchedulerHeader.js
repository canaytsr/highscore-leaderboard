"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _default2 = require("../config/default");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;
function SchedulerHeader(_ref) {
  var _schedulerData$getCal;
  var onViewChange = _ref.onViewChange,
    goNext = _ref.goNext,
    goBack = _ref.goBack,
    onSelectDate = _ref.onSelectDate,
    schedulerData = _ref.schedulerData,
    leftCustomHeader = _ref.leftCustomHeader,
    rightCustomHeader = _ref.rightCustomHeader;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    viewSpinning = _useState2[0],
    setViewSpinning = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dateSpinning = _useState4[0],
    setDateSpinning = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1];
  var viewType = schedulerData.viewType,
    showAgenda = schedulerData.showAgenda,
    isEventPerspective = schedulerData.isEventPerspective,
    config = schedulerData.config;
  var dateLabel = schedulerData.getDateLabel();
  var selectDate = schedulerData.getSelectedDate();
  var calendarLocale = (_schedulerData$getCal = schedulerData.getCalendarPopoverLocale()) === null || _schedulerData$getCal === void 0 || (_schedulerData$getCal = _schedulerData$getCal["default"]) === null || _schedulerData$getCal === void 0 ? void 0 : _schedulerData$getCal.Calendar;
  var defaultValue = "".concat(viewType).concat(showAgenda ? 1 : 0).concat(isEventPerspective ? 1 : 0);
  var handleEvents = function handleEvents(func, isViewSpinning) {
    var funcArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    if (isViewSpinning) {
      if (config.viewChangeSpinEnabled) setViewSpinning(true);
    } else if (config.dateChangeSpinEnabled) setDateSpinning(true);
    var coreFunc = function coreFunc() {
      if (funcArg !== undefined) func(funcArg);else func();
      if (isViewSpinning) {
        if (config.viewChangeSpinEnabled) setViewSpinning(false);
      } else if (config.dateChangeSpinEnabled) setDateSpinning(false);
    };
    if (config.viewChangeSpinEnabled || config.dateChangeSpinEnabled) {
      setTimeout(coreFunc, config.schedulerHeaderEventsFuncsTimeoutMs); // 100ms
    } else {
      coreFunc();
    }
  };
  var popover = /*#__PURE__*/_react["default"].createElement("div", {
    className: "popover-calendar"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Calendar, {
    locale: calendarLocale,
    defaultValue: (0, _dayjs["default"])(selectDate),
    fullscreen: false,
    onSelect: function onSelect(date) {
      setVisible(false);
      handleEvents(onSelectDate, false, date.format(_default2.DATE_FORMAT));
    }
  }));
  var radioButtonList = config.views.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(RadioButton, {
      key: "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0),
      value: "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        margin: '0px 8px'
      }
    }, item.viewName));
  });
  return /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    gutter: [10, 10],
    type: "flex",
    align: "middle",
    justify: "space-between",
    style: {
      marginBottom: '24px'
    }
  }, leftCustomHeader, /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header2-text"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_icons.LeftOutlined, {
    type: "left",
    style: {
      marginRight: '8px'
    },
    className: "icon-nav",
    onClick: function onClick() {
      return handleEvents(goBack, false);
    }
  }), config.calendarPopoverEnabled ? /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
    content: popover,
    placement: "bottomLeft",
    trigger: "click",
    open: visible,
    onOpenChange: setVisible,
    overlayClassName: "scheduler-header-popover"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "header2-text-label",
    style: {
      cursor: 'pointer'
    }
  }, dateLabel)) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "header2-text-label"
  }, dateLabel), /*#__PURE__*/_react["default"].createElement(_icons.RightOutlined, {
    type: "right",
    style: {
      marginLeft: '8px'
    },
    className: "icon-nav",
    onClick: function onClick() {
      return handleEvents(goNext, false);
    }
  })), /*#__PURE__*/_react["default"].createElement(_antd.Spin, {
    spinning: dateSpinning
  })))), /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement(_antd.Spin, {
    spinning: viewSpinning
  }), /*#__PURE__*/_react["default"].createElement(RadioGroup, {
    buttonStyle: "solid",
    defaultValue: defaultValue,
    size: "default",
    onChange: function onChange(event) {
      return handleEvents(onViewChange, true, event);
    }
  }, radioButtonList))), rightCustomHeader);
}
SchedulerHeader.propTypes = {
  onViewChange: _propTypes["default"].func.isRequired,
  goNext: _propTypes["default"].func.isRequired,
  goBack: _propTypes["default"].func.isRequired,
  onSelectDate: _propTypes["default"].func.isRequired,
  schedulerData: _propTypes["default"].object.isRequired,
  leftCustomHeader: _propTypes["default"].object,
  rightCustomHeader: _propTypes["default"].object
};
SchedulerHeader.defaultProps = {
  leftCustomHeader: null,
  rightCustomHeader: null
};
var _default = exports["default"] = SchedulerHeader;