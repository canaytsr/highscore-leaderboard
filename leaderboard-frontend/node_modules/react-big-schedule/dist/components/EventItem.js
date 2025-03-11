"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antd = require("antd");
var _propTypes = require("prop-types");
var _react = _interopRequireWildcard(require("react"));
var _default2 = require("../config/default");
var _EventItemPopover = _interopRequireDefault(require("./EventItemPopover"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable no-return-assign */
var stopDragHelper = function stopDragHelper(_ref) {
  var count = _ref.count,
    cellUnit = _ref.cellUnit,
    config = _ref.config,
    dragType = _ref.dragType,
    eventItem = _ref.eventItem,
    localeDayjs = _ref.localeDayjs,
    value = _ref.value;
  var whileTrue = true;
  var tCount = 0;
  var i = 0;
  var result = value;
  return new Promise(function (resolve) {
    if (count !== 0 && cellUnit !== _default2.CellUnit.Hour && config.displayWeekend === false) {
      while (whileTrue) {
        i = count > 0 ? i + 1 : i - 1;
        var date = localeDayjs(new Date(eventItem[dragType])).add(i, 'days');
        var dayOfWeek = date.day();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          tCount = count > 0 ? tCount + 1 : tCount - 1;
          if (tCount === count) {
            result = date.format(_default2.DATETIME_FORMAT);
            break;
          }
        }
      }
    }
    resolve(result);
  });
};
var startResizable = function startResizable(_ref2) {
  var eventItem = _ref2.eventItem,
    isInPopover = _ref2.isInPopover,
    schedulerData = _ref2.schedulerData;
  return schedulerData.config.startResizable === true && isInPopover === false && (eventItem.resizable === undefined || eventItem.resizable !== false) && (eventItem.startResizable === undefined || eventItem.startResizable !== false);
};
var endResizable = function endResizable(_ref3) {
  var eventItem = _ref3.eventItem,
    isInPopover = _ref3.isInPopover,
    schedulerData = _ref3.schedulerData;
  return schedulerData.config.endResizable === true && isInPopover === false && (eventItem.resizable === undefined || eventItem.resizable !== false) && (eventItem.endResizable === undefined || eventItem.endResizable !== false);
};
var EventItem = /*#__PURE__*/function (_Component) {
  function EventItem(_props) {
    var _this;
    _classCallCheck(this, EventItem);
    _this = _callSuper(this, EventItem, [_props]);
    _defineProperty(_this, "resizerHelper", function (dragType) {
      var eventType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'addEventListener';
      var resizer = dragType === 'start' ? _this.startResizer : _this.endResizer;
      var doDrag = dragType === 'start' ? _this.doStartDrag : _this.doEndDrag;
      var stopDrag = dragType === 'start' ? _this.stopStartDrag : _this.stopEndDrag;
      var cancelDrag = dragType === 'start' ? _this.cancelStartDrag : _this.cancelEndDrag;
      if (_this.supportTouch) {
        resizer[eventType]('touchmove', doDrag, false);
        resizer[eventType]('touchend', stopDrag, false);
        resizer[eventType]('touchcancel', cancelDrag, false);
      } else {
        document.documentElement[eventType]('mousemove', doDrag, false);
        document.documentElement[eventType]('mouseup', stopDrag, false);
      }
    });
    _defineProperty(_this, "initDragHelper", function (ev, dragType) {
      var _this$props = _this.props,
        schedulerData = _this$props.schedulerData,
        eventItem = _this$props.eventItem;
      var slotId = schedulerData._getEventSlotId(eventItem);
      var slot = schedulerData.getSlotById(slotId);
      if (!!slot && !!slot.groupOnly) return;
      if (schedulerData._isResizing()) return;
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        if (ev.buttons !== undefined && ev.buttons !== 1) return;
        clientX = ev.clientX;
      }
      _this.setState(_defineProperty({}, dragType === 'start' ? 'startX' : 'endX', clientX));
      schedulerData._startResizing();
      _this.resizerHelper(dragType, 'addEventListener');
      document.onselectstart = function () {
        return false;
      };
      document.ondragstart = function () {
        return false;
      };
    });
    _defineProperty(_this, "initStartDrag", function (ev) {
      _this.initDragHelper(ev, 'start');
    });
    _defineProperty(_this, "doStartDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }
      var _this$props2 = _this.props,
        left = _this$props2.left,
        width = _this$props2.width,
        leftIndex = _this$props2.leftIndex,
        rightIndex = _this$props2.rightIndex,
        schedulerData = _this$props2.schedulerData;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = rightIndex * cellWidth - offset;
      var startX = _this.state.startX;
      var newLeft = left + clientX - startX;
      var newWidth = width + startX - clientX;
      if (newWidth < minWidth) {
        newWidth = minWidth;
        newLeft = (rightIndex - 1) * cellWidth + (rightIndex - 1 > 0 ? 2 : 3);
      } else if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newLeft = 3;
      }
      _this.setState({
        left: newLeft,
        width: newWidth
      });
    });
    _defineProperty(_this, "stopStartDrag", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(ev) {
        var _this$props3, width, left, top, leftIndex, rightIndex, schedulerData, eventItem, updateEventStart, conflictOccurred, stateWidth, clientX, touch, cellUnit, events, config, localeDayjs, cellWidth, offset, minWidth, maxWidth, startX, newWidth, deltaX, sign, count, newStart, hasConflict, slotId, slotName, slot, start, end;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              ev.stopPropagation();
              _this.resizerHelper('start', 'removeEventListener');
              document.onselectstart = null;
              document.ondragstart = null;
              _this$props3 = _this.props, width = _this$props3.width, left = _this$props3.left, top = _this$props3.top, leftIndex = _this$props3.leftIndex, rightIndex = _this$props3.rightIndex, schedulerData = _this$props3.schedulerData, eventItem = _this$props3.eventItem, updateEventStart = _this$props3.updateEventStart, conflictOccurred = _this$props3.conflictOccurred;
              schedulerData._stopResizing();
              stateWidth = _this.state.width;
              if (!(stateWidth === width)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return");
            case 9:
              clientX = 0;
              if (!_this.supportTouch) {
                _context.next = 18;
                break;
              }
              if (!(ev.changedTouches.length === 0)) {
                _context.next = 14;
                break;
              }
              _this.setState({
                left: left,
                top: top,
                width: width
              });
              return _context.abrupt("return");
            case 14:
              touch = ev.changedTouches[0];
              clientX = touch.pageX;
              _context.next = 19;
              break;
            case 18:
              clientX = ev.clientX;
            case 19:
              cellUnit = schedulerData.cellUnit, events = schedulerData.events, config = schedulerData.config, localeDayjs = schedulerData.localeDayjs;
              cellWidth = schedulerData.getContentCellWidth();
              offset = leftIndex > 0 ? 5 : 6;
              minWidth = cellWidth - offset;
              maxWidth = rightIndex * cellWidth - offset;
              startX = _this.state.startX;
              newWidth = width + startX - clientX;
              deltaX = clientX - startX;
              sign = 1;
              if (deltaX < 0) {
                sign = -1;
              } else if (deltaX === 0) {
                sign = 0;
              }
              count = (sign > 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
              if (newWidth < minWidth) count = rightIndex - leftIndex - 1;else if (newWidth > maxWidth) count = -leftIndex;
              newStart = localeDayjs(new Date(eventItem.start)).add(cellUnit === _default2.CellUnit.Hour ? count * config.minuteStep : count, cellUnit === _default2.CellUnit.Hour ? 'minutes' : 'days').format(_default2.DATETIME_FORMAT);
              _context.next = 34;
              return stopDragHelper({
                count: count,
                cellUnit: cellUnit,
                config: config,
                eventItem: eventItem,
                localeDayjs: localeDayjs,
                dragType: 'start',
                value: newStart
              });
            case 34:
              newStart = _context.sent;
              hasConflict = false;
              slotId = schedulerData._getEventSlotId(eventItem);
              slot = schedulerData.getSlotById(slotId);
              if (slot) slotName = slot.name;
              if (config.checkConflict) {
                start = localeDayjs(new Date(newStart));
                end = localeDayjs(new Date(eventItem.end));
                events.forEach(function (e) {
                  if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeDayjs(new Date(e.start));
                    var eEnd = localeDayjs(new Date(e.end));
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                  }
                });
              }
              if (hasConflict) {
                _this.setState({
                  left: left,
                  top: top,
                  width: width
                });
                if (conflictOccurred !== undefined) {
                  conflictOccurred(schedulerData, 'StartResize', eventItem, _default2.DnDTypes.EVENT, slotId, slotName, newStart, eventItem.end);
                } else {
                  console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                }
                _this.subscribeResizeEvent(_this.props);
              } else if (updateEventStart !== undefined) updateEventStart(schedulerData, eventItem, newStart);
            case 41:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "cancelStartDrag", function (ev) {
      ev.stopPropagation();
      _this.startResizer.removeEventListener('touchmove', _this.doStartDrag, false);
      _this.startResizer.removeEventListener('touchend', _this.stopStartDrag, false);
      _this.startResizer.removeEventListener('touchcancel', _this.cancelStartDrag, false);
      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props4 = _this.props,
        schedulerData = _this$props4.schedulerData,
        left = _this$props4.left,
        top = _this$props4.top,
        width = _this$props4.width;
      schedulerData._stopResizing();
      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });
    _defineProperty(_this, "initEndDrag", function (ev) {
      _this.initDragHelper(ev, 'end');
    });
    _defineProperty(_this, "doEndDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;
      if (_this.supportTouch) {
        if (ev.changedTouches.length === 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }
      var _this$props5 = _this.props,
        width = _this$props5.width,
        leftIndex = _this$props5.leftIndex,
        schedulerData = _this$props5.schedulerData;
      var headers = schedulerData.headers;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
      var endX = _this.state.endX;
      var newWidth = width + clientX - endX;
      if (newWidth < minWidth) newWidth = minWidth;else if (newWidth > maxWidth) newWidth = maxWidth;
      _this.setState({
        width: newWidth
      });
    });
    _defineProperty(_this, "stopEndDrag", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ev) {
        var _this$props6, left, top, width, leftIndex, rightIndex, schedulerData, eventItem, updateEventEnd, conflictOccurred, stateWidth, clientX, touch, headers, cellUnit, events, config, localeDayjs, cellWidth, offset, minWidth, maxWidth, endX, newWidth, deltaX, sign, count, newEnd, hasConflict, slotId, slot, start, end;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ev.stopPropagation();
              _this.resizerHelper('end', 'removeEventListener');
              document.onselectstart = null;
              document.ondragstart = null;
              _this$props6 = _this.props, left = _this$props6.left, top = _this$props6.top, width = _this$props6.width, leftIndex = _this$props6.leftIndex, rightIndex = _this$props6.rightIndex, schedulerData = _this$props6.schedulerData, eventItem = _this$props6.eventItem, updateEventEnd = _this$props6.updateEventEnd, conflictOccurred = _this$props6.conflictOccurred;
              schedulerData._stopResizing();
              stateWidth = _this.state.width;
              if (!(stateWidth === width)) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return");
            case 9:
              clientX = 0;
              if (!_this.supportTouch) {
                _context2.next = 18;
                break;
              }
              if (!(ev.changedTouches.length === 0)) {
                _context2.next = 14;
                break;
              }
              _this.setState({
                left: left,
                top: top,
                width: width
              });
              return _context2.abrupt("return");
            case 14:
              touch = ev.changedTouches[0];
              clientX = touch.pageX;
              _context2.next = 19;
              break;
            case 18:
              clientX = ev.clientX;
            case 19:
              headers = schedulerData.headers, cellUnit = schedulerData.cellUnit, events = schedulerData.events, config = schedulerData.config, localeDayjs = schedulerData.localeDayjs;
              cellWidth = schedulerData.getContentCellWidth();
              offset = leftIndex > 0 ? 5 : 6;
              minWidth = cellWidth - offset;
              maxWidth = (headers.length - leftIndex) * cellWidth - offset;
              endX = _this.state.endX;
              newWidth = width + clientX - endX;
              deltaX = newWidth - width;
              sign = 1;
              if (deltaX < 0) {
                sign = -1;
              } else if (deltaX === 0) {
                sign = 0;
              }
              count = (sign < 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
              if (newWidth < minWidth) count = leftIndex - rightIndex + 1;else if (newWidth > maxWidth) count = headers.length - rightIndex;
              newEnd = localeDayjs(new Date(eventItem.end)).add(cellUnit === _default2.CellUnit.Hour ? count * config.minuteStep : count, cellUnit === _default2.CellUnit.Hour ? 'minutes' : 'days').format(_default2.DATETIME_FORMAT);
              _context2.next = 34;
              return stopDragHelper({
                dragType: 'end',
                cellUnit: cellUnit,
                config: config,
                count: count,
                value: newEnd,
                eventItem: eventItem,
                localeDayjs: localeDayjs
              });
            case 34:
              newEnd = _context2.sent;
              hasConflict = false;
              slotId = schedulerData._getEventSlotId(eventItem);
              slot = schedulerData.getSlotById(slotId);
              if (config.checkConflict) {
                start = localeDayjs(new Date(eventItem.start));
                end = localeDayjs(new Date(newEnd));
                events.forEach(function (e) {
                  if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeDayjs(new Date(e.start));
                    var eEnd = localeDayjs(new Date(e.end));
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) {
                      hasConflict = true;
                    }
                  }
                });
              }
              if (hasConflict) {
                _this.setState({
                  left: left,
                  top: top,
                  width: width
                });
                if (conflictOccurred !== undefined) {
                  conflictOccurred(schedulerData, 'EndResize', eventItem, _default2.DnDTypes.EVENT, slotId, slot ? slot.name : null, eventItem.start, newEnd);
                } else {
                  console.error('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                }
                _this.subscribeResizeEvent(_this.props);
              } else if (updateEventEnd !== undefined) {
                updateEventEnd(schedulerData, eventItem, newEnd);
              }
            case 40:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "cancelEndDrag", function (ev) {
      ev.stopPropagation();
      _this.endResizer.removeEventListener('touchmove', _this.doEndDrag, false);
      _this.endResizer.removeEventListener('touchend', _this.stopEndDrag, false);
      _this.endResizer.removeEventListener('touchcancel', _this.cancelEndDrag, false);
      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props7 = _this.props,
        schedulerData = _this$props7.schedulerData,
        left = _this$props7.left,
        top = _this$props7.top,
        width = _this$props7.width;
      schedulerData._stopResizing();
      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });
    _defineProperty(_this, "handleMouseMove", function (event) {
      var rect = _this.eventItemRef.current.getBoundingClientRect();
      _this.setState({
        contentMousePosX: event.clientX,
        eventItemLeftRect: rect.left,
        eventItemRightRect: rect.right
      });
    });
    _defineProperty(_this, "subscribeResizeEvent", function (props) {
      if (_this.startResizer !== undefined && _this.startResizer !== null) {
        if (_this.supportTouch) {
          // this.startResizer.removeEventListener('touchstart', this.initStartDrag, false);
          // if (startResizable(props))
          //     this.startResizer.addEventListener('touchstart', this.initStartDrag, false);
        } else {
          _this.startResizer.removeEventListener('mousedown', _this.initStartDrag, false);
          if (startResizable(props)) _this.startResizer.addEventListener('mousedown', _this.initStartDrag, false);
        }
      }
      if (_this.endResizer !== undefined && _this.endResizer !== null) {
        if (_this.supportTouch) {
          // this.endResizer.removeEventListener('touchstart', this.initEndDrag, false);
          // if (endResizable(props))
          //     this.endResizer.addEventListener('touchstart', this.initEndDrag, false);
        } else {
          _this.endResizer.removeEventListener('mousedown', _this.initEndDrag, false);
          if (endResizable(props)) _this.endResizer.addEventListener('mousedown', _this.initEndDrag, false);
        }
      }
    });
    var _left = _props.left,
      _top = _props.top,
      _width = _props.width;
    _this.state = {
      left: _left,
      top: _top,
      width: _width,
      contentMousePosX: 0,
      eventItemLeftRect: 0,
      eventItemRightRect: 0
    };
    _this.startResizer = undefined;
    _this.endResizer = undefined;
    _this.supportTouch = false; // 'ontouchstart' in window;

    _this.eventItemRef = /*#__PURE__*/_react["default"].createRef();
    _this._isMounted = false;
    return _this;
  }
  _inherits(EventItem, _Component);
  return _createClass(EventItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.supportTouch = 'ontouchstart' in window;
      this.subscribeResizeEvent(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        var _this$props8 = this.props,
          left = _this$props8.left,
          top = _this$props8.top,
          width = _this$props8.width;
        this.setState({
          left: left,
          top: top,
          width: width
        });
        this.subscribeResizeEvent(this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props9 = this.props,
        eventItem = _this$props9.eventItem,
        isStart = _this$props9.isStart,
        isEnd = _this$props9.isEnd,
        isInPopover = _this$props9.isInPopover,
        eventItemClick = _this$props9.eventItemClick,
        schedulerData = _this$props9.schedulerData,
        isDragging = _this$props9.isDragging,
        connectDragSource = _this$props9.connectDragSource,
        connectDragPreview = _this$props9.connectDragPreview,
        eventItemTemplateResolver = _this$props9.eventItemTemplateResolver;
      var config = schedulerData.config,
        localeDayjs = schedulerData.localeDayjs;
      var _this$state = this.state,
        left = _this$state.left,
        width = _this$state.width,
        top = _this$state.top;
      var roundCls;
      var popoverPlacement = config.eventItemPopoverPlacement;
      var isPopoverPlacementMousePosition = /(top|bottom)(Right|Left)MousePosition/.test(popoverPlacement);
      if (isStart) {
        roundCls = isEnd ? 'round-all' : 'round-head';
      } else {
        roundCls = isEnd ? 'round-tail' : 'round-none';
      }
      var bgColor = config.defaultEventBgColor;
      if (eventItem.bgColor) bgColor = eventItem.bgColor;
      var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);
      var content = /*#__PURE__*/_react["default"].createElement(_EventItemPopover["default"], _extends({}, this.props, {
        eventItem: eventItem,
        title: eventItem.title,
        startTime: eventItem.start,
        endTime: eventItem.end,
        statusColor: bgColor
      }));
      var start = localeDayjs(new Date(eventItem.start));
      var eventTitle = isInPopover ? "".concat(start.format('HH:mm'), " ").concat(titleText) : titleText;
      var startResizeDiv = /*#__PURE__*/_react["default"].createElement("div", null);
      if (startResizable(this.props)) startResizeDiv = /*#__PURE__*/_react["default"].createElement("div", {
        className: "event-resizer event-start-resizer",
        ref: function ref(_ref6) {
          return _this2.startResizer = _ref6;
        }
      });
      var endResizeDiv = /*#__PURE__*/_react["default"].createElement("div", null);
      if (endResizable(this.props)) endResizeDiv = /*#__PURE__*/_react["default"].createElement("div", {
        className: "event-resizer event-end-resizer",
        ref: function ref(_ref7) {
          return _this2.endResizer = _ref7;
        }
      });
      var eventItemTemplate = /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(roundCls, " event-item"),
        key: eventItem.id,
        style: {
          height: config.eventItemHeight,
          backgroundColor: bgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginLeft: '10px',
          lineHeight: "".concat(config.eventItemHeight, "px")
        }
      }, eventTitle));
      if (eventItemTemplateResolver !== undefined) {
        eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, undefined);
      }
      var a = /*#__PURE__*/_react["default"].createElement("a", {
        className: "timeline-event",
        ref: this.eventItemRef,
        onMouseMove: isPopoverPlacementMousePosition ? this.handleMouseMove : undefined,
        style: {
          left: left,
          width: width,
          top: top
        },
        onClick: function onClick() {
          if (eventItemClick) eventItemClick(schedulerData, eventItem);
        }
      }, eventItemTemplate, startResizeDiv, endResizeDiv);
      var getMousePositionOptionsData = function getMousePositionOptionsData() {
        var popoverOffsetX = 0;
        var mousePositionPlacement = '';
        if (isPopoverPlacementMousePosition) {
          var isMousePositionPlacementLeft = popoverPlacement.includes('Left');
          var contentMousePosX = _this2.state.contentMousePosX;
          var popoverWidth = config.eventItemPopoverWidth;
          var eventItemLeftRect = _this2.state.eventItemLeftRect;
          var eventItemRightRect = _this2.state.eventItemRightRect;
          var eventItemMousePosX = isMousePositionPlacementLeft ? eventItemLeftRect : eventItemRightRect;
          var posAdjustControl = isMousePositionPlacementLeft ? 1 : -1;
          mousePositionPlacement = popoverPlacement.replace('MousePosition', '');
          var distance = 10;
          if (isMousePositionPlacementLeft && _this2._isMounted) {
            if (contentMousePosX + popoverWidth + distance > window.innerWidth) {
              mousePositionPlacement = "".concat(popoverPlacement.replace(/(Right|Left).*/, ''), "Right");
              eventItemMousePosX = eventItemRightRect;
              posAdjustControl = -1;
            }
          } else if (contentMousePosX - popoverWidth - distance < 0) {
            mousePositionPlacement = "".concat(popoverPlacement.replace(/(Right|Left).*/, ''), "Left");
            eventItemMousePosX = eventItemLeftRect;
            posAdjustControl = 1;
          }
          popoverOffsetX = contentMousePosX - eventItemMousePosX - 20 * posAdjustControl;
        }
        return {
          popoverOffsetX: popoverOffsetX,
          mousePositionPlacement: mousePositionPlacement
        };
      };
      var _getMousePositionOpti = getMousePositionOptionsData(),
        popoverOffsetX = _getMousePositionOpti.popoverOffsetX,
        mousePositionPlacement = _getMousePositionOpti.mousePositionPlacement;
      var aItem = config.dragAndDropEnabled ? connectDragPreview(connectDragSource(a)) : a;
      if (isDragging ? null : schedulerData._isResizing() || config.eventItemPopoverEnabled === false || eventItem.showPopover === false) {
        return /*#__PURE__*/_react["default"].createElement("div", null, aItem);
      }
      return /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
        motion: isPopoverPlacementMousePosition ? '' : undefined,
        align: isPopoverPlacementMousePosition ? {
          offset: [popoverOffsetX, popoverPlacement.includes('top') ? -10 : 10],
          overflow: {}
        } : undefined,
        placement: isPopoverPlacementMousePosition ? mousePositionPlacement : popoverPlacement,
        content: content,
        trigger: config.eventItemPopoverTrigger,
        overlayClassName: "scheduler-event-item-popover"
      }, aItem);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = EventItem;
