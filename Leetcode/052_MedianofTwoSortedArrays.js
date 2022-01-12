// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {

    let len1 = nums1.length;
    let len2 = nums2.length;
    // console.log(len1, len2);

    // we want to perform binary search on smallest length, because it's faster as well
    if(len1 > len2) return findMedianSortedArrays(nums2, nums1);

    let start = 0, end = len1;

    while(start <= end) {
        
        // find how much element we need take from nums1, and how many we need from nums2
        // mid1 will be the num1 midPoint, mid2 will be total length / 2 - mid1, the remaining half to find median
        let mid1 = Math.floor((start+end) / 2);
        let mid2 = Math.floor((len1+len2)/2) - mid1;
        // console.log(mid1, mid2);

        // find l1,l2,r1,r2, so we can compare l1 with r2; l2 with r1, anytime is >, then our midPoint need to shift
        let l1 = (mid1 === 0 ? -Infinity : nums1[mid1 -1]);
        let l2 = (mid2 === 0 ? -Infinity : nums2[mid2 - 1]);
        let r1 = (mid1 === len1 ? Infinity : nums1[mid1]);
        let r2 = (mid2 === len2 ? Infinity : nums2[mid2]);

        // if l1 > r2, meaning we take too much from nums1, so we need to serch left
        if(l1 > r2) {
            end = mid1 - 1;
        } else if(l2 > r1) {
            // too less from nums1
            start = mid1 + 1;
        } else {
            // if we are at perfect midPoint
            if((len1 + len2) % 2 === 0) {
                return (Math.max(l1,l2) + Math.min(r1,r2)) / 2;
            } else {
                return Math.min(r1,r2);
            }
        }
    }
};
// console.log(findMedianSortedArrays([1,2,3,4,5,6],[2,3,4,5]));
// console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1,2],[3,4]));