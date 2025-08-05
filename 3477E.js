/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.08MB Beats 96.58%
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let max = Infinity
    let ans = fruits.length

    for (let i=0; i<fruits.length; i++){
        if (fruits[i] >= max) ans--
        else{
            for (let j=0; j<baskets.length; j++){
                if (fruits[i] <= baskets[j]){
                    ans--
                    baskets[j] = 0
                    j = baskets.length
                }
            }
        }
    }

    return ans
};