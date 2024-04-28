# Go MySQL CRUD

[![Go Version](https://img.shields.io/badge/Go-1.22-blue.svg)](https://golang.org/)
[![Docker](https://img.shields.io/badge/Docker-Compose-blue.svg)](https://docs.docker.com/compose/)

## Description

This is an example repository demonstrating a basic CRUD in Go using MySQL. MySQL is running in a Docker container using Docker Compose.

![Go Gopher](https://i.ibb.co/JBYV4zF/png-transparent-golang-hd-logo-thumbnail-removebg-preview.png)
![MySQL Docker](https://miro.medium.com/v2/resize:fit:694/1*s3mL6fxwTehd22Rm2AfC1g.png)




## Prerequisites

- Go 1.22 or higher
- Docker
- Docker Compose (for MySQL)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/duarty/gomysqlcrud.git
    ```

2. Navigate to the project directory:

    ```bash
    cd gomysqlcrud
    ```

3. Run MySQL using Docker Compose:

    ```bash
    docker-compose up -d
    ```

4. Run the application:

    ```bash
    go run main.go
    ```

## Contributing

Contributions are welcome! For suggestions, improvements, or fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
