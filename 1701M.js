/**
 * @param {number[][]} customers
 * @return {number}
 * Runtime: 91 ms, faster than 91.30% of JavaScript online submissions for Average Waiting Time.
 * Memory Usage: 71.5 MB, less than 91.30% of JavaScript online submissions for Average Waiting Time.
 */
var averageWaitingTime = function(customers) {
    
    let ans = 0
    let start = customers[0][0]
    
    for (let i=0; i<customers.length; i++){
        start = Math.max(start, customers[i][0])
        start += customers[i][1]
        ans += (start - customers[i][0])
    }
    
    return ans / customers.length
    
};