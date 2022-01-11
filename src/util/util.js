export const formatShortDate = function(date) {

    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    
    let day = date.getDate() + 1;
    
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = date.getFullYear();
    
    return `${day}-${monthName}-${year}`;
  }
