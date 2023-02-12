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
const createUser_services_1 = __importDefault(require("../../services/user/createUser.services"));
const createUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, tel } = request.body;
    try {
        const user = yield (0, createUser_services_1.default)({ name, email, password, tel });
        return response.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return response
                .status(400)
                .send({ error: error.name, message: error.message });
        }
    }
});
exports.default = createUserController;
