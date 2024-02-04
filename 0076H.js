/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * Fails due to TLE
 */
 var minWindow = function(s, t) {

    let iterationsT = t.length
    let iterations = s.length

    if (iterationsT > iterations) return ""

    let storeT = {}
    let solution = ""
    let stack = []
    let count = 0

    for (i=0; i<iterationsT; i++){
        if (storeT[t[i]] === undefined){
            storeT[t[i]] = 1
            count++
        }
        else{
            storeT[t[i]]++
        }
    }

    let loopVar = iterationsT - 1

    let stackStr = s.slice(0,loopVar)
    stack = stackStr.split("")
    
    for (i=0; i<stack.length; i++){
        if (storeT[stack[i]] !== undefined) {
            storeT[stack[i]]--
        }
    }

    for (let x in storeT){
        if (storeT[x] < 1){
            count--
        }
    }


    for (i=loopVar; i<iterations; i++){
        stack.push(s[i])
        if (storeT[s[i]] !== undefined){
            storeT[s[i]]--
            if (storeT[s[i]] === 0)count--
            while(count === 0){
                if (solution.length > stack.length || solution === ""){
                    solution = stack.join("")
                    if (solution.length === t.length)return solution
                    
                }
                if (storeT[stack[0]] === undefined){
                    stack.shift()
                }
                else{
                    storeT[stack[0]]++
                    if (storeT[stack[0]] === 1){
                        stack.shift()
                        count++
                    }
                    else{
                        stack.shift()
                    }
                }
            }
        }            
    }

    return solution  
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * Runtime: 79 ms, faster than 76.68% of JavaScript online submissions for Minimum Window Substring.
 * Memory Usage: 53.9 MB, less than 10.31% of JavaScript online submissions for Minimum Window Substring.
 */
var minWindow = function(s, t) {
    
    let hash = {}
    
    for (let i=0; i<t.length; i++) hash[t[i]] = hash[t[i]]-1 || 0
    
    let temp = 0
    for (x in hash) temp++
    
    let first = 0
    let len = Infinity
    let left = 0
    let right = 0
    
    while(right <= s.length){
        if (hash[s[right]] !== undefined){
            if (hash[s[right]]++ === 0){
                temp--
                while(temp === 0){
                    if (right-left < len){
                        len = right-left
                        first = left
                    }
                    if (hash[s[left]] !== undefined){
                        hash[s[left]]--
                        if (hash[s[left]] === 0) temp++
                    }
                    left++
                }
            }
        }
        right++
    }
    
    let ans = ""
    
    if (len === Infinity) return ans
    
    for (let i=first; i<=first+len; i++)ans += s[i]
    
    return ans
};

