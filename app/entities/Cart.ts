import { ObjectType, Field, ID} from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";


import { Ref } from "../types";

import {Product} from "./Product";


@ObjectType({ description: "The  Cart model" })
export  class Cart {
    @Field(() => ID)
    id: string;  

    @Field(_type => String)
    @Property({ ref: Product, required: true })
    products: Ref<Product>;
    _doc: any;
}



export const CartModel = getModelForClass(Cart);