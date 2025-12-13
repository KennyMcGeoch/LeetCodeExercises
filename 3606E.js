/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 * Runtime 4ms Beats 83.08%
 * Memory 61.72MB Beats 64.61%
 */
var validateCoupons = function(code, businessLine, isActive) {
    let elec = []
    let groc = []
    let phar = []
    let rest = []
    let temp = 0

    function validateCoupon(str){
        for (let j=0; j<str.length; j++){
            temp = str.charCodeAt(j)
            if (temp > 47 && temp < 58 ) continue
            else if (temp > 64 && temp < 91) continue
            else if (temp > 96 && temp < 123) continue
            else if (temp === 95) continue
            else return false
        }
        return true
    }
    for (let i=0; i<code.length; i++){
        if (isActive[i]){
            if (businessLine[i] === "electronics"){
                if (validateCoupon(code[i])) elec.push(code[i])
            }
            else if (businessLine[i] === "grocery"){
                if (validateCoupon(code[i])) groc.push(code[i])
            }
            else if (businessLine[i] === "pharmacy"){
                if (validateCoupon(code[i])) phar.push(code[i])
            }
            else if (businessLine[i] === "restaurant"){
                if (validateCoupon(code[i])) rest.push(code[i])
            }
        }
    }
    elec.sort()
    groc.sort()
    phar.sort()
    rest.sort()
    return elec.concat(groc).concat(phar).concat(rest).filter((a)=>a)
};