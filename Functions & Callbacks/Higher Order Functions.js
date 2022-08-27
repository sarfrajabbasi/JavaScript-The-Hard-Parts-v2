// what if want to copy array and divide by 2?

function copyArrayAndDivideBy2(array){
    const output = [];

    for(let i = 0; i<array.length; i++){
        // as long as i is less then array.length,
        output.push(array[i] / 2);
    }
    return output;//return the output array in result
}

const myArray2 = [1,2,3];//define constant myArray and assign [1,2,3]

// define constant result 
const result2 = copyArrayAndDivideBy2(myArray2);//create brand new array and assign it to result.[0.5,1,1.5]




// Higher-Order-function:---

function copyArrayAndManipulateBy2(array,instructions){

    const output = [];
    for(let i = 0; i < array.length; i++){
        output.push(instructions(array[i]));//[2,4,6]//the two input to output;
    }
    return output;
}

function multiplyBy2(input){return input * 2;}

const result = copyArrayAndManipulateBy2([1,2,3],multiplyBy2);
