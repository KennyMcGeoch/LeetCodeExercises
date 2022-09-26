/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 353 ms, faster than 27.96% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 59.2 MB, less than 9.92% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
 */
 var findDisappearedNumbers = function(nums) {


    let iterations = nums.length + 1; // Though it was max value that is Math.max.apply(Math, nums)
    let solution = []
    let count = 0

    nums.sort(function(a, b){return a-b})

    let numsUnique = [...new Set (nums)]

    for (i=1; i< iterations; i++){
        if (i === numsUnique[count]){
            count++
        }
        else{
            solution.push(i)
        }
    }



    return solution
    
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])