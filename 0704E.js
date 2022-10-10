/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime: 121 ms, faster than 16.69% of JavaScript online submissions for Binary Search.
 * Memory Usage: 45.2 MB, less than 31.01% of JavaScript online submissions for Binary Search.
 */
 var search = function(nums, target) {

    let iterations = nums.length
    let searched = {}

    for (i=0; i<iterations;){
        if (nums[i] === target)return i
        else if (searched[i] === true) return -1
        else if (nums[i] < target){
            searched[i] = true
            i += parseInt(((iterations-i)/2))

        }
        else{
            searched[i] = true
            i--
        }
        if (i < 0)return -1
    }

    return -1
    
};

search([-1,0,3,5,9,12],9)