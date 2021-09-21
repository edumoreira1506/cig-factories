import faker from 'faker';
import { IPoultryUser } from '@cig-platform/types';

export default function poultryUserFactory({
  id = faker.datatype.uuid(),
  userId = faker.datatype.uuid(),
  poultryId = faker.datatype.uuid()
}: Partial<IPoultryUser> = {}): Required<IPoultryUser> {
  return {
    id,
    userId,
    poultryId
  };
}
