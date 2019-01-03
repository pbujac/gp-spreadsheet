# Gov Predict Spreadsheets

Simulation application

## Built With

* [React](https://reactjs.org) - JS Library for UI 
* [Redux](https://redux.js.org/) - A state container for JS apps 
* [Sass](http://sass-lang.com) - CSS Style preprocessor
* [Webpack](https://webpack.js.org) - Module bundler 

## Run project

Make sure you have installed

* NodeJS >= 8.10
* NPM
* Yarn - optional

###Dev Mode
Open project and run in terminal:

- Default PORT used - 9000;
- Access website on http://localhost:9000
- Install command:
```
npm install
npm run start
```
or

```
yarn install
yarn start
```

- Note: Port can be changed on webpack.config.babel.js file. Please find below more information how to change it:
 
```
devConfig: {
    devServer: {
        port: CUSTOM_PORT
    }
}
```

###Prod Mode
Open project and run in terminal:

```
npm install
npm run build
```
or
```
yarn install
yarn build
```

###Implemented Features

* Homepage with Spreadsheet Creation 
* Basic Routing
* Column creation with title, type and required check functionalities
* Main spreadsheet rendering
* Rows addition
* Cell validation by column type on blur, keydown events
* Highlight of invalid cell and error message display
* Highlight edited cell

##Screenshots

![Main page](screenshots/homepage.png?raw=true "Main page")

![New spreadsheet](screenshots/new-spreadsheet.png?raw=true "New spreadsheet")

![New table](screenshots/new-table.png?raw=true "New table")

![Spreadsheet](screenshots/spreadsheet.png?raw=true "Spreadsheet")
