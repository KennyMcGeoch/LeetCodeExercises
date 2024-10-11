/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 * Runtime: 432 ms, faster than 11.54% of JavaScript online submissions for The Number of the Smallest Unoccupied Chair.
 * Memory Usage: 56.7 MB, less than 100.00% of JavaScript online submissions for The Number of the Smallest Unoccupied Chair.
 */
var smallestChair = function(times, targetFriend) {
    let target = times[targetFriend][0]
    times.sort((a,b)=>a[0]-b[0])
    
    let chair = []
    
    for (let i=0; i<times.length; i++){
        if (times[i][0] === target) return place(times[i][0], times[i][1])
        else place(times[i][0], times[i][1])
    }
    
    function place(num1, num2){
        for (let j=0; j<chair.length; j++){
            if (chair[j][1] <= num1){
                chair[j] = [num1, num2]
                return j
            }
        }
        chair.push([num1,num2])
        return chair.length-1
    }
};