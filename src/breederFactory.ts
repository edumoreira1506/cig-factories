import faker from 'faker';
import { IBreeder, IBreederImage } from '@cig-platform/types';

import addressFactory from './breederAddressFactory';

export default function breederFactory({
  id = faker.datatype.uuid(),
  name = faker.name.findName(),
  description = faker.lorem.word(200),
  address = addressFactory(),
  active = true,
  foundationDate = faker.date.past(),
  profileImageUrl = 'breeders/profile/placeholder-user.png',
  mainVideo = 'https://www.youtube.com/watch?v=nYXozvQaEUI',
  images = [] as IBreederImage []
}: Partial<IBreeder> = {}): Required<IBreeder> {
  return {
    id,
    description,
    address,
    name,
    active,
    foundationDate,
    profileImageUrl,
    mainVideo,
    images,
    code: ''
  };
}
