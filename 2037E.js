/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 * Runtime: 47 ms, faster than 98.48% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.
 * Memory Usage: 51.3 MB, less than 23.86% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.
 */
var minMovesToSeat = function(seats, students) {
    
    let ans = 0
    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    
    for (let i=0; i<seats.length; i++) ans += Math.abs(seats[i] - students[i])
    
    return ans
    
};