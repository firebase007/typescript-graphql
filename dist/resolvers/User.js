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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entities/User");
const user_input_1 = require("./types/user-input");
const Cart_1 = require("../entities/Cart");
let UserResolver = class UserResolver {
    returnSingleUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.UserModel.findById({ _id: id });
        });
    }
    ;
    returnAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.UserModel.find();
        });
    }
    ;
    createUser({ username, email, cart_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield User_1.UserModel.create({
                username,
                email,
                cart_id
            })).save();
            return user;
        });
    }
    ;
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.UserModel.deleteOne({ id });
            return true;
        });
    }
    cart(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(user, "userr!");
            return (yield Cart_1.CartModel.findById(user._doc.cart_id));
        });
    }
};
__decorate([
    type_graphql_1.Query(_returns => User_1.User, { nullable: false }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "returnSingleUser", null);
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "returnAllUsers", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    type_graphql_1.FieldResolver(_type => (Cart_1.Cart)),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "cart", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(_of => User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=User.js.map