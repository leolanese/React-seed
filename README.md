## React-seed

> A react-seed using typescript, jest, prettier, ESlint, react-routers, sass, and bootstrap (based on create-react-app)

### Deployment

```js
git clone https://github.com/leolanese/react-seed.git
cd react-seed npm i
```

### What this React-seed does for you in advanced

1. create-react-app yarn create react-app react-seed cd react-seed 
-- At this point it will work only as a React app skeleton 

2. react-router-dom yarn add react-router-dom 
-- Also including few basic sematic
`<Router>` & `<link />` with <Router>

3. This is intended to cover basic scenarios

```js
yarn add node-sass
```

4. react-bootstrap

```js
yarn add bootstrap
```

5. adding support to TS (.tsx)

```js
yarn add typescript @types/node @types/react @types/react-dom@types/jest
```

6. Removing the pre-set ESLint configuration from React project

```js
// package.json
"eslintConfig": { "extends": "react-app" },
```

7. Install ESLint package

```js
npm install eslint --save-dev
```

8. Setup ESLint

```js
npx eslint --init
```

```js
// adding extra rules to solve typical problem
    "rules": {
          "react/prop-types": 0,
          "react/react-in-jsx-scope": 0,
          "@typescript-eslint/no-empty-function": 0,
          "no-use-before-define": "off",
          "@typescript-eslint/no-use-before-define": [
                "error"
          ]
    }
```

```js
// adding extra extens
      "extends": [
          "eslint:recommended",
          "plugin:import/errors",
          "plugin:react/recommended",
          "plugin:jsx-a11y/recommended",
          "plugin:react-hooks/recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking",
          "airbnb"
    ],
```

9. Prettier

```js
npm install -D prettier
```    
Note: 
To run prettier: `yarn format` or `npm run format`    


```js
// package.json
"format": "prettier --write \"src/**/*.{js,jsx}\""
```

10. A better version of `.gitignore`
This will help out of the box to avoid commit errors

11. Jest
```js
npm install -D jest@26.6.3 @testing-library/react@11.2.5.
````

```js
// .babelrc
{
"presets": [
  ["@babel/preset-react",{
      "runtime": "automatic"}],
  "@babel/preset-env"],
   "plugins": ["@babel/plugin-proposal-class-properties"],
   "env": {
    "test": { "presets": [[
         "@babel/preset-env", {
               "targets": {
               "node": "current"
               }
         }]]} }
   }
   ```

   ```js
   // included to the pacakge.json
   "test": "jest",
   "test:watch": "jest --watch"
   ```


-- At this point we can ue TS in our app, files are renamed as: '.tsx'
-- to run ESlint use: `npx eslint src/*` or `npx eslint <targetFile> --fix` or `npx eslint <targetFile> --quiet`
-- Note: props are `hardly-type` so using `any` type (only for demonstrations proposes)
    
## Jest & react-testing-library (instead of Enzyme)

````

### Now, run the seed !

```js
// at this point a browser will open: http://localhost:3000/
yarn start
```

---

<h4> Thanks </h4>
<h5> { 'Leo Lanese',<br>
       'Building Inspiring Responsive Reactive Solutions',<br>
       'London, UK' }<br>
</h5>
<h5>Twitter:
<a href="http://twitter.com/LeoLaneseltd" target="_blank">twitter.com/LeoLaneseltd</a>
</h5>
<h5>Portfolio
<a href="http://www.leolanese.com" target="_blank">http://www.leolanese.com</a>
</h5>
<h5>DEV.to:
<a href="http://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
</h5>
<h5>Blog:
<a href="http://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
</h5>
<h5>Questions / Suggestion / Recommendation ?
<a href="mail:to">developer@leolanese.com</a>
</h5>
