# Forms: Manual Tests


## 1. dependencies should install without errors

`npm install; npm update`


## 2. automated tests should complete without errors

`npm test`


## 3. automated tests should complete in Google Chrome

- start a static-file web server, e.g. [`http-server`](https://www.npmjs.com/package/http-server)

- open every test/\*/index.html file in Chrome via http://localhost:8080/

- if you open too much at once, you may need to refresh to get a 100% pass


## 4. double-check reported BIC and Forms versions

- start a static-file web server, e.g. [`http-server`](https://www.npmjs.com/package/http-server)

- open a test/\*/index.html file in Chrome via http://localhost:8080/

- run `window.BMP.Forms.version` in JavaScript Console and confirm output

- double-check [package.json](../package.json) has correct "version"
