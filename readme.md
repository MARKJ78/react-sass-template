REACT APP TEMPLATE With SASS

//initialise
npm init

//install react
npm install react react-dom --save

//install BABEL w/ presets
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

//install webpack with dev server
npm install webpack webpack-dev-server --save-dev

//install css / sass loaders
npm install node-sass sass-loader css-loader style-loader --save-dev

//scripts for package json
"start": "npm run build",
"build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234"
