export function showUpdateModal(text) {
    let modal = document.createElement("div");
    let main = document.querySelector("main");
    modal.innerText = text;
    modal.className = "update-modal";
    main.prepend(modal);
    setTimeout(() => {
        main.removeChild(modal);
    }, 1400);
}
