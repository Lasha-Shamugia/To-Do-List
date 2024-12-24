const todoList = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item-input");
const addItemButton = document.getElementById("add-item-button");

const products = ["Beer", "Bread", "Eggs", "Meat", "Salt"];

function createTodoItem(productName) {
  // შევქმნათ ახალი ელემენტი <li>
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  // შევქმნათ ახალი ჩექბოქსი
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // შევქმნათ პროდუქტის სახელწოდება
  const textNode = document.createTextNode(productName);

  // მოვნიშნოთ ჩექმოქსი დაკლიკვისას
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      listItem.classList.add("done");
    } else {
      listItem.classList.remove("done");
    }
  });

  // დავამატოთ ჩექმოქსი და ტექსტი ახალ <li>ში
  listItem.appendChild(checkbox);
  listItem.appendChild(textNode);

  // დავამატოთ <li> უკვე შექმნილ <ul>ში
  todoList.appendChild(listItem);
}

products.forEach((product) => createTodoItem(product));
  