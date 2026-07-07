/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.44MB Beats 71.43%
 */
var sumAndMultiply = function(n) {
    n = n.toString().split("").filter((a)=>a !== "0")
    let mult = 0
    for (let i=0; i<n.length; i++) mult += Number(n[i])

    return Number(n.join("")) * mult
};