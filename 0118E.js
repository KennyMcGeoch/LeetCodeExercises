/**
 * @param {number} numRows
 * @return {number[][]}
 * Runtime: 100 ms, faster than 28.25% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 42.4 MB, less than 7.32% of JavaScript online submissions for Pascal's Triangle.
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

generate(2);