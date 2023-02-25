export async function showUpdateModal() {
  let modal = document.createElement("div");
  modal.innerText = "Updated!"
  document.body.append(modal);
  modal.className = "update-modal";
  setTimeout(() => {
    document.body.remove(modal);
  }, 2000);
}