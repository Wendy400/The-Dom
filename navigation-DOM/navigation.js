//DOM navigation 
//refers to the process of moving through the Document Object Model (DOM) tree structure using JavaScript. 
// It allows you to select and interact with elements based on their hierarchical relationships: parents, children, and siblings.
//  .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



//first and lastElementChild
const elements = document.getElementById("fruit")
const firstChild = elements.firstElementChild;
firstChild.style.backgroundColor= "yellow"


const elements2 = document.getElementById("fruit")
const lastChild = elements2.lastElementChild;
lastChild.style.backgroundColor= "red"


const elements3 = document.getElementById("vegetables")
const firstChild2 = elements3.firstElementChild;
firstChild2.style.backgroundColor= "aqua"


//we can use querySelectorAll to select all first child elements in our list.
//combining it with an iteration method to go through the whole list , see here below

const ulElements = document.querySelectorAll("ul")
ulElements.forEach(ulElement =>{
    const firstItem = ulElement.firstElementChild;
firstItem.style.textDecoration= "underline"

})

const lastElements = document.querySelectorAll("ul")
lastElements.forEach(lastElement =>{
    const lastItem = lastElement.lastElementChild;
lastItem.style.textDecoration= "underline"

})



//next and previous sibling
//fruits, vegetables and sea food are all siblings to groceries
//oranges,kiwi...., are siblings to each other, the parent being fruits.
//so groceries can be grand parent, fruit parent and orange etc.., siblings
const sibElements = document.getElementById("Shrimp")
const nextEl = sibElements.nextElementSibling
nextEl.style.backgroundColor="green"

const sibElements2 = document.getElementById("Potatoes")
const nextEl2 = sibElements2.nextElementSibling
nextEl2.style.backgroundColor="green"

const sibElements3 = document.getElementById("Berries")
const prevEl = sibElements3.previousElementSibling
prevEl.style.backgroundColor="green"


//parentElement
//here shrimp is inside seafood, spo everything in seafood will be in arial font
//if bananas is chosen the parent to banana is fruits.
const parent = document.getElementById("Shrimp")
const parentEl = parent.parentElement
parentEl.style.fontFamily= "arial"



//children
const listItems = document.getElementById("vegetables")
const childrenEl = listItems.children;
//childrenEl[3].style.fontFamily = "calibri"


Array.from(childrenEl). forEach(child => {
    child.style.color="red"
})









