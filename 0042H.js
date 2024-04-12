/**
 * @param {number[]} height
 * @return {number}
 * Runtime: 63 ms, faster than 45.94% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 52.4 MB, less than 34.90% of JavaScript online submissions for Trapping Rain Water.
 */
var trap = function(height) {
    
    let left = []
    let right = new Array(height.length)
    let max = 0
    let index = 0
    let ans = 0
    
    for (let i=0; i<height.length; i++){
        if (height[i] > max){
            max = height[i]
            index = i
        }
        left.push(max)
    }
    max = 0
    for (let i=height.length-1; i>-1; i--){
        if (height[i] > max){
            max = height[i]
            index = i
        }
        right[i] = max
    }
    for(let i=index+1; i<height.length; i++) ans += (right[i]-height[i])
    for(let i=0; i<index; i++) ans += (left[i] - height[i])
    
    return ans    
    
};

/**
 * @param {number[]} height
 * @return {number}
 * Runtime: 52 ms, faster than 87.30% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 51.9 MB, less than 38.99% of JavaScript online submissions for Trapping Rain Water.
 */
var trap = function(height) {
    
    let max = Math.max(...height)
    let index = height.findIndex((a)=>a === max)
    let ans = 0
    let curr = 0
    
    for (let i=0; i<index; i++){
        curr = Math.max(curr, height[i])
        ans += (curr-height[i])
    }
    
    curr = 0
    
    for (let i=height.length-1; i>index; i--){
        curr = Math.max(curr, height[i])
        ans += (curr-height[i])
    }
    
    return ans    
};