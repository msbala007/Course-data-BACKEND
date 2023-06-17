import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import typeDefs from "./Schema/typeRefs.js";
import resolvers from "./Controller/resolver.js";

const server = new ApolloServer({ typeDefs, resolvers });

const url =
  "mongodb+srv://bala:nfBoOcEjHjY4Xhfb@cluster0.a55kyh2.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("errror🍔", err);
  })
  .then(() => {
    console.log("mon connted");
  });

server.listen().then(({ url }) => {
  console.log(`welcome ${url}`);
});
