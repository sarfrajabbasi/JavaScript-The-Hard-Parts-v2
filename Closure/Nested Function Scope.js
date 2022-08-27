// So we saw there that A function can be returned stored in global label,use that in the function by its new global label. and has nothing to do with original running of the function that from which that inner function was created,was returned;

// Calling a function in the same function call as it was defined:----

// when you define your function determines what data it has access to when you call it.

function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();
