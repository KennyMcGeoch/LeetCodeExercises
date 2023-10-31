/**
 * @param {number[]} pref
 * @return {number[]}
 * Runtime: 150 ms, faster than 91.76% of JavaScript online submissions for Find The Original Array of Prefix Xor.
 * Memory Usage: 71.6 MB, less than 55.49% of JavaScript online submissions for Find The Original Array of Prefix Xor.
 */
var findArray = function(pref) {
    let result = [pref[0]]
    for (let i=1; i<pref.length; i++){
        result.push(pref[i] ^ pref[i-1])
    }
    return result
    
}