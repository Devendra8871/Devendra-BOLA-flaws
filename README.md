# Automated API Security & BOLA Scanning Framework

An automated security testing framework designed to identify **Broken Object Level Authorization (BOLA)** flaws across RESTful web APIs (OWASP API Security Top 10 - API1:2023).

## 📌 Project Overview
BOLA occurs when an API endpoint exposes object identifiers without enforcing tenant ownership validation. This framework provides:
1. **Automated Assertion Testing:** Postman & Newman test collections verifying cross-tenant isolation boundaries.
2. **CI/CD Integration:** Automated GitHub Actions pipeline executing security assertions on code commits.
3. **Security Dashboard:** Minimalist visual interface displaying authorization compliance, audit logs, and developer remediation guidelines.

## 🛠️ Tech Stack
- **Framework & Logic:** JavaScript (ES6+), Node.js
- **API Testing:** Postman, Newman CLI
- **Continuous Integration:** GitHub Actions
- **Frontend Dashboard:** HTML5, CSS3 (Custom Responsive Properties)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)

### Local Setup & Execution
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/api-bola-security-framework.git](https://github.com/your-username/api-bola-security-framework.git)
   cd api-bola-security-framework
