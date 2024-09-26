"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var programId = new web3_js_1.PublicKey("11111111111111111111111111111111");
var string = "helloWorld";
var bump = 254;
var PDA = web3_js_1.PublicKey.createProgramAddressSync([Buffer.from(string), Buffer.from([bump])], programId);
console.log("PDA: ".concat(PDA));
