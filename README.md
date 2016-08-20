# Asuran
Tool for creating JSON files for felix

## Intall
To install run ```npm install```

## Build Options
There are two build options

### build - For production
To build for production run ```npm run build ```
* Sets NODE_ENV to production
* No logging
* Sets WEBPACK_ENV to production
* Sets react to production

### Dev - For development
To build for development run ```npm run dev ```
* Sets WEBPACK_ENV to dev
* Sets react to development

## Run
To run the server ```npm start``` The server will listen on port 3000

## About
This tool enables easy editing and creation of JSON used to define the home page sections on the Siteloft template Felix. The font end uses React which
is bundled with WebPack and served by a koa.js sever.

## Why
The aim of this project was to apply what I had recently learned about javascript and react to a project that would solve a problem.
The problem being on the Siteloft template Felix the highly customisable sections on the home page are defined by JSON, this can be
hard to edit for some people and is time consuming. This tool will help create and modify the JSON used to define the felix sections.
