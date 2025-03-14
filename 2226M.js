/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 * Runtime 14ms Beats 100.00%
 * Memory 70.70MB Beats 12.50%
 */
var maximumCandies = function(candies, k) {
    let min = 0
    let max = Math.floor(candies.reduce((a,b)=>a+b)/k)
    let curr = 0
    let ind
    
    while (min !== max){
        ind = Math.floor((min+max)/2) + 1
        curr = test(ind)
        if (curr >= k) min = ind
        else max = ind-1
    }

    function test(num){
        let temp = 0
        for (let i=0; i<candies.length; i++) temp += Math.floor(candies[i]/num)
        return temp
    }

    return max
};