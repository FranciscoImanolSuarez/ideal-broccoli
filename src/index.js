const messages = ["The best broccoli in the world", "Reinventing the wheel", "🐱‍🚀","🐱‍🏍 "];

const randomMsg = () => {
  const msj = messages[Math.floor(Math.random() * messages.length)];
  console.info(`${msj}`);
};


module.exports = { randomMsg }