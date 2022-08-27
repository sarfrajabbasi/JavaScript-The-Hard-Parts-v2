// ES5 soution: introducing 'callback functions' and Web Browser APIs.

// where JS is running its code?
// ANS: In browser.


function printHello(){console.log("hello")};

setTimeout(printHello,1000);


console.log("Me first!");



// as far as JS is concerned,the function is done,so that it's headed off for what(setTimeOut function) or after our facade,out function that triggers stuff in the web browser.
// then web browser then is directly affecting the stack at a later date(that seems insane)what if the stack has got stuff in it?.

// what about the zero millisecond example?why did the function not just come out into here and then come straight back home and run?

// the printhello.when we trasnfer it,is the set time and i don't remember the implementation,is set timeout memorized so the bits that make up printHello,are they stored in we'll say it's the v8 execution context?does that printHello get to hold onto any state around it? suppose it needs to use some other data around it, does that data get held onto?in the backpack.

// In JS,this is a reference back to where it's stored in JS.

// the printHello function is not sort fo copied into the web browser.it's a link back to where it's originally saved, including maybe all surrounding data as well.


// WE HAVE SOME PROBLEM IN HERE:-------

// we need some sort of rules for when this extraordinary other world is allowing this function back into JS.


// it turns out given we're interacting with a world outside of JS now,we are gonnna need some really,strict rules.

// But it makes our code super predictable. we fundamentally know how it's gonna behave if we know these core rules.



// gonna see this code:--------

// We're interacting with a world outside of JS now- so we need rules:--

// how'sit gonna do that because any slow task in JS, it'll always throw it out to the web browser feature,if we want to speak to the internet,we're gonna do it in the background of the web browser,if we wanna do a timer,we 're gonna do it in the background of the web browser so.
// so we don't any further code in our single threaded language from running,


// how could we actually block JS from running code for like a- have anyone does a task that it ends up blocking code from running?

// for-loop:-it's gonna block the thread for one second.

// that's in that kind of block box function there,if we were to run it,it's gonna sit on the call stack doing-coz you can't do one long task in JS,but you can do many tiny short tasks,and that's how we can black it;

function printHello(){
    console.log("Hello");
}

function blockFor1Sec(){
    // blocks in the JS thread for 1 sec
}
// then we're gonna be able to set timeout.
setTimeout(printHello,0);

console.log(blockFor1Sec());//Then we're gonna call our block for one second,and then we're gonna call first,

console.log("ME first");