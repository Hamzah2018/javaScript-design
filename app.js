let myHeader = document.createElement("header");
let myNavbar = document.createElement("nav");
let myUl = document.createElement("ul");
let log = document.createElement("div");
// let mylist = document.createElement("li");
// let myLink = document.createElement("a");
let myProduct = document.createElement("div");

myNavbar.style.display ="flex";
myNavbar.style.justifyContent ="space-around";
myNavbar.style.alignItems ="center";
// justify-items: center;
myUl.style.display = "flex";
myUl.style.justifyContent= "space-between";
// let linkText = document.createTextNode("Home");
// myLink.style.textDecoration = "none";
myUl.style.listStyle = "none";
myUl.style.display = "flex";
let listItem = ['home', 'Serves' , 'Contact'];
// listItem.forEach(function(ele){
//     ele.onload = function(){
//         let mylist = document.createElement("li");
//         let myLink = document.createElement("a");
//         myLink.appendChild(document.createTextNode(ele));
// }
// });
listItem.forEach(function(link){
    // create link of menu
    let li = document.createElement("li");
    let a = document.createElement("a");
    // create letter Text Node 
    let theName = document.createTextNode(link);
    // Append the link name to a ele and the a to link
    a.appendChild(theName);
    li.appendChild(a);
    // Add Class on li
    li.style.cssText  = 'margin:15px;text-transform: capitalize;';
    // a.style.cssText  = 'a-box';
    myUl.appendChild(li);
});
// let linkStyle = document.querySelectorAll

// myLink.appendChild(linkText);
// mylist.appendChild(myLink);
let logName = document.createTextNode("JsDesign");
log.appendChild(logName);
myNavbar.appendChild(log);
myNavbar.appendChild(myUl);
myHeader.appendChild(myNavbar);

// console.log(myProduct);
myHeader.setAttribute('class','header');
myProduct.setAttribute('class','product');
// myALL.setAttribute('class',`*`);

// console.log(myProduct);
document.body.style.cssText = `
box-sizing: border-box;
padding: 0;
margin: 0;
`; 
myHeader.style.cssText = `
width: 100%;
height: 60px;
background-color: #94a3b8;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-bottom: 8px;
`;
myProduct.style.cssText = `background-color: #eee;
margin: auto;
width: 200px;
border-radius: 2px;
padding: 5px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;
// element

let productTitle = document.createElement("h3");
let titlText = document.createTextNode(" I Pone 13");
productTitle.appendChild(titlText);

let productDescripe = document.createElement("p");
let descText = document.createTextNode('It the last verison and come without color');
productDescripe.appendChild(descText);

myProduct.appendChild(productTitle);
myProduct.appendChild(productDescripe);
// console.log(myProduct);
document.body.appendChild(myHeader);
document.body.appendChild(myProduct);

