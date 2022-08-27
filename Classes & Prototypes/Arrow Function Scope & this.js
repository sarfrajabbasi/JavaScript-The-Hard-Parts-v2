// Create and invoke a new function (add1) inside increment :--

// arrow functions override the normal this rule:--

function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);
    newUser.name =  name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment : function(){
        const add1 = () =>{this.score++}
        add1(); 
    }
};

const user1 = userCreator("Will",3);
const user2 = userCreator("Tim",5);
user1.increment();