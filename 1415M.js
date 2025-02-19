/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * Runtime 0ms Beats100.00%
 * Memory 55.71MB Beats 20.93%
 */
var getHappyString = function(n, k) {
    let ans = ""

    function recur(str){
        if (ans.length) return
        if (str.length === n){
            if (--k === 0) ans = str
            else return
        }
        else if (str[str.length-1] === "c") recur(str + "a") + recur(str + "b")
        else if (str[str.length-1] === "b") recur(str + "a") + recur(str + "c")
        else recur(str + "b") + recur(str + "c")
    }
    
    recur("a")
    recur("b")
    recur("c")
    return ans

};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * Runtime 2ms Beats100.00%
 * Memory 54.83MB Beats 53.49%
 */
var getHappyString = function(n, k) {
    let comb = 3 * (2 ** (n-1))
    if (k > comb) return ""
    let ans = ""

    function recur(str){
        if (ans.length) return
        if (str.length === n){
            if (--k === 0) ans = str
            else return
        }
        else if (str[str.length-1] === "c") recur(str + "a") + recur(str + "b")
        else if (str[str.length-1] === "b") recur(str + "a") + recur(str + "c")
        else recur(str + "b") + recur(str + "c")
    }
    
    recur("a")
    recur("b")
    recur("c")
    return ans

};