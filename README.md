# Hotel Booking and Operations Management System

## Description
This project is a RESTful API built using a NodeJS server application with ExpressJS framework that will handle various CRUD operations and communicate with a MongoDB NoSQL database cluster using Mongoose. It provides endpoints to handle requests for managing hotels, rooms, and users.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sinngam-khaidem/hotel-reservation-system.git
   cd api
   ```

2. Install the dependencies:
   ```bash
   yarn install
   ```

## Usage

1. Start the server
   ```bash
   yarn start
   ```

2. Once the server is running, you can access the API at:
   ```
   http://localhost:8800
   ```

3. Use any API client (such as Postman) to interact with the API by making GET, POST, PUT, or DELETE requests to the defined endpoints.

## Environment Variables

Create a `.env` file in the api directory of the project and add the following variables:

```
MONGO = your-mongodb-database-url
JWT = jwt-secret-or-private-key
```

> Update the values accordingly based on your environment.


