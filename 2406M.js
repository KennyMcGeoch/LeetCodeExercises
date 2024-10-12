/**
 * @param {number[][]} intervals
 * @return {number}
 * Runtime: 264 ms, faster than 78.95% of JavaScript online submissions for Divide Intervals Into Minimum Number of Groups.
 * Memory Usage: 82.1 MB, less than 47.37% of JavaScript online submissions for Divide Intervals Into Minimum Number of Groups.
 */
var minGroups = function(intervals) {
    
    let start = []
    let end = []
    let ans = 1
    let curr = 0
    for (let i=0; i<intervals.length; i++){
        start.push(intervals[i][0])
        end.push(intervals[i][1])
    }
    start.sort((a,b)=>a-b)
    end.sort((a,b)=>a-b)
    let sInd = 0
    let eInd = 0

    while(eInd < end.length && sInd < start.length){
        if (start[sInd] <= end[eInd]){
            curr++
            sInd++
        }
        else {
            curr--
            eInd++
        }

        ans = Math.max(ans,curr)
    }
    
    return ans
};