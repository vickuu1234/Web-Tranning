//increment the number of every click on click button for eg if initial value is 0  is should get value incrementing and you have to print the answer in your browser.


const counter = document.getElementById("counter");

let count =0;
function incrementvalue() {
    count++;
    counter.innerText = count;
}
function decvalue(){
    count--;
    counter.innerText = count;
}
const a = 5;
const b = 9;
console.log("---value of a----:", a);
try{
a = 6;
console.log("--value of a----", a);
}catch(error)
{
    console.log(error);
}
console.log("---value of b----",b);

// const mypromise = new Promise(res,rej);
// console.log(mypromise);

function mypromiseFun(res,rej){
    let delay = 100000;
    while (delay--);
    res("hello world");
}
const mypromise = new Promise(mypromiseFun);
    
console.log(mypromise)


//setTimeout
//setInterval