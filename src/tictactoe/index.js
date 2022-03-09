"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (input) => {
    try {
        // Add business logic here
        const { body, headers } = JSON.parse(input);
        // You can skip headers if you do not need them
        console.log(headers);
        const { status } = body;
        let response;
        if (status == 0)
            response = "Game Drawn";
        else if (status == 1)
            response = "Player 1 won";
        else if (status == 2)
            response = "Player 2 won";
        else
            response = "Error";
        return {
            statusCode: 200,
            body: JSON.stringify({ response }),
        };
    }
    catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({
                errorMessage: e.message,
                errorType: "",
            }),
        };
    }
};
exports.handler = handler;
//{"headers":{},"body":{"status":1}}
