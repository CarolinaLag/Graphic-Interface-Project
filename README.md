# Graphical Interface Design 

_A graphical interface design assignment to follow the graphical guidelines of Folksam and create a campaign page for the summer_

Examples of functionality of the page/design is:

- Animated elements with Javascript
- Create and implement a SVG-image
- Use an image that follows the image manner/language defined in the graphical
  profile
- Implement a web font from a service such as Google
- Follow the graphical guidelines
- Should be "pixel perfect"
- Sort the products by price 
- The page/material should be fast-charged and optimized
- The page/material should be accessibility adapted

---

## Installation
Use following command to install:

```
npm i

```

## Dependencies
- gulp
- gulp-sass
- gulp-cli
- gulp-csso
- gulp-rename
- gulp-minify
- gulp-htmlmin

## How to run
- Clone the repo and start `index.html`
- Run `gulp` in the terminal 

## Naming conventions

### Variables

- Use let or const instead of var
- When naming variables use **camelCase**

* Eg ` let currentColor = 0 `

### Functions

- Function names should use _camelCase_

## Project structure

```
Project root
├── dist/css/js/index.html
├    └── minified html, css and javascript-files
├── public
├    └── image-files and index.html
├── src/css/scss/js
├    └── scss-styling/css-styling and js-files
├── node_modules
│    └── modules
```