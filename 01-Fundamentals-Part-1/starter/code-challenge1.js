const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = false;

if (BMIMark > BMIJohn) {
    markHigherBMI = true;
}
else {
    markHigherBMI = false;
}

console.log("Mark's BMI = ", BMIMark);
console.log("John's BMI = ", BMIJohn);
console.log(markHigherBMI);