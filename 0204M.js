/**
 * @param {number} n
 * @return {number}
 * Runtime: 285 ms, faster than 69.70% of JavaScript online submissions for Count Primes.
 * Memory Usage: 82.8 MB, less than 51.33% of JavaScript online submissions for Count Primes.
 */
var countPrimes = function(n) {
    
    let arr = new Array(n).fill(1)
    arr[0] = 0
    arr[1] = 0
    for (let i=2; i<arr.length; i++){
        if (arr[i] === 1){
            for (let j = i*2; j<arr.length; j+=i){
                if (arr[j] === 1) arr[j] = 0
            }
        }
    }
    
    return arr.reduce((partialSum, a) => partialSum + a, 0)
    
};