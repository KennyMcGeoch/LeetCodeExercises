/**
 * @param {number[][]} img
 * @return {number[][]}
 * Runtime: 103 ms, faster than 70.37% of JavaScript online submissions for Image Smoother.
 * Memory Usage: 49.4 MB, less than 58.02% of JavaScript online submissions for Image Smoother.
 */
var imageSmoother = function(img) {    
    
    function av(x,y){
        let num = 0
        let tot = 0
        
        for (let i=-1; i<2; i++){
            for (let j=-1; j<2; j++){
                if (img[x+i] === undefined || img[x+i][y+j] === undefined ) continue
                else{
                    tot += img[x+i][y+j]
                    num++
                }
            }
        }
        return Math.floor(tot/num)
    }
    
    let ans = []
    
    for (let i=0; i< img.length; i++){
        ans.push([])
        for (let j=0; j<img[0].length; j++){
            ans[i].push(av(i,j))
        }
    }
    return ans
};