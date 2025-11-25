/**
 * @param {number} k
 * @return {number}
 * Runtime 4ms Beats 16.67%
 * Memory 58.72MB Beats 15.28%
 */
var smallestRepunitDivByK = function(k) {
    if (k % 2 === 0) return -1
    if (k % 5 === 0) return -1
    let length = 1
    let rem = 1
    let seen = new Set()
    seen.add(1)

    while(rem % k !==0){
        rem *= 10
        rem++
        rem %= k
        length++
        if (seen.has(rem)) return -1
        seen.add(rem)
    }

    return length
};