import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass} from "@typegoose/typegoose";


import { Ref } from "../types";

import {Product} from "./Product";


@ObjectType({ description: "The Order model" })
export  class Order {
    @Field(()=> ID)
    id: String;  

    @Field()
    @Property({ nullable: true })
    user_id: String;

    @Field()
    @Property({ required: true })
    payde: Boolean;

    @Field()
    @Property({ default: new Date(), required: true, nullable: true })
    date: Date;

    // @Field(_type => Product)
    @Property({ ref: Product, required: true })
    products: Ref<Product>
    _doc: any;
}


export const OrderModel = getModelForClass(Order);