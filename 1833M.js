/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * Runtime 125ms Beats 58.14%
 * Memory 67.38MB Beats 88.37%
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)

    for (let i=0; i<costs.length; i++){
        coins -= costs[i]
        if (coins < 0) return i
    }

    return costs.length
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * Runtime 8ms Beats 100.00%
 * Memory 67.34MB Beats 88.37%
 */
var maxIceCream = function(costs, coins) {
    let max = Math.max(...costs)
    let arr = new Array(max+1).fill(0)
    let total = 0

    for (let i=0; i<costs.length; i++) arr[costs[i]]++

    for (let i=1; i<= max; i++){
        while(arr[i]){
            arr[i]--
            coins-= i
            if (coins < 0) return total
            total++
        }
    }
    return total
};