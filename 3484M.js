/**
 * @param {number} rows
 * Runtime 1169ms Beats13.89%
 * Memory 85.08MB Beats 16.67%
 */
var Spreadsheet = function(rows) {
    obj = {}

        for (let i=1; i<= rows; i++){
            obj["A"+i] = 0
            obj["B"+i] = 0
            obj["C"+i] = 0
            obj["D"+i] = 0
            obj["E"+i] = 0
            obj["F"+i] = 0
            obj["G"+i] = 0
            obj["H"+i] = 0
            obj["I"+i] = 0
            obj["J"+i] = 0
            obj["K"+i] = 0
            obj["L"+i] = 0
            obj["M"+i] = 0
            obj["N"+i] = 0
            obj["O"+i] = 0
            obj["P"+i] = 0
            obj["Q"+i] = 0
            obj["R"+i] = 0
            obj["S"+i] = 0
            obj["T"+i] = 0
            obj["U"+i] = 0
            obj["V"+i] = 0
            obj["W"+i] = 0
            obj["X"+i] = 0
            obj["Y"+i] = 0
            obj["Z"+i] = 0
        }
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    obj[cell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    obj[cell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    let temp = formula.slice(1).split("+")
    if (temp[0].charCodeAt(0) > 60) temp[0] = obj[temp[0]]
    if (temp[1].charCodeAt(0) > 60) temp[1] = obj[temp[1]]
    return Number(temp[0]) + Number(temp[1])
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * @param {number} rows
 * Runtime 78ms Beats80.56%
 * Memory 75.55MB Beats 69.44%
 */
var Spreadsheet = function(rows) {
    obj = {}
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    obj[cell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    obj[cell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    let temp = formula.slice(1).split("+")
    if (temp[0].charCodeAt(0) > 60) temp[0] = obj[temp[0]] || 0
    if (temp[1].charCodeAt(0) > 60) temp[1] = obj[temp[1]] || 0
    return Number(temp[0]) + Number(temp[1])
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * @param {number} rows
 * Runtime 74ms Beats 83.33%
 * Memory 77.67MB Beats 50.00%
 */
var Spreadsheet = function(rows) {
    obj = {}
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    obj[cell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    obj[cell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    formula = formula.slice(1).split("+")
    if (formula[0].charCodeAt(0) > 60) formula[0] = obj[formula[0]] || 0
    if (formula[1].charCodeAt(0) > 60) formula[1] = obj[formula[1]] || 0
    return Number(formula[0]) + Number(formula[1])
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * @param {number} rows
 * Runtime 75ms Beats 80.56%
 * Memory 78.64MB Beats 33.33%
 */
var Spreadsheet = function(rows) {
    obj = new Array((rows*26)+1)
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    cell = Number((cell.charCodeAt(0)-65) * 26) + Number(cell.charCodeAt(1))
    obj[cell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    cell = Number((cell.charCodeAt(0)-65) * 26) + Number(cell.charCodeAt(1))
    obj[cell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    formula = formula.slice(1).split("+")
    if (formula[0].charCodeAt(0) > 60){
        let cell = Number((formula[0].charCodeAt(0)-65) * 26) + Number(formula[0].charCodeAt(1))
        formula[0] = obj[cell] || 0
        }
    if (formula[1].charCodeAt(0) > 60){
        let cell2 = Number((formula[1].charCodeAt(0)-65) * 26) + Number(formula[1].charCodeAt(1))
        formula[1] = obj[cell2] || 0
        }
    return Number(formula[0]) + Number(formula[1])
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    obj = new Array((rows*26)+1)
    mult = rows
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    newCell = Number((cell.charCodeAt(0)-65) * mult) + Number(cell.slice(1))
    obj[newCell] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    newCell = Number((cell.charCodeAt(0)-65) * mult) + Number(cell.slice(1))
    obj[newCell] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    formula = formula.slice(1).split("+")
    if (formula[0].charCodeAt(0) > 60){
        let cell = Number((formula[0].charCodeAt(0)-65) * mult) + Number(formula[0].slice(1))
        formula[0] = obj[cell] || 0
        }
    if (formula[1].charCodeAt(0) > 60){
        let cell2 = Number((formula[1].charCodeAt(0)-65) * mult) + Number(formula[1].slice(1))
        formula[1] = obj[cell2] || 0
        }
    return Number(formula[0]) + Number(formula[1])
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */