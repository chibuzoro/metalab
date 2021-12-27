# Github Commit Statistics App
This app provides a graphical representation of commit histories for different repositories on Github

##Setup Guide and Pre-requisites
This project is an SPA located within the client folder and requires Node 16 or higher.
The project requires docker to build and serve the application.

You need to have docker installed for your environment. see https://www.docker.com/get-started

The application will be served using `port 3000`. ensure no other service is listening on that port prior to running the container.
#
Build the image and run the container using docker compose


###For Docker compose v2.
`docker compose up -d --build`
#
###For Docker compose v1.

`docker-compose up -d --build`

###Launch the application
The application can now be accessed on the following url

`http://localhost:3000/`


###Bonus
The application includes a Nodejs application located in the server folder. 
This is simply an api wrapper for playing with the api responses from Github. It is available on `port 5000` and can be reached
`http://localhost:5000/`

###Example query
Search for repos:
`http://localhost:5000/api/v1/search?q=react`

Get commits history:
`http://localhost:5000/api/v1/commit-activity?user=facebook&repo=react`
