"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactDnd = require("react-dnd");
var _default = require("../config/default");
var _utility = require("../helper/utility");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DnDContext = exports["default"] = /*#__PURE__*/_createClass(function DnDContext(sources, DecoratedComponent) {
  var _this = this;
  _classCallCheck(this, DnDContext);
  _defineProperty(this, "extractInitialTimes", function (monitor, pos, cellWidth, resourceEvents, cellUnit, localeDayjs) {
    var initialPoint = monitor.getInitialClientOffset();
    var initialLeftIndex = Math.floor((initialPoint.x - pos.x) / cellWidth);
    var initialStart = resourceEvents.headerItems[initialLeftIndex].start;
    var initialEnd = resourceEvents.headerItems[initialLeftIndex].end;
    if (cellUnit !== _default.CellUnit.Hour) {
      var end = localeDayjs(new Date(initialStart)).hour(23).minute(59).second(59);
      initialEnd = end.format(_default.DATETIME_FORMAT);
    }
    return {
      initialStart: initialStart,
      initialEnd: initialEnd
    };
  });
  _defineProperty(this, "getDropSpec", function () {
    return {
      drop: function drop(props, monitor, component) {
        var schedulerData = props.schedulerData,
          resourceEvents = props.resourceEvents;
        var cellUnit = schedulerData.cellUnit,
          localeDayjs = schedulerData.localeDayjs;
        var type = monitor.getItemType();
        var pos = (0, _utility.getPos)(component.eventContainer);
        var cellWidth = schedulerData.getContentCellWidth();
        var initialStartTime = null;
        var initialEndTime = null;
        if (type === _default.DnDTypes.EVENT) {
          var _this$extractInitialT = _this.extractInitialTimes(monitor, pos, cellWidth, resourceEvents, cellUnit, localeDayjs),
            initialStart = _this$extractInitialT.initialStart,
            initialEnd = _this$extractInitialT.initialEnd;
          initialStartTime = initialStart;
          initialEndTime = initialEnd;
        }
        var point = monitor.getClientOffset();
        var leftIndex = Math.floor((point.x - pos.x) / cellWidth);
        var startTime = resourceEvents.headerItems[leftIndex].start;
        var endTime = resourceEvents.headerItems[leftIndex].end;
        if (cellUnit !== _default.CellUnit.Hour) {
          endTime = localeDayjs(new Date(resourceEvents.headerItems[leftIndex].start)).hour(23).minute(59).second(59).format(_default.DATETIME_FORMAT);
        }
        return {
          slotId: resourceEvents.slotId,
          slotName: resourceEvents.slotName,
          start: startTime,
          end: endTime,
          initialStart: initialStartTime,
          initialEnd: initialEndTime
        };
      },
      hover: function hover(props, monitor, component) {
        var schedulerData = props.schedulerData,
          resourceEvents = props.resourceEvents,
          movingEvent = props.movingEvent;
        var cellUnit = schedulerData.cellUnit,
          config = schedulerData.config,
          viewType = schedulerData.viewType,
          localeDayjs = schedulerData.localeDayjs;
        _this.config = config;
        var item = monitor.getItem();
        var type = monitor.getItemType();
        var pos = (0, _utility.getPos)(component.eventContainer);
        var cellWidth = schedulerData.getContentCellWidth();
        var initialStart = null;
        // let initialEnd = null;
        if (type === _default.DnDTypes.EVENT) {
          // const { initialStart: iStart, initialEnd: iEnd } = this.extractInitialTimes(monitor, pos, cellWidth, resourceEvents, cellUnit, localeDayjs);
          var _this$extractInitialT2 = _this.extractInitialTimes(monitor, pos, cellWidth, resourceEvents, cellUnit, localeDayjs),
            iStart = _this$extractInitialT2.initialStart;
          initialStart = iStart;
          // initialEnd = iEnd;
        }
        var point = monitor.getClientOffset();
        var leftIndex = Math.floor((point.x - pos.x) / cellWidth);
        if (!resourceEvents.headerItems[leftIndex]) {
          return;
        }
        var newStart = resourceEvents.headerItems[leftIndex].start;
        var newEnd = resourceEvents.headerItems[leftIndex].end;
        if (cellUnit !== _default.CellUnit.Hour) {
          newEnd = localeDayjs(new Date(resourceEvents.headerItems[leftIndex].start)).hour(23).minute(59).second(59).format(_default.DATETIME_FORMAT);
        }
        var slotId = resourceEvents.slotId,
          slotName = resourceEvents.slotName;
        var action = 'New';
        var isEvent = type === _default.DnDTypes.EVENT;
        if (isEvent) {
          var event = item;
          if (config.relativeMove) {
            newStart = localeDayjs(event.start).add(localeDayjs(newStart).diff(localeDayjs(new Date(initialStart))), 'ms').format(_default.DATETIME_FORMAT);
          } else if (viewType !== _default.ViewType.Day) {
            var tmpDayjs = localeDayjs(newStart);
            newStart = localeDayjs(event.start).year(tmpDayjs.year()).month(tmpDayjs.month()).date(tmpDayjs.date()).format(_default.DATETIME_FORMAT);
          }
          newEnd = localeDayjs(newStart).add(localeDayjs(event.end).diff(localeDayjs(event.start)), 'ms').format(_default.DATETIME_FORMAT);

          // if crossResourceMove disabled, slot returns old value
          if (config.crossResourceMove === false) {
            slotId = schedulerData._getEventSlotId(item);
            slotName = undefined;
            var slot = schedulerData.getSlotById(slotId);
            if (slot) slotName = slot.name;
          }
          action = 'Move';
        }
        if (movingEvent) {
          movingEvent(schedulerData, slotId, slotName, newStart, newEnd, action, type, item);
        }
      },
      canDrop: function canDrop(props, monitor) {
        var schedulerData = props.schedulerData,
          resourceEvents = props.resourceEvents;
        var item = monitor.getItem();
        if (schedulerData._isResizing()) return false;
        var config = schedulerData.config;
        return config.movable && !resourceEvents.groupOnly && (item.movable === undefined || item.movable !== false);
      }
    };
  });
  _defineProperty(this, "getDropCollect", function (connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  });
  _defineProperty(this, "getDropTarget", function (dragAndDropEnabled) {
    return dragAndDropEnabled ? (0, _reactDnd.DropTarget)(_toConsumableArray(_this.sourceMap.keys()), _this.getDropSpec(), _this.getDropCollect)(_this.DecoratedComponent) : _this.DecoratedComponent;
  });
  _defineProperty(this, "getDndSource", function () {
    var dndType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _default.DnDTypes.EVENT;
    return _this.sourceMap.get(dndType);
  });
  this.sourceMap = new Map();
  sources.forEach(function (item) {
    _this.sourceMap.set(item.dndType, item);
  });
  this.DecoratedComponent = DecoratedComponent;
});