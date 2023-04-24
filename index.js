const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./shema/TypeDefs");
const { resolvers } = require("./shema/Resolvers");
const express = require("express");

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
