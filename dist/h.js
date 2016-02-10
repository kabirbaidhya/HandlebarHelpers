(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('./helpers.js');

var helpers = _interopRequireWildcard(_helpers);

var _utils = require('./util/utils.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var H = function () {
    function H() {
        _classCallCheck(this, H);
    }

    _createClass(H, null, [{
        key: 'registerHelpers',
        value: function registerHelpers() {

            // TODO: Make it compatible with node environment too
            if ((0, _utils.isUndefined)(window.Handlebars)) {
                throw new Error('Handlebars not loaded');
            }

            for (var name in helpers) {
                window.Handlebars.registerHelper(name, helpers[name]);
            }
        }
    }]);

    return H;
}();

if ((0, _utils.isObject)(window)) {
    window.H = H;
}

exports.default = H;

},{"./helpers.js":2,"./util/utils.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * An excerpt helper to extract a few characters from a string. Default number of characters is 50.
 *
 * Example usage:
 *      {{excerpt 'Just Wow' 4}}
 *
 * @param string
 * @param length
 */
function excerpt(string, length) {
    length = length || 50;

    if (typeof string !== 'string') {
        return string;
    }

    if (string.length < length) {
        return string;
    }

    return string.slice(0, length) + '...';
};

/**
 * A dashCase helper to convert a string to dash-case. This helper will also remove
 * special characters and make the string lowercase.
 *
 * Example usage:
 *      {{dashCase 'JuSt #Wow'}}
 *
 * @param string param
 */
function dashCase(param) {
    var string = param.replace(/[^\w\s]/gi, '').trim();

    return string.replace(/\s+/, '-').toLowerCase();
}

/**
 * A capitalizeEach helper to capitalize each letter of a string.
 *
 * Example usage:
 *      {{capitalizeEach 'just wow'}}
 *
 * @param string param
 */
function capitalizeEach(param) {
    if (typeof param === 'string') {
        return param.toLowerCase().replace(/\w\S*/g, function (match) {
            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }

    return '';
}

/**
 * A capitalizeFirst helper to capitalize the first letter of a string.
 *
 * Example usage:
 *      {{capitalizeFirst 'wow'}}
 *
 * @param string param
 */
function capitalizeFirst(param) {
    if (typeof param === 'string') {
        return param.charAt(0).toUpperCase() + param.slice(1);
    }

    return '';
}

/**
 * A showIf helper for showing any element if the passed parameter holds true
 *
 * Example usage:
 *      {{showIf itShouldBeVisible}}
 *
 * @param param value to be checked
 */
function showIf(param) {
    return !!param ? '' : 'hidden';
}

/**
 * A hideIf helper for dropdowns.
 *
 * Example usage:
 *      {{hideIf directLease}}
 *
 * @param param value to be checked
 */
function hideIf(param) {
    return !!param ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdowns and radio boxes.
 *
 * Example usage:
 *      {{selectedIf param1 param2}}
 *
 * @param param1
 * @param param2
 */
function selectedIf(param1, param2) {
    return param1 === param2 ? 'selected' : '';
}

exports.excerpt = excerpt;
exports.dashCase = dashCase;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.selectedIf = selectedIf;

},{}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

function isFunction(thing) {
    return typeof thing === 'function';
}

function isUndefined(thing) {
    return typeof thing === 'undefined';
}

function isObject(thing) {
    return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isObject = isObject;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ1k7Ozs7Ozs7O0lBR047Ozs7Ozs7MENBQ3VCOzs7QUFHckIsZ0JBQUksV0FOSixZQU1JLENBQVksT0FBTyxVQUFQLENBQWhCLEVBQW9DO0FBQ2hDLHNCQUFNLElBQUksS0FBSixDQUFVLHVCQUFWLENBQU4sQ0FEZ0M7YUFBcEM7O0FBSUEsaUJBQUksSUFBSSxJQUFKLElBQVksT0FBaEIsRUFBeUI7QUFDckIsdUJBQU8sVUFBUCxDQUFrQixjQUFsQixDQUFpQyxJQUFqQyxFQUF1QyxRQUFRLElBQVIsQ0FBdkMsRUFEcUI7YUFBekI7Ozs7V0FSRjs7O0FBY04sSUFBSSxXQWhCaUIsU0FnQmpCLENBQVMsTUFBVCxDQUFKLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBUCxHQUFXLENBQVgsQ0FEa0I7Q0FBdEI7O2tCQUllOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JmLFNBQVMsT0FBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQztBQUM5QixhQUFTLFVBQVUsRUFBVixDQURxQjs7QUFHOUIsUUFBSSxPQUFRLE1BQVIsS0FBb0IsUUFBcEIsRUFBOEI7QUFDOUIsZUFBTyxNQUFQLENBRDhCO0tBQWxDOztBQUlBLFFBQUksT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEVBQXdCO0FBQ3hCLGVBQU8sTUFBUCxDQUR3QjtLQUE1Qjs7QUFJQSxXQUFPLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsSUFBMEIsS0FBMUIsQ0FYdUI7Q0FBbEM7Ozs7Ozs7Ozs7O0FBdUJBLFNBQVMsUUFBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN0QixRQUFJLFNBQVMsTUFBTSxPQUFOLENBQWMsV0FBZCxFQUEyQixFQUEzQixFQUErQixJQUEvQixFQUFULENBRGtCOztBQUd0QixXQUFPLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsR0FBdEIsRUFBMkIsV0FBM0IsRUFBUCxDQUhzQjtDQUExQjs7Ozs7Ozs7OztBQWNBLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUMzQixRQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFqQixFQUEyQjtBQUMzQixlQUFPLE1BQU0sV0FBTixHQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxVQUFVLEtBQVYsRUFBaUI7QUFDMUQsbUJBQU8sTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQWhDLENBRG1EO1NBQWpCLENBQTdDLENBRDJCO0tBQS9COztBQU1BLFdBQU8sRUFBUCxDQVAyQjtDQUEvQjs7Ozs7Ozs7OztBQWtCQSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDNUIsUUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsRUFBMkI7QUFDM0IsZUFBTyxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBaEMsQ0FEb0I7S0FBL0I7O0FBSUEsV0FBTyxFQUFQLENBTDRCO0NBQWhDOzs7Ozs7Ozs7O0FBZ0JBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsRUFBVixHQUFlLFFBQWYsQ0FEYTtDQUF4Qjs7Ozs7Ozs7OztBQVlBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsUUFBVixHQUFxQixFQUFyQixDQURhO0NBQXhCOzs7Ozs7Ozs7OztBQWFBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUNoQyxXQUFPLE1BQUMsS0FBVyxNQUFYLEdBQXFCLFVBQXRCLEdBQW1DLEVBQW5DLENBRHlCO0NBQXBDOztRQU1JO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7OztBQ3BISixTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDdkIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsVUFBakIsQ0FEZTtDQUEzQjs7QUFJQSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDeEIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsV0FBakIsQ0FEZ0I7Q0FBNUI7O0FBSUEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQVEsUUFBTyxxREFBUCxLQUFpQixRQUFqQixDQURhO0NBQXpCOztRQUlRO1FBQVk7UUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7aXNVbmRlZmluZWQsIGlzT2JqZWN0fSBmcm9tICcuL3V0aWwvdXRpbHMuanMnO1xuXG5jbGFzcyBIIHtcbiAgICBzdGF0aWMgcmVnaXN0ZXJIZWxwZXJzKCkge1xuXG4gICAgICAgIC8vIFRPRE86IE1ha2UgaXQgY29tcGF0aWJsZSB3aXRoIG5vZGUgZW52aXJvbm1lbnQgdG9vXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh3aW5kb3cuSGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gaGVscGVycykge1xuICAgICAgICAgICAgd2luZG93LkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlmIChpc09iamVjdCh3aW5kb3cpKSB7XG4gICAgd2luZG93LkggPSBIO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIO1xuIiwiLyoqXG4gKiBBbiBleGNlcnB0IGhlbHBlciB0byBleHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQgKHN0cmluZywgbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDUwO1xuXG4gICAgaWYgKHR5cGVvZiAoc3RyaW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xufTtcblxuLyoqXG4gKiBBIGRhc2hDYXNlIGhlbHBlciB0byBjb252ZXJ0IGEgc3RyaW5nIHRvIGRhc2gtY2FzZS4gVGhpcyBoZWxwZXIgd2lsbCBhbHNvIHJlbW92ZVxuICogc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtYWtlIHRoZSBzdHJpbmcgbG93ZXJjYXNlLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZGFzaENhc2UgJ0p1U3QgI1dvdyd9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmcgcGFyYW1cbiAqL1xuZnVuY3Rpb24gZGFzaENhc2UgKHBhcmFtKSB7XG4gICAgdmFyIHN0cmluZyA9IHBhcmFtLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRyaW0oKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBBIGNhcGl0YWxpemVFYWNoIGhlbHBlciB0byBjYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChwYXJhbSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBBIGNhcGl0YWxpemVGaXJzdCBoZWxwZXIgdG8gY2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICd3b3cnfX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nIHBhcmFtXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChwYXJhbSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcmFtLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGVsZW1lbnQgaWYgdGhlIHBhc3NlZCBwYXJhbWV0ZXIgaG9sZHMgdHJ1ZVxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2hvd0lmIGl0U2hvdWxkQmVWaXNpYmxlfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0gdmFsdWUgdG8gYmUgY2hlY2tlZFxuICovXG5mdW5jdGlvbiBzaG93SWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuICEhcGFyYW0gPyAnJyA6ICdoaWRkZW4nO1xufVxuXG4vKipcbiAqIEEgaGlkZUlmIGhlbHBlciBmb3IgZHJvcGRvd25zLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7aGlkZUlmIGRpcmVjdExlYXNlfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0gdmFsdWUgdG8gYmUgY2hlY2tlZFxuICovXG5mdW5jdGlvbiBoaWRlSWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuICEhcGFyYW0gPyAnaGlkZGVuJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3ducyBhbmQgcmFkaW8gYm94ZXMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tzZWxlY3RlZElmIHBhcmFtMSBwYXJhbTJ9fVxuICpcbiAqIEBwYXJhbSBwYXJhbTFcbiAqIEBwYXJhbSBwYXJhbTJcbiAqL1xuZnVuY3Rpb24gc2VsZWN0ZWRJZihwYXJhbTEsIHBhcmFtMikge1xuICAgIHJldHVybiAocGFyYW0xID09PSBwYXJhbTIpID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgZXhjZXJwdCxcbiAgICBkYXNoQ2FzZSxcbiAgICBjYXBpdGFsaXplRWFjaCxcbiAgICBjYXBpdGFsaXplRmlyc3QsXG4gICAgc2hvd0lmLFxuICAgIGhpZGVJZixcbiAgICBzZWxlY3RlZElmXG59O1xuIiwiXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnKTtcbn1cblxuZXhwb3J0IHtpc0Z1bmN0aW9uLCBpc1VuZGVmaW5lZCwgaXNPYmplY3R9O1xuIl19
