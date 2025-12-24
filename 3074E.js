/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.70MB Beats 58.18%
 */
var minimumBoxes = function(apple, capacity) {
    let max = apple.reduce((a,b)=>a+b)
    capacity.sort((a,b)=>b-a)
    for (let i=0; i<capacity.length; i++){
        max -= capacity[i]
        if (max < 1) return i+1
    }

    return capacity.length
};