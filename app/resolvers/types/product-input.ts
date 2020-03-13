import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Product } from "../../entities/Product";
import { ObjectId } from "mongodb";




@InputType()
export class ProductInput implements Partial<Product> {

  @Field()
  name: String;

  @Field()
  @Length(1, 255)
  description: String;

  @Field()
  color: String;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field(()=> String)
  category_id: ObjectId;
  
}
