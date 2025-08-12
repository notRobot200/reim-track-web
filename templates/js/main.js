//// Jalankan saat halaman siap
//document.addEventListener("DOMContentLoaded", () => {
//  loadTableData();
//  handleFormSubmit();
//});

document.addEventListener("DOMContentLoaded", () => {
  const formSelector = document.getElementById("formSelector");
  const requestFormContainer = document.getElementById("requestFormContainer");
  const detailFormContainer = document.getElementById("detailFormContainer");

  formSelector.addEventListener("change", () => {
    if (formSelector.value === "request") {
      requestFormContainer.classList.remove("hidden");
      detailFormContainer.classList.add("hidden");
    } else {
      requestFormContainer.classList.add("hidden");
      detailFormContainer.classList.remove("hidden");
    }
  });

  // Load data awal tabel
  loadTableData();
});
