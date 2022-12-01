/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 99 ms, faster than 30.56% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
 * Memory Usage: 41.9 MB, less than 66.67% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
 */
 var checkPowersOfThree = function(n) {
    if ( n === 1) return true
    else if (n < 3) return false
    n = n.toString(3)
    if (n[0] !== "1") return false
    for (i=1; i<n.length; i++){
        if (n[i] === "2")return false
    }
    return true  
};