/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 * Runtime: 23 ms, faster than 95.24% of JavaScript online submissions for Move Pieces to Obtain a String.
 * Memory Usage: 62.1 MB, less than 39.29% of JavaScript online submissions for Move Pieces to Obtain a String.
 */
var canChange = function(start, target) {
    let left = []
    let right = []
    let order = []
    let orderC = 0
    let leftC = 0
    let rightC = 0
    if (start === target) return true
    
    for (let i=0; i<start.length; i++){
        if (start[i] === "L"){
            order.push("L")
            left.push(i)
        }
        else if (start[i] === "R"){
            order.push("R")
            right.push(i)
        }
    }

    for (let i=0; i<target.length; i++){
        if (target[i] === "L"){
            if (order[orderC++] !== "L") return false
            if (left[leftC++] < i) return false
        }
        else if (target[i] === "R"){
            if (order[orderC++] !== "R") return false
            if (right[rightC++] > i) return false
        }
    }
    
    return orderC === order.length
};

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 * Runtime: 31 ms, faster than 76.19% of JavaScript online submissions for Move Pieces to Obtain a String.
 * Memory Usage: 57.7 MB, less than 89.29% of JavaScript online submissions for Move Pieces to Obtain a String.
 */
var canChange = function(start, target) {
    let left = 0
    let right = 0
    
    while (left < start.length || right < target.length){
        while(start[left] === "_") left++
        while(target[right] === "_") right++
        if (target[right] !== start[left]) return false
        if (target[right] === "R" && right < left) return false
        if (target[right] === "L" && right > left) return false
        left++
        right++
    }
    
    return left === right
};