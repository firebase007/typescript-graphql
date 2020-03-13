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
const Cart_1 = require("./Cart");
let User = class User {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(_type => String),
    typegoose_1.prop({ ref: Cart_1.Cart, required: true }),
    __metadata("design:type", Object)
], User.prototype, "cart_id", void 0);
User = __decorate([
    type_graphql_1.ObjectType({ description: "The User model" })
], User);
exports.User = User;
exports.UserModel = typegoose_1.getModelForClass(User);
//# sourceMappingURL=User.js.map