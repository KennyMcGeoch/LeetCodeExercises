/**
 * @param {number[]} derived
 * @return {boolean}
 * Runtime 17ms Beats 25.00%
 * Memory 65.59MB Beats 75.00%
 */
var doesValidArrayExist = function(derived) {
    return derived.reduce((a,b)=> a+b) % 2 === 0
};

/**
 * @param {number[]} derived
 * @return {boolean}
 * Runtime 3ms Beats 100.00%
 * Memory 65.71MB Beats 75.00%
 */
var doesValidArrayExist = function(derived) {
    let sum = 0
    for (let i=0; i<derived.length; i++) sum += derived[i]
    return sum % 2 === 0
};
