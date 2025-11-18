/**
 * @param {number[]} bits
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 54.11MB Beats 62.50%
 */
var isOneBitCharacter = function(bits) {
    let count = 0
    while (count < bits.length - 1){
        if (bits[count] === 0) count++
        else count += 2
    }
    return count === bits.length - 1
};

/**
 * @param {number[]} bits
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 54.37MB Beats 47.32%
 */
var isOneBitCharacter = function(bits) {
    let count = 0
    while (count < bits.length - 1){
        count += (bits[count]+1)
    }
    return count === bits.length - 1
};