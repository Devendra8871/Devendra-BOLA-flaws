// Mock Audit Dataset
const auditResults = [
  { id: "SEC-101", endpoint: "/api/v1/users/101/profile", method: "GET", role: "User B (ID 102)", access: "Attempted User A Data", status: "FAIL", BOLA: true },
  { id: "SEC-102", endpoint: "/api/v1/documents/882/download", method: "GET", role: "User B (ID 102)", access: "Attempted Document 882", status: "FAIL", BOLA: true },
  { id: "SEC-103", endpoint: "/api/v1/orders/301", method: "GET", role: "User A (ID 101)", access: "Own Order Data", status: "PASS", BOLA: false },
  { id: "SEC-104", endpoint: "/api/v1/accounts/101/balance", method: "GET", role: "User B (ID 102)", access: "Attempted User A Account", status: "PASS", BOLA: false },
  { id: "SEC-105", endpoint: "/api/v1/settings", method: "POST", role: "User A (ID 101)", access: "Update Preferences", status: "PASS", BOLA: false }
];

// Initialize Dashboard
document.addEventListener("DOMContentLoaded", () => {
  renderSummaryTable();
  renderAuditLogs(auditResults);
});

// Switch Active Tabs
function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
  
  document.getElementById(`tab-${tabName}`).classList.add("active");
  event.target.classList.add("active");
}

// Render Findings Summary (Overview Tab)
function renderSummaryTable() {
  const container = document.getElementById("findings-summary-body");
  const failedItems = auditResults.filter(item => item.status === "FAIL");

  container.innerHTML = failedItems.map(item => `
    <tr>
      <td><code>${item.endpoint}</code></td>
      <td><span class="badge badge-method">${item.method}</span></td>
      <td>Tenant Isolation Defeated</td>
      <td><span class="badge badge-fail">BOLA Flaw Detected</span></td>
      <td><button class="filter-btn" onclick="switchTab('remediation')">View Fix</button></td>
    </tr>
  `).join('');
}

// Render Full Logs with Filter
function renderAuditLogs(data) {
  const container = document.getElementById("full-audit-body");
  
  container.innerHTML = data.map(item => `
    <tr>
      <td><code>${item.id}</code></td>
      <td><code>${item.endpoint}</code></td>
      <td>${item.role}</td>
      <td>${item.access}</td>
      <td>
        <span class="badge ${item.status === 'PASS' ? 'badge-pass' : 'badge-fail'}">
          ${item.status === 'PASS' ? 'PASS (403 Forbidden)' : 'FAIL (200 OK Leaked)'}
        </span>
      </td>
    </tr>
  `).join('');
}

// Filter Logs Functionality
function filterLogs(type) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (type === 'all') {
    renderAuditLogs(auditResults);
  } else {
    const filtered = auditResults.filter(item => item.status === type);
    renderAuditLogs(filtered);
  }
}

// Trigger Interactive Audit Simulation
function runSimulatedAudit() {
  const btn = document.querySelector(".primary-btn");
  btn.innerText = "⏳ Auditing Endpoints...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "▶ Run Security Audit";
    btn.disabled = false;
    alert("Audit completed successfully. All automated BOLA assertions verified.");
  }, 1200);
}