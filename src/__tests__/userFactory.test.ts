import faker from 'faker';

import { userFactory, registerFactory } from '..';

describe('userFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const user = userFactory({ id });

    expect(user.id).toBe(id);
  });

  it('applies the email value', () => {
    const email = faker.internet.email();
    const user = userFactory({ email });

    expect(user.email).toBe(email);
  });

  it('applies the password value', () => {
    const password = faker.internet.password();
    const user = userFactory({ password });

    expect(user.password).toBe(password);
  });

  it('applies the name value', () => {
    const name = faker.name.findName();
    const user = userFactory({ name });

    expect(user.name).toBe(name);
  });

  it('applies the birthDate value', () => {
    const birthDate = faker.date.past();
    const user = userFactory({ birthDate });

    expect(user.birthDate).toBe(birthDate);
  });

  it('applies the register value', () => {
    const register =  registerFactory();
    const user = userFactory({ register });

    expect(user.register).toBe(register);
  });

  it('applies the registerType value', () => {
    const registerType = 'default';
    const user = userFactory({ registerType });

    expect(user.registerType).toBe(registerType);
  });
});
