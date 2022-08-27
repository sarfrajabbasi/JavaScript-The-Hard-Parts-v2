// ES6 + promises:----

// use the data:---

function display(data){
    console.log(data);//it's input is value property("hi").
}

const futureData = fetch('http://twitter.com/will/tweets/1');

futureData.then(display);//pass entire display function definition,whatever get pass to then,there's gonna be  taken ans  stuck in unfulfilled  array property.

console.log("Me first");

// We've got a nice connection to a nice object here back in JavaScript. It's gonna be filled in with our value when the time comes from the network request responses. the old fulfilled array now has a function that will automatically run when that data comes back. We're done.


// did we put the parenths on the end? No, these will auto stuck on for us by JavaScript, still a brand new execution context.

//  All of that initiative bar incredible fetch function are incredible, not function.


// Facade function, that triggered this background work, trigger the network request. Off to the Internet, brought back the data. 

//  We got immediately in JavaScript a beautiful object, the promise object, with two properties. One, a value, that was automatically updated with the Hi, that came back from speaking to the Internet in the background, the other side of fetches work.


// And when it did come back, We had a function ready to be auto run, with the input being that value property that came back or the value of the data that came back from Twitter. As the input of that function at 270 milliseconds display was stuck on the cool side with high input and we were able to console log hi.




