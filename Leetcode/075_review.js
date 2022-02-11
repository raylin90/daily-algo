const sort = (nums1, m, nums2, n) => {
    let lastIdx = m + n - 1;

    while(nums2.length) {
        // console.log(nums2[n-1], nums1[m-1])
        if(nums1[m-1] > nums2[n-1]) {
            nums1[lastIdx] = nums1[m-1];
            lastIdx--;
            m--;
        } else {


            nums1[lastIdx] = nums2.pop();
            n--;
            lastIdx--;
        }

    }
    console.log(nums1);

}
// console.log(sort([1,2,3,0,0,0],3,[2,5,6],3));
console.log(sort([1],1,[],0));
console.log(sort([0],0,[1],1));