/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 * Runtime
32ms
Beats10.00%
Analyze Complexity
Memory
84.89MB
Beats10.00%
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    let ans = 0
    let min = new Array(startTime.length+1).fill(0)
    let max = new Array(startTime.length+1).fill(0)
    let arr = [startTime[0]]
    for (let i=1; i<startTime.length; i++){
        arr.push(startTime[i]-endTime[i-1])
    }
    arr.push(eventTime-endTime[endTime.length-1])

    for (let i=1; i<arr.length; i++) min[i] = Math.max(min[i-1],arr[i-1])

    for (let i=max.length-2; i>=0; i--) max[i] = Math.max(max[i+1],arr[i+1])

    for (let i=0; i<arr.length-1; i++){
        if (endTime[i] - startTime[i] <= min[i] || endTime[i] - startTime[i] <= max[i+1]) ans = Math.max(ans, arr[i] + arr[i+1] + (endTime[i] - startTime[i]))
        else ans = Math.max(ans, arr[i] + arr[i+1])
    }

    return ans
};