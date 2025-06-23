function bgApply(event) {
  document.querySelector("body").style.backgroundColor =
    window.getComputedStyle(event.target).backgroundColor;
}

function addButton() {
  const color = prompt("Enter a Color:").trim().toLowerCase();
  const temp = document.createElement("div");
  temp.style.backgroundColor = color;
  if (temp.style.backgroundColor === "") {
    alert("Invalid Color. Try Again");
    return;
  }
  const btnElem = document.createElement("button");
  btnElem.setAttribute("onclick", "bgApply(event)");
  btnElem.textContent = color;
  btnElem.classList.add("btn");
  btnElem.style.backgroundColor = color;
  document.querySelector("#btn-container").appendChild(btnElem);
}
