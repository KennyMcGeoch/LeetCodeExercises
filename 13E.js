/**
 * @param {string} s
 * @return {number}
 * Starter code obtained from https://leetcode.com/problems/roman-to-integer/
 * Scores: Memory Usage Beats 88.84% of Submissions
 *         Runtime Beats 68.94%
 */
 const objectConverter = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

var romanToInt = function(s) {
    let romanNum = [];
    for (let i = 0; i < s.length; i++ ) {
            num = s.charAt(i);
            num = objectConverter[num];
            romanNum.push(`${num}`);
    }
    let sumOfNumerals = 0;
    for (let i = 0; i < romanNum.length; i++ ){
        let a = parseInt(romanNum[i]);
        let b = parseInt(romanNum[i+1]);
        if (a < b) {
            sumOfNumerals = sumOfNumerals - a;
        }
        else{
            sumOfNumerals += a;
        }

    }
return sumOfNumerals;
};



let s = "MCMXCIV"; 

romanToInt(s);