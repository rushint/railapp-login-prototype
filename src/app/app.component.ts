import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';

@Component({
    template: `<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
    rootPage = FirstRunPage;

    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
        platform.ready().then(() => {
            this.splashScreen.hide();

            this.statusBar.styleDefault();
        });
    }
}
