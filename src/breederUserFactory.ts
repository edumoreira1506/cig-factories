import faker from 'faker';
import { IBreederUser } from '@cig-platform/types';

export default function breederUserFactory({
  id = faker.datatype.uuid(),
  userId = faker.datatype.uuid(),
  breederId = faker.datatype.uuid()
}: Partial<IBreederUser> = {}): Required<IBreederUser> {
  return {
    id,
    userId,
    breederId
  };
}
