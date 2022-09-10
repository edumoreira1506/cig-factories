import { faker } from '@faker-js/faker';

import { poultryFactory } from '..';

describe('poultryFactory', () => {
  it('applies the id value', () => {
    const id = faker.datatype.uuid();
    const poultry = poultryFactory({ id });

    expect(poultry.id).toBe(id);
  });

  it('applies the birthDate', () => {
    const birthDate = faker.date.past();
    const poultry = poultryFactory({ birthDate });

    expect(poultry.birthDate).toBe(birthDate);
  });

  it('applies the color', () => {
    const colors = {
      eyes: faker.commerce.color(),
      plumage: faker.commerce.color(),
      shins: faker.commerce.color()
    };
    const poultry = poultryFactory({ colors });

    expect(poultry.colors).toBe(colors);
  });

  it('applies the videos', () => {
    const videos = {
      walking: 'https://www.youtube.com/watch?v=nYXozvQaEUI',
      presentation: 'https://www.youtube.com/watch?v=nYXozvQaEUI'
    };
    const poultry = poultryFactory({ videos });

    expect(poultry.videos).toBe(videos);
  });
});
