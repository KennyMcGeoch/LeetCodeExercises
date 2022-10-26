/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Runtime: 94 ms, faster than 66.19% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 * Memory Usage: 43.2 MB, less than 19.13% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
 */
 var twoSum = function(numbers, target) {

    let min = 0
    let max = numbers.length-1

    while (min !== max){
        total = numbers[min] + numbers[max]
        if (total === target) return [min+1,max+1]
        else if (total > target) max--
        else min++
    }
    
};