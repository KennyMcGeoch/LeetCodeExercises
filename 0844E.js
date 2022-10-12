/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 116 ms, faster than 22.23% of JavaScript online submissions for Backspace String Compare.
 * Memory Usage: 44.5 MB, less than 8.93% of JavaScript online submissions for Backspace String Compare.
 */
 var backspaceCompare = function(s, t) {

    s = removeChar(s)
    t = removeChar(t)

    function removeChar(str){
        for (i=0; i<str.length; i++){
            if (str[i] === "#"){
                if (i>0){
                    str = str.slice(0,(i-1)) + str.slice(i+1)
                    i-=2
                }
                else{
                    str = str.slice(1)
                    i--
                }
                
            }
        }
        return str
    }

    return s === t
    
};

backspaceCompare("ab#c", "ad#c")