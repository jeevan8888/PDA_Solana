"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var programId = new web3_js_1.PublicKey("11111111111111111111111111111111");
var string = "helloWorld";
// Loop through all bump seeds for demonstration
for (var bump = 255; bump >= 0; bump--) {
    try {
        var PDA = web3_js_1.PublicKey.createProgramAddressSync([Buffer.from(string), Buffer.from([bump])], programId);
        console.log("bump " + bump + ": " + PDA);
    }
    catch (error) {
        console.log("bump " + bump + ": " + error);
    }
}
