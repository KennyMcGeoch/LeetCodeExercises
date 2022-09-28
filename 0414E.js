/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 70 ms, faster than 92.00% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 43.8 MB, less than 67.34% of JavaScript online submissions for Third Maximum Number.
 */
 var thirdMax = function(nums) {

    let sortedNums = nums.sort(function(a, b){return b-a})
        
    let numsSet = new Set (sortedNums)
    const [firstElement, secondElement, thirdElement] = numsSet
    
    if (numsSet.size < 3){
           
        return firstElement
        }

    return thirdElement
    
};