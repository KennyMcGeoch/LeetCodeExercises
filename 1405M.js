/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 * Runtime: 40 ms, faster than 100.00% of JavaScript online submissions for Longest Happy String.
 * Memory Usage: 48.7 MB, less than 96.72% of JavaScript online submissions for Longest Happy String.
 */
var longestDiverseString = function(a, b, c) {
    
    let ans = []
    
    while(a || b || c){
        if (a && a >= b && a >= c){
            if ((ans[ans.length-1] !== "a" || ans[ans.length-2] !== "a")){
                ans.push("a")
                a--
            }
            else if (b && b >= c){
             ans.push("b")
             b--
            }
            else if (c){
            ans.push("c")
            c--
            }
            else return ans.join("")
             
        }
        else if (b && b >= c){
             if ((ans[ans.length-1] !== "b" || ans[ans.length-2] !== "b")){
                ans.push("b")
                b--
            }
            else if (a && a >= c){
             ans.push("a")
             a--
            }
            else if (c){
            ans.push("c")
            c--
            }
            else return ans.join("")
        }
        else if (c){
            if ((ans[ans.length-1] !== "c" || ans[ans.length-2] !== "c")){
                ans.push("c")
                c--
            }
            else if (b && b >= a){
             ans.push("b")
             b--
            }
            else if (a){
            ans.push("a")
            a--
            }
            else return ans.join("")
        }
    }
    
    return ans.join("")
    
};