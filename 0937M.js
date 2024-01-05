/**
 * @param {string[]} logs
 * @return {string[]}
 * Runtime: 54 ms, faster than 91.51% of JavaScript online submissions for Reorder Data in Log Files.
 * Memory Usage: 46.9 MB, less than 44.81% of JavaScript online submissions for Reorder Data in Log Files.
 */
var reorderLogFiles = function(logs) {
    
    let num = []
    let word = []
    let hash = {}
    
    for (let i=0; i<logs.length; i++){
        let temp = logs[i].search(" ")
        if (isNum(logs[i][temp+1]))num.push(logs[i])
        else {
            word.push(logs[i])
            hash[logs[i]] = logs[i].slice(temp+1)
            }
    }
    
    function isNum(str){
    return !/\D/.test(str);
    }
    
    word.sort()
    word.sort((a,b)=>hash[a].localeCompare(hash[b]))
    
    return word.concat(num)
    
};

/**
 * @param {string[]} logs
 * @return {string[]}
 * Runtime: 52 ms, faster than 93.87% of JavaScript online submissions for Reorder Data in Log Files.
 * Memory Usage: 47.1 MB, less than 39.15% of JavaScript online submissions for Reorder Data in Log Files.
 */
var reorderLogFiles = function(logs) {
    
    let num = []
    let word = []
    let hash = {}
    
    for (let i=0; i<logs.length; i++){
        let temp = logs[i].indexOf(" ")
        if (isNum(logs[i][temp+1]))num.push(logs[i])
        else {
            word.push(logs[i])
            hash[logs[i]] = logs[i].slice(temp+1)
            }
    }
    
    function isNum(str){
    return !/\D/.test(str);
    }
    
    word.sort()
    word.sort((a,b)=>hash[a].localeCompare(hash[b]))
    
    return word.concat(num)
    
};