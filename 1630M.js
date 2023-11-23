/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 * Runtime: 145 ms, faster than 58.00% of JavaScript online submissions for Arithmetic Subarrays.
 * Memory Usage: 49.4 MB, less than 21.00% of JavaScript online submissions for Arithmetic Subarrays.
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let answer = []
    
    for (let i=0; i<l.length; i++){
        canMakeArithmeticProgression(nums.slice(l[i],r[i]+1))
    }
    
    function canMakeArithmeticProgression(arr) {

        arr.sort(function(a, b){return a-b});

        let gap = arr[1] - arr[0]
        let compareVal = arr[0]
        let iterations = arr.length

        for (let i=0; i<iterations; i++){
            if (arr[i] === compareVal){
                compareVal += gap
            }
            else{
                return answer.push(false)
            }
        }

        return answer.push(true)
    };
    return answer
    
};

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 * Runtime: 115 ms, faster than 82.52% of JavaScript online submissions for Arithmetic Subarrays.
 * Memory Usage: 48.1 MB, less than 94.17% of JavaScript online submissions for Arithmetic Subarrays.
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let answer = []
    
    for (let i=0; i<l.length; i++){
        canMakeArithmeticProgression(nums.slice(l[i],r[i]+1))
    }
    
    function canMakeArithmeticProgression(arr) {

        arr.sort(function(a, b){return a-b});

        let gap = arr[1] - arr[0]
        let iterations = arr.length - 1

        for (let i=1; i<iterations; i++){
            if (arr[i] === arr[i+1] - gap){
            }
            else{
                return answer.push(false)
            }
        }

        return answer.push(true)
    };
    return answer
    
};