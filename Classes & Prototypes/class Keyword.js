// solution 4: The class 'syntactic sugar'

class UserCreator {
    // old way
    // function userCreator(name,score){
    //     this.name = name;
    //     this.score = score;
    // }
    
    // new way
    constructor(name,score){
        this.name = name;
        this.score = score;
    }

// UserCreator.prototype.increment = function(){this.score++;};
// UserCreator.prototype.login = function (){console.log("login");}

    increment(){this.score++;}
    login(){console.log("login");}
}

const user1 = new UserCreator("Eva",9);
user1.increment();