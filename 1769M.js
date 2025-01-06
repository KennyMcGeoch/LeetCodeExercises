/**
 * @param {string} boxes
 * @return {number[]}
 * Runtime 48ms Beats58.25%
 * Memory 51.62MB Beats93.20%
 */
var minOperations = function(boxes) {
    let ans = new Array(boxes.length).fill(0)

    for (let i=0; i<boxes.length; i++){
        if (boxes[i] === "1"){
            for (let j=0; j<ans.length; j++){
                ans[j] += Math.abs(j-i)
            }
        }
    }

    return ans
};