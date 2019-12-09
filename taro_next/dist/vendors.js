(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "../../taro/packages/taro-mini-runner/node_modules/process/browser.js":
/*!*********************************************************************************************!*\
  !*** /Users/yuche/Developer/taro/packages/taro-mini-runner/node_modules/process/browser.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/@tarojs/components/mini/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/components/mini/index.js ***!
  \*******************************************************/
/*! exports provided: View, Icon, Progress, RichText, Text, Button, Checkbox, CheckboxGroup, Editor, Form, Input, Label, Picker, PickerView, PickerViewColumn, Radio, RadioGroup, Slider, Switch, CoverImage, Textarea, CoverView, MoveableArea, MoveableView, ScrollView, Swiper, SwiperItem, FunctionalPageNavigator, Navigator, Audio, Camera, Image, LivePlayer, Video, Map, Canvas, Ad, OfficialAccount, OpenData, WebView, NavigationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return PickerViewColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveableArea", function() { return MoveableArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveableView", function() { return MoveableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return FunctionalPageNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return LivePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return Ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return OfficialAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return OpenData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return NavigationBar; });
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Editor = 'editor';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MoveableArea = 'moveable-area';
var MoveableView = 'moveable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var FunctionalPageNavigator = 'functional-page-navigator';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Map = 'map';
var Canvas = 'canvas';
var Ad = 'ad';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var WebView = 'web-view';
var NavigationBar = 'navigation-bar';

/***/ }),

/***/ "./node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
/*! exports provided: Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createVueApp, document, injectPageInstance, internal_do_not_use_current, navigator, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal_do_not_use_current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isObject(o) {
  return o !== null && _typeof(o) === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}

var isArray = Array.isArray;
var EMPTY_OBJ = {};

var noop = function noop() {};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

var styles = {
  style: "i.".concat("style"
  /* Style */
  ),
  "class": "i.".concat("cl"
  /* Class */
  )
};
var events = {
  bindtap: 'eh'
};
var common = Object.assign(Object.assign({}, styles), events);

var TaroEventTarget =
/*#__PURE__*/
function () {
  function TaroEventTarget() {
    _classCallCheck(this, TaroEventTarget);

    this.__handlers = {};
  }

  _createClass(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (isObject(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

      if (isCapture) {
        // TODO: 实现 Capture
        // eslint-disable-next-line no-console
        console.error('The event capture feature is unimplemented.');
      }

      if (isArray(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!isArray(handlers)) {
        return;
      }

      var index = this.findIndex(handlers, handler);
      handlers.splice(index, 1);
    }
  }, {
    key: "findIndex",
    value: function findIndex(childeNodes, refChild) {
      var index = childeNodes.indexOf(refChild);

      if (index === -1) {
        throw new Error('refChild 不属于'); // 改进报错
      }

      return index;
    }
  }]);

  return TaroEventTarget;
}();

var eventSource = new Map();

var TaroEvent =
/*#__PURE__*/
function () {
  function TaroEvent(type, opts) {
    _classCallCheck(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    this.type = type.toLowerCase();
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  _createClass(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }]);

  return TaroEvent;
}();

function createEvent(event) {
  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  });

  for (var key in event) {
    if (key === 'currentTarget') {
      continue;
    }

    domEv[key] = event[key];
  }

  return domEv;
}

function hydrate(node) {
  var _Object$assign;

  if (isText(node)) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "nodeValue"
    /* Text */
    , node.nodeValue), _defineProperty(_ref, "nodeName"
    /* NodeName */
    , node.nodeName), _ref;
  }

  return Object.assign(Object.assign({}, node.props), (_Object$assign = {}, _defineProperty(_Object$assign, "cn"
  /* Childnodes */
  , node.childNodes.map(hydrate)), _defineProperty(_Object$assign, "nodeName"
  /* NodeName */
  , node.nodeName), _defineProperty(_Object$assign, "cl"
  /* Class */
  , node.className), _defineProperty(_Object$assign, "style"
  /* Style */
  , node.cssText || ''), _defineProperty(_Object$assign, "uid", node.uid), _Object$assign));
}

var nodeId = incrementId();

var TaroNode =
/*#__PURE__*/
function (_TaroEventTarget) {
  _inherits(TaroNode, _TaroEventTarget);

  function TaroNode(nodeType, nodeName) {
    var _this;

    _classCallCheck(this, TaroNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TaroNode).call(this));
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    _this.nodeType = nodeType;
    _this.nodeName = nodeName;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, _assertThisInitialized(_this));
    return _this;
  }

  _createClass(TaroNode, [{
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(this.childNodes, refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace === true) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              return _this2.childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      this.enqueueUpdate(payload);
      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.insertBefore(child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(this.childNodes, child);
      this.childNodes.splice(index, 1);

      if (isReplace !== true) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return _this3.childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource["delete"](this.uid);
      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      if (this.parentNode) {
        this.parentNode.removeChild(this, isReplace);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      if (this._root === null) {
        return;
      }

      this._root.enqueueUpdate(payload);
    }
    /**
     * @textContent 目前只能置空元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "_path",
    get: function get() {
      if (this.parentNode !== null) {
        return "".concat(this.parentNode._path, ".", "cn"
        /* Childnodes */
        , ".[").concat(this.parentNode.childNodes.indexOf(this), "]");
      }

      return '';
    }
  }, {
    key: "_root",
    get: function get() {
      if (this.parentNode !== null) {
        return this.parentNode._root;
      }

      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1];
      }
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0];
    }
  }, {
    key: "lastChild",
    get: function get() {
      var c = this.childNodes;
      return c[c.length - 1];
    }
  }, {
    key: "textContent",
    set: function set(text) {
      if (text === '') {
        while (this.childNodes.length > 0) {
          this.childNodes[0].remove();
        }
      }
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

var TaroText =
/*#__PURE__*/
function (_TaroNode) {
  _inherits(TaroText, _TaroNode);

  function TaroText(text) {
    var _this4;

    _classCallCheck(this, TaroText);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TaroText).call(this, 3
    /* TEXT_NODE */
    , '#text'));
    _this4._value = text;
    return _this4;
  }

  _createClass(TaroText, [{
    key: "textContent",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "nodeValue"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "nodeValue",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "nodeValue"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }]);

  return TaroText;
}(TaroNode);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */


var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentAdjust', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'azimuth', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'baselineShift', 'blockOverflow', 'blockSize', 'bookmarkLabel', 'bookmarkLevel', 'bookmarkState', 'border', 'borderBlock', 'borderBlockColor', 'borderBlockEnd', 'borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth', 'borderBlockStart', 'borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth', 'borderBlockStyle', 'borderBlockWidth', 'borderBottom', 'borderBottomColor', 'borderBottomFitLength', 'borderBottomFitWidth', 'borderBottomImage', 'borderBottomLeftFitWidth', 'borderBottomLeftImage', 'borderBottomLeftRadius', 'borderBottomRightFitLength', 'borderBottomRightFitWidth', 'borderBottomRightImage', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderBottomlEftFitLength', 'borderBoundary', 'borderBreak', 'borderCollapse', 'borderColor', 'borderCornerFit', 'borderCornerImage', 'borderCornerImageTransform', 'borderEndEndRadius', 'borderEndStartRadius', 'borderFit', 'borderFitLength', 'borderFitWidth', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageTransform', 'borderImageWidth', 'borderInline', 'borderInlineColor', 'borderInlineEnd', 'borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth', 'borderInlineStart', 'borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth', 'borderInlineStyle', 'borderInlineWidth', 'borderLeft', 'borderLeftColor', 'borderLeftFitLength', 'borderLeftFitWidth', 'borderLeftImage', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightFitLength', 'borderRightFitWidth', 'borderRightImage', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStartEndRadius', 'borderStartStartRadius', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopFitLength', 'borderTopFitWidth', 'borderTopImage', 'borderTopLeftFitLength', 'borderTopLeftFitWidth', 'borderTopLeftImage', 'borderTopLeftRadius', 'borderTopRightFitLength', 'borderTopRightFitWidth', 'borderTopRightImage', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxDecorationBreak', 'boxShadow', 'boxSizing', 'boxSnap', 'breakAfter', 'breakBefore', 'breakInside', 'captionSide', 'caret', 'caretColor', 'caretShape', 'chains', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorAdjust', 'colorInterpolationFilters', 'colorScheme', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'contain', 'content', 'continue', 'counterIncrement', 'counterReset', 'counterSet', 'cue', 'cueAfter', 'cueBefore', 'cursor', 'direction', 'display', 'dominantBaseline', 'dropInitialAfterAdjust', 'dropInitialAfterAlign', 'dropInitialBeforeAdjust', 'dropInitialBeforeAlign', 'dropInitialSize', 'dropInitialValue', 'elevation', 'emptyCells', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'flow', 'flowFrom', 'flowInto', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontMaxSize', 'fontMinSize', 'fontOpticalSizing', 'fontPalette', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontSynthesis', 'fontSynthesisSmallCaps', 'fontSynthesisStyle', 'fontSynthesisWeight', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantEmoji', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontVariationSettings', 'fontWeight', 'footnoteDisplay', 'footnotePolicy', 'forcedColorAdjust', 'gap', 'glyphOrientationVertical', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hangingPunctuation', 'height', 'hyphenateCharacter', 'hyphenateLimitChars', 'hyphenateLimitLast', 'hyphenateLimitLines', 'hyphenateLimitZone', 'hyphens', 'imageOrientation', 'imageResolution', 'initialLetters', 'initialLettersAlign', 'initialLettersWrap', 'inlineBoxAlign', 'inlineSize', 'inlineSizing', 'inset', 'insetBlock', 'insetBlockEnd', 'insetBlockStart', 'insetInline', 'insetInlineEnd', 'insetInlineStart', 'isolation', 'justifyContent', 'justifyItems', 'justifySelf', 'left', 'letterSpacing', 'lightingColor', 'lineBreak', 'lineClamp', 'lineGrid', 'lineHeight', 'linePadding', 'lineSnap', 'lineStacking', 'lineStackingRuby', 'lineStackingShift', 'lineStackingStrategy', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginBottom', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'marginLeft', 'marginRight', 'marginTop', 'marginTrim', 'markerSide', 'mask', 'maskBorder', 'maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth', 'maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize', 'maskType', 'maxBlockSize', 'maxHeight', 'maxInlineSize', 'maxLines', 'maxWidth', 'minBlockSize', 'minHeight', 'minInlineSize', 'minWidth', 'mixBlendMode', 'navDown', 'navLeft', 'navRight', 'navUp', 'objectFit', 'objectPosition', 'offset', 'offsetAfter', 'offsetAnchor', 'offsetBefore', 'offsetDistance', 'offsetEnd', 'offsetPath', 'offsetPosition', 'offsetRotate', 'offsetStart', 'opacity', 'order', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowBlock', 'overflowInline', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBlock', 'paddingBlockEnd', 'paddingBlockStart', 'paddingBottom', 'paddingInline', 'paddingInlineEnd', 'paddingInlineStart', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'pause', 'pauseAfter', 'pauseBefore', 'perspective', 'perspectiveOrigin', 'pitch', 'pitchRange', 'placeContent', 'placeItems', 'placeSelf', 'playDuring', 'position', 'quotes', 'regionFragment', 'resize', 'richness', 'right', 'rowGap', 'rubyAlign', 'rubyMerge', 'rubyPosition', 'running', 'scrollBehavior', 'scrollMargin', 'scrollMarginBlock', 'scrollMarginBlockEnd', 'scrollMarginBlockStart', 'scrollMarginBottom', 'scrollMarginInline', 'scrollMarginInlineEnd', 'scrollMarginInlineStart', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop', 'scrollPadding', 'scrollPaddingBlock', 'scrollPaddingBlockEnd', 'scrollPaddingBlockStart', 'scrollPaddingBottom', 'scrollPaddingInline', 'scrollPaddingInlineEnd', 'scrollPaddingInlineStart', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop', 'scrollSnapAlign', 'scrollSnapStop', 'scrollSnapType', 'shapeImageThreshold', 'shapeInside', 'shapeMargin', 'shapeOutside', 'speak', 'speakHeader', 'speakNumeral', 'speakPunctuation', 'speechRate', 'stress', 'stringSet', 'tabSize', 'tableLayout', 'textAlign', 'textAlignAll', 'textAlignLast', 'textCombineUpright', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textEmphasis', 'textEmphasisColor', 'textEmphasisPosition', 'textEmphasisStyle', 'textGroupAlign', 'textHeight', 'textIndent', 'textJustify', 'textOrientation', 'textOverflow', 'textShadow', 'textSpaceCollapse', 'textSpaceTrim', 'textSpacing', 'textTransform', 'textUnderlinePosition', 'textWrap', 'top', 'transform', 'transformBox', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'wrapAfter', 'wrapBefore', 'wrapFlow', 'wrapInside', 'wrapThrough', 'writingMode', 'zIndex'];

