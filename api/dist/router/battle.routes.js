"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const battle_controller_1 = require("../controllers/battle.controller");
const battle_extended_controller_1 = require("../controllers/battle.extended.controller");
const router = (0, express_1.Router)();
router.get('/', battle_controller_1.BattleController.list);
router.post('/', battle_extended_controller_1.BattleExtendedController.create);
exports.default = router;
//# sourceMappingURL=battle.routes.js.map