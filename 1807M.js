/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 * Runtime 61ms Beats 40.00%
 * Memory 101.53MB Beats 10.00%
 */
var evaluate = function(s, knowledge) {
    let hash = {}

    for (let i=0; i<knowledge.length; i++) hash[knowledge[i][0]] = knowledge[i][1]

    let ans = ""
    let str = ""
    let build = false

    for (let i=0; i<s.length; i++){
        if (s[i] === "("){
            build = true
            str = ""
        }
        else if (s[i] === ")"){
            build = false
            if (hash[str] === undefined) ans += "?"
            else ans += hash[str]
        }
        else if (build) str += s[i]
        else ans += s[i]
    }

    return ans
};