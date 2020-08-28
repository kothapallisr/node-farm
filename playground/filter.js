const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const students = [
  { name: "ben", marks: 90 },
  { name: "tim", marks: 80 },
  { name: "sam", marks: 87 },
  { name: "john", marks: 77 },
  { name: "jane", marks: 78 },
  { name: "carl", marks: 96 },
  { name: "mic", marks: 91 },
];

const evens = numbers.filter((number) => number % 2 === 0);
const gradeA = students.filter((student) => student.marks > 90);
console.log(evens);
console.log(gradeA);
