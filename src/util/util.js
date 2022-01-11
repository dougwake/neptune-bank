export const formatShortDate = function (date) {

  let D = new Date(date)

  let monthNames = ["Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"];

  let day = D.getDate() + 1;

  let monthIndex = D.getMonth();
  let monthnum = monthIndex + 1
  let monthName = monthNames[monthIndex];

  let year = D.getFullYear();

  // return `${day}-${monthName}-${year}`;
  return `${year}/${monthnum}/${day}`
}
