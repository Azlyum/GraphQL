import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./shema/TypeDefs";
import { resolvers } from "./shema/Resolvers";
import express from "express";
import RickAndMortyAPI from "./datasources/RickAndMorty";
import FavouriteCharacter from "./datasources/FavouriteCharacter";

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    dataSources: () => ({
      rickAndMortyAPI: new RickAndMortyAPI(),
      FavouriteCharacter: new FavouriteCharacter(),
    }),
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3001 }, () => {
    console.log("server listening on port 3001");
  });
};
startServer();
