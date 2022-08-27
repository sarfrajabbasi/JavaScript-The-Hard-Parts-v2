function display(data){console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){/*block js thread for 300ms*/}

setTimeout(printHello,0);

const futureData = fetch('http://twitter.com/will/tweets/1')



futureData.then(display);


blockFor300ms();

console.log("Me First"); 


// There's an additional queue. It's called the microtask queue. 

//  on into the microtask queue. It went display, with by the way, the high argument ready to be inserted into it, the high data at 270 milliseconds.


//  Once the event loop at 303 milliseconds goes, we're clear on the synchronous global code.

// do you think it heads to first, which queue do you think it heads to first? 
//The microtask queue.

// it grabs display it dequeues it, grabs its code. It puts it on the call stack.With the inserted argument automatically, of the value hi, it adds the parental automatically JavaScript.
// it executes it, and  show up in our console('Hi').


//
// And finally, our poor little, the microtask queue is now empty. And the event loop finally goes. It's time to go down to the callback queue. 

// But, after removing display from the call stack, it's finished running, we're finally at 304 milliseconds, are able for the event loop to check our final queue, the callback queue.

//  that is the entire model of a synchronous JavaScript behind the scenes. We have two queues. We enqueue print hello, we pop it off the call stack at that point. We have two queues, any function that is thrown out of JavaScript, or at least a link back to it is thrown out of JavaScript, via the old school callback facade functions like set timeout.

// Those functions when the background work is complete, second in the callback queue. Any function that is attached to a promise object via the then method, and then auto triggered to run from within JavaScript when the value property that promise object gets updated automatically, as a result of the background work from a two pronged facade function like fetch.


// That function ain't going in the callback queue. It's going in the microtask queue. And when all global code is finished running, and there's nothing on the call stack, the event loop goes and checks the queues. Which does it check first? The microtask queue. It dequeues the function, runs it, and then only finally then does it check the callback queue.
