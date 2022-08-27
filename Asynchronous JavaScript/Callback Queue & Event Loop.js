function printHello(){
    console.log("Hello");
}

function blockFor1Sec(){
    // blocks in the JS thread for 1 sec
}
// then we're gonna be able to set timeout.
setTimeout(printHello,0);
// 0 millisecond timer is definitely complete.

console.log(blockFor1Sec());//Then we're gonna call our block for one second,and then we're gonna call first,

console.log("ME first");

// if we printHello inside of blockFor1Sec,in the conventional sense,and it's did we command that printHello to run?(we write printHello) that's synchronous code,that's regular,all typical global code.they just run when we tell it to run.

// this is when we,did we put any parens on the end of printHello? with setTimeout now.we're goning to rely with settimeout on that function to be able to run for us and need very,very strict rules when that can be auto run.



