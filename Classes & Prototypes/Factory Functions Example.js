// Solution 1,Generate objects using a function:---


function userCreator(name,score){

const newUser = {};
newUser.name = name;
newUser.score = score;
newUser.increment = function(){
    newUser.score++;
};
return newUser;
};


const user1 = userCreator("will",3)
const user2 = userCreator("Tim",5)
user1.increment(); 