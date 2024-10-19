/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Find Kth Bit in Nth Binary String.
 * Memory Usage: 117.5 MB, less than 5.45% of JavaScript online submissions for Find Kth Bit in Nth Binary String.
 */
let arr = [false]

for (let i=0; i<20; i++){
    let len = arr.length
    arr.push(true)
    for (let j=len-1; j>-1; j--){
        arr.push(!arr[j])
    }
}


var findKthBit = function(n, k) {
    if (arr[k-1]) return "1"
    else return "0"
};