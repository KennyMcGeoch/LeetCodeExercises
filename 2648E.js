/**
 * @return {Generator<number>}
 * Runtime: 50 ms, faster than 89.79% of JavaScript online submissions for Generate Fibonacci Sequence.
 * Memory Usage: 41.9 MB, less than 71.06% of JavaScript online submissions for Generate Fibonacci Sequence.
 */
var fibGenerator = function*() {
    yield 0
    yield 1
    const arr = [0,1]

    while (true){
        let ans = arr[0] + arr[1]
        arr.shift()
        arr.push(ans)
        yield ans
    }

    
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */