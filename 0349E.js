/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 100 ms, faster than 51.89% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 42.4 MB, less than 86.60% of JavaScript online submissions for Intersection of Two Arrays.
 * Runtime: 44 ms, faster than 96.87% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 49.1 MB, less than 71.02% of JavaScript online submissions for Intersection of Two Arrays.
 */
 var intersection = function(nums1, nums2) {

    let solution = []
    let iterations = nums1.length

    for (i=0; i<iterations; i++){
        if (nums2.includes(nums1[i]) && !(solution.includes(nums1[i]))){
            solution.push(nums1[i])
        }
    }

    return solution  
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 42 ms, faster than 98.43% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 50.8 MB, less than 24.85% of JavaScript online submissions for Intersection of Two Arrays.
 */
var intersection = function(nums1, nums2) {

    let solution = []
    let arrOne = new Set()
    let arrTwo = new Set()
    for (let i=0; i<nums1.length; i++) arrOne.add(nums1[i])
    for (let i=0; i<nums2.length; i++) arrTwo.add(nums2[i])
    arrOne.forEach((a)=> {
        if (arrTwo.has(a))solution.push(a)
    })

    return solution  
};

