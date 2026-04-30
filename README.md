# DevOps CRUD Project

## Project Description

This project is a Node.js CRUD application for managing tasks.

It is containerized using Docker, connected to PostgreSQL, deployed with Kubernetes using Minikube, and validated with load testing.

## Technologies

* Node.js
* Express.js
* PostgreSQL
* Docker
* Docker Compose
* Kubernetes
* Minikube
* k6

## Features

* Create tasks
* Read tasks
* Update tasks
* Delete tasks
* Health check endpoint

## Project Structure

project/
├── app/
├── k8s/
├── tests/
├── screenshots/
├── Dockerfile
├── docker-compose.yaml
└── README.md

## Assumptions

* The application runs on port 3000.
* PostgreSQL is used as the database.
* Minikube is used as the Kubernetes environment.
