/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 55.30MB Beats 100.00%
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a,b)=>a-b)
    vBars.sort((a,b)=>a-b)
    let hMax = 1
    let vMax = 1
    let curr = 1
    let prev = -1

    for (let i=0; i<hBars.length; i++){
        if (hBars[i] === ++prev) curr++
        else{
            hMax = Math.max(hMax, curr)
            prev = hBars[i]
            curr = 2
        }
    }
    hMax = Math.max(hMax, curr)
    curr = 1
    prev = -1

    for (let i=0; i<vBars.length; i++){
        if (vBars[i] === ++prev) curr++
        else{
            vMax = Math.max(vMax, curr)
            prev = vBars[i]
            curr = 2
        }
    }
    vMax = Math.max(vMax, curr)

    return Math.min(vMax,hMax) ** 2
};