"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* eslint-disable jsx-a11y/control-has-associated-label */

function BodyView(_ref) {
  var schedulerData = _ref.schedulerData;
  var renderData = schedulerData.renderData,
    headers = schedulerData.headers,
    config = schedulerData.config,
    behaviors = schedulerData.behaviors;
  var width = schedulerData.getContentCellWidth();
  var tableRows = renderData.filter(function (o) {
    return o.render;
  }).map(function (_ref2) {
    var slotId = _ref2.slotId,
      groupOnly = _ref2.groupOnly,
      rowHeight = _ref2.rowHeight;
    var rowCells = headers.map(function (header, index) {
      var key = "".concat(slotId, "_").concat(header.time);
      var style = index === headers.length - 1 ? {} : {
        width: width
      };
      if (header.nonWorkingTime) {
        style.backgroundColor = config.nonWorkingTimeBodyBgColor;
      }
      if (groupOnly) {
        style.backgroundColor = config.groupOnlySlotColor;
      }
      if (behaviors.getNonAgendaViewBodyCellBgColorFunc) {
        var cellBgColor = behaviors.getNonAgendaViewBodyCellBgColorFunc(schedulerData, slotId, header);
        if (cellBgColor) {
          style.backgroundColor = cellBgColor;
        }
      }
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: key,
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", null));
    });
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: slotId,
      style: {
        height: rowHeight
      }
    }, rowCells);
  });
  return /*#__PURE__*/_react["default"].createElement("tbody", null, tableRows);
}
BodyView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = BodyView;