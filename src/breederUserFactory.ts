import { faker } from '@faker-js/faker';
import { IBreederUser } from '@cig-platform/types/build';

export const breederUserFactory = ({
  id = faker.datatype.uuid(),
  userId = faker.datatype.uuid(),
  breederId = faker.datatype.uuid()
}: Partial<IBreederUser> = {}): Required<IBreederUser> => {
  return {
    id,
    userId,
    breederId
  };
};
