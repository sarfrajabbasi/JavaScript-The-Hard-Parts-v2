// the new keyword automates a lot of our manual work:--

// there's our user creator notice no creating an object inside of it,no bond making to some shared store or functions,no returning an object out.

// coz we gonna run that function with the help of the new,we call that a modifier.

// it alter the behavior of the user creator execution context,it's gonna insert stuff in there automatically for us when we run it.

// but we need a shared store of functions one,one save version of those functions.

// and gonna make sure we have a bond to them,it turns out that user creator function is also an object,function object combo(that function is).

// it's object bit has a property called prototype into which we're going to store and increment method.

// we create a label called userCreator(function definition stored in),and it is an function + Object combo,it has both.

// it's object is not an empty object,it's an object with property automatically (prototype property) it got stored in it big old (Empty Object).

// use usreCreator.prototype, and it give me the Object.

// stored somthing usecreator.prototype.(whatever label)

// use this object same as userFunctionStore(single save version of each function),any object that get returned from running userCreator to have access to any stored function here(protoype).

// whole pint of this function is to create an Object.and new keyword assign empty object and  save in memory. 

// we wanna be able to get access so we can stick stuff into it,we use 'this' label we 've given to access it.

// set this to empty object.

// we will not want just object that gets returned out into user1 but to have access to out single save version of the functions.we want it to have access to remeber .our whole goal here, so i can do this user1.increment();
// i have functionalty that applies to that user1.not all over the whole lines of code,but instead,right there on our user1 object.not being shared,our only goal.

// we can't have increment function directly stored on that object,we wanna have instead a link through its proto reference to this shared store of functions.

// the hidden property it's going to link to the object part of the userCreator function to the prototype property.which is itself an object(full of function that we've put here:-increment,login)

// but it stuck inside a function,inside of our userCreator,and don't see anything returned out.

function userCreator(name,score){
    this.name = name;
    this.score = score;
}



// userCreator Object version of itself and we look for prototype property on it,and we find big Old Empty Object.create a new label incrementin that object and store a function.


// Object bit here:--

// use dot notation.it's got property on the object called prototype(which is itself an object{}).

userCreator.prototype.increment = function(){this.score++;};

// and we are gonna try and assign it label login (as the property :- login and assign it a function or method) with that prototype object.(single version of function)
userCreator.prototype.login = function(){console.log("login");};


// calling the user creator function with prents,nothing diferent,nothing object,just literally call user creator with a special-three-letter word in front that's gonna do a ton of stuff inside user creator's execution context.

// this are regular input for function don't think these are objects,or properties,or anything to do with new keyword.
const user1 = new userCreator("Eva",9);

// the only thing we really cared about the whole time.

// if can i do user1.increment
user1.increment();

// also , we can do this one thing:- have our functions and data bundle together for our ease of reasoning,but we can't have the functions literally on the object.otherwise,i've been copied on every single user object.waste memory space.so instead,we have them in one place single save version.and the proto feature of JS, prototype will feature JS,it's proto property that all object have a.

// we set it to link up to that object,knowing that when JS runs User1.increment and does it fine well.

// user1 is in global memory,not there in user1,JS do automatically,it'll take the proto,it'll follow that up to the userCreator object,and the prototype property in that object,and look in there and find increment,and that we take that code and we bulid an execution context.