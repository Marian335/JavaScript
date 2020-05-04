console.log("Hello World!")

// 1

admin = "Joseph Stalin"

name = admin

console.log(name)

//2

login = "Admin"

password = "TheMaster"

console.log("Who's there ?" )

if(login = "Admin"){

    if(password = "The Master"){

        console.log("Welcome!")    

    }else if(password = "Cancel"){

        console.log("Canceled.")

    }else{

        console.log("Wrong password")

    }

}else if(login = "Cancel"){

    console.log("Canceled.")

}else{

    console.log("I don't lnow you")

}

//3

let user = {};

user.name = "ПИЛИП";

user.surname = "ШЕВЧЕНКО";

console.log(user);

user.name = "CЕРГІЙ";

console.log(user);

delete user.name;

console.log(user);

//4

let employeeSalaries = {a: 111, b: 222, c: 333};

if (employeeSalaries == null){

    console.log(0);

}else if(employeeSalaries != null) {

    allMoney = 0;

    for(let property in employeeSalaries){

        allMoney = allMoney + employeeSalaries[property]

    }

    console.log(allMoney);

}

//5

function calc(a, v, b){

    if((b != '*') &&( b != '/') && (b != '+') &&(b != '-' )){

        throw new Error("Attempted division by zero!");

    } else {

        switch(b){

            case '+':

                return a + v;

            case '-':

                return a - v;

            case '*':

                return a * v;

            case '/':

                return a / v;

        }

    }

}

try{

    a = calc(2,5 ,"*");

} catch(Error){

    console.log("Wrong value");

}

console.log(a);



login = "Admin";

password = "The Master";

console.log("Who\'s there ?" )

switch(login){

    case 'Admin':

        switch(password){

            case 'The Master':

                console.log("Welcome!") ;

                break;

            case 'Cancel':

                console.log("Canceled.");

                break;

            default:

                console.log("Wrong password");

                break;

        }

        break;

    case 'Cancel':

        console.log("Canceled.");

        break;

    default:

        console.log("I don't lnow you");

        break;

}