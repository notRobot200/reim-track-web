async function loadTableData() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4">Loading data...</td></tr>`;

  try {
    const data = await fetchReimbursements();
    if (!Array.isArray(data) || data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4">No data found</td></tr>`;
      return;
    }

    tbody.innerHTML = data.map(item => `
      <tr>
        <td class="border px-4 py-2">${item.tracking_id}</td>
        <td class="border px-4 py-2">${item.name}</td>
        <td class="border px-4 py-2">${item.principal_name}</td>
        <td class="border px-4 py-2">${item.certification_name}</td>
        <td class="border px-4 py-2">${new Date(item.exam_regist_date).toLocaleDateString()}</td>
        <td class="border px-4 py-2">${new Date(item.exam_date).toLocaleDateString()}</td>
        <td class="border px-4 py-2">$${item.cost_amount_usd}</td>
        <td class="border px-4 py-2">${item.payment_method}</td>
        <td class="border px-4 py-2">${item.paid_by}</td>
      </tr>
    `).join("");
  } catch (error) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4 text-red-600">Error loading data</td></tr>`;
  }
}
