/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 * Runtime: 195 ms, faster than 87.50% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
 * Memory Usage: 66.7 MB, less than 25.00% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
 * Runtime: 201 ms, faster than 75.00% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
 * Memory Usage: 65.6 MB, less than 93.75% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
 */
var restoreMatrix = function(rowSum, colSum) {
    
    let ans = []
    
    for (let i=0; i<rowSum.length; i++) ans.push(new Array(colSum.length).fill(0))
    
    let col = 0
    let row = 0
    
    while(row < rowSum.length && col < colSum.length){
        let add = Math.min(rowSum[row], colSum[col])
        ans[row][col] += add
        if (rowSum[row] === add) row++
        else rowSum[row] -= add
        if (colSum[col] === add) col++
        else colSum[col] -= add
        
    }
    
    return ans
};