"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactDnd = require("react-dnd");
var _default = require("../config/default");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DnDSource = exports["default"] = /*#__PURE__*/_createClass(function DnDSource(resolveDragObjFunc, DecoratedComponent, DnDEnabled) {
  var _this = this;
  var dndType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _default.DnDTypes.EVENT;
  _classCallCheck(this, DnDSource);
  _defineProperty(this, "getDragSpec", function () {
    return {
      // beginDrag: (props, monitor, component) => this.resolveDragObjFunc(props),
      beginDrag: function beginDrag(props) {
        return _this.resolveDragObjFunc(props);
      },
      // endDrag: (props, monitor, component) => {
      endDrag: function endDrag(props, monitor) {
        if (!monitor.didDrop()) return;
        var moveEvent = props.moveEvent,
          newEvent = props.newEvent,
          schedulerData = props.schedulerData;
        var events = schedulerData.events,
          config = schedulerData.config,
          viewType = schedulerData.viewType,
          localeDayjs = schedulerData.localeDayjs;
        var item = monitor.getItem();
        var type = monitor.getItemType();
        var dropResult = monitor.getDropResult();
        var slotId = dropResult.slotId;
        var slotName = dropResult.slotName;
        var newStart = dropResult.start;
        var newEnd = dropResult.end;
        var initialStart = dropResult.initialStart;
        // const { initialEnd } = dropResult;
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
        var hasConflict = false;
        if (config.checkConflict) {
          var start = localeDayjs(newStart);
          var end = localeDayjs(newEnd);
          events.forEach(function (e) {
            if (schedulerData._getEventSlotId(e) === slotId && (!isEvent || e.id !== item.id)) {
              var eStart = localeDayjs(e.start);
              var eEnd = localeDayjs(e.end);
              if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
            }
          });
        }
        if (hasConflict) {
          var conflictOccurred = props.conflictOccurred;
          if (conflictOccurred !== undefined) {
            conflictOccurred(schedulerData, action, item, type, slotId, slotName, newStart, newEnd);
          } else {
            console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
          }
        } else if (isEvent) {
          if (moveEvent !== undefined) {
            moveEvent(schedulerData, item, slotId, slotName, newStart, newEnd);
          }
        } else if (newEvent !== undefined) newEvent(schedulerData, slotId, slotName, newStart, newEnd, type, item);
      },
      canDrag: function canDrag(props) {
        var schedulerData = props.schedulerData,
          resourceEvents = props.resourceEvents;
        var item = _this.resolveDragObjFunc(props);
        if (schedulerData._isResizing()) return false;
        var config = schedulerData.config;
        return config.movable && (resourceEvents === undefined || !resourceEvents.groupOnly) && (item.movable === undefined || item.movable !== false);
      }
    };
  });
  _defineProperty(this, "getDragCollect", function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
      connectDragPreview: connect.dragPreview()
    };
  });
  _defineProperty(this, "getDragSource", function () {
    return _this.dragSource;
  });
  this.resolveDragObjFunc = resolveDragObjFunc;
  this.DecoratedComponent = DecoratedComponent;
  this.dndType = dndType;
  this.dragSource = DnDEnabled ? (0, _reactDnd.DragSource)(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent) : this.DecoratedComponent;
});