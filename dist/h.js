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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ1k7Ozs7Ozs7O0lBR047Ozs7Ozs7MENBQ3VCOztBQUVyQixnQkFBSSxXQUxKLFlBS0ksQ0FBWSxPQUFPLFVBQVAsQ0FBaEIsRUFBb0M7QUFDaEMsc0JBQU0sSUFBSSxLQUFKLENBQVUsdUJBQVYsQ0FBTixDQURnQzthQUFwQzs7QUFJQSxpQkFBSSxJQUFJLElBQUosSUFBWSxPQUFoQixFQUF5QjtBQUNyQix1QkFBTyxVQUFQLENBQWtCLGNBQWxCLENBQWlDLElBQWpDLEVBQXVDLFFBQVEsSUFBUixDQUF2QyxFQURxQjthQUF6Qjs7OztXQVBGOzs7QUFhTixJQUFJLFdBZmlCLFNBZWpCLENBQVMsTUFBVCxDQUFKLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBUCxHQUFXLENBQVgsQ0FEa0I7Q0FBdEI7O2tCQUllOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmLFNBQVMsT0FBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQztBQUM5QixhQUFTLFVBQVUsRUFBVixDQURxQjs7QUFHOUIsUUFBSSxPQUFRLE1BQVIsS0FBb0IsUUFBcEIsRUFBOEI7QUFDOUIsZUFBTyxNQUFQLENBRDhCO0tBQWxDOztBQUlBLFFBQUksT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEVBQXdCO0FBQ3hCLGVBQU8sTUFBUCxDQUR3QjtLQUE1Qjs7QUFJQSxXQUFPLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsTUFBaEIsSUFBMEIsS0FBMUIsQ0FYdUI7Q0FBbEM7Ozs7Ozs7Ozs7O0FBdUJBLFNBQVMsUUFBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN0QixRQUFJLFNBQVMsTUFBTSxPQUFOLENBQWMsV0FBZCxFQUEyQixFQUEzQixFQUErQixJQUEvQixFQUFULENBRGtCOztBQUd0QixXQUFPLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsR0FBdEIsRUFBMkIsV0FBM0IsRUFBUCxDQUhzQjtDQUExQjs7Ozs7Ozs7OztBQWNBLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUMzQixRQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFqQixFQUEyQjtBQUMzQixlQUFPLE1BQU0sV0FBTixHQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxVQUFVLEtBQVYsRUFBaUI7QUFDMUQsbUJBQU8sTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQWhDLENBRG1EO1NBQWpCLENBQTdDLENBRDJCO0tBQS9COztBQU1BLFdBQU8sRUFBUCxDQVAyQjtDQUEvQjs7Ozs7Ozs7OztBQWtCQSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDNUIsUUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsRUFBMkI7QUFDM0IsZUFBTyxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBaEMsQ0FEb0I7S0FBL0I7O0FBSUEsV0FBTyxFQUFQLENBTDRCO0NBQWhDOzs7Ozs7Ozs7O0FBZ0JBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsRUFBVixHQUFlLFFBQWYsQ0FEYTtDQUF4Qjs7Ozs7Ozs7OztBQVlBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUF3QjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFELEdBQVMsUUFBVixHQUFxQixFQUFyQixDQURhO0NBQXhCOzs7Ozs7Ozs7OztBQWFBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUNoQyxXQUFPLE1BQUMsS0FBVyxNQUFYLEdBQXFCLFVBQXRCLEdBQW1DLEVBQW5DLENBRHlCO0NBQXBDOztRQU1JO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7OztBQ3BISixTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDdkIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsVUFBakIsQ0FEZTtDQUEzQjs7QUFJQSxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDeEIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsV0FBakIsQ0FEZ0I7Q0FBNUI7O0FBSUEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQVEsUUFBTyxxREFBUCxLQUFpQixRQUFqQixDQURhO0NBQXpCOztRQUlRO1FBQVk7UUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7aXNVbmRlZmluZWQsIGlzT2JqZWN0fSBmcm9tICcuL3V0aWwvdXRpbHMuanMnO1xuXG5jbGFzcyBIIHtcbiAgICBzdGF0aWMgcmVnaXN0ZXJIZWxwZXJzKCkge1xuICAgICAgICAvLyBUT0RPOiBNYWtlIGl0IGNvbXBhdGlibGUgd2l0aCBub2RlIGVudmlyb25tZW50IHRvb1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQod2luZG93LkhhbmRsZWJhcnMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZWJhcnMgbm90IGxvYWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBuYW1lIGluIGhlbHBlcnMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGhlbHBlcnNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pZiAoaXNPYmplY3Qod2luZG93KSkge1xuICAgIHdpbmRvdy5IID0gSDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSDtcbiIsIi8qKlxuICogQW4gZXhjZXJwdCBoZWxwZXIgdG8gZXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tleGNlcnB0ICdKdXN0IFdvdycgNH19XG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHBhcmFtIGxlbmd0aFxuICovXG5mdW5jdGlvbiBleGNlcnB0IChzdHJpbmcsIGxlbmd0aCkge1xuICAgIGxlbmd0aCA9IGxlbmd0aCB8fCA1MDtcblxuICAgIGlmICh0eXBlb2YgKHN0cmluZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn07XG5cbi8qKlxuICogQSBkYXNoQ2FzZSBoZWxwZXIgdG8gY29udmVydCBhIHN0cmluZyB0byBkYXNoLWNhc2UuIFRoaXMgaGVscGVyIHdpbGwgYWxzbyByZW1vdmVcbiAqIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWFrZSB0aGUgc3RyaW5nIGxvd2VyY2FzZS5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2Rhc2hDYXNlICdKdVN0ICNXb3cnfX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nIHBhcmFtXG4gKi9cbmZ1bmN0aW9uIGRhc2hDYXNlIChwYXJhbSkge1xuICAgIHZhciBzdHJpbmcgPSBwYXJhbS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQSBjYXBpdGFsaXplRWFjaCBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBlYWNoIGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmcgcGFyYW1cbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2gocGFyYW0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyYW0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQSBjYXBpdGFsaXplRmlyc3QgaGVscGVyIHRvIGNhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2NhcGl0YWxpemVGaXJzdCAnd293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3QocGFyYW0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwYXJhbS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQSBzaG93SWYgaGVscGVyIGZvciBzaG93aW5nIGFueSBlbGVtZW50IGlmIHRoZSBwYXNzZWQgcGFyYW1ldGVyIGhvbGRzIHRydWVcbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e3Nob3dJZiBpdFNob3VsZEJlVmlzaWJsZX19XG4gKlxuICogQHBhcmFtIHBhcmFtIHZhbHVlIHRvIGJlIGNoZWNrZWRcbiAqL1xuZnVuY3Rpb24gc2hvd0lmIChwYXJhbSkge1xuICAgIHJldHVybiAhIXBhcmFtID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGRyb3Bkb3ducy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2hpZGVJZiBkaXJlY3RMZWFzZX19XG4gKlxuICogQHBhcmFtIHBhcmFtIHZhbHVlIHRvIGJlIGNoZWNrZWRcbiAqL1xuZnVuY3Rpb24gaGlkZUlmIChwYXJhbSkge1xuICAgIHJldHVybiAhIXBhcmFtID8gJ2hpZGRlbicgOiAnJztcbn1cblxuLyoqXG4gKiBBIHNlbGVjdGVkSWYgaGVscGVyIGZvciBkcm9wZG93bnMgYW5kIHJhZGlvIGJveGVzLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2VsZWN0ZWRJZiBwYXJhbTEgcGFyYW0yfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0xXG4gKiBAcGFyYW0gcGFyYW0yXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGVkSWYocGFyYW0xLCBwYXJhbTIpIHtcbiAgICByZXR1cm4gKHBhcmFtMSA9PT0gcGFyYW0yKSA/ICdzZWxlY3RlZCcgOiAnJztcbn1cblxuXG5leHBvcnQge1xuICAgIGV4Y2VycHQsXG4gICAgZGFzaENhc2UsXG4gICAgY2FwaXRhbGl6ZUVhY2gsXG4gICAgY2FwaXRhbGl6ZUZpcnN0LFxuICAgIHNob3dJZixcbiAgICBoaWRlSWYsXG4gICAgc2VsZWN0ZWRJZlxufTtcbiIsIlxuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICAgIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jyk7XG59XG5cbmV4cG9ydCB7aXNGdW5jdGlvbiwgaXNVbmRlZmluZWQsIGlzT2JqZWN0fTtcbiJdfQ==
