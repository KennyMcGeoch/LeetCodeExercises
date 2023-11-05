/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Find the Winner of an Array Game.
 * Memory Usage: 51.6 MB, less than 57.14% of JavaScript online submissions for Find the Winner of an Array Game.
 */
var getWinner = function(arr, k) {
    
    if (k > arr.length) return Math.max(...arr)
    let winner = Math.max(arr[0],arr[1])
    let count = 1
    if (k===1)return winner
    
    for (let i=2; i<arr.length; i++){
        if (winner > arr[i])count++
        else{
            winner = arr[i]
            count = 1
        }
        if (count === k) return winner
    }
    return winner
    
};