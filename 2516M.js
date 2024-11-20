/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 50 ms, faster than 90.91% of JavaScript online submissions for Take K of Each Character From Left and Right.
 * Memory Usage: 56.3 MB, less than 82.61% of JavaScript online submissions for Take K of Each Character From Left and Right.
 */
var takeCharacters = function(s, k) {
    if (k === 0) return k
    let valid = 0
    let ac = 0
    let bc = 0
    let cc = 0
    let len = 0
    let ans = Infinity
    
    let left = 0
    let right = s.length
    
    function leftAdd(){
        while (valid < 3 && left <= right){
            if (s[left] === "a"){
                if (++ac === k) valid++
            }
            if (s[left] === "b"){
                if (++bc === k) valid++
            }
            if (s[left] === "c"){
                if (++cc === k) valid++
            }
            left++
            len++
        }        
    }
    
    function rightAdd(){
        while (valid < 3 && left <= right){
            if (s[--right] === "a"){
                if (++ac === k) valid++
            }
            if (s[right] === "b"){
                if (++bc === k) valid++
            }
            if (s[right] === "c"){
                if (++cc === k) valid++
            }
            len++
        }
    }
    leftAdd()
    if (valid < 3) return -1
    ans = len
    while(valid === 3 && left > 0){
        len--
        if (s[--left] === "a"){
            if (ac-- === k)valid--
        }
        else if (s[left] === "b"){
            if (bc-- === k) valid--
        }
        else if (s[left] === "c"){
            if (cc-- === k)valid--
        }

        if (valid < 3){
            rightAdd()
        }
        ans = Math.min(ans,len)
    }
    
    return ans
};