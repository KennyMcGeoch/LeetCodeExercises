/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 262ms Beats 33.33%
 * Memory 82.60MB Beats 83.33%
 */
var hasAllCodes = function(s, k) {
    let set = new Set

    for (let i=k-1; i<s.length; i++){
        set.add(s.slice(i-(k-1),i+1))
    }

    return set.size === (2 ** k)
};

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 225ms Beats 79.17%
 * Memory 83.43MB Beats 50.00%
 */
var hasAllCodes = function(s, k) {
    let set = new Set
    let target = 2 ** k

    for (let i=k-1; i<s.length; i++){
        set.add(s.slice(i-(k-1),i+1))
        if (set.size === target) return true
    }

    return false
};

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 268ms Beats 29.17%
 * Memory 83.06MB Beats 70.83%
 */
var hasAllCodes = function(s, k) {
    let set = new Set
    let target = 2 ** k

    for (let i=k-1; i<s.length; i++){
        if (set.has(s.slice(i-(k-1),i+1)) === false){
            set.add(s.slice(i-(k-1),i+1))
            if (--target === 0) return true
        }
    }

    return false
};

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * Runtime 172ms Beats 83.33%
 * Memory 81.74MB Beats 83.33%
 */
var hasAllCodes = function(s, k) {
    let target = 2 ** k
    if (target > s.length - (k-1)) return false
    let set = new Set

    for (let i=k-1; i<s.length; i++){
        set.add(s.slice(i-(k-1),i+1))
        if (set.size === target) return true
    }

    return false
};