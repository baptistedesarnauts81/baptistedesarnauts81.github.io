/**
 * Compute diff between 2 dates
 * @param {Date} date1
 * @param {Date} date2
 */
export function getYearsMonthDiff(date1, date2) {
  if (date1?.isValid() && date2?.isValid()) {
    let months = date1.diff(date2, "months", true);
    const years = Math.floor(months / 12);
    months = Math.round(months % 12);
    return { years, months };
  }
}
