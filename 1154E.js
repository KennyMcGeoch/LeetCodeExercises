/**
 * @param {string} date
 * @return {number}
 * Runtime: 297 ms, faster than 75.47% of JavaScript online submissions for Day of the Year.
 * Memory Usage: 50.8 MB, less than 91.19% of JavaScript online submissions for Day of the Year.
 */
 var dayOfYear = function(date) {

    const months = [0,31,28,31,30,31,30,31,31,30,31,30,31]

    let year = parseInt(date.slice(0,4))
    let month = parseInt(date.slice(5,7))
    let day = parseInt(date.slice(8))
    let gregorian = 0

    if (month > 2){
        if (year % 100 === 0){
            if (year % 400 === 0)gregorian++
        }
        else{
            if (year % 4 === 0)gregorian++
        }

    }

    for (i=1; i<month; i++){
        gregorian += months[i]
    }

    return gregorian += day    
};

dayOfYear("2019-01-09")