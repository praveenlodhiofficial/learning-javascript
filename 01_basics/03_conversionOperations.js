// DATATYPE CONVERSION --------------------------------------------------------------->

{
    // '33' --> string to number --> 33
    // '33abc' --> string to number --> NaN (Not a Number)

    let number = '50';
    let convertStringToNumber = Number(number)
    console.log(`Line 06 --- '50' Converted to ` + typeof convertStringToNumber + ` :` + convertStringToNumber);

}

{
    // true --> boolean to number --> 1
    // false --> boolean to number --> 0

    let isLoggedIn = true
    let convertBooleanToNumber = Number(isLoggedIn)
    console.log(`Line 14 --- 'true' Converted to ` + typeof convertBooleanToNumber + ` :` + convertBooleanToNumber);

}

// CONCATENATION OF STRING --------------------------------------------------------------->

{
    let firstName = 'Praveen '
    let lastName = 'Lodhi'

    let fullName = firstName + lastName
    console.log(`Line 26 --- fullName: ` + fullName);

}

// CONCATENATION OF NUMBER --------------------------------------------------------------->

{
    let num1 = 6
    let num2 = 7

    let sum = num1 + num2
    console.log(`Line 39 --- sum: ` + sum);
}



