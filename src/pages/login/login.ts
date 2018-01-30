import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { HomePage } from '../home/home';
import { LoadingProvider } from '../../providers/loading/loading';

import { Facebook } from '@ionic-native/facebook'

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers : [LoadingProvider]
})
export class LoginPage {
	// userData:any;
	authForm: FormGroup;
	email: AbstractControl;
	password: AbstractControl;
    passwordType: string = 'password';
    passEye:string ='eye';

    loginData = { 
        email:'rushint@yahoo.com', 
        password:'12345678' 
    };
  
    constructor(public toastCtrl: ToastController, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public facebook: Facebook, public loadingProvider: LoadingProvider) {
  	    this.authForm = this.fb.group({
            'email' : [null, Validators.compose([Validators.required])],
            'password': [null, Validators.compose([Validators.required])],
        });

        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
    }

    ionViewDidLoad() {
        
    }

    /*------------------
        Class Methods
    --------------------*/
    userLogin(loginData){
        this.loadingProvider.startLoading();

        this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(result => {
                this.loadingProvider.stopLoading();

                this.moveToHome(result);
            }).catch(err => {
                this.loadingProvider.stopLoading();

                this.presentToast(err);
            });
    }

    socialLogin(isLogin) {
        if (isLogin == "facebook") {
            this.loadingProvider.startLoading();

            let provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithRedirect(provider).then(() => {
                this.loadingProvider.startLoading();

                firebase.auth().getRedirectResult().then((result)=>{
console.log('result',result);
                    this.moveToHome(result.user);

                    this.loadingProvider.stopLoading();
                }).catch(function(error){
                    this.loadingProvider.stopLoading();

                    alert(error.message);
console.log('error',error);
                })

                this.loadingProvider.stopLoading();
            }).catch(function(error){
                this.loadingProvider.stopLoading();

                alert(error.message);
console.log('error',error);
            })

            this.loadingProvider.stopLoading();
        } else if (isLogin == "google") {
            this.loadingProvider.startLoading();

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithRedirect(provider).then(() => {
                this.loadingProvider.startLoading();

                firebase.auth().getRedirectResult().then((result)=>{
console.log('result',result);
                    this.loadingProvider.stopLoading();

                    this.moveToHome(result.user);
                }).catch(function(error){
                    this.loadingProvider.stopLoading();

                    alert(error.message);
console.log('error',error);
                })

                this.loadingProvider.stopLoading();
            }).catch(function(error) {
                this.loadingProvider.stopLoading();

                alert(error.message);
console.log('error',error);
            })

            this.loadingProvider.stopLoading();
        }
    }

    // Navigate to Forgot page
    forgetpassword() {
        this.navCtrl.setRoot(ForgetPage);
    }

    // Navigate to Register page
    moveToRegister() {
        this.navCtrl.setRoot(RegisterPage);
    }

    // Move to Home Page
    moveToHome(res){
        this.navCtrl.setRoot(HomePage,{res:res});
    }

    presentToast(err) {
        const toast = this.toastCtrl.create({
            message: err.message,
            duration: 5000,
            position: 'middle'
        });

         toast.present();
    }

    managePassword() {
        if(this.passwordType == 'password'){
            this.passwordType='text';
            this.passEye='eye-off';
        } else {
            this.passwordType='password';
            this.passEye = 'eye';
        }
    }
}
