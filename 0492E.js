/**
 * @param {number} area
 * @return {number[]}
 * Runtime: 219 ms, faster than 30.91% of JavaScript online submissions for Construct the Rectangle.
 * Memory Usage: 42.4 MB, less than 27.27% of JavaScript online submissions for Construct the Rectangle.
 */
 var constructRectangle = function(area) {

    let initialVal = Math.floor(Math.sqrt(area))
    let max = initialVal
    let min = initialVal

    while(true){
        let temp = max * min
        if (temp === area)return [max,min]
        else if (temp > area)min--
        else max++
    }
    
};