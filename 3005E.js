/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 57 ms, faster than 81.52% of JavaScript online submissions for Count Elements With Maximum Frequency.
 * Memory Usage: 51.5 MB, less than 30.57% of JavaScript online submissions for Count Elements With Maximum Frequency.
 */
var maxFrequencyElements = function(nums) {
    
    let total = {}
    
    for (let i=0; i<nums.length; i++) total[nums[i]] = (total[nums[i]] || 0) + 1
    
    let freq = Object.values(total).sort((a,b)=>b-a)
    
    
    for (let i=1; i<freq.length; i++){
        if (freq[i] !== freq[0]) return freq[0] * i
    }
    
    return nums.length
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 56 ms, faster than 84.11% of JavaScript online submissions for Count Elements With Maximum Frequency.
 * Memory Usage: 51.4 MB, less than 37.13% of JavaScript online submissions for Count Elements With Maximum Frequency.
 */
var maxFrequencyElements = function(nums) {
    
    let total = {}
    
    for (let i=0; i<nums.length; i++) total[nums[i]] = (total[nums[i]] || 0) + 1
    
    let freq = Object.values(total)
    
    let max = Math.max(...freq)
    
    let ans = 0
    for (let i=0; i<freq.length; i++) if (freq[i] === max) ans += max
    
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 53 ms, faster than 91.36% of JavaScript online submissions for Count Elements With Maximum Frequency.
 * Memory Usage: 51.5 MB, less than 30.57% of JavaScript online submissions for Count Elements With Maximum Frequency.
 */
var maxFrequencyElements = function(nums) {
    
    let total = {}
    
    for (let i=0; i<nums.length; i++) total[nums[i]] = (total[nums[i]] || 0) + 1
    
    let freq = Object.values(total)
    
    let max = freq[0]
    
    let ans = freq[0]
    for (let i=1; i<freq.length; i++){
        if (freq[i] > max){
            max = ans = freq[i]            
        }
        else if (freq[i] === max) ans += max
    }
    
    return ans
    
};