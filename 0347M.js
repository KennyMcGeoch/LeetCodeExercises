/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime: 87 ms, faster than 27.19% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 44.8 MB, less than 79.83% of JavaScript online submissions for Top K Frequent Elements.
 */
var topKFrequent = function(nums, k) {
    
    let loop = nums.length
    if (k === loop) return nums
    let count = {}
    
    for (i=0; i<loop; i++){
        if (count[nums[i]] === undefined){
            count[nums[i]] = 1
        }
        else count[nums[i]]++
    }
    
    let maxVal = Object.values(count).sort((a,b)=>b-a)
    let ans = []
    let target = maxVal[k-1]
    for (x in count){
        if (count[x] >= target){
            ans.push(x)
            if (ans.length === k)return ans
        }
    }    
    return ans    
};