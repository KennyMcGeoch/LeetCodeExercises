/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 99 ms, faster than 39.84% of JavaScript online submissions for Three Consecutive Odds.
 * Memory Usage: 42.6 MB, less than 14.06% of JavaScript online submissions for Three Consecutive Odds.
 * Runtime: 38 ms, faster than 99.49% of JavaScript online submissions for Three Consecutive Odds.
 * Memory Usage: 48.4 MB, less than 96.94% of JavaScript online submissions for Three Consecutive Odds.
 */
 var threeConsecutiveOdds = function(arr) {

    let odd = 0
    let iterations = arr.length

    for (i=0; i<iterations; i++){
        if (arr[i] % 2 === 1){
            odd++
            if (odd === 3)return true
        }
        else odd = 0
    }

    return false
    
};