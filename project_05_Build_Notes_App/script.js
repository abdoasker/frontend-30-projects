const notescontainer = document.querySelector(".notesContainer");
const addnotebutton = document.querySelector(".add-note");
const notes = document.querySelectorAll(".input-box");

function showNotes() {
  notescontainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Add event listeners to existing notes
document.querySelectorAll(".input-box").forEach((nt) => {
  nt.addEventListener("keyup", updateLocalStorage);
});

function updateLocalStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

addnotebutton.addEventListener("click", () => {
  let newnote = document.createElement("p");
  let img = document.createElement("img");
  img.src = "images/delete.png";
  newnote.className = "input-box";
  newnote.setAttribute("contenteditable", "true");
  newnote.appendChild(img);
  notescontainer.appendChild(newnote);
  newnote.addEventListener("keyup", updateLocalStorage);
});

notescontainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocalStorage();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertHTML", false, "<br>");
    event.preventDefault();
  }
});
