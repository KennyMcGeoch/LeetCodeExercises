/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 * Runtime: 84 ms, faster than 99.36% of JavaScript online submissions for Minimum Amount of Time to Collect Garbage.
 * Memory Usage: 56.7 MB, less than 88.50% of JavaScript online submissions for Minimum Amount of Time to Collect Garbage.
 */
var garbageCollection = function(garbage, travel) {
    
    function findLast(char){
        for (let i=garbage.length-1; i>0; i--) if (garbage[i].includes(char))return ans += travel[i-1]
        return
    }
    let ans = 0
    
    for (let i=1; i<travel.length; i++) travel[i] += travel[i-1]
    
    findLast("P")
    findLast("G")
    findLast("M")  
    
    for (let i=0; i<garbage.length; i++){
        ans += garbage[i].length
    }
    
    return ans
    
};