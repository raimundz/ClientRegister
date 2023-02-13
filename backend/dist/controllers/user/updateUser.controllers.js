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
const updateUser_services_1 = __importDefault(require("../../services/user/updateUser.services"));
const updateUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = request.updateUser;
    const dataBody = request.body;
    const { id } = request.params;
    const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    id;
    if (dataBody.isActive != undefined ||
        dataBody.isAdm != undefined ||
        dataBody.id != undefined) {
        return response
            .status(401)
            .json({ message: "You can't change this attributes" });
    }
    try {
        const updatedUser = yield (0, updateUser_services_1.default)(user, id, token);
        return response.status(200).json(updatedUser);
    }
    catch (error) {
        if (error instanceof Error) {
            return response
                .status(404)
                .send({ error: error.name, message: error.message });
        }
    }
});
exports.default = updateUserController;
