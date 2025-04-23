/**
 * @param {number} n
 * @return {number}
 * Runtime 3ms Beats 92.65%
 * Memory 54.36MB Beats 82.35%
 */
var countLargestGroup = function(n) {
    let arr = new Array(37).fill(0) 
    let count = 0

    for (let i=1; i<=n; i++){  
        if ( i % 1000 === 0) count = i - (i/1000)
        else if (i % 100 === 0) count = i - Math.floor(i/1000) - ((i % 1000) /100)
        else if (i % 10 == 0) count += 9         
        arr[i-count]++
    }
    
    let max = Math.max(...arr)

    return arr.filter(a => a === max).length
};