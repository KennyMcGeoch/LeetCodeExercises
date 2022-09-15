/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * Runtime: 1160 ms, faster than 11.99% of JavaScript online submissions for Find All Anagrams in a String.
Memory Usage: 49.9 MB, less than 27.88% of JavaScript online submissions for Find All Anagrams in a String.
 */
 var findAnagrams = function(s, p) {
    let solution = [];
    let characterChange = ""
    let trial = "";
    let pArray = Array(26).fill(0);
    for (i=0; i<p.length; i++){
        characterChange = p.charCodeAt(i) - 97;
        pArray[characterChange] += 1
    }
    let compArray = Array(26).fill(0);
    for (i=0; i<p.length; i++){
        trial = s.charCodeAt(i) - 97;
        compArray[trial] += 1
    }
    for (i=0; i < s.length + 1 - p.length; i++){
        if(JSON.stringify(compArray) === JSON.stringify(pArray)){
            solution.push(i)         
        }
        compArray[s.charCodeAt(i) - 97] -= 1;
        compArray[s.charCodeAt(i + p.length) - 97] += 1;


    }
    return solution
    
};

findAnagrams("abababcdabaefg", "ab")