const items = document.querySelectorAll(".item");
let draggedItem = null;

items.forEach((item, index) => {
    item.draggable = true;
    item.id = `item-${index}`;

    item.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
        e.dataTransfer.setData("text/plain", e.target.id);
        e.target.style.opacity = "0.5";
    });

    item.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1";
    });

    item.addEventListener("dragover", (e) => {
        e.preventDefault(); // Allow drop
    });

    item.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedItem && draggedItem !== e.target) {
            const temp = e.target.innerHTML;
            e.target.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        }
    });
});

