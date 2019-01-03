# Gov Predict Spreadsheets

Simulation application

## Built With

* [React](https://reactjs.org) - JS Library for UI 
* [Redux](https://redux.js.org/) - A state container for JS apps 
* [Sass](http://sass-lang.com) - CSS Style preprocessor
* [Webpack](https://webpack.js.org) - Module bundler 

## Production link - Preview
* https://gov-predict-task.netlify.com/

## Run project

Make sure you have installed

* NodeJS >= 8.10
* NPM
* Yarn - optional

### Dev Mode
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

### Prod Mode
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

### Implemented Features

* Homepage with Spreadsheet Creation 
* Basic Routing
* Column creation with title, type and required check functionalities
* Main spreadsheet rendering
* Rows addition
* Cell validation by column type on blur, keydown events
* Highlight of invalid cell and error message display
* Highlight edited cell

### Main flow
Main Flow
1. Start project on localhost or preview it on production link ( https://gov-predict-task.netlify.com/)
2. Click on “Create a column” button
3. Enter “Title”, “Type” and per desire mark “Required” checkbox
    1. On selecting type select, an additional field will appear for adding the list of values separated by comma to be contained in the select data
    2. On required columns, validation will be triggered on first render
4. On page will be rendered the initial spreadsheet of 2 columns (row index and values column) and 10 rows with empty values
5. To edit column’s title, double click on respective cell from first row of data sheet
6. To add a new column, click “Add column” button
7. In displayed modal, repeat step 3.
8. A new column will be added
9. On repeating steps 6, on modal close no column is added
10. To add next 10 rows, click on “Add 10 rows” button
11. 10 rows with empty values will be populated
12. To add value to a cell, double click it, and type (or copy/cut/paste value)
    1. Validation will be triggered on cell leave - by clicking away from it on any point from page/ to another cell, or by pressing enter/return key 
    2. To trigger validation, enter invalid values to the cell - i.e. string to number specific type, invalid date format other than dd/mm/(19|20)yy, value not matching any of select list values


## Screenshots

![Main page](screenshots/homepage.png?raw=true "Main page")

![New spreadsheet](screenshots/new-spreadsheet.png?raw=true "New spreadsheet")

![New table](screenshots/new-table.png?raw=true "New table")

![Spreadsheet](screenshots/spreadsheet.png?raw=true "Spreadsheet")
