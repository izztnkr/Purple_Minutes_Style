<h1 align ="center"> Project2_Purple_Minutes_Style </h1>

<h2 align="center">Model-View-Controller (MVC)  built with </h2>
<p align="center">
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>  &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"  /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"  /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"/> &nbsp;&nbsp;
    
</p>

  ## Table of Contents

  * [Description](#description)
  * [Preview](#preview)
  * [Technical_Criteria](#technical_criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Demo](#demo)
  * [Contributions](#contributions)
  * [License](#license)

  ## Description
  
This project is, in part, to fulfill the technical requirement of the UT Coding Bootcamp to build a full stack application following the Model-View-Controller architecture. Additionally, it will fulfill the needs of our client, Purple Minutes Style, by providing a database and space to upload, document, sort and keep track of their styling work per production.  Productions refer to projects in the realm of styling characters and clients for short films, tv/web episodes, editorial shoots, and theater. Where the data needing housing are links to published commercials, short films, larger films, photos of behind the scenes, images of wardrobe design plans, and raw film frames of the overall production with their product (the wardrobe styling of characters and clients) being showcased. 

  ## Demo
  
  
  ![Purple-Minutes-Style-Demo (1)](https://user-images.githubusercontent.com/82625726/142786146-b6f3fa69-64bd-4336-94c9-97b401beb590.gif)


   ## Technical_Criteria 
- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

 ## Installation

  Use the following url to clone the repository:

  `git clone https://github.com/izztnkr/Project2_Purple_Minutes_Style`


  `npm install` to install all the production and development dependencies highlighted in `package.json` file.



  ## Usage

  To connect to the MySQL shell, run the following command on your terminal and enter user credentials for MySQL:

  `mysql -u root -p`


  To create the schema from the MySQL shell, then, run:

  `source db/schema.sql`


  To exit mySQL, run: 

  `exit`

  Then, seed the database with the following command:

  `npm run seeds`


  Lastly, initate the server with:

  `npm start`


  To disconnect the server, press <command+C>

 


 
  ## Tests


  Check out the deployed application on 
  [heroku](https://purpleminutesstyle.herokuapp.com/)
 


  ## Contributions

  Built for Purple Minutes Style with love and care by

  :octocat: [Angela Loftus](https://www.github.com/AngelaLoftus) production model, slideshow, back-end routes

  :octocat: [Ben Kaan](https://www.github.com/benkaan001) user model, log in pages
 
  :octocat: [Dakota Donaldson](https://github.com/Dakota3214) handlebars templates and styling, merge conflicts to main, 

  :octocat: [Izzy Ramirez](https://github.com/izztnkr) back-end & front-end routes, client interaction, project management, merge conflicts to main

  :octocat: [Eduardo Ramirez](https://github.com/EduardoRam7) axios implementation, demo gif
  
  
  Contributions are welcome!
  

  ## License

  
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
