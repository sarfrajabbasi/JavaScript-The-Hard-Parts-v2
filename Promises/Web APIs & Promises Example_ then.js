function display(data){console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){/*block js thread for 300ms*/}

setTimeout(printHello,0);

const futureData = fetch('http://twitter.com/will/tweets/1')



futureData.then(display);


blockFor300ms();

console.log("Me First");

//  If we're filling in that value property with the data from Twitter, string hi, then we wanna be able to use that in some way, display it, make use of it.

// I know that when that value property gets updated, it's going to automatically run any function in this unfulfilled array.

//  The promise of it is designed by JavaScript to automatically trigger the functions in this array to run with this value as its input when that value gets updated automatically by JavaScript.

//the then method,

// So let's do that attachment right now. FutureData.then, we pass in the entire reference, we'll link to the entire display function. There it is, the entire display function. We're gonna grab it and store it into array unfulfilled, in that promise object.


// ---- So that means that when the background work completes, the value property gets updated.

//----it's automatically gonna trigger display to run, 

// -----where display's input being the returned or the response object which is gonna be just that Tweet, the string hi.

//----- And it's gonna fill in by the looks of it into display, they've got a  parameter waiting. Data can be filled in with the string hi, the argument. 

// we have set up two pieces of background work.


//  What we're sure is that it doesn't go straight on the call stack, no way. There's no way it can, right, because we've got BlockFor300ms right there.

// we can't suddenly throw display on the call stack. So let's for now, On to the callback queue it goes.

//  Let's get BlockFor300ms off the call stack.

//Definitely the console is gonna log me first at this point.

// we know that our asynchronous code is gonna get priority. We could do a million of those.

