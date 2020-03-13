import { InputType, Field } from "type-graphql";
import { Order } from "../../entities/Order";


@InputType()
export class OrderInput implements Partial<Order> {

  @Field()
  user_id: String;

  @Field()
  payde: Boolean;

  @Field()
  date: Date;
  
}
