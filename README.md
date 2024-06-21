# Next.js Gym Application Docker Setup

This repository contains a Docker setup for a Next.js application using Docker Compose. It sets up both the Next.js application and an Nginx reverse proxy.

## Prerequisites

- Docker
- Docker Compose

## Docker Compose Setup

### `docker-compose.yml` Explanation

The `docker-compose.yml` file defines two services:

1. **nextjs-gym-container**:
   - **container_name**: The name of the container.
   - **build**: Builds the Docker image from the current directory.
   - **ports**: Maps port 3000 on the host to port 3000 in the container.
   - **environment**: Sets the environment variable `NODE_ENV` to `production`.
   - **restart**: Always restarts the container if it stops.
2. **nginx**:
   - **container_name**: The name of the container.
   - **image**: Uses the latest Nginx image from Docker Hub.
   - **ports**: Maps port 80 on the host to port 80 in the container.
   - **volumes**: Mounts the custom Nginx configuration file.
   - **depends_on**: Ensures the Next.js container starts before Nginx.
   - **restart**: Always restarts the container if it stops.

### `docker-compose.yml` File

### Building and Running the Containers

### Build the Docker Images

### To build the Docker images, run the following command in the root of the repository:

```bash
docker-compose build
```

### Stopping the Containers

To stop the containers, use the following command:

```bash
docker-compose up -d
```
