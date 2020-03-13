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
const Categories_1 = require("../entities/Categories");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield new Categories_1.CategoriesModel([
            {
                id: 1,
                name: "Bird1",
                description: "A romantic raspberry's plum comes with it the thought that the practical camel",
            },
        ]).save();
        return {
            categories,
        };
    });
}
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=seeder.js.map