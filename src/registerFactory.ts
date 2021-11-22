import faker from 'faker';

export const registerFactory = (): string => {
  return `${faker.datatype.number({ min: 100, max: 999 })}.${faker.datatype.number({ min: 100, max: 999 })}.${faker.datatype.number({ min: 100, max: 999 })}-${faker.datatype.number({ min: 10, max: 99 })}`;
};
