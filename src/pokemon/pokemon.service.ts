import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async getPokemon() {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=10',
      );
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
