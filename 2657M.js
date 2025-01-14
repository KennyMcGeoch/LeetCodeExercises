/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 * Runtime 2ms Beats 100.00%
 * Memory 55.38MB Beats 100.00%
 */
var findThePrefixCommonArray = function(A, B) {
    let arr = new Array(A.length + 1).fill(0)
    let ans = []
    let curr = 0

    for (let i=0; i<A.length; i++){
        if (++arr[A[i]] === 2) curr++
        if (++arr[B[i]] === 2) curr++
        ans.push(curr)
    }

    return ans
    
};