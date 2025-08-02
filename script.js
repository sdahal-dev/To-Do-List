const userInput = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
  if (userInput.value == "") {
    alert("You need to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML =
      userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  userInput.value = "";
}

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove(); //
  }
});
