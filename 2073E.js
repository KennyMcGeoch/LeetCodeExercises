/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 * Runtime: 38 ms, faster than 100.00% of JavaScript online submissions for Time Needed to Buy Tickets.
 * Memory Usage: 49.3 MB, less than 31.69% of JavaScript online submissions for Time Needed to Buy Tickets.
 */
var timeRequiredToBuy = function(tickets, k) {
    
    return tickets.reduce((a,b)=> a + Math.min(b,tickets[k]),0) - tickets.reduce((a,b,c)=> a + (b >= tickets[k] && c > k),0)
};

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 * Runtime: 55 ms, faster than 57.38% of JavaScript online submissions for Time Needed to Buy Tickets.
 ( Memory Usage: 48.8 MB, less than 76.50% of JavaScript online submissions for Time Needed to Buy Tickets.
 */
var timeRequiredToBuy = function(tickets, k) {
    
    return tickets.reduce((a,b,c)=> a + Math.min(b,tickets[k] - (c > k)),0)
}



/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 * Runtime: 41 ms, faster than 98.91% of JavaScript online submissions for Time Needed to Buy Tickets.
 * Memory Usage: 48.8 MB, less than 76.50% of JavaScript online submissions for Time Needed to Buy Tickets.
 */
var timeRequiredToBuy = function(tickets, k) {
     
    let ans = 0
    for (let i=0; i<=k; i++) ans += Math.min(tickets[i], tickets[k])
    for (let i=k+1; i<tickets.length; i++) ans  += Math.min(tickets[i], tickets[k]-1)
    
    return ans
};