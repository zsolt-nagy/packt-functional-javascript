# Chat App

## Steps

```
npm init

npm i babel-core babel-preset-es2015 --save-dev
npm i babelify@8.0.0 --save-dev
npm i browserify watchify --save
```

Add the following configuration to package.json:

```
"scripts": {
  "build": "browserify index.js -o dist/app.js",
  "watch": "watchify index.js -o dist/app.js -v"
},
"browserify": {
  "transform": [
    [
      "babelify",
      {
        "presets": [
          "es2015"
        ]
      }
    ]
  ]
},
```


- Create html and css boilerplate
- Create index.js with some ES6 code, importing jsons from the data folder
