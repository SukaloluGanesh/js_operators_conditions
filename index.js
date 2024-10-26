// // Question 1 

// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));

// //  arithmetic operators
// console.log(`add ${num1 + num2}`);
// console.log(`Sub ${num1}`);
// console.log(`Multiply ${num1*num2}`);
// console.log(`divide ${num1/num2}`);
// console.log(`modules ${num1%num2}`);
// console.log(`pre increment ${++num1}`);
// console.log(`pre decrement ${--num1}`);
// console.log(`post increment ${num1++}`);
// console.log(`post decrement ${num1--}`);
// // comparison operators
// console.log(`> ${num1>num2}`);
// console.log(`< ${num1<num2}`);
// console.log(`== ${num1==num2}`);
// console.log(`=== ${num1===num2}`);
// console.log(`!== ${num1!==num2}`);
// console.log(`!= ${num1!=num2}`);
// console.log(`<= ${num1<=num2}`);
// console.log(`>= ${num1>=num2}`);
// // assingment operators
// console.log(`+= ${num1+=5}`);
// console.log(`-= ${num1-=5}`);
// console.log(`*= ${num1*=5}`);
// console.log(`/= ${num1/=5}`);




//  question 2

// let firstName = prompt("enter the first name");
// let lastName = prompt("enter the last name");
// let age = Number(prompt("enter the age"));
// console.log(`FullName : ${firstName} ${lastName}`);
// (age > 18) ? console.log("Eligible for vote") : console.log("not Eligible for vote");
// let fullName = firstName + " " + lastName;
// (fullName.length > 10)? console.log(`${fullName}`):console.log("full name is less than 10 letters");



//  question 3

// let numm = Number( prompt("Enter the number"));
// (numm & 1) ? console.log("Odd") : console.log("Even");
// let modulus = numm % 2;
// let exponentiation = numm ** 2;

// console.log(modulus);
// console.log(exponentiation);

// (numm > 50)?console.log("Greater than 50"):console.log("Less than or equal to 50");


// question 4

// let numm1 = Number(prompt("enter the number 1 : "))
// let numm2 = Number(prompt("enter the number 2 : "))
// let numm3 = Number(prompt("enter the number 3 : "))

// let numm4 = numm1 + numm2 ;
// console.log(numm4);

// console.log(numm4 >= numm3);

// (numm4 > 50 && numm3 < 100 ) ? console.log("numm4 is greater than 50") : console.log("numm3 is less than 100")


// question 5 

// let firstName = prompt("Enter the firstname");
// let lastName = prompt("Enter the lastname");
// let num = prompt("Enter the number");
// console.log(firstName+ " " +lastName);
// console.log(typeof(Number(num)));
// console.log(Number(num) + 10);

// question 6

// let totalAmount = prompt("Enter the total : ");
// let eligible ;
// totalAmount >= 150 ? eligible = true : eligible = false;
// totalAmount >= 150 ? console.log("discount applied") : console.log("discount not applied");
 
// let discount = 15/100 * totalAmount;

// eligible ? console.log(`amount after discount ${totalAmount-discount}`) : console.log("total amount less than 150");


//  question 7

// let str = prompt("enter the sentence : ");
// let reverse = str.split("").reverse().join("");
// console.log(reverse);


// question 8

// let num1 = prompt("Number 1");
// let num2 = prompt("Number 2");

// console.log(num1 & num2);
// console.log(num1 | num2);
// console.log(num1 ^ num2);

// let leftShift = num1 << 2;
// console.log(leftShift);


// question 9

// let age = prompt("Enter the age");
// let salary = prompt("Enter the salary");
// let creditScore = prompt("Enter the credit score ");


// if(age >= 21){
//   if(salary > 30000){
//     if(creditScore > 650){
//       console.log("Eligible for the loan");
//     }
//   }
// }else{
//   console.log("not eligible for the loan");
// }

// (age >= 21 && salary > 30000 && creditScore > 650)? console.log("Eligible for the loan"):console.log("not Eligible for the loan")

// question 10

// let score1 = Number(prompt("Enter the score 1"));
// let score2 = Number( prompt("Enter the score 2"));
// let score3 = Number( prompt("Enter the score 3 "));

// let totalScore = score1 + score2 + score3;

// (totalScore > 60)?console.log("passed"):console.log("failed");
//   totalScore = totalScore + 5;
//   (totalScore > 60)?console.log("passed with bonus"):console.log("failed with bonus");