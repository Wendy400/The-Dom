const newItem = document.createElement("li")
newItem.textContent="coconut";
newItem.id="coconut";
newItem.style.fontWeight="bold";
newItem.style.backgroundColor="lightgreen";
//document.body.append(newItem)
//document.getElementById("fruits").append(newItem)
document.getElementById("fruits").prepend(newItem)

const orange = document.getElementById("orange")
document.getElementById("fruits").insertBefore(newItem,orange)



//if elements dont have id you can use query selectorall
const newFruit= document.createElement("li")
newFruit.textContent = "kiwi"
newFruit.id ="kiwi"
newFruit.style.backgroundColor="orange"
newFruit.style.fontWeight="bold"
document.getElementById("fruits").append(newFruit)
const listItems= document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newFruit, listItems[3] )
// adding an index that does not exist the element will be added last.