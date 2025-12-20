/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 12ms Beats 33.75%
 * Memory 57.54MB Beats 96.25%
 */
var minDeletionSize = function(strs) {
    let ans = 0
    let arr = new Array(strs[0].length).fill("a")

    for (let i=0; i < strs.length; i++){
        for (let j=0; j<strs[i].length; j++){
            if (arr[j]){
                if (strs[i][j] >= arr[j]){
                    arr[j] = strs[i][j]
                }
                else{
                    arr[j] = 0
                    ans++
                }
            }
        }
    }

    return ans
};

/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 11ms Beats 33.75%
 * Memory 57.27MB Beats 96.25%
 */
var minDeletionSize = function(strs) {
    let ans = 0
    let arr = new Array(strs[0].length).fill("a")

    for (let i=0; i < strs[0].length; i++){
        for (let j=0; j<strs.length; j++){
            if (arr[i]){
                if (strs[j][i] >= arr[i]){
                    arr[i] = strs[j][i]
                }
                else{
                    j = strs.length
                    ans++
                }
            }
        }
    }

    return ans
};

/**
 * @param {string[]} strs
 * @return {number}
 * Runtime 5ms Beats 92.50%
 * Memory 57.11MB Beats 98.75%
 */
var minDeletionSize = function(strs) {
    let ans = 0

    for (let i=0; i < strs[0].length; i++){
        for (let j=1; j<strs.length; j++){
            if (strs[j][i] < strs[j-1][i]){
                j = strs.length
                ans++
            }
        }
    }

    return ans
};