var Style =
/*#__PURE__*/
function () {
  function Style(element) {
    _classCallCheck(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
    this.initStyle();
  }

  _createClass(Style, [{
    key: "initStyle",
    value: function initStyle() {
      var properties = {};
      var usedStyleProp = this._usedStyleProp;

      var _loop = function _loop(i) {
        var styleKey = styleProperties[i];
        properties[styleKey] = {
          get: function get() {
            return this._value[styleKey] || '';
          },
          set: function set(newVal) {
            var old = this[styleKey];

            if (newVal) {
              usedStyleProp.add(styleKey);
            }

            if (old !== newVal) {
              this._value[styleKey] = newVal;

              this._element.enqueueUpdate({
                path: "".concat(this._element._path, ".", "style"
                /* Style */
                ),
                value: this.cssText
              });
            }
          }
        };
      };

      for (var i = 0; i < styleProperties.length; i++) {
        _loop(i);
      }

      Object.defineProperties(this, properties);
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      propertyName = toCamelCase(propertyName);

      if (isUndefined(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = toCamelCase(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp["delete"](propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = toCamelCase(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this5 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this5[key];
        if (!val) return;
        text += "".concat(toDashed(key), ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this6 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this6.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        }

        var _rule$split = rule.split(':'),
            _rule$split2 = _slicedToArray(_rule$split, 2),
            propName = _rule$split2[0],
            val = _rule$split2[1];

        if (isUndefined(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }]);

  return Style;
}();

var TaroElement =
/*#__PURE__*/
function (_TaroNode2) {
  _inherits(TaroElement, _TaroNode2);

  function TaroElement(nodeType, nodeName) {
    var _this7;

    _classCallCheck(this, TaroElement);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TaroElement).call(this, nodeType || 1
    /* ELEMENT_NODE */
    , nodeName));
    _this7.props = {};
    _this7.tagName = nodeName.toUpperCase();
    _this7.style = new Style(_assertThisInitialized(_this7));
    return _this7;
  }

  _createClass(TaroElement, [{
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !isUndefined(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      if (qualifiedName === 'style') {
        this.style.cssText = value;
        qualifiedName = "style"
        /* Style */
        ;
      } else if (qualifiedName === 'id') {
        eventSource["delete"](this.uid);
        this.uid = value;
        eventSource.set(value, this);
        qualifiedName = 'uid';
      } else {
        this.props[qualifiedName] = value;

        if (qualifiedName === 'class') {
          qualifiedName = "cl"
          /* Class */
          ;
        }
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(qualifiedName),
        value: value
      });
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      if (qualifiedName === 'style') {
        this.style.cssText = '';
      } else {
        delete this.props[qualifiedName];
      }

      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(qualifiedName),
        value: ''
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
      return attr || null;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!isArray(listeners)) {
        return;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!isArray(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(val) {
      this.setAttribute('id', val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute('class') || '';
    },
    set: function set(val) {
      this.setAttribute('class', val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute('style');
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this8 = this;

      var propKeys = Object.keys(this.props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (p) {
        return {
          name: p,
          value: _this8.props[p]
        };
      });
      return attrs.concat(style ? {
        name: 'style',
        value: style
      } : []);
    }
  }, {
    key: "parentElement",
    get: function get() {
      if (this.parentNode instanceof TaroElement) {
        return this.parentNode;
      }

      return null;
    }
  }]);

  return TaroElement;
}(TaroNode);

var TaroRootElement =
/*#__PURE__*/
function (_TaroElement) {
  _inherits(TaroRootElement, _TaroElement);

  function TaroRootElement() {
    var _this9;

    _classCallCheck(this, TaroRootElement);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(TaroRootElement).call(this, 1
    /* ELEMENT_NODE */
    , 'root'));
    _this9.pendingUpdate = false;
    _this9.updatePayloads = [];
    _this9.ctx = null;
    return _this9;
  }

  _createClass(TaroRootElement, [{
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (this.pendingUpdate || this.ctx === null) {
        return;
      }

      this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this10 = this;

      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        var data = Object.create(null);
        var resetPaths = new Set();

        while (_this10.updatePayloads.length > 0) {
          var _this10$updatePayload = _this10.updatePayloads.shift(),
              path = _this10$updatePayload.path,
              value = _this10$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (isFunction(data[_path])) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        ctx.setData(data, function () {
          _this10.pendingUpdate = false;
        });
      }, 1);
    }
  }, {
    key: "_path",
    get: function get() {
      return 'root';
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }]);

  return TaroRootElement;
}(TaroElement);

var TaroDocument =
/*#__PURE__*/
function (_TaroElement2) {
  _inherits(TaroDocument, _TaroElement2);

  function TaroDocument() {
    _classCallCheck(this, TaroDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaroDocument).call(this, 9
    /* DOCUMENT_NODE */
    , '#document'));
  }

  _createClass(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === 'root') {
        return new TaroRootElement();
      }

      return new TaroElement(1
      /* ELEMENT_NODE */
      , type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return eventSource.get(id) || null;
    }
  }]);

  return TaroDocument;
}(TaroElement);

function createDocument() {
  var doc = new TaroDocument();
  doc.appendChild(doc.documentElement = doc.createElement('html'));
  doc.documentElement.appendChild(doc.head = doc.createElement('head'));
  doc.documentElement.appendChild(doc.createElement('body'));
  var app = doc.createElement('app');
  app.id = 'app';
  var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

  container.appendChild(app);
  doc.documentElement.lastChild.appendChild(container);
  return doc;
}

var document = createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Gecko',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
};
var window = {
  navigator: navigator,
  document: document
};
var Current = {
  root: null,
  pages: new Set(),
  activeId: null,
  app: null,
  roots: new Set()
};

function connectReactPage(h, // 为了支持 React 和 React-like
id) {
  return function (component) {
    return function (props) {
      return h('root', {
        id: id
      }, h(component, props));
    };
  };
}

function createReactApp(R, App, render) {
  var ref = R.createRef();
  var wrapper;

  var AppWrapper =
  /*#__PURE__*/
  function (_R$Component) {
    _inherits(AppWrapper, _R$Component);

    function AppWrapper() {
      var _this11;

      _classCallCheck(this, AppWrapper);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(AppWrapper).apply(this, arguments)); // run createElement() in a render function to make sure that owner is right

      _this11.pages = [];
      _this11.elements = [];
      return _this11;
    }

    _createClass(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var page = function page() {
          return R.createElement(component, {
            key: id,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.key === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        return R.createElement(App, {
          ref: ref
        }, this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var AppConfig =
  /*#__PURE__*/
  function () {
    function AppConfig() {
      _classCallCheck(this, AppConfig);
    }

    _createClass(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch() {
        wrapper = render(R.createElement(AppWrapper), document.getElementById('app'));
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        var app = ref.current;

        if (app != null && isFunction(app.componentDidShow)) {
          app.componentDidShow(options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        var app = ref.current;

        if (app != null && isFunction(app.componentDidHide)) {
          app.componentDidHide(options);
        }
      }
    }, {
      key: "render",
      value: function render(cb) {
        wrapper.forceUpdate(cb);
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectReactPage(R.createElement, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}

var instances = new Map();

function injectPageInstance(inst) {
  var id = inst.tid != null ? inst.tid : inst.props.tid;

  if (id != null) {
    instances.set(id, inst);
  }
}

var pageId = incrementId();

function createPageConfig(component) {
  var id = "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var page;
  var instance = EMPTY_OBJ;
  var isReact = process.env.framework !== 'vue'; // isReact means all kind of react-like library

  function safeExecute(func) {
    if (instance != null && isFunction(func)) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      func.apply(instance, args);
    }
  }

  var config = {
    eh: function eh(event) {
      var node = document.getElementById(event.currentTarget.id);

      if (node != null) {
        node.dispatchEvent(createEvent(event));
      }
    },
    onLoad: function onLoad() {
      var _this12 = this;

      Current.app.mount(component, id, function () {
        page = document.getElementById(id);
        instance = instances.get(id) || EMPTY_OBJ;

        if (page === null) {
          return;
        }

        page.ctx = _this12;
        page.performUpdate();
      });
    },
    onUnload: function onUnload() {
      Current.app.unmount(id, function () {
        page.ctx = null;
      });
    },
    onShow: function onShow() {
      safeExecute(isReact ? instance.componentDidShow : instance.$options.onShow);
    },
    onHide: function onHide() {
      safeExecute(isReact ? instance.componentDidHide : instance.$options.onHide);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      safeExecute(instance.onPullDownRefresh);
    },
    onReachBottom: function onReachBottom() {
      safeExecute(instance.onReachBottom);
    },
    onPageScroll: function onPageScroll(options) {
      safeExecute(instance.onPageScroll, options);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      safeExecute(instance.onShareAppMessage, options);
    },
    onResize: function onResize(options) {
      safeExecute(instance.onResize, options);
    },
    onTabItemTap: function onTabItemTap(options) {
      safeExecute(instance.onTabItemTap, options);
    },
    onTitleClick: function onTitleClick() {
      safeExecute(instance.onTitleClick);
    },
    onOptionMenuClick: function onOptionMenuClick() {
      safeExecute(instance.onOptionMenuClick);
    },
    onPopMenuClick: function onPopMenuClick() {
      safeExecute(instance.onPopMenuClick);
    },
    onPullIntercept: function onPullIntercept() {
      safeExecute(instance.onPullIntercept);
    }
  };
  return config;
}

function createComponentConfig() {
  return {
    eh: function eh(event) {
      var node = document.getElementById(event.currentTarget.id);

      if (node != null) {
        node.dispatchEvent(createEvent(event));
      }
    }
  };
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h('root', {
          attrs: {
            id: id
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

function createVueApp(Vue, App) {
  Vue.config.getTagNamespace = noop;
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App.$options, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  }); // comp.$options

  var AppConfig =
  /*#__PURE__*/
  function () {
    function AppConfig() {
      _classCallCheck(this, AppConfig);
    }

    _createClass(AppConfig, [{
      key: "onLaunch",
      value: function onLaunch() {
        wrapper.$mount(document.getElementById('app'));
        appInstance = wrapper.$refs.app;
      }
    }, {
      key: "onShow",
      value: function onShow(options) {
        if (appInstance != null && isFunction(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    }, {
      key: "onHide",
      value: function onHide(options) {
        if (appInstance != null && isFunction(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }, {
      key: "mount",
      value: function mount(component, id, cb) {
        var page = connectVuePage(Vue, id)(component);
        wrapper.mount(page, id, cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        wrapper.unmount(id, cb);
      }
    }]);

    return AppConfig;
  }();

  Current.app = new AppConfig();
  return Current.app;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../taro/packages/taro-mini-runner/node_modules/process/browser.js */ "../../taro/packages/taro-mini-runner/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/nervjs/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/nervjs/dist/index.esm.js ***!
  \***********************************************/
/*! exports provided: Children, Component, PureComponent, createElement, cloneElement, render, nextTick, options, findDOMNode, isValidElement, unmountComponentAtNode, createPortal, unstable_renderSubtreeIntoContainer, hydrate, createFactory, unstable_batchedUpdates, version, PropTypes, createRef, forwardRef, memo, createContext, renderComponent, getHooks, Current, Fragment, useEffect, useLayoutEffect, useReducer, useState, useRef, useCallback, useMemo, useImperativeHandle, useContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(window, document) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return unstable_renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return forwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return memo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return createContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHooks", function() { return getHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return useImperativeHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return useContext; });
// tslint:disable-next-line
var global = function () {
  var local;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      // tslint:disable-next-line:function-constructor
      local = Function('return this')();
    } catch (e) {
      throw new Error('global object is unavailable in this environment');
    }
  }

  return local;
}();

var isBrowser = typeof window !== 'undefined'; // tslint:disable-next-line:no-empty

function noop() {}

var fakeDoc = {
  createElement: noop,
  createElementNS: noop,
  createTextNode: noop
};
var doc = isBrowser ? document : fakeDoc;
var UA = isBrowser && window.navigator.userAgent.toLowerCase();
var isMacSafari = isBrowser && UA && window.navigator.platform && /mac/i.test(window.navigator.platform) && /^((?!chrome|android).)*safari/i.test(UA);
var isTaro = isBrowser && !document.scripts;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isiOS = UA && /iphone|ipad|ipod|ios/.test(UA);

function isNumber(arg) {
  return typeof arg === 'number';
}

var isSupportSVG = isFunction(doc.createAttributeNS);

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isBoolean(arg) {
  return arg === true || arg === false;
}

var isArray = Array.isArray;

function isObject(arg) {
  return arg === Object(arg) && !isFunction(arg);
}

function isUndefined(o) {
  return o === undefined;
} // Object.is polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}

var canUsePromise = 'Promise' in global && !isMacSafari;
var resolved;

if (canUsePromise) {
  resolved = Promise.resolve();
}

var nextTick = function nextTick(fn) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  fn = isFunction(fn) ? fn.bind.apply(fn, [null].concat(args)) : fn;

  if (canUsePromise) {
    return resolved.then(fn);
  }

  var timerFunc = 'requestAnimationFrame' in global && !isMacSafari ? requestAnimationFrame : setTimeout;
  timerFunc(fn);
};
/* istanbul ignore next */
// tslint:disable-next-line


Object.is = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (Object.is(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap = function SimpleMap() {
  this.cache = [];
  this.size = 0;
};

SimpleMap.prototype.set = function set(k, v) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    this.cache.push({
      k: k,
      v: v
    });
    this.size += 1;
    return;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      item.v = v;
      return;
    }
  }

  this.cache.push({
    k: k,
    v: v
  });
  this.size += 1;
};

SimpleMap.prototype.get = function get(k) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    return;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      return item.v;
    }
  }
};

SimpleMap.prototype.has = function has(k) {
  var this$1 = this;
  var len = this.cache.length;

  if (!len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      return true;
    }
  }

  return false;
};

SimpleMap.prototype['delete'] = function delete$1(k) {
  var this$1 = this;
  var len = this.cache.length;

  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];

    if (item.k === k) {
      this$1.cache.splice(i, 1);
      this$1.size -= 1;
      return true;
    }
  }

  return false;
};

SimpleMap.prototype.clear = function clear() {
  var this$1 = this;
  var len = this.cache.length;
  this.size = 0;

  if (!len) {
    return;
  }

  while (len) {
    this$1.cache.pop();
    len--;
  }
};

var MapClass = 'Map' in global ? Map : SimpleMap;

function isAttrAnEvent(attr) {
  return attr[0] === 'o' && attr[1] === 'n';
}

var extend = function () {
  if ('assign' in Object) {
    return function (source, from) {
      if (!from) {
        return source;
      }

      Object.assign(source, from);
      return source;
    };
  } else {
    return function (source, from) {
      if (!from) {
        return source;
      }

      for (var key in from) {
        if (from.hasOwnProperty(key)) {
          source[key] = from[key];
        }
      }

      return source;
    };
  }
}();

function clone(obj) {
  return extend({}, obj);
}

var Current = {
  current: null,
  index: 0
};
var EMPTY_CHILDREN = [];
var EMPTY_OBJ = {};

function isNullOrUndef(o) {
  return o === undefined || o === null;
}

function isInvalid(o) {
  return isNullOrUndef(o) || o === true || o === false;
}

function isVNode(node) {
  return !isNullOrUndef(node) && node.vtype === 2
  /* Node */
  ;
}

function isVText(node) {
  return !isNullOrUndef(node) && node.vtype === 1
  /* Text */
  ;
}

function isComponent(instance) {
  return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}

function isPortal(vtype, node) {
  return (vtype & 32
  /* Portal */
  ) > 0;
}

function isComposite(node) {
  return !isNullOrUndef(node) && node.vtype === 4
  /* Composite */
  ;
}

function isValidElement(node) {
  return !isNullOrUndef(node) && node.vtype;
} // tslint:disable-next-line:no-empty


function noop$1() {} // typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4


var VType;

(function (VType) {
  VType[VType["Text"] = 1] = "Text";
  VType[VType["Node"] = 2] = "Node";
  VType[VType["Composite"] = 4] = "Composite";
  VType[VType["Void"] = 16] = "Void";
  VType[VType["Portal"] = 32] = "Portal";
})(VType || (VType = {}));

var Ref = {
  update: function update(lastVnode, nextVnode, domNode) {
    var prevRef = lastVnode != null && lastVnode.ref;
    var nextRef = nextVnode != null && nextVnode.ref;

    if (prevRef !== nextRef) {
      this.detach(lastVnode, prevRef, lastVnode.dom);
      this.attach(nextVnode, nextRef, domNode);
    }
  },
  attach: function attach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;

    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(node);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;

      if (inst && isFunction(inst.render)) {
        inst.refs[ref] = node;
      }
    } else if (isObject(ref)) {
      ref.current = node;
    }
  },
  detach: function detach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;

    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(null);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;

      if (inst.refs[ref] === node && isFunction(inst.render)) {
        delete inst.refs[ref];
      }
    } else if (isObject(ref)) {
      ref.current = null;
    }
  }
};
var defaultOptions = {
  passive: true,
  capture: false
};

var eventListenerOptionsSupported = function eventListenerOptionsSupported() {
  var supported = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {
    supported = false;
  }

  return supported;
};

function getDefaultPassiveOption() {
  var passiveOption = !eventListenerOptionsSupported() ? false : defaultOptions;
  return function () {
    return passiveOption;
  };
}

var getPassiveOption = getDefaultPassiveOption();
var supportedPassiveEventMap = {
  scroll: getPassiveOption(),
  wheel: getPassiveOption(),
  touchstart: getPassiveOption(),
  touchmove: getPassiveOption(),
  touchenter: getPassiveOption(),
  touchend: getPassiveOption(),
  touchleave: getPassiveOption(),
  mouseout: getPassiveOption(),
  mouseleave: getPassiveOption(),
  mouseup: getPassiveOption(),
  mousedown: getPassiveOption(),
  mousemove: getPassiveOption(),
  mouseenter: getPassiveOption(),
  mousewheel: getPassiveOption(),
  mouseover: getPassiveOption()
};
var ONINPUT = 'oninput';
var ONPROPERTYCHANGE = 'onpropertychange';
var delegatedEvents = new MapClass();
var unbubbleEvents = {
  onmousemove: 1,
  ontouchmove: 1,
  onmouseleave: 1,
  onmouseenter: 1,
  onload: 1,
  onunload: 1,
  onscroll: 1,
  onfocus: 1,
  onblur: 1,
  onrowexit: 1,
  onbeforeunload: 1,
  onstop: 1,
  ondragdrop: 1,
  ondragenter: 1,
  ondragexit: 1,
  ondraggesture: 1,
  ondragover: 1,
  oncontextmenu: 1,
  onerror: 1,
  onabort: 1,
  oncanplay: 1,
  oncanplaythrough: 1,
  ondurationchange: 1,
  onemptied: 1,
  onended: 1,
  onloadeddata: 1,
  onloadedmetadata: 1,
  onloadstart: 1,
  onencrypted: 1,
  onpause: 1,
  onplay: 1,
  onplaying: 1,
  onprogress: 1,
  onratechange: 1,
  onseeking: 1,
  onseeked: 1,
  onstalled: 1,
  onsuspend: 1,
  ontimeupdate: 1,
  onvolumechange: 1,
  onwaiting: 1
};
unbubbleEvents[ONPROPERTYCHANGE] = 1;
var bindFocus = false;
/* istanbul ignore next */

if (isIE9) {
  var elements = [];
  var values = [];
  doc.addEventListener('selectionchange', function () {
    var el = doc.activeElement;

    if (detectCanUseOnInputNode(el)) {
      var index = elements.indexOf(el);
      var element = elements[index] || elements.push(el);

      if (element.value !== values[index]) {
        var ev = doc.createEvent('CustomEvent');
        ev.initCustomEvent('input', true, true, undefined);
        values[index] = element.value;
        el.dispatchEvent(ev);
      }
    }
  });
}

if (typeof Event !== 'undefined' && !Event.prototype.persist) {
  // tslint:disable-next-line:no-empty
  Event.prototype.persist = noop$1;
}

function attachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  /* istanbul ignore next */

  if (eventName === ONPROPERTYCHANGE) {
    processOnPropertyChangeEvent(domNode, handler);
    return;
  }

  var delegatedRoots = delegatedEvents.get(eventName);

  if (unbubbleEvents[eventName] === 1 || isTaro) {
    if (!delegatedRoots) {
      delegatedRoots = new MapClass();
    }

    var event = attachEventToNode(domNode, eventName, delegatedRoots);
    delegatedEvents.set(eventName, delegatedRoots);

    if (isFunction(handler)) {
      delegatedRoots.set(domNode, {
        eventHandler: handler,
        event: event
      });
    }
  } else {
    if (!delegatedRoots) {
      delegatedRoots = {
        items: new MapClass()
      };
      delegatedRoots.event = attachEventToDocument(doc, eventName, delegatedRoots);
      delegatedEvents.set(eventName, delegatedRoots);
    }

    if (isFunction(handler)) {
      if (isiOS) {
        domNode.onclick = noop$1;
      }

      delegatedRoots.items.set(domNode, handler);
    }
  }
}

function detachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);

  if (eventName === ONPROPERTYCHANGE) {
    return;
  }

  var delegatedRoots = delegatedEvents.get(eventName);

  if (unbubbleEvents[eventName] === 1 && delegatedRoots || isTaro) {
    var event = delegatedRoots.get(domNode);

    if (event) {
      domNode.removeEventListener(parseEventName(eventName), event.event, false);
      /* istanbul ignore next */

      var delegatedRootsSize = delegatedRoots.size;

      if (delegatedRoots['delete'](domNode) && delegatedRootsSize === 0) {
        delegatedEvents['delete'](eventName);
      }
    }
  } else if (delegatedRoots && delegatedRoots.items) {
    var items = delegatedRoots.items;

    if (items['delete'](domNode) && items.size === 0) {
      doc.removeEventListener(parseEventName(eventName), delegatedRoots.event, false);
      delegatedEvents['delete'](eventName);
    }
  }
}

var propertyChangeActiveElement;
var propertyChangeActiveElementValue;
var propertyChangeActiveElementValueProp;
var propertyChangeActiveHandlers = {};
/* istanbul ignore next */

function propertyChangeHandler(event) {
  if (event.propertyName !== 'value') {
    return;
  }

  var target = event.target || event.srcElement;
  var val = target.value;

  if (val === propertyChangeActiveElementValue) {
    return;
  }

  propertyChangeActiveElementValue = val;
  var handler = propertyChangeActiveHandlers[target.name];

  if (isFunction(handler)) {
    handler.call(target, event);
  }
}
/* istanbul ignore next */


function processOnPropertyChangeEvent(node, handler) {
  propertyChangeActiveHandlers[node.name] = handler;

  if (!bindFocus) {
    // bindFocus = true
    node.addEventListener('focusin', function () {
      unbindOnPropertyChange();
      bindOnPropertyChange(node);
    }, false);
    node.addEventListener('focusout', unbindOnPropertyChange, false);
  }
}
/* istanbul ignore next */


function bindOnPropertyChange(node) {
  propertyChangeActiveElement = node;
  propertyChangeActiveElementValue = node.value;
  propertyChangeActiveElementValueProp = Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value');
  Object.defineProperty(propertyChangeActiveElement, 'value', {
    get: function get() {
      return propertyChangeActiveElementValueProp.get.call(this);
    },
    set: function set(val) {
      propertyChangeActiveElementValue = val;
      propertyChangeActiveElementValueProp.set.call(this, val);
    }
  });
  propertyChangeActiveElement.addEventListener('propertychange', propertyChangeHandler, false);
}
/* istanbul ignore next */


function unbindOnPropertyChange() {
  if (!propertyChangeActiveElement) {
    return;
  }

  delete propertyChangeActiveElement.value;
  propertyChangeActiveElement.removeEventListener('propertychange', propertyChangeHandler, false);
  propertyChangeActiveElement = null;
  propertyChangeActiveElementValue = null;
  propertyChangeActiveElementValueProp = null;
}

function detectCanUseOnInputNode(node) {
  var nodeName = node.nodeName && node.nodeName.toLowerCase();
  var type = node.type;
  return nodeName === 'input' && /text|password/.test(type) || nodeName === 'textarea';
}

function fixEvent(node, eventName) {
  if (isTaro && eventName === 'onClick') {
    eventName = 'onTap';
  }

  if (eventName === 'onDoubleClick') {
    eventName = 'ondblclick';
  } else if (eventName === 'onTouchTap') {
    eventName = 'onclick'; // tslint:disable-next-line:prefer-conditional-expression
  } else if (eventName === 'onChange' && detectCanUseOnInputNode(node)) {
    eventName = ONINPUT in window ? ONINPUT : ONPROPERTYCHANGE;
  } else {
    eventName = eventName.toLowerCase();
  }

  return eventName;
}

function parseEventName(name) {
  return name.substr(2);
}
/* istanbul ignore next */


function stopPropagation() {
  this.cancelBubble = true;
  this.stopImmediatePropagation();
}

function dispatchEvent(event, target, items, count, eventData) {
  var eventsToTrigger = items.get(target);

  if (eventsToTrigger) {
    count--;
    eventData.currentTarget = target; // for React synthetic event compatibility

    Object.defineProperties(event, {
      nativeEvent: {
        value: event
      }
    });
    eventsToTrigger(event);

    if (event.cancelBubble) {
      return;
    }
  }

  if (count > 0) {
    var parentDom = target.parentNode;

    if (parentDom === null || event.type === 'click' && parentDom.nodeType === 1 && parentDom.disabled) {
      return;
    }

    dispatchEvent(event, parentDom, items, count, eventData);
  }
}

function attachEventToDocument(d, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var items = delegatedRoots.items;
    var count = items.size;

    if (count > 0) {
      var eventData = {
        currentTarget: event.target
      };
      /* istanbul ignore next */

      try {
        Object.defineProperties(event, {
          currentTarget: {
            configurable: true,
            get: function get() {
              return eventData.currentTarget;
            }
          },
          stopPropagation: {
            value: stopPropagation
          }
        });
      } catch (error) {// some browsers crashed
        // see: https://stackoverflow.com/questions/44052813/why-cannot-redefine-property
      }

      dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
    }
  };

  var parsedEventName = parseEventName(eventName);
  d.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}

function attachEventToNode(node, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var eventToTrigger = delegatedRoots.get(node);

    if (eventToTrigger && eventToTrigger.eventHandler) {
      var eventData = {
        currentTarget: node
      };
      /* istanbul ignore next */

      Object.defineProperties(event, {
        currentTarget: {
          configurable: true,
          get: function get() {
            return eventData.currentTarget;
          }
        }
      });
      eventToTrigger.eventHandler(event);
    }
  };

  var parsedEventName = parseEventName(eventName);
  node.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}

function unmountChildren(children, parentDom) {
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      unmount(children[i], parentDom);
    }
  } else {
    unmount(children, parentDom);
  }
}

function unmount(vnode, parentDom) {
  if (isInvalid(vnode)) {
    return;
  }

  var vtype = vnode.vtype; // Bitwise operators for better performance
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

  var dom = vnode.dom;

  if ((vtype & 4
  /* Composite */
  ) > 0) {
    vnode.destroy();
  } else if ((vtype & 2
  /* Node */
  ) > 0) {
    var props = vnode.props;
    var children = vnode.children;
    var ref = vnode.ref;
    unmountChildren(children);

    for (var propName in props) {
      if (isAttrAnEvent(propName)) {
        detachEvent(dom, propName, props[propName]);
      }
    }

    if (ref !== null) {
      Ref.detach(vnode, ref, dom);
    }
  } else if (vtype & 32
  /* Portal */
  ) {
      unmountChildren(vnode.children, vnode.type);
    }

  if (!isNullOrUndef(parentDom) && !isNullOrUndef(dom)) {
    if (isArray(dom)) {
      for (var i = 0; i < dom.length; i++) {
        parentDom.removeChild(dom[i]);
      }
    } else {
      parentDom.removeChild(dom);
    }
  } // vnode.dom = null

}

var NS = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  evEvent: 'ev:event',
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlId: 'xml:id',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};
var SVGPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    'ev:event': NS.ev,
    'xlink:actuate': NS.xlink,
    'xlink:arcrole': NS.xlink,
    'xlink:href': NS.xlink,
    'xlink:role': NS.xlink,
    'xlink:show': NS.xlink,
    'xlink:title': NS.xlink,
    'xlink:type': NS.xlink,
    'xml:base': NS.xml,
    'xml:id': NS.xml,
    'xml:lang': NS.xml,
    'xml:space': NS.xml
  },
  DOMAttributeNames: {}
};
Object.keys(ATTRS).forEach(function (key) {
  SVGPropertyConfig.Properties[key] = 0;

  if (ATTRS[key]) {
    SVGPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});
/* tslint:disable: no-empty*/

function patch(lastVnode, nextVnode, parentNode, context, isSvg) {
  var lastDom = lastVnode.dom;
  var newDom;
  var lastVnodeIsArray = isArray(lastVnode);
  var nextVnodeisArray = isArray(nextVnode);

  if (isSameVNode(lastVnode, nextVnode)) {
    var vtype = nextVnode.vtype;

    if (vtype & 2
    /* Node */
    ) {
        isSvg = isNullOrUndef(isSvg) ? lastVnode.isSvg : isSvg;

        if (isSvg) {
          nextVnode.isSvg = isSvg;
        }

        patchProps(lastDom, nextVnode.props, lastVnode.props, lastVnode, isSvg);
        patchChildren(lastDom, lastVnode.children, nextVnode.children, context, isSvg);

        if (nextVnode.ref !== null) {
          Ref.update(lastVnode, nextVnode, lastDom);
        }

        newDom = lastDom;
      } else if ((vtype & 4
    /* Composite */
    ) > 0) {
      newDom = nextVnode.update(lastVnode, nextVnode, context);
    } else if (vtype & 1
    /* Text */
    ) {
        return patchVText(lastVnode, nextVnode);
      } else if (vtype & 32
    /* Portal */
    ) {
        patchChildren(lastVnode.type, lastVnode.children, nextVnode.children, context, isSvg);
      } // @TODO: test case


    nextVnode.dom = newDom || lastDom;
  } else if (isArray(lastVnode) && isArray(nextVnode)) {
    patchArrayChildren(lastDom, lastVnode, nextVnode, context, false);
  } else if (lastVnodeIsArray && !nextVnodeisArray) {
    patchArrayChildren(parentNode, lastVnode, [nextVnode], context, false);
  } else if (!lastVnodeIsArray && nextVnodeisArray) {
    newDom = createElement(nextVnode, isSvg, context);
    insertElement(newDom, parentNode, lastDom);
    parentNode.removeChild(lastDom);
  } else {
    unmount(lastVnode);
    newDom = createElement(nextVnode, isSvg, context);

    if (nextVnode !== null) {
      nextVnode.dom = newDom;
    }

    var newDomIsArray = isArray(newDom);
    var lastDomIsArray = isArray(lastDom);

    if (newDomIsArray) {
      insertElement(newDom, parentNode, lastDom);
      parentNode.removeChild(lastDom);
    } else if (lastDomIsArray) {
      parentNode = lastDom[0].parentNode;
      parentNode.insertBefore(newDom, lastDom[0]);

      for (var i = 0; i < lastDom.length; i++) {
        parentNode.removeChild(lastDom[i]);
      }
    } else if (parentNode !== null) {
      parentNode.replaceChild(newDom, lastDom);
    }
  }

  return newDom;
}

function patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  var lastLength = lastChildren.length;
  var nextLength = nextChildren.length;

  if (lastLength === 0) {
    if (nextLength > 0) {
      for (var i = 0; i < nextLength; i++) {
        mountChild(nextChildren[i], parentDom, context, isSvg);
      }
    }
  } else if (nextLength === 0) {
    unmountChildren(lastChildren);
    parentDom.textContent = '';
  } else {
    if (isKeyed(lastChildren, nextChildren)) {
      patchKeyedChildren(lastChildren, nextChildren, parentDom, context, isSvg, lastLength, nextLength);
    } else {
      patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength);
    }
  }
}

function patchChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  // @TODO: is a better way to compatible with react-router?
  // if (lastChildren === nextChildren) {
  //   return
  // }
  var lastChildrenIsArray = isArray(lastChildren);
  var nextChildrenIsArray = isArray(nextChildren);

  if (lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg);
  } else if (!lastChildrenIsArray && !nextChildrenIsArray) {
    patch(lastChildren, nextChildren, parentDom, context, isSvg);
  } else if (lastChildrenIsArray && !nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, [nextChildren], context, isSvg);
  } else if (!lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, [lastChildren], nextChildren, context, isSvg);
  }
}

function patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength) {
  var minLength = Math.min(lastLength, nextLength);
  var i = 0;

  while (i < minLength) {
    patch(lastChildren[i], nextChildren[i], parentDom, context, isSvg);
    i++;
  }

  if (lastLength < nextLength) {
    for (i = minLength; i < nextLength; i++) {
      if (parentDom !== null) {
        var refVnode = lastChildren[i - 1];
        mountElement(createElement(nextChildren[i], isSvg, context), parentDom, isValidElement(refVnode) && refVnode.dom != null ? refVnode.dom.nextSibling : null);
      }
    }
  } else if (lastLength > nextLength) {
    for (i = minLength; i < lastLength; i++) {
      unmount(lastChildren[i], parentDom);
    }
  }
}
/**
 *
 * Virtual DOM patching algorithm based on ivi by
 * Boris Kaul (@localvoid)
 * Licensed under the MIT License
 * https://github.com/ivijs/ivi/blob/master/LICENSE
 *
 */


function patchKeyedChildren(a, b, dom, context, isSvg, aLength, bLength) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var aStart = 0;
  var bStart = 0;
  var i;
  var j;
  var aNode;
  var bNode;
  var nextNode;
  var nextPos;
  var node;
  var aStartNode = a[aStart];
  var bStartNode = b[bStart];
  var aEndNode = a[aEnd];
  var bEndNode = b[bEnd]; // Step 1
  // tslint:disable-next-line

  outer: {
    // Sync nodes with the same key at the beginning.
    while (aStartNode.key === bStartNode.key) {
      patch(aStartNode, bStartNode, dom, context, isSvg);
      aStart++;
      bStart++;

      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }

      aStartNode = a[aStart];
      bStartNode = b[bStart];
    } // Sync nodes with the same key at the end.


    while (aEndNode.key === bEndNode.key) {
      patch(aEndNode, bEndNode, dom, context, isSvg);
      aEnd--;
      bEnd--;

      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }

      aEndNode = a[aEnd];
      bEndNode = b[bEnd];
    }
  }

  if (aStart > aEnd) {
    if (bStart <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? b[nextPos].dom : null;

      while (bStart <= bEnd) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), nextNode);
      }
    }
  } else if (bStart > bEnd) {
    while (aStart <= aEnd) {
      unmount(a[aStart++], dom);
    }
  } else {
    var aLeft = aEnd - aStart + 1;
    var bLeft = bEnd - bStart + 1;
    var sources = new Array(bLeft); // Mark all nodes as inserted.

    for (i = 0; i < bLeft; i++) {
      sources[i] = -1;
    }

    var moved = false;
    var pos = 0;
    var patched = 0; // When sizes are small, just loop them through

    if (bLeft <= 4 || aLeft * bLeft <= 16) {
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];

        if (patched < bLeft) {
          for (j = bStart; j <= bEnd; j++) {
            bNode = b[j];

            if (aNode.key === bNode.key) {
              sources[j - bStart] = i;

              if (pos > j) {
                moved = true;
              } else {
                pos = j;
              }

              patch(aNode, bNode, dom, context, isSvg);
              patched++;
              a[i] = null;
              break;
            }
          }
        }
      }
    } else {
      var keyIndex = new MapClass();

      for (i = bStart; i <= bEnd; i++) {
        keyIndex.set(b[i].key, i);
      }

      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];

        if (patched < bLeft) {
          j = keyIndex.get(aNode.key);

          if (j !== undefined) {
            bNode = b[j];
            sources[j - bStart] = i;

            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }

            patch(aNode, bNode, dom, context, isSvg);
            patched++;
            a[i] = null;
          }
        }
      }
    }

    if (aLeft === aLength && patched === 0) {
      unmountChildren(a);
      dom.textContent = '';

      while (bStart < bLeft) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), null);
      }
    } else {
      i = aLeft - patched;

      while (i > 0) {
        aNode = a[aStart++];

        if (aNode !== null) {
          unmount(aNode, dom);
          i--;
        }
      }

      if (moved) {
        var seq = lis(sources);
        j = seq.length - 1;

        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + bStart;
              node = b[pos];
              nextPos = pos + 1;
              attachNewNode(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
            } else {
              j--;
            }
          }
        }
      } else if (patched !== bLeft) {
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          }
        }
      }
    }
  }
}

