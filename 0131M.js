/**
 * @param {string} s
 * @return {string[][]}
 * Runtime: 218 ms, faster than 59.96% of JavaScript online submissions for Palindrome Partitioning.
 * Memory Usage: 77.4 MB, less than 20.46% of JavaScript online submissions for Palindrome Partitioning.
 */
var partition = function(s) {
    
    let pal = new Array(s.length)
    let ans = []
    
    for (let i=0; i<s.length; i++) pal[i] = []
    
    for (let i=0; i<s.length; i++){
        even(i)
        odd(i)
    }
    
    function even(num){
        let left = num
        let right = num+1
        while (s[left] === s[right] && left > -1){
            pal[left].push(right)
            left--
            right++
        }
        return
    }
    function odd(num){
        let left = num
        let right = num
        while (s[left] === s[right] && left > -1){
            pal[left].push(right)
            left--
            right++
        }
        return
    }

    function rec(arr, ind){
        if (ind === s.length) return ans.push(arr)
        for (let i=0; i<pal[ind].length; i++){
            let temp = [...arr]
            let max = pal[ind][i] + 1
            temp.push(s.slice(ind,max))
            rec(temp,max)
        }
        
    }
    
    rec([],0)
    
    return ans
    
};

/**
 * @param {string} s
 * @return {string[][]}
 * Runtime: 204 ms, faster than 84.96% of JavaScript online submissions for Palindrome Partitioning.
 * Memory Usage: 76.3 MB, less than 26.99% of JavaScript online submissions for Palindrome Partitioning.
 */
var partition = function(s) {
    
    let pal = new Array(s.length)
    let ans = []
    
    for (let i=0; i<s.length; i++) pal[i] = []
    
    for (let i=0; i<s.length; i++){
        even(i)
        odd(i)
    }
    
    function even(num){
        let left = num
        let right = num+1
        while (s[left] === s[right] && left > -1){
            pal[left].push(right)
            left--
            right++
        }
        return
    }
    function odd(num){
        let left = num
        let right = num
        while (s[left] === s[right] && left > -1){
            pal[left].push(right)
            left--
            right++
        }
        return
    }

    function rec(arr, ind){
        if (ind === s.length) return ans.push(arr)
        for (let i=0; i<pal[ind].length; i++){
            let temp = [...arr]
            temp.push(s.slice(ind,pal[ind][i] + 1))
            rec(temp,pal[ind][i] + 1)
        }
        
    }
    
    rec([],0)
    
    return ans
    
};