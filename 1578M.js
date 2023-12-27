/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * Runtime: 85 ms, faster than 59.18% of JavaScript online submissions for Minimum Time to Make Rope Colorful.
 * Memory Usage: 52.6 MB, less than 57.14% of JavaScript online submissions for Minimum Time to Make Rope Colorful.
 */
var minCost = function(colors, neededTime) {
    
    let total = 0
    
    for (let i=0; i<colors.length; i++){
        if (colors[i] === colors[i+1]){
            let min = neededTime[i]
            let tempTot = min
            while (colors[i] === colors[i+1]){
                i++
                min = Math.max(min, neededTime[i])
                tempTot += neededTime[i]
            }
            total += (tempTot - min)
        }
    }
    
    return total
    
};

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * Runtime: 78 ms, faster than 81.63% of JavaScript online submissions for Minimum Time to Make Rope Colorful.
 * Memory Usage: 52.6 MB, less than 57.14% of JavaScript online submissions for Minimum Time to Make Rope Colorful.
 */
var minCost = function(colors, neededTime) {
    
    let total = 0
    
    for (let i=0; i<colors.length; i++){
        if (colors[i] === colors[i+1]){
            let min = Math.max(neededTime[i],neededTime[++i])
            total += neededTime[i] + neededTime[i-1]
            while (colors[i] === colors[i+1]){
                min = Math.max(min, neededTime[++i])
                total += neededTime[i]
            }
            total -= min
        }
    }
    
    return total
    
};