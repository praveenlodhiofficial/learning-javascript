// Strings in JS --------------------------------------------------------------------->
const name = 'Praveen Lodhi'
const college = 'DJ Sanghvi College of Engineering'

{
    // Normal Method to write Strings
    console.log('Line --- 07: My name is ' + name + '. I am studying in ' + college);

    // String Interpolation Method
    console.log(`Line --- 10: My name is ${name}. I am studying in ${college}.`);
}

// Different Methods to modify String ----------------------------------------------->

{
    // 'toUppercase'
    console.log(`Line 17 --- ${college.toUpperCase()}`)

    // 'toLowerCase'
    console.log(`Line 20 --- ${college.toLowerCase()}`)

    // 'string.lenght'
    console.log(`Line 23 --- ${college.length}`)

    // 'string.charAt(x)'
    console.log(`Line 26 --- ${college.charAt(25)}`)

    // 'string.sunString(x,y) -> used to cut a string, if -ve value we put even then it work as postive'
    console.log(`Line 29 --- ${college.substring(10, 30)}`)

    // 'string.slice(-x, y) -> it can also take -ve value which start from last & +ve value start from front'
    console.log(`Line 32 --- ${college.slice(-23, 18)}`)

    // 'string.trim() -> it is used to reamove spaces, for ecample in input form, there is also trimstart & trimend'
    console.log(`Line 35 --- ${college.trim()}`)

    // string.replace('x', 'y') -> it used to replace content in a string, for exam ple in url if someone type
    // 'https://portfolio,com/praveen lodhi   -> leave space in URL 
    // 'https://portfolio,com/praveen%20lodhi   -> that space exchange with URL encoding
    // 'https://portfolio,com/praveen-lodhi   -> but it shows like this '%20' replaced with '-'
    console.log(`Line 41 --- ${college.replace('Engineering', 'Chutiyap')}`)

    //string.includes('x') -> to find if specific keyword include in original string or not
    console.log(`Line 44 --- ${college.includes('Engineering')}`)
    console.log(`Line 45 --- ${college.includes('Chutiyap')}`)

    // string.split('x', 'y') -> split string on the basis what passed as an argument
    console.log(`Line 48 --- ${college.split(' ', '-')}`)




}





