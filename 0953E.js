/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Runtime: 99 ms, faster than 45.29% of JavaScript online submissions for Verifying an Alien Dictionary.
 * Memory Usage: 45.1 MB, less than 9.19% of JavaScript online submissions for Verifying an Alien Dictionary.
 */
 var isAlienSorted = function(words, order) {

    let orderObj = {};
    let comparisonArray = [...words]
    let orderArray = order.split("")
    let iterations = words.length

    for (i=0; i<26; i++){
        orderObj[orderArray[i]] = i
    }

    console.log(orderObj)
    comparisonArray.sort(function(a,b){
        if (a===b){
            return 0
        }
        for (i=0; i<Math.min(a.length, b.length); i++){
            if (orderObj[a.charAt(i)] < orderObj[b.charAt(i)]){
                return -1
            }
            else if (orderObj[a.charAt(i)] > orderObj[b.charAt(i)]){
                return 1
            }
        }
        if (a.length > b.length){
            return 1
        }
        return -1
    })

    for (i=0; i<iterations; i++){
        if (words[i] !== comparisonArray[i]){
            return false
        }
    }
    return true
    
};

isAlienSorted(["hello","leetcode","helloo"],"hlabcdefgijkmnopqrstuvwxyz")