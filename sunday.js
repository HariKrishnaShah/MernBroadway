// // alert("I am Hari");
// // let x = prompt("Enter the first number");
// // let y = prompt("Enter the first number");

// // let ans = x + y;

// // x>y?document.getElementById("answer").innerHTML += "X is greater":document.getElementById("answer").innerHTML += "y  is greater";
// // document.getElementById("answer").innerHTML += "The sum is " + ans;

// let gender = prompt("Type male if you are mail else type female");

// if(gender === "male")
// {
//     let salary = Number(prompt("Enter your salary"));
//     salary>25000?alert("Salary is greater than " + 25000): alert("Salary is lesser than " + 25000);
// }

// else if(gender === "female")
// {
//     let age = Number(prompt("Enter your age"));
//     age>20?alert("You are legally allowed to marry"):alert("You are not legally allowed to marry");
// }

// let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let days = "The days of the weeks are "

// for(let i = 0;  i<week.length; i++)
// {
//     days += week[i] + " ";
// }
// alert(days);

const x = Number(prompt("Enter the first number"));
const y = Number(prompt("Enter the Second number"));
let ans = 0;
const action = Number(prompt("Enter 1 to add, 2 to subtract, 3 to multiply and 4 to divide"));

switch(action)
{
    case 1:
        ans = x + y;
        alert("The answer is " + ans);
        break;
    case 2:
        ans = x - y;
        alert("The answer is " + ans);
        break;
    case 3:
        ans = x * y;
        alert("The answer is " + ans);
        break;
    case 4:
        ans = x / y;
        alert("The answer is " + ans);
        break;
    default:
        alert("Invalid command")

}

