"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _EventItemPopover = _interopRequireDefault(require("./EventItemPopover"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AgendaEventItem(props) {
  var eventItem = props.eventItem,
    isStart = props.isStart,
    isEnd = props.isEnd,
    eventItemClick = props.eventItemClick,
    schedulerData = props.schedulerData,
    eventItemTemplateResolver = props.eventItemTemplateResolver;
  var config = schedulerData.config,
    behaviors = schedulerData.behaviors;
  var roundCls = 'round-none';
  if (isStart && isEnd) {
    roundCls = 'round-all';
  } else if (isStart) {
    roundCls = 'round-head';
  } else if (isEnd) {
    roundCls = 'round-tail';
  }
  var backgroundColor = eventItem.bgColor || config.defaultEventBgColor;
  var titleText = behaviors.getEventTextFunc(schedulerData, eventItem);
  var eventItemStyle = {
    height: config.eventItemHeight,
    maxWidth: config.agendaMaxEventWidth,
    backgroundColor: backgroundColor
  };
  var eventItemTemplate = /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(roundCls, " event-item"),
    key: eventItem.id,
    style: eventItemStyle
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginLeft: '10px',
      lineHeight: "".concat(config.eventItemHeight, "px")
    }
  }, titleText));
  if (eventItemTemplateResolver) {
    eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, backgroundColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);
  }
  var handleClick = function handleClick() {
    return eventItemClick === null || eventItemClick === void 0 ? void 0 : eventItemClick(schedulerData, eventItem);
  };
  var eventLink = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "day-event txt-btn-dis",
    onClick: handleClick
  }, eventItemTemplate);
  var content = /*#__PURE__*/_react["default"].createElement(_EventItemPopover["default"], _extends({}, props, {
    title: eventItem.title,
    startTime: eventItem.start,
    endTime: eventItem.end,
    statusColor: backgroundColor
  }));
  return config.eventItemPopoverEnabled ? /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
    placement: "bottomLeft",
    content: content,
    trigger: "hover",
    overlayClassName: "scheduler-agenda-event-popover"
  }, eventLink) : /*#__PURE__*/_react["default"].createElement("span", null, eventLink);
}
AgendaEventItem.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  eventItem: _propTypes["default"].object.isRequired,
  isStart: _propTypes["default"].bool.isRequired,
  isEnd: _propTypes["default"].bool.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  eventItemTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = AgendaEventItem;