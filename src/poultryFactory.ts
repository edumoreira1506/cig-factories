import { faker } from '@faker-js/faker';
import { IPoultry } from '@cig-platform/types/build';
import { PoultryGenderEnum, PoultryGenderCategoryEnum } from '@cig-platform/enums';

const dadPoultry = poultryFactory({
  gender: PoultryGenderEnum.Female,
  genderCategory: PoultryGenderCategoryEnum.Matrix
})

const momPoultry = poultryFactory({
  gender: PoultryGenderEnum.Female,
  genderCategory: PoultryGenderCategoryEnum.Matrix
})

export function poultryFactory({
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
  isAlive = true,
  momId = faker.datatype.uuid(),
  dadId = faker.datatype.uuid(),
  mom,
  dad,
  tail,
  crest,
  dewlap,
  type,
  active
}: Partial<IPoultry> = {}): Required<IPoultry> {
  return {
    isAlive,
    active: active ?? true,
    birthDate,
    colors,
    id,
    type: type ?? 'INDIO_GIGANTE',
    videos,
    description,
    tail: tail ?? 'MEDIA',
    crest: crest ?? 'ERVILHA',
    dewlap: dewlap ?? 'AUSENCIA_TOTAL',
    gender,
    name,
    register,
    genderCategory,
    number,
    forSale,
    dadId,
    mom: {
      ...mom,
      id: momId,
      isAlive: Boolean(mom?.isAlive),
      active: Boolean(mom?.active),
      number: Number(mom?.number ?? 0),
      type: mom?.type ?? 'INDIO_GIGANTE',
      birthDate: mom?.birthDate ?? new Date(),
      colors: {
        eyes: mom?.colors?.eyes ?? colors.eyes,
        shins: mom?.colors?.shins ?? colors.shins,
        plumage: mom?.colors?.plumage ?? colors.plumage,
      },
      videos,
      description: mom?.description ?? faker.lorem.sentence(150),
      tail: mom?.tail ?? tail ?? 'MEDIA',
      crest: mom?.crest ?? crest ?? 'ERVILHA',
      dewlap: mom?.dewlap ?? dewlap ?? 'AUSENCIA_TOTAL',
      register: mom?.register ?? register ?? faker.datatype.number().toString(),
      name: mom?.name ?? name ?? faker.name.findName(),
      gender: mom?.gender ?? gender ?? 'FEMEA',
      genderCategory: mom?.genderCategory ?? genderCategory ?? 'MATRIZ',
      forSale: Boolean(mom?.forSale ?? forSale),
    },
    momId,
    dad: {
      ...dad,
      description: dad?.description ?? faker.lorem.sentence(150),
      id: dadId,
      isAlive: Boolean(dad?.isAlive),
      active: Boolean(dad?.active),
      number: Number(dad?.number ?? 0),
      type: dad?.type ?? 'INDIO_GIGANTE',
      birthDate: dad?.birthDate ?? new Date(),
      colors: {
        eyes: dad?.colors?.eyes ?? colors.eyes,
        shins: dad?.colors?.shins ?? colors.shins,
        plumage: dad?.colors?.plumage ?? colors.plumage,
      },
      videos,
      tail: dad?.tail ?? tail ?? 'MEDIA',
      crest: dad?.crest ?? crest ?? 'ERVILHA',
      dewlap: dad?.dewlap ?? dewlap ?? 'AUSENCIA_TOTAL',
      register: dad?.register ?? register ?? faker.datatype.number().toString(),
      name: dad?.name ?? name ?? faker.name.findName(),
      gender: dad?.gender ?? gender ?? 'FEMEA',
      genderCategory: dad?.genderCategory ?? genderCategory ?? 'MATRIZ',
      forSale: Boolean(dad?.forSale ?? forSale),
    }
  };
};
