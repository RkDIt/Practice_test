function enter_to_list() {
    const li = document.createElement("li");


    const info = document.getElementById("info").value;
    console.log(info);

    if (info === "") {
        alert("Please enter something to add to the list.");
        return; 
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check_box_" + new Date().getTime();  

    const listItemText = document.createElement("span");
    listItemText.textContent = info;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        li.remove(); 
    };

    // Append checkbox, text (inside a span), and delete button to the list item
    li.appendChild(checkbox);
    li.appendChild(listItemText);
    li.appendChild(deleteButton);

    // Append the new list item to the list
    document.getElementById("list").appendChild(li);

    // Clear the input field after adding the item
    document.getElementById("info").value = "";
}
