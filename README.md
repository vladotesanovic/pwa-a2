# Progressive Web App with Angular 2 ( WIP )

Aligned with https://developers.google.com/web/progressive-web-apps/checklist

# Note

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## 1. Site is served over HTTPS

https://pwa-a2.surge.sh

Surge is services for publishing static assets with https enables:
http://surge.sh/

```bash
npm install surge -g

# go into dist folder
cd ./dist 

# upload file to surge
surge

```

## 2. Pages are responsive on tablets & mobile devices

in .angular.cli.json we are loading: 

```js
"styles": [
    "styles.css",
    "assets/css/max-768px.css",
    "assets/css/min-768px.css",
    "assets/css/portrait.css",
    "assets/css/landscape.css"
],
```

## 3. The start URL (at least) loads while offline

ServiceWorker is registred in sw.js script and enabled in production build.

## 4. Metadata provided for Add to Home screen

Manifest file is created at: scr/assets/manifest.json

## 5. First load fast even on 3G

## 6. Site works cross-browser

## 7. Page transitions don't feel like they block on the network

## 8. Each page has a URL

