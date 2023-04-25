import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Info {
    count: Int
    pages: Int
    next: String
    prev: String
  }

  type Chararters {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    url: String
    created: String
  }

  type AllCharacters {
    info: Info
    characters: [Chararters]
  }

  type FavouriteCharacter {
    id: ID
    name: String
    status: String
  }

  input CreateFavouriteCharacter {
    name: String
    id: ID
    status: String
  }

  # Queries
  type Query {
    getCharacters: AllCharacters
    getCharactersByPageId(id: Int): AllCharacters
    getFavouriteCharacters: [FavouriteCharacter]
  }

  #Mutations
  type Mutation {
    createFavourite(input: CreateFavouriteCharacter!): FavouriteCharacter
  }
`;
