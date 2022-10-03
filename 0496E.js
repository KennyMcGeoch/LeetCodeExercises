/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 143 ms, faster than 9.15% of JavaScript online submissions for Next Greater Element I.
 * Memory Usage: 48.3 MB, less than 6.70% of JavaScript online submissions for Next Greater Element I.
 */
 var nextGreaterElement = function(nums1, nums2) {

    let solution = []
    let testArray = []
    let tempVal = 0
    let iterations = nums1.length

    for (i=0; i<iterations; i++){
        testArray = nums2.slice(nums2.indexOf(nums1[i]) + 1)
        if (testArray.length === 0){
            solution.push(-1)
        }
        else{
            tempVal = testArray.findIndex(x => x > nums1[i])
            if (tempVal === -1){
                solution.push(-1)
            }
            else{
                solution.push(testArray[tempVal])
            }    
        }

    }
    return solution    
};

nextGreaterElement([4,1,2],[1,3,4,2])