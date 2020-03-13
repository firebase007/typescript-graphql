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
const Language_1 = require("./Language");
const State_1 = require("./State");
const Continent_1 = require("./Continent");
let Country = class Country {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "native", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field(() => Continent_1.Continent),
    typegoose_1.prop({ ref: Continent_1.Continent, required: true }),
    __metadata("design:type", Object)
], Country.prototype, "continent", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "currency", void 0);
__decorate([
    type_graphql_1.Field(() => [Language_1.Language]),
    typegoose_1.arrayProp({ items: Language_1.Language, default: [] }),
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Country.prototype, "languages", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "emoji", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Country.prototype, "emojiU", void 0);
__decorate([
    type_graphql_1.Field(() => [State_1.State]),
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Country.prototype, "states", void 0);
Country = __decorate([
    type_graphql_1.ObjectType({ description: "The Country model" })
], Country);
exports.Country = Country;
exports.CountryModel = typegoose_1.getModelForClass(Country);
//# sourceMappingURL=Country.js.map