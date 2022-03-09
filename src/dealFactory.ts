import faker from '@faker-js/faker';
import { IDeal } from '@cig-platform/types';

export const dealFactory = ({
  id = faker.datatype.uuid(),
  sellerId = faker.datatype.uuid(),
  buyerId = faker.datatype.uuid(),
  advertisingId = faker.datatype.uuid(),
  cancelled = false,
  createdAt = new Date(),
  finished = false
}: Partial<IDeal> = {}): Required<IDeal> => ({
  id,
  sellerId,
  buyerId,
  advertisingId,
  cancelled,
  createdAt,
  finished
});
