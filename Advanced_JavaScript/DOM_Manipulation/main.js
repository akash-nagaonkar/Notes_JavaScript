 //DOM - Document Object Model

 const view1 = document.getElementById("view1");
 console.log(view1);

 const view2 = document.querySelector("#view2");
 console.log(view2);

 const views = document.getElementsByClassName("view");
 console.log(views);

 const sameView = document.querySelector(".view");
 console.log(sameView);

 const divs = view1.querySelectorAll("div");
 console.log(divs);

 const sameDivs = view1.getElementsByTagName("div");
 console.log(sameDivs);

 const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
 console.log(evenDivs);

 for (let i = 0; i < evenDivs.length; i++) {
     evenDivs[i].style.backgroundColor = "darkblue";
     evenDivs[i].style.color = "white";
 }

 const navText = document.querySelector("nav h1");
 console.log(navText);
 navText.textContent = "Hello Flexible blocks!"
 const navbar = document.querySelector("nav");
 navbar.innerHTML = `<h1>Hello Flexible blocks!</h1> <p>(DOM Manipulation)</p>`;
 navbar.style.justifyContent = "space-between";

 console.log(evenDivs[0]);
 console.log(evenDivs[0].parentElement);
 console.log(evenDivs[0].parentElement.children);
 console.log(evenDivs[0].parentElement.childNodes);
 console.log(evenDivs[0].parentElement.hasChildNodes());
 console.log(evenDivs[0].parentElement.lastElementChild);
 console.log(evenDivs[0].parentElement.firstChild);
 console.log(evenDivs[0].parentElement.firstElementChild);
 console.log(evenDivs[0].nextSibling);
 console.log(evenDivs[0].nextElementSibling);
 console.log(evenDivs[0].previousSibling);
 console.log(evenDivs[0].previousElementSibling);

 view2.style.display = "flex"
 view2.style.flexDirection = "row"
 view2.style.flexWrap = "wrap"

 while(view2.lastChild){
     view2.lastChild.remove();
 }

 const createDivs = (parent, iter) => {
     const newDiv = document.createElement("div");
     newDiv.textContent = iter;
     newDiv.style.backgroundColor = "#000"
     newDiv.style.color = "white"
     newDiv.style.width = "100px"
     newDiv.style.height = "100px"
     newDiv.style.margin = "10px"
     newDiv.style.display = "flex"
     newDiv.style.justifyContent = "center"
     newDiv.style.alignItems = "center"
     parent.append(newDiv);
 }
 // createDivs(view2, 10) ==> For adding a single div inside parent
 for(let i=1; i<=30; i++){
     createDivs(view2, i);
 }

