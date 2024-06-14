/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 2210 ms, faster than 5.09% of JavaScript online submissions for Minimum Increment to Make Array Unique.
 * Memory Usage: 89.2 MB, less than 5.09% of JavaScript online submissions for Minimum Increment to Make Array Unique.
 */
var minIncrementForUnique = function(nums) {
    
    let hash = {}
    let ans = 0
    
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    
    let seen = true
    while(seen){
          seen = false
          for (x in hash){
            if (hash[x] < 2) continue
            let count = 1
            let num = Number(x) + 1
            while (hash[x] > 1){
                if (hash[num] === undefined) seen = true
                hash[num] = (hash[num++] || 0) + 1
                ans += count++
                hash[x]--
            }    
        }          
    }    
    
    return ans    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 189 ms, faster than 47.46% of JavaScript online submissions for Minimum Increment to Make Array Unique.
 * Memory Usage: 70.7 MB, less than 5.09% of JavaScript online submissions for Minimum Increment to Make Array Unique.
 */
var minIncrementForUnique = function(nums) {
    
    let hash = {}
    let ans = 0
    
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    
         for (x in hash){
            if (hash[x] < 2) continue
            else{
                let num = Number(x)
                while(hash[num] > 1){
                    ans += hash[num] - 1
                    hash[num+1] = (hash[num+1] || 0) + hash[num] - 1
                    hash[num++] = 1
                }
            }  
        }    
    
    return ans
    
};