"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
const base_1 = __importDefault(require("./base"));
const battle_extended_model_1 = require("./battle.extended.model");
class Monster extends base_1.default {
    static get relationMappings() {
        return {
            battles: {
                relation: this.HasManyRelation,
                modelClass: () => battle_extended_model_1.Battle,
                join: {
                    from: 'monster.id',
                    to: ['battle.monsterA', 'battle.monsterB']
                }
            }
        };
    }
}
exports.Monster = Monster;
Monster.tableName = 'monster';
//# sourceMappingURL=monster.extended.model.js.map