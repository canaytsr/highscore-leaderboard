"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _default2 = require("../config/default");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

function HeaderView(_ref) {
  var schedulerData = _ref.schedulerData,
    nonAgendaCellHeaderTemplateResolver = _ref.nonAgendaCellHeaderTemplateResolver;
  var headers = schedulerData.headers,
    cellUnit = schedulerData.cellUnit,
    config = schedulerData.config,
    localeDayjs = schedulerData.localeDayjs;
  var headerHeight = schedulerData.getTableHeaderHeight();
  var cellWidth = schedulerData.getContentCellWidth();
  var minuteStepsInHour = schedulerData.getMinuteStepsInHour();
  var headerList = [];
  var style;
  if (cellUnit === _default2.CellUnit.Hour) {
    headers.forEach(function (item, index) {
      if (index % minuteStepsInHour === 0) {
        var datetime = localeDayjs(new Date(item.time));
        style = item.nonWorkingTime ? {
          width: cellWidth * minuteStepsInHour,
          color: config.nonWorkingTimeHeadColor,
          backgroundColor: config.nonWorkingTimeHeadBgColor
        } : {
          width: cellWidth * minuteStepsInHour
        };
        if (index === headers.length - minuteStepsInHour) {
          style = item.nonWorkingTime ? {
            color: config.nonWorkingTimeHeadColor,
            backgroundColor: config.nonWorkingTimeHeadBgColor
          } : {};
        }
        var pFormattedList = config.nonAgendaDayCellHeaderFormat.split('|').map(function (pitem) {
          return datetime.format(pitem);
        });
        var element;
        if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
          element = nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
        } else {
          var pList = pFormattedList.map(function (formattedItem, pIndex) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              key: pIndex
            }, formattedItem);
          });
          element = /*#__PURE__*/_react["default"].createElement("th", {
            key: "header-".concat(item.time),
            className: "header3-text",
            style: style
          }, /*#__PURE__*/_react["default"].createElement("div", null, pList));
        }
        headerList.push(element);
      }
    });
  } else {
    headerList = headers.map(function (item, index) {
      var datetime = localeDayjs(new Date(item.time));
      style = item.nonWorkingTime ? {
        width: cellWidth,
        color: config.nonWorkingTimeHeadColor,
        backgroundColor: config.nonWorkingTimeHeadBgColor
      } : {
        width: cellWidth
      };
      if (index === headers.length - 1) style = item.nonWorkingTime ? {
        color: config.nonWorkingTimeHeadColor,
        backgroundColor: config.nonWorkingTimeHeadBgColor
      } : {};
      var cellFormat = cellUnit === _default2.CellUnit.Week ? config.nonAgendaWeekCellHeaderFormat : cellUnit === _default2.CellUnit.Month ? config.nonAgendaMonthCellHeaderFormat : cellUnit === _default2.CellUnit.Year ? config.nonAgendaYearCellHeaderFormat : config.nonAgendaOtherCellHeaderFormat;
      var pFormattedList = cellFormat.split('|').map(function (dateFormatPart) {
        return datetime.format(dateFormatPart);
      });
      if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
        return nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
      }
      var pList = pFormattedList.map(function (formattedItem, pIndex) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: pIndex
        }, formattedItem);
      });
      return /*#__PURE__*/_react["default"].createElement("th", {
        key: "header-".concat(item.time),
        className: "header3-text",
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", null, pList));
    });
  }
  return /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: {
      height: headerHeight
    }
  }, headerList));
}
HeaderView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  nonAgendaCellHeaderTemplateResolver: _propTypes["default"].func
};
HeaderView.defaultProps = {
  nonAgendaCellHeaderTemplateResolver: null
};
var _default = exports["default"] = HeaderView;