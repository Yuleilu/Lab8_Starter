// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

describe('Unit tests for isPhoneNumber', () => {
  test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('1234-567-890')).toBe(false);
    expect(functions.isPhoneNumber('(123) 45-7890')).toBe(false);
  });
});

describe('Unit tests for isEmail', () => {
  test('Valid email should return true', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
    expect(functions.isEmail('user_123@example.co')).toBe(true);
  });

  test('Invalid email should return false', () => {
    expect(functions.isEmail('test@example')).toBe(false);
    expect(functions.isEmail('user_123@example.')).toBe(false);
  });
});

describe('Unit tests for isStrongPassword', () => {
  test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('Abcd1234')).toBe(true);
    expect(functions.isStrongPassword('Password_123')).toBe(true);
  });

  test('Invalid strong password should return false', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
    expect(functions.isStrongPassword('12345678')).toBe(false);
  });
});

describe('Unit tests for isDate', () => {
  test('Valid date should return true', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
    expect(functions.isDate('01/01/2022')).toBe(true);
  });

  test('Invalid date should return false', () => {
    expect(functions.isDate('321/12/2023')).toBe(false);
    expect(functions.isDate('2022/01/01')).toBe(false);
  });
});

describe('Unit tests for isHexColor', () => {
  test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
    expect(functions.isHexColor('1F3')).toBe(true);
  });

  test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('GHIJKL')).toBe(false);
    expect(functions.isHexColor('#1234567')).toBe(false);
  });
});
