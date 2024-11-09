/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 * Runtime: 4 ms, faster than 100.00% of JavaScript online submissions for Minimum Array End.
 * Memory Usage: 51.2 MB, less than 100.00% of JavaScript online submissions for Minimum Array End.
 */
var minEnd = function(n,x) {
    if (n==1)return x
    n--
    x = ("0000000000000000000000000000000000000000" + x.toString(2)).split("")
    n = n.toString(2).split("")

    let curr = n.length-1
    for (let i=x.length-1; i>-1;i--){
        if (x[i] === "0"){
            x[i] = n.pop()
            if (n.length === 0) return parseInt(x.join(""),2)
        }
    }
    
    return parseInt(x.concat(n).join(""),2)
    
};