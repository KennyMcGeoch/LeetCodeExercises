/**
 * @param {number[]} target
 * @return {number}
 * Runtime 2ms Beats 83.87%
 * Memory 62.88MB Beats 96.77%
 */
var minNumberOperations = function(target) {
    let ans = target[0]
    for (let i=1; i<target.length; i++) ans += Math.max(target[i]-target[i-1],0)
    return ans
};

/**
 * @param {number[]} target
 * @return {number}
 * Runtime 2ms Beats 83.87%
 * Memory 64.08MB Beats 77.42%
 */
var minNumberOperations = function(target) {
    let ans = target[0]
    for (let i=1; i<target.length; i++){
        if (target[i] > target[i-1]){
            ans += (target[i]-target[i-1])
        }
    }
    return ans
};