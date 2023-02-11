let myHeader = document.createElement("header");
let myNavbar = document.createElement("nav");
let myUl = document.createElement("ul");
let mylist = document.createElement("li");
let myLink = document.createElement("a");
let myProduct = document.createElement("div");

myNavbar.style.display ="flex";
myNavbar.style.justifyContent ="center";
let linkText = document.createTextNode("Home");
myLink.style.textDecoration = "none";
myUl.style.listStyle = "none";
myUl.style.display = "flex";
myLink.appendChild(linkText);
mylist.appendChild(myLink);
myUl.appendChild(mylist);
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

