/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 * Runtime 64ms Beats75.00%
 * Memory 66.70MB Beats 50.00%
 */
var numberOfAlternatingGroups = function(colors, k) {
    let hash = new Array(colors.length)
    let len = colors.length-1
    hash[0] = 1
    let loop = false
    if (colors[0] !== colors[len]) loop = true
    let ans = 0

    for (let i=1; i<colors.length; i++){
        if (colors[i] === colors[i-1]) hash[i] = 1
        else hash[i] = hash[i-1] + 1
    }
    if (loop && hash[len] === len+1) return len+1

    for (let i=0; i<hash.length; i++){
        if (loop && hash[i] === i+1){
            if (hash[len] + hash[i] >= k)ans++
        }
        else if (hash[i] >= k) ans++
    }
 
    return ans
};

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 * Runtime 55ms Beats75.00%
 * Memory 64.27MB Beats 75.00%
 */
var numberOfAlternatingGroups = function(colors, k) {
    let curr = 1
    let ans = 0

    for (let i=1; i<colors.length; i++){
        if (colors[i] !== colors[i-1]) curr++
        else curr = 1
        if (curr >= k) ans++
    }
    if (colors[0] !== colors[colors.length-1]) curr++
    else curr = 1
    if (curr >= k) ans++
    for (let i=1; i<k-1; i++){
        if (colors[i] !== colors[i-1]) curr++
        else curr = 1
        if (curr >= k) ans++
    }

 
    return ans
};