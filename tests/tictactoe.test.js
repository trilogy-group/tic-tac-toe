"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tictactoe_1 = require("../src/tictactoe");
const globals_1 = require("@jest/globals");
const jest_each_1 = __importDefault(require("jest-each"));
globals_1.describe("validNumber", () => {
    jest_each_1.default(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
        .test("numbers", (input) => {
        globals_1.expect(tictactoe_1.validNumber(input)).toBe(true);
    });
    jest_each_1.default(["a", " ", ""])
        .test("other", (input) => {
        globals_1.expect(tictactoe_1.validNumber(input)).toBe(false);
    });
});
globals_1.describe("getlineone", () => {
    jest_each_1.default([[["1", "2", "3", "4", "5", "6", "7", "8", "9"]], [["X", "2", "O", "4", "5", "X", "7", "O", "9"]], [["1", "X", "X", "O", "5", "X", "O", "8", "9"]], [["X", "X", "X", "O", "O", "6", "7", "8", "9"]]])
        .test("line1", (input) => {
        globals_1.expect(tictactoe_1.getlineone(input)).toBe(input[0] + "|" + input[1] + "|" + input[2]);
    });
});
globals_1.describe("getlinetwo", () => {
    jest_each_1.default([[["1", "2", "3", "4", "5", "6", "7", "8", "9"]], [["X", "2", "O", "4", "5", "X", "7", "O", "9"]], [["1", "X", "X", "O", "5", "X", "O", "8", "9"]], [["X", "X", "X", "O", "O", "6", "7", "8", "9"]]])
        .test("line2", (input) => {
        globals_1.expect(tictactoe_1.getlinetwo(input)).toBe(input[3] + "|" + input[4] + "|" + input[5]);
    });
});
globals_1.describe("getlinethree", () => {
    jest_each_1.default([[["1", "2", "3", "4", "5", "6", "7", "8", "9"]], [["X", "2", "O", "4", "5", "X", "7", "O", "9"]], [["1", "X", "X", "O", "5", "X", "O", "8", "9"]], [["X", "X", "X", "O", "O", "6", "7", "8", "9"]]])
        .test("line3", (input) => {
        globals_1.expect(tictactoe_1.getlinethree(input)).toBe(input[6] + "|" + input[7] + "|" + input[8]);
    });
});
globals_1.describe("checkStatus", () => {
    jest_each_1.default([[["1", "2", "3", "4", "5", "6", "7", "8", "9"]], [["1", "2", "3", "X", "X", "6", "7", "8", "O"]], [["X", "X", "O", "O", "O", "X", "X", "X", "O"]], [["X", "X", "3", "4", "O", "6", "7", "8", "9"]]])
        .test("draw or incomplete", (input) => {
        globals_1.expect(tictactoe_1.checkStatus(input)).toBe(0);
    });
    jest_each_1.default([[["X", "2", "O", "O", "O", "6", "X", "X", "X"]], [["X", "2", "O", "X", "O", "6", "X", "O", "X"]], [["X", "X", "X", "O", "O", "6", "7", "8", "9"]], [["X", "O", "O", "4", "X", "6", "7", "8", "X"]]])
        .test("Player 1 win", (input) => {
        globals_1.expect(tictactoe_1.checkStatus(input)).toBe(1);
    });
    jest_each_1.default([[["X", "2", "X", "O", "O", "O", "7", "X", "9"]], [["X", "2", "3", "O", "O", "O", "X", "X", "9"]], [["X", "X", "O", "4", "O", "X", "O", "8", "9"]], [["O", "X", "X", "4", "O", "X", "7", "8", "O"]]])
        .test("Player 2 win", (input) => {
        globals_1.expect(tictactoe_1.checkStatus(input)).toBe(2);
    });
});
