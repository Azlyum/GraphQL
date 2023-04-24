const resolvers = {
  Query: {
    getCharacters: (_, __, { dataSources }) => {
      console.log(_, __, { dataSources });
      return dataSources.rickAndMortyAPI.getCharacters();
    },
    getCharactersByPageId: (_, { id }, { dataSources }) => {
      return dataSources.rickAndMortyAPI.getCharactersByPageId(id);
    },
    getFavouriteCharacters: (_, __, { dataSources }) => {
      console.log(_, __, { dataSources });
      return dataSources.FavouriteCharacter.listCharacters();
    },
  },

  // mutations
  Mutation: {
    createFavourite: (_, __, { dataSources }) => {
      dataSources.FavouriteCharacter.create(__);
    },
  },
};

module.exports = { resolvers };
