//Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    if(year <= 0)
        return "Negative not Allow ";
    else if(year <= 100)
        return 1;
    else if(year % 100 == 0 )
        return parseInt(year/100);
    else 
        return parseInt(year/100) +1;
}

// second solution
// function centuryFromYear(year) {
//   let centuryCount = 0;
//   while (year > 0){
//     year = year - 100;
//     centuryCount = centuryCount + 1;
//   }
//   return centuryCount;
// }
