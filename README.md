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

### 7 - Postman
Using a service like Postman, you can test the ENDPOINTS in CRUD mode. For convenience, I'm sharing my project at this link. I have already set the localhost variable to port 3000, but you can delete it and set the port to 5000. It works for both development and production modes, but you need download Postman. <br/>
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/32496480-b99fe1f0-da45-437e-9d4b-c8170f72492e?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D32496480-b99fe1f0-da45-437e-9d4b-c8170f72492e%26entityType%3Dcollection%26workspaceId%3D2d4d3248-42c4-48a2-a817-78423c635e51)

### 8 - CRUD

Example CRUD

for get all games:
- GET {{LOCALHOST}}/api/v1/games

for create a game:
- POST {{LOCALHOST}}/api/v1/games

for update a game:
- POST {{LOCALHOST}}/api/v1/games/game:id

for delete a game:
- DELETE {{LOCALHOST}}/api/v1/games/game:id

