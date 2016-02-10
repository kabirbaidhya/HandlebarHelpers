
function isFunction(thing) {
    return (typeof thing === 'function');
}

function isUndefined(thing) {
    return (typeof thing === 'undefined');
}

function isObject(thing) {
    return (typeof thing === 'object');
}

export {isFunction, isUndefined, isObject};
