// Code your solutions in this file

const writeCards = (names, eventName) => {
  let thankYouMessage = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessage[
      i
    ] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  }

  return thankYouMessage;
};

const countDown = (number) => {
  while (number >= 0) {
    console.log(number);
    number--;
  }
};
