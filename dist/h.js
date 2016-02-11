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

/**
 * A checkedIf helper for checkboxes.
 *
 * Example usage:
 *      {{checkedIf param1 param2}}
 *
 * @param param1
 * @param param2
 */
function checkedIf(param1, param2) {
    return param1 === param2 ? 'checked' : '';
}

/**
 * Returns boolean to determine whether or not two values are equal (===)
 *
 * Example usage:
 *      {{eq value 3}}
 *
 * @param value1
 * @param value2
 */
function eq(value1, value2) {
    return value1 === value2;
}

/**
 * Returns boolean to determine whether or not two values are equal (==) i.e weak checking
 *
 * Example usage:
 *      {{eqw '3' 3}}   => true
 *
 * @param value1
 * @param value2
 */
function eqw(value1, value2) {
    return value1 == value2;
}

exports.eq = eq;
exports.eqw = eqw;
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.excerpt = excerpt;
exports.dashCase = dashCase;
exports.checkedIf = checkedIf;
exports.selectedIf = selectedIf;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ1k7Ozs7Ozs7O0lBR047Ozs7Ozs7MENBQ3VCOzs7QUFHckIsZ0JBQUksV0FOSixZQU1JLENBQVksT0FBTyxVQUFQLENBQWhCLEVBQW9DO0FBQ2hDLHNCQUFNLElBQUksS0FBSixDQUFVLHVCQUFWLENBQU4sQ0FEZ0M7YUFBcEM7O0FBSUEsaUJBQUssSUFBSSxJQUFKLElBQVksT0FBakIsRUFBMEI7QUFDdEIsdUJBQU8sVUFBUCxDQUFrQixjQUFsQixDQUFpQyxJQUFqQyxFQUF1QyxRQUFRLElBQVIsQ0FBdkMsRUFEc0I7YUFBMUI7Ozs7V0FSRjs7O0FBY04sSUFBSSxXQWhCaUIsU0FnQmpCLENBQVMsTUFBVCxDQUFKLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBUCxHQUFXLENBQVgsQ0FEa0I7Q0FBdEI7O2tCQUllOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JmLFNBQVMsT0FBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQztBQUM5QixhQUFTLFVBQVUsRUFBVixDQURxQjs7QUFHOUIsUUFBSSxPQUFRLE1BQVIsS0FBb0IsUUFBcEIsRUFBOEI7QUFDOUIsZUFBTyxNQUFQLENBRDhCO0tBQWxDOztBQUlBLFFBQUksT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEVBQXdCO0FBQ3hCLGVBQU8sTUFBUCxDQUR3QjtLQUE1Qjs7QUFJQSxXQUFPLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsSUFBMEIsS0FBMUIsQ0FYdUI7Q0FBbEM7Ozs7Ozs7Ozs7O0FBdUJBLFNBQVMsUUFBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN0QixRQUFJLFNBQVMsTUFBTSxPQUFOLENBQWMsV0FBZCxFQUEyQixFQUEzQixFQUErQixJQUEvQixFQUFULENBRGtCOztBQUd0QixXQUFPLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsR0FBdEIsRUFBMkIsV0FBM0IsRUFBUCxDQUhzQjtDQUExQjs7Ozs7Ozs7OztBQWNBLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUMzQixRQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFqQixFQUEyQjtBQUMzQixlQUFPLE1BQU0sV0FBTixHQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxVQUFVLEtBQVYsRUFBaUI7QUFDMUQsbUJBQU8sTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQWhDLENBRG1EO1NBQWpCLENBQTdDLENBRDJCO0tBQS9COztBQU1BLFdBQU8sRUFBUCxDQVAyQjtDQUEvQjs7Ozs7Ozs7OztBQWtCQSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDNUIsUUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsRUFBMkI7QUFDM0IsZUFBTyxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBaEMsQ0FEb0I7S0FBL0I7O0FBSUEsV0FBTyxFQUFQLENBTDRCO0NBQWhDOzs7Ozs7Ozs7O0FBZ0JBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsRUFBVixHQUFlLFFBQWYsQ0FEYTtDQUF4Qjs7Ozs7Ozs7OztBQVlBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsUUFBVixHQUFxQixFQUFyQixDQURhO0NBQXhCOzs7Ozs7Ozs7OztBQWFBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUNoQyxXQUFPLE1BQUMsS0FBVyxNQUFYLEdBQXFCLFVBQXRCLEdBQW1DLEVBQW5DLENBRHlCO0NBQXBDOzs7Ozs7Ozs7OztBQWFBLFNBQVMsU0FBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUNoQyxXQUFPLE1BQUMsS0FBVyxNQUFYLEdBQXFCLFNBQXRCLEdBQWtDLEVBQWxDLENBRHlCO0NBQXBDOzs7Ozs7Ozs7OztBQWFBLFNBQVMsRUFBVCxDQUFZLE1BQVosRUFBb0IsTUFBcEIsRUFBNEI7QUFDeEIsV0FBUSxXQUFXLE1BQVgsQ0FEZ0I7Q0FBNUI7Ozs7Ozs7Ozs7O0FBYUEsU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QjtBQUN6QixXQUFRLFVBQVUsTUFBVixDQURpQjtDQUE3Qjs7UUFLSTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7QUM3SkosU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCO0FBQ3ZCLFdBQVEsT0FBTyxLQUFQLEtBQWlCLFVBQWpCLENBRGU7Q0FBM0I7O0FBSUEsU0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQ3hCLFdBQVEsT0FBTyxLQUFQLEtBQWlCLFdBQWpCLENBRGdCO0NBQTVCOztBQUlBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixXQUFRLFFBQU8scURBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7UUFJUTtRQUFZO1FBQWEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge2lzVW5kZWZpbmVkLCBpc09iamVjdH0gZnJvbSAnLi91dGlsL3V0aWxzLmpzJztcblxuY2xhc3MgSCB7XG4gICAgc3RhdGljIHJlZ2lzdGVySGVscGVycygpIHtcblxuICAgICAgICAvLyBUT0RPOiBNYWtlIGl0IGNvbXBhdGlibGUgd2l0aCBub2RlIGVudmlyb25tZW50IHRvb1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQod2luZG93LkhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBoZWxwZXJzKSB7XG4gICAgICAgICAgICB3aW5kb3cuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBoZWxwZXJzW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaWYgKGlzT2JqZWN0KHdpbmRvdykpIHtcbiAgICB3aW5kb3cuSCA9IEg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEg7XG4iLCIvKipcbiAqIEFuIGV4Y2VycHQgaGVscGVyIHRvIGV4dHJhY3QgYSBmZXcgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLiBEZWZhdWx0IG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIDUwLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXhjZXJwdCAnSnVzdCBXb3cnIDR9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gZXhjZXJwdCAoc3RyaW5nLCBsZW5ndGgpIHtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgNTA7XG5cbiAgICBpZiAodHlwZW9mIChzdHJpbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBsZW5ndGgpICsgJy4uLic7XG59O1xuXG4vKipcbiAqIEEgZGFzaENhc2UgaGVscGVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gZGFzaC1jYXNlLiBUaGlzIGhlbHBlciB3aWxsIGFsc28gcmVtb3ZlXG4gKiBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1ha2UgdGhlIHN0cmluZyBsb3dlcmNhc2UuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tkYXNoQ2FzZSAnSnVTdCAjV293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBkYXNoQ2FzZSAocGFyYW0pIHtcbiAgICB2YXIgc3RyaW5nID0gcGFyYW0ucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudHJpbSgpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMrLywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEEgY2FwaXRhbGl6ZUVhY2ggaGVscGVyIHRvIGNhcGl0YWxpemUgZWFjaCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tjYXBpdGFsaXplRWFjaCAnanVzdCB3b3cnfX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nIHBhcmFtXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoKHBhcmFtKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEEgY2FwaXRhbGl6ZUZpcnN0IGhlbHBlciB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tjYXBpdGFsaXplRmlyc3QgJ3dvdyd9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmcgcGFyYW1cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHBhcmFtKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFyYW0uc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgZWxlbWVudCBpZiB0aGUgcGFzc2VkIHBhcmFtZXRlciBob2xkcyB0cnVlXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tzaG93SWYgaXRTaG91bGRCZVZpc2libGV9fVxuICpcbiAqIEBwYXJhbSBwYXJhbSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKi9cbmZ1bmN0aW9uIHNob3dJZiAocGFyYW0pIHtcbiAgICByZXR1cm4gISFwYXJhbSA/ICcnIDogJ2hpZGRlbic7XG59XG5cbi8qKlxuICogQSBoaWRlSWYgaGVscGVyIGZvciBkcm9wZG93bnMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3toaWRlSWYgZGlyZWN0TGVhc2V9fVxuICpcbiAqIEBwYXJhbSBwYXJhbSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKi9cbmZ1bmN0aW9uIGhpZGVJZiAocGFyYW0pIHtcbiAgICByZXR1cm4gISFwYXJhbSA/ICdoaWRkZW4nIDogJyc7XG59XG5cbi8qKlxuICogQSBzZWxlY3RlZElmIGhlbHBlciBmb3IgZHJvcGRvd25zIGFuZCByYWRpbyBib3hlcy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e3NlbGVjdGVkSWYgcGFyYW0xIHBhcmFtMn19XG4gKlxuICogQHBhcmFtIHBhcmFtMVxuICogQHBhcmFtIHBhcmFtMlxuICovXG5mdW5jdGlvbiBzZWxlY3RlZElmKHBhcmFtMSwgcGFyYW0yKSB7XG4gICAgcmV0dXJuIChwYXJhbTEgPT09IHBhcmFtMikgPyAnc2VsZWN0ZWQnIDogJyc7XG59XG5cbi8qKlxuICogQSBjaGVja2VkSWYgaGVscGVyIGZvciBjaGVja2JveGVzLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2hlY2tlZElmIHBhcmFtMSBwYXJhbTJ9fVxuICpcbiAqIEBwYXJhbSBwYXJhbTFcbiAqIEBwYXJhbSBwYXJhbTJcbiAqL1xuZnVuY3Rpb24gY2hlY2tlZElmIChwYXJhbTEsIHBhcmFtMikge1xuICAgIHJldHVybiAocGFyYW0xID09PSBwYXJhbTIpID8gJ2NoZWNrZWQnIDogJyc7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KVxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXEgdmFsdWUgM319XG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAodmFsdWUxID09PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZ1xuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXF3ICczJyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBlcXcodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA9PSB2YWx1ZTIpO1xufVxuXG5leHBvcnQge1xuICAgIGVxLFxuICAgIGVxdyxcbiAgICBzaG93SWYsXG4gICAgaGlkZUlmLFxuICAgIGV4Y2VycHQsXG4gICAgZGFzaENhc2UsXG4gICAgY2hlY2tlZElmLFxuICAgIHNlbGVjdGVkSWYsXG4gICAgY2FwaXRhbGl6ZUVhY2gsXG4gICAgY2FwaXRhbGl6ZUZpcnN0XG59O1xuIiwiXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnKTtcbn1cblxuZXhwb3J0IHtpc0Z1bmN0aW9uLCBpc1VuZGVmaW5lZCwgaXNPYmplY3R9O1xuIl19
