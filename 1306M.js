/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * Runtime: 139 ms, faster than 19.21% of JavaScript online submissions for Jump Game III.
 * Memory Usage: 47.8 MB, less than 80.00% of JavaScript online submissions for Jump Game III.
 */
 var canReach = function(arr, start) {
 
    let canJumpTo = {[start] : true}
    let iterations = arr.length
    let changes = 1

    while (changes !== 0){
        changes = 0
        for (i=0; i<iterations; i++){
            if (canJumpTo[i] === true){
                if (canJumpTo[i-arr[i]] === undefined && i-arr[i] >= 0){
                    canJumpTo[i-arr[i]] = true
                    changes++        
                }
                if (canJumpTo[i+arr[i]] === undefined && i+arr[i] < iterations){
                    canJumpTo[i+arr[i]] = true
                    changes++        
                }
                if (canJumpTo[i] === true && arr[i] === 0)
                {
                    return true
                }
            }
        }
    }
    return false
    
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * Runtime 1ms Beats 97.52%
 * Memory 66.36MB Beats 19.01%
 */
 var canReach = function(arr, start) {
 
    let ans = false
    let visited = new Set()

    function recur(num){
        if (ans) return
        if (visited.has(num)) return
        else visited.add(num)
        if (arr[num] === 0){
            ans = true
            return
        }
        if (num >= arr[num]) recur(num-arr[num])
        if (arr.length > num+arr[num]) recur(num+arr[num])
    }
    recur(start)

    return ans
    
};