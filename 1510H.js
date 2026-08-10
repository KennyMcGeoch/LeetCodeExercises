/**
 * @param {number} n
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.96MB Beats 87.50%
 */
 let arr = new Array(100001)
 arr[0] = 0
 arr[1] = 1
 let temp = 0
 for (let i=2; i<100001; i++){
    temp = 1
    while(temp ** 2 <= i){
        if (arr[i - (temp**2)] === 0){
            arr[i] = 1
            temp = i
        }
        temp++
    }
    if (arr[i] === undefined) arr[i] = 0
 }
var winnerSquareGame = function(n) {
    return arr[n] === 1
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.91MB Beats 87.50%
 */
 let arr = new Uint8Array(100001)
 arr[0] = 0
 arr[1] = 1
 let temp = 0
 for (let i=2; i<100001; i++){
    temp = 1
    while(temp ** 2 <= i){
        if (arr[i - (temp**2)] === 0){
            arr[i] = 1
            temp = i
        }
        temp++
    }
    if (arr[i] === undefined) arr[i] = 0
 }
var winnerSquareGame = function(n) {
    return arr[n] === 1
};