/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.45MB Beats 94.65%
 */

let arr = [0,1,2,5]
for (let i=4; i<1001; i++){
   arr.push(((arr[i-1] * 2) + arr[i-3]) % 1000000007)
}
var numTilings = function(n) {
   return arr[n]
};