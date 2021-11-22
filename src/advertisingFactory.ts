import faker from 'faker';
import { IAdvertising } from '@cig-platform/types';

export const advertisingFactory = ({
  id = faker.datatype.uuid(),
  externalId = faker.lorem.word(),
  merchantId = faker.datatype.uuid(),
  price = faker.datatype.number()
}: Partial<IAdvertising> = {}): Required<IAdvertising> => ({
  id,
  externalId,
  merchantId,
  price
});
