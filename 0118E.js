/**
 * @param {number} numRows
 * @return {number[][]}
 * Runtime: 100 ms, faster than 28.25% of JavaScript online submissions for Pascal's Triangle.
 * Memory Usage: 42.4 MB, less than 7.32% of JavaScript online submissions for Pascal's Triangle.
 * Runtime 0ms Beats 100.00%
 * Memory 54.46MB Beats 46.29%
 */
var generate = function(numRows) {


    let solution = [[1],[1,1]];
    let row = [1]
    let iterations = numRows -1;

    if (numRows === 1){
        return [[1]]
    }

    for (i=1; i<iterations; i++){
        for (j=0; j<solution[i].length-1; j++){
            row[j+1] = solution[i][j] + solution[i][j+1]
        }
        row.push(1)
        solution[i+1] = [...row]
        }

        return solution
 
    };

/**
 * @param {number} numRows
 * @return {number[][]}
 * Runtime 0ms Beats 100.00%
 * Memory 55.98MB Beats 11.55%
 */
let ans = [[1],[1,1]]
for (let i=2; i<30; i++){
    ans.push([1])
    for (let j=0; j<ans[i-1].length-1; j++) ans[i].push(ans[i-1][j] + ans[i-1][j+1])
    ans[i].push(1)
}

 var generate = function(numRows) {
    return ans.slice(0,numRows)
};

