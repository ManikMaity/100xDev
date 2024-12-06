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
const express_1 = __importDefault(require("express"));
const server_config_1 = require("./config/server.config");
const db_config_1 = __importDefault(require("./config/db.config"));
const user_repo_1 = require("./repositories/user.repo");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const response = yield (0, user_repo_1.createUser)(username, password, email);
        res.json({
            message: "User created successfully",
            data: response
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error
        });
    }
}));
app.listen(server_config_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_config_1.default.connect();
        console.log('Database connected');
        console.log(`Server is running on port http://localhost:${server_config_1.PORT}`);
    }
    catch (error) {
        console.log("Error connecting to database", error);
    }
}));
