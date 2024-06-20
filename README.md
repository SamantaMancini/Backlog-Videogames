# Backlog-Videogames MERN Stack:

## Front-end
UI built from scratch with React JS vite, Tailwind CSS and Typescript.

## Back-end
API built from scratch with Node.js and Express.

## :bulb: How it works

The API has a data Schema:
- Games: data of the games
 
Using the correct ENDPOINTS you can Create, Read, Update or Delete (CRUD) what do you
want. For this project where used Node.js (with Express framework) and MongoDB database.
  
## 📚: Libraries

- Express (framework for use Middlewares)
- dotEnv (environment variables)
- express-mongo-sanitize (Data sanitization against NoSQL query injection)
- helmet (Set security HTTP headers)
- xss (Data sanitazation agains XSS)
- hpp (Prevent parameter pollution)
- morgan (Middleware for HTTP requests)
- nodemon

## :floppy_disk: Installation

First of all, you need Node.js installed.
If you don't have it, you can download it here:

[Node.js](https://nodejs.org/en)<br>
After the installation, you're ready to go.

### 1 - Clone the repository
`git clone https://github.com/SamantaMancini/backlog-videogames.git`

### 2 - Install the dependencies

`npm install`

## 3 - MongoDB:

- Go to [MongoDB](https://www.mongodb.com/try/download/community) and click "download msi" and install the server community and optional MongoDB compass GUI.
- Download and install mongosh shell 
- Open mongosh and press "Enter" for open the localhost (localhost:27017/test)

### 4 - Environment variable

Copy the `.env.example file` in the project's root folder and rename it `config.env`, add your string DATABASE (copy and paste the string from mongosh). <br/> Example: <br/>
`PORT=3000`
`DATABASE=mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9`

### 5 - Start it!

- `npm run start` for production
- `npm run dev` for development

### 6 - CRUD

Example CRUD

for get all games:
- GET {{LOCALHOST}}/api/v1/games

for create a game:
- POST {{LOCALHOST}}/api/v1/games

for update a game:
- POST {{LOCALHOST}}/api/v1/games/game:id

for delete a game:
- DELETE {{LOCALHOST}}/api/v1/games/game:id

