"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var programId = new web3_js_1.PublicKey("11111111111111111111111111111111");
var string = "helloWorld";
var _a = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(string)], programId), PDA = _a[0], bump = _a[1];
console.log("PDA: ".concat(PDA));
console.log("Bump: ".concat(bump));
