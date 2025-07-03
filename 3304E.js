/**
 * @param {number} k
 * @return {character}
 * Runtime 0ms Beats 100.00%
 * Memory 54.14MB Beats 87.73%
 */
let str = ["a"]
for (let i=0; i<9; i++){
    let count = str.length
    for (let j=0; j<count; j++){
        if (str[j] === "z") str.push("a")
        else str.push(String.fromCharCode(str[j].charCodeAt(0)+1))
    }
}
var kthCharacter = function(k) {
return str[k-1]
};