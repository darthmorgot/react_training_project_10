import {isValidEmail} from './is-valid-email';

describe(`Valid email`, () => {
  it(`should allow to enter my email`, () => {
    expect(isValidEmail(`test@test.ru`)).toBe(true);
  });

  it(`should allow to enter correct emails`, () => {
    expect(isValidEmail(`t.one@test.com`)).toBe(true);
    expect(isValidEmail(`test@test.ru`)).toBe(true);
  });

  it(`should not start with @`, () => {
    expect(isValidEmail(`@test.ru`)).toBe(false);
  });

  it(`should not allow to enter invalid email`, () => {
    expect(isValidEmail(`@`)).toBe(false);
    expect(isValidEmail(`ttt`)).toBe(false);
    expect(isValidEmail(`@@@@`)).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });
});
