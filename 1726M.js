/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 705ms Beats 36.36%
 * Memory 91.32MB Beats 63.64%
 */
var tupleSameProduct = function(nums) {
    let tup = {}
    let ans = 0
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            tup[nums[i]*nums[j]] = (tup[nums[i]*nums[j]] || 0) + 1
        }
    }
    for (x in tup){
        if (tup[x] > 1){
            for (let i=1; i<tup[x]; i++) ans += i
        }
    }
    return ans * 8
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 296ms Beats 54.55%
 * Memory 82.36MB Beats 100.00%
 */
var tupleSameProduct = function(nums) {
    let tup = {}
    let ans = 0
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            let curr = nums[i]*nums[j]
            if (tup[curr] === undefined) tup[curr] = 1
            else ans += (tup[curr]++ * 8)
        }
    }
    return ans
};