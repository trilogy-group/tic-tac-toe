"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
/**
 * Sample action "sleep"
 * - to demonstrate an async-await delay
 * - remove if not needed
 *
 * Returns the input after a delay as specified by the property "delayTime" in the input
 */
const delay_1 = __importDefault(require("./delay"));
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const handler = async (input) => {
    try {
        // Add business logic here
        const inputAsJson = JSON.parse(input);
        const { body } = inputAsJson;
        const { context } = inputAsJson;
        if (!(context === null || context === void 0 ? void 0 : context.flow_execution_id)) {
            return utils_1.generateOutput(constants_1.StatusCodes.BAD_REQUEST, {
                errorMessage: "Flow Execution ID (flow_execution_id) not specified in context",
                errorType: "Bad Request"
            });
        }
        const { delayTime } = body;
        await delay_1.default(delayTime);
        const output = {
            message: `Returning this message after a delay of ${delayTime}`,
        };
        return utils_1.generateOutput(constants_1.StatusCodes.OK, output);
    }
    catch (e) {
        console.error(e.stackTrace);
        return utils_1.generateOutput(e.statusCode || constants_1.StatusCodes.INTERNAL_SERVER_ERROR, {
            errorMessage: e.message,
            // Provide any custom classification of error types if required
            errorType: "",
            errorTrace: e.stack,
        });
    }
};
exports.handler = handler;