function attachNewNode(parentDom, newNode, nextNode) {
  if (isNullOrUndef(nextNode)) {
    parentDom.appendChild(newNode);
  } else {
    parentDom.insertBefore(newNode, nextNode);
  }
}
/**
 * Slightly modified Longest Increased Subsequence algorithm, it ignores items that have -1 value, they're representing
 * new items.
 *
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 *
 * @param a Array of numbers.
 * @returns Longest increasing subsequence.
 */


function lis(a) {
  var p = a.slice();
  var result = [];
  result.push(0);
  var u;
  var v;

  for (var i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }

    var j = result[result.length - 1];

    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }

    u = 0;
    v = result.length - 1;

    while (u < v) {
      var c = (u + v) / 2 | 0;

      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }

      result[u] = i;
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

function isKeyed(lastChildren, nextChildren) {
  return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

function isSameVNode(a, b) {
  if (isInvalid(a) || isInvalid(b) || isArray(a) || isArray(b)) {
    return false;
  }

  return a.type === b.type && a.vtype === b.vtype && a.key === b.key;
}

function patchVText(lastVNode, nextVNode) {
  var dom = lastVNode.dom;

  if (dom === null) {
    return;
  }

  var nextText = nextVNode.text;
  nextVNode.dom = dom;

  if (lastVNode.text !== nextText) {
    dom.nodeValue = nextText;
  }

  return dom;
}

var skipProps = {
  children: 1,
  key: 1,
  ref: 1,
  owner: 1
};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function setStyle(domStyle, style, value) {
  if (isNullOrUndef(value) || isNumber(value) && isNaN(value)) {
    domStyle[style] = '';
    return;
  }

  if (style === 'float') {
    domStyle['cssFloat'] = value;
    domStyle['styleFloat'] = value;
    return;
  }

  domStyle[style] = !isNumber(value) || IS_NON_DIMENSIONAL.test(style) ? value : value + 'px';
}

function patchEvent(eventName, lastEvent, nextEvent, domNode) {
  if (lastEvent !== nextEvent) {
    if (isFunction(lastEvent)) {
      detachEvent(domNode, eventName, lastEvent);
    }

    attachEvent(domNode, eventName, nextEvent);
  }
}

function patchStyle(lastAttrValue, nextAttrValue, dom) {
  var domStyle = dom.style;
  var style;
  var value;

  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }

  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];

      if (value !== lastAttrValue[style]) {
        setStyle(domStyle, style, value);
      }
    }

    for (style in lastAttrValue) {
      if (isNullOrUndef(nextAttrValue[style])) {
        domStyle[style] = '';
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      setStyle(domStyle, style, value);
    }
  }
}

