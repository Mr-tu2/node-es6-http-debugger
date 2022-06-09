# node-es6-http-vscode-debugger

* Run npm i nodemon -g
* Run npm i
* Feel free to set a break point in app.js
* go to localhost:3000 in your browser

## Notes

* package.json has a "start" script which will execute nodemon against app.js, which will auto restart your application on save.
* .vscode/launch.json will execute npm start, which allows you to set break points in your code.
* "type" in package.json has been set to "module" so that you can use ES6 syntax.
