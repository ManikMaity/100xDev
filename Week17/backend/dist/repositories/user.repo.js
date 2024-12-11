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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.createAddress = createAddress;
exports.getUserData = getUserData;
exports.getUserDataJoin = getUserDataJoin;
const db_config_1 = __importDefault(require("../config/db.config"));
function createUser(username, password, email, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query1 = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";
            const query2 = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING *";
            yield db_config_1.default.query("BEGIN");
            const response = yield db_config_1.default.query(query1, [username, password, email]);
            const userid = response.rows[0].id;
            const address = yield db_config_1.default.query(query2, [
                userid,
                city,
                country,
                street,
                pincode,
            ]);
            yield db_config_1.default.query("COMMIT");
            return Object.assign(Object.assign({}, response.rows[0]), { address: address.rows[0] });
        }
        catch (error) {
            throw error;
        }
    });
}
function createAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield db_config_1.default.query("INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING *", [user_id, city, country, street, pincode]);
        return response.rows[0];
    });
}
function getUserData(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT * FROM users WHERE id = $1";
        const queryString2 = "SELECT * FROM addresses WHERE user_id = $1";
        const user = yield db_config_1.default.query(queryString, [userid]);
        const address = yield db_config_1.default.query(queryString2, [userid]);
        const _a = user.rows[0], { password } = _a, userData = __rest(_a, ["password"]);
        return Object.assign(Object.assign({}, userData), { address: address.rows });
    });
}
function getUserDataJoin(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `select users.id, users.username, users.email, addresses.city, 
    addresses.country, addresses.street, addresses.pincode 
    from users full join addresses on users.id = addresses.user_id where users.id = $1`;
        const user = yield db_config_1.default.query(queryString, [userid]);
        return user.rows[0];
    });
}
