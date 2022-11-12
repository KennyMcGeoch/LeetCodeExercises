/*
* Runtime: 367 ms, faster than 73.26% of JavaScript online submissions for Number of Recent Calls.
* Memory Usage: 57 MB, less than 48.13% of JavaScript online submissions for Number of Recent Calls.
*/
var RecentCounter = function() {
    
    calls = []
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    calls.push(t)
    while(calls[0] < t-3000){
        calls.shift()
    }
    return calls.length 
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */