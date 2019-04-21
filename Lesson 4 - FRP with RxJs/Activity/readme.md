# Chat App

## Using the Slack API

1. Register an account on Slack
2. Create a legacy token on [https://api.slack.com/custom-integrations/legacy-tokens](https://api.slack.com/custom-integrations/legacy-tokens)
3. Place it in `constants/api.const.js`

Note: we will use the simplest possible way to connect to the Slack API. On production, you need to follow the OAuth2 way:
1. Register your app here: [https://api.slack.com/apps](https://api.slack.com/apps)
2. Visit [api.slack.com/docs/oauth](api.slack.com/docs/oauth) and follow the directions there.



## Build and Run the

```
npm run build
npm run watch
```

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
