import instance from '../request';
import constants from '../../shared/constants';

import { CharacterSchema, CharacterTypes } from '../Schemas/CharactersSchema';
import { CharactersPageInfoSchema } from '../Schemas/CharactersPageInfoSchema';

import getCount from '../../utils/count';

const url = "https://rickandmortyapi.com/api";

class CharactersReposittory {
  getCharacterCount: Function;

  constructor(getCount: Function) {
    this.getCharacterCount = getCount;
  }

  getAllCharacters = async (): Promise<CharacterSchema[]> => {
    const charactersIds = await this.getCharacterCount(this.getCharacterPageInfo);
    const { data } = await instance.get<CharacterSchema[]>(`${constants.schema}${constants.domain}${constants.base}${constants.characters}/${charactersIds.join(', ')}`);

    return data;
  }

  getFavouriteCharacters = async (favouriteCharactersIds: number[]): Promise<CharacterSchema[]> => {
    let charactersIds: string;

    if (favouriteCharactersIds.length === 0) {
      return [];
    }

    if (favouriteCharactersIds.length === 1) {
      charactersIds = favouriteCharactersIds[0].toString();
    }

    if (favouriteCharactersIds.length > 1) {
      charactersIds = favouriteCharactersIds.join(', ').trim();
    }

    const { data } = await instance.get<CharacterSchema[]>(`${constants.schema}${constants.domain}${constants.base}${constants.characters}/${charactersIds}`);

    return data;
  }

  getPageOfCharacters = async (pageId: number = 1): Promise<CharacterSchema[]> => {
    const { data: { results } } = await instance.get<{ results: CharacterSchema[] }>(`${url}/character/?page=${pageId}`);

    return results;
  }

  getCharacterInfo = async (characterId: number): Promise<CharacterTypes> => {
    const { data } = await instance.get<{ results: CharacterSchema }>(`${url}/character/${characterId}`);

    return data;
  }

  getCharacterPageInfo = async (): Promise<CharactersPageInfoSchema> => {
    const { data: { info } } = await instance.get<{ info: CharactersPageInfoSchema }>(`${url}/character`);

    return info;
  }

  getCharactersByName = async (searchField: string | string[]): Promise<CharacterSchema[]> => {
    const { data: { results } } = await instance.get<{ results: CharacterSchema[] }>(`${constants.schema}${constants.domain}${constants.base}${constants.characters}/?name=${searchField}`)
  
    return results;
  }
};

export const loadData = new CharactersReposittory(getCount);
