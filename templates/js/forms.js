// VERSION 1
//// Form handling functions
//
//// UI helper functions
//function setButtonLoading(btnTextId, spinnerId, isLoading, text = "Submit") {
//  const btnText = document.getElementById(btnTextId);
//  const spinner = document.getElementById(spinnerId);
//
//  if (isLoading) {
//    btnText.textContent = "Processing...";
//    spinner.classList.remove("hidden");
//  } else {
//    btnText.textContent = text;
//    spinner.classList.add("hidden");
//  }
//}
//
//function showMessage(msgId, message, isSuccess) {
//  const msg = document.getElementById(msgId);
//  msg.textContent = message;
//  msg.className = `mt-4 text-center font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`;
//}
//
//function clearMessage(msgId) {
//  document.getElementById(msgId).textContent = "";
//}
//
//// Handle Reimbursement Request Form
//document.getElementById("reimburseForm").addEventListener("submit", async function(e) {
//  e.preventDefault();
//
//  setButtonLoading("btnTextReq", "spinnerReq", true);
//  clearMessage("responseMsgReq");
//
//  const payload = {
//    name: document.getElementById("name").value,
//    principal_name: document.getElementById("principal_name").value,
//    certification_name: document.getElementById("certification_name").value,
//    exam_regist_date: document.getElementById("exam_regist_date").value,
//    cost_amount_usd: Number(document.getElementById("cost_amount_usd").value),
//    exam_date: document.getElementById("exam_date").value,
//    payment_method: document.getElementById("payment_method").value,
//    paid_by: document.getElementById("paid_by").value
//  };
//
//  try {
//    const { response, data } = await submitReimbursementRequest(payload);
//
//    if (response.ok) {
//      showMessage("responseMsgReq", data.message || "Success!", true);
//      loadTableData(); // Reload table data
//      document.getElementById("reimburseForm").reset(); // Clear form
//    } else {
//      showMessage("responseMsgReq", data.message || "Error!", false);
//    }
//  } catch (error) {
//    console.error('Error submitting reimbursement request:', error);
//    showMessage("responseMsgReq", "Error connecting to server.", false);
//  } finally {
//    setButtonLoading("btnTextReq", "spinnerReq", false);
//  }
//});
//
//// Handle Reimbursement Detail Form
//document.getElementById("reimburseDetailForm").addEventListener("submit", async function(e) {
//  e.preventDefault();
//
//  setButtonLoading("btnTextDetail", "spinnerDetail", true);
//  clearMessage("responseMsgDetail");
//
//  const payload = {
//    tracking_id: Number(document.getElementById("tracking_id").value),
//    cost_amount_idr: Number(document.getElementById("cost_amount_idr").value)
//  };
//
//  try {
//    const { response, data } = await submitReimbursementDetail(payload);
//
//    if (response.ok) {
//      showMessage("responseMsgDetail", data.message || "Success!", true);
//      document.getElementById("reimburseDetailForm").reset(); // Clear form
//    } else {
//      showMessage("responseMsgDetail", data.message || "Error!", false);
//    }
//  } catch (error) {
//    console.error('Error submitting reimbursement detail:', error);
//    showMessage("responseMsgDetail", "Error connecting to server.", false);
//  } finally {
//    setButtonLoading("btnTextDetail", "spinnerDetail", false);
//  }
//});


// VERSION 2
// Form handling functions

// UI helper functions
function setButtonLoading(btnTextId, spinnerId, isLoading, text = "Submit") {
  const btnText = document.getElementById(btnTextId);
  const spinner = document.getElementById(spinnerId);

  if (isLoading) {
    btnText.textContent = "Processing...";
    spinner.classList.remove("hidden");
  } else {
    btnText.textContent = text;
    spinner.classList.add("hidden");
  }
}

function showMessage(msgId, message, isSuccess) {
  const msg = document.getElementById(msgId);
  msg.textContent = message;
  msg.className = `mt-4 text-center font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`;
}

function clearMessage(msgId) {
  document.getElementById(msgId).textContent = "";
}

