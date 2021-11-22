import faker from 'faker';

import { breederAddressFactory } from '..';

describe('breederAddressFactory', () => {
  it('applies the city value', () => {
    const city = faker.address.cityName();
    const breeder = breederAddressFactory({ city });

    expect(breeder.city).toBe(city);
  });

  it('applies the province value', () => {
    const province = 'PR';
    const breeder = breederAddressFactory({ province });

    expect(breeder.province).toBe(province);
  });

  it('applies the street value', () => {
    const street = faker.address.streetName();
    const breeder = breederAddressFactory({ street });

    expect(breeder.street).toBe(street);
  });

  it('applies the zipcode value', () => {
    const zipcode = `${faker.datatype.number({ min: 10000, max: 99999 })}-${faker.datatype.number({ min: 100, max: 999 })}`;
    const breeder = breederAddressFactory({ zipcode });

    expect(breeder.zipcode).toBe(zipcode);
  });

  it('applies the number value', () => {
    const number = faker.datatype.number(1000);
    const breeder = breederAddressFactory({ number });

    expect(breeder.number).toBe(number);
  });

  it('applies the longitude value', () => {
    const longitude = Number(faker.address.longitude());
    const breeder = breederAddressFactory({ longitude });

    expect(breeder.longitude).toBe(longitude);
  });

  it('applies the latitude value', () => {
    const latitude = Number(faker.address.latitude());
    const breeder = breederAddressFactory({ latitude });

    expect(breeder.latitude).toBe(latitude);
  });
});
