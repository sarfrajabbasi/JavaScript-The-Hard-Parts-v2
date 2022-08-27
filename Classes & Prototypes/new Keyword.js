// The new keyword automates a lot our manual work:--

function userCreator(name,score){
    // const newUser = Object.create(functionStore);
    // newUser.name = name;
    this.name = name;
    // newUser.score = score;
    this.score = score;
    // return newUser
};

const userFunctionStore = {
    increment : function(){
        const add1 = () =>{this.score++}
        add1(); 
    }
};
// automates the hard work
const user1 = new userCreator("Will",3);

// but our functionStore , our connection to function store that' gone now.So where we doing to?

// we need big old object
// we can sure with help of with new keyword,the object that gets automatically created.it's proto property will link off to some object.I need to know where that's gonna be.

// To find out where it's gonna be,let's take a look at this little interlude


// Interlude-functions are both objects and functions.

// that function is not a function it's also an object.and that object not empty,it's got a prototype property,which is empty object,
function multiplyBy2(num){
    return num*2
}
// it's function + object;
multiplyBy2.stored = 5;
multiplyBy2(3);//6

multiplyBy2.stored//5
multiplyBy2.prototype//{}

// we could use fact that all functions have a default property 'prototype' on their object version,(itself an object)-to replace our 'functionStore'object.


// Prototype property of the function that  we're going to run with the new keyword on such that it creates an automatic object inside.

// And that's gonna have a bond for its proto property to that prototype property, which is an object.


// The proto is going to not link to use the function store, but link up to this object. So we better put our functions that we want all objects that come out of the auto, or come out to running user created with the new keyword in front that creates an object automatically, which needs somewhere to have a link to for its shared functions.


// They're automatically gonna be that function that creates the object with the help of the new keyword in its object version, in the prototype property of it, which is itself An object.