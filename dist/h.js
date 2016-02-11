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
            var handlebars;

            if ((0, _utils.isDefined)(window.Handlebars)) {
                handlebars = window.Handlebars;
            } else {
                throw new Error('Handlebars not loaded');
            }

            for (var name in helpers) {
                handlebars.registerHelper(name, helpers[name]);
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
 *      {{selectedIf booleanValue}}
 *      {{selectedIf eq(value 3)}}
 *
 * @param value
 */
function selectedIf(value) {
    return !!value ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 *
 * Example usage:
 *      {{checkedIf booleanValue}}
 *      {{checkedIf eq(value 3)}}
 *
 * @param value
 */
function checkedIf(value) {
    return !!value ? 'checked' : '';
}

/**
 * Returns boolean to determine whether or not two values are equal (===)
 * TODO: Move this to separate file conditionals.js or something like that
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
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{eqw '3' 3}}   => true
 *
 * @param value1
 * @param value2
 */
function eqw(value1, value2) {
    return value1 == value2;
}

/**
 * Returns boolean to check for Less Than condition (a < b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{lt 2 3}}   => true
 *
 * @param value1
 * @param value2
 */
function lt(value1, value2) {
    return value1 < value2;
}

/**
 * Returns boolean to check for Less Than Or Equals condition (a <= b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{lte 2 3}}   => true
 *
 * @param value1
 * @param value2
 */
function lte(value1, value2) {
    return value1 <= value2;
}

/**
 * Returns boolean to check for Greater Than condition (a > b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{gt 2 3}}   => false
 *
 * @param value1
 * @param value2
 */
function gt(value1, value2) {
    return value1 > value2;
}

/**
 * Returns boolean to check for Greater Than Or Equals condition (a >= b)
 * TODO: Move this to separate file conditionals.js or something like that

 * Example usage:
 *      {{gte 3 3}}   => true
 *
 * @param value1
 * @param value2
 */
function gte(value1, value2) {
    return value1 >= value2;
}

exports.eq = eq;
exports.eqw = eqw;
exports.lt = lt;
exports.lte = lte;
exports.gt = gt;
exports.gte = gte;
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

function isDefined(thing) {
    return !isUndefined(thing);
}

function isObject(thing) {
    return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isObject = isObject;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSC5qcyIsInNyYy9oZWxwZXJzLmpzIiwic3JjL3V0aWwvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ1k7Ozs7Ozs7O0lBR047Ozs7Ozs7MENBQ3VCO0FBQ3JCLGdCQUFJLFVBQUosQ0FEcUI7O0FBR3JCLGdCQUFJLFdBTkosVUFNSSxDQUFVLE9BQU8sVUFBUCxDQUFkLEVBQWtDO0FBQzlCLDZCQUFhLE9BQU8sVUFBUCxDQURpQjthQUFsQyxNQUVPO0FBQ0gsc0JBQU0sSUFBSSxLQUFKLENBQVUsdUJBQVYsQ0FBTixDQURHO2FBRlA7O0FBTUEsaUJBQUssSUFBSSxJQUFKLElBQVksT0FBakIsRUFBMEI7QUFDdEIsMkJBQVcsY0FBWCxDQUEwQixJQUExQixFQUFnQyxRQUFRLElBQVIsQ0FBaEMsRUFEc0I7YUFBMUI7Ozs7V0FWRjs7O0FBZ0JOLElBQUksV0FsQmUsU0FrQmYsQ0FBUyxNQUFULENBQUosRUFBc0I7QUFDbEIsV0FBTyxDQUFQLEdBQVcsQ0FBWCxDQURrQjtDQUF0Qjs7a0JBSWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmYsU0FBUyxPQUFULENBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLEVBQWtDO0FBQzlCLGFBQVMsVUFBVSxFQUFWLENBRHFCOztBQUc5QixRQUFJLE9BQVEsTUFBUixLQUFvQixRQUFwQixFQUE4QjtBQUM5QixlQUFPLE1BQVAsQ0FEOEI7S0FBbEM7O0FBSUEsUUFBSSxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsRUFBd0I7QUFDeEIsZUFBTyxNQUFQLENBRHdCO0tBQTVCOztBQUlBLFdBQU8sT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixNQUFoQixJQUEwQixLQUExQixDQVh1QjtDQUFsQzs7Ozs7Ozs7Ozs7QUF1QkEsU0FBUyxRQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFFBQUksU0FBUyxNQUFNLE9BQU4s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Q3RCLFdBQU8sQ0FBQyxZQUFZLEtBQVosQ0FBRCxDQURlO0NBQTFCOztBQUlBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixXQUFRLFFBQU8scURBQVAsS0FBaUIsUUFBakIsQ0FEYTtDQUF6Qjs7UUFJUTtRQUFZO1FBQWE7UUFBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7aXNEZWZpbmVkLCBpc09iamVjdH0gZnJvbSAnLi91dGlsL3V0aWxzLmpzJztcblxuY2xhc3MgSCB7XG4gICAgc3RhdGljIHJlZ2lzdGVySGVscGVycygpIHtcbiAgICAgICAgdmFyIGhhbmRsZWJhcnM7XG5cbiAgICAgICAgaWYgKGlzRGVmaW5lZCh3aW5kb3cuSGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgIGhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGFuZGxlYmFycyBub3QgbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGhlbHBlcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlmIChpc09iamVjdCh3aW5kb3cpKSB7XG4gICAgd2luZG93LkggPSBIO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIO1xuIiwiLyoqXG4gKiBBbiBleGNlcnB0IGhlbHBlciB0byBleHRyYWN0IGEgZmV3IGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy4gRGVmYXVsdCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyA1MC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQgKHN0cmluZywgbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDUwO1xuXG4gICAgaWYgKHR5cGVvZiAoc3RyaW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKSArICcuLi4nO1xufTtcblxuLyoqXG4gKiBBIGRhc2hDYXNlIGhlbHBlciB0byBjb252ZXJ0IGEgc3RyaW5nIHRvIGRhc2gtY2FzZS4gVGhpcyBoZWxwZXIgd2lsbCBhbHNvIHJlbW92ZVxuICogc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtYWtlIHRoZSBzdHJpbmcgbG93ZXJjYXNlLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZGFzaENhc2UgJ0p1U3QgI1dvdyd9fVxuICpcbiAqIEBwYXJhbSBzdHJpbmcgcGFyYW1cbiAqL1xuZnVuY3Rpb24gZGFzaENhc2UgKHBhcmFtKSB7XG4gICAgdmFyIHN0cmluZyA9IHBhcmFtLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRyaW0oKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy8sICctJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBBIGNhcGl0YWxpemVFYWNoIGhlbHBlciB0byBjYXBpdGFsaXplIGVhY2ggbGV0dGVyIG9mIGEgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUVhY2ggJ2p1c3Qgd293J319XG4gKlxuICogQHBhcmFtIHN0cmluZyBwYXJhbVxuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplRWFjaChwYXJhbSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBBIGNhcGl0YWxpemVGaXJzdCBoZWxwZXIgdG8gY2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICd3b3cnfX1cbiAqXG4gKiBAcGFyYW0gc3RyaW5nIHBhcmFtXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdChwYXJhbSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcmFtLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBBIHNob3dJZiBoZWxwZXIgZm9yIHNob3dpbmcgYW55IGVsZW1lbnQgaWYgdGhlIHBhc3NlZCBwYXJhbWV0ZXIgaG9sZHMgdHJ1ZVxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7c2hvd0lmIGl0U2hvdWxkQmVWaXNpYmxlfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0gdmFsdWUgdG8gYmUgY2hlY2tlZFxuICovXG5mdW5jdGlvbiBzaG93SWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuICEhcGFyYW0gPyAnJyA6ICdoaWRkZW4nO1xufVxuXG4vKipcbiAqIEEgaGlkZUlmIGhlbHBlciBmb3IgZHJvcGRvd25zLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7aGlkZUlmIGRpcmVjdExlYXNlfX1cbiAqXG4gKiBAcGFyYW0gcGFyYW0gdmFsdWUgdG8gYmUgY2hlY2tlZFxuICovXG5mdW5jdGlvbiBoaWRlSWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuICEhcGFyYW0gPyAnaGlkZGVuJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgc2VsZWN0ZWRJZiBoZWxwZXIgZm9yIGRyb3Bkb3ducyBhbmQgcmFkaW8gYm94ZXMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tzZWxlY3RlZElmIGJvb2xlYW5WYWx1ZX19XG4gKiAgICAgIHt7c2VsZWN0ZWRJZiBlcSh2YWx1ZSAzKX19XG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdGVkSWYodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZSA/ICdzZWxlY3RlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBIGNoZWNrZWRJZiBoZWxwZXIgZm9yIGNoZWNrYm94ZXMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tjaGVja2VkSWYgYm9vbGVhblZhbHVlfX1cbiAqICAgICAge3tjaGVja2VkSWYgZXEodmFsdWUgMyl9fVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBjaGVja2VkSWYgKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgPyAnY2hlY2tlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PT0pXG4gKiBUT0RPOiBNb3ZlIHRoaXMgdG8gc2VwYXJhdGUgZmlsZSBjb25kaXRpb25hbHMuanMgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7ZXEgdmFsdWUgM319XG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAodmFsdWUxID09PSB2YWx1ZTIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgZXF1YWwgKD09KSBpLmUgd2VhayBjaGVja2luZ1xuICogVE9ETzogTW92ZSB0aGlzIHRvIHNlcGFyYXRlIGZpbGUgY29uZGl0aW9uYWxzLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcblxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tlcXcgJzMnIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKi9cbmZ1bmN0aW9uIGVxdyh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAodmFsdWUxID09IHZhbHVlMik7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGNoZWNrIGZvciBMZXNzIFRoYW4gY29uZGl0aW9uIChhIDwgYilcbiAqIFRPRE86IE1vdmUgdGhpcyB0byBzZXBhcmF0ZSBmaWxlIGNvbmRpdGlvbmFscy5qcyBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBsdCh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAodmFsdWUxIDwgdmFsdWUyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJvb2xlYW4gdG8gY2hlY2sgZm9yIExlc3MgVGhhbiBPciBFcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpXG4gKiBUT0RPOiBNb3ZlIHRoaXMgdG8gc2VwYXJhdGUgZmlsZSBjb25kaXRpb25hbHMuanMgb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogICAgICB7e2x0ZSAyIDN9fSAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKi9cbmZ1bmN0aW9uIGx0ZSh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiAodmFsdWUxIDw9IHZhbHVlMik7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGNoZWNrIGZvciBHcmVhdGVyIFRoYW4gY29uZGl0aW9uIChhID4gYilcbiAqIFRPRE86IE1vdmUgdGhpcyB0byBzZXBhcmF0ZSBmaWxlIGNvbmRpdGlvbmFscy5qcyBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiAgICAgIHt7Z3QgMiAzfX0gICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqL1xuZnVuY3Rpb24gZ3QodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA+IHZhbHVlMik7XG59XG5cbi8qKlxuICogUmV0dXJucyBib29sZWFuIHRvIGNoZWNrIGZvciBHcmVhdGVyIFRoYW4gT3IgRXF1YWxzIGNvbmRpdGlvbiAoYSA+PSBiKVxuICogVE9ETzogTW92ZSB0aGlzIHRvIHNlcGFyYXRlIGZpbGUgY29uZGl0aW9uYWxzLmpzIG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcblxuICogRXhhbXBsZSB1c2FnZTpcbiAqICAgICAge3tndGUgMyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICovXG5mdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gKHZhbHVlMSA+PSB2YWx1ZTIpO1xufVxuXG5leHBvcnQge1xuICAgIGVxLFxuICAgIGVxdyxcbiAgICBsdCxcbiAgICBsdGUsXG4gICAgZ3QsXG4gICAgZ3RlLFxuICAgIHNob3dJZixcbiAgICBoaWRlSWYsXG4gICAgZXhjZXJwdCxcbiAgICBkYXNoQ2FzZSxcbiAgICBjaGVja2VkSWYsXG4gICAgc2VsZWN0ZWRJZixcbiAgICBjYXBpdGFsaXplRWFjaCxcbiAgICBjYXBpdGFsaXplRmlyc3Rcbn07XG4iLCJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHRoaW5nKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGluZyk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnKTtcbn1cblxuZXhwb3J0IHtpc0Z1bmN0aW9uLCBpc1VuZGVmaW5lZCwgaXNEZWZpbmVkLCBpc09iamVjdH07XG4iXX0=
