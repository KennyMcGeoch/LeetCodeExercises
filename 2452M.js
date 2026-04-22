/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 * Runtime 21ms Beats 28.57%
 * Memory 55.03MB Beats 90.48%
 */
var twoEditWords = function(queries, dictionary) {
    let ans = []
    let curr = 0

    for (let i=0; i<queries.length; i++){
        for (let j=0; j<dictionary.length; j++){
            curr = 0
            for (let k=0; k<dictionary[j].length; k++){
                if (queries[i][k] !== dictionary[j][k]) curr++
            }
            if (curr < 3){
                j = dictionary.length
                ans.push(queries[i])
            }
        }
    }

    return ans
};

/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 * Runtime 2ms Beats 95.24%
 * Memory 54.97MB Beats 90.48%
 */
var twoEditWords = function(queries, dictionary) {
    let ans = []
    let curr = 0

    for (let i=0; i<queries.length; i++){
        for (let j=0; j<dictionary.length; j++){
            curr = 0
            for (let k=0; k<dictionary[j].length; k++){
                if (queries[i][k] !== dictionary[j][k]){
                    if (curr++ === 2) k = dictionary[j].length
                }
            }
            if (curr < 3){
                j = dictionary.length
                ans.push(queries[i])
            }
        }
    }

    return ans
};