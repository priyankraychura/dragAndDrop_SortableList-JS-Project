const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Adding dragging class to item after dealy
        setTimeout(() => item.classList.add('dragging'), 0);
    });

    // Removing dragging class from item on dgagged event
    item.addEventListener("dragend", () => item.classList.remove('dragging'));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector('.dragging');

    // Getting all items except currently dragging and making array of them
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // FInding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Inserting the dragging item beofore the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());