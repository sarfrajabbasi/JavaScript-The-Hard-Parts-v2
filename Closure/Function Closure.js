// And so it cave whereas but when he got returned up the function increment counters definition got returned out of the running into my new function and brought with it. All its surrounding local data attached onto the function definition.

// Calling a function in the same function call as it was defined:----

// when you define your function determines what data it has access to when you call it.

// When i run my new function before i look into global in full,we look into backpack.

function outer(){
    let counter = 0;

    function incrementCounter(){
        counter++;
    }
    incrementCounter();
}

const myNewfunction = outer();

myNewfunction();//1
myNewfunction();//2

// For the very first time, our function myNewFunction, a function definition doesn't just have it local memory that gets literally I should have actually done this, literally gets right, deleted each time.

// [00:03:08]
// We now have not only the temporary local memory, that if we don't return something out in storing global, it's gone forever. We also have the very definition the label, the function storage has attached to it a permanent memory. That is remarkable. That is a say no longer is this a label for just a function from code saved, it's a label for funds in closing and some permanent store data attached.

// [00:03:33]
// Genuinely very very, this is the most elegant feature of all of JavaScript.