function patchProp(domNode, prop, lastValue, nextValue, lastVnode, isSvg) {
  // fix the value update for textarea/input
  if (lastValue !== nextValue || prop === 'value') {
    if (prop === 'className') {
      prop = 'class';
    }

    if (skipProps[prop] === 1) {
      return;
    } else if (prop === 'class' && !isSvg) {
      domNode.className = nextValue;
    } else if (prop === 'dangerouslySetInnerHTML') {
      var lastHtml = lastValue && lastValue.__html;
      var nextHtml = nextValue && nextValue.__html;

      if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml)) {
          if (isValidElement(lastVnode) && lastVnode.children !== EMPTY_CHILDREN) {
            unmountChildren(lastVnode.children);
            lastVnode.children = [];
          }

          domNode.innerHTML = nextHtml;
        }
      }
    } else if (isAttrAnEvent(prop)) {
      patchEvent(prop, lastValue, nextValue, domNode);
    } else if (prop === 'style') {
      patchStyle(lastValue, nextValue, domNode);
    } else if (prop !== 'list' && prop !== 'type' && !isSvg && prop in domNode) {
      setProperty(domNode, prop, nextValue == null ? '' : nextValue);

      if (nextValue == null || nextValue === false) {
        domNode.removeAttribute(prop);
      }
    } else if (isNullOrUndef(nextValue) || nextValue === false) {
      domNode.removeAttribute(prop);
    } else {
      var namespace = SVGPropertyConfig.DOMAttributeNamespaces[prop];

      if (isSvg && namespace) {
        if (nextValue) {
          domNode.setAttributeNS(namespace, prop, nextValue);
        } else {
          var colonPosition = prop.indexOf(':');
          var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
          domNode.removeAttributeNS(namespace, localName);
        }
      } else {
        if (!isFunction(nextValue)) {
          domNode.setAttribute(prop, nextValue);
        } // WARNING: Non-event attributes with function values:
        // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#changes-in-detail

      }
    }
  }
}

