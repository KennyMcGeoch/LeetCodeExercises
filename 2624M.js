/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 * Runtime: 240 ms, faster than 18.94% of JavaScript online submissions for Snail Traversal.
 * Memory Usage: 64.5 MB, less than 5.10% of JavaScript online submissions for Snail Traversal.
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if ((rowsCount * colsCount) !== this.length) return []
    
    let arr = Array(rowsCount)
    for (i=0; i<rowsCount; i++){
        arr[i] = Array(colsCount)
    }
    
    rowMult = rowsCount * 2
    
    for (i=0; i<rowsCount; i++){
        for (j=0; j<colsCount; j++){
            let cell = i
            if (j %2 !== 0) cell -= i+i+1
            let mult = (parseInt((j+1)/2))*rowMult
            cell += mult
            arr[i][j] = this[cell]
        }
    }
    
    return arr
    

}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */