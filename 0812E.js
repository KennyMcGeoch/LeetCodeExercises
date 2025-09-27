/**
 * @param {number[][]} points
 * @return {number}
 * Runtime 5ms Beats 89.74%
 * Memory 54.40MB Beats 93.59%
 */
var largestTriangleArea = function(points) {
    let ans = 0

    for (let i=0; i<points.length-2; i++){
        for (let j=i+1; j<points.length-1; j++){
            for (let k=j+1; k<points.length; k++){
                ans = Math.max(calc(points[i],points[j],points[k]),ans)
            }
        }
    }

    function calc(one,two,three){
        return Math.abs(one[0] * two[1] + two[0] * three[1] + three[0]*one[1] - one[1]*two[0] - two[1]*three[0] - three[1]*one[0])
    }

    return ans / 2
};