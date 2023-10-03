/**
 * @param {number} n
 * @return {string}
 * Runtime: 43 ms, faster than 93.33% of JavaScript online submissions for Thousand Separator.
 * Memory Usage: 42.1 MB, less than 40.00% of JavaScript online submissions for Thousand Separator.

 */
var thousandSeparator = function(n) {
    n = n.toString()
    let start = n.length % 3
    if (start === 0)start += 3
    let str = ""
    for (let i=0; i<n.length; i++){
        if (i === start){
            str += "."
            start += 3
        }
        str += n[i]
    }
    return str
    
};