/**
 * @param {number} n
 * @return {string[]}
 * Runtime: 108 ms, faster than 51.83% of JavaScript online submissions for Fizz Buzz.
 * Memory Usage: 44.3 MB, less than 62.18% of JavaScript online submissions for Fizz Buzz.
 */
 var fizzBuzz = function(n) {
    arrayFizz = []
    for (i=1; i <= n; i++){
        if (i % 15 === 0){
            arrayFizz.push("FizzBuzz");
        }
        else if (i % 3 === 0){
            arrayFizz.push("Fizz");
        } 
        else if (i % 5 === 0){
            arrayFizz.push("Buzz");
        } 
        else{
            arrayFizz.push(i.toString());
        }
    }
    return arrayFizz
};
