/**
 * @param {number[]} cost
 * @return {number}
 * Runtime 1ms Beats 90.48%
 * Memory 53.99MB Beats 90.48%
 */
var minimumCost = function(cost) {
    let ans = 0
    cost.sort((a,b)=>b-a)

    for (let i=0; i<cost.length; i++){
        if (i % 3 !== 2) ans += cost[i]
    }

    return ans
};

/**
 * @param {number[]} cost
 * @return {number}
 * Runtime 1ms Beats 90.48%
 * Memory 53.86MB Beats 92.86%
 */
var minimumCost = function(cost) {
    let ans = 0
    let count = 0
    let hash = new Array(101).fill(0)

    for (let i=0; i<cost.length; i++) hash[cost[i]]++
    for (let i=100; i>0; i--){
        while (hash[i]){
            if (++count % 3 !== 0){
                ans += i
            }
            hash[i]--
        }
    }

    return ans
};
