# volab
A full stack project using MERN to build a social network that brings music producers and vocalists together to collaborate.

https://volab-app.herokuapp.com/

## Technologies Used
- Javascript
- HTML5
- CSS3
- Bootstrap
- ReactJS
- MongoDB
- ExpressJS
- NodeJS

System Requirements
- Node.js v10
- NPM v6
- MongoDB v4

## Key Features
User can create a profile.
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/SI9Adh7JZ2vRu9BVdJ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/SI9Adh7JZ2vRu9BVdJ"></a></p>

User can add music.
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/w9nvyT9BQdKhs99FWT" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/w9nvyT9BQdKhs99FWT"></a></p>

User can discover other artists.
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/3GBU7TLdOLFxLVi1JL" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/3GBU7TLdOLFxLVi1JL"></a></p>

User can follow other artists.
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/1AfI9i1Wf5ypKCWSvF" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/1AfI9i1Wf5ypKCWSvF"></a></p>

User can send messages via Sendgrid
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/U7vgFvhEXpxPg5Mkb0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/U7vgFvhEXpxPg5Mkb0"></a></p>

## Usage

<!-- ### Create, edit, practice, study and record failed and correct attempts.
![Demo](flash1.gif) -->

Clone the repository.
```
git clone https://github.com/franzsalvador/volab.git
```

Install dependencies.
```
cd volab
npm install
```
Create a .env file in the project root. Example:
```
MONGODB_URI=mongodb://localhost:27017/volab-app
PORT=3000
SENDGRID_API_KEY=your_api_key
```
Automatically run/restart server with `nodemon` and live reload page on update with `browser-sync`
```
npm run watch
```
Run without nodemon and browser-sync
```
npm run build
npm run start
