import axios from "axios";

class FavouriteCharacter {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000", // json-server endpoint
    });
  }

  async listCharacters() {
    const response = await this.api.get("/favouriteCharacters");

    console.log(response.data, "Data");
    return response.data;
  }

  async find(id) {
    const res = await this.api.get(`/favouriteCharacters/${id}`);
    return res.data;
  }

  async create(data) {
    console.log(data, "data");
    const favouriteCharactersId = {
      name: data.input.name,
      lastName: data.input.lastName,
      id: shortid.generate(),
    };
    const res = await this.api.post(
      "/favouriteCharacters",
      favouriteCharactersId
    );
    return res.data;
  }

  async update(id, data) {
    const res = await this.api.patch(`/favouriteCharacters/${id}`, data);
    return res.data;
  }

  async delete(id) {
    await this.api.delete(`/favouriteCharacters/${id}`);
    return { id };
  }
}

module.exports = FavouriteCharacter;
