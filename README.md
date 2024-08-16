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

---

# API Endpoints

- [Hotel Endpoints](#hotel-endpoints)
  - [Create a Hotel](#create-a-hotel)
  - [Update Hotel by ID](#update-a-hotel)
  - [Delete Hotel by ID](#delete-a-hotel)
  - [Get All Hotels](#get-all-hotels)
  - [Get Hotel by ID](#get-hotel-by-id)
- [Room Endpoints](#room-endpoints)
  - [Create a Room](#create-a-room)
  - [Update Room by ID](#update-a-room)
  - [Delete Room by ID](#delete-a-room)
  - [Get All Rooms](#get-all-rooms)
  - [Get Room by ID](#get-room-by-id)
- [User Endpoints](#user-endpoints)
  - [Update User by ID](#update-a-user)
  - [Delete User by ID](#delete-a-user)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Status Codes](#status-codes)

---

## Hotel Endpoints

### Create a Hotel
**Endpoint:** `/api/hotels`  
**Method:** `POST`  
**Description:** Create a new hotel.  
**Request Body:**
```
{
    name: {
        type: String,
        required: true,
      },
    type: {
        type: String,
        required: true,
      },
    city: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        required: true,
      },
    distance: {
        type: String,
        required: true,
      },
    photos: {
        type: [String],
      },
    title: {
        type: String,
        required: false,
      },
    desc: {
        type: String,
        required: true,
      },
    rating: {
        type: Number,
        min: 0,
        max: 10,
      },
    rooms: {
        type: [String],
      },
    cheapestPrice: {
        type: Number,
        required: true,
      },
    featured: {
        type: Boolean,
        default: false,
    },
}
```

### Get All Hotels
**Endpoint:** `/api/hotels`  
**Method:** `GET`  
**Description:** Retrieve a list of all hotels.

### Get Hotel by ID
**Endpoint:** `/api/hotels/{id}`  
**Method:** `GET`  
**Description:** Retrieve a single hotel by its ID.


### Update a Hotel
**Endpoint:** `/api/hotels/{id}`  
**Method:** `PUT`  
**Description:** Update hotel information.  
**Request Body:**
```json
{
  "name": "string",
  "location": "string",
  "description": "string",
  "rating": "integer",
  "amenities": "array"
}
```

### Delete a Hotel
**Endpoint:** `/api/hotels/{id}`  
**Method:** `DELETE`  
**Description:** Delete a hotel by its ID.

---

## Room Endpoints

### Create a Room
**Endpoint:** `/api/rooms`  
**Method:** `POST`  
**Description:** Create a new room.  
**Request Body:**
```json
{
  "hotel_id": "integer",
  "room_number": "string",
  "type": "string",
  "price": "number",
  "availability": "boolean"
}
```

### Get All Rooms
**Endpoint:** `/api/rooms`  
**Method:** `GET`  
**Description:** Retrieve a list of all rooms.

### Get Room by ID
**Endpoint:** `/api/rooms/{id}`  
**Method:** `GET`  
**Description:** Retrieve a single room by its ID.

### Update a Room
**Endpoint:** `/api/rooms/{id}`  
**Method:** `PUT`  
**Description:** Update room information.  
**Request Body:**
```json
{
  "room_number": "string",
  "type": "string",
  "price": "number",
  "availability": "boolean"
}
```

### Delete a Room
**Endpoint:** `/api/rooms/{id}`  
**Method:** `DELETE`  
**Description:** Delete a room by its ID.

---

## User Endpoints

### Create a User
**Endpoint:** `/api/users`  
**Method:** `POST`  
**Description:** Create a new user.  
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string"
}
```

### Get All Users
**Endpoint:** `/api/users`  
**Method:** `GET`  
**Description:** Retrieve a list of all users.

### Get User by ID
**Endpoint:** `/api/users/{id}`  
**Method:** `GET`  
**Description:** Retrieve a single user by their ID.

### Update a User
**Endpoint:** `/api/users/{id}`  
**Method:** `PUT`  
**Description:** Update user information.  
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "role": "string"
}
```

### Delete a User
**Endpoint:** `/api/users/{id}`  
**Method:** `DELETE`  
**Description:** Delete a user by their ID.

---

## Authentication

Some endpoints may require authentication using tokens (e.g., JWT). Authentication information can be passed in the headers of the request.

Example:
```json
{
  "Authorization": "Bearer {token}"
}
```

---

## Error Handling

All errors will be returned with an appropriate HTTP status code and a descriptive error message.

Example:
```json
{
  "status": 404,
  "message": "Hotel not found"
}
```

---

## Status Codes

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request could not be understood or was missing required parameters.
- `401 Unauthorized`: Authentication failed or user does not have permissions for the desired action.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: An error occurred on the server.

---

This is a basic skeleton. Depending on the complexity of your API, you can extend this further by adding more details about authentication, pagination, filtering, validation, examples of requests and responses, etc.
