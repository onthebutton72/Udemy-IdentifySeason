# Udemy Identify Season Project

The application gets your current latitude and month and based on this information displays either a "summer" or "winter" message and icons.

## Table of Contents

* [Contents](#contents)
* [Attribution](#attribution)
* [Instructions](#instructions)
* [Diagram](#diagram)
* [Creator](#creator)

## Contents
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Docker](http://www.docker.com). 

## Attribution
[Modern React with Redux 2019 Update](https://www.udemy.com/react-redux/) by Stephen Grider

## Instructions

Install docker if you don't already have it.<br><br>
Clone the respository.<br>
`git clone https://github.com/onthebutton72/Udemy-IdentifySeason.git`.<br><br>
Change directory to where the project was saved.<br><br>
Pull down the docker container.<br>
`docker pull onthebutton72/identifyseason`<br><br>
Run the docker container.<br>
`docker run -it -v ${PWD}:/usr/src/app -v /sur/src/app/node_modules -p 3000:3000 onthebutton72/identifyseason`<br><br>
If you do not wish to use docker then do as follows:<br>
Clone the repository.<br>
Change directory to where the project was saved.<br>
`npm install`<br>
`npm start`<br><br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Diagram
![Screenshot from 2019-05-16 16-57-44](https://user-images.githubusercontent.com/35273190/57894440-cc530400-77fb-11e9-9635-e54f5e1a7781.png)

## Creator
Jamie Martinez
