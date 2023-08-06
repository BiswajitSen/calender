const { Month } = require('./src/calendar');

const main = function () {
  const year = process.argv[2] || 2021;
  const months = [
    'jan',
    'feb',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  calender = months.map((_, index) => new Month(index + 1, year));
  calender.forEach((month) => console.log(month.renderMonth(), '\n'));
};

main();
