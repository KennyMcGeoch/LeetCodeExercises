/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 * Runtime 14ms Beats37.50%
 * Memory 69.90MB Beats43.75%
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = Math.min(differences[0],0)
    let max = Math.max(differences[0],0)

    for (let i=1; i<differences.length; i++){
        differences[i] += differences[i-1]
        min = Math.min(min, differences[i])
        max = Math.max(max,differences[i])
    }
    return Math.max(0, ((upper-lower) - (max-min) +1))
};

/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 * Runtime 3ms Beats 93.75%
 * Memory 67.72MB Beats 93.75%
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = Math.min(differences[0],0)
    let max = Math.max(differences[0],0)
    let diff = upper - lower

    for (let i=1; i<differences.length; i++){
        differences[i] += differences[i-1]
        min = Math.min(min, differences[i])
        max = Math.max(max,differences[i])
        if (max - min > diff) return 0
    }
    return Math.max(0, (diff - (max-min) +1))
};