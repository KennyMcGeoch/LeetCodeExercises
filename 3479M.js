/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 * Runtime 340ms Beats 90.00%
 * Memory 77.58MB Beats 60.00%
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let segment = []
    for (let i=0; i<baskets.length; i += 100)segment.push(baskets.slice(i, i+100))
    let maxArr = []
    for (let i=0; i<segment.length; i++) maxArr[i] = Math.max(...segment[i])
    let segNo = 0
    let ans = fruits.length

    for (let i=0; i<fruits.length; i++){
        segNo = 0
        while(fruits[i] > maxArr[segNo]) segNo++
        if (segNo < segment.length){
            for (let j=0; j<segment[segNo].length; j++){
                if (fruits[i] <= segment[segNo][j]){
                    ans--
                    if (segment[segNo][j] === maxArr[segNo]){
                        segment[segNo][j] = 0
                        maxArr[segNo] = Math.max(...segment[segNo])
                    }
                    else segment[segNo][j] = 0
                    j = baskets.length
                }
            }
        }
    }

    return ans
};