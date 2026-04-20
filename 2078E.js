/**
 * @param {number[]} colors
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.48MB Beats 80.00%
 */
var maxDistance = function(colors) {
    if (colors[0] !== colors[colors.length-1]) return colors.length - 1
    let target = colors[0]
    for (let i=1; i<colors.length; i++){
        if (colors[i] !== target || colors[colors.length-(i+1)] !== target) return colors.length-i-1
    }
};

/**
 * @param {number[]} colors
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.10MB Beats 90.77%
 */
var maxDistance = function(colors) {
    if (colors[0] !== colors[colors.length-1]) return colors.length - 1
    for (let i=1; i<colors.length; i++){
        if (colors[i] !== colors[0] || colors[colors.length-(i+1)] !== colors[0]) return colors.length-i-1
    }
};