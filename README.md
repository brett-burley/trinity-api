1. npm init
  - create a package.json file


2. package.json file
  this file holds various metadata relevant to the project
  This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.


3. add development and production environments
  in package.json on the property 'scripts' add:
    "dev": "NODE_ENV=development nodemon app.js",
    "start": "NODE_ENV=production node app.js"


4. install modules
  a. express
    Fast, unopinionated, minimalist web framework for node.
  b. cors
    Cross-Origin Resource Sharing (CORS) is an HTTP header based mechanism that allows a server 
    to indicate any origins (domain, scheme, or port) other than its own from which a browser 
    should permit loading resources. CORS also relies on a mechanism by which browsers make a 
    "preflight" request to the server hosting the cross-origin resource, in order to check that 
    the server will permit the actual request. In that preflight, the browser sends headers that 
    indicate the HTTP method and headers that will be used in the actual request.
  c. morgan
    Logger middleware
  d. cookie-parser
    cookie middleware


5. create new entry point file (app.js)


