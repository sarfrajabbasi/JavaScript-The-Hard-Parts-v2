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