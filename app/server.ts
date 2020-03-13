import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import {UserResolver} from "./resolvers/User";
import {ProductResolver} from "./resolvers/Product";
import {CategoriesResolver} from "./resolvers/Categories";
import {CartResolver} from "./resolvers/Cart";

import {OrderResolver} from "./resolvers/Order";





const main = async () => {

const schema = await buildSchema({
    resolvers: [CategoriesResolver, ProductResolver, UserResolver, CartResolver, OrderResolver ],
    emitSchemaFile: true,
    validate: false,
  });


// create mongoose connection
const mongoose = await connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
await mongoose.connection;
  


const server = new ApolloServer({schema});

const app = Express();

server.applyMiddleware({app});

app.listen({ port: 3333 }, () =>
  console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`))

};

main().catch((error)=>{
    console.log(error, 'error');
})