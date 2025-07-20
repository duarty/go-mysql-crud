"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const rosie_1 = require("rosie");
const models_1 = require("../models");
exports.default = rosie_1.Factory.define(models_1.Monster.tableName).attrs({
    name: `${faker_1.faker.animal.type()} ${faker_1.faker.animal.type()}`,
    attack: faker_1.faker.datatype.number({ min: 10, max: 100 }),
    defense: faker_1.faker.datatype.number({ min: 10, max: 100 }),
    hp: faker_1.faker.datatype.number({ min: 10, max: 100 }),
    speed: faker_1.faker.datatype.number({ min: 10, max: 100 }),
    imageUrl: faker_1.faker.image.imageUrl(),
});
//# sourceMappingURL=monster.factory.js.map