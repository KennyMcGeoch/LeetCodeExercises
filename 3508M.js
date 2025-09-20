/**
 * @param {number} memoryLimit
 * Runtime 395ms Beats 38.46%
 * Memory 119.93MB Beats 38.46%
 */
var Router = function(memoryLimit) {
    mem = []
    dest = {}
    curr = {}
    lim = memoryLimit
    ind = 0
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    if (curr[source+","+destination+","+timestamp]) return false
    else{
        mem.push([source,destination,timestamp])
        if (dest[destination] === undefined) dest[destination] = [timestamp]
        else dest[destination].push(timestamp)
        curr[mem[mem.length-1]] = true
        if (mem.length - ind > lim){ 
            dest[mem[ind][1]].shift()
            curr[mem[ind++]] = false}
    }
    return true
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (mem[ind]){
        curr[mem[ind]] = false
        dest[mem[ind][1]].shift()
        return mem[ind++]
    }
    else return []
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    if (dest[destination] === undefined) return 0
    if (dest[destination].length === 0) return 0
    if (dest[destination][0] > endTime || dest[destination][dest[destination].length-1] < startTime) return 0
    let count = 0
    let min = 0
    let max = dest[destination].length -1
    let candidate = 0
    if (dest[destination][0] < startTime){
        while (min < max){
        candidate = Math.floor((min+max)/2)
        if (dest[destination][candidate] < startTime) min = candidate + 1
        else max = candidate
        }
        while(min > 0 && dest[destination][min-1] === startTime) min--
    }
    minVal = min
    min = 0
    max = dest[destination].length -1
    if (dest[destination][max] > endTime){
        while (min < max){
        candidate = Math.ceil((min+max)/2)
        if (dest[destination][candidate] > endTime) max = candidate -1
        else min = candidate
        }
        while(max < dest[destination].length-1 && dest[destination][max+1] === endTime) max++
    }

    return max + 1 - minVal
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */