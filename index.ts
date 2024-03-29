#!/usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let pinCode = 1234;

const pin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);

if (pin.pin === pinCode) {
    console.log("Your pincode is correct!");
} else {
    console.log("Your pincode is incorrect!");
}
if(pin.pin === pinCode){
const operations = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["Withdraw", "Check balance"],
    },
    
]);

if (operations.operation === "Withdraw") {
    const amount = await inquirer.prompt([
        {
            name: "amount",
            message: "How much do you want to withdraw?",
            type: "list",
            choices: ["5000", "1000","500","other"],
    },
    ]);

    if (amount.amount > myBalance) {
        console.log("You have insufficient balance.");
    }
    if (amount.amount === "other") {
        const other = await inquirer.prompt([
            {
                name: "otherAmount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
    

        if (other.otherAmount > myBalance) {
            console.log("You have insufficient balance.");
    }
      else{  myBalance -= other.otherAmount;
        console.log(`Money withdrawn successfully.Your remaining balance is ${myBalance}`);
      }

    }
    else {
        myBalance -= amount.amount;
        console.log(`Money withdrawn successfully.Your remaining balance is ${myBalance}`);
    }
}

else {
    console.log(`Your current balance is ${myBalance}`);
}
}


