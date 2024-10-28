/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 308 ms, faster than 100.00% of JavaScript online submissions for Longest Square Streak in an Array.
 * Memory Usage: 91.2 MB, less than 7.69% of JavaScript online submissions for Longest Square Streak in an Array.
 */
var longestSquareStreak = function(nums) {
    let hash = {}
    let ans = 0
    
    for (let i=0; i<nums.length; i++)hash[nums[i]] = true
    
    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]] === false) continue
        let len = 1
        let curr = nums[i]
        while(hash[Math.sqrt(curr)]){
            curr = Math.sqrt(curr)
            hash[curr] = false
            len++
        }
        curr = nums[i]
        while(hash[curr ** 2]){
            curr **= 2
            hash[curr] = false
            len++
        }
        ans = Math.max(ans,len)
    }
    if (ans < 2) return -1
    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 39 ms, faster than 100.00% of JavaScript online submissions for Longest Square Streak in an Array.
 * Memory Usage: 65.6 MB, less than 84.62% of JavaScript online submissions for Longest Square Streak in an Array.
 */
var longestSquareStreak = function(nums) {
    let hash = new Set(nums)
    let ans = 0

    for (let i=0; i<nums.length; i++){
        let len = 1
        let curr = nums[i] ** 2
        while(hash.has(curr)){
            curr **= 2
            len++
        }
        ans = Math.max(len,ans)
    }
    if (ans < 2) return -1
    return ans
};