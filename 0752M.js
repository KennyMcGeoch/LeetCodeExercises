/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * Runtime: 171 ms, faster than 82.45% of JavaScript online submissions for Open the Lock.
 * Memory Usage: 63.4 MB, less than 71.28% of JavaScript online submissions for Open the Lock.
 */
var openLock = function(deadends, target) {

    if (target === '0000') return 0
    let seen = new Set()
    let cand = ['0000']
    let ans = 0
    
    
    for (let i=0; i<deadends.length; i++) seen.add(deadends[i])
    
    function newVals(str){
        let strs = []
        
        if (str[0] < '9') strs.push(nextChar(str[0])+str.slice(1))
        else strs.push('0' + str.slice(1))
        if (str[0] > '0') strs.push(lastChar(str[0])+str.slice(1))
        else strs.push('9'+str.slice(1))
        
        if (str[1] < '9') strs.push(str[0] + nextChar(str[1])+str.slice(2))
        else strs.push(str[0] + '0'+str.slice(2))
        if (str[1] > '0') strs.push(str[0] + lastChar(str[1])+str.slice(2))
        else strs.push(str[0] + '9' + str.slice(2))
        
        if (str[2] < '9') strs.push(str[0] + str[1] + nextChar(str[2])+str[3])
        else strs.push(str[0] + str[1] + '0'+str[3])
        if (str[2] > '0') strs.push(str[0] + str[1] + lastChar(str[2])+ str[3])
        else strs.push(str[0] + str[1] + '9'+ str[3])
        
        if (str[3] < '9') strs.push(str[0] + str[1] + str[2] + nextChar(str[3]))
        else strs.push(str[0] + str[1] + str[2] + '0')
        if (str[3] > '0') strs.push(str[0] + str[1] + str[2] + lastChar(str[3]))
        else strs.push(str[0] + str[1] + str[2] + '9')
        
        return strs
        
    }
    
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    function lastChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
    }
    
    while(cand.length){
        let newCand = []
        while(cand.length){
            let temp = cand.pop()
            if (temp === target) return ans
            if (seen.has(temp))continue
            else {
                seen.add(temp)
                newCand.push(...newVals(temp))
            }
        }
        cand = [...newCand]      
        ans++
        
    }
    
    return -1
    
};