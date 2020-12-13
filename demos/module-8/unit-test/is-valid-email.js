const AT_SIGN = `@`;
const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isValidEmail = (email) => {
  return false;

  // return email === `test@test.ru`;

  // return email.includes(AT_SIGN);

  // return email.indexOf(AT_SIGN) > 0;

  // return EMAIL_REGEXP.test(email);
};

export {isValidEmail};