function setProperty(node, name, value) {
  try {
    node[name] = value;
  } catch (e) {}
}

function patchProps(domNode, nextProps, previousProps, lastVnode, isSvg) {
  for (var propName in previousProps) {
    var value = previousProps[propName];

    if (isNullOrUndef(nextProps[propName]) && !isNullOrUndef(value)) {
      if (isAttrAnEvent(propName)) {
        detachEvent(domNode, propName, value);
      } else if (propName === 'dangerouslySetInnerHTML') {
        domNode.textContent = '';
      } else if (propName === 'className') {
        domNode.removeAttribute('class');
      } else {
        domNode.removeAttribute(propName);
      }
    }
  }

  for (var propName$1 in nextProps) {
    patchProp(domNode, propName$1, previousProps[propName$1], nextProps[propName$1], lastVnode, isSvg);
  }
}

var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

function createElement(vnode, isSvg, parentContext, parentComponent) {
  var domNode;

  if (isValidElement(vnode)) {
    var vtype = vnode.vtype;

    if (vtype & 4
    /* Composite */
    ) {
        domNode = vnode.init(parentContext, parentComponent);
      } else if (vtype & 1
    /* Text */
    ) {
        domNode = doc.createTextNode(vnode.text);
        vnode.dom = domNode;
      } else if (vtype & 2
    /* Node */
    ) {
        domNode = mountVNode$1(vnode, isSvg, parentContext, parentComponent);
      } else if (vtype & 16
    /* Void */
    ) {
        domNode = vnode.dom = doc.createTextNode('');
      } else if (isPortal(vtype, vnode)) {
      vnode.type.appendChild(createElement(vnode.children, isSvg, parentContext, parentComponent));
      domNode = doc.createTextNode('');
    }
  } else if (isString(vnode) || isNumber(vnode)) {
    domNode = doc.createTextNode(vnode);
  } else if (isNullOrUndef(vnode) || isBoolean(vnode)) {
    domNode = doc.createTextNode('');
  } else if (isArray(vnode)) {
    domNode = vnode.map(function (child) {
      return createElement(child, isSvg, parentContext, parentComponent);
    });
  } else {
    throw new Error('Unsupported VNode.');
  }

  return domNode;
}

function mountVNode$1(vnode, isSvg, parentContext, parentComponent) {
  if (vnode.isSvg) {
    isSvg = true;
  } else if (vnode.type === 'svg') {
    isSvg = true;
    /* istanbul ignore next */
  } else if (!isSupportSVG) {
    isSvg = false;
  }

  if (isSvg) {
    vnode.namespace = SVG_NAMESPACE;
    vnode.isSvg = isSvg;
  }

  var domNode = !isSvg ? doc.createElement(vnode.type) : doc.createElementNS(vnode.namespace, vnode.type);
  setProps(domNode, vnode, isSvg);

  if (vnode.type === 'foreignObject') {
    isSvg = false;
  }

  var children = vnode.children;

  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      mountChild(children[i], domNode, parentContext, isSvg, parentComponent);
    }
  } else {
    mountChild(children, domNode, parentContext, isSvg, parentComponent);
  }

  vnode.dom = domNode;

  if (vnode.ref !== null) {
    Ref.attach(vnode, vnode.ref, domNode);
  }

  return domNode;
}

function mountChild(child, domNode, parentContext, isSvg, parentComponent) {
  child.parentContext = parentContext || EMPTY_OBJ;
  var childNode = createElement(child, isSvg, parentContext, parentComponent);
  mountElement(childNode, domNode);
}

function mountElement(element, parentNode, refChild) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      mountElement(el, parentNode);
    }
  } else {
    refChild != null ? parentNode.insertBefore(element, refChild) : parentNode.appendChild(element);
  }
}

function insertElement(element, parentNode, lastDom) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      insertElement(el, parentNode, lastDom);
    }
  } else {
    parentNode.insertBefore(element, lastDom);
  }
}

function setProps(domNode, vnode, isSvg) {
  var props = vnode.props;

  for (var p in props) {
    patchProp(domNode, p, null, props[p], null, isSvg);
  }
}

function createVText(text) {
  return {
    text: text,
    vtype: 1
    /* Text */
    ,
    dom: null
  };
}

function createVoid() {
  return {
    dom: null,
    vtype: 16
    /* Void */

  };
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [initialState, function (action) {
      hook.state[0] = isFunction(action) ? action(hook.state[0]) : action;
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }

  return hook.state;
}

function useReducer(reducer, initialState, initializer) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  if (delay === void 0) delay = false;
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}

var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      nextTick(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  if (delay === void 0) delay = false;
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}

function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}

function useRef(initialValue) {
  var hook = getHooks(Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}

function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}

function useContext(context) {
  var provider = Current.current.context[context._id];

  if (isUndefined(provider)) {
    return context._defaultValue;
  }

  var hook = getHooks(Current.index++); // should update when value changes with shouldComponentUpdate:false Component on top

  if (isUndefined(hook.context)) {
    hook.context = true;
    var c = Current.current;
    provider.on(function () {
      return enqueueRender(c);
    });
  }

  return provider.value;
}

function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray(deps) ? deps.concat([ref]) : undefined);
} // import { extend, isFunction, isNumber, isString } from 'nerv-utils'


var readyComponents = [];

function errorCatcher(fn, component) {
  try {
    return fn();
  } catch (error) {
    errorHandler(component, error);
  }
}

function errorHandler(component, error) {
  // if(!component) { throw error ; return }
  var boundary;

  while (true) {
    var ref = component.constructor;
    var getDerivedStateFromError = ref.getDerivedStateFromError;

    if (isFunction(getDerivedStateFromError) || isFunction(component.componentDidCatch)) {
      boundary = component;
      break;
    } else if (component._parentComponent) {
      component = component._parentComponent;
    } else {
      break;
    }
  }

  if (boundary) {
    var ref$1 = boundary.constructor;
    var getDerivedStateFromError$1 = ref$1.getDerivedStateFromError;
    var _disable = boundary._disable;
    boundary._disable = false;

    if (isFunction(getDerivedStateFromError$1)) {
      component.setState(getDerivedStateFromError$1(error));
    } else if (isFunction(component.componentDidCatch)) {
      boundary.componentDidCatch(error);
    }

    boundary._disable = _disable;
  } else {
    throw error;
  }
}

function ensureVirtualNode(rendered) {
  if (isNumber(rendered) || isString(rendered)) {
    return createVText(rendered);
  } else if (isInvalid(rendered)) {
    return createVoid();
  } else if (isArray(rendered)) {
    rendered = rendered.length === 0 ? createVoid() : rendered.map(ensureVirtualNode);
  }

  return rendered;
}

function mountVNode(vnode, parentContext, parentComponent) {
  return createElement(vnode, false, parentContext, parentComponent);
}

function getContextByContextType(vnode, parentContext) {
  var contextType = vnode.type.contextType;
  var hasContextType = !isUndefined(contextType);
  var provider = hasContextType ? parentContext[contextType._id] : null;
  var context = hasContextType ? !isNullOrUndef(provider) ? provider.value : contextType._defaultValue : parentContext;
  return context;
}

function mountComponent(vnode, parentContext, parentComponent) {
  var ref = vnode.ref;

  if (vnode.type.prototype && vnode.type.prototype.render) {
    var context = getContextByContextType(vnode, parentContext);
    vnode.component = new vnode.type(vnode.props, context);
  } else {
    var c = new Component(vnode.props, parentContext);

    c.render = function () {
      return vnode.type.call(c, c.props, c.context);
    };

    vnode.component = c;
  }

  var component = vnode.component;
  component.vnode = vnode;

  if (isComponent(parentComponent)) {
    component._parentComponent = parentComponent;
  }

  var newState = callGetDerivedStateFromProps(vnode.props, component.state, component);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  if (!hasNewLifecycle(component) && isFunction(component.componentWillMount)) {
    errorCatcher(function () {
      component.componentWillMount();
    }, component);
    component.state = component.getState();
    component.clearCallBacks();
  }

  component._dirty = false;
  var rendered = renderComponent(component);
  rendered.parentVNode = vnode;
  component._rendered = rendered;

  if (!isNullOrUndef(ref)) {
    Ref.attach(vnode, ref, vnode.dom);
  }

  var dom = vnode.dom = mountVNode(rendered, getChildContext(component, parentContext), component);
  invokeEffects(component);

  if (isFunction(component.componentDidMount)) {
    readyComponents.push(component);
  }

  component._disable = false;
  return dom;
}

function getChildContext(component, context) {
  if (context === void 0) context = EMPTY_OBJ;

  if (isFunction(component.getChildContext)) {
    return extend(clone(context), component.getChildContext());
  }

  return clone(context);
}

function renderComponent(component) {
  Current.current = component;
  Current.index = 0;
  invokeEffects(component, true);
  var rendered;
  errorCatcher(function () {
    rendered = component.render();
  }, component);
  rendered = ensureVirtualNode(rendered);
  Current.current = null;
  return rendered;
}

function flushMount() {
  if (!readyComponents.length) {
    return;
  } // @TODO: perf


  var queue = readyComponents.slice(0);
  readyComponents.length = 0;
  queue.forEach(function (item) {
    if (isFunction(item)) {
      item();
    } else if (item.componentDidMount) {
      errorCatcher(function () {
        item.componentDidMount();
      }, item);
    }
  });
}

function getFragmentHostNode(children) {
  var child = children[0];

  if (isArray(child)) {
    return getFragmentHostNode(child);
  } else if (isComposite(child) && child.dom == null) {
    return getFragmentHostNode(child.component._rendered);
  }

  return child.dom;
}

