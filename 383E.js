/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    for (i=0; i<ransomNote.length; i++){
        let test = ransomNote.charAt(i);
        var check = new RegExp (test, "g");
        count = ransomNote.match(check).length - (magazine.match(check)?.length ?? 0)
        if (count > 0){
            return false
        }
    }
    return true
};

canConstruct("fihjjjjei",
"hjibagacbhadfaefdjaeaebgi");