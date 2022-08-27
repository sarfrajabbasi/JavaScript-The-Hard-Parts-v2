// Using the protoype chain :-

// we have single saved version of our function and our objects,User1,user2 ,user500 all had access to it through the proto-Reference,as a result of JS prototype nature,its prototype feature,its ability for objects to connect to other objects.(if don't find an object don't panic  head on up.)

function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;

};

const userFunctionStore = {
    increment : function(){this.score++},
    login : function(){console.log("Logged in");}
}; 

const user1 = userCreator("Will",3);
const user2 = userCreator("Tim",5);

user2.hasOwnProperty('score');