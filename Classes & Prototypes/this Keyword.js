// Declaring & calling a new function inside our 'Method' increment:--

function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);
    newUser.name =  name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment : function(){
        function add1(){this.score++;}
        // add1()
        add1.call(this);
    }

};

const user1 = userCreator("Will",3);
const user2 = userCreator("Tim",5);
user1.increment();