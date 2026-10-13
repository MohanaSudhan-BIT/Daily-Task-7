const box = document.getElementById("box");
const btn1 = document.getElementById("btn1");
const list = document.getElementById("list");
const num = document.getElementById("num");
const btn2 = document.getElementById("btn2");
const c = ["lightyellow", "lightcyan", "lavender", "lightpink", "lightgreen"];
let n = 0;

function myCount() {
  num.textContent = "Total Quests: " + list.children.length;
}

function myAdd() {
  const text = box.value.trim();
  if (text === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  li.onclick = function () {
    li.classList.toggle("completed");
  };
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.onclick = function (event) {
    event.stopPropagation();
    li.remove();
    myCount();
  };
  li.appendChild(del);
  list.appendChild(li);
  box.value = "";
  myCount();
}

btn1.onclick = myAdd;

btn2.onclick = function () {
  n = n + 1;
  if (n === c.length) {
    n = 0;
  }
  document.body.style.backgroundColor = c[n];
};
