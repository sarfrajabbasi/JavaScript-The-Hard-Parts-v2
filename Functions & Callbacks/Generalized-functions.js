// why do we even have functions?

// let's see why..

// Create a functions 10 squared

// -Takes no input

// - Returns 10*10

// what is synatx (the exact code we type)

// CODING:---

function tenSquared(){
    return 10*10;
}

tenSquared() // 100;

// 9 squared functions?

function nineSquared(){
    return 9*9;
}

nineSquared()//81



// we can generalize the function to make it reusable
// this is our permise or co-premise of functions.
// making code that we can write one and then reuse again and again with different value, different data.that is what a parameter is for.

function squareNum(num){
    return num*num;
}

squareNum(10);//100
squareNum(81);//100
squareNum(64);//100
