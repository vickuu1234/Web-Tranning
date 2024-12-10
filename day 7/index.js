// console.log("-----welcome in js------")
// const title = document.
// getElementById("title");
// console.log(title);
// title.innerText = "hii i'm vickuu";
// ("desc");
// console.log(desc);
// desc[0].innerText = "my name is vickuu";
// const heading = document.
// getElementsByClassName("heading");
// heading[0].innerText = "first world";
// heading[1].innerText = "seconf world";
// console.log(heading);
///select

const h1 = document.getElementById("heading");
console.log(h1)

//new content
const newcontent = "-----12345-------";

//assigend value

h1.innerText = newcontent;
const divh1 = document.getElementsByClassName("title");
//    0 1 2 3 4 5 ,........

divh1[2].innerText = "Third Div tag";


for(let i = 0; i<divh1.length; i++){
    //even index
    if (i % 2 === 0){
    divh1[i].innerText = "even"
    } else {
    //odd index
    divh1[i].innerText = "odd"
    }

}
let Array = [10,9,8,7,56,2,3,]
//length of an array : array_name.length
for(let i= 0; i<Array.length; i++){
    console.log(Array[2])
}