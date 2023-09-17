# Furniture Store REST API

Welcome to the Furniture Store SPA and REST API project. Explore the documentation below to understand the inner workings and functionalities of the app.

## 🚀 Getting Started

To run the Furniture Store application, follow these steps:

### Frontend (Furniture Store Website)

1. Open a terminal and navigate to the `Client` folder, where the frontend code is located.

2. Install the required dependencies by running the following command:

    ```bash
    npm install
    ```

3. Start a live server for the frontend, open your web browser and go to http://localhost:5500/ to access the frontend of the application.

### Backend (Node.js & Express REST API)

1. Open a separate terminal and navigate to the root folder of the project, where the backend REST API code is located.

2. Install the required dependencies by running the following command:

    ```bash
    npm install
    ```

3. Start the Node.js REST API server using the following command:

    ```bash
    npm start
    ```

4. The backend server will start and be accessible at http://localhost:3030/.

**Now, you can interact with the Furniture Store app by accessing the frontend in your web browser and making API requests to the backend server.**

## 🌐 Backend API Routes

Here are all of the available API routes for interacting with the backend server:

### Authentication Routes

| Route             | Description     | Method | Headers                       | Parameters / Request Body |
| ----------------- | --------------- | ------ | ----------------------------- | ------------------------- |
| `/users/register` | Register a user | POST   | None                          | JSON: {email, password}   |
| `/users/login`    | Login           | POST   | None                          | JSON: {email, password}   |
| `/users/logout`   | Logout          | GET    | Authentication token required | None                      |

### Data Routes

| Route               | Description    | Method | Headers                       | Parameters / Request Body       |
| ------------------- | -------------- | ------ | ----------------------------- | ------------------------------- |
| `/data/catalog`     | Get items      | GET    | None                          | Optional Query Parameter: where |
| `/data/catalog`     | Create an item | POST   | Authentication token required | JSON: {item data}               |
| `/data/catalog/:id` | Get item by ID | GET    | None                          | None                            |
| `/data/catalog/:id` | Update an item | PUT    | Authentication token required | JSON: {updated item data}       |
| `/data/catalog/:id` | Delete an item | DELETE | Authentication token required | None                            |

## 🛋️ Functionality

The Furniture Store SPA and REST API provide the following key functionality:

### Frontend Structure

-   **Dashboard (Catalog)**: The dashboard page displays a catalog of furniture items retrieved from the backend. Users can browse through the available items, view details, and perform various actions.

-   **Details Page**: The details page allows users to view in-depth information about a specific furniture item, including its description, price, and other details.

-   **Create Page**: Users can access the create page to add new furniture items to the catalog. The frontend interacts with the backend to submit the item data.

-   **Edit Page**: The edit page enables users to modify the details of an existing furniture item. It communicates with the backend to update the item information.

-   **Login and Register Pages**: These pages handle user authentication. Users can register for an account or log in to access protected features.

-   **My Furniture Page**: On the "My Furniture" page, you can easily access and manage furniture items you've added to the catalog. These are your own creations or items you've personally curated.

-   **User-Friendly Frontend**: The frontend SPA offers an intuitive and visually appealing interface for effortlessly browsing, interacting with, and managing furniture products.

### Backend Functionality

-   **User Registration and Authentication**: Users can register and log in securely to access the application's features. Authentication tokens are required for protected routes.

-   **Item Catalog**: The API allows users to browse and interact with a catalog of furniture items. You can retrieve a list of items, create new items, view item details by ID, update item information, and delete items as needed.

-   **Custom Querying**: The API supports custom querying for the item catalog using an optional query parameter. This feature is leveraged on the "My Furniture Page," enhancing the user experience by enabling them to easily access, manage, and view their own furniture items.

---

**Feel free to explore these functionalities by running the application locally and making use of the provided API routes.**
