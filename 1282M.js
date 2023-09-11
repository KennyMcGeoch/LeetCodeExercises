/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * Runtime: 72 ms, faster than 92.47% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
 * Memory Usage: 46 MB, less than 81.72% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
 */
var groupThePeople = function(groupSizes) {
    
    let hash = {}
    let loops = groupSizes.length
    let ans = []
    
    for (let i=0; i<loops; i++){
        if (hash[groupSizes[i]] === undefined) hash[groupSizes[i]] = [i]
        else hash[groupSizes[i]].push(i)        
    }
    let hashLoop = Object.keys(hash)
    hashLoop = hashLoop.map(x => Number(x))
    for (let i=0; i<hashLoop.length; i++){
        for (let j=0; j<hash[hashLoop[i]].length; j+= hashLoop[i]){
            ans.push(hash[hashLoop[i]].slice(j,j+hashLoop[i]))
        }
    }
                
    return ans
    
};

// /**
//  * @param {number[]} groupSizes
//  * @return {number[][]}
//  */
// var groupThePeople = function(groupSizes) {
    
//     let hash = {}
//     let loops = groupSizes.length
//     let ans = []
    
//     for (let i=0; i<loops; i++){
//         if (hash[groupSizes[i]] === undefined) hash[groupSizes[i]] = [i]
//         else hash[groupSizes[i]].push(i)        
//     }
//     let hashLoop = Object.keys(hash)
//     let temp = []
//     for (let i=0; i<hashLoop.length; i++){
//         temp = []
//         for (let j=0; j<hash[hashLoop[i]].length; j++){
//             temp.push(hash[hashLoop[i]][j])
//             if ((j+1) % hashLoop[i] === 0){
//                 ans.push(temp)
//                 temp = []
//             }
//         }
//     }
//     return ans
    
// };