// Handle Reimbursement Request Form
document.getElementById("reimburseForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  setButtonLoading("btnTextReq", "spinnerReq", true);
  clearMessage("responseMsgReq");

  const payload = {
    name: document.getElementById("name").value,
    principal_name: document.getElementById("principal_name").value,
    certification_name: document.getElementById("certification_name").value,
    exam_regist_date: document.getElementById("exam_regist_date").value,
    cost_amount_usd: Number(document.getElementById("cost_amount_usd").value),
    exam_date: document.getElementById("exam_date").value,
    payment_method: document.getElementById("payment_method").value,
    paid_by: document.getElementById("paid_by").value
  };

  try {
    const { response, data } = await submitReimbursementRequest(payload);

    if (response.ok) {
      showMessage("responseMsgReq", data.message || "Success!", true);
      loadTableData(); // Reload table data
      document.getElementById("reimburseForm").reset(); // Clear form
    } else {
      showMessage("responseMsgReq", data.message || "Error!", false);
    }
  } catch (error) {
    console.error('Error submitting reimbursement request:', error);
    showMessage("responseMsgReq", "Error connecting to server.", false);
  } finally {
    setButtonLoading("btnTextReq", "spinnerReq", false);
  }
});

//// Handle Reimbursement Detail Form
//document.getElementById("reimburseDetailForm").addEventListener("submit", async function(e) {
//  e.preventDefault();
//
//  setButtonLoading("btnTextDetail", "spinnerDetail", true);
//  clearMessage("responseMsgDetail");
//
//  const payload = {
//    tracking_id: Number(document.getElementById("tracking_id").value),
//    cost_amount_idr: Number(document.getElementById("cost_amount_idr").value)
//  };
//
//  try {
//    const { response, data } = await submitReimbursementDetail(payload);
//
//    if (response.ok) {
//      showMessage("responseMsgDetail", data.message || "Success!", true);
//      document.getElementById("reimburseDetailForm").reset(); // Clear form
//      loadDetailTableData(); // Reload detail table data
//    } else {
//      showMessage("responseMsgDetail", data.message || "Error!", false);
//    }
//  } catch (error) {
//    console.error('Error submitting reimbursement detail:', error);
//    showMessage("responseMsgDetail", "Error connecting to server.", false);
//  } finally {
//    setButtonLoading("btnTextDetail", "spinnerDetail", false);
//  }
//});

// Handle Reimbursement Detail Form
document.getElementById("reimburseDetailForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  setButtonLoading("btnTextDetail", "spinnerDetail", true);
  clearMessage("responseMsgDetail");

  // Ambil data dari form
  const formData = new FormData();
  formData.append("tracking_id", document.getElementById("tracking_id").value);
  formData.append("cost_amount_idr", document.getElementById("cost_amount_idr").value);

  // Invoice files
  const filesInvoice = document.getElementById("files_invoice").files;
  for (let i = 0; i < filesInvoice.length; i++) {
    formData.append("files_invoice", filesInvoice[i]);
  }

  // Bank confirmation files
  const filesBank = document.getElementById("files_bank").files;
  for (let i = 0; i < filesBank.length; i++) {
    formData.append("files_bank", filesBank[i]);
  }

  try {
    const res = await fetch(`${API_BASE_URL}/reimburse_detail`, {
      method: "POST",
      body: formData // ⬅ tidak perlu set Content-Type, browser akan otomatis
    });

    const data = await res.json();

    if (res.ok) {
      showMessage("responseMsgDetail", data.message || "Success!", true);
      document.getElementById("reimburseDetailForm").reset();
      loadDetailTableData(); // reload tabel
    } else {
      showMessage("responseMsgDetail", data.error || "Error!", false);
    }
  } catch (error) {
    console.error('Error submitting reimbursement detail:', error);
    showMessage("responseMsgDetail", "Error connecting to server.", false);
  } finally {
    setButtonLoading("btnTextDetail", "spinnerDetail", false);
  }
});

