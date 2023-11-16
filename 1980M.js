/**
 * @param {string[]} nums
 * @return {string}
 * Runtime: 51 ms, faster than 65.88% of JavaScript online submissions for Find Unique Binary String.
 * Memory Usage: 43.5 MB, less than 24.71% of JavaScript online submissions for Find Unique Binary String.
 */
var findDifferentBinaryString = function(nums) {
    let hash = {}
    for (let i=0; i<nums.length; i++){
        hash[parseInt(nums[i],2)] = true
    }
    let max = 2 ** nums[0].length
    while (max){
        if (hash[--max] === undefined){
            let ans = max.toString(2)
            while (ans.length < nums[0].length) ans = "0" + ans
            return ans
        }
    }    
};

/**
 * @param {string[]} nums
 * @return {string}
 * Runtime: 35 ms, faster than 100.00% of JavaScript online submissions for Find Unique Binary String.
 * Memory Usage: 41.9 MB, less than 80.00% of JavaScript online submissions for Find Unique Binary String
 */
var findDifferentBinaryString = function(nums) {
    let ans = ""
    let target = nums[0].length
    let count = 0
    let temp = [...nums]
    while (ans.length < target){
        let nums = 0
        for (let i=0; i<temp.length; i++){
            if (temp[i][count] === "1") nums++
            else nums--
        }
        if (nums > 0) ans += "0"
        else ans += "1"
        temp = temp.filter((a)=> a[count] === ans[ans.length-1])
        count++
    }
    return ans
};