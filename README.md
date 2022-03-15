# Vorlesungsplan+ for the DHBW Mosbach

The app is live on: https://dhbw.rickstack.de

The api is live on: https://api.rickstack.de

<br />

# App

The Vorlesungsplan+ app is intended to be an alternative to the official stuv survival/stuv companion app of the DHBW
Mosbach. In contrast to the official app, this app offers a cross-platform unified look and feel. This app is a PWA (
Progressive Web App) that allows you to "install" the app to your native device. Alternatively this app is also
available as android app. The APK can be downloaded on https://dhbw.rickstack.de/installation.

## Features

1. Show all lectures for selected course at the DHBW Mosbach
2. Show upcoming events
3. Create and manage tasks that you need to do for your lectures
4. Cross-platform

## Technologies

Vorlesungsplan+ is built with Angular (JavaScript Framework), Ionic Framework and Capacitor (tool for using native
features on web applications & wraps web app into native android and ios app).

<br />

# API

The Vorlesungsplan+ API is an Open Source Node.js API to request courses, lectures, events and more for the DHBW
Mosbach. This API is not an official API, but it uses the official StuV API for its data. You can use
this API in your own projects without annoying CORS errors.

For available endpoints and documentation, see https://api.rickstack.de/docs.

## Features

1. Request courses, lectures and event at the DHBW Mosbach.
2. Caching layer that speeds up API calls up to 4 times in comparison to the official StuV API.
3. Open Source

## Technologies

Vorlesungsplan+ API is build with Node.js, express and TypeScript.

<br />

# Contribution

If you want to contribute to this app you can create a pull request, contact me on Discord
or [email me](mailto:dev@lars-rickert.de).
