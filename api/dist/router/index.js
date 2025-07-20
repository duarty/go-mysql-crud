"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monster_routes_1 = __importDefault(require("./monster.routes"));
const battle_routes_1 = __importDefault(require("./battle.routes"));
const router = (0, express_1.Router)();
router.use('/monsters', monster_routes_1.default);
router.use('/battle', battle_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map