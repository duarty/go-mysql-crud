"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monster_extended_controller_1 = require("../controllers/monster.extended.controller");
const router = (0, express_1.Router)();
router.get('/', monster_extended_controller_1.MonsterExtendedController.list);
exports.default = router;
//# sourceMappingURL=monster.routes.js.map