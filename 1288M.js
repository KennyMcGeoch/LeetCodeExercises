/**
 * @param {number[][]} intervals
 * @return {number}
 * Runtime 2ms Beats 100.00%
 * Memory 57.87MB Beats 36.17%
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if (a[0] !== b[0]) return a[0]-b[0]
        return b[1]-a[1]
    })
    let max = 0
    for (let i=0; i<intervals.length; i++){
        if (intervals[i][1] <= max) intervals[i] = 0
        else max = intervals[i][1]
    }

    return intervals.filter((a)=>a).length
};