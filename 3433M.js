/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 * Runtime 12ms Beats 75.00%
 * Memory 62.84MB Beats 87.50%
 */
var countMentions = function(numberOfUsers, events) {
    events.sort((a,b)=>{
        if (a[1] !== b[1]) return a[1]-b[1]
        if (b[0] === "OFFLINE") return 1
        return -1
    })
    let ans = new Array(numberOfUsers).fill(0)
    let time = new Array(numberOfUsers).fill(0)
    let all = 0
    let temp = []

    for (let i=0; i<events.length; i++){
        if (events[i][0] === "OFFLINE") time[events[i][2]] = Number(events[i][1]) + 60
        else{
            if (events[i][2] === "ALL") all++
            else if (events[i][2] === "HERE"){
                for (let j=0; j<time.length; j++){
                    if (time[j] > events[i][1]) ans[j]--
                }
                all++
            }
            else{
                temp = events[i][2].split(" ")
                for (let j=0; j<temp.length; j++) ans[temp[j].slice(2)]++
            }
        }
    }
    if (all){
        for (let i=0; i<ans.length; i++) ans[i] += all
    }

    return ans

};