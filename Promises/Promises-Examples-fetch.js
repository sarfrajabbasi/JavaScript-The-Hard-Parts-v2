
// ES6 + promises:----

function display(data){
    console.log(data);
}

const futureData = fetch('http://twitter.com/will/tweets/1');//futureData will be the result in JS,half of the consequence fo fetch,its JS console.
// output of right handside store on left-hand side.

futureData.then(display);

console.log("Me first");



