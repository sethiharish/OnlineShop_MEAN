# Online Shop (MEAN)

Online Shop is a fictitious e-commerce application, that allows a company to sell it's products online.

This application is being built using MEAN stack i.e. MongoDB, ExpressJS, Angular and NodeJS.

## There are two main parts:

1. Client (UI, using Angular)
2. Server (REST APIs, using ExpressJS, NodeJS and MongoDB)

## Steps to set up and run the server:

- Run the commands given below, in cmd shell. May need to be adjusted for other shells like powershell, bash etc.

1. Download and install [NodeJS runtime / executable](https://nodejs.org/).

2. Download and install [VS Code](https://code.visualstudio.com/) or any other code editor of your choice.

3. Download and install [MongoDB Server](https://www.mongodb.com/download-center/community) to act as a database management server.

4. To view the MongoDB Database contents, download and install [MongoDB Compass](https://www.mongodb.com/download-center/compass).

5. Get the code locally by executing the given command `git clone https://github.com/sethiharish/OnlineShop_MEAN.git`.

6. After cloning the code, navigate to the `code\server` folder in cmd shell, by executing the given command `cd code\server`, adjust the `code\server` path according to your local set up.

7. Install node packages, which are required to buid and run the server, by executing the given command `npm install` inside `code\server` folder.

8. Ensure MongoDB server is running and to start with some sample data, seed MongoDB Database by executing the given command `SET DEBUG=log:* & npm run seeddb`.

9. Run the server i.e. REST APIs, by executing the given command `SET DEBUG=log:* & npm start` or Run app in watch mode `SET DEBUG=log:* & npm run watch`.

10. Running the above commands starts the server and the REST APIs are ready to serve the client / UI.

11. To learn more about and test the REST Apis started above, go to [Swagger UI](http://localhost:3000/api/swagger/), if default port is not changed.

## In case you need to clean the database and seed it again

1. Purge Data `SET DEBUG=log:* & npm run purgedb`.
2. Seed Data `SET DEBUG=log:* & npm run seeddb`.

## Environment variables [process.env.variable]

1. PORT = `process.env.PORT || 3000`
2. DB = `process.env.DB || "mongodb://localhost/onlineshop_mean`

## Steps to set up and run the client:

- Run the commands given below, in cmd shell. May need to be adjusted for other shells like powershell, bash etc.

1. Download and install Angular CLI, by executing the command `npm install -g @angular/cli@8` or if already installed update to `angular 8`, by executing the command `npm update -g @angular/cli@8` or uninstall it first, by executing the command `npm uninstall -g @angular/cli` and then install it, by executing the command `npm install -g @angular/cli@8`.

2. Navigate to the `code\client` folder in cmd shell, by executing the given command `cd code\client`, adjust the `code\client` path according to your local set up.

3. Install node packages, which are required to buid and run the client, by executing the given command `npm install` inside `code\client` folder.

4. Run the client i.e. Angular UI, by executing the given command `npm start` and not `ng serve` directly. The command `npm start` includes the `ng serve` plus more i.e. `ng serve --proxy-config proxy.conf.json -o`. Proxy configuration settings avoid CORS errors, as the client & server are running on different ports and "-o" opens the application in default browser.

5. Running the above commands starts the client and hits the REST APIs to render the Home Page.

6. To learn more about and test the REST Apis started above, go to [Swagger UI](http://localhost:4200/api/swagger/). Due to the proxy set up in place, the requests to `http://localhost:4200/api/` are transfered internally to `http://localhost:3000/api/` only i.e. ExpressJS backend server, if default port is not changed.

It is a work in progress and being improved continously, in case you see any issues, please let me know.
