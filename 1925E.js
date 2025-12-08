/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.97MB Beats 84.62%
 */
 let ans = new Array(251).fill(0)
 for (let i=5; i<251; i+=5) ans[i] += 2
 for (let i=13; i<251; i+=13) ans[i] += 2
 for (let i=17; i<251; i+=17) ans[i] += 2
 for (let i=25; i<251; i+=25) ans[i] += 2
 for (let i=29; i<251; i+=29) ans[i] += 2
 for (let i=37; i<251; i+=37) ans[i] += 2
 for (let i=41; i<251; i+=41) ans[i] += 2
 for (let i=53; i<251; i+=53) ans[i] += 2
 for (let i=61; i<251; i+=61) ans[i] += 2
 for (let i=65; i<251; i+=65) ans[i] += 4
 for (let i=73; i<251; i+=73) ans[i] += 2
 for (let i=85; i<251; i+=85) ans[i] += 4
 for (let i=89; i<251; i+=89) ans[i] += 2
 for (let i=97; i<251; i+=97) ans[i] += 2
 for (let i=101; i<251; i+=101) ans[i] += 2
 for (let i=109; i<251; i+=109) ans[i] += 2
 for (let i=113; i<251; i+=113) ans[i] += 2
 for (let i=125; i<251; i+=125) ans[i] += 2
 ans[137] += 2
 ans[145] += 4
 ans[149] += 2
 ans[157] += 2
 ans[169] += 2
 ans[173] += 2
 ans[181] += 2
 ans[185] += 4
 ans[193] += 2
 ans[197] += 2
 ans[205] += 4
 ans[221] += 4
 ans[229] += 2
 ans[233] += 2
 ans[241] += 2
for (let i=1; i<ans.length; i++) ans[i] += ans[i-1]
var countTriples = function(n) {
    return ans[n]
};