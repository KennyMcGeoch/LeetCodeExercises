/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 * Runtime: 248 ms, faster than 65.43% of JavaScript online submissions for Meeting Rooms III.
 * Memory Usage: 82.2 MB, less than 60.49% of JavaScript online submissions for Meeting Rooms III.
 */
var mostBooked = function(n, meetings) {
    
    meetings.sort((a,b)=>a[0]-b[0])
    
    let rooms = new Array(n).fill(0)
    let times = new Array(n).fill(0)
    
    for (let i=0; i<meetings.length; i++){
        if (emptyRoom(meetings[i])) fullRoom(meetings[i])
    }
    
    function emptyRoom(arr){
        let time = arr[0]
        for (let j=0; j<times.length; j++){
            if (times[j] <= time){
                times[j] = arr[1]
                rooms[j]++
                return false
            }
        }
        return true
    }
        
    function fullRoom(arr){
      let time = Math.min(...times)
        for (let j=0; j<times.length; j++){
            if (times[j] <= time){
                times[j] = time + arr[1] - arr[0]
                rooms[j]++
                return false
            }
        }
        return true
    }
    
    let target = Math.max(...rooms)
    
    for (let i=0; i<rooms.length; i++) if (rooms[i] === target) return i
    
};