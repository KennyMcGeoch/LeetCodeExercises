/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 99 ms, faster than 58.52% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 42.4 MB, less than 82.11% of JavaScript online submissions for Intersection of Two Arrays II.
 * Runtime: 68 ms, faster than 12.67% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 49.2 MB, less than 92.35% of JavaScript online submissions for Intersection of Two Arrays II.
 */
 var intersect = function(nums1, nums2) {

    let solution = []
    let iterations = nums1.length

    for (i=0; i<iterations; i++){
        if (nums2.includes(nums1[i])){
            solution.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]),1)
        }
    }

    return solution    
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 45 ms, faster than 97.11% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 51.1 MB, less than 54.77% of JavaScript online submissions for Intersection of Two Arrays II.
 */
var intersect = function(nums1, nums2) {

    let solution = []
    let hash = {}
    let hashTwo = {}
    
    for (let i=0; i<nums1.length; i++) hash[nums1[i]] = (hash[nums1[i]] || 0) + 1
    for (let i=0; i<nums2.length; i++) hashTwo[nums2[i]] = (hashTwo[nums2[i]] || 0) + 1

    for (x in hash){
        if (hashTwo[x] > 0){
            let loops = Math.min(hash[x], hashTwo[x])
            for (let i=0; i<loops; i++) solution.push(x)
        }
    }

    return solution    
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 58 ms, faster than 55.83% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 48.9 MB, less than 98.43% of JavaScript online submissions for Intersection of Two Arrays II.
 * Runtime: 43 ms, faster than 98.31% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 50.2 MB, less than 76.85% of JavaScript online submissions for Intersection of Two Arrays II.
 */
var intersect = function(nums1, nums2) {

    let solution = []
    let hash = {}
    
    for (let i=0; i<nums1.length; i++) hash[nums1[i]] = (hash[nums1[i]] || 0) + 1
    
    for (let i=0; i<nums2.length; i++){
        if (hash[nums2[i]] === undefined || hash[nums2[i]] === 0) continue
        else{
            solution.push(nums2[i])
            hash[nums2[i]]--
        }
    }

    return solution    
};