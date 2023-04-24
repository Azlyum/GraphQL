const { RESTDataSource } = require("apollo-datasource-rest");

class RickAndMortyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://rickandmortyapi.com/api";
  }

  async getCharacters() {
    const response = await this.get(`/character`);
    const data = {
      info: response.info,
      characters: response.results,
    };
    console.log(data, "Data");
    return data || {};
  }

  async getCharactersByPageId(id) {
    const response = await this.get(`/character?page=${id}`);
    const data = {
      info: response.info,
      characters: response.results,
    };
    console.log(data, "Data");
    return data || {};
  }
}

module.exports = RickAndMortyAPI;
