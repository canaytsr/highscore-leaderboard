"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ResourceView(_ref) {
  var schedulerData = _ref.schedulerData,
    contentScrollbarHeight = _ref.contentScrollbarHeight,
    slotClickedFunc = _ref.slotClickedFunc,
    slotItemTemplateResolver = _ref.slotItemTemplateResolver,
    toggleExpandFunc = _ref.toggleExpandFunc;
  var renderData = schedulerData.renderData;
  var width = schedulerData.getResourceTableWidth() - 2;
  var paddingBottom = contentScrollbarHeight;
  var displayRenderData = renderData.filter(function (o) {
    return o.render;
  });
  var handleToggleExpand = function handleToggleExpand(item) {
    if (toggleExpandFunc) {
      toggleExpandFunc(schedulerData, item.slotId);
    }
  };
  var renderSlotItem = function renderSlotItem(item, indents) {
    var indent = /*#__PURE__*/_react["default"].createElement("span", {
      key: "es".concat(item.indent),
      className: "expander-space"
    });
    var iconProps = {
      key: "es".concat(item.indent),
      onClick: function onClick() {
        return handleToggleExpand(item);
      }
    };
    if (item.hasChildren) {
      indent = item.expanded ? /*#__PURE__*/_react["default"].createElement(_icons.MinusSquareOutlined, iconProps) : /*#__PURE__*/_react["default"].createElement(_icons.PlusSquareOutlined, iconProps);
    }
    indents.push(indent);
    var slotCell = slotClickedFunc ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "slot-cell"
    }, indents, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      style: {
        cursor: 'pointer'
      },
      className: "slot-text txt-btn-dis",
      onClick: function onClick() {
        return slotClickedFunc(schedulerData, item);
      }
    }, item.slotName)) : /*#__PURE__*/_react["default"].createElement("span", {
      className: "slot-cell"
    }, indents, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "slot-text txt-btn-dis",
      style: {
        cursor: slotClickedFunc === undefined ? undefined : 'pointer'
      }
    }, item.slotName));
    var slotItem = /*#__PURE__*/_react["default"].createElement("div", {
      title: item.slotTitle || item.slotName,
      className: "overflow-text header2-text",
      style: {
        textAlign: 'left'
      }
    }, slotCell);
    if (slotItemTemplateResolver) {
      var resolvedTemplate = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, 'overflow-text header2-text');
      if (resolvedTemplate) {
        slotItem = resolvedTemplate;
      }
    }
    var tdStyle = {
      height: item.rowHeight,
      backgroundColor: item.groupOnly ? schedulerData.config.groupOnlySlotColor : undefined
    };
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: item.slotId
    }, /*#__PURE__*/_react["default"].createElement("td", {
      "data-resource-id": item.slotId,
      style: tdStyle
    }, slotItem));
  };
  var resourceList = displayRenderData.map(function (item) {
    var indents = [];
    for (var i = 0; i < item.indent; i += 1) {
      indents.push(/*#__PURE__*/_react["default"].createElement("span", {
        key: "es".concat(i),
        className: "expander-space"
      }));
    }
    return renderSlotItem(item, indents);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: paddingBottom
    }
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "resource-table"
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, resourceList)));
}
ResourceView.propTypes = {
  schedulerData: _propTypes["default"].object.isRequired,
  contentScrollbarHeight: _propTypes["default"].number.isRequired,
  slotClickedFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func,
  toggleExpandFunc: _propTypes["default"].func
};
var _default = exports["default"] = ResourceView;