EventItem.propTypes = {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  eventItem: _propTypes.PropTypes.object.isRequired,
  isStart: _propTypes.PropTypes.bool.isRequired,
  isEnd: _propTypes.PropTypes.bool.isRequired,
  left: _propTypes.PropTypes.number.isRequired,
  width: _propTypes.PropTypes.number.isRequired,
  top: _propTypes.PropTypes.number.isRequired,
  isInPopover: _propTypes.PropTypes.bool.isRequired,
  leftIndex: _propTypes.PropTypes.number.isRequired,
  rightIndex: _propTypes.PropTypes.number.isRequired,
  isDragging: _propTypes.PropTypes.bool,
  connectDragSource: _propTypes.PropTypes.func,
  connectDragPreview: _propTypes.PropTypes.func,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  conflictOccurred: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func
};
EventItem.defaultProps = {
  isDragging: undefined,
  connectDragSource: undefined,
  connectDragPreview: undefined,
  updateEventStart: undefined,
  updateEventEnd: undefined,
  moveEvent: undefined,
  subtitleGetter: undefined,
  eventItemClick: undefined,
  viewEventClick: undefined,
  viewEventText: undefined,
  viewEvent2Click: undefined,
  viewEvent2Text: undefined,
  conflictOccurred: undefined,
  eventItemTemplateResolver: undefined
};