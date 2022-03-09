import faker from '@faker-js/faker';
import { IMerchant } from '@cig-platform/types';

export const merchantFactory = ({
  id = faker.datatype.uuid(),
  externalId = faker.lorem.word()
}: Partial<IMerchant> = {}): Required<IMerchant> => ({
  id,
  externalId,
  active: true,
});
