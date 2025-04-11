const moment = require("moment");

const now = moment();
console.log(`Today is ${now.format("MMMM D, YYYY")}`);

const birthday = moment("1976-11-26", "YYYY-MM-DD");
const years = now.diff(birthday, 'years');
console.log(`${years} years ago`);
