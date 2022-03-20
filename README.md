# Vorlesungsplan+ for DHBW Mosbach and Bad Mergentheim

The app is live on: https://vorlesungsplan.lars-rickert.de

The API is live on: https://api.vorlesungsplan.lars-rickert.de

<br />

# App

The Vorlesungsplan+ app is intended to be an alternative to the official stuv survival/stuv companion app of the DHBW
Mosbach and Bad Mergentheim. In contrast to the official app, this app offers a cross-platform unified look and feel. This app is a PWA (
Progressive Web App) that allows you to "install" the app to your native device. Alternatively this app is also
available as android app. The APK can be downloaded on https://vorlesungsplan.lars-rickert.de/apps.

## Features

1. Show all lectures for selected course at the DHBW Mosbach and Bad Mergentheim
2. Show upcoming events
3. Cross-platform
4. Offline support
5. Multilinguale (German and English)
6. Notifications before lectures start

## Technologies

Vorlesungsplan+ is built with [Vue.js](https://vuejs.org/), the [Ionic Framework](https://ionicframework.com/docs/) and [TypeScript](https://www.typescriptlang.org/).

<br />

# API

The Vorlesungsplan+ API is an Open Source Node.js API to request courses, lectures, events and more for the DHBW
Mosbach and Bad Mergentheim. This API is not an official API, but it uses the official StuV API for its data. You can use
this API in your own projects without annoying CORS errors.

For available endpoints and documentation, see https://api.vorlesungsplan.lars-rickert.de/docs.

## Features

1. Request courses, lectures and event at the DHBW Mosbach and Bad Mergentheim.
2. Caching layer that speeds up API calls up to 4 times in comparison to the official StuV API.

## Technologies

Vorlesungsplan+ API is build with [Node.js](https://nodejs.org/), [express](http://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/).

<br />

# Contribution

If you want to contribute to this app and API you can fork, create a pull request, contact me on Discord
or [email me](mailto:dev@lars-rickert.de).
