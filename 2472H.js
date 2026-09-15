/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime 23ms Beats 46.15%
 * Memory 57.97MB Beats 53.85%
 */
var maxPalindromes = function(s, k) {
    if (k === 1) return s.length
    let arr = new Array(s.length+1).fill(0)
    let best = new Array(s.length+1).fill(0)
    let left,right

    if (k%2 === 0){
        for (let i=0; i<s.length; i++) checkOdd(i)
        for (let i=0; i<s.length; i++) checkEven(i)
    }
    else{
        for (let i=0; i<s.length; i++) checkEven(i)
        for (let i=0; i<s.length; i++) checkOdd(i)
    }



    function checkOdd(val){
        left = val
        right = val
        while(right - left < k-1){
            if (s[--left] !== s[++right]) return false
        }
        arr[left] = (right-left) + 1
        return true
    }
    function checkEven(val){
        left = val
        right = val+1
        while(right - left <= k){
            if (s[left--] !== s[right++]) return false
        }
        arr[left+1] = (right-left) - 1
        return true
    }

    function recur(ind,val){
        if (best[ind] > val) return
        else best[ind] = val
        if (ind >= s.length) return
        if (arr[ind] !== 0) recur(ind+arr[ind],val+1)
        return recur(ind+1,val)
    }
    recur(0,0)

    return best[s.length]
};