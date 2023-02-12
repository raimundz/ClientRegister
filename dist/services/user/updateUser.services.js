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
const data_source_1 = __importDefault(require("../../data-source"));
const user_entity_1 = require("../../entities/user.entity");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const updateUserService = ({ name, email, password }, id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = jsonwebtoken_1.default.decode(token);
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const findUser = yield userRepository.findOneBy({
        id,
    });
    if (!findUser) {
        throw new Error("User not found");
    }
    if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.sub) != id) {
        throw new Error("User is not admin");
    }
    yield userRepository.update(id, {
        name: name ? name : findUser.name,
        email: email ? email : findUser.email,
        password: password ? yield (0, bcrypt_1.hash)(password, 10) : findUser.password,
        createdAt: findUser.createdAt,
        id: findUser.id,
    });
    const user = yield userRepository.findOneBy({ id });
    return user;
});
exports.default = updateUserService;
