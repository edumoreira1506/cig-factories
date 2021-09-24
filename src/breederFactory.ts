import faker from 'faker';
import { IBreeder } from '@cig-platform/types';

import addressFactory from './breederAddressFactory';

export default function breederFactory({
  id = faker.datatype.uuid(),
  name = faker.name.findName(),
  description = faker.lorem.word(200),
  address = addressFactory(),
  active = true,
  foundationDate = faker.date.past(),
}: Partial<IBreeder> = {}): Required<IBreeder> {
  return {
    id,
    description,
    address,
    name,
    active,
    foundationDate
  };
}
