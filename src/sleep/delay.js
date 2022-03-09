"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sample module that is imported into the "sleep" action
 * @param ms - the number of milliseconds to block & delay the thread
 * @return timeout promise function
 */
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.default = delay;
