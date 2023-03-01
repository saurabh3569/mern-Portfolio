# mern-Portfolio  
This is a web application built with the MERN stack, which stands for MongoDB, Express, React, and Node.js. It allows users to view information about the site's owner, send messages through a contact form, view and interact with projects, and register and log in to the site.

## Live link
https://dark-pink-katydid-wear.cyclic.app/

## Features

+ View portfolio of projects
+ Send messages to website owner
+ Admin authentication for adding, editing, and deleting projects and updating the "About Me" section
+ JWT based authentication

## Prerequisites
Before running the application, you will need to have the following installed:

+ Node.js
+ MongoDB

## Installation

+ Clone the repository: <br />
git clone https://github.com/saurabh3569/mern-Portfolio

+ Install dependencies in both the root directory and the client directory:
  - cd mern-Portfolio
    - npm install
  - cd client
    - npm frontend

+ Create a .env file in the root directory and add the following environment variables: <br />
MONGO_URI=<your-mongodb-uri> <br />
JWT_SECRET=<your-jwt-secret>


+ Start the application:
npm run dev

### This will start both the server and the client.

## Technologies Used
+ MongoDB
+ Express
+ React
+ Node.js
+ Bootstrap
+ Axios
+ JSON Web Token (JWT) for authentication

