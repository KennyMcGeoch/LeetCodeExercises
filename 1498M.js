/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime 109ms Beats 24.39%
 * Memory 65.64MB Beats 98.78%
 */
var numSubseq = function(nums, target) {
    let ans = 0
    let targ = 0
    let right = nums.length - 1
    let left = 0
    let power = new Array(nums.length+1)
    power[0] = 1
    for (let i=1; i<power.length; i++) power[i] = power[i-1] * 2 % 1000000007
    nums.sort((a,b)=>a-b)
    while(left <= right){
        targ = target - nums[left]
        while(nums[right] > targ) right--
        if (right >= left) ans += power[right-left]
        left++
        ans %= 1000000007
    }

    return ans % 1000000007
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime 94ms Beats 92.68%
 * Memory 66.09MB Beats 98.78%
 */
let power = new Array(100001)
power[0] = 1
for (let i=1; i<power.length; i++) power[i] = power[i-1] * 2 % 1000000007
var numSubseq = function(nums, target) {
let ans = 0
let targ = 0
let right = nums.length - 1
let left = 0
nums.sort((a,b)=>a-b)
while(left <= right){
    targ = target - nums[left]
    while(nums[right] > targ) right--
    if (right >= left) ans += power[right-left]
    left++
    ans %= 1000000007
}

return ans % 1000000007
};