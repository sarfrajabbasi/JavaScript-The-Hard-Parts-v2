// Higher-Order-function:---(imperative style)

function copyArrayAndManipulateBy2(array,instructions){
// defining the function:-copyArrayAndManipulate
    const output = [];
    for(let i = 0; i < array.length; i++){
        output.push(instructions(array[i]));//[2,4,6]//the two input to output;
    }
    return output;
}

function multiplyBy2(input){return input * 2;}//define the multiplyBy2 function;

const result = copyArrayAndManipulateBy2([1,2,3],multiplyBy2);//whole function grap and insert in.//[2,4,6]
 
console.log(result)