/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime: 6218 ms, faster than 25.76% of JavaScript online submissions for Sum of Even Numbers After Queries.
Memory Usage: 51 MB, less than 22.73% of JavaScript online submissions for Sum of Even Numbers After Queries.
 */
var sumEvenAfterQueries = function(nums, queries) {

    let solution = []
    let iterations = queries.length

    for (i=0; i<iterations; i++){
        nums[queries[i][1]] += queries[i][0]
        solution.push(nums.reduce(getSum, 0));
    
    function getSum(total, num) {
        if (num % 2 !== 0){
            num = 0
        }
      return total + num;
    }
}
return solution
};

sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]])