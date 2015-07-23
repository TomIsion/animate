webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcAnimate = __webpack_require__(7);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var seed = 0;
	
	var Alert = _react2['default'].createClass({
	  displayName: 'Alert',
	
	  protoTypes: {
	    time: _react2['default'].PropTypes.number,
	    type: _react2['default'].PropTypes.number,
	    str: _react2['default'].PropTypes.string,
	    onEnd: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onEnd: function onEnd() {},
	      time: 2000,
	      type: 'success'
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    setTimeout(function () {
	      props.onEnd();
	    }, props.time);
	  },
	
	  render: function render() {
	    var props = this.props;
	    return _react2['default'].createElement(
	      'div',
	      { style: {
	          background: 'yellow',
	          width: 600,
	          padding: 20,
	          marginLeft: 'auto',
	          marginRight: 'auto'
	        } },
	      props.str
	    );
	  }
	});
	
	var AlertGroup = _react2['default'].createClass({
	  displayName: 'AlertGroup',
	
	  getInitialState: function getInitialState() {
	    return {
	      alerts: []
	    };
	  },
	  addAlert: function addAlert(a) {
	    this.setState({
	      alerts: this.state.alerts.concat(a)
	    });
	  },
	  onEnd: function onEnd(key) {
	    var alerts = this.state.alerts;
	    var ret = [];
	    var target;
	    alerts.forEach(function (a) {
	      if (a.key === key) {
	        target = a;
	      } else {
	        ret.push(a);
	      }
	    });
	    if (target) {
	      this.setState({
	        alerts: ret
	      }, function () {
	        if (target.callback) {
	          target.callback();
	        }
	      });
	    }
	  },
	  render: function render() {
	    var alerts = this.state.alerts;
	    var self = this;
	    var children = alerts.map(function (a) {
	      if (!a.key) {
	        seed++;
	        a.key = seed + '';
	      }
	      return _react2['default'].createElement(Alert, _extends({}, a, { onEnd: self.onEnd.bind(self, a.key) }));
	    });
	    return _react2['default'].createElement(
	      'div',
	      { style: {
	          position: 'fixed',
	          width: '100%',
	          top: 50,
	          zIndex: 9999
	        } },
	      _react2['default'].createElement(
	        _rcAnimate2['default'],
	        { transitionName: "fade" },
	        children
	      )
	    );
	  }
	});
	
	var alertGroup;
	
	function alert(str, time, type, callback) {
	  if (!alertGroup) {
	    var div = document.createElement('div');
	    document.body.appendChild(div);
	    alertGroup = _react2['default'].render(_react2['default'].createElement(AlertGroup, null), div);
	  }
	  alertGroup.addAlert({
	    str: str,
	    time: time,
	    type: type,
	    callback: callback
	  });
	}
	
	function onClick() {
	  for (var i = 0; i < 4; i++) {
	    (function (i) {
	      setTimeout(function () {
	        alert(i);
	      }, 1000 * i);
	    })(i);
	  }
	}
	
	_react2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(
	    'h2',
	    null,
	    'notification'
	  ),
	  _react2['default'].createElement(
	    'button',
	    { onClick: onClick },
	    'show notification'
	  )
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=alert.js.map