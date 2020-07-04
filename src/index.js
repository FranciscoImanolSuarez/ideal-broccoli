const messages = ["The best broccoli in the world"];

const randomMsg = () => {
  const msj = messages[Math.floor(Math.random() * messages.length)];
  console.info(`${msj}`);
};


module.exports = { randomMsg }