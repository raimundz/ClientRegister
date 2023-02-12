"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", user_routes_1.default);
app.listen(3331, () => {
    console.log("Server running");
});
exports.default = app;
