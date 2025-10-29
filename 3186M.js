/**
 * @param {number[]} power
 * @return {number}
 * Runtime 270ms Beats 100.00%
 * Memory 90.63MB Beats 100.00%
 */
var maximumTotalDamage = function(power) {
    power.sort((a,b)=>a-b)
    let arr = [power[0]]
    let count = [1]
    
    for (let i=1; i<power.length; i++){
        if (power[i] === arr[arr.length-1]) count[count.length-1]++
        else{
            arr.push(power[i])
            count.push(1)
        }
    }
    if (arr.length === 1) return arr[0] * count[0]
    if (arr.length === 2){
        if (arr[1] - arr[0] > 2) return (arr[0]*count[0]) + (arr[1]*count[1])
        else return Math.max(arr[0]*count[0], arr[1]*count[1])
    }
    let best = new Array(arr.length).fill(0)
    best[0] = arr[0] * count[0]
    if (arr[1]-arr[0] > 2) best[1] = best[0] + (arr[1] * count[1])
    else best[1] = arr[1] * count[1]
    if (arr[2] - arr[1] > 2) best[2] = Math.max(best[0],best[1]) + (arr[2] * count[2])
    else if (arr[2]-arr[0] > 2) best[2] = best[0] + (arr[2] * count[2])
    else best[2] = arr[2] * count[2]
    for (let i=3; i<arr.length; i++){
        if (arr[i]-arr[i-1] > 2) best[i] = Math.max(best[i-1],best[i-2],best[i-3]) + (arr[i]*count[i])
        else if (arr[i]-arr[i-2] > 2) best[i] = Math.max(best[i-2],best[i-3],best[i-4] || 0) + (arr[i]*count[i])
        else best[i] = Math.max(best[i-3],best[i-4] || 0,best[i-5] || 0) + (arr[i]*count[i])
    }
    return Math.max(best[best.length-1],best[best.length-2],best[best.length-3])
    
};