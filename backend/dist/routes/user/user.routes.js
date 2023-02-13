"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_controllers_1 = __importDefault(require("../../controllers/user/createUser.controllers"));
const deleteUser_controllers_1 = __importDefault(require("../../controllers/user/deleteUser.controllers"));
const listUsers_controller_1 = __importDefault(require("../../controllers/user/listUsers.controller"));
const updateUser_controllers_1 = __importDefault(require("../../controllers/user/updateUser.controllers"));
const router = (0, express_1.Router)();
router.post("", createUser_controllers_1.default);
router.get("", listUsers_controller_1.default);
router.patch("", updateUser_controllers_1.default);
router.delete("", deleteUser_controllers_1.default);
exports.default = router;
