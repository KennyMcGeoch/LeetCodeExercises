/**
 * @param {number} celsius
 * @return {number[]}
 * Runtime: 58 ms, faster than 100.00% of JavaScript online submissions for Convert the Temperature.
 * Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions for Convert the Temperature.
 */
 var convertTemperature = function(celsius) {

    let kelvin = celsius + 273.15
    let fahrenheit = (celsius * 1.8) + 32

    return [kelvin, fahrenheit]
    
};