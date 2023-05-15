/**
 * @param {number} millis
 * Runtime: 57 ms, faster than 70.90% of JavaScript online submissions for Sleep.
 * Memory Usage: 41.5 MB, less than 86.74% of JavaScript online submissions for Sleep.
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */