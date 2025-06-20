/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime 58ms Beats 100.00%
 * Memory 65.20MB Beats 33.33%
 */
var maxDistance = function(s, k) {
    let vert = 0
    let hor = 0
    let ext = 0
    let ans = 0

    for (let i=0; i<s.length; i++){
        if (s[i] === "N"){
            if (vert++ < 0 && k){
                 ext += 2
                 k--
            }
        }
        else if (s[i] === "S"){
            if (vert-- > 0 && k){
                 ext += 2
                 k--
            }
        }
        else if (s[i] === "E"){
            if (hor++ < 0 && k){
                 ext += 2
                 k--
            }
        }
        else{
            if (hor-- > 0 && k){
                 ext += 2
                 k--
            }
        }
        ans = Math.max(ans, Math.abs(vert)+Math.abs(hor)+ext)
    }
    
    return ans
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime 27ms Beats 100.00%
 * Memory 65.82MB Beats 33.33%
 */
var maxDistance = function(s, k) {
    if (k >= s.length/2) return s.length
    let vert = 0
    let hor = 0
    let ext = 0
    let ans = 0

    for (let i=0; i<s.length; i++){
        if (s[i] === "N"){
            if (vert++ < 0 && k){
                 ext += 2
                 k--
            }
        }
        else if (s[i] === "S"){
            if (vert-- > 0 && k){
                 ext += 2
                 k--
            }
        }
        else if (s[i] === "E"){
            if (hor++ < 0 && k){
                 ext += 2
                 k--
            }
        }
        else{
            if (hor-- > 0 && k){
                 ext += 2
                 k--
            }
        }
        ans = Math.max(ans, Math.abs(vert)+Math.abs(hor)+ext)
    }
    
    return ans
};