/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 166 ms, faster than 73.68% of JavaScript online submissions for Most Frequent Even Element.
Memory Usage: 47.6 MB, less than 97.37% of JavaScript online submissions for Most Frequent Even Element.
 */
 var mostFrequentEven = function(nums) {

    let evenArray = nums.filter(num => num % 2 === 0);
    let previousCount = 0
    let currentCount = 0

    if (evenArray.length === 0){
        return -1
    }

    let iterations = evenArray.length - 1
    
    evenArray.sort(function(a, b){return a - b});
    let previousMax = evenArray[0]

    for (i=0; i<iterations; i++){
        if (evenArray[i] === evenArray[i+1]){
            currentCount++
        }
        else{
            currentCount = 0
        }
        if (currentCount > previousCount){
            previousCount = currentCount
            previousMax = evenArray[i]
        }

    }

    return previousMax

};

mostFrequentEven([0,1,2,2,4,4,1])