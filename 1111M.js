/**
 * @param {string} seq
 * @return {number[]}
 * Runtime 1ms Beats 77.78%
 * Memory 57.09MB Beats 88.89%
 */
var maxDepthAfterSplit = function(seq) {
    let ans = []
    for (let i=0; i<seq.length; i++){
        if (i%2 === 0){
            if (seq[i] === "(") ans.push(0)
            else ans.push(1)
        }
        else{
            if (seq[i] === "(") ans.push(1)
            else ans.push(0)
        }
    }

    return ans
};

/**
 * @param {string} seq
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 57.00MB Beats 88.89%
 */
var maxDepthAfterSplit = function(seq) {
    seq = seq.split("")
    for (let i=0; i<seq.length; i++){
        if (i%2 === 0){
            if (seq[i] === "(") seq[i] = 0
            else seq[i] = 1
        }
        else{
            if (seq[i] === "(") seq[i] = 1
            else seq[i] = 0
        }
    }

    return seq
};