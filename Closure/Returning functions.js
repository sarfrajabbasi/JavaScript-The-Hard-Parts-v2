// :-- But it all starts with us returning a function from another function.


// functions can be returned from other functions in JS.

function createFunction(){
    // one time running of createFunction
    function mutliplyBy2(num){
        return num*2;
    }
    return mutliplyBy2;
    // it doesn't get returned out with label multiplyBy2,it just definition into what new global label.
}
// every thing deleted except the function got returned.also lose that label,

const generatedFunc = createFunction();
// it get returned out into generatedFunc,it is pure and simply and only the result of the one time running of the create function.it has nothing do with createfunction.

// you can still run the function definition of multiplyBy2 back in global?
// Ans:-yes assign to label like(generatedFunc);

// generatedFunc don't have connection to create Function ,but it get created by  createFunction.that was it and we move on.

const result = generatedFunc(3);
// it was the result of createFunction (one time running of createFunction);




