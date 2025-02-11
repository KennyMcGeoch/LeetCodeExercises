/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 * Runtime 3ms Beats 28.57%
 * Memory 52.02MB Beats 19.55%
 */
var removeOccurrences = function(s, part) {
    let stack = []
    let len = part.length-1
    let last = part[len]

    function check(ind){
        for (let j=0; j<len; j++){
            if (stack[ind+j] !== part[j])return false
        }
        return true
    }
    function rem(){
        for (let j=0; j<len; j++) stack.pop()
        return
    }

    for (let i=0; i<s.length; i++){
        if (s[i] !== last) stack.push(s[i])
        else if (stack.length >= len && check(stack.length-len)) rem()
        else stack.push(s[i])
    }
    return stack.join("")
};

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 * Runtime 0ms Beats 100.00%
 * Memory 49.61MB Beats 47.37%
 */
var removeOccurrences = function(s, part) {
    let ind = s.indexOf(part)
    while(ind !== -1){
        s = s.substring(0,ind) + s.substring(ind+part.length)
        ind = s.indexOf(part)
    }
    return s
};