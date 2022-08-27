//----> another way built in JS whose output will be an empty object:-

// Object.create

//----> Creating user3 using Object.create:--

// Object.create is going to give us fine-grained control over our object later on give us some fine-grained control over our object.

// not strictly kind of protected.

// this is an object oriented
const user3 = Object.create(null);//return out an empty object.

user3.name = "Eva";

user3.score = 9;
user3.increment = function (){
    user3.score++;
};

// Create and return our objects using a function.