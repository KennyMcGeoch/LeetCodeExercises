/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 32ms Beats 100.00%
 * Memory 70.82MB Beats 100.00%
 */
var maximumLength = function(nums) {
    let one = new Set()
    let two = new Set()
    let ones = 0
    let ans = 0

    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1) ones++
        else if (one.has(nums[i])) two.add(nums[i])
        else one.add(nums[i])
    }

    one.forEach((a)=> ans = Math.max(ans, calc(a)))

    function calc(num){
        let curr = 0
        while(two.has(num)){
            curr++
            num *= num
        }
        if (one.has(num)) return (curr * 2) + 1
        else return (curr * 2) - 1
    }
    if (ones % 2 === 1) ans = Math.max(ans, ones)
    else ans = Math.max(ans, ones-1)

    return ans
};