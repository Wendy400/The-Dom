//Step 1 . Create The Element
//Step 2. Add Attributes/Properties
//Step 3. Append Element to DOM
//Remove or Delete Elemnts



//......appending bring the element in the bottom of the page , last child
 const newH = document.createElement("h1");
newH.textContent = "Appending";
newH.style.color="blue"
newH.style.textDecoration ="underline"
document.body.append(newH);



//.....prepending brings the element to the top of the page, first child
 const newH2 = document.createElement("h2");
 newH2.textContent="Prepending"
 newH2.style.color="blue"
 newH2.style.textDecoration ="underline"
 document.body.prepend(newH2)




//.....adding text inside box......
const newH1 = document.createElement("h1");
newH1.textContent = "learning DOM";
newH1.id ="newID"
newH1.style.color = "red"
newH1.style.textAlign = "center"
//adding text content inside box1, appending makes the content the last child
//prepending makes your content the first child
document.getElementById("box1").append(newH1);




//.......adding text between two boxes
const newPar = document.createElement("p");
newPar.textContent = "I like javascript and i am learning adding elements in DOM";
newPar.id ="newPar1"
newPar.style.backgroundColor = "yellow"

const box2 = document.getElementById("box2")
document.body.insertBefore(newPar, box2);



//.......using querySelector all 
const newPar2 = document.createElement("p");
newPar2.textContent = "Using querySelectorAll, i am learning adding elements in DOM";
newPar2.id ="newPar2"
newPar2.style.backgroundColor = "aqua"

const boxes = document.querySelectorAll(".box")
document.body.insertBefore(newPar2, boxes[2]);




//deleting elements
const newPar3 = document.createElement("p");
const newPar4=document.createElement("p");
newPar3.textContent = "Using removeChild to delete elements, i am learning deleting elements in DOM";
newPar4.textContent="I deleted this message"
newPar3.id ="newPar3"
newPar3.style.backgroundColor = "orange"

document.getElementById("box3").append(newPar3);
document.getElementById("box3").append(newPar4);
document.getElementById("box3").removeChild(newPar4);












