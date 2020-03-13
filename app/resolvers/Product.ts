import { Resolver, Mutation, Arg, Query,  FieldResolver, Root } from "type-graphql";
import { Product, ProductModel } from "../entities/Product";
import { ProductInput } from "./types/product-input"

import {  Categories, CategoriesModel } from "../entities/Categories";


  
@Resolver(_of => Product)
export class ProductResolver {

    @Query(_returns => Product, { nullable: false})
    async returnSingleProduct(@Arg("id") id: string){
      return await ProductModel.findById({_id:id});
    };

    @Query(() => [Product])
    async returnAllProduct(){
      return await ProductModel.find();
    };
  
    @Mutation(() => Product)
    async createProduct(@Arg("data"){name,description, color, stock, price, category_id}: ProductInput): Promise<Product> { 
      const product = (await ProductModel.create({      
          name,
          description,
          color,
          stock,
          price,
         category_id
          
      })).save();
      return product;
    };

   @Mutation(() => Boolean)
   async deleteProduct(@Arg("id") id: string) {
    await ProductModel.deleteOne({id});
    return true;
  }


  @FieldResolver(_type => (Categories))
  async category(@Root() product: Product): Promise<Categories> {
    console.log(product, "product!")
    return (await CategoriesModel.findById(product._doc.category_id))!;
  }


}
