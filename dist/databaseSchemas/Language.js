"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.Languages = mongoose_1.model('Language', new mongoose_1.Schema({
    code: String,
    name: String,
    native: String,
}));
//# sourceMappingURL=Language.js.map