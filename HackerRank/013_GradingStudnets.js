function gradingStudents(grades) {
    // Write your code here

    // loop throught the grades array;
    for(let i = 0; i < grades.length; i++) {
        // if grades element is < then 35, the no need to round
        if(grades[i] < 35) {
            continue;
        }

        // if grades element % 5 !== 0, then we need to round up to next multiple of 5
        // find the different from each element from it's next multiple of 5, we can use module feature, and subtract 5, we have the different
        let different = 5 - (grades[i] % 5)
        console.log(different);

        // new total will be different plus grades
        let RoundedGrade = grades[i] + different;
        console.log(RoundedGrade);

        // if new total - grades element < 3, then we round up to new total
        if(RoundedGrade - grades[i] < 3) {
            grades[i] = RoundedGrade;
        }
    }
    return grades;
}
console.log(gradingStudents([73,67,38,33]));