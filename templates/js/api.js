//reimburse.html
//const API_BASE_URL = "http://localhost:8080/reimburse/";
//
//async function fetchReimbursements() {
//  const res = await fetch(API_BASE_URL);
//  return res.json();
//}
//
//async function submitReimbursement(data) {
//  const res = await fetch(API_BASE_URL, {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify(data),
//  });
//  return { status: res.ok, result: await res.json() };
//}

// VERSION 1
//// API configuration and functions
//const API_BASE_URL = "http://localhost:8080";
//
//// Fetch reimbursements data
//async function fetchReimbursements() {
//  const res = await fetch(`${API_BASE_URL}/reimburse`);
//  return res.json();
//}
//
//// Submit reimbursement request
//async function submitReimbursementRequest(payload) {
//  const res = await fetch(`${API_BASE_URL}/reimburse`, {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify(payload)
//  });
//  return { response: res, data: await res.json() };
//}
//
//// Submit reimbursement detail
//async function submitReimbursementDetail(payload) {
//  const res = await fetch(`${API_BASE_URL}/reimburse_detail`, {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify(payload)
//  });
//  return { response: res, data: await res.json() };
//}

// VERSION 2
// API configuration and functions
//const API_BASE_URL = "http://localhost:8080";
const API_BASE_URL = "https://reim-track-1066934090892.us-central1.run.app";

// Fetch reimbursements data
async function fetchReimbursements() {
  const res = await fetch(`${API_BASE_URL}/reimburse/`);
  return res.json();
}

// Fetch reimbursement details data
async function fetchReimbursementDetails() {
  const res = await fetch(`${API_BASE_URL}/reimburse_detail`);
  return res.json();
}

// Submit reimbursement request
async function submitReimbursementRequest(payload) {
  const res = await fetch(`${API_BASE_URL}/reimburse/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return { response: res, data: await res.json() };
}

// Submit reimbursement detail
async function submitReimbursementDetail(payload) {
  const res = await fetch(`${API_BASE_URL}/reimburse_detail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return { response: res, data: await res.json() };
}