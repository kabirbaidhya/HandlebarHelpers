/**
 * An excerpt helper to extract a few characters from a string. Default number of characters is 50.
 *
 * Example usage:
 *      {{excerpt 'Just Wow' 4}}
 *
 * @param string
 * @param length
 */
function excerpt (string, length) {
    length = length || 50;

    if (typeof (string) !== 'string') {
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
function dashCase (param) {
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
function showIf (param) {
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
function hideIf (param) {
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
    return (param1 === param2) ? 'selected' : '';
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
function checkedIf (param1, param2) {
    return (param1 === param2) ? 'checked' : '';
}

export {
    showIf,
    hideIf,
    excerpt,
    dashCase,
    checkedIf,
    selectedIf,
    capitalizeEach,
    capitalizeFirst
};