function reRenderComponent(prev, current) {
  var component = current.component = prev.component;
  var nextProps = current.props;
  var nextContext = current.context;
  component._disable = true;

  if (!hasNewLifecycle(component) && isFunction(component.componentWillReceiveProps)) {
    errorCatcher(function () {
      component.componentWillReceiveProps(nextProps, nextContext);
    }, component);
  }

  component._disable = false;
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.props = nextProps;
  component.context = nextContext;

  if (!isNullOrUndef(current.ref)) {
    Ref.update(prev, current);
  }

  return updateComponent(component);
}

function callShouldComponentUpdate(props, state, context, component) {
  var shouldUpdate = true;
  errorCatcher(function () {
    shouldUpdate = component.shouldComponentUpdate(props, state, context);
  }, component);
  return shouldUpdate;
}

function updateComponent(component, isForce) {
  if (isForce === void 0) isForce = false;
  var vnode = component.vnode;
  var dom = vnode.dom;
  var props = component.props;
  var state = component.getState();
  var context = component.context;
  var prevProps = component.prevProps || props;
  var prevState = component.prevState || component.state;
  var prevContext = component.prevContext || context;
  var stateFromProps = callGetDerivedStateFromProps(props, state, component);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  component.props = prevProps;
  component.context = prevContext;
  var skip = false;
  var onSCU = props.onShouldComponentUpdate;

  if (!isForce && (isFunction(component.shouldComponentUpdate) && callShouldComponentUpdate(props, state, context, component) === false || isFunction(onSCU) && onSCU(prevProps, props) === false)) {
    skip = true;
  } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
    errorCatcher(function () {
      component.componentWillUpdate(props, state, context);
    }, component);
  }

  if (!isUndefined(stateFromProps)) {
    component.state = stateFromProps;
  }

  component.props = props;
  component.state = state;
  component.context = context;
  component._dirty = false;

  if (!skip) {
    var lastRendered = component._rendered;
    var rendered = renderComponent(component);
    rendered.parentVNode = vnode;
    var childContext = getChildContext(component, context);
    var snapshot = callGetSnapshotBeforeUpdate(prevProps, prevState, component);
    var parentDom = lastRendered.dom && lastRendered.dom.parentNode;

    if (isArray(lastRendered)) {
      var hostNode = getFragmentHostNode(lastRendered);

      if (hostNode) {
        parentDom = lastRendered.dom = hostNode.parentNode;
      }
    }

    dom = vnode.dom = patch(lastRendered, rendered, parentDom || null, childContext);
    component._rendered = rendered;

    if (isFunction(component.componentDidUpdate)) {
      errorCatcher(function () {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }, component);
    }

    while (vnode = vnode.parentVNode) {
      if ((vnode.vtype & 4
      /* Composite */
      ) > 0) {
        vnode.dom = dom;
      }
    }
  }

  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.clearCallBacks();
  flushMount();
  invokeEffects(component);
  return dom;
}

function unmountComponent(vnode) {
  var component = vnode.component;
  component.hooks.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }
  });

  if (isFunction(component.componentWillUnmount)) {
    errorCatcher(function () {
      component.componentWillUnmount();
    }, component);
  }

  component._disable = true;
  unmount(component._rendered);

  if (!isNullOrUndef(vnode.ref)) {
    Ref.detach(vnode, vnode.ref, vnode.dom);
  }
}

function callGetDerivedStateFromProps(props, state, inst) {
  var ref = inst.constructor;
  var getDerivedStateFromProps = ref.getDerivedStateFromProps;
  var newState; // @TODO show warning

  errorCatcher(function () {
    if (isFunction(getDerivedStateFromProps)) {
      var partialState = getDerivedStateFromProps.call(null, props, state);

      if (!isUndefined(partialState)) {
        newState = extend(clone(state), partialState);
      }
    }
  }, inst);
  return newState;
}

function callGetSnapshotBeforeUpdate(props, state, inst) {
  var getSnapshotBeforeUpdate = inst.getSnapshotBeforeUpdate;
  var snapshot;
  errorCatcher(function () {
    if (isFunction(getSnapshotBeforeUpdate)) {
      snapshot = getSnapshotBeforeUpdate.call(inst, props, state);
    }
  }, inst);
  return snapshot;
}

function hasNewLifecycle(component) {
  if (isFunction(component.constructor.getDerivedStateFromProps)) {
    return true;
  }

  return false;
}

var items = [];

function enqueueRender(component) {
  // tslint:disable-next-line:no-conditional-assignment
  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(rerender);
  }
}

function rerender(isForce) {
  if (isForce === void 0) isForce = false;
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, isForce);
    }
  }
}

var Component = function Component(props, context) {
  this._dirty = true;
  this._disable = true;
  this._pendingStates = [];
  this._pendingCallbacks = [];
  this._afterScheduleEffect = false;
  this.hooks = [];
  this.effects = EMPTY_CHILDREN;
  this.layoutEffects = EMPTY_CHILDREN;

  if (!this.state) {
    this.state = {};
  }

  this.props = props || {};
  this.context = context || EMPTY_OBJ;
  this.refs = {};
};

Component.prototype.setState = function setState(state, callback) {
  if (state) {
    this._pendingStates.push(state);
  }

  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }

  if (!this._disable) {
    enqueueRender(this);
  }
};

Component.prototype.getState = function getState() {
  var this$1 = this; // tslint:disable-next-line:no-this-assignment

  var ref = this;
  var _pendingStates = ref._pendingStates;
  var state = ref.state;
  var props = ref.props;

  if (!_pendingStates.length) {
    return state;
  }

  var stateClone = clone(state);

  var queue = _pendingStates.concat();

  this._pendingStates.length = 0;
  queue.forEach(function (nextState) {
    if (isFunction(nextState)) {
      nextState = nextState.call(this$1, state, props);
    }

    extend(stateClone, nextState);
  });
  return stateClone;
};

Component.prototype.clearCallBacks = function clearCallBacks() {
  var this$1 = this; // cached the length of callbacks, or callbacks may increase by calling them in the same loop

  var len = this._pendingCallbacks.length;

  for (var i = 0; i < len; i++) {
    var cb = this$1._pendingCallbacks.shift();

    cb.call(this$1);
  }
};

Component.prototype.forceUpdate = function forceUpdate(callback) {
  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }

  updateComponent(this, true);
}; // tslint:disable-next-line


Component.prototype.render = function render(nextProps, nextState, nextContext) {};

Component.prototype.isReactComponent = EMPTY_OBJ;

var PureComponent = function (Component$$1) {
  function PureComponent() {
    Component$$1.apply(this, arguments);
    this.isPureComponent = true;
  }

  if (Component$$1) PureComponent.__proto__ = Component$$1;
  PureComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  PureComponent.prototype.constructor = PureComponent;

  PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  };

  return PureComponent;
}(Component);

var options = {
  afterMount: noop$1,
  afterUpdate: noop$1,
  beforeUpdate: noop$1,
  beforeUnmount: noop$1,
  beforeRender: noop$1,
  beforeMount: noop$1,
  afterCreate: noop$1,
  roots: [],
  debug: false
};

function render(vnode, container, callback) {
  if (!container) {
    throw new Error(container + " should be a DOM Element");
  }

  var lastVnode = container._component;
  var dom;
  options.roots.push(vnode);

  if (lastVnode !== undefined) {
    options.roots = options.roots.filter(function (item) {
      return item !== lastVnode;
    });
    dom = patch(lastVnode, vnode, container, {});
  } else {
    dom = mountVNode(vnode, {});
    mountElement(dom, container);
  }

  if (container) {
    container._component = vnode;
  }

  flushMount();

  if (callback) {
    callback();
  }

  return isComposite(vnode) ? vnode.component : dom;
}

function createVNode(type, props, children, key, namespace, owner, ref) {
  return {
    type: type,
    key: key || null,
    vtype: 2
    /* Node */
    ,
    props: props || EMPTY_OBJ,
    children: children,
    namespace: namespace || null,
    _owner: owner,
    dom: null,
    ref: ref || null
  };
}

function h(type, props, children) {
  var childNodes;

  if (props.children) {
    if (!children) {
      children = props.children;
    }
  }

  if (isArray(children)) {
    childNodes = [];
    addChildren(childNodes, children, type);
  } else if (isString(children) || isNumber(children)) {
    children = createVText(String(children));
  } else if (!isValidElement(children)) {
    children = EMPTY_CHILDREN;
  }

  props.children = childNodes !== undefined ? childNodes : children;
  return createVNode(type, props, props.children, props.key, props.namespace, props.owner, props.ref);
}

function addChildren(childNodes, children, type) {
  if (isString(children) || isNumber(children)) {
    childNodes.push(createVText(String(children)));
  } else if (isValidElement(children)) {
    childNodes.push(children);
  } else if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      addChildren(childNodes, children[i], type);
    }
  } else {
    childNodes.push(createVoid());
  }
}

