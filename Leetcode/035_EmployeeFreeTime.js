// https://aaronice.gitbook.io/lintcode/sweep-line/employee-free-time

/*
we need to find maxEnd, and minStart


if start > end, we have gap:  minStart = [0]
if start <= end, it's has same interval, compare end, maxEnd = max([1])

*/