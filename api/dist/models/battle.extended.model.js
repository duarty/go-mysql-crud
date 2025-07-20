"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const base_1 = __importDefault(require("./base"));
const monster_extended_model_1 = require("./monster.extended.model");
class Battle extends base_1.default {
    static get relationMappings() {
        return {
            monsterARelation: {
                relation: this.BelongsToOneRelation,
                modelClass: () => monster_extended_model_1.Monster,
                join: {
                    from: 'battle.monsterA',
                    to: 'monster.id'
                }
            },
            monsterBRelation: {
                relation: this.BelongsToOneRelation,
                modelClass: () => monster_extended_model_1.Monster,
                join: {
                    from: 'battle.monsterB',
                    to: 'monster.id'
                }
            },
            winnerRelation: {
                relation: this.BelongsToOneRelation,
                modelClass: () => monster_extended_model_1.Monster,
                join: {
                    from: 'battle.winner',
                    to: 'monster.id'
                }
            }
        };
    }
}
exports.Battle = Battle;
Battle.tableName = 'battle';
//# sourceMappingURL=battle.extended.model.js.map