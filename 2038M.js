/**
 * @param {string} colors
 * @return {boolean}
 * Runtime: 62 ms, faster than 96.67% of JavaScript online submissions for Remove Colored Pieces if Both Neighbors are the Same Color.
 * Memory Usage: 45 MB, less than 91.67% of JavaScript online submissions for Remove Colored Pieces if Both Neighbors are the Same Color.
 */
var winnerOfGame = function(colors) {
    
    let aCount = 0
    let bTemp = -2
    let aTemp = -2
    
    for (let i=0; i<colors.length; i++){
        if (colors[i] === "A"){
            aTemp++
            bTemp = -2
            if (aTemp > 0) aCount++
            
        }
        else{
            bTemp++
            aTemp = -2
            if (bTemp > 0) aCount--
        }
    }
    return aCount > 0
    
};