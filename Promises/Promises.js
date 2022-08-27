// Model
function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {
  //blocks in the JS thread for 1 sec
}

setTimeout(printHello, 1000);// when i had this model here,when i used setTimeout,setTimeout doesn't do anythng in JS and it's consequence in the Web browser(set up timer).

console.log(blockFor1Sec());

console.log("ME first");


//In terms of developer reasoning and thinking about what we're doing as we go and sort of maintaining the application scale that isn't that ideal.


// speaking to the Internet the Network request that's we have label xhr old school style/fetch new S.S of setting up browser feature speak to the Internet.(send the request for more data over the internet)label for it in JS is 'fetch'.

// work in the same way as setTimeout,took a function,threw it down into the web browser,set up a timer.

// but it's new star way of doing it,it's one I'm gonna call it two-pronged facade function(fetch).

// 1) it does set up a network request in the web browser features and also it's gonna have a consequence immediately in JS as well. This fetch label is gonna trigger speaking to the Internet down here(sending Network request)asking data from twitter down here.

// 2) and simultaneously it's going to also in the JS land return out a special kind of Object called a promise Object,that's going to sit in memory and when the background work is done here, that's going to fill in and update that object's data with the data from the background.


// it had consequences out here,one prong. but it had another consequence immediately in JS,A little sort of palceHolder object that's gonna allow us to keep track in JS in our local memory or in our global memory there of the stuff we triggered off down here in the web browser.

// we have two mapped together and they're intimately linked.

// The background feature when it completes is going to have consequences for that immediately returned down JS object.

// two pronged facade functions that both intiate background web browser works being the Internet and return a place holder object.

// it's just a JS object a special type of one with a promise immediately in JS land.we know that what is going down here coz we kept it up to date up here.(in global memory)


// ES6 + promises:----

function display(data) {
  console.log(data);
}

const futureData = fetch("http://twitter.com/will/tweets/1"); //on right hand side there the five letter word that is the most powerful in JS.(going to speak internet).get data from otherside of world.

futureData.then(display);

console.log("Me first");

