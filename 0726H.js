/**
 * @param {string} formula
 * @return {string}
 * Runtime: 50 ms, faster than 97.37% of JavaScript online submissions for Number of Atoms.
 * Memory Usage: 51.6 MB, less than 78.95% of JavaScript online submissions for Number of Atoms.
 */
var countOfAtoms = function(formula) {
    let seg = []
    
    function div(str, mult){
        let temp = str[0]
        let num = ""
        let brack = 0
        if (temp === "(") brack++
        for (let i=1; i<str.length; i++){
            if (temp === "i") console.log("fail",str,i, str.slice(i-1), num)
        if (str.charCodeAt(i) === 40 || brack){
            seg.push([temp, (num || 1) * mult])
            temp = ""
            if (brack) temp += str[i]
            if (str.charCodeAt(i) === 40) brack++
            num = ""
            while(brack){
                if (str.charCodeAt(++i) === 40) brack++
                else if (str.charCodeAt(i) === 41) brack--
                if (brack) temp += str[i]
            }
            while(str.charCodeAt(i+1) > 47 && str.charCodeAt(i+1) < 58){
                num += str[++i]
            }
            div(temp,(mult * (num || 1)))
            temp = str[i+1]
            if (temp === "(") brack++
            i++
            num = ""
            
        }
        else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 && temp !== ""){
            seg.push([temp, (num || 1) * mult ])
            temp = str[i]
            num = ""
        }
        else if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) num += str[i]
        else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)temp += str[i]
    }
    seg.push([temp, (num || 1) * mult])
};
    
    div(formula,1)
    seg = seg.filter((a)=> a[0] !== '' && a[0] !== "(" && a[0] !== undefined)
    let ans = {}
    for (let i=0; i<seg.length; i++) ans[seg[i][0]] = (ans[seg[i][0]] || 0) + seg[i][1]
    let arr = []
    for (x in ans) arr.push([x,ans[x]])
    arr.sort((a,b)=>a[0]>b[0] ? 1 : -1)
    ans = ""
    for (let i=0; i<arr.length; i++){
        ans += arr[i][0]
        if (arr[i][1] > 1) ans += arr[i][1]
    }
    return ans
}