// VERSION 1
//// Form toggle functionality
//const formSelector = document.getElementById("formSelector");
//const requestFormContainer = document.getElementById("requestFormContainer");
//const detailFormContainer = document.getElementById("detailFormContainer");
//
//formSelector.addEventListener("change", () => {
//  if (formSelector.value === "request") {
//    requestFormContainer.classList.remove("hidden");
//    detailFormContainer.classList.add("hidden");
//  } else {
//    requestFormContainer.classList.add("hidden");
//    detailFormContainer.classList.remove("hidden");
//  }
//});

// VERSION 2
// Form toggle functionality
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
    // Load detail table data when switching to detail form
    loadDetailTableData();
  }
});