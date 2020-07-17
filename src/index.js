const messages = [
  "The best broccoli in the world",
  "Reinventing the wheel",
  "🐱‍🚀",
  "🐱‍🏍 ",
  "\"The best way to predict the future is to create it.\" - Peter Drucker",
  "\"Controlling complexity is the essence of computer programming.\" - Brian Kernighan",
  "\"Computers are useless. They can only give you answers.\" - Pablo Picasso",
];

const randomMsg = () => {
  const msj = messages[Math.floor(Math.random() * messages.length)];
  console.info(`${msj}`);
};


module.exports = { randomMsg }
