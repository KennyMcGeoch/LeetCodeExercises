/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * Runtime: 95 ms, faster than 44.67% of JavaScript online submissions for Guess Number Higher or Lower.
 * Memory Usage: 42.6 MB, less than 6.40% of JavaScript online submissions for Guess Number Higher or Lower.
 */
 var guessNumber = function(n) {

    let max = n
    let min = 1

    function guessing (n){
        if (guess(n) === 0)return n
        else if (guess(n)=== 1){
            min = n
            next = parseInt((max-min)/2) + min
            return guessing(next)
        }
        else{
            max = n
            next = parseInt((max-min)/2) + min
            return guessing(next)
        }
    }

    return guessing(n)    
};