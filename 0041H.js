/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 146 ms, faster than 46.06% of JavaScript online submissions for First Missing Positive.
Memory Usage: 50.4 MB, less than 65.47% of JavaScript online submissions for First Missing Positive.
 */
 var firstMissingPositive = function(nums) {

    let sortedNums = nums.sort(function(a, b){return a - b}).filter(num => num > 0)

    if (sortedNums[0] !== 1) return 1

    let iterations = sortedNums.length-1

    for (i=0; i<iterations; i++){
        if (sortedNums[i] !== sortedNums[i+1] && sortedNums[i] !== sortedNums[i+1] - 1){
            return sortedNums[i] + 1
        }
    }

    return (sortedNums[iterations] + 1)
    
};

firstMissingPositive([1,2,0])