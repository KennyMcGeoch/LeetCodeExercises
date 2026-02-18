/**
 * @param {number} n
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 53.41MB Beats 81.36%
 */
 let valid = new Set
 let even = 1
 let odd = 2
 valid.add(1)
 valid.add(2)
 for (let i=2; i<32; i+=2){
    even += 2 ** i
    odd += 2 ** (i+1)
    valid.add(odd)
    valid.add(even)
 }
var hasAlternatingBits = function(n) {
    return valid.has(n)
};