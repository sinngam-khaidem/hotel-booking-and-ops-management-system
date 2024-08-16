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
  - [Register New User](#register-new-user)
  - [User Login](#user-login)
  - [Update User by ID](#update-a-user)
  - [Delete User by ID](#delete-a-user)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Status Codes](#status-codes)

---

## Hotel Endpoints

**Hotel Schema:**
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
### Create a Hotel
**Endpoint:** `/api/hotels`  
**Method:** `POST`  
**Description:** Create a new hotel. Admin access required. 
**Request Body:**
```json
{
    "name": "string",
    "type": "string",
    "city": "string",
    "address": "string",
    "distance": "string",
    "desc": "string",
    "cheapestPrice": "number"
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


### Update Hotel by ID
**Endpoint:** `/api/hotels/{id}`  
**Method:** `PUT`  
**Description:** Update hotel information by ID. Admin access required.  
**Request Body:**
```json
{
  "name": "string",
  "address": "string",
  "desc": "string",
}
```

### Delete Hotel by ID
**Endpoint:** `/api/hotels/{id}`  
**Method:** `DELETE`  
**Description:** Delete a hotel by its ID.

---

## Room Endpoints

**Room Schema:**
```
{
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  }
```

### Create a Room
**Endpoint:** `/api/rooms/{hotelid}`  
**Method:** `POST`  
**Description:** Create a new room by specifying hotel ID. Admin access required.  
**Request Body:**
```json
{
  "title": "string",
  "price": "number",
  "maxPeople": "number",
  "desc": "string"
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
**Description:** Update room information by ID. Admin access required.  
**Request Body:**
```json
{
  "price": "number"
}
```

### Delete Room by ID
**Endpoint:** `/api/rooms/{id}/{hotelid}`  
**Method:** `DELETE`  
**Description:** Delete a room by specifying room ID and hotel ID. Admin access required.  

---

## User Endpoints

**User Schema:**
```
{
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: false,
    },
    img: {
        type: String,
    },
    city: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}
```

### Register New User
**Endpoint:** `/api/auth/register`  
**Method:** `POST`  
**Description:** Register new users.
**Request Body:**
```json
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```

### User Login
**Endpoint:** `/api/auth/login`  
**Method:** `POST`  
**Description:** User login by providing username and password.
**Request Body:**
```json
{
    "username": "string",
    "password": "string"
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

### Update User by ID
**Endpoint:** `/api/users/{id}`  
**Method:** `PUT`  
**Description:** Update user information by ID. Admin access required.  
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
**Description:** Delete a user by their ID. Admin access required.  

---

## Authentication

Some endpoints may require authentication using tokens (e.g., JWT). Authentication information can be passed in the headers of the request.

Example:
```json
{
  "access_token": "Bearer {token}"
}
```

---

## Error Handling

All errors will be returned with an appropriate HTTP status code and a descriptive error message.

Example:
```json
{
  "status": 500,
  "message": "Something went wrong"
}
```

---

## Status Codes

- `200`: The request was successful.
- `401`: You are not authenticated. 
- `403`: You are not authorised.
- `500`: Something went wrong.

---

