/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 * Runtime 53ms Beats 50.00%
 * Memory 62.02MB Beats 58.33%
 */
var repairCars = function(ranks, cars) {
    let min = 1
    let max = ranks[0] * cars * cars
    let ind
    let total

    while(max !== min){
        ind = (Math.ceil((min+max)/2)) - 1
        total = 0
        for (let i=0; i<ranks.length; i++) total += Math.floor((ind/ranks[i]) ** 0.5)
        if (cars <= total) max = ind
        else min = ind + 1
    }

    return max
};