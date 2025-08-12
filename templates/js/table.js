// VERSION 1
//// Table management functions
//async function loadTableData() {
//  const tbody = document.getElementById("tableBody");
//  tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4">Loading data...</td></tr>`;
//
//  try {
//    const data = await fetchReimbursements();
//
//    if (!Array.isArray(data) || data.length === 0) {
//      tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4">No data found</td></tr>`;
//      return;
//    }
//
//    tbody.innerHTML = data.map(item => `
//      <tr class="hover:bg-gray-50">
//        <td class="border px-4 py-2">${item.tracking_id}</td>
//        <td class="border px-4 py-2">${item.name}</td>
//        <td class="border px-4 py-2">${item.principal_name}</td>
//        <td class="border px-4 py-2">${item.certification_name}</td>
//        <td class="border px-4 py-2">${new Date(item.exam_regist_date).toLocaleDateString()}</td>
//        <td class="border px-4 py-2">${new Date(item.exam_date).toLocaleDateString()}</td>
//        <td class="border px-4 py-2">$${item.cost_amount_usd}</td>
//        <td class="border px-4 py-2">${item.payment_method}</td>
//        <td class="border px-4 py-2">${item.paid_by}</td>
//      </tr>
//    `).join("");
//  } catch (error) {
//    console.error('Error loading table data:', error);
//    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4 text-red-600">Error loading data</td></tr>`;
//  }
//}
//
//// Initialize table data loading
//document.addEventListener('DOMContentLoaded', function() {
//  loadTableData();
//});

// VERSION 2
// Table management functions
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
      <tr class="hover:bg-gray-50">
        <td class="border px-4 py-2">${item.tracking_id}</td>
        <td class="border px-4 py-2">${item.name}</td>
        <td class="border px-4 py-2">${item.principal_name}</td>
        <td class="border px-4 py-2">${item.certification_name}</td>
        <td class="border px-4 py-2">${new Date(item.exam_regist_date).toLocaleDateString()}</td>
        <td class="border px-4 py-2">${new Date(item.exam_date).toLocaleDateString()}</td>
        <td class="border px-4 py-2">${item.cost_amount_usd}</td>
        <td class="border px-4 py-2">${item.payment_method}</td>
        <td class="border px-4 py-2">${item.paid_by}</td>
      </tr>
    `).join("");
  } catch (error) {
    console.error('Error loading table data:', error);
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4 text-red-600">Error loading data</td></tr>`;
  }
}

// Load detail table data
async function loadDetailTableData() {
  const tbody = document.getElementById("detailTableBody");
  tbody.innerHTML = `<tr><td colspan="10" class="text-center py-4">Loading data...</td></tr>`;

  try {
    const data = await fetchReimbursementDetails();

    if (!Array.isArray(data) || data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="text-center py-4">No data found</td></tr>`;
      return;
    }

    tbody.innerHTML = data.map(item => `
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.tracking_id}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.name}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.principal_name}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.certification_name}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${new Date(item.exam_regist_date).toLocaleDateString()}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${new Date(item.exam_date).toLocaleDateString()}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.cost_amount_usd}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">Rp ${item.cost_amount_idr.toLocaleString('id-ID')}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.payment_method}</td>
        <td class="border border-gray-300 px-4 py-2 whitespace-nowrap">${item.paid_by}</td>
      </tr>
    `).join("");
  } catch (error) {
    console.error('Error loading detail table data:', error);
    tbody.innerHTML = `<tr><td colspan="10" class="text-center py-4 text-red-600">Error loading data</td></tr>`;
  }
}

// Initialize table data loading
document.addEventListener('DOMContentLoaded', function() {
  loadTableData();
  loadDetailTableData();
});