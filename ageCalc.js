function ageCalculator(dob) {
  let MS = {
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
    weeks: 1000 * 60 * 60 * 24 * 7,
    years: 1000 * 60 * 60 * 24 * 365,
  };
  let now = Date.now();
  let dobTime = new Date(dob).getTime();

  let yearsDiff = Math.floor((now - dobTime) / MS.years);
  // remove the years and calculate the extra days from remainder
  let daysDiff = Math.floor((now - dobTime - yearsDiff * MS.years) / MS.days);

  return `${yearsDiff} years, ${daysDiff} days`;
}

console.log(ageCalculator('2005-02-14')); // February 14, 2005 - YouTube DOB
