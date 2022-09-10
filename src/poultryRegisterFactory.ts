import { faker } from '@faker-js/faker';
import { IPoultryRegister } from '@cig-platform/types/build';

export const poultryRegisterFactory = ({
  id = faker.datatype.uuid(),
  date = faker.datatype.datetime(),
  poultryId = faker.datatype.uuid(),
  description = faker.lorem.sentences(3),
  type = 'ANÚNCIO',
  files = [],
  metadata = {}
}: Partial<IPoultryRegister> = {}): Required<IPoultryRegister> => ({
  id,
  date,
  poultryId,
  description,
  files,
  type,
  metadata
});
