/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Runtime: 158 ms, faster than 30.98% of JavaScript online submissions for Ransom Note.
 * Memory Usage: 45 MB, less than 58.53% of JavaScript online submissions for Ransom Note.
 */
 var canConstruct = function(ransomNote, magazine) {
    let magazineContents = {}

    for (i=0; i<magazine.length; i++){
        if (magazineContents[magazine[i]] === undefined){
            magazineContents[magazine[i]] = 1
        }
        else{
            magazineContents[magazine[i]]++
        }
    }

    for (i=0; i<ransomNote.length; i++){
        if (magazineContents[ransomNote[i]] === undefined || magazineContents[ransomNote[i]] === 0){
            return false
        }
        else{
            magazineContents[ransomNote[i]]--
        }
    }
    return true
};

canConstruct("fihjjjjei",
"hjibagacbhadfaefdjaeaebgi");
