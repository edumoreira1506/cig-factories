import { faker } from '@faker-js/faker';
import { IAdvertising } from '@cig-platform/types/build';

export const advertisingFactory = ({
  id = faker.datatype.uuid(),
  externalId = faker.lorem.word(),
  merchantId = faker.datatype.uuid(),
  price = faker.datatype.number(),
  finished = false,
  metadata = {},
  favoritesAmount = faker.datatype.number()
}: Partial<IAdvertising> = {}): Required<IAdvertising> => ({
  id,
  externalId,
  merchantId,
  price,
  finished,
  metadata,
  favoritesAmount
});
