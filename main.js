window.addEventListener("DOMContentLoaded", main);

function main() {
  console.log("Start of the program");
  loadStartScene();
}

const listOfItems = [];

function loadStartScene() {
  roomContainer.innerText = "";

  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till dörrarnas värld";

  const pText = document.createElement("p");
  pText.textContent =
    "I den här världen kommer du gå igenom ett antal dörrar. Vissa dörrar tar dig till helt fantastiska ställen medans andra kommer att få dig att tvivla på dina val. Tryck på den första dörren för att starta spelet";

  const button = document.createElement("button");
  button.textContent = "Börja";
  button.onclick = loadFirstRoom;

  roomContainer.append(headingText, pText, button);

  objectContainer.innerText = "";
}

function loadFirstRoom() {
  document.body.style.backgroundColor = "pink";
  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det rosa rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Red door.png";
  image1.onclick = loadSecondRoom
  const image2 = document.createElement("img");
  image2.src = "Assets/blue door.png";
  image2.onclick = loadThirdRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/crowbar.png";
  object1.onclick = function () {
    pickUpCrowbar(object1);
  };
  objectContainer.append(object1);
}

function loadSecondRoom() {
  document.body.style.backgroundColor = "yellow";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det gula rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Green door.png";
  image1.onclick = loadFirstRoom;
  const image2 = document.createElement("img");
  image2.src = "Assets/pink door.png";
  image2.onclick = loadThirdRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/Nyckel.png";
  object1.onclick = function () {
    pickUpKey(object1);
  };

  objectContainer.append(object1);
}

function loadThirdRoom() {
  document.body.style.backgroundColor = "red";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det röda rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Purple door.png";
  image1.onclick = loadSecondRoom
  const image2 = document.createElement("img");
  image2.src = "Assets/Brown door.png";
  image2.onclick = loadFourthRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
}

function loadFourthRoom() {
  document.body.style.backgroundColor = "purple";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det lila rummet";

  const pText = document.createElement("p");
  pText.textContent =
    "Du är nu i vid sista dörren. Men har du nyckeln för att kunna gå igenom?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Yellow door.png";
  doorContainer.append(image1);

  if (listOfItems.includes("key") && listOfItems.includes("crowbar")) {
    image1.onclick = loadFinalRoom;
  } else if (listOfItems.includes("key")) {
    image1.onclick = function () {
    const messageContainer = document.createElement("button");
      messageContainer.textContent = "Du behöver också en crowbar för att öppna dörren";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer); }
  } else if (listOfItems.includes("crowbar")) {
    image1.onclick = function () {
    const messageContainer = document.createElement("button");
      messageContainer.textContent = "Du behöver också en nyckel för att öppna dörren";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer);}
  } else {
    image1.onclick = function () {
      const messageContainer = document.createElement("button");
      messageContainer.textContent = "Hmmmm.. Dörren är låst. Det verkar som du kanske glömt något på vägen hit?";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer);
    };    
  }
  objectContainer.innerText = "";
}

function loadFinalRoom() {
  document.body.style.backgroundColor = "orange";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det sista rummet";

  const pText = document.createElement("p");
  pText.textContent = "Grattis, du tog dig i mål!";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  objectContainer.innerText = "";
}

function pickUpKey(img) {
  objectContainer.removeChild(img);
  listOfItems.push("key");
}

function pickUpCrowbar(img) {
  objectContainer.removeChild(img);
  listOfItems.push("crowbar");
}