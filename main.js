const todoList = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item-input");
const addItemButton = document.getElementById("add-item-button");

const initialProducts = ["Bread", "Milk", "Eggs", "Sugar", "Meat"];

function createTodoItem(productName) {
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textNode = document.createElement("span");
  textNode.className = "text";
  textNode.textContent = productName;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      listItem.classList.add("done");
    } else {
      listItem.classList.remove("done");
    }
  });

  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textNode);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
}

initialProducts.forEach((product) => createTodoItem(product));

addItemButton.addEventListener("click", function () {
  const newProduct = newItemInput.value.trim();
  if (newProduct) {
    createTodoItem(newProduct);
    newItemInput.value = "";
  }
});

newItemInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItemButton.click();
  }
});
