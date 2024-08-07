/**
 * @param {number} num
 * @return {string}
 * Runtime: 42 ms, faster than 98.12% of JavaScript online submissions for Integer to English Words.
 * Memory Usage: 50.7 MB, less than 53.92% of JavaScript online submissions for Integer to English Words.
 */
var numberToWords = function(num) {
    
    if (num === 0) return "Zero"
    let ans = []
    let single = ["","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let ten = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    let teen = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    
    ans.push(convHun((num - num % 1000000000)/1000000000))
    num %= 1000000000
    ans.push(convHun((num - num % 1000000)/1000000))
    num %= 1000000
    ans.push(convHun((num - num % 1000)/1000))
    num %= 1000
    ans.push(convHun(num))
 
    
    
    
    function convHun(dig){
        let str = ""
        if (dig == 0) return str
        str += single[Math.floor(dig/100)]
        dig %= 100
        if (str.length) str += " Hundred "
        if (dig > 19){
            str += ten[Math.floor(dig/10)]
            dig %= 10
            if (str.length && str[str.length-1] != 0)str += " "
            str += single[dig]

        }
        else if (dig < 10) str += single[dig]
        else str += teen[dig%10]
        while (str[str.length-1] == 0) str = str.substring(0, str.length - 1)
        
        return str
        
    }
    let txt = ""
    if (ans[0].length) txt += ans[0] + " Billion "
    if (ans[1].length) txt += ans[1] + " Million "
    if (ans[2].length) txt += ans[2] + " Thousand "
    if (ans[3].length) txt += ans[3]
    else return txt.substring(0, txt.length - 1)
    
    return txt
    
};