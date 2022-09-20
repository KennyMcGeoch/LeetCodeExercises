/**
 * @param {number} n
 * @return {string[]}
 * Runtime: 143 ms, faster than 5.08% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 44 MB, less than 89.19% of JavaScript online submissions for Fizz Buzz.
 */
 var fizzBuzz = function(n) {
    arrayFizz = []
    for (i=1; i < n+1; i++){
        if (i % 3 === 0 && i % 5 === 0){
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
