import instance from '../request';
import constants from '../../shared/constants';

import { CharacterSchema } from '../Schemas/CharactersSchema';
import { CharacterLocationSchema, CharacterLocationTypes } from '../Schemas/CharacterLocationSchema';
import { CharactersPageInfoSchema } from '../Schemas/CharactersPageInfoSchema';

import getCount from '../../utils/count';

const url = "https://rickandmortyapi.com/api";

class LocationReposittory {
  getLocationCount: Function;

  constructor (getCount: Function) {
    this.getLocationCount = getCount;
  }

  getAllLocations = async () => {
    const locationIds = await this.getLocationCount(this.getLocationPageInfo);
    const { data } = await instance.get<CharacterSchema[]>(`${constants.schema}${constants.domain}${constants.base}${constants.location}/${locationIds.join(', ')}`);

    return data;
  }

  getLocationPageInfo = async (): Promise<CharactersPageInfoSchema> => {
    const { data: { info } } = await instance.get<{ info: CharactersPageInfoSchema }>(`${url}/location`);
    
    return info;
  }

  getCharacterLocation = async (locationId: number): Promise<CharacterLocationTypes>  => {
    const { data } = await instance.get<{ results: CharacterLocationSchema}>(`${url}/location/${locationId}`);
    
    return data;
  }
}

export const loadLocationData = new LocationReposittory(getCount);
