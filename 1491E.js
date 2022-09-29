/**
 * @param {number[]} salary
 * @return {number}
 * Runtime: 74 ms, faster than 76.88% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 * Memory Usage: 41.8 MB, less than 77.52% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */
 var average = function(salary) {

    salary.sort(function(a, b){return a - b});
    let sum = salary.reduce((partialSum, a) => partialSum + a, 0) - salary[0] - salary[salary.length-1]
    sum /= (salary.length - 2)

    return sum
    
};