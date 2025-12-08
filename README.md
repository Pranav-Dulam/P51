# 🚀 P51 – Generative AI Innovation Dashboard

P51 is a full-stack analytics platform that visualizes real-world GenAI trends through interactive charts, secure authentication, and a production-ready deployment stack. It integrates a React-based responsive dashboard with a Node.js API layer and a MySQL database optimized for analytical reporting.

---

## 🔗 Live Demo

Access the deployed P51 Dashboard here: **[http://137.184.40.86](http://137.184.40.86)**


---

## 🎨 Frontend

* **React + Vite** — Fast dev environment with optimized builds
* **Axios** — Seamless API communication
* **CSS Modules / Custom UI** — Clean, modular styling
* **Nginx Deployment** — Production hosting for `/dist`
* **Responsive Dashboard Layout** — Works across desktop and mobile

---

## 🛠 Backend

* **Node.js + Express API**
* **JWT Authentication** (secure login & protected routes)
* **MySQL2 Connection Pool** for efficient queries
* **Environment-secure `.env` configuration**
* **PM2** for production process management
* **CORS** configured for production usage

---

## 🗄 Database (MySQL)

| Table Name        | Purpose                               |
| ----------------- | ------------------------------------- |
| `genaiadoption`   | Industry-wise GenAI usage data        |
| `modelefficiency` | Efficiency metrics for AI models      |
| `modelcost`       | Cost comparison across model families |
| `chart_reports2`  | Monthly reports for dashboard summary |

---

## 🚀 Deployment Architecture

* **DigitalOcean Ubuntu Droplet**
* **Nginx Reverse Proxy** for routing `/api → Node.js backend`
* **Static File Hosting** for React build
* **Secure firewall (ufw)** and systemd services
* **PM2** ensures uptime & log management

---

## 🔐 Authentication Workflow

P51 uses **JWT-based secure authentication** to protect all analytics endpoints.

* `POST /api/auth/signup` → Register user
* `POST /api/auth/login` → Receive JWT token

All chart routes require:

```
Authorization: Bearer <token>
```

Passwords are hashed before storage, ensuring safe credential management.

---

## 📡 API Endpoints

### **Auth Routes**

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | `/api/auth/signup` | Create new user |
| POST   | `/api/auth/login`  | Login + get JWT |

### **Chart Routes** (Protected)

| Method | Endpoint                         | Description                 |
| ------ | -------------------------------- | --------------------------- |
| GET    | `/api/charts/summary`            | Monthly summary chart       |
| GET    | `/api/charts/reports/adoption`   | GenAI adoption by industry  |
| GET    | `/api/charts/reports/efficiency` | Model efficiency comparison |
| GET    | `/api/charts/reports/cost`       | Model cost analysis         |

> ⚠️ All chart requests must include a valid JWT token.

---

## 📂 Project Structure (High-Level)

A streamlined monorepo containing:

* **Frontend**: React, components, pages, API handlers
* **Backend**: Express routes, controllers, JWT middleware
* **Database**: MySQL tables powering analytic visualizations
* **Deployment**: Nginx configuration, PM2 ecosystem files

---
