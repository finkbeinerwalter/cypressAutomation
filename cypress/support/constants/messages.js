export const MESSAGES = {
  successfullyUploadedFile: (fileName) => `You have successfully uploaded "${fileName}"`,
  missingFile: 'You first need to select a file in order to submit it',
  badCredentials: 'Bad credentials! Please try again! Make sure that you\'ve registered.',
  registeredOrder: ({ price, street, city, country }) => `Congrats! Your order of  $${price}  has been registered and will be shipped to ${street}, ${city} - ${country}.`
};