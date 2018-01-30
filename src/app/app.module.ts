import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LoadingProvider } from '../providers/loading/loading';

// App pages
import { MyApp } from './app.component';
import { ForgetPage } from '../pages/forget/forget';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';

// App components
import { HeaderParallaxComponent } from '../components/header-parallax/header-parallax';

//Angular Firebase Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Facebook
import { Facebook } from '@ionic-native/facebook'

export const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth.domain",
    databaseURL: "https://database.url.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket.appspot.com",
    messagingSenderId: "123456789098"
};

@NgModule({
    declarations: [
        MyApp,
        ForgetPage,
        RegisterPage,
        HomePage,
        HeaderParallaxComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ForgetPage,
        RegisterPage,
        HomePage
    ],
    providers: [
        SplashScreen,
        StatusBar,
        Facebook,
        LoadingProvider,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})

export class AppModule {}
