/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 224 ms, faster than 52.00% of JavaScript online submissions for Count Nice Pairs in an Array.
 * Memory Usage: 67 MB, less than 56.00% of JavaScript online submissions for Count Nice Pairs in an Array.
 */
var countNicePairs = function(nums) {
    
    function rev(num){
        return Number(num.toString().split('').reverse().join(''))
    }
    for (let i=0; i<nums.length; i++){
        nums[i] = nums[i] - rev(nums[i])
    }
    nums.sort((a,b)=>a-b)
    let ans = 0
    let count = 1
    for (let i=1; i<nums.length; i++){
        if (nums[i] === nums[i-1]){
            ans += count++
            ans %= 1000000007
        }
        else count = 1
    }
    
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 109 ms, faster than 92.00% of JavaScript online submissions for Count Nice Pairs in an Array.
 * Memory Usage: 51.6 MB, less than 92.00% of JavaScript online submissions for Count Nice Pairs in an Array.
 */
var countNicePairs = function(nums) {
    
    function rev(num){
        let rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }
    for (let i=0; i<nums.length; i++){
        nums[i] = nums[i] - rev(nums[i])
    }
    nums.sort((a,b)=>a-b)
    let ans = 0
    let count = 1
    for (let i=1; i<nums.length; i++){
        if (nums[i] === nums[i-1]){
            ans += count++
            ans %= 1000000007
        }
        else count = 1
    }
    
    return ans
    
};