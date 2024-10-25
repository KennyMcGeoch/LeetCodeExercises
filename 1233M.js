/**
 * @param {string[]} folder
 * @return {string[]}
 * Runtime: 33 ms, faster than 100.00% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
 * Memory Usage: 63 MB, less than 100.00% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
 */
var removeSubfolders = function(folder) {
    let ans = []
    folder.sort()
    ans.push(folder[0])
    for (let i=1; i<folder.length; i++){
        if (folder[i].slice(0,ans[ans.length-1].length) !== ans[ans.length-1] || folder[i][ans[ans.length-1].length] !== "/")ans.push(folder[i])
    }
    return ans
};