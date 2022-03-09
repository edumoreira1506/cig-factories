import faker from '@faker-js/faker';
import { IBreederAddress } from '@cig-platform/types';

export const breederAddressFactory = ({
  city = faker.address.cityName(),
  province = 'SP',
  street = faker.address.streetName(),
  zipcode = `${faker.datatype.number({ min: 10000, max: 99999 })}-${faker.datatype.number({ min: 100, max: 999 })}`,
  number = faker.datatype.number(1000),
  longitude = Number(faker.address.longitude()),
  latitude = Number(faker.address.latitude())
}: Partial<IBreederAddress> = {}): Required<IBreederAddress> => {
  return {
    city,
    province,
    street,
    zipcode,
    number,
    latitude,
    longitude,
  };
};
