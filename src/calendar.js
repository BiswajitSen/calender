const { validateHeaderName } = require("http");

const months = {
  1: 'JAN',
  2: 'FEB',
  3: 'MAR',
  4: 'APR',
  5: 'MAY',
  6: 'JUNE',
  7: 'JULY',
  8: 'AUG',
  9: 'SEPT',
  10: 'OCT',
  11: 'NOV',
  12: 'DEC'
};

const days = {
  0: 'Su',
  1: 'Mo',
  2: 'Tu',
  3: 'We',
  4: 'Th',
  5: 'Fr',
  6: 'Sa'
};

class Calendar {
  #date;
  #currentMonth() {
    const month = this.#date.getMonth();
    return months[month];
  };

  #currentYear() {
    return this.#date.getFullYear();
  };

  constructor(date) {
    this.#date = date;
  };

  #createHeader() {
    let header = `\t${this.#currentMonth()} `;
    header += this.#currentYear();

    return header;
  };

  #days() {
    return Object.values(days).join(' ');
  };

  #getStartingDay() {
    const _tmp = new Date();
    const firstDay = new Date(_tmp.setUTCDate(1)).getDay();
    return days[firstDay];
  };

  #toString(value) {
    return value + '';
  };

  #dateTable() {
    const dayTable = new Array(31);
    dayTable.push('\n');
    const firstDayOfMonth = this.#getStartingDay();
    let day = 0;
    const newLine = '\n';
    while (days[day] !== firstDayOfMonth) {
      console.log(days[day], firstDayOfMonth);
      dayTable.push('  ');
      day++;
    }

    for (let i = 1; i <= 30; i++, day++) {
      if (day % 7 === 0) {
        dayTable.push(newLine);
      }
      const currentDay = this.#toString(i);
      dayTable.push(currentDay.padStart(Math.max(2, currentDay.length)));
    }

    return dayTable.join(' ');
  };

  renderCalendar() {
    let calendar = this.#createHeader() + '\n ';
    calendar += this.#days();
    calendar += this.#dateTable();
    return calendar;
  };
}

exports.Calendar = Calendar;
