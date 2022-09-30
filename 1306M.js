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

canReach([3,0,2,1,2],2)