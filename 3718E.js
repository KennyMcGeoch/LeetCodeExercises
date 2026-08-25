/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.82MB Beats 94.12%
 */
var missingMultiple = function(nums, k) {
    let vals = new Set()
    nums.forEach((a)=>vals.add(a))

    for (let i=k; i < 100000000000; i+=k){
        if (vals.has(i) === false) return i
    }
};