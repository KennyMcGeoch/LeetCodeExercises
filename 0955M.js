/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 4ms Beats 50.00%
 * Memory 55.32MB Beats 100.00%
 */
var minDeletionSize = function(strs) {
    let sorted = new Array(strs.length).fill(0)
    let ans = 0
    let loops = strs[0].length
    let prev = 0
    let valid = true

    for (let i=0; i<loops; i++){
        valid = true
        for (let j=0; j<strs.length; j++){
            if (sorted[j]) prev = strs[j][i]
            else if (prev){
                if (strs[j][i] < prev){
                    valid = false
                    ans++
                    j = strs.length
                }
                else prev = strs[j][i]
            }
            else prev = strs[j][i]
        }
        if (valid){
            for (let j=0; j<strs.length; j++){
                if (j){
                    if (strs[j][i] !== strs[j-1][i]) sorted[j] = 1
                }
            }
        }
        prev = 0
    }

    return ans
};

/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 3ms Beats 50.00%
 * Memory 55.18MB Beats 100.00%
 */
var minDeletionSize = function(strs) {
    let sorted = new Array(strs.length).fill(0)
    let ans = 0
    let loops = strs[0].length
    let prev = 0
    let valid = true

    for (let i=0; i<loops; i++){
        valid = true
        for (let j=0; j<strs.length; j++){
            if (sorted[j]) prev = strs[j][i]
            else if (prev){
                if (strs[j][i] < prev){
                    valid = false
                    ans++
                    j = strs.length
                }
                else prev = strs[j][i]
            }
            else prev = strs[j][i]
        }
        if (valid){
            for (let j=0; j<strs.length; j++){
                if (j){
                    if (strs[j][i] !== strs[j-1][i]) sorted[j] = 1
                }
            }
        }
        if (sorted.reduce((a,b)=>a+b) === loops-1) return ans
        prev = 0
    }

    return ans
};  

/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 55.46MB Beats 100.00%
 */
var minDeletionSize = function(strs) {
    let sorted = new Array(strs.length).fill(0)
    let ans = 0
    let loops = strs[0].length
    let prev = 0
    let valid = true
    let curr = strs.length - 1

    for (let i=0; i<loops; i++){
        valid = true
        for (let j=0; j<strs.length; j++){
            if (sorted[j]) prev = strs[j][i]
            else if (prev){
                if (strs[j][i] < prev){
                    valid = false
                    ans++
                    j = strs.length
                }
                else prev = strs[j][i]
            }
            else prev = strs[j][i]
        }
        if (valid){
            for (let j=0; j<strs.length; j++){
                if (j && sorted[j] === 0){
                    if (strs[j][i] !== strs[j-1][i]){
                         sorted[j] = 1
                         if (--curr === 0) return ans
                    }
                }
            }
        }
        prev = 0
    }

    return ans
};  


