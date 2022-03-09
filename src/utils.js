"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOutput = exports.OutputError = void 0;
class OutputError extends Error {
    constructor(code, message = "") {
        super(message);
        this.statusCode = code;
        this.message = message;
    }
}
exports.OutputError = OutputError;
const generateOutput = (statusCode, bodyAsJsonType) => {
    return {
        statusCode,
        body: JSON.stringify(bodyAsJsonType),
    };
};
exports.generateOutput = generateOutput;
