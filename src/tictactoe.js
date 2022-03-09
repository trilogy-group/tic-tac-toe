"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = exports.getlinethree = exports.getlinetwo = exports.getlineone = exports.validNumber = exports.num = exports.grid = void 0;
const readline = __importStar(require("readline"));
const process_1 = require("process");
const rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
exports.grid = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let turn = 9;
let status = 0;
exports.num = {
    "1": 0,
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
};
function validNumber(move) {
    if (move == "1" || move == "2" || move == "3" || move == "4" || move == "5" || move == "6" || move == "7" || move == "8" || move == "9") {
        if (exports.grid[exports.num[move]] == "X" || exports.grid[exports.num[move]] == "O")
            return false;
        else
            return true;
    }
    return false;
}
exports.validNumber = validNumber;
function getlineone(grid) {
    return `${grid[0]}|${grid[1]}|${grid[2]}`;
}
exports.getlineone = getlineone;
function getlinetwo(grid) {
    return `${grid[3]}|${grid[4]}|${grid[5]}`;
}
exports.getlinetwo = getlinetwo;
function getlinethree(grid) {
    return `${grid[6]}|${grid[7]}|${grid[8]}`;
}
exports.getlinethree = getlinethree;
function tictactoe(move) {
    if (turn % 2 == 1) {
        exports.grid[exports.num[move]] = "X";
    }
    else {
        exports.grid[exports.num[move]] = "O";
    }
}
let grid1 = getlineone(exports.grid);
let grid2 = getlinetwo(exports.grid);
let grid3 = getlinethree(exports.grid);
let pn = 1;
let ps = "1";
function checkStatus(grid) {
    status = 0;
    if (status == 0 && grid[0] == grid[1] && grid[2] == grid[1]) {
        if (grid[0] == "X")
            status = 1;
        if (grid[0] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[3] == grid[4] && grid[4] == grid[5]) {
        if (grid[3] == "X")
            status = 1;
        if (grid[3] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[6] == grid[7] && grid[7] == grid[8]) {
        if (grid[6] == "X")
            status = 1;
        if (grid[6] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[0] == grid[3] && grid[3] == grid[6]) {
        if (grid[0] == "X")
            status = 1;
        if (grid[0] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[4] == grid[1] && grid[7] == grid[1]) {
        if (grid[1] == "X")
            status = 1;
        if (grid[1] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[5] == grid[8] && grid[2] == grid[5]) {
        if (grid[5] == "X")
            status = 1;
        if (grid[5] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[0] == grid[4] && grid[4] == grid[8]) {
        if (grid[0] == "X")
            status = 1;
        if (grid[0] == "O")
            status = 2;
        turn = 0;
    }
    if (status == 0 && grid[4] == grid[6] && grid[2] == grid[4]) {
        if (grid[4] == "X")
            status = 1;
        if (grid[4] == "O")
            status = 2;
        turn = 0;
    }
    return status;
}
exports.checkStatus = checkStatus;
function runGame() {
    grid1 = getlineone(exports.grid);
    grid2 = getlinetwo(exports.grid);
    grid3 = getlinethree(exports.grid);
    pn = turn % 2;
    if (pn == 0)
        ps = "2";
    else
        ps = "1";
    rl.question(grid1 + "\n" + grid2 + "\n" + grid3 + "\nPlayer " + ps + ",Choose Position to play\n", (answer) => {
        if (validNumber(answer)) {
            tictactoe(answer);
            turn -= 1;
            status = checkStatus(exports.grid);
        }
        else {
            console.log("\nInput is wrong or taken\n\n");
        }
        if (turn > 0)
            runGame();
        else {
            grid1 = getlineone(exports.grid);
            grid2 = getlinetwo(exports.grid);
            grid3 = getlinethree(exports.grid);
            if (status == 0)
                console.log(grid1 + "\n" + grid2 + "\n" + grid3 + "\nGame Drawn\n");
            else
                console.log(grid1 + "\n" + grid2 + "\n" + grid3 + "\nPlayer " + status + " Won\n");
            rl.close();
        }
    });
}
runGame();
