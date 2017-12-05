/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TodoPage = __webpack_require__(15);

var _TodoPage2 = _interopRequireDefault(_TodoPage);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _TodoPage2.default, {
    path: '/'
  })]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_TODOS = exports.FETCH_TODOS = 'fetch_todos';
var fetchTodos = exports.fetchTodos = function fetchTodos() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/todos');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_TODOS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var ADD_TODO = exports.ADD_TODO = 'add_todo';
var addTodo = exports.addTodo = function addTodo(option) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.post('/todos/create', { content: option });

            case 2:
              res = _context2.sent;

              dispatch({
                type: ADD_TODO,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var DELETE_TODO = exports.DELETE_TODO = 'delete_todo';
var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.delete('/todos/' + id);

            case 2:
              res = _context3.sent;

              dispatch({
                type: DELETE_TODO,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(9);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _path = __webpack_require__(10);

var _path2 = _interopRequireDefault(_path);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(1);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8000;

app.use('/api', (0, _expressHttpProxy2.default)('https://api-todos.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:' + port;
    return opts;
  }
}));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
});

app.listen(port, function (err) {
  if (err) throw err;

  console.log('Server running at port:' + port);
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <meta http-equiv="X-UA-Compatible" content="ie=edge">\n      <title>React Redux SSR</title>\n      <link rel=icon type=image/png href=/statics/img/favicon.png>\n      <link rel="stylesheet" href="/styles.css">\n    </head>\n    <body>\n      <div id="root">' + content + '</div>\n      <script>\n        window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n      </script>\n      <script src="bundle.js"></script>\n    </body>\n    </html>\n  ';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _Action = __webpack_require__(16);

var _Action2 = _interopRequireDefault(_Action);

var _Options = __webpack_require__(17);

var _Options2 = _interopRequireDefault(_Options);

var _AddOption = __webpack_require__(19);

var _AddOption2 = _interopRequireDefault(_AddOption);

var _OptionModal = __webpack_require__(20);

var _OptionModal2 = _interopRequireDefault(_OptionModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedOption: undefined
    }, _this.handleAddOption = function (option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (_this.props.todos.indexOf(option) > -1) {
        return 'This option already exists';
      }

      _this.props.addTodo(option);
    }, _this.handlePick = function () {
      var randomNum = Math.floor(Math.random() * _this.props.todos.length);
      var option = _this.props.todos[randomNum];
      _this.setState(function () {
        return { selectedOption: option.content };
      });
    }, _this.handleDeleteOption = function (optionToRemove) {
      _this.props.deleteTodo(optionToRemove);
    }, _this.handleDeleteOptions = function () {
      console.log('handleDeleteOptions');
    }, _this.handleClearSelectedOption = function () {
      _this.setState(function () {
        return { selectedOption: undefined };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Action2.default, {
            hasOptions: this.props.todos.length > 0,
            handlePick: this.handlePick
          }),
          _react2.default.createElement(
            'div',
            { className: 'widget' },
            _react2.default.createElement(_Options2.default, {
              options: this.props.todos,
              handleDeleteOption: this.handleDeleteOption,
              handleDeleteOptions: this.handleDeleteOptions
            }),
            _react2.default.createElement(_AddOption2.default, {
              handleAddOption: this.handleAddOption
            })
          )
        ),
        _react2.default.createElement(_OptionModal2.default, {
          selectedOption: this.state.selectedOption,
          handleClearSelectedOption: this.handleClearSelectedOption
        })
      );
    }
  }]);

  return HomePage;
}(_react.Component);

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchTodos)());
};
var mapStateToProps = function mapStateToProps(_ref2) {
  var todos = _ref2.todos;
  return { todos: todos };
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { addTodo: _actions.addTodo, deleteTodo: _actions.deleteTodo })(HomePage)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "button",
      {
        className: "big-button",
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      "What should I do?"
    )
  );
};

exports.default = Action;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Option = __webpack_require__(18);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'widget-header' },
      _react2.default.createElement(
        'h3',
        { className: 'widget-header__title' },
        'Your Options'
      ),
      _react2.default.createElement(
        'button',
        {
          onClick: props.handleDeleteOptions,
          className: 'button button--link'
        },
        'Remove All'
      )
    ),
    props.options.length === 0 && _react2.default.createElement(
      'p',
      { className: 'widget__message' },
      'Please add an option to get started!'
    ),
    props.options && props.options.map(function (option, i) {
      return _react2.default.createElement(_Option2.default, {
        key: i,
        optionId: option.id,
        optionText: option.content,
        count: i + 1,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    { className: "option" },
    _react2.default.createElement(
      "p",
      { className: "option__text" },
      props.count,
      ". ",
      props.optionText
    ),
    _react2.default.createElement(
      "button",
      {
        className: "button button--link",
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionId);
        }
      },
      "remove"
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddOption = function (_Component) {
  _inherits(AddOption, _Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.handleAddOption = function (e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = _this.props.handleAddOption(option);

      _this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    };

    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        this.state.error && _react2.default.createElement(
          'p',
          { className: 'add-option-error' },
          this.state.error
        ),
        _react2.default.createElement(
          'form',
          { className: 'add-option', onSubmit: this.handleAddOption },
          _react2.default.createElement('input', { className: 'add-option__input', type: 'text', name: 'option' }),
          _react2.default.createElement(
            'button',
            { className: 'button', type: 'submit' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(_react.Component);

exports.default = AddOption;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(21);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionModal = function OptionModal(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactModal2.default,
      {
        ariaHideApp: false,
        isOpen: !!props.selectedOption,
        onRequestClose: props.handleClearSelectedOption,
        contentLabel: 'Select Option',
        closeTimeoutMS: 200,
        className: 'modal'
      },
      _react2.default.createElement(
        'h3',
        { className: 'modal__title' },
        'Selected Option'
      ),
      props.selectedOption && _react2.default.createElement(
        'p',
        { className: 'modal__body' },
        props.selectedOption
      ),
      _react2.default.createElement(
        'button',
        { className: 'button', onClick: props.handleClearSelectedOption },
        'Okay'
      )
    )
  );
};

exports.default = OptionModal;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "h1",
        { className: "header__title" },
        "React Redux SSR"
      ),
      _react2.default.createElement(
        "h2",
        { className: "header__subtitle" },
        "Todo App Server-Side Rendering"
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'https://api-todos.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _todoReducer = __webpack_require__(27);

var _todoReducer2 = _interopRequireDefault(_todoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  todos: _todoReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_TODOS:
      return action.payload.data;
    case _actions.ADD_TODO:
      return action.payload.data;
    case _actions.DELETE_TODO:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map