/**
 * @param {string} corridor
 * @return {number}
 * Runtime: 90 ms, faster than 100.00% of JavaScript online submissions for Number of Ways to Divide a Long Corridor.
 * Memory Usage: 51.8 MB, less than 75.00% of JavaScript online submissions for Number of Ways to Divide a Long Corridor.
 */
var numberOfWays = function(corridor) {
    
    let ans = 1
    let count = 0
    let start = begin()
    
    function begin(){
        let p = 0
        for (let i=0; i<corridor.length; i++){
            if (corridor[i] === "S"){
                if (++p == 2) return i
            }
        }
        return ans = 0
    }
    
    if (ans === 0) return ans
    let p = 0
    for (let i=start+1; i<corridor.length; i++){
        if (corridor[i] === "S"){
            if (p === 0){
                ans *= (count+1)
                ans %= 1000000007
                count = 0
                p++
            }
            else p = 0
        }
        else if (p===0) count++
    }
    if (p===1) return 0
    
    return ans
};