/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Runtime: 84 ms, faster than 37.93% of JavaScript online submissions for Find the Winner of the Circular Game.
 * Memory Usage: 55.9 MB, less than 11.03% of JavaScript online submissions for Find the Winner of the Circular Game.
 */
var findTheWinner = function(n, k) {
    
    let arr = new Array(n)
    arr[0] = 1
    for (let i=1; i<arr.length; i++) arr[i] = arr[i-1] + 1
    let index = 0
    
    while(arr.length > 1){
        index = (--index+k) % arr.length
        let remove = arr[index]
        arr = arr.filter((a)=> a !== remove)
    }
    
    return arr[0]
    
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Runtime: 87 ms, faster than 35.17% of JavaScript online submissions for Find the Winner of the Circular Game.
 * Memory Usage: 55.3 MB, less than 17.93% of JavaScript online submissions for Find the Winner of the Circular Game.
 */
var findTheWinner = function(n, k) {
    
    let arr = new Array(n)
    arr[0] = 1
    for (let i=1; i<arr.length; i++) arr[i] = arr[i-1] + 1
    let index = 0
    
    while(arr.length > 1){
        index = (--index+k) % arr.length
        arr = arr.filter((a)=> a !== arr[index])
    }
    
    return arr[0]
    
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Runtime: 50 ms, faster than 89.65% of JavaScript online submissions for Find the Winner of the Circular Game.
 * Memory Usage: 48.7 MB, less than 86.21% of JavaScript online submissions for Find the Winner of the Circular Game.
 */
var findTheWinner = function(n, k) {
    
    let ans = 0
    
    for (let i=2; i<=n; i++){
        ans = (ans+k)%i
    }
    
    return ans+1
    
};