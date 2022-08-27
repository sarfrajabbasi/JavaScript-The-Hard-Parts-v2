//Q// So if we're trying to use the data storing data from the network request, how does it if you have a line of code in the JavaScript, in the global. How does it know when it can kinda access that?
// ANS:--
// Behind the scenes in reality, this hi value is never filled in actually.Until all global codes finish running,

// so we can't even get access to it at that point until we have, we only get access to it from the front. And then that way, I mean that different from the callback model.

// You only get access to from the function that we add, we also triggered because we just don't want to have a language. Where we can go and try and get access to stuff and we don't know if it's gonna be there or not.

// So we don't actually fill that in behind the scenes automatically, until all global codes finish running.But it's slightly different to the way I sort of.

// before we start going through the queues. That has no consequences in terms of. We don't run these functions until it's filled in, until we finish all the global code anyway so no consequences. 

//Q// If it's a print hello when the browser has it, is a reference to global print hello. Is not print hello itself.

// ANS:---
// Yeah, we're not taking into the web browser a copy of the function. We're just giving a reference back to in memory, this function, yeah.



// Q//Could print hello, take into consideration by the time you hit the cost text something another parameter from global memory? Or is it must have been can.


// ANS:----

//  who's putting the parenths on print? Hello, are we doing it. No JavaScript's doing it. If we're not putting parents on how do we insert any arguments? We have to rely on knowing.  It means we have to know like, for example. 


// Could I have two arguments passed to me that's all about display the function that gets its first input. Data that comes back as if I could only be have that expect two arguments.

// Now, I've got to go and look at exactly how the feature of the web browser that this function is going to be auto triggered when the feature web browser finishes work.

// How it's expecting how the web browser and the promise of disease expecting this function to be laid out.

// Where do I go to find the rules about that? Where am I gonna find out how the browser is expecting the function that will be auto run. When its work is done is gonna work and what inputs it's gonna take?

//MDN. MDN has got a list of all these features. They don't call these facade functions. They call them API 
  
// is a I stands for interface that is any functionality or often data that's not in my world, but in someone else's and I interface with it.

// labels by which I can interface interact with this outside world.

//  suppose I set timeout call inside the execution and other function. And it wanted to use some of the data from that execution context.

// by the time print hello runs, it runs in global, that execution context in which set timeout with set up has gone, and all its data's gone, unless the- Backpack, exactly, print hello has a link to all its surrounding memory that could ever be used in it, pretty awesome, that's pretty amazing.


//Q// so the example at least gives us the impression that the micro-task queue is either first in, last out, where it's used preferentially- Where you've got depending on the type of call you're gonna get a queue.



// Because well no, the event needs handling. Let's talk a bit about how the micro task queue words  What if isn't really interesting? So it turns out with promise objects, I can just create one directly.I don't need to have it automatically created by fetch, I can actually just say create one. If I then say resolve that, that is to say in that line of code in that moment. Have it automatically complete and have its function at that I can control that function.


// We can't do that with fetch. Because fetch is handling the relationship here, 

// but if I make my own promise object, then I can have the function attached to it. I can directly myself have it stuck into the microtask queue by having the value property of that promise object updated and complete. And automatically trigger the function to run in the microtask queue. 

// If when I'm running the function that was in my microtask queue that was displayed, If inside of there. I create a brand new promise object that its associated function while I was inside display.


// That promise object completed because I told it to directly, the associated function will be stuck into the backend of microtask queue while I'm still inside display.

//  Here's a really interesting situation that can happen then. I can be filling in the back of the micro task queue with more functions while I'm still inside display.


// And the event loop is interesting and how it interacts with the micro task queue is a very, very big bonus sort of. But I am feeling if I want I'm inside display and filling in new functions behind here.


// And they themselves are building a new functions. And then those are pretty new function almost recursively. I will never leave the microdose queue because the event loop will always take in and execute on the call stack. It will always go back and check the microtask before it moves on to the callback queue.


// That is in distinction to the callback queue which once it enters does all the stuff in there and then moves round again. The microtask queue once it enters, if you are refilling in the back, you ain't leaving it. You get what's called starve the callback queue and in Node.


// This is particularly important because you want to, you know, production application. And this is why there's some caution around around using the process next tick method. Which sticks stuff in this queue, and can recursively starve you handling your requests from your users. Valence I topic, but go watch the Node Harper's, you're interested in that, but it's an interesting nature that these are behaving slightly differently.



//Q// when you may have already mentioned this, but. What items go into the microtask queue and what items go into callback queue.

// ANS:----
// Any function that is attached to a promise object by one of these two prongs for stored functions. Which gives add a promise object we attach a function to it using them. Those functions all go into the micro-task queue.

// Hindi:--
// koi  bhi function joh attached ho promise object se joh in two prong object ma se a ek h,function storing ke liye,woh functions sidha jaynge micro-task  queue ma.


// Any function that's passed in directly to a facade function that triggers a web browser feature .when the background task the timer completes this function go into callback. 

// Hindi:--joh function joh  directly passed  hoker facade functons ma jaate joh triggerd katra h web browser feature ko,jab background task  timer completes karta h toh ye function  callback m chala jata h,

// So we have to go into MDN and see, does our particular facade function that trigger stuff in the background? Does it take in a function? That one's going to go into the callback queue?

// Or does it return out two prong a promise object and they toss to the background but doesn't throw a function down here. The associative function on the promise object, that- microtask queue. 
