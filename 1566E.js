/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 * Runtime: 49 ms, faster than 72.12% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.
 * Memory Usage: 41.9 MB, less than 70.19% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.
 */
var containsPattern = function(arr, m, k) {
    
    function build(index){
        let len = m * k
        let i = 0
        while (i < len){
            if (arr[index+i] !== arr[index+(i++%m)])return false
        }
        return true
    }
    let max = arr.length-(k*m) + 1
    for (let i=0; i<max; i++){
        let test = build(i)
        if (test === true )return true
    }
    return false
    
    
};