/* You'll be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. You'll be expected to parse the given string and produce a human readable date.
Expected output: December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/
var talkingCalendar = function(date) {

  // Make arrays for months
  var months = [["01","January"], ["02","February"],
    ["03","March"], ["04","April"], ["05","May"], ["06","June"],
    ["07","July"], ["08","August"], ["09","September"], ["10","October"],
    ["11","November"], ["12","December"]];
  // Make an array from the string Date
  var dateA = [];
  dateA = Array.from(date);
  // Make string vars to store year, month, day and the full newDate
  var year = "";
  var month = "";
  var day = "";
  var newDate = "";
  // Iterate through dateA
  console.log("dateA length is " + dateA.length);
  for (var i = 0; i < dateA.length; i++){
  //  if (i <= 3) {
    //  year = year + dateA[i];
    console.log("stepping through the date; at " + dateA[i]);
  //  };
    if (i = 5); {
      //month = dateA[i] + dateA[i];
      console.log("month " + dateA[i]);
    };
/*    if (i >= 8); {
      day = day + dateA[i];
    };*/
 };
  //console.log("The year is " + year);
  //console.log("The month is " + month);
  // Build the month from dateA
};

talkingCalendar("2017/12/02");
//talkingCalendar("2007/11/11");
//talkingCalendar("1987/08/24");
