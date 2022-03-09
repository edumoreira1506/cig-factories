import faker from '@faker-js/faker';

import { poultryRegisterFactory } from '..';

describe('poultryRegisterFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const poultryRegister = poultryRegisterFactory({ id });

    expect(poultryRegister.id).toBe(id);
  });

  it('applies the date value', () => {
    const date = faker.datatype.datetime();
    const poultryRegister = poultryRegisterFactory({ date });

    expect(poultryRegister.date).toBe(date);
  });

  it('applies the poultryId value', () => {
    const poultryId = faker.datatype.uuid();
    const poultryRegister = poultryRegisterFactory({ poultryId });

    expect(poultryRegister.poultryId).toBe(poultryId);
  });

  it('applies the description value', () => {
    const description = faker.lorem.sentence(2);
    const poultryRegister = poultryRegisterFactory({ description });

    expect(poultryRegister.description).toBe(description);
  });

  it('applies the type value', () => {
    const type = 'TRANSFERÊNCIA';
    const poultryRegister = poultryRegisterFactory({ type });

    expect(poultryRegister.type).toBe(type);
  });

  it('applies the files value', () => {
    const files = [] as { fileName: string; }[];
    const poultryRegister = poultryRegisterFactory({ files });

    expect(poultryRegister.files).toBe(files);
  });
});
