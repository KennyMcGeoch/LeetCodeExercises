/**
 * @param {number[][]} nums
 * @return {number[]}
 * Runtime: 320 ms, faster than 5.97% of JavaScript online submissions for Smallest Range Covering Elements from K Lists.
 * Memory Usage: 59.7 MB, less than 68.66% of JavaScript online submissions for Smallest Range Covering Elements from K Lists.
 */
var smallestRange = function(nums) {
    
    let count = new Array(nums.length).fill(0)
    
    let total = nums.length * -1
    
    let hash = {}
    
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums[i].length; j++){
            if (hash[nums[i][j]] === undefined) hash[nums[i][j]] = [i]
            else hash[nums[i][j]].push(i)
        }
    }
    nums = nums.flat()
    nums.sort((a,b)=>a - b)
    let diff = Infinity
    let min = 0
    
    let left = 0
    let right = 0
    
    while(right < nums.length){
        while (total && right < nums.length){
            hash[nums[right]].forEach((a)=> {
                if (count[a]++ === 0) total++ 
            })                
            right++
        }
        while (total === 0){
            hash[nums[left]].forEach((a)=> {
                if (count[a]-- === 1) total-- 
            })                
            left++
        }
        if (diff > nums[right-1] - nums[left-1]){
            diff = nums[right-1] - nums[left-1]
            min = nums[left-1]
        }
    }

    return [min, min+diff]
};