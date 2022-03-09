"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const index_1 = require("./index");
describe("Template functionality tests", () => {
    test("Success response", async () => {
        const message = "Hello World!";
        const inputBody = { message };
        const input = {
            headers: {},
            body: inputBody,
            context: {
                "flow_execution_id": "Root=9-999999-9999999",
                "oauth": {}
            }
        };
        const output = await index_1.handler(JSON.stringify(input));
        expect(output.statusCode).toBe(constants_1.StatusCodes.OK);
        expect(output.body).toBe(JSON.stringify(inputBody));
    });
    test("Failure response", async () => {
        const message = "Hello World!";
        const inputBody = { message };
        const input = {
            headers: {},
            body: inputBody,
            context: {
                "oauth": {}
            }
        };
        const output = await index_1.handler(JSON.stringify(input));
        expect(output.statusCode).toBe(constants_1.StatusCodes.BAD_REQUEST);
    });
});
