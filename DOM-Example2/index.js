//Document Object model
//It treats your web page elements as objects that can be manipulated
//dont forget to link the index.js file in the head section

const username = " Wendy";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? ` Guest` : username;