function outer(){
    
    let counter = 0;
    
    function incrementCounter(){
       
       return counter++;
    }
    
    return incrementCounter;
   

}
const save = outer();

console.log(save())//1
console.log(save())//2
console.log(save())//3



// The ‘backpack’:----------

// - We return incrementCounter’s code (function deﬁnition) out of outer into global and give it a new name - myNewFunction

// We maintain the bond to outer’s live local memory - it gets ‘returned out’ attached on the back of incrementCounter’s function deﬁnition.

// So outer’s local memory is now stored attached to myNewFunction - even though outer’s execution context is long gone

// When we run myNewFunction in global, it will ﬁrst look in its own local memory ﬁrst (as we’d expect), but then in myNewFunction’s ‘backpack’



// What can we call this ‘backpack’?:------------

// - Closed over ‘Variable Environment’ (C.O.V.E.)

// - Persistent Lexical Scope Referenced Data (P.L.S.R.D.)

// - ‘Backpack’

// - ‘Closure’

// The ‘backpack’ (or ‘closure’) of live data is attached incrementCounter (then to myNewFunction) through a hidden property known as [[scope]] which persists when the inner function is returned out.