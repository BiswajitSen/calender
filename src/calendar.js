const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

class Month {
  #month
  #year

  constructor(month, year) {
    this.#month = month;
    this.#year = year;
  };

  #startingDateOfMonth() {
    return new Date(this.#year, this.#month - 1, 1);
  };

  #createCalendarMonth() {
    const calendarMonth = [];
    const date = this.#startingDateOfMonth();

    const currentMonth = date.getMonth();
    const nextDate = date;

    while (nextDate.getMonth() === currentMonth) {
      calendarMonth.push(nextDate.getDay());
      nextDate.setDate(nextDate.getDate() + 1);
    }

    return calendarMonth;
  };

  #days() {
    return Object.values(days).join(' ');
  };

  #createHeader() {
    const month = this.#month - 1;
    let header = `\t${months[month]} ${this.#year}\n `;
    header += this.#days() + '\n';

    return header;
  };

  #addLeadingSpace(count) {
    const leadingSpaces = count * 3;
    return ' '.repeat(leadingSpaces);
  };

  #dateSheet(calendarMonthData) {
    let nextDate = 0;

    return calendarMonthData.reduce(function (acc, curr) {
      if (curr === 0) {
        acc += '\n';
      }
      nextDate++;
      return acc + (' ' + nextDate).padStart(2).padEnd(3);
    }, ' ');
  };


  renderMonth() {
    const calendarMonthData = this.#createCalendarMonth();
    const spaces = calendarMonthData[0];
    let calendarMonth = this.#createHeader();
    calendarMonth += this.#addLeadingSpace(spaces);
    calendarMonth += this.#dateSheet(calendarMonthData);

    return calendarMonth;
  }

}

exports.Month = Month;