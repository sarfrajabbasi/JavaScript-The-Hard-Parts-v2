
// Using the protoype chain :-

function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);//it's really empty object.it's intimate link b/w this object that's being created and use the function store.we don't no how but there is a intimate link.
    newUser.name = name;
    newUser.score = score;
    return newUser;

};

const userFunctionStore = {
    increment : function(){this.score++},
    login : function(){console.log("Logged in");}
}; //single same version of each of our functions.but that objects going to have somehow our bond to that user function store Object.
// if it doesn't find increment on the Object,are we gonna panic it's gonna have a link somehow to use a function store it's gonna find the increment method  and  use it.

const user1 = userCreator("Will",3);//but some how it link to this collection of functions up there.
const user2 = userCreator("Tim",5);

user2.increment();

// But for now this is our key use, run a function that shared or going to be available to many different objects through the proto link. And make sure we write it with the keyword this to access the object on which that method, that function is being executed to the right-hand side of the dot.



 //Q//Is this local execution context? We're explicitly talking about this. But it's accessing score up in global memory, or changing it without say a return value, which we've done traditionally.



//  Sure, so you're saying this might be like a, you're cautious about this as a sort of side effect type thing. Yeah, absolutely, absolutely, and that's why, but it's totally standard within this model. And it's not inherently problematic. But it is why we have to accept that, if we're taking this model, if we're organizing our code, there's trade-offs.

// Huge benefit, my data or my functionality or the availability of that functionality bundled in one place. Problem, around the functionality, it can have consequences anywhere in my code base, ideally, though, only within the object I'm trying to target. But maintaining this sort of code base can be definitely have its ups and downs.