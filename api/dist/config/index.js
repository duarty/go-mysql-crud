"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
var NodeEnv;
(function (NodeEnv) {
    NodeEnv["TEST"] = "test";
    NodeEnv["DEV"] = "development";
})(NodeEnv || (NodeEnv = {}));
exports.config = {
    env: process.env.NODE_ENV || NodeEnv.DEV,
    dbFilename: process.env.DB_FILENAME || 'db.sqlite3',
    dbTestFilename: process.env.DB_TEST_FILENAME || 'db.test.sqlite3',
    knexDebug: process.env.KNEX_DEBUG === 'true',
    port: Number(process.env.APP_PORT) || 3001,
    defaultPage: 0,
    defaultPageSize: 10,
};
//# sourceMappingURL=index.js.map