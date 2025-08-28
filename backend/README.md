# InvoiceX Backend

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x.x-brightgreen.svg)
![Maven](https://img.shields.io/badge/Maven-4.0.0-red.svg)

A robust backend service for the InvoiceX application, built with Spring Boot. This service handles all business logic, data persistence, and API endpoints for managing invoices, clients, and users.

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

This project serves as the core backend for InvoiceX. It provides a RESTful API for the frontend application to interact with.

Key Features:

- User Authentication & Authorization with JWT.
- CRUD operations for Invoices, Customers, and Products.
- PDF generation for invoices.
- Dashboard analytics.

### Built With

This project is built using the following technologies:

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Security](https://spring.io/projects/spring-security)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Maven](https://maven.apache.org/)
- [MongoDB](https://www.mongodb.org/) (or your chosen database)
- [JUnit 5](https://junit.org/junit5/)
- [Mockito](https://site.mockito.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- JDK 17 or later
- Maven 3.6+
- A running instance of PostgreSQL (or configure for another database).

### Installation

1.  **Clone the repository**
    `sh
git clone https://github.com/ipratiik/InvoiceX.git
`
2.  **Navigate to the backend directory**
    `sh
cd InvoiceX/backend
`
3.  **Install Maven dependencies**
    `sh
mvn clean install
`
4.  **Run the application**
    `sh
mvn spring-boot:run
`
    The application will start on `http://localhost:8080`.

## Configuration

Application settings are located in `src/main/resources/application.properties`. You need to configure your database connection here.

```properties
# PostgreSQL Database Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/invoicex_db
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update

# JWT Secret Key
jwt.secret=your-super-secret-key-that-is-long-and-secure
```

Create a database named `invoicex_db` or update the `spring.datasource.url` to point to your database.

## API Endpoints

The API documentation is available via Swagger UI once the application is running.

- **Swagger UI**: `http://localhost:8080/swagger-ui.html`
- **API Docs (JSON)**: `http://localhost:8080/v3/api-docs`

Here are some example endpoints:

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| `POST` | `/api/auth/register` | Register a new user             |
| `POST` | `/api/auth/login`    | Authenticate a user and get JWT |
| `GET`  | `/api/invoices`      | Get all invoices (Secured)      |
| `POST` | `/api/invoices`      | Create a new invoice (Secured)  |
| `GET`  | `/api/invoices/{id}` | Get a single invoice (Secured)  |

## Running Tests

To run the automated tests for this system, use the following command:

```sh
mvn test
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information.

## Contact

Pratik Kashyap - [@ipratiik](https://twitter.com/ipratiik) - kashyappratik2002@gmail.com

Project Link: [https://github.com/ipratiik/InvoiceX](https://github.com/ipratiik/InvoiceX)
