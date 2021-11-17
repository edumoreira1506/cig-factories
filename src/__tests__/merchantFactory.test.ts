import faker from 'faker';

import { merchantFactory } from '../merchantFactory';

describe('merchantFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const merchant = merchantFactory({ id });

    expect(merchant.id).toBe(id);
  });

  it('applies the externalId value', () => {
    const externalId = faker.lorem.word();
    const merchant = merchantFactory({ externalId });

    expect(merchant.externalId).toBe(externalId);
  });
});
