# OnlineShop_MEAN

Online Shop is a fictitious e-commerce application, that allows a company to sell it's products online.

This application is being built using MEAN stack i.e. MongoDB, ExpressJS, Angular and NodeJS.

# There are two main parts:

1. Client (UI, using Angular)
2. Server (REST APIs, using ExpressJS, NodeJS and MongoDB)

# Steps to set up and run the server:

- Run the commands given below, in cmd shell. May need to be adjusted for other shells like powershell, bash etc.

1. Download and install NodeJS runtime / executable. [https://nodejs.org/]
2. Download and install VS Code or any other code editor of your choice. [https://code.visualstudio.com/]
3. Download and install MongoDB Server, to act as a database management server. [https://www.mongodb.com/download-center/community]
4. To view the MongoDB Database contents, download and install MongoDB Compass. [https://www.mongodb.com/download-center/compass]
5. Get the code locally by executing the given command [git clone https://github.com/sethiharish/OnlineShop_MEAN.git]
6. After cloning the code, navigate to the code\server folder in cmd shell, by executing the given command [cd code\server], adjust the code\server path according to your local set up.
7. Install node packages required to buid and run the server, by executing the given command inside code\server folder. [npm install]
8. Ensure MongoDB server is running and then seed MongoDB Database by executing the given command, to start with some sample data. [SET DEBUG=log:* & npm run seeddb]
9. Run the server i.e. REST APIs, by executing the given command [SET DEBUG=log:* & npm start] or Run app in watch mode [SET DEBUG=log:* & npm run watch]
10. Running the above commands starts the server and the REST APIs are ready to serve the client / UI.
11. To learn more about and test the REST Apis started above, swagger UI is served at url [/api/swagger/]

# In case you need to clean the database and seed it again

1. Purge Data [SET DEBUG=log:* & npm run purgedb]
2. Seed Data [SET DEBUG=log:* & npm run seeddb]

# Environment variables [process.env.variable]

1. PORT = process.env.PORT || 3000
2. DB = process.env.DB || "mongodb://localhost/onlineshop_mean"

It is a work in progress and being improved continously, in case you see any issues, please let me know.
