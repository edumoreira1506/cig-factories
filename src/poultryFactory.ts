import faker from 'faker';
import { IPoultry } from '@cig-platform/types';

import addressFactory from './poultryAddressFactory';

export default function poultryFactory({
  id = faker.datatype.uuid(),
  name = faker.name.findName(),
  description = faker.lorem.word(200),
  address = addressFactory(),
  active = true,
  foundationDate = faker.date.past(),
}: Partial<IPoultry> = {}): Required<IPoultry> {
  return {
    id,
    description,
    address,
    name,
    active,
    foundationDate
  };
}
