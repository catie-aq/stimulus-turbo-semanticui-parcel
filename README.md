# Stimulus Turbo Parcel

Project stack for front-end web application.
It was created for a Sinatra application. The compilation is done with Parcel that 
is much easier to use and configure than Webpack.

The initial use was for a Sinatra application. A good feature of Parcel is the 
possiblity to build to the same file for development and production which 
makes it easy to manage with Sinatra. 

## Javascript Libraries 

This setup uses the same libraries used in Peac²h without any rails dependencies.

### Parcel 

Parcel is an app builder for Javascript: https://parceljs.org/ . 
This application builds a single JS file: `index.js`. 

### Stimulus 

Stimulus is a JS framework that is called from HTML. It is really 
interesting with web servers that render HTML like Rails or Sinatra.

Similar framework: [AlpineJS](https://alpinejs.dev/). 

### Turbo 

Turbo is the new project that was previously TurboLinks. 
It enables the creation of single page applications without much Javascript. 
Turbo Frames enable easy update of part of a page inspired from old school iframes. 

Turbo Streams are the messages that update part of the page, adding, removing or replacing elements to or from a dom element. 

# Guide 

You can change the `start` and `build` behaviour in the [package.json](package.json).

Follow the parcel documentation: https://parceljs.org/getting_started.html

## Installation

`yarn install` 

## Development 

`yarn start` 

## Building 

`yarn build`
