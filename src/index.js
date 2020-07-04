const messages = ["Imanol", "Ana", "Oscar", "Jessica", "Diego"];

const randomMsg = () => {
  const msj = messages[Math.floor(Math.random() * messages.length)];
  console.info(`${msj}`);
};


module.exports = { randomMsg }