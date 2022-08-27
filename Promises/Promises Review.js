
//  Let's talk about the benefits and not to benefits of this approach:---
 
//  So,---------Problems
//  --problems 99% of developers have no idea how this work under the hood,
// --- which makes debugging just this mystery thing. 

// ----that fail going to interviews.


// The upside of this style is it creates something that sort of means if you don't understand how it's working, you can roughly make it kind of work. I will say about the old style where you literally pass a function in, if you understand how it's working. You're kinda done, this style, because of this appearance, the then method you kind of think you know what it's doing and it kind of work but really, I hate this name, then.

// It's doing nothing, if I'm reading this code as a developer I'm like, okay, so fetching and then I'm gonna display. But of course, it's not even close, maybe we even think that kind of if we go back up the thread and do that line and then bit later, No, no, no, then should be renamed what?


// I think it should be renamed this, store function to Run later, yeah, exactly. Future dated dot, store me to Run me later automatically when the background task that came out of the fetch call previously completes and the value probably gets updated. Not catchy, but it is accurate.

// benefits:----------

//  -------like pseudo synchronous, it sort of looks like you are running it right then but you really are not. You are passing in a function that is going to be AutoRun run as before, not by you, but by JavaScript.And it's taking an input that you did not put in there, JavaScript put in that. That from the background work that high string that's gonna be auto inserted into display function when it's AutoRun.

// JavaScript is taking that function code of display, and it's running it for you by putting Print on it for you automatically.And it's inserting the input for you automatically It's a very generous language in that sense. 

// ------There is one big benefit of this design, and it's that error handling process, so, this is really nice. It turns out people,

// there's actually another array on this promise object behind the scenes, another hidden property.And it's called onRjection, and it's also an array into which we can put functions. 

// When you're interacting with the outside world especially network stuff you get errors all the time. You don't wanna run your display functions so the user on Twitter gets a lovely broadcast of the full details of the error.


// Ideally wanna have a separate function that's going to run that handles that error. Maybe it logs it for you in some way, 

// but probably just gives the user a better experience. It's doing something similar, maybe, whatever it might be.



// The promise object give us this amazing feature, that means if we get an error back not the actual response object we want any error, it's not gonna Run that display function. It's not even gonna auto trigger any of your functions in unfulfilled.

//  it's gonna trigger any functions that you stored in onRejection, how do we get functions in there?

// A) there's two ways, one would be to write future, Data dot, anyone know? Dot catch  dot catch, and any function we pass in there, it's going on rejection,

//B) The other way is to pass to then as the second argument, whatever function you want that's going to go in here to AutoRun on error

// 1)first argument, stick that function in unfulfilled.

// 2)Then we'll take the second argument, the second input and stay that function that you rejected.

// really nice error handling approach without a doubt. 



//----- we now have rules for the execution of our asynchronously delay code -----


// hold promise deferred functions.saying promise deferred functions, ones that were attached to a promise to delay them running until something happened in the background. Store them in the microtask queue and callback functions, ones that were passed in to one of these facade functions set timeout, have them go in the callback queue.


// When the web browser feature otherwise there is API finishes, add that function to the callstack. In other words, Run it when callstack is empty and all global code is finished running, have the event newcheck this condition for us. Before we learn the code is I would Run next, prioritize functions in the microtask queue over the callback queue.


// ----Promises web browser features, the callback and microtask queues and the event loop enable us to build :---


// -------non blocking applications. We do not have to wait in this single JavaScript thread, we do not have to wait here for our data to come back. No waiting on this line, fetch will not sit on this line, waiting for the data to come back, no, no, no, no.

//I mean no in regular code we do, your function call you are staying on that line till you finish it.

// But it is not a regular function call, it is a facade function for setting up background work. 

// ------However long it takes we can't predict when our browser's features work will finish in the background.We can't know exactly when it's gonna finish, so we can't kind of have the line of code that's gonna use that background data Run right now. We got to tell it when to run, we got to rely on JavaScript that knows when the background work is done to automatically trigger, the function to Run on that moment.


// This is what allows us, people, to build these non-blocking, dynamic, fast applications.

// We can handle setting up a ton of stuff in the background while we race on in the foreground running our code, being responsive to users' interactions, building these dynamic applications. 

// This is what really makes JavaScript very, very special and very usable.
