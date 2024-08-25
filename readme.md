
# Campers Shop E-commerce Backend 

##  Introduction
This is the backend for a Campers Shop E-commerce. It handles CRUD operations for create product, update products, delete product and order place. The project is built with Node.js, Express.js, TypeScript, and MongoDB.

## 🔗 Live URL

[Car Rental Reservation System](https://assignment-4-l2-server.vercel.app)


## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

 **Clone the repository**

   ```sh
   git clone https://github.com/tansim12/Assignment-4-L2-Server.git

   cd Car-Rental-Reservation-System-Backend
  
```
📦 Install Dependencies

---
```bash

$ npm install

```
# ⚙️ Configure Environment Variables
## Create a `.env` file in the root of the project and add the following environment variables:

```bash

NODE_ENV="development"
DB_NAME= your DB name
PORT=5000
USER= your user name
PASS= your password
BCRYPT_NUMBER= number
SECRET_ACCESS_TOKEN= your access token
SECRET_REFRESH_TOKEN= your refresh token
SECRET_ACCESS_TOKEN_TIME=10d
SECRET_REFRESH_TOKEN_TIME=365d


```
# Running the app

```TYPESCRIPT
# watch mode
$ npm run start


```
The server should be running on http://localhost:5000.


<!-- . -->


## Ensure the code adheres to a consistent style by running:

```TYPESCRIPT
npm run lint
```
# LINTING FIX
## Fix the code by running:
```TYPESCRIPT
npm run lint:fix

```