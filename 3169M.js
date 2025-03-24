/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 * Runtime 61ms Beats 96.77%
 * Memory 80.95MB Beats 51.61%
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>a[0]-b[0])
    let ans = meetings[0][0] - 1
    let endMax = meetings[0][1]

    for (let i=1; i<meetings.length; i++){
        if (meetings[i][0] > endMax+1) ans += (meetings[i][0] - endMax - 1)
        endMax = Math.max(endMax, meetings[i][1])
    }

    return ans + days - endMax
};