// https://leetcode.com/problems/find-duplicate-subtrees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

var findDuplicateSubtrees = function(root) {

    // have map to count each occurance of key element
    let map = new Map();
    let result = [];
    
    traverse(root);


    function traverse(root){
        if(!root) return "#";
        
        // recursively iterate left and right element in the tree
        let left = traverse(root.left);
        let right = traverse(root.right);
        // record from it's root till all the loop
        let key = `${root.val}-${left}-${right}`;
        // console.log(key)


        if(!map.has(key)) {
            map.set(key, 1);
        } else {
            map.set(key, map.get(key)+1);
            // result will be the value === 2, to avoid duplicate push
            if(map.get(key) === 2) {
                // console.log(root)
                result.push(root);
            }
        }
        // re-assign the key to 
        return key
    }
    return result;
};

// [1,2,3,4,null,2,4,null,null,4]
// 1-2-4-#-#-#-3-2-4-#-#-#-4-#-#
// 3-2-4-#-#-#-4-#-#
// 4-#-#
// 2-4-#-#-#
// 4-#-#
// 2-4-#-#-#
// 4-#-#