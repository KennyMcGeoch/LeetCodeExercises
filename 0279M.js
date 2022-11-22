/**
 * @param {number} n
 * @return {number}
 * Runtime: 94 ms, faster than 99.58% of JavaScript online submissions for Perfect Squares.
 * Memory Usage: 42.3 MB, less than 98.73% of JavaScript online submissions for Perfect Squares.
 */
 var numSquares = function(n) {

    if (Math.sqrt(n) % 1 === 0)return 1

    let num = n
    while (num % 2 === 0)num/=2
    while (num % 5 === 0)num/=5
    while (num % 9 === 0)num/=9
    if (num % 3 !== 0){
        if (num === 0 || num === 1 || num === 13 || num === 17) return 2
        else{
            let i = 0
            let j = Math.floor(Math.sqrt(num))
            while (j > i){
                temp = i*i + j*j
                if ( temp === num)return 2
                else if (temp > num)j--
                else i--
            }
        }
    } 
    
    while (n % 4 === 0) n /= 4
    if (n%8 !== 7)return 3

    return 4
};