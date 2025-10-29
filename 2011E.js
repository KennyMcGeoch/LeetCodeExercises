/**
 * @param {string[]} operations
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.19MB Beats 69.29%
 */
var finalValueAfterOperations = function(operations) {
    let ans = 0
    for (let i=0; i<operations.length; i++){
        if (operations[i][1] === "+")ans++
        else ans--
    }
    return ans
};