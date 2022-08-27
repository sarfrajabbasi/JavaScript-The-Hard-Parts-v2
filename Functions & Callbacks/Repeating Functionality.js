// now suppose we have a function:--

// copyArrayAndMultiplyBy2

function copyArrayAndMultiplyBy2(array){
    const output = [];

    for(let i = 0; i<array.length; i++){
        // as long as i is less then array.length,
        output.push(array[i] * 2);
    }
    return output;//return the output array in result
}

const myArray = [1,2,3];

const result = copyArrayAndMultiplyBy2(myArray);//create brand new array and assign it to result.[2,4,6]




// what if want to copy array and divide by 2?

function copyArrayAndMultiplyBy2(array){
    const output = [];

    for(let i = 0; i<array.length; i++){
        // as long as i is less then array.length,
        output.push(array[i] / 2);
    }
    return output;//return the output array in result
}

const myArray2 = [1,2,3];

const result2 = copyArrayAndMultiplyBy2(myArray);//create brand new array and assign it to result.[0.5,1,1.5]
