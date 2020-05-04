# OnlineShop_MEAN

Online Shop is a fictitious e-commerce application, that allows a company to sell it's products online. 

This application is being built using MEAN stack i.e. MongoDB, ExpressJS, Angular and NodeJS.

# There are two main parts:

1. Client (UI, using Angular)
2. Server (REST APIs, using ExpressJS, NodeJS and MongoDB)

# Steps to set up and run the server:
1. Download and install VS Code or any other code editor of your choice. [https://code.visualstudio.com/]
2. Download and install MongoDB Server. [https://www.mongodb.com/download-center/community]
3. To view the MongoDB Database contents, download and install MongoDB Compass. [https://www.mongodb.com/download-center/compass]
4. Get the code locally by executing the given command in cmd shell [git clone https://github.com/sethiharish/OnlineShop_MEAN.git]
5. After cloning the code, navigate to the code\server folder in cmd shell by executing the given command [cd code\server], adjust the code\server path according to your local set up.
6. Install node packages required to buid and run the server [npm install], inside code\server folder.
7. Seed MongoDB Database by executing the given command [SET DEBUG=log:* & npm run seeddb]
8. Run the server by executing the given command [SET DEBUG=log:* & npm start] or Run app in watch mode [SET DEBUG=log:* & npm run watch]
7. Running the above commands in cmd shell starts the server and the REST APIs are ready to serve the client / UI.

# In case you need to clean the database and seed it again
1. Purge Data [SET DEBUG=log:* & npm run purgedb]
2. Seed Data [SET DEBUG=log:* & npm run seeddb]

It is a work in progress and being improved continously, in case you see any issues, please let me know.
