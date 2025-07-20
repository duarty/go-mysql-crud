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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleExtendedController = void 0;
const http_status_codes_1 = require("http-status-codes");
const monster_extended_model_1 = require("../models/monster.extended.model");
const battle_extended_model_1 = require("../models/battle.extended.model");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { monster1Id, monster2Id } = req.body;
        if (!monster1Id || !monster2Id) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                error: 'Both monster1Id and monster2Id are required'
            });
        }
        if (monster1Id === monster2Id) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                error: 'Monsters cannot battle themselves'
            });
        }
        const monster1 = yield monster_extended_model_1.Monster.query().findById(monster1Id);
        const monster2 = yield monster_extended_model_1.Monster.query().findById(monster2Id);
        if (!monster1 || !monster2) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                error: 'One or both monsters not found'
            });
        }
        const winner = simulateBattle(monster1, monster2);
        const battleData = {
            monsterA: monster1.id,
            monsterB: monster2.id,
            winner: winner.id
        };
        const battle = yield battle_extended_model_1.Battle.query().insert(battleData);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json({
            id: battle.id,
            winner: winner
        });
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'Failed to create battle'
        });
    }
});
function simulateBattle(monster1, monster2) {
    const fighter1 = {
        id: monster1.id,
        name: monster1.name,
        attack: monster1.attack,
        defense: monster1.defense,
        hp: monster1.hp,
        speed: monster1.speed,
        imageUrl: monster1.imageUrl,
        currentHp: monster1.hp
    };
    const fighter2 = {
        id: monster2.id,
        name: monster2.name,
        attack: monster2.attack,
        defense: monster2.defense,
        hp: monster2.hp,
        speed: monster2.speed,
        imageUrl: monster2.imageUrl,
        currentHp: monster2.hp
    };
    let currentAttacker = fighter1;
    let currentDefender = fighter2;
    if (fighter2.speed > fighter1.speed ||
        (fighter2.speed === fighter1.speed && fighter2.attack > fighter1.attack)) {
        currentAttacker = fighter2;
        currentDefender = fighter1;
    }
    while (fighter1.currentHp > 0 && fighter2.currentHp > 0) {
        const damage = Math.max(1, currentAttacker.attack - currentDefender.defense);
        currentDefender.currentHp = Math.max(0, currentDefender.currentHp - damage);
        if (currentDefender.currentHp <= 0) {
            break;
        }
        [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
    }
    const winner = fighter1.currentHp > 0 ? monster1 : monster2;
    return winner;
}
exports.BattleExtendedController = {
    create,
};
//# sourceMappingURL=battle.extended.controller.js.map