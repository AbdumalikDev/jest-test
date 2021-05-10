const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Abdumalik Khojimirzaev object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Abdumalik',
    lastName: 'Khojimirzaev',
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under 1600 or equal', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('Should be above 1600', () => {
  const load1 = 800;
  const load2 = 900;
  expect(load1 + load2).toBeGreaterThan(1600);
});

// Regex toMatch sensitive
test('There is no I in team', () => {
  expect('teami').not.toMatch(/I/);
});

// Regex toMatch insensitive
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays toContain
test('Admin should be in usernames', () => {
  usernames = ['john', 'doe', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data
test("User's fetched city name should be Gwenborough", () => {
  expect.assertions(1);
  return functions.fetchUser().then(({ address }) => {
    expect(address.city).toEqual('Gwenborough');
  });
});
