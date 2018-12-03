
# WebdriverIO with Cucumber BDD

This project consist of  webdriverIO  with Cucumber BDD framework. It generate Spec and JUNIT reports.This project is also integrated with CI tool Jenkins.

# Installation

This project is tested on Node version 10.9.0.  

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/ 

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version

Above command should print out the version that you have installed.

Take a pull from repository 'wdio-cucumber-BDD'

Open a command prompt and go to folder location and run `npm install` to grab all dependencies.



# Run the project

To execute the entire test suite in local development you need to hit the below command 
`npm run test`

# Spec Reporter

Spec reporter, will print detail report on console.


# Jenkins Installation
If Jenkins is not already set in your machine then follow the below steps

Download `https://jenkins.io/` & Install it in your system.
Once Jenkins it is installed , one can access Jenkins from the link − `http://localhost:8080`
Enter the password(location will be displayed once you hit above url) and install the plugins
Create Admin user and start Jenkins
