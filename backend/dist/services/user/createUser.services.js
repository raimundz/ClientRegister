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
const user_entity_1 = require("../../entities/user.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const data_source_1 = __importDefault(require("../../data-source"));
const createUserService = ({ name, email, password, tel, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const users = yield userRepository.find();
    const emailAlreadyExists = users.find((user) => user.email == email);
    if (emailAlreadyExists) {
        throw new Error("User already exists");
    }
    const user = new user_entity_1.User();
    user.name = name;
    user.email = email;
    user.password = bcrypt_1.default.hashSync(password, 10);
    user.tel = tel;
    user.createdAt = Date();
    userRepository.create(user);
    yield userRepository.save(user);
    return user;
});
exports.default = createUserService;
