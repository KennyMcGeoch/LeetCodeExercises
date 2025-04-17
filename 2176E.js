/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 1ms Beats 96.14%
 * Memory 55.16MB Beats 60.09%
 */
var countPairs = function(nums, k) {
    let arr = new Array(101)
    let ans = 0

    for (let i=0; i<nums.length; i++){
        if (arr[nums[i]] === undefined) arr[nums[i]] = [i]
        else{
            for (let j=0; j<arr[nums[i]].length; j++){
                if ((arr[nums[i]][j] * i) % k === 0) ans++
            }
            arr[nums[i]].push(i)
        }
    }

    return ans
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 1ms Beats96.14%
 * Memory 55.26MB Beats 58.37%

 */
var countPairs = function(nums, k) {
    let ans = 0

    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i] === nums[j]){
                if ((i*j) % k === 0) ans++
            }
        }
    }

    return ans
};