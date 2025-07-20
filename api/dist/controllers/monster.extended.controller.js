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
exports.MonsterExtendedController = exports.list = void 0;
const http_status_codes_1 = require("http-status-codes");
const monster_extended_model_1 = require("../models/monster.extended.model");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const monsters = yield monster_extended_model_1.Monster.query();
        return res.status(http_status_codes_1.StatusCodes.OK).json(monsters);
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch monsters' });
    }
});
exports.list = list;
exports.MonsterExtendedController = {
    list: exports.list,
};
//# sourceMappingURL=monster.extended.controller.js.map