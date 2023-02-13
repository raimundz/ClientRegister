"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteUser_services_1 = __importDefault(require("../../services/user/deleteUser.services"));
const userDeleteController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const user = yield (0, deleteUser_services_1.default)(id);
        return response.status(204).json({ message: "User deleted with sucess" });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message == "User not found") {
                return response.status(404).send({
                    error: error.name,
                    message: error.message,
                });
            }
            else {
                return response.status(400).send({
                    error: error.name,
                    message: error.message,
                });
            }
        }
    }
});
exports.default = userDeleteController;
