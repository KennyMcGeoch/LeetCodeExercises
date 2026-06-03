/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 * Runtime 3ms Beats 92.31%
 * Memory 73.74MB Beats 53.85%
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity
    let landFinish = Infinity
    let waterFinish = Infinity

    for (let i=0; i<landStartTime.length; i++) landFinish = Math.min(landStartTime[i] + landDuration[i], landFinish)
    for (let i=0; i<waterStartTime.length; i++) waterFinish = Math.min(waterStartTime[i] + waterDuration[i], waterFinish)
    for (let i=0; i<landDuration.length; i++) ans = Math.min(ans, Math.max(waterFinish, landStartTime[i])+ landDuration[i])
    for (let i=0; i<waterDuration.length; i++) ans = Math.min(ans, Math.max(landFinish, waterStartTime[i])+ waterDuration[i])

    return ans
};