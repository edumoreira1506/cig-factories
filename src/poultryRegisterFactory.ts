import faker from 'faker';
import { IPoultryRegister } from '@cig-platform/types';

export const poultryRegisterFactory = ({
  id = faker.datatype.uuid(),
  date = faker.datatype.datetime(),
  poultryId = faker.datatype.uuid(),
  description = faker.lorem.sentences(3),
  type = 'ANÚNCIO',
  files = []
}: Partial<IPoultryRegister> = {}): Required<IPoultryRegister> => ({
  id,
  date,
  poultryId,
  description,
  files,
  type
});
