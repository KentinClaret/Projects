# Wizzcad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

# Objective 

Create a simple Typescript app (React or Angular) consuming the following example API :
http://dev4.wizzcad.com:8081/logins for login. You can specify ?login=UsernameFull&password=full to select a user with its login and password. It will return token to use next.

Use http://dev4.wizzcad.com:8081/{{token}} to list content according to user token

For more infos you can check API details : https://github.com/typicode/json-server#routes

You should be able to login and show contents in a table with the best code structure and features you like.

You can send your code to github for codereview with a readme.md for usage details.

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). 
(This will run tests with Chronium, you can change it on karma.conf.js)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
