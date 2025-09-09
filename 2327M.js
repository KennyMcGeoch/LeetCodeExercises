/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 57.65MB Beats 17.65%
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    let arr = new Array(n).fill(0n)
    arr[0] = 1n
    let share = 0n
    let total = 1n

    for (let i=delay; i<forget; i++){
        share += arr[i - delay]
        total += share
        arr[i] = share
    }
    for (let i=forget; i<n; i++){
        share += (arr[i-delay] - arr[i-forget])
        total += (share - arr[i-forget])
        arr[i] = share 
    }

    return Number(total % 1000000007n)
};