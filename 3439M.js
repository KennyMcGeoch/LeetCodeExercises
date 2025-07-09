/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 75.64MB Beats 18.18%
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let arr = []
    let curr = 0
    arr[0] = startTime[0]

    for (let i=1; i<endTime.length; i++) arr.push(startTime[i] - endTime[i-1])
    arr.push(eventTime - endTime[endTime.length-1])

    for (let i=0; i<=k; i++) curr += arr[i]

    let ans = curr

    for (let i=k+1; i<arr.length; i++){
        curr += arr[i]
        curr -= arr[i-k-1]
        ans = Math.max(curr,ans)
    }

    return ans

};