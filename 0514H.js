/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 * Runtime: 126 ms, faster than 20.00% of JavaScript online submissions for Freedom Trail.
 * Memory Usage: 60.5 MB, less than 6.67% of JavaScript online submissions for Freedom Trail.
 */
var findRotateSteps = function(ring, key) {
    
    let letters = {}
    
    for (let i=0; i<ring.length; i++){
        if (letters[ring[i]] === undefined) letters[ring[i]] = [i]
        else letters[ring[i]].push(i)
    }
    let curr = [[0,0]]
    
    for (let i=0; i<key.length;i++){
        let dest = {}
        let arr = letters[key[i]]
        for (k=0; k<curr.length; k++){
            let left = Infinity
            let lInd = 0
            let right = Infinity
            let rInd = 0
            for (let j=0; j<arr.length; j++){
                let tempLeft = curr[k][0]- arr[j]
                if (tempLeft < 0) tempLeft += ring.length
                tempLeft += curr[k][1]
                if (tempLeft < left){
                    left = tempLeft
                    lInd = arr[j]
                }
                let tempRight = arr[j] - curr[k][0]
                if (tempRight < 0) tempRight += ring.length
                tempRight += curr[k][1]
                if (tempRight < right){
                    right = tempRight
                    rInd = arr[j]
                }
                if (dest[lInd] === undefined) dest[lInd] = [lInd, left]
                else if (dest[lInd][1] > left) dest[lInd][1] = left
                if (dest[rInd] === undefined) dest[rInd] = [rInd, right]
                else if (dest[rInd][1] > right) dest[rInd][1] = right
            }
            
            
        }
        curr = []
        for (x in dest){
            curr.push(dest[x])
        }
    }
    let min = Infinity
    for (let i=0; i<curr.length; i++) min = Math.min(min, curr[i][1])
    
    return min + key.length
};