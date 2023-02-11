let myProduct = document.createElement("div");
// console.log(myProduct);
myProduct.setAttribute('class','product');
// console.log(myProduct);
myProduct.style.cssText = ` background-color: #eee;
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

document.body.appendChild(myProduct);

