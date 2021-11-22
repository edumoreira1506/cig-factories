import faker from 'faker';

import { breederFactory, breederAddressFactory } from '..';

describe('breederFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const breeder = breederFactory({ id });

    expect(breeder.id).toBe(id);
  });

  it('applies the name value', () => {
    const name = faker.name.findName();
    const breeder = breederFactory({ name });

    expect(breeder.name).toBe(name);
  });

  it('applies the foundationDate value', () => {
    const foundationDate = faker.date.past();
    const breeder = breederFactory({ foundationDate });

    expect(breeder.foundationDate).toBe(foundationDate);
  });

  it('applies the description value', () => {
    const description = faker.lorem.word(200);
    const breeder = breederFactory({ description });

    expect(breeder.description).toBe(description);
  });

  it('applies the address value', () => {
    const address = breederAddressFactory();
    const breeder = breederFactory({ address });

    expect(breeder.address).toBe(address);
  });

  it('applies the active value', () => {
    const active = false;
    const breeder = breederFactory({ active });

    expect(breeder.active).toBe(active);
  });

  it('applies the profileImageUrl value', () => {
    const profileImageUrl = '/teste';
    const breeder = breederFactory({ profileImageUrl });

    expect(breeder.profileImageUrl).toBe(profileImageUrl);
  });

  it('applies the mainVideo value', () => {
    const mainVideo = 'https://www.youtube.com/watch?v=9uVORLYvRD8';
    const breeder = breederFactory({ mainVideo });

    expect(breeder.mainVideo).toBe(mainVideo);
  });
});
