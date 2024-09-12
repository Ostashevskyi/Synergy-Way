# React Vite Project

This is a React Vite project that can be run locally or inside a Docker container. Below are the instructions for setting up the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running the Project Locally](#running-the-project-locally)
- [Running the Project with Docker](#running-the-project-with-docker)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- **npm**: Installed with Node.js
- **Docker**: [Download Docker](https://www.docker.com/get-started) (if you want to run the project in Docker)

---

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**:

   ```bash
   npm
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Install Dependencies**:

   ```bash
   npm
   ```

5. **Open your browser and go to**:
   ```bash
   http://localhost:5173
   ```

## Running the Project with Docker

To run the project using Docker, follow these steps:

1. **Build the Docker Image**:

   ```bash
   docker build -t react-vite-app .
   ```

2. **Run the Docker Container**:

   ```bash
   docker run -p 3000:80 react-vite-app
   ```

3. **Open your browser and go to**
   ```bash
   `http://localhost:3000`
   ```

## Scripts

Here are the available npm scripts:

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run the linter on your code.

### Explanation:

1. **Running Locally**: Includes instructions for cloning, installing dependencies, and starting the development server with `npm run dev`.
2. **Running with Docker**: Steps to build the Docker image and run the container, exposing the app on port `3000`.
3. **Scripts**: Explains the common npm scripts to run, build, and preview the project.