var ComponentWrapper = function ComponentWrapper(type, props) {
  this.vtype = 4
  /* Composite */
  ;
  this.type = type;
  this.name = type.name;

  if (isUndefined(this.name)) {
    var names = type.toString().match(/^function\s*([^\s(]+)/);
    this.name = isArray(names) ? names[0] : 'Component';
  }

  type.displayName = this.name;
  this._owner = props.owner;
  delete props.owner;

  if (this.ref = props.ref) {
    delete props.ref;
  }

  if (type._forwarded) {
    if (!isUndefined(this.ref)) {
      props.ref = this.ref;
    }

    delete this.ref;
  }

  this.props = props;
  this.key = props.key || null;
  this.dom = null;
  options.afterCreate(this);
};

ComponentWrapper.prototype.init = function init(parentContext, parentComponent) {
  options.beforeMount(this);
  var dom = mountComponent(this, parentContext, parentComponent);
  options.afterMount(this);
  return dom;
};

ComponentWrapper.prototype.update = function update(previous, current, parentContext, domNode) {
  this.context = getContextByContextType(this, parentContext);
  options.beforeUpdate(this);
  var dom = reRenderComponent(previous, this);
  options.afterUpdate(this);
  return dom;
};

ComponentWrapper.prototype.destroy = function destroy() {
  options.beforeUnmount(this);
  unmountComponent(this);
}; // import StatelessComponent from './stateless-component'


function transformPropsForRealTag(type, props) {
  var newProps = {};

  for (var propName in props) {
    var propValue = props[propName];

    if (propName === 'defaultValue') {
      newProps.value = props.value || props.defaultValue;
      continue;
    }

    var svgPropName = SVGPropertyConfig.DOMAttributeNames[propName];

    if (svgPropName && svgPropName !== propName) {
      newProps[svgPropName] = propValue;
      continue;
    }

    newProps[propName] = propValue;
  }

  return newProps;
}
/**
 *
 * @param props
 * @param defaultProps
 * defaultProps should respect null but ignore undefined
 * @see: https://facebook.github.io/react/docs/react-component.html#defaultprops
 */


function transformPropsForComponent(props, defaultProps) {
  var newProps = {};

  for (var propName in props) {
    var propValue = props[propName];
    newProps[propName] = propValue;
  }

  if (defaultProps) {
    for (var propName$1 in defaultProps) {
      if (isUndefined(newProps[propName$1])) {
        newProps[propName$1] = defaultProps[propName$1];
      }
    }
  }

  return newProps;
}

function createElement$2(type, properties) {
  var _children = [],
      len = arguments.length - 2;

  while (len-- > 0) {
    _children[len] = arguments[len + 2];
  }

  var children = _children;

  if (_children) {
    if (_children.length === 1) {
      children = _children[0];
    } else if (_children.length === 0) {
      children = undefined;
    }
  }

  var props;

  if (isString(type)) {
    props = transformPropsForRealTag(type, properties);
    props.owner = Current.current;
    return h(type, props, children);
  } else if (isFunction(type)) {
    props = transformPropsForComponent(properties, type.defaultProps);

    if (!props.children || props.children === EMPTY_CHILDREN) {
      props.children = children || children === 0 ? children : EMPTY_CHILDREN;
    }

    props.owner = Current.current;
    return new ComponentWrapper(type, props);
  }

  return type;
}

function cloneElement(vnode, props) {
  var children = [],
      len = arguments.length - 2;

  while (len-- > 0) {
    children[len] = arguments[len + 2];
  }

  if (isVText(vnode)) {
    return createVText(vnode.text);
  }

  if (isString(vnode) || isNumber(vnode)) {
    return createVText(vnode);
  }

  if (isInvalid(vnode) || !isInvalid(vnode) && isPortal(vnode.vtype, vnode) || vnode && vnode.vtype & 16
  /* Void */
  ) {
      return createVoid();
    }

  var properties = clone(extend(clone(vnode.props), props));

  if (vnode.namespace) {
    properties.namespace = vnode.namespace;
  }

  if (vnode.vtype & 4
  /* Composite */
  && !isNullOrUndef(vnode.ref)) {
    properties.ref = vnode.ref;
  }

  var childrenTmp = (arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children || properties.children) || [];

  if (childrenTmp.length) {
    if (childrenTmp.length === 1) {
      childrenTmp = children[0];
    }
  }

  if (isArray(vnode)) {
    return vnode.map(function (item) {
      return cloneElement(item);
    });
  }

  var newVNode = createElement$2(vnode.type, properties);

  if (isArray(childrenTmp)) {
    var _children = childrenTmp.map(function (child) {
      return cloneElement(child, child.props);
    });

    if (_children.length === 0) {
      _children = EMPTY_CHILDREN;
    }

    if (isVNode(newVNode)) {
      newVNode.children = _children;
    }

    newVNode.props.children = _children;
  } else if (childrenTmp) {
    if (isVNode(newVNode)) {
      newVNode.children = cloneElement(childrenTmp);
    }

    newVNode.props.children = cloneElement(childrenTmp, childrenTmp.props);
  }

  return newVNode;
}

var Children = {
  map: function map(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return children;
    }

    children = Children.toArray(children);

    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }

    return children.map(fn);
  },
  forEach: function forEach(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return;
    }

    children = Children.toArray(children);

    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }

    for (var i = 0, len = children.length; i < len; i++) {
      var child = isInvalid(children[i]) ? null : children[i];
      fn(child, i, children);
    }
  },
  count: function count(children) {
    children = Children.toArray(children);
    return children.length;
  },
  only: function only(children) {
    children = Children.toArray(children);

    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }

    return children[0];
  },
  toArray: function toArray(children) {
    if (isNullOrUndef(children)) {
      return [];
    }

    if (isArray(children)) {
      var result = [];
      flatten(children, result);
      return result;
    }

    return EMPTY_CHILDREN.concat(children);
  }
};

function flatten(arr, result) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];

    if (isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
} // tslint:disable:no-conditional-assignment


function hydrate(vnode, container, callback) {
  if (container !== null) {
    // lastChild causes less reflow than firstChild
    var dom = container.lastChild; // there should be only a single entry for the root

    while (dom) {
      var next = dom.previousSibling;
      container.removeChild(dom);
      dom = next;
    }

    return render(vnode, container, callback);
  }
}

function createPortal(children, container) {
  return {
    type: container,
    vtype: 32
    /* Portal */
    ,
    children: children,
    dom: null
  };
} // some library check React version
// see: https://github.com/NervJS/nerv/issues/46


var version = '15.4.2';

function unmountComponentAtNode(dom) {
  var component = dom._component;

  if (isValidElement(component)) {
    unmount(component, dom);
    delete dom._component;
    return true;
  }

  return false;
}

function findDOMNode(component) {
  if (isInvalid(component)) {
    return null;
  }

  return isComponent(component) ? component.vnode.dom : isValidElement(component) ? component.dom : component;
}

function createFactory(type) {
  return createElement$2.bind(null, type);
}

var WrapperComponent = function (Component$$1) {
  function WrapperComponent() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) WrapperComponent.__proto__ = Component$$1;
  WrapperComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  WrapperComponent.prototype.constructor = WrapperComponent;

  WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
    // tslint:disable-next-line
    return this.props.context;
  };

  WrapperComponent.prototype.render = function render$$1() {
    return this.props.children;
  };

  return WrapperComponent;
}(Component);

function unstable_renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
  // @TODO: should handle props.context?
  var wrapper = createElement$2(WrapperComponent, {
    context: getChildContext(parentComponent, parentComponent.context)
  }, vnode);
  var rendered = render(wrapper, container);

  if (callback) {
    callback.call(rendered);
  }

  return rendered;
}

function isValidElement$1(element) {
  return isValidElement(element) && (element.vtype & (4
  /* Composite */
  | 2
  /* Node */
  )) > 0;
}

var unstable_batchedUpdates = nextTick;
var shim = noop$1;
shim.isRequired = noop$1;

function getShim() {
  return shim;
}

var PropTypes = {
  array: shim,
  bool: shim,
  func: shim,
  number: shim,
  object: shim,
  string: shim,
  any: shim,
  arrayOf: getShim,
  element: shim,
  instanceOf: getShim,
  node: shim,
  objectOf: getShim,
  oneOf: getShim,
  oneOfType: getShim,
  shape: getShim,
  exact: getShim,
  PropTypes: {},
  checkPropTypes: noop$1
};
PropTypes.PropTypes = PropTypes;

function createRef() {
  return {};
}

function forwardRef(cb) {
  var fn = function fn(props) {
    var ref = props.ref;
    delete props.ref;
    return cb(props, ref);
  };

  fn._forwarded = true;
  return fn;
}

function memo(component, propsAreEqual) {
  function shouldComponentUpdate(nextProps) {
    var prevRef = this.props.ref;
    var nextRef = nextProps.ref;

    if (prevRef !== nextRef) {
      Ref.detach(this.vnode, prevRef, this.dom);
      Ref.attach(this.vnode, nextRef, this.dom);
      return true;
    }

    return isFunction(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  }

  function Memoed(props) {
    this.shouldComponentUpdate = shouldComponentUpdate;
    return createElement$2(component, Object.assign({}, props));
  }

  Memoed._forwarded = true;
  Memoed.isMemo = true;
  return Memoed;
}

var Emiter = function Emiter(value) {
  this.handlers = [];
  this.value = value;
};

Emiter.prototype.on = function on(handler) {
  this.handlers.push(handler);
};

Emiter.prototype.off = function off(handler) {
  this.handlers = this.handlers.filter(function (h) {
    return h !== handler;
  });
};

Emiter.prototype.set = function set(value) {
  var this$1 = this;
  this.value = value;
  this.handlers.forEach(function (h) {
    return h(this$1.value);
  });
};

var uid = 0;

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createContext(defaultValue) {
  var contextProp = '__context_' + uid++ + '__';

  var Provider = function (Component$$1) {
    function Provider() {
      Component$$1.apply(this, arguments);
      this.emiter = new Emiter(this.props.value);
    }

    if (Component$$1) Provider.__proto__ = Component$$1;
    Provider.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Provider.prototype.constructor = Provider;

    Provider.prototype.getChildContext = function getChildContext() {
      return obj = {}, obj[contextProp] = this.emiter, obj;
      var obj;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (!objectIs(this.props.value, nextProps.value)) {
        this.emiter.set(nextProps.value);
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(Component);

  Provider.isContextProvider = true; // tslint:disable-next-line: max-classes-per-file

  var Consumer = function (Component$$1) {
    function Consumer() {
      var this$1 = this;
      Component$$1.apply(this, arguments);
      this.state = {
        value: this.getContextValue()
      };

      this.onUpdate = function (value) {
        if (!objectIs(value, this$1.state.value)) {
          this$1.setState({
            value: this$1.getContextValue()
          });
        }
      };
    }

    if (Component$$1) Consumer.__proto__ = Component$$1;
    Consumer.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Consumer.prototype.constructor = Consumer;

    Consumer.prototype.componentWillMount = function componentWillMount() {
      var emiter = this.context[contextProp];

      if (emiter) {
        emiter.off(this.onUpdate);
      }
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      var emiter = this.context[contextProp];

      if (emiter) {
        emiter.on(this.onUpdate);
      }
    };

    Consumer.prototype.getContextValue = function getContextValue() {
      var emiter = this.context[contextProp];
      return isUndefined(emiter) ? defaultValue : emiter.value;
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(Component);

  Consumer.isContextConsumer = true;
  return {
    Provider: Provider,
    Consumer: Consumer,
    _id: contextProp,
    _defaultValue: defaultValue
  };
}

function Fragment(props) {
  return props.children;
} // tslint:disable-next-line: max-line-length


var index = {
  Children: Children,
  Component: Component,
  PureComponent: PureComponent,
  createElement: createElement$2,
  cloneElement: cloneElement,
  render: render,
  nextTick: nextTick,
  options: options,
  findDOMNode: findDOMNode,
  isValidElement: isValidElement$1,
  unmountComponentAtNode: unmountComponentAtNode,
  createPortal: createPortal,
  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
  hydrate: hydrate,
  createFactory: createFactory,
  unstable_batchedUpdates: unstable_batchedUpdates,
  version: version,
  PropTypes: PropTypes,
  createRef: createRef,
  forwardRef: forwardRef,
  memo: memo,
  createContext: createContext,
  renderComponent: renderComponent,
  getHooks: getHooks,
  Current: Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  useContext: useContext,
  Fragment: Fragment
};

/* harmony default export */ __webpack_exports__["default"] = (index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ })

}]);