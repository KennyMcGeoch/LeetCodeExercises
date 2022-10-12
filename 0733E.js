/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * Runtime: 121 ms, faster than 49.09% of JavaScript online submissions for Flood Fill.
 * Memory Usage: 44.4 MB, less than 50.88% of JavaScript online submissions for Flood Fill.
 */
 var floodFill = function(image, sr, sc, color) {

    let originalValue = image[sr][sc]

    if (originalValue === color)return image

    fill(image,sr,sc,color)

    function fill(image,sr,sc,color){
        if (sr === -1 || sr === image.length) return 0
        if (sc === -1 || sc === image[0].length) return 0

        if (image[sr][sc] === originalValue)return 0

        image[sr][sc] = color

        return fill(image, sr-1, sc, color) + fill(image, sr+1, sc, color) + fill(image, sr, sc-1, color) + fill(image, sr, sc+1, color)
    }
    return image    
    
};

floodFill([[0,0,0],[0,0,0]],0,0,0)