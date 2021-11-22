import faker from 'faker';

import { advertisingFactory } from '..';

describe('advertisingFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const merchant = advertisingFactory({ id });

    expect(merchant.id).toBe(id);
  });

  it('applies the externalId value', () => {
    const externalId = faker.lorem.word();
    const merchant = advertisingFactory({ externalId });

    expect(merchant.externalId).toBe(externalId);
  });

  it('applies the price value', () => {
    const price = faker.datatype.number();
    const merchant = advertisingFactory({ price });

    expect(merchant.price).toBe(price);
  });

  it('applies the price value', () => {
    const merchantId = faker.datatype.uuid();
    const merchant = advertisingFactory({ merchantId });

    expect(merchant.merchantId).toBe(merchantId);
  });
});
