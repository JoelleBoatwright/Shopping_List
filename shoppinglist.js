var addButton = document.getElementById('addItem');
var list = document.getElementById("list");

function addItem() {
    var input = document.getElementById("inputItem").value;
    var item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);

    var removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    item.appendChild(removeButton);

    function removeItem() {
        removeButton.parentNode.remove();
    }

    removeButton.addEventListener('click', removeItem)
}

addButton.addEventListener('click', addItem);
