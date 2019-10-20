import data from '../../data/courses.json';

const numItems = data.length;

describe('Number tests', () => {
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

// Strings
const dataTest = data[0].title;

describe('Stirng tests', () => {
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});


//Arrays
const data2 = ['React Native', 'MeteorJS'];
const data3 = ['React Native', 'MeteorJS', 'React'];

test('THe list of course mentions React native and MEteorJS', () => {
  expect(data3).toEqual(expect.arrayContaining(data2));
});

//Objects

describe('Objects test', () => {
  test('The first course to have a property of title', () => {
    expect(data[0]).toHaveProperty('link');
  });

  test('The first course to have a property of title', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
