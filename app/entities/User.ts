import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

import { Ref } from "../types";

import {Cart} from "./Cart";


@ObjectType({ description: "The User model" })
export class User {
  [x: string]: any;
    @Field(() => ID)
    id: number;  

    @Field()
    @Property({ required: true })
    username: String;

    @Field()
    @Property({ required: true })
    email: String;

    @Field(_type => String)
    @Property({ ref: Cart, required: true})
    cart_id: Ref<Cart>
}


export const UserModel = getModelForClass(User);