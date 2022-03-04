import faker from 'faker';
import { IPoultry } from '@cig-platform/types';

export const poultryFactory = ({
  birthDate = faker.date.past(),
  colors = {
    eyes: faker.commerce.color(),
    plumage: faker.commerce.color(),
    shins: faker.commerce.color()
  },
  id = faker.datatype.uuid(),
  videos = {},
  description = faker.lorem.sentence(150),
  name = faker.name.findName(),
  register = faker.datatype.number().toString(),
  genderCategory = 'MATRIZ',
  gender = 'FEMEA',
  number = faker.datatype.number(),
  forSale = false,
  currentAdvertisingPrice = faker.datatype.number()
}: Partial<IPoultry> = {}): Required<IPoultry> => {
  return {
    active: true,
    birthDate,
    colors,
    id,
    type: 'INDIO_GIGANTE',
    videos,
    description,
    tail: 'MEDIA',
    crest: 'ERVILHA',
    dewlap: 'AUSENCIA_TOTAL',
    gender,
    name,
    register,
    genderCategory,
    number,
    forSale,
    currentAdvertisingPrice
  };
};
