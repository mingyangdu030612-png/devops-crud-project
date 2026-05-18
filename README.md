# DevOps CRUD Project – Student Management System

## Project Overview

This project is a simple full-stack CRUD (Create, Read, Update, Delete) web application developed for DevOps deployment practice.

The application theme is a **Student Attendance System**, where users can:

* Add/Edit/Delete student records
* Store data using PostgreSQL

The project demonstrates the integration of:

* Node.js + Express.js backend
* PostgreSQL database
* Docker containerization
* Docker Compose multi-container setup
* Kubernetes deployment with Minikube
* Basic load testing

---

# Technologies Used

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| Node.js        | Backend runtime               |
| Express.js     | REST API framework            |
| PostgreSQL     | Database storage              |
| Docker         | Containerization              |
| Docker Compose | Multi-container orchestration |
| Kubernetes     | Container orchestration       |
| Minikube       | Local Kubernetes cluster      |
| Git & GitHub   | Version control               |

---

# Project Structure

```text
DEVOPS-CRUD-PROJECT
│
├── app/
│   ├── index.html
│   ├── style.css
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── tests/
│   └── loadtest.js
│   └── package-lock.json
│   └── package.json
├── Dockerfile
├── docker-compose.yml
├── init.sql
├── README.md
└── .gitignore
```

---

# Author

Du Mingyang

GitHub Repository:

[https://github.com/mingyangdu030612-png/devops-crud-project]

