const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

class Month {
  #month;
  #year;

  constructor(month, year) {
    this.#month = month;
    this.#year = year;
  };

  #firstDay() {
    return new Date(this.#year, this.#month - 1).getDay();
  };

  #totalDaysInMonth() {
    return 32 - new Date(this.#year, this.#month - 1, 32).getDate();
  };

  #days() {
    const totalDays = this.#totalDaysInMonth();
    const days = new Array(totalDays).fill().map(function (_, index) {
      return index + 1;
    });

    return days;
  };

  #header() {
    const month = months[this.#month - 1];
    return `${month} ${this.#year}`;
  };

  #weekDays() {
    return Object.values(days).join(' ');
  };

  #leadingSpaces() {
    return ' '.repeat(this.#firstDay() * 3);
  };

  #isSunday(day) {
    const date = new Date(this.#year, this.#month - 1, day);
    return date.getDay() === 0;
  }

  #weekToString(week) {
    return week.map(function (day) {
      return day.toString().padStart(2);
    }).join(' ');
  };

  #weeksAsStr(weeks) {
    return weeks.map(this.#weekToString).join('\n');
  }

  #addDays(monthPage) {
    let nextDay = this.#firstDay();

    const self = this;
    const weeks = this.#days().reduce(function (week, day) {
      if (self.#isSunday(day)) {
        week.push([]);
      }
      const currentWeek = week[week.length - 1];
      currentWeek.push(day);
      return week;
    }, [[]]);

    return monthPage + this.#weeksAsStr(weeks);
  };

  renderMonth() {
    let monthPage = `\t${this.#header()}\n`;
    monthPage += this.#weekDays() + '\n';
    monthPage += this.#leadingSpaces();
    monthPage = this.#addDays(monthPage);

    return monthPage;
  };

}

exports.Month = Month;