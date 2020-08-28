const numbers = [1,2,3,4,5,6,7,8,9];
const students = [{name: 'ben',marks: 91},
{name: 'mic',marks: 87},
{name: 'jane',marks: 89},
{name: 'ken',marks: 96},
{name: 'john',marks: 93},
{name: 'ric',marks: 80},];

const evens = numbers.filter(number => number%2 === 0);

console.log(evens);

const gradeA = students.filter(student => student.marks > 90);

console.log(gradeA);







                