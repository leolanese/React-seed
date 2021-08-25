## React-seed
> A react-seed using typescript, routers, SASS and bootstrap (based on create-react-app)

### Deployment

```html
 git clone https://github.com/leolanese/react-seed.git
 cd react-seed
 npm i
```

### What this React-seed does for you in advanced

```html
 1. create-react-app
   yarn create react-app react-seed
   cd react-seed

-- At this point it will work only as a React app skeleton

 2. react-router-dom
   yarn add react-router-dom

-- Also including few basic sematic `<Router>` & `<Link>` with <Router> (+ mocks). This is intended to cover basic scenarios 

 3. node-sass
   yarn add node-sass

-- Renamed .css to .scss

 4. react-bootstrap
   yarn add bootstrap

 5. TS (.tsx)
    yarn add typescript @types/node @types/react @types/react-dom @types/jest

 6. Removing the pre-set ESLint configuration from React project   
  ```js
 // package.json
 "eslintConfig": {
    "extends": "react-app"
  },    
  
  7. Install ESLint package 
  ```js
  npm install eslint --save-dev
  ```

  8. Setup ESLint
  ```js
  npx eslint --init
  ```

  9. Prettier
  ```js
  npm install -D prettier
  ```
  ```js
  // package.json
  "format": "prettier --write \"src/**/*.{js,jsx}\""
  ``` 

  Option selected were:
  ```
      How would you like to use ESLint?
      Select: To check syntax, find problems, and enforce code style

      What type of modules does your project use?
      Select: JavaScript modules (import/export)

      Which framework does your project use?
      Select: React

      Does your project use TypeScript?
      Select: Yes

      Where does your code run?
      Select: Browser

      How would you like to define a style for your project?
      Select: Use a popular style guide

      Which style guide do you want to follow?
      Select: Airbnb: https://github.com/airbnb/javascript

      What format do you want your config file to be in?
      Select: JSON

      Would you like to install them now with npm?
      Select: Yes
  ```
```
  10. A better version of `.gitignore`
  This will help out of the box to avoid commit errors
  
   


-- At this point we can ue TS in our app, files are renamed as .TSX
-- props are `hardly-type` so using `any` type (only for demonstrations proposes) 
-- to run ESlint use: `npx eslint src/*` or `npx eslint <targetFile> --fix`
-- to run prettier: `yarn format` or `npm run format`

```

### run

```html
  yarn start
  // this will open the http://localhost:3000/ ready
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
