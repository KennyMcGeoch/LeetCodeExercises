/**
 * @param {number[]} temperatures
 * @return {number[]}
 * Runtime: 202 ms, faster than 88.78% of JavaScript online submissions for Daily Temperatures.
 * Memory Usage: 73 MB, less than 35.10% of JavaScript online submissions for Daily Temperatures.
 */
var dailyTemperatures = function(temperatures) {
    
    let ans = new Array(temperatures.length).fill(0)
    let stack = []
    let cont = true
    
    for (let i=temperatures.length-1; i > -1; i--){
        while(cont){
            if (stack.length){
                if (stack[stack.length-1][0] <= temperatures[i]) stack.pop()
                else{
                    ans[i] = stack[stack.length-1][1] - i
                    cont = false
                }
                
            }
            else cont = false
        }
        stack.push([temperatures[i],i])
        cont = true
    }
    
    return ans
    
};