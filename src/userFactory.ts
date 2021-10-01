import faker from 'faker';
import { IUser } from '@cig-platform/types';

import registerFactory from './registerFactory';

export default function userFactory({
  id = faker.datatype.uuid(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  name = faker.name.findName(),
  birthDate = faker.date.past(),
  register = registerFactory()
}: Partial<IUser> = {}): Required<IUser> {
  const confirmPassword = password;

  return {
    id,
    email,
    password,
    name,
    register,
    birthDate,
    confirmPassword,
  };
}
