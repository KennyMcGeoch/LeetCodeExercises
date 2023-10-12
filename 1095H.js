/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 * Runtime: 37 ms, faster than 98.41% of JavaScript online submissions for Find in Mountain Array.
 * Memory Usage: 42.1 MB, less than 69.84% of JavaScript online submissions for Find in Mountain Array.
 */
var findInMountainArray = function(target, mountainArr) {
    
    let max = mountainArr.length() - 1
    let min = 0
    let mid = Math.floor((min+max)/2)
    let minVal = mountainArr.get(0)
    if (minVal === target) return 0
    let answer = -1

    function findPeak(mini, curr, maxi){
        let temp = mountainArr.get(curr)
        if (mountainArr.get(curr-1) > temp) return findPeak(mini, Math.floor((curr+mini)/2), curr-1)
        else if (mountainArr.get(curr+1) > temp) return findPeak(curr+1, Math.floor((curr+maxi)/2), maxi)
        else return [curr, temp]
    }
    
    function binarySearch(mini,curr,maxi){
        let temp = mountainArr.get(curr)
        if (temp === target){
            answer = curr
            return
        }
        else if (mini >= maxi) {
            if (mountainArr.get(mini) === target) answer = mini
            return -1
        }
        else if (temp < target) return binarySearch(curr+1, Math.floor((curr+maxi)/2),maxi)
        else if (temp > target) binarySearch(mini, Math.floor((curr+mini)/2),curr-1)
        else return -1
    }
    
    function binarySearchMin(mini,curr,maxi){
        let temp = mountainArr.get(curr)
        if (temp === target){
            answer = curr
            return
        }
        else if (mini >= maxi) {
            if (mountainArr.get(mini) === target) answer = mini
            return -1
        }
        else if (temp > target) return binarySearchMin(curr+1, Math.ceil((curr+maxi)/2),maxi)
        else if (temp < target) binarySearchMin(mini, Math.floor((curr+mini)/2),curr-1)
        else return -1
    }
    let peak = findPeak(min,mid,max)
    if (peak[1] < target) return -1
    else if (peak[1] === target) return peak[0]
    
    binarySearch(min, Math.floor((min+peak[0])/2),peak[0]-1)
    if (answer > -1) return answer
    binarySearchMin(peak[0]+1, Math.floor((max+peak[0])/2),max)
    
    return answer
    
};