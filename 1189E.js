/**
 * @param {string} text
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.42MB Beats 92.13%
 */
var maxNumberOfBalloons = function(text) {
    let arr = new Array(26).fill(0)

    for (let i=0; i<text.length; i++) arr[text.charCodeAt(i)-97]++

    return Math.min(arr[0], arr[1], Math.floor(arr[11]/2), arr[13],Math.floor(arr[14]/2))
    
};