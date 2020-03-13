import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";




@ObjectType({ description: "The Categories model" })
export class Categories {
    @Field(()=> ID)
    id: string;  

    @Field()
    @Property()
    name: String;

    @Field()
    @Property()
    description: String;
}


export const CategoriesModel = getModelForClass(Categories);


