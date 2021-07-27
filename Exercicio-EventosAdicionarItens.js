
 function AddItem()
{
    let item = document.getElementById("in").value;
    const li = document.createElement("li");
    const node = document.createTextNode(item);
    li.appendChild(node);
    const element = document.getElementById("lista");
    element.appendChild(li);
}




