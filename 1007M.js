/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 * Runtime 10ms Beats24.49%
 * Memory 66.84MB Beats8.16%
 */
var minDominoRotations = function(tops, bottoms) {
    let ans = Infinity

    function check(target, ind, top, bot){
        if (ind === tops.length) ans = Math.min(top,ans)
        if (ind === bottoms.length) ans = Math.min(bot,ans)
        if (tops[ind] === target && bottoms[ind] === target) return check(target,ind+1,top,bot)
        else if (tops[ind] === target) return check(target,ind+1,top,bot+1)
        else if (bottoms[ind] === target) return check(target,ind+1,top+1,bot)
        else return
    }

    for (let i=1; i<7; i++) check(i,0,0,0)

    if (ans === Infinity) return -1

    return ans
};

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 * Runtime 18ms Beats 10.20%
 * Memory 67.76MB Beats 8.16%
 */
var minDominoRotations = function(tops, bottoms) {
    let ans = Infinity

    function check(target, ind, top, bot){
        if (ind === tops.length) ans = Math.min(top,ans)
        if (ind === bottoms.length) ans = Math.min(bot,ans)
        if (tops[ind] === target && bottoms[ind] === target) return check(target,ind+1,top,bot)
        else if (tops[ind] === target) return check(target,ind+1,top,bot+1)
        else if (bottoms[ind] === target) return check(target,ind+1,top+1,bot)
        else return
    }

    let max = [0,0,0,0,0,0,0]
    for (let i=0; i<tops.length; i++) max[tops[i]]++
    for (let i=0; i<bottoms.length; i++) max[bottoms[i]]++
    let maxVal = 0
    for (let i=1; i<max.length; i++){
        if (max[i] > max[maxVal]) maxVal = i
    }
    check(maxVal,0,0,0)

    if (ans === Infinity) return -1

    return ans
};