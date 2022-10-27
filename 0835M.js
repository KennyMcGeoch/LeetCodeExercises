/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 * Runtime: 196 ms, faster than 95.83% of JavaScript online submissions for Image Overlap.
 * Memory Usage: 43.3 MB, less than 95.83% of JavaScript online submissions for Image Overlap.
 */
 var largestOverlap = function(img1, img2) {

    let n = img1.length
    let count = 0
    let fill = new Array((3*n)-2).fill(0)

    for (i=1; i<n; i++){
        img2.unshift(fill)
        img2.push(fill)
    }

    let doubleN = (2*n) - 1

    for (i=n-1; i< doubleN; i++){
        for (j=1; j<n; j++){
            img2[i].unshift(0)
            img2[i].push(0)
        }
    }

    for (i=0; i<doubleN; i++){
        for (j=0; j<doubleN; j++){
            total = compareArrays(i,j)
            count = Math.max(count,total )
        }

    }

    function compareArrays(x,y){
        let total = 0
        for (k=0; k<n; k++){
            for (l=0; l<n; l++){
                if (img1[k][l] === 1 && img2[k+x][l+y] === 1){
                    total++
                }
            }
        }
        return total
    }
    return count
    
};

largestOverlap([[1,1,0],[0,1,0],[0,1,0]],[[0,0,0],[0,1,1],[0,0,1]])