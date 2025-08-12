/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 57.76MB Beats 61.11%
 */
let ans = []
for (let i=1; i<6; i++){
   let temp = new Array(301).fill(0)
   temp[0] = 1
   let curr = 1
   let max = 0
   while(curr ** i < 301){
       let num = curr ** i
       max += num
       for (let j=Math.min(max,300); j--; j>-1){
           temp[j + num] += temp[j]
       }
       curr++
   }
   ans.push(temp)
}

var numberOfWays = function(n, x) {
   return ans[x-1][n] % 1000000007
};

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.33MB Beats 94.44%
 */
let ans2 = []
for (let i=1; i<6; i++){
   let temp = new Array(301).fill(0)
   temp[0] = 1
   let curr = 1
   let max = 0
   while(curr ** i < 301){
       let num = curr ** i
       max += num
       for (let j=Math.min(max,301-curr); j--; j>-1){
           temp[j + num] += temp[j]
           temp[j + num] %= 1000000007
       }
       curr++
   }
   ans2.push(temp)
}

var numberOfWays = function(n, x) {
   return ans2[x-1][n] 
};