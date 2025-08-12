function showMessage(msg, color) {
  const msgEl = document.getElementById("responseMsg");
  msgEl.textContent = msg;
  msgEl.className = `mt-4 text-center font-medium text-${color}-600`;
}

function handleFormSubmit() {
  document.getElementById("reimburseForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name", "certification_name", "principal_name",
      "exam_regist_date", "cost_amount_usd", "exam_date",
      "payment_method", "paid_by"
    ];

    let valid = true;
    requiredFields.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add("border-red-500");
        valid = false;
      } else {
        el.classList.remove("border-red-500");
      }
    });

    if (!valid) {
      showMessage("Please fill in all required fields.", "red");
      return;
    }

    const data = {
      name: document.getElementById("name").value,
      certification_name: document.getElementById("certification_name").value,
      principal_name: document.getElementById("principal_name").value,
      exam_regist_date: document.getElementById("exam_regist_date").value,
      cost_amount_usd: parseFloat(document.getElementById("cost_amount_usd").value),
      exam_date: document.getElementById("exam_date").value,
      payment_method: document.getElementById("payment_method").value,
      paid_by: document.getElementById("paid_by").value,
    };

    const btnText = document.getElementById("btnText");
    const spinner = document.getElementById("spinner");
    btnText.textContent = "Submitting...";
    spinner.classList.remove("hidden");
    document.getElementById("submitBtn").disabled = true;

    try {
      const { status, result } = await submitReimbursement(data);
      if (status) {
        showMessage(result.message, "green");
        document.getElementById("reimburseForm").reset();
        loadTableData();
      } else {
        showMessage(result.message || "Error submitting request.", "red");
      }
    } catch {
      showMessage("Server error. Please try again.", "red");
    } finally {
      btnText.textContent = "Submit";
      spinner.classList.add("hidden");
      document.getElementById("submitBtn").disabled = false;
    }
  });
}
