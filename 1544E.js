/**
 * @param {string} s
 * @return {string}
 * Runtime: 152 ms, faster than 7.80% of JavaScript online submissions for Make The String Great.
 * Memory Usage: 44.2 MB, less than 67.38% of JavaScript online submissions for Make The String Great.
 */
 var makeGood = function(s) {

    let change = true

    while (change){
        change = false
        for (i=0; i<s.length-1; i++){
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32){
                s = s.slice(0,i) + s.slice(i+2)
                change = true
                break
            }
        }
    }

    return s
    
};