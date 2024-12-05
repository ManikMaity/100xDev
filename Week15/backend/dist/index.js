"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = require("./configs/server.config");
const user_route_1 = __importDefault(require("./routes/user.route"));
const content_route_1 = __importDefault(require("./routes/content.route"));
const db_config_1 = __importDefault(require("./configs/db.config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        msg: "Server running successfully.",
    });
});
app.use("/api/v1/user", user_route_1.default);
app.use("/api/v1/content", content_route_1.default);
(async () => {
    await (0, db_config_1.default)();
    app.listen(server_config_1.PORT, () => {
        console.log(`Server started in http://localhost:${server_config_1.PORT}`);
    });
})();
