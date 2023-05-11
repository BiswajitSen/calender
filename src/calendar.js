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

  #addDays(monthPage) {
    let nextDay = this.#firstDay();

    return this.#days().reduce(function (monthPage, day) {
      const today = days[(nextDay) % 7];
      monthPage += (day + '').padStart(2).padEnd(3);

      if (today === 'Sa') {
        monthPage += '\n';
      }
      nextDay++;

      return monthPage;
    }, monthPage);
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