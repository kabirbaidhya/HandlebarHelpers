
import * as helpers from './helpers.js';
import {isUndefined, isObject} from './util/utils.js';

class H {
    static registerHelpers() {
        
        // TODO: Make it compatible with node environment too
        if (isUndefined(window.Handlebars)) {
            throw new Error('Handlebars not loaded');
        }

        for(var name in helpers) {
            window.Handlebars.registerHelper(name, helpers[name]);
        }
    }
}

if (isObject(window)) {
    window.H = H;
}

export default H;
