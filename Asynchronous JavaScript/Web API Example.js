// ES5 soution: introducing 'callback functions' and Web Browser APIs.

// where JS is running its code?
// ANS: In browser.

function printHello(){console.log("hello")};
// if our timer is complete[1000ms],it's gonna call the function.

// and this function gonna head right back into JS.

// JS With the help of web browser is going to somehow automatically start executing,printHello;going to put on console,and display hello;at[1000ms]

setTimeout(printHello,1000);
// that's really just gonna be a command, a massage down to the web browser features. it's not even gonna do anything in JS.
// that is say set time out consequences all in the web browser.[timer:1000milisecconds];

// we're not setting up timer for no reason,we're setting it up so we can runthe function on its completion.

// but has JS facade function done its work?. its has.it's only job was to do what? setTimer in the web browser.

console.log("Me first!");//at 1000ms,we straight onto console.log("me first")
