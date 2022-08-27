// but we need to know how our promise-deferred functionality gets back into JS to be run.

function display(data){console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){/*block js thread for 300ms*/}

setTimeout(printHello,0);

const futureData = fetch('http://twitter.com/will/tweets/1')

futureData.then(display);


blockFor300ms();

console.log("Me First");





//  when does that function that was delayed, deferred by being attached to the promise object on fulfillment array? When does that function, given that it's auto-triggered to run?

// I mean it's in JavaScript it just go straight in the call stack?  we're gonna need to understand the rules by which our promise deferred functionality gets back into JavaScript in order to be execute off. Get back on to the call stack in order to be executed in JavaScript.


//*then method and functionality to call, and completion :--

//---> any code we want to run will return data.The response data must be added on the promise object.

// --> added using the then method to the hidden property on fulfillment array. 

// -->Promise objects will automatically trigger the attached function in that array to run with its input being the response data from the web browser feature from Twitter. 


//  we need three here in order to see the rules by which our asynchronously deferred code ends up being run.

//  this word asynchronous means. It means doing code out of order from when you saw it, from when it was said to be done. So when we see normal JavaScript code, if a line says do the code, I do it right then.

// Asynchronous says no, no, no, JavaScript's gonna handle when that functionality comes back in. And it's gonna be out of order of when you trigger the browser feature that started its work. And the associated functionality is gonna come back in when that background work is done.


// No longer do we have our, we cannot leave this line of code until we've finished on it until we've moved to the next line. Now we can actually have code that's gonna be run.

//  we're gonna see the entire map of asynchronicity in JavaScript.



//  fetch call, that fetch facade function, that fetch facade function is a two-pronged facade function.



//  They go to the array and they value property and let's not forget. That value property is soon as it's updated, immediately is going to trigger the function stored in that array to automatically run.  This value property here I have a feeling is going to be intimately connect with the other consequence, the other prong from fetch which is speaking to the network in the web browser.



// And as soon as that's done, that value that comes back the response object as Kayla put it earlier, is going to fill in that value property Back in JavaScript which is going to trigger automatically any functions in that array with that value as the input of that function, or those functions.



// Back in JavaScript, what's our own completion back in JavaScript?.The returned object is entered into the value property of your data.














