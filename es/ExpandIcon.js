function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import shallowequal from 'shallowequal';

var ExpandIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(ExpandIcon, _React$Component);

  function ExpandIcon() {
    _classCallCheck(this, ExpandIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpandIcon).apply(this, arguments));
  }

  _createClass(ExpandIcon, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowequal(nextProps, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          expandable = _this$props.expandable,
          prefixCls = _this$props.prefixCls,
          onExpand = _this$props.onExpand,
          needIndentSpaced = _this$props.needIndentSpaced,
          expanded = _this$props.expanded,
          record = _this$props.record;

      if (expandable) {
        var expandClassName = expanded ? 'expanded' : 'collapsed';
        return React.createElement("span", {
          className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-").concat(expandClassName),
          onClick: function onClick(e) {
            return onExpand(record, e);
          }
        });
      }

      if (needIndentSpaced) {
        return React.createElement("span", {
          className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-spaced")
        });
      }

      return null;
    }
  }]);

  return ExpandIcon;
}(React.Component);

export { ExpandIcon as default };