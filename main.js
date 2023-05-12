const { Month } = require('./src/calendar');

const main = function () {
  const jan = new Month(1, 2023);
  console.log(jan.renderMonth());
}

main();