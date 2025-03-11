"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AgendaEventItem = _interopRequireDefault(require("./AgendaEventItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AgendaResourceEvents(props) {
  var schedulerData = props.schedulerData,
    resourceEvents = props.resourceEvents,
    slotClickedFunc = props.slotClickedFunc,
    slotItemTemplateResolver = props.slotItemTemplateResolver;
  var startDate = schedulerData.startDate,
    endDate = schedulerData.endDate,
    config = schedulerData.config,
    localeDayjs = schedulerData.localeDayjs;
  var width = schedulerData.getResourceTableWidth() - 2;
  var events = resourceEvents.headerItems.flatMap(function (item) {
    var start = localeDayjs(new Date(startDate));
    var end = localeDayjs(endDate).add(1, 'days');
    var headerStart = localeDayjs(new Date(item.start));
    var headerEnd = localeDayjs(new Date(item.end));
    if (start === headerStart && end === headerEnd) {
      return item.events.map(function (evt) {
        var durationStart = localeDayjs(new Date(startDate));
        var durationEnd = localeDayjs(endDate).add(1, 'days');
        var eventStart = localeDayjs(evt.eventItem.start);
        var eventEnd = localeDayjs(evt.eventItem.end);
        var isStart = eventStart >= durationStart;
        var isEnd = eventEnd < durationEnd;
        return /*#__PURE__*/_react["default"].createElement(_AgendaEventItem["default"], _extends({}, props, {
          key: evt.eventItem.id,
          eventItem: evt.eventItem,
          isStart: isStart,
          isEnd: isEnd
        }));
      });
    }
    return [];
  });
  var slotItemContent = slotClickedFunc ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "txt-btn-dis",
    type: "button",
    onClick: function onClick() {
      return slotClickedFunc(schedulerData, resourceEvents);
    }
  }, resourceEvents.slotName) : /*#__PURE__*/_react["default"].createElement("span", null, resourceEvents.slotName);
  var slotItem = /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: width
    },
    title: resourceEvents.slotTitle || resourceEvents.slotName,
    className: "overflow-text header2-text"
  }, slotItemContent);
  if (slotItemTemplateResolver) {
    var temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, 'overflow-text header2-text');
    if (temp) {
      slotItem = temp;
    }
  }
  return /*#__PURE__*/_react["default"].createElement("tr", {
    style: {
      minHeight: config.eventItemLineHeight + 2
    }
  }, /*#__PURE__*/_react["default"].createElement("td", {
    "data-resource-id": resourceEvents.slotId
  }, slotItem), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "day-event-container"
  }, events)));
}
AgendaResourceEvents.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  resourceEvents: _propTypes["default"].object.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  slotClickedFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func
};
var _default = exports["default"] = AgendaResourceEvents;