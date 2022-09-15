/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 * Runtime: 127 ms, faster than 12.00% of JavaScript online submissions for The K Weakest Rows in a Matrix.
Memory Usage: 44.2 MB, less than 52.20% of JavaScript online submissions for The K Weakest Rows in a Matrix.
 */
 var kWeakestRows = function(mat, k) {

    let countArray = []
    let orderArray = []
    let reduceTotal = 0;

    for (i=0; i< mat.length; i++){
        reduceTotal = mat[i].reduce(function(acc, val) { return acc + val; }, 0)
        countArray.push(reduceTotal)
    }
    for (i=0; orderArray.length < countArray.length; i++){
        countArray.forEach(myFunction)
    }
    function myFunction(item, index, arr) {
        if (arr[index] === i){
            orderArray.push(index)
        }
    }
    orderArray.length = k
    
    return orderArray;
};

kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3)