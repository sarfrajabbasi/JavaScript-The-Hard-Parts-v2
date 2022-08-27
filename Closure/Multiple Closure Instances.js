// Let's run outer again:----
// two different backpacks.
// each individual function gets one from our runnng outer.

// if we declared counter in global;then retruned out function didn't get counter in his backpack.(global counter:0),what we see in our counter is 1,2,3,4;

// Individual backpacks:------------

// If we run 'outer' again and store the returned 'incrementCounter' function deﬁnition in 'anotherFunction', this new incrementCounter function was created in a new execution context and therefore has a brand new independent backpack. 


function outer(){
    let counter = 0;

    function incrementCounter(){
        counter++;
    }
    return incrementCounter;
}

const myNewFunction = outer();

myNewFunction();

myNewFunction();

const anotherFunction = outer();
  

anotherFunction();

anotherFunction();