"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AddMorePopover", {
  enumerable: true,
  get: function get() {
    return _AddMorePopover["default"];
  }
});
Object.defineProperty(exports, "CellUnit", {
  enumerable: true,
  get: function get() {
    return _default.CellUnit;
  }
});
Object.defineProperty(exports, "DATETIME_FORMAT", {
  enumerable: true,
  get: function get() {
    return _default.DATETIME_FORMAT;
  }
});
Object.defineProperty(exports, "DATE_FORMAT", {
  enumerable: true,
  get: function get() {
    return _default.DATE_FORMAT;
  }
});
Object.defineProperty(exports, "DemoData", {
  enumerable: true,
  get: function get() {
    return _sample["default"];
  }
});
Object.defineProperty(exports, "DnDContext", {
  enumerable: true,
  get: function get() {
    return _DnDContext["default"];
  }
});
Object.defineProperty(exports, "DnDSource", {
  enumerable: true,
  get: function get() {
    return _DnDSource["default"];
  }
});
exports.Scheduler = void 0;
Object.defineProperty(exports, "SchedulerData", {
  enumerable: true,
  get: function get() {
    return _SchedulerData["default"];
  }
});
Object.defineProperty(exports, "SummaryPos", {
  enumerable: true,
  get: function get() {
    return _default.SummaryPos;
  }
});
Object.defineProperty(exports, "ViewType", {
  enumerable: true,
  get: function get() {
    return _default.ViewType;
  }
});
Object.defineProperty(exports, "wrapperFun", {
  enumerable: true,
  get: function get() {
    return _WrapperFun["default"];
  }
});
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _default = require("../config/default");
var _sample = _interopRequireDefault(require("../sample-data/sample1"));
var _AddMorePopover = _interopRequireDefault(require("./AddMorePopover"));
var _AgendaView = _interopRequireDefault(require("./AgendaView"));
var _BodyView = _interopRequireDefault(require("./BodyView"));
var _DnDContext = _interopRequireDefault(require("./DnDContext"));
var _DnDSource = _interopRequireDefault(require("./DnDSource"));
var _EventItem = _interopRequireDefault(require("./EventItem"));
var _HeaderView = _interopRequireDefault(require("./HeaderView"));
var _ResourceEvents = _interopRequireDefault(require("./ResourceEvents"));
var _ResourceView = _interopRequireDefault(require("./ResourceView"));
var _SchedulerData = _interopRequireDefault(require("./SchedulerData"));
var _SchedulerHeader = _interopRequireDefault(require("./SchedulerHeader"));
var _WrapperFun = _interopRequireDefault(require("./WrapperFun"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable */ // Col, Row and Icon do not have their own less files for styling. They use
// rules declared in antd's global css. If these styles are imported directly
// from within antd, they'll include, for instance, reset rules. These will
// affect everything on the page and in essence would leak antd's global styles
// into all projects using this library. Instead of doing that, we are using
// a hack which allows us to wrap all antd styles to target specific root. In
// this case the root id will be "RBS-Scheduler-root". This way the reset styles
// won't be applied to elements declared outside of <Scheduler /> component.
//
// For development
// This fix is implemented with webpack's NormalModuleReplacementPlugin in
// webpack/webpack-dev.config.js.
//
//
// The next components have their own specific stylesheets which we import
// separately here to avoid importing from files which have required the global
// antd styles.
var Scheduler = exports.Scheduler = /*#__PURE__*/function (_Component) {
  function Scheduler(props) {
    var _this;
    _classCallCheck(this, Scheduler);
    _this = _callSuper(this, Scheduler, [props]);
    _defineProperty(_this, "onWindowResize", function (e) {
      var schedulerData = _this.props.schedulerData;
      schedulerData._setDocumentWidth(document.documentElement.clientWidth);
      _this.setState({
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight
      });
    });
    _defineProperty(_this, "resolveScrollbarSize", function () {
      var contentScrollbarHeight = 17;
      var contentScrollbarWidth = 17;
      var resourceScrollbarHeight = 17;
      var resourceScrollbarWidth = 17;
      if (_this.schedulerContent) {
        contentScrollbarHeight = _this.schedulerContent.offsetHeight - _this.schedulerContent.clientHeight;
        contentScrollbarWidth = _this.schedulerContent.offsetWidth - _this.schedulerContent.clientWidth;
      }
      if (_this.schedulerResource) {
        resourceScrollbarHeight = _this.schedulerResource.offsetHeight - _this.schedulerResource.clientHeight;
        resourceScrollbarWidth = _this.schedulerResource.offsetWidth - _this.schedulerResource.clientWidth;
      }
      var tmpState = {};
      var needSet = false;
      if (contentScrollbarHeight !== _this.state.contentScrollbarHeight) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          contentScrollbarHeight: contentScrollbarHeight
        });
        needSet = true;
      }
      if (contentScrollbarWidth !== _this.state.contentScrollbarWidth) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          contentScrollbarWidth: contentScrollbarWidth
        });
        needSet = true;
      }
      if (resourceScrollbarHeight !== _this.state.resourceScrollbarHeight) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          resourceScrollbarHeight: resourceScrollbarHeight
        });
        needSet = true;
      }
      if (resourceScrollbarWidth !== _this.state.resourceScrollbarWidth) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          resourceScrollbarWidth: resourceScrollbarWidth
        });
        needSet = true;
      }
      if (needSet) _this.setState(tmpState);
    });
    _defineProperty(_this, "schedulerHeadRef", function (element) {
      _this.schedulerHead = element;
    });
    _defineProperty(_this, "onSchedulerHeadMouseOver", function () {
      _this.currentArea = 2;
    });
    _defineProperty(_this, "onSchedulerHeadMouseOut", function () {
      _this.currentArea = -1;
    });
    _defineProperty(_this, "onSchedulerHeadScroll", function (proxy, event) {
      if ((_this.currentArea === 2 || _this.currentArea === -1) && _this.schedulerContent.scrollLeft !== _this.schedulerHead.scrollLeft) {
        _this.schedulerContent.scrollLeft = _this.schedulerHead.scrollLeft;
      }
    });
    _defineProperty(_this, "schedulerResourceRef", function (element) {
      _this.schedulerResource = element;
    });
    _defineProperty(_this, "onSchedulerResourceMouseOver", function () {
      _this.currentArea = 1;
    });
    _defineProperty(_this, "onSchedulerResourceMouseOut", function () {
      _this.currentArea = -1;
    });
    _defineProperty(_this, "onSchedulerResourceScroll", function (proxy, event) {
      if (_this.schedulerResource) {
        if ((_this.currentArea === 1 || _this.currentArea === -1) && _this.schedulerContent.scrollTop !== _this.schedulerResource.scrollTop) {
          _this.schedulerContent.scrollTop = _this.schedulerResource.scrollTop;
        }
      }
    });
    _defineProperty(_this, "schedulerContentRef", function (element) {
      _this.schedulerContent = element;
    });
    _defineProperty(_this, "schedulerContentBgTableRef", function (element) {
      _this.schedulerContentBgTable = element;
    });
    _defineProperty(_this, "onSchedulerContentMouseOver", function () {
      _this.currentArea = 0;
    });
    _defineProperty(_this, "onSchedulerContentMouseOut", function () {
      _this.currentArea = -1;
    });
    _defineProperty(_this, "onSchedulerContentScroll", function (proxy, event) {
      if (_this.schedulerResource) {
        if (_this.currentArea === 0 || _this.currentArea === -1) {
          if (_this.schedulerHead.scrollLeft !== _this.schedulerContent.scrollLeft) _this.schedulerHead.scrollLeft = _this.schedulerContent.scrollLeft;
          if (_this.schedulerResource.scrollTop !== _this.schedulerContent.scrollTop) _this.schedulerResource.scrollTop = _this.schedulerContent.scrollTop;
        }
      }
      var _this$props = _this.props,
        schedulerData = _this$props.schedulerData,
        onScrollLeft = _this$props.onScrollLeft,
        onScrollRight = _this$props.onScrollRight,
        onScrollTop = _this$props.onScrollTop,
        onScrollBottom = _this$props.onScrollBottom;
      if (_this.schedulerContent.scrollLeft !== _this.scrollLeft) {
        if (_this.schedulerContent.scrollLeft === 0 && onScrollLeft !== undefined) {
          onScrollLeft(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth);
        }
        if (Math.round(_this.schedulerContent.scrollLeft) === _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth && onScrollRight !== undefined) {
          onScrollRight(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth);
        }
      } else if (_this.schedulerContent.scrollTop !== _this.scrollTop) {
        if (_this.schedulerContent.scrollTop === 0 && onScrollTop !== undefined) {
          onScrollTop(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight);
        }
        if (Math.round(_this.schedulerContent.scrollTop) === _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight && onScrollBottom !== undefined) {
          onScrollBottom(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight);
        }
      }
      _this.scrollLeft = _this.schedulerContent.scrollLeft;
      _this.scrollTop = _this.schedulerContent.scrollTop;
    });
    _defineProperty(_this, "onViewChange", function (e) {
      var _this$props2 = _this.props,
        onViewChange = _this$props2.onViewChange,
        schedulerData = _this$props2.schedulerData;
      var viewType = parseInt(e.target.value.charAt(0));
      var showAgenda = e.target.value.charAt(1) === '1';
      var isEventPerspective = e.target.value.charAt(2) === '1';
      onViewChange(schedulerData, {
        viewType: viewType,
        showAgenda: showAgenda,
        isEventPerspective: isEventPerspective
      });
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        spinning: false
      }));
    });
    _defineProperty(_this, "goNext", function () {
      var _this$props3 = _this.props,
        nextClick = _this$props3.nextClick,
        schedulerData = _this$props3.schedulerData;
      nextClick(schedulerData);
    });
    _defineProperty(_this, "goBack", function () {
      var _this$props4 = _this.props,
        prevClick = _this$props4.prevClick,
        schedulerData = _this$props4.schedulerData;
      prevClick(schedulerData);
    });
    _defineProperty(_this, "onSelect", function (date) {
      var _this$props5 = _this.props,
        onSelectDate = _this$props5.onSelectDate,
        schedulerData = _this$props5.schedulerData;
      onSelectDate(schedulerData, date);
    });
    var _schedulerData = props.schedulerData,
      dndSources = props.dndSources,
      parentRef = props.parentRef;
    var sources = [];
    sources.push(new _DnDSource["default"](function (dndProps) {
      return dndProps.eventItem;
    }, _EventItem["default"], _schedulerData.config.dragAndDropEnabled));
    if (dndSources !== undefined && dndSources.length > 0) {
      sources = [].concat(_toConsumableArray(sources), _toConsumableArray(dndSources));
    }
    var dndContext = new _DnDContext["default"](sources, _ResourceEvents["default"]);
    _this.currentArea = -1;
    _this.state = {
      dndContext: dndContext,
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      documentWidth: 0,
      documentHeight: 0
    };
    _this.scrollLeft = 0;
    _this.scrollTop = 0;
    if (_schedulerData.isSchedulerResponsive() && !_schedulerData.config.responsiveByParent || parentRef === undefined) {
      _schedulerData._setDocumentWidth(document.documentElement.clientWidth);
      window.onresize = _this.onWindowResize;
    }
    return _this;
  }
  _inherits(Scheduler, _Component);
  return _createClass(Scheduler, [{
    key: "componentDidMount",
    value: function componentDidMount(props, state) {
      var _this2 = this;
      var _this$props6 = this.props,
        schedulerData = _this$props6.schedulerData,
        parentRef = _this$props6.parentRef;
      this.resolveScrollbarSize();
      if (parentRef !== undefined) {
        if (schedulerData.config.responsiveByParent && !!parentRef.current) {
          schedulerData._setDocumentWidth(parentRef.current.offsetWidth);
          this.ulObserver = new ResizeObserver(function (entries, observer) {
            if (parentRef.current) {
              var width = parentRef.current.offsetWidth;
              var height = parentRef.current.offsetHeight;
              schedulerData._setDocumentWidth(width);
              _this2.setState({
                documentWidth: width,
                documentHeight: height
              });
            }
          });
          this.ulObserver.observe(parentRef.current);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props, state) {
      this.resolveScrollbarSize();
      var schedulerData = this.props.schedulerData;
      var localeDayjs = schedulerData.localeDayjs,
        behaviors = schedulerData.behaviors;
      if (schedulerData.getScrollToSpecialDayjs() && !!behaviors.getScrollSpecialDayjsFunc) {
        if (!!this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
          var start = localeDayjs(new Date(schedulerData.startDate)).startOf('day');
          var end = localeDayjs(new Date(schedulerData.endDate)).endOf('day');
          var specialDayjs = behaviors.getScrollSpecialDayjsFunc(schedulerData, start, end);
          if (specialDayjs >= start && specialDayjs <= end) {
            var index = 0;
            schedulerData.headers.forEach(function (item) {
              var header = localeDayjs(new Date(item.time));
              if (specialDayjs >= header) index++;
            });
            this.schedulerContent.scrollLeft = (index - 1) * schedulerData.getContentCellWidth();
            schedulerData.setScrollToSpecialDayjs(false);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props7 = this.props,
        schedulerData = _this$props7.schedulerData,
        leftCustomHeader = _this$props7.leftCustomHeader,
        rightCustomHeader = _this$props7.rightCustomHeader;
      var viewType = schedulerData.viewType,
        renderData = schedulerData.renderData,
        showAgenda = schedulerData.showAgenda,
        config = schedulerData.config;
      var width = schedulerData.getSchedulerWidth();
      var tbodyContent = /*#__PURE__*/_react["default"].createElement("tr", null);
      if (showAgenda) {
        tbodyContent = /*#__PURE__*/_react["default"].createElement(_AgendaView["default"], this.props);
      } else {
        var resourceTableWidth = schedulerData.getResourceTableWidth();
        var schedulerContainerWidth = width - (config.resourceViewEnabled ? resourceTableWidth : 0);
        var schedulerWidth = schedulerData.getContentTableWidth() - 1;
        var DndResourceEvents = this.state.dndContext.getDropTarget(config.dragAndDropEnabled);
        var eventDndSource = this.state.dndContext.getDndSource();
        var displayRenderData = renderData.filter(function (o) {
          return o.render;
        });
        var resourceEventsList = displayRenderData.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(DndResourceEvents, _extends({}, _this3.props, {
            key: item.slotId,
            resourceEvents: item,
            dndSource: eventDndSource
          }));
        });
        var contentScrollbarHeight = this.state.contentScrollbarHeight;
        var contentScrollbarWidth = this.state.contentScrollbarWidth;
        var resourceScrollbarHeight = this.state.resourceScrollbarHeight;
        var resourceScrollbarWidth = this.state.resourceScrollbarWidth;
        var contentHeight = config.schedulerContentHeight;
        var resourcePaddingBottom = resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
        var contentPaddingBottom = contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
        var schedulerContentStyle = {
          overflowX: viewType === _default.ViewType.Week ? 'hidden' : 'auto',
          overflowY: 'auto',
          margin: '0px',
          position: 'relative',
          height: contentHeight,
          paddingBottom: contentPaddingBottom
        };
        var resourceContentStyle = {
          height: contentHeight,
          overflowX: 'auto',
          overflowY: 'auto',
          width: resourceTableWidth + resourceScrollbarWidth - 2,
          margin: "0px -".concat(contentScrollbarWidth, "px 0px 0px")
        };
        if (config.schedulerMaxHeight > 0) {
          schedulerContentStyle = _objectSpread(_objectSpread({}, schedulerContentStyle), {}, {
            maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
          });
          resourceContentStyle = _objectSpread(_objectSpread({}, resourceContentStyle), {}, {
            maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
          });
        }
        var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
        tbodyContent = /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            display: config.resourceViewEnabled ? undefined : 'none',
            width: resourceTableWidth,
            verticalAlign: 'top'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "resource-view"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflow: 'hidden',
            borderBottom: '1px solid #e9e9e9',
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflowX: 'scroll',
            overflowY: 'hidden',
            margin: "0px 0px -".concat(contentScrollbarHeight, "px")
          }
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "resource-table"
        }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
          style: {
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("th", {
          className: "header3-text"
        }, resourceName)))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: resourceContentStyle,
          ref: this.schedulerResourceRef,
          onMouseOver: this.onSchedulerResourceMouseOver,
          onFocus: this.onSchedulerResourceMouseOver,
          onMouseOut: this.onSchedulerResourceMouseOut,
          onBlur: this.onSchedulerResourceMouseOut,
          onScroll: this.onSchedulerResourceScroll
        }, /*#__PURE__*/_react["default"].createElement(_ResourceView["default"], _extends({}, this.props, {
          contentScrollbarHeight: resourcePaddingBottom
        }))))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-view",
          style: {
            width: schedulerContainerWidth,
            verticalAlign: 'top'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflow: 'hidden',
            borderBottom: '1px solid #e9e9e9',
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflowX: 'scroll',
            overflowY: 'hidden',
            margin: "0px 0px -".concat(contentScrollbarHeight, "px")
          },
          ref: this.schedulerHeadRef,
          onMouseOver: this.onSchedulerHeadMouseOver,
          onFocus: this.onSchedulerHeadMouseOver,
          onMouseOut: this.onSchedulerHeadMouseOut,
          onBlur: this.onSchedulerHeadMouseOut,
          onScroll: this.onSchedulerHeadScroll
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            paddingRight: "".concat(contentScrollbarWidth, "px"),
            width: schedulerWidth + contentScrollbarWidth
          }
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-bg-table"
        }, /*#__PURE__*/_react["default"].createElement(_HeaderView["default"], this.props))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: schedulerContentStyle,
          ref: this.schedulerContentRef,
          onMouseOver: this.onSchedulerContentMouseOver,
          onFocus: this.onSchedulerContentMouseOver,
          onMouseOut: this.onSchedulerContentMouseOut,
          onBlur: this.onSchedulerContentMouseOut,
          onScroll: this.onSchedulerContentScroll
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: schedulerWidth
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-content"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-content-table"
        }, /*#__PURE__*/_react["default"].createElement("tbody", null, resourceEventsList))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-bg"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-bg-table",
          style: {
            width: schedulerWidth
          },
          ref: this.schedulerContentBgTableRef
        }, /*#__PURE__*/_react["default"].createElement(_BodyView["default"], this.props))))))));
      }
      var schedulerHeader = /*#__PURE__*/_react["default"].createElement("div", null);
      if (config.headerEnabled) {
        schedulerHeader = /*#__PURE__*/_react["default"].createElement(_SchedulerHeader["default"], {
          onViewChange: this.onViewChange,
          schedulerData: schedulerData,
          onSelectDate: this.onSelect,
          goNext: this.goNext,
          goBack: this.goBack,
          rightCustomHeader: rightCustomHeader,
          leftCustomHeader: leftCustomHeader
        });
      }
      return /*#__PURE__*/_react["default"].createElement("table", {
        id: "RBS-Scheduler-root",
        className: "scheduler",
        style: {
          width: "".concat(width, "px")
        }
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2"
      }, schedulerHeader))), /*#__PURE__*/_react["default"].createElement("tbody", null, tbodyContent));
    }
  }]);
}(_react.Component);
_defineProperty(Scheduler, "propTypes", {
  parentRef: _propTypes["default"].object,
  schedulerData: _propTypes["default"].object.isRequired,
  prevClick: _propTypes["default"].func.isRequired,
  nextClick: _propTypes["default"].func.isRequired,
  onViewChange: _propTypes["default"].func.isRequired,
  onSelectDate: _propTypes["default"].func.isRequired,
  onSetAddMoreState: _propTypes["default"].func,
  updateEventStart: _propTypes["default"].func,
  updateEventEnd: _propTypes["default"].func,
  moveEvent: _propTypes["default"].func,
  movingEvent: _propTypes["default"].func,
  leftCustomHeader: _propTypes["default"].object,
  rightCustomHeader: _propTypes["default"].object,
  newEvent: _propTypes["default"].func,
  subtitleGetter: _propTypes["default"].func,
  eventItemClick: _propTypes["default"].func,
  viewEventClick: _propTypes["default"].func,
  viewEventText: _propTypes["default"].string,
  viewEvent2Click: _propTypes["default"].func,
  viewEvent2Text: _propTypes["default"].string,
  conflictOccurred: _propTypes["default"].func,
  eventItemTemplateResolver: _propTypes["default"].func,
  dndSources: _propTypes["default"].array,
  slotClickedFunc: _propTypes["default"].func,
  toggleExpandFunc: _propTypes["default"].func,
  slotItemTemplateResolver: _propTypes["default"].func,
  nonAgendaCellHeaderTemplateResolver: _propTypes["default"].func,
  onScrollLeft: _propTypes["default"].func,
  onScrollRight: _propTypes["default"].func,
  onScrollTop: _propTypes["default"].func,
  onScrollBottom: _propTypes["default"].func
});