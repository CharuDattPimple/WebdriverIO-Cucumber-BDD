
# WebdriverIO with Cucumber BDD

This project consist of  webdriverIO  with Cucumber BDD framework. It generate Spec reports.This project is also integrated with CI tool Jenkins.

# Installation

This project is tested on Node version 10.9.0.  

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/ 

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version

Above command should print out the version that you have installed.

Take a pull from repository 'WebdriverIO-Cucumber-BDD'

Open a command prompt and go to folder location and run `npm install` to grab all dependencies.



# Run the project

To execute the entire test suite in local development you need to hit the below command 
`npm run test`

# Spec Reporter

Spec reporter, will print detail report on console.


# Jenkins Integration

hit the below url 
`http://jenkins.autodevops.ga:8080/`

and enter below creadntials ;
username :jenkins
password :Admin1431

Click on open Blue Ocean and You can seet a pipeline with name `OpenWeatherMap`.
click on Run Button and there you can see the integration with CI pipelines with two stages install and test.
