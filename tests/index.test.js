test('Basic Jest Test', () => {
    expect(1).toBe(1);
  });


const readCSV = require('../src/csvReader');

test('Read CSV file', async () => {
  const data = await readCSV('./sample.csv');
  expect(data.length).toBEGreaterThan(0);
  expect(data.length).toBe(3);
  expect(data[0].name).toBe('John');
  expect(data[0].age).toBe('30');
})