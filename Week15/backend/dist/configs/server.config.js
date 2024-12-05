"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_URL = exports.JWT_SECRET = exports.SALT = exports.DB_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT);
exports.DB_URL = process.env.DB_URL;
exports.SALT = Number(process.env.SALT);
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.CLIENT_URL = process.env.CLIENT_URL;
