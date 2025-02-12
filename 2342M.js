/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 97ms Beats 41.67%
 * Memory 65.69MB Beats 46.43%
 */
var maximumSum = function(nums) {
    let hash = new Array(83).fill(0)
    let val = -1

    for (let i=0; i<nums.length; i++){
        let curr = dig(nums[i])
        if (hash[curr]) hash[curr].push(nums[i])
        else hash[curr] = [nums[i]] 
    }

    function dig(num){
        let ans = 0
        while(num){
            ans += num % 10
            num -= num % 10
            if (num > 9) num /= 10
            else return ans
        }
    }

    for (let i=0; i<hash.length; i++){
        if (hash[i] && hash[i].length > 1){
            hash[i].sort((a,b)=>b-a)
            val = Math.max(val, hash[i][0] + hash[i][1])
        }
    }

    return val
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 24ms Beats 100.00%
 * Memory 62.41MB Beats 60.71%
 */
var maximumSum = function(nums) {
    let hash = new Array(83).fill(0)
    let val = -1

    for (let i=0; i<nums.length; i++){
        let curr = dig(nums[i])
        if (hash[curr]){
            val = Math.max(val, nums[i] + hash[curr])
            hash[curr] = Math.max(hash[curr], nums[i])
        }
        else hash[curr] = nums[i] 
    }

    function dig(num){
        let ans = 0
        while(num){
            ans += num % 10
            num = Math.floor(num/10)
        }
        return ans
    }

    return val
};