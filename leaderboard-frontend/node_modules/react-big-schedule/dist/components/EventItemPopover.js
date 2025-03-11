"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function EventItemPopover(_ref) {
  var schedulerData = _ref.schedulerData,
    eventItem = _ref.eventItem,
    title = _ref.title,
    startTime = _ref.startTime,
    endTime = _ref.endTime,
    statusColor = _ref.statusColor,
    subtitleGetter = _ref.subtitleGetter,
    viewEventClick = _ref.viewEventClick,
    viewEventText = _ref.viewEventText,
    viewEvent2Click = _ref.viewEvent2Click,
    viewEvent2Text = _ref.viewEvent2Text,
    eventItemPopoverTemplateResolver = _ref.eventItemPopoverTemplateResolver;
  var localeDayjs = schedulerData.localeDayjs,
    config = schedulerData.config;
  var start = localeDayjs(new Date(startTime));
  var end = localeDayjs(new Date(endTime));
  if (eventItemPopoverTemplateResolver) {
    return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
  }
  var subtitle = subtitleGetter ? subtitleGetter(schedulerData, eventItem) : null;
  var showViewEvent = viewEventText && viewEventClick && (eventItem.clickable1 === undefined || eventItem.clickable1);
  var showViewEvent2 = viewEvent2Text && viewEvent2Click && (eventItem.clickable2 === undefined || eventItem.clickable2);
  var renderViewEvent = function renderViewEvent(text, clickHandler) {
    var marginLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "header2-text txt-btn-dis",
      type: "button",
      style: {
        color: '#108EE9',
        cursor: 'pointer',
        marginLeft: "".concat(marginLeft, "px")
      },
      onClick: function onClick() {
        return clickHandler(schedulerData, eventItem);
      }
    }, text);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: config.eventItemPopoverWidth
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    type: "flex",
    align: "middle"
  }, config.eventItemPopoverShowColor && /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 2
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "status-dot",
    style: {
      backgroundColor: statusColor
    }
  })), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 22,
    className: "overflow-text"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "header2-text",
    title: title
  }, title))), subtitle && /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    type: "flex",
    align: "middle"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 2
  }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 22,
    className: "overflow-text"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "header2-text",
    title: subtitle
  }, subtitle))), /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    type: "flex",
    align: "middle"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 2
  }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 22
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "header1-text"
  }, start.format('HH:mm')), config.eventItemPopoverDateFormat && /*#__PURE__*/_react["default"].createElement("span", {
    className: "help-text",
    style: {
      marginLeft: '8px'
    }
  }, start.format(config.eventItemPopoverDateFormat)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "header2-text",
    style: {
      marginLeft: '8px'
    }
  }, "-"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "header1-text",
    style: {
      marginLeft: '8px'
    }
  }, end.format('HH:mm')), config.eventItemPopoverDateFormat && /*#__PURE__*/_react["default"].createElement("span", {
    className: "help-text",
    style: {
      marginLeft: '8px'
    }
  }, end.format(config.eventItemPopoverDateFormat)))), (showViewEvent || showViewEvent2) && /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    type: "flex",
    align: "middle"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 2
  }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 22
  }, showViewEvent && renderViewEvent(viewEventText, viewEventClick), showViewEvent2 && renderViewEvent(viewEvent2Text, viewEvent2Click, 16))));
}
EventItemPopover.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  eventItem: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].string.isRequired,
  startTime: _propTypes["default"].string.isRequired,
  endTime: _propTypes["default"].string.isRequired,
  statusColor: _propTypes["default"].string.isRequired,
  subtitleGetter: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  eventItemPopoverTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = EventItemPopover;