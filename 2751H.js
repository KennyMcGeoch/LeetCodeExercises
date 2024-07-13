/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 * Runtime: 287 ms, faster than 46.67% of JavaScript online submissions for Robot Collisions.
 * Memory Usage: 89.5 MB, less than 40.00% of JavaScript online submissions for Robot Collisions.
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    
    let arr = []
    
    for (let i=0; i<positions.length; i++){
        arr.push([positions[i],healths[i],directions[i], i])
    }
    arr.sort((a,b)=>a[0]-b[0])
    let stack = [arr[0]]
    
    for (let i=1; i<arr.length; i++){
        if (arr[i][2] === "L"){
            while (stack.length && stack[stack.length-1][2] === "R" && arr[i][1] > 0){
                if (arr[i][1] > stack[stack.length-1][1]){
                    stack.pop()
                    arr[i][1]--
                }
                else if (arr[i][1] === stack[stack.length-1][1]){
                    stack.pop()
                    arr[i][1] = 0
                }
                else{
                    stack[stack.length-1][1]--
                    arr[i][1] = 0
                }
            }
            if (arr[i][1] > 0) stack.push(arr[i])
        }
        else stack.push(arr[i])
    }
    let ans = []
    stack.sort((a,b)=>a[3]-b[3])
    for (let i=0; i<stack.length; i++) ans.push(stack[i][1])
    
    return ans
    
};