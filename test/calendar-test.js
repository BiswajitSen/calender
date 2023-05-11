const {describe, it} = require('node:test')
const {deepStrictEqual} = require('assert')
const {Calendar} = require('../src/calendar.js')

describe('cal', function() {
  it('Should create a calendars first row.', function() {
    const thisMonthsCalendar = new Calendar(new Date());

    const actual = thisMonthsCalendar.createWeek();
    const expected = [' ', 1, 2, 3, 4, 5, 6];
    deepStrictEqual(actual, expected);
  });
});
