let allMenuDiv = document.querySelectorAll("#tab-menu .menu div");
let allItemElem = document.querySelectorAll("#tab-menu .body .item")
for (const menu of allMenuDiv) {
    menu.addEventListener("click", function () {
        let active = document.querySelector(".active")
        active.classList.remove("active")
        this.classList.add("active");

        let id = this.getAttribute("data-tural")
        for (const item of allItemElem) {
            if (item.getAttribute("data-tural") == id) {
                item.classList.remove("d-none")
            }
            else {
                item.classList.add("d-none")
            }
        }
    })
}