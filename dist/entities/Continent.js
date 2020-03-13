"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
// import { ObjectId } from "mongodb";
const Country_1 = require("./Country");
let Continent = class Continent {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Continent.prototype, "code", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Continent.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [Country_1.Country]),
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Continent.prototype, "countries", void 0);
Continent = __decorate([
    type_graphql_1.ObjectType({ description: "The Continent model" })
], Continent);
exports.Continent = Continent;
exports.ContinentModel = typegoose_1.getModelForClass(Continent);
//# sourceMappingURL=Continent.js.map