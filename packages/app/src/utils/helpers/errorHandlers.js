export const hookFormInputField = (
  name,
  error,
  message,
  rules = { minLength: 10, maxLength: 10 },
) => {
  const { type } = error;

  switch (type) {
    case 'pattern':
      return `Please enter valid ${name}`;

    case 'minLength':
      return `${name} should be of at least ${rules.minLength || 10} digit`;

    case 'maxLength':
      return `${name} should be of at most ${rules.maxLength || 10} digit`;

    case 'password-not-matched':
      return error.message;

    case 'invalid_credentials':
      return error.message;

    default:
      return message;
  }
};
