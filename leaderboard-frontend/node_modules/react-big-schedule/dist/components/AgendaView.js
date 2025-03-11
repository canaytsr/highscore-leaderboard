"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AgendaResourceEvents = _interopRequireDefault(require("./AgendaResourceEvents"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AgendaView(props) {
  var schedulerData = props.schedulerData;
  var config = schedulerData.config,
    renderData = schedulerData.renderData;
  var agendaResourceTableWidth = schedulerData.getResourceTableWidth();
  var tableHeaderHeight = schedulerData.getTableHeaderHeight();
  var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
  var agendaViewHeader = config.agendaViewHeader;
  var resourceEventsList = renderData.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_AgendaResourceEvents["default"], _extends({}, props, {
      resourceEvents: item,
      key: item.slotId
    }));
  });
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("table", {
    className: "scheduler-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: {
      height: tableHeaderHeight
    }
  }, /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      width: agendaResourceTableWidth
    },
    className: "header3-text"
  }, resourceName), /*#__PURE__*/_react["default"].createElement("th", {
    className: "header3-text"
  }, agendaViewHeader))), /*#__PURE__*/_react["default"].createElement("tbody", null, resourceEventsList))));
}
AgendaView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  slotClickedFunc: _propTypes["default"].func
};
var _default = exports["default"] = AgendaView;