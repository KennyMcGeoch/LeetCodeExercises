    
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Runtime: 56 ms, faster than 22.83% of JavaScript online submissions for K-th Symbol in Grammar.
 * Memory Usage: 41.2 MB, less than 91.30% of JavaScript online submissions for K-th Symbol in Grammar.
 */
var kthGrammar = function(n, k) {
    if (n === 0) return 0
    else if (k % 2 == 0) return (kthGrammar(n - 1, k / 2) == 0) ? 1 : 0;
	else return (kthGrammar(n - 1, (k + 1) / 2) == 0) ? 0 : 1   
    
};