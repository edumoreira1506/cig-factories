import faker from 'faker';
import { IPoultry } from '@cig-platform/types';

export default function poultryFactory({
  birthDate = faker.date.past(),
  colors = {
    eyes: faker.commerce.color(),
    plumage: faker.commerce.color(),
    shins: faker.commerce.color()
  },
  id = faker.datatype.uuid(),
  videos = {}
}: Partial<IPoultry> = {}): Required<IPoultry> {
  return {
    active: true,
    birthDate,
    colors,
    id,
    type: 'INDIO_GIGANTE',
    videos,
  };
}
