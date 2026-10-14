//DOM Manipulation - how you style, add, delete those elements once you have found them 
//methods like createElement(), appendChild(), getElementbyId(), remove() are used see lab-flatiron-bookstore for add and remove
//DOM navigation - finding and moving between different elements in the DOM tree (read-only)...> see navigation folder
//more apending examples in add-remove folder

//Element selectors
//Methods used to target and manipulate Html elements. 
//They allow you to select one or multiple elements in the DOM

// 1. document.getElementById()           .....element or null value
// 2. document.getElementByClassName()    .....HTML collection
// 3. document.getElementByTagName()      .....HTML collection
// 4. document.querySelector()            .....element or null value
// 5. document.querySelectorAll()         .....Nodelist


//Styling elements in the dom use camel case in normal css, the words are hyphenated ie
// in js fontSize,  in css font-size 



//.....1.document.getElementById().......
//using devtools >inspect page >console.log newItems ,displays the h1 element, and styles applied.
//the method returns an element when it finds it and null when it doesnt or when misspealled.
const newItems = document.getElementById("arrivals");
newItems.style.backgroundColor= "yellow"
newItems.style.textAlign="center"


//....2.document.getElementByClassName()....
//similar to arrays but have limited functions as to arrays
//return a html collection that contains that class, html collections are iterable, loops can be used
//the for of method allows for looping through the elements.
//however array for each cannot be used directly , see below using Array.from(newClothes), creating a new array hence .foreach method is possible.


const newClothes= document.getElementsByClassName("clothes")
newClothes[0].style.backgroundColor ="grey"
newClothes[1].style.backgroundColor ="grey"
newClothes[2].style.backgroundColor ="grey"


for(let clothes of newClothes) {

    clothes.style.textDecoration="underline"
}

Array.from(newClothes).forEach(clothe =>{
    clothe.style.textAlign = "center"
})


//.......3.document.GetElementByTagName()
const liElements = document.getElementsByTagName("li") ;
const h2Elements =document.getElementsByTagName("h2");
liElements[7].style.backgroundColor = "lightblue"

for(let newClothe of liElements){
    newClothe.style.fontFamily= "arial"
}

Array.from(h2Elements).forEach(element =>{
    element.style.fontFamily = "calibri"
})


//......4. document.querySelector()
// selects the first match, if many it selects the first one.
//you can select a class or a tag name
 const listTag = document.querySelector("li")
 listTag.style.backgroundColor = "green"

 const parTag= document.querySelector("p")
 parTag.style.fontFamily = "Comic Sans MS"


 //.......5.document.querySelectorAll()
 // it returns a nodelist, a nodelist is
 //  a collection of document nodes eg html elements, text that are returned by web browsers API like document.querySelectorAll(), or node.childNodes.
 // are static, contains inbuilt methods, almost similar to arrays
  const newClothes3 = document.querySelectorAll("li")
  newClothes3[5].style.textDecoration = "underline"
  newClothes3[8].style.textDecoration = "underline"
  newClothes3[3].style.textDecoration = "underline";

  newClothes3.forEach(newclothee => {
    newclothee.style.fontWeight="bold"
  })



  






