README.md

# Ionic/Firebase Login Prototype

This is the prototype app for the [Ionic](https://ionicframework.com/) / [Firebase](https://firebase.google.com/) your upcoming project. 

This starter app uses the following:
- Ionic v3.x
- Firebase v5.x
- Angular v5

## How to use this prototype app

Clone a repository using `git clone `

```bash
$ git clone https://github.com/rushint/railapp-login-prototype.git
$ npm install
```
Then install angularfire2 and firebase using Below Command

```bash
$ npm install firebase@4.6.0 --save
$ npm install angularfire2@5.0.0-rc.3 --save

```
Then create and provide your own Firebase credentials in the app.module.ts file
```bash
export const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth.domain",
    databaseURL: "https://database.url.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket.appspot.com",
    messagingSenderId: "123456789098"
};

```

Then run the project

```bash
 $ ionic serve
```
