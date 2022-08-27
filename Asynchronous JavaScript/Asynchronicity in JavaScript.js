// Asynchronicity is the backbone of modern web development in JS yet..

// JS: is

// - Single threaded (one command runs at a time);

// -Sychonously executed (each line is run in order the code appeares);

// So what if we have a task:-

// -Accessing Twitter's server to get new tweets that takes a long time.

// - Code we want to run using those tweets.

// Challenge We want to wait for the tweets to be  stored in tweets so that they're there to run didplayTweets on-butno code can run in the meanTime;



// Slow function blocks further code running

const tweets = getTweets("http://twitter.com/will/1")

// ⛔350ms wait while a request is sent to Twitter HQ

displayTweets(tweets)

// more code to run
console.log("I want to runnnn!")


// What if we try to delay a function directly using setTimeout?

// setTimeout is a built in function - its ﬁrst argument is the function to delay followed by ms to delay by.

function printHello(){
    console.log("hello");

}
setTimeout(printHello,1000);
console.log("My first!");

// In what order will our console logs appear?
