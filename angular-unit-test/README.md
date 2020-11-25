## Angular Training Plan
- Practice Unit test.

### Targets

- Understand Angular basic.
  - Template
  - Directives
  - Components
  - Forms
  - Services
  - HTTP Client
  - Modules
  - Routing and Navigation
- Angular advance
  - RxJS: Library for reactive programming
  - Angular material
  - Unit testing
- Using JSON Server

### Technologies

- HTML5
- CSS3
- ES6
- TypeScript (2.4.2)
- Angular (v5)
- Angular Material (5.0.0)
- RxJs (5.5.6)
- JSON Server

### Editor

- [Visual Studio Code](https://code.visualstudio.com/)


### Directory structure

```
├──angular2-project 
│   ├── e2e
│   ├── src
│   │   ├── app
|   |   |   ├── continent
|   |   |   ├── core
|   |   |   ├── country
|   |   |   ├── shared
|   |   |   ├── app-routing.module.ts
|   |   |   ├── app.component.css
|   |   |   ├── app.component.html
|   |   |   ├── app.component.spec.ts
|   |   |   ├── app.component.ts
|   |   |   ├── app.module.ts
│   │   ├── assets
│   │   ├── environments
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── polyfills.ts
│   │   ├── styles.css
│   │   ├── test.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.spec.json
│   │   ├── typings.d.ts
│   ├── .angular-cli.json
│   ├── .editorconfig
│   ├── .gitignore
│   ├── karma.conf.js
│   ├── package-lock.json
│   ├── package.json
│   ├── protractor.conf.js
│   ├── README.md
│   ├── tsconfig.json
│   ├── tslint.json
├── server
│   ├── db.json
```

### Guideline
- Clone project: `https://gitlab.asoft-python.com/g-vietduong/angular2-training.git`
- Checkout to feature/practice branch: `git checkout feature/practice-unit-test`
- Run server: 
  - `cd server`
  - `json-server --watch db.json`
- Run app (open another tab)
  - `cd angular2-project`
  - `npm install`
  - `npm start` or `ng serve`
- Run test (open another tab)
  - `cd angular2-project`
  - `ng test --code-coverage`
- Go to `http://localhost:3000` to see server
- Go to `http://localhost:4200` to see my app
- Go to `http://localhost:9876` to see testing result

### Author
VietDuong
