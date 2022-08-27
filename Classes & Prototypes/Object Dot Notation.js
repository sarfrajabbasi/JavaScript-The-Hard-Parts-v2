// So if I'm storing each user in my app with their respective data(let's simplyfy)


// user:1                user:1
// -name:'tim'            -name:'stephie'
// -score:3               -score:5


// ---And the functionality I need to have for each user (again simplifying!)

// -increment functionality (there’d be a ton of functions in practice)


// ----How could I store my data and functionality together in one place?


// Object- store functions with their associated data:--

// This is the principle of encapsulation-and it's going to transform how we can 'reason about' our code.

// Not fully stictly implemented in JS.

// not fully strictly implemented in JS.this is a notion of encapsulation.:-it say protect and bundale up in one place(functionality and data that it applies to).achieve running functionality on the pertinent data.that's goal,got data, functionality,and an object done


// user1:----

const user1 ={
    name:"will",
    score:3,
    increment:function(){user1.score++;}
};

user1.increment();//user1.score->4

// let's keep creating our objects.what alternative techniques do we have for creating objects?


// user2:----

//----> create user2 dot notation:-

// declare an empty object and add properties with dot notation----

const user2 = {};//create an empty objects;

// assign properties to that object

user2.name = "tim";
user2.score = 6;
user2.increment = function(){
    user2.score++;
};

