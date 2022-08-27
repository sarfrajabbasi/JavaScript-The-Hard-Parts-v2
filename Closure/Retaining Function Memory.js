// Calling a function in the same function call as it was defined:----

// when you define your function determines what data it has access to when you call it.

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