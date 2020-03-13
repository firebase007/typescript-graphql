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
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
let ProductInput = class ProductInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 255),
    __metadata("design:type", String)
], ProductInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductInput.prototype, "color", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductInput.prototype, "stock", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", mongodb_1.ObjectId)
], ProductInput.prototype, "category_id", void 0);
ProductInput = __decorate([
    type_graphql_1.InputType()
], ProductInput);
exports.ProductInput = ProductInput;
//# sourceMappingURL=product-input.js.map