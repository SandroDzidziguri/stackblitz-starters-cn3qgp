/**
 * დასაწყისისთვის კოდის ამ ნაწილს არ მიაქციო ყურადღება.
 * მომავაში გაიგებ რისთვის გვჭირდება ის.
 *
 * ❌ თუმცა არ წაშალო! წინააღმდეგ შემთხვევაში დავალებებს ვერ შეასრულებ
 */
import { input, print } from './bitcamp/lib.js';



  

let grade = Number(input("Enter the student's score: "));
 
if(grade<100 && grade >=90){
    console.log("student's score: " + grade +"\nGrade: A")
  }
  if(grade<90 && grade >=80){
    console.log("student's score: " + grade +"\nGrade: B")
}
if(grade<80 && grade >=70){
  console.log("student's score: " + grade +"\nGrade: C")
}
if(grade<70 && grade >=60){
  console.log("student's score: " + grade +"\nGrade: D")
}
if(grade<60 && grade >=50){
  console.log("student's score: " + grade +"\nGrade: E")
}
if(grade<50){
  console.log("student's score: " + grade +"\nGrade: F")
}
 

