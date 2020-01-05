Search Location Project

  This project is a web page that calls a location service and displays the results it return. Once the user types more than one character, the application starts calling the service to get results. Along with the content that the user types into the checkbox (the keywords), the application also passes the language of the browser in order to retrieve translated results (only English and Greek are supported by the service). Some users can easily type very quickly. As a result, a naive implementation of the application that simply calls the location service at each character may be wasteful of the server resources because some of the results will be irrelevant by the time the response arrives. The application searches only once the user pauses typing even briefly. 
  If a user then clicks on the Click to Search button, the app redirects the user to Google and searches for that text. If the user types text for which the location service does not return any results, the search button is disabled. The page is responsive for tablets and mobiles. Οn mobile devices, the limit of results the location returns is 10, while in desktop and tablet modes are displayed up to 20 results. 

Install Node JS

Refer to https://nodejs.org/en/ to install nodejs
Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

npm install -g create-react-app

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install

In order to run the application Type the following command

npm start

The Application Runs on localhost:3000
