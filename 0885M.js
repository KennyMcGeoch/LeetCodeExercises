/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 * Runtime: 97 ms, faster than 53.33% of JavaScript online submissions for Spiral Matrix III.
 * Memory Usage: 58.8 MB, less than 53.33% of JavaScript online submissions for Spiral Matrix III.
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
    let ans = [[rStart,cStart]]
    let total = (rows * cols) - 1
    
    let inc = true
    let dist = 0
    let dir = 0
    
    while(total > 0){
        if (inc) dist++
        inc = !inc
        if (dir === 0) right(dist)
        else if (dir === 1) down(dist)
        else if (dir === 2) left(dist)
        else up(dist)
        dir++
        dir %= 4
    }
    
    function right(num){
        if (rStart >= rows || rStart < 0){
            cStart += num
            return
        }
        for (let i=0; i<num; i++){
            cStart++
            if (cStart > -1 && cStart < cols){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function left(num){
        if (rStart >= rows || rStart < 0){
            cStart -= num
            return
        }
        for (let i=0; i<num; i++){
            cStart--
            if (cStart > -1 && cStart < cols){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function down(num){
        if (cStart >= cols || cStart < 0){
            rStart += num
            return
        }
        for (let i=0; i<num; i++){
            rStart++
            if (rStart > -1 && rStart < rows){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function up(num){
        if (cStart >= cols || cStart < 0){
            rStart -= num
            return
        }
        for (let i=0; i<num; i++){
            rStart--
            if (rStart > -1 && rStart < rows){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    return ans
};

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 * Runtime: 89 ms, faster than 86.67% of JavaScript online submissions for Spiral Matrix III.
 * Memory Usage: 58 MB, less than 66.67% of JavaScript online submissions for Spiral Matrix III.
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
    let ans = [[rStart,cStart]]
    let total = (rows * cols) - 1
    
    let inc = true
    let dist = 1
    let dir = 0
    
    while(total > 0){
        if (dir === 0) right(dist)
        else if (dir === 1) down(dist)
        else if (dir === 2) left(dist)
        else up(dist)
        dir++
        dir %= 4
    }
    
    function right(num){
        if (rStart >= rows || rStart < 0){
            cStart += num
            return
        }
        for (let i=0; i<num; i++){
            cStart++
            if (cStart > -1 && cStart < cols){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function left(num){
        if (rStart >= rows || rStart < 0){
            cStart -= num
            return
        }
        for (let i=0; i<num; i++){
            cStart--
            if (cStart > -1 && cStart < cols){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function down(num){
        dist++
        if (cStart >= cols || cStart < 0){
            rStart += num
            return
        }
        for (let i=0; i<num; i++){
            rStart++
            if (rStart > -1 && rStart < rows){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    function up(num){
        dist++
        if (cStart >= cols || cStart < 0){
            rStart -= num
            return
        }
        for (let i=0; i<num; i++){
            rStart--
            if (rStart > -1 && rStart < rows){
                ans.push([rStart,cStart])
                total--
                if (total === 0) return
            }
        }
    }
    
    return ans
};