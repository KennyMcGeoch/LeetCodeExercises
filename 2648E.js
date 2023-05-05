/**
 * @return {Generator<number>}
 * Runtime: 45 ms, faster than 97.57% of JavaScript online submissions for Generate Fibonacci Sequence.
 * Memory Usage: 41.4 MB, less than 94.58% of JavaScript online submissions for Generate Fibonacci Sequence.
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