/*
* Runtime: 710 ms, faster than 29.94% of JavaScript online submissions for Number of Recent Calls.
* Memory Usage: 55.5 MB, less than 67.38% of JavaScript online submissions for Number of Recent Calls.*/
var RecentCounter = function() {
    
    calls = []
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    calls.push(t)
    recentCalls = calls.findIndex((a)=> a >= t-3000)
    return calls.length - recentCalls
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */