# 🚀 P51 – Generative AI Innovation Dashboard  
A full-stack web application showcasing AI adoption trends, model efficiency, model cost analysis, and innovation insights — built with **React (Vite)**, **Node.js + Express**, **MySQL**, and **Nginx** on a **DigitalOcean Linux server**.

Live Deployment:  
👉 http://137.184.40.86

---

## 📊 Project Overview
P51 is a data-driven dashboard designed to visualize **Generative AI industry insights**, including:

- AI adoption by industry  
- Model efficiency comparisons  
- Model cost breakdowns  
- Monthly AI usage trends  
- News + innovation panel  
- Secure authentication system  

This app serves as a production-ready demo of a **real-world analytics platform** powered by a complete Node.js backend and interactive React frontend.

---

## 🏗️ Tech Stack

### **Frontend**
- React + Vite
- Axios for API requests  
- CSS Modules / Custom UI  
- Deployed through Nginx  
- Responsive dashboard layout  

### **Backend**
- Node.js + Express  
- JSON Web Token (JWT) authentication  
- MySQL2 (Connection Pool)  
- Secure .env configuration  
- PM2 process manager  
- CORS configured for production  

### **Database (MySQL)**
- genaiadoption → Industry usage  
- modelefficiency → Efficiency metrics  
- modelcost → Cost comparison  
- chart_reports2 → Monthly data  

### **Deployment**
- DigitalOcean droplet (Ubuntu)  
- Reverse proxy using Nginx  
- Secure routing for `/api` backend  
- Static file hosting for React `/dist`  
- Systemd, PM2, ufw firewall  

---

## 🔐 Authentication
P51 uses secure JWT authentication:

- `/api/auth/signup` → Create user  
- `/api/auth/login` → Get JWT token  
- Routes under `/api/charts/*` require `Authorization: Bearer <token>`  

Password is hashed and stored securely.

---

## 📡 API Endpoints

### **Auth**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Create new user |
| POST | `/api/auth/login` | Login + get JWT |

### **Charts**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/charts/summary` | Monthly report chart |
| GET | `/api/charts/reports/adoption` | AI adoption by industry |
| GET | `/api/charts/reports/efficiency` | Model efficiency metrics |
| GET | `/api/charts/reports/cost` | Model cost comparison |

All require Authorization header.

---

## 📂 Project Structure
