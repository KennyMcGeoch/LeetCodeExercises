/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 469 ms, faster than 7.29% of JavaScript online submissions for Maximum Number of Vowels in a Substring of Given Length.
 * Memory Usage: 51 MB, less than 11.46% of JavaScript online submissions for Maximum Number of Vowels in a Substring of Given Length.
 */
var maxVowels = function(s, k) {
    
    let arr = []
    let loops = s.length
    let i = 0
    total = 0
    
    while (arr.length < k){
        arr.push(s[i])
        total += addVowel(arr[i++],1)
    }
    maxTotal = total
    
        
    for (i; i<loops; i++){
        arr.push(s[i])
        total += addVowel(s[i],1)
        total += addVowel(arr[0],-1)
        arr.shift()
        if (total > maxTotal) {
            maxTotal++
            if (maxTotal === k)  return k
        }
    }
        
    return maxTotal
        
    };
    
    function addVowel(letter, num){
        if (letter === "a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") return num
        return 0
    }
    