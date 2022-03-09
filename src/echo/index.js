"use strict";
/**
 * Sample action "echo" - remove/reuse if not required
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
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
        return utils_1.generateOutput(constants_1.StatusCodes.OK, body);
    }
    catch (e) {
        console.error(e);
        return utils_1.generateOutput(e.statusCode || constants_1.StatusCodes.INTERNAL_SERVER_ERROR, {
            errorMessage: e.message,
            // Provide any custom classification of error types if required
            errorType: "",
            errorTrace: e.stack,
        });
    }
};
exports.handler = handler;
