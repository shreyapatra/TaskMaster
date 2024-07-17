let ipBox = document.querySelector("#ipBox");
let list = document.querySelector("#list");

ipBox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (ipBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${ipBox}<i></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    })

    list.appendChild(listItem);
}