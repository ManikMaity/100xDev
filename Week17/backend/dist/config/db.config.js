"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const server_config_1 = require("./server.config");
const pgClient = new pg_1.Client(server_config_1.POSTGRES_URL);
exports.default = pgClient;
