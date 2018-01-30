import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';
// import { LoadingProvider } from '../../providers/loading/loading';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

  lastImage: string = null;
  cropImagePath:any;

	regData = { name: '', mail: '', pass: '', cnfpass: '' };
	authForm : FormGroup;
	username: AbstractControl;
	email: AbstractControl;
	password: AbstractControl;
  cnfpass: AbstractControl;
  passwordtype:string='password';
  cnfpasswordtype:string='password';
  cnfpasseye:string='eye';
  passeye:string ='eye';
  constructor(public platform: Platform, public toastCtrl: ToastController, public afAuth: AngularFireAuth, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams){
  	this.authForm = this.fb.group({
          'username' : [null, Validators.compose([Validators.required])],
          'email': [null, Validators.compose([Validators.required])],
          'password': [null, Validators.compose([Validators.required])],
          'cnfpass': [null, Validators.compose([Validators.required])]
      });

        this.username = this.authForm.controls['username'];
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        this.cnfpass = this.authForm.controls['cnfpass'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister(regData){
  	if(regData.pass == regData.cnfpass){
      // this.loadingProvider.startLoading();
        this.afAuth.auth.createUserWithEmailAndPassword(regData.mail,regData.pass)
        .then(result => {
          // this.loadingProvider.stopLoading();
          this.presentToast('Ragister Successfully..!')
            this.navCtrl.setRoot(LoginPage);
        }).catch(err => {
          // this.loadingProvider.stopLoading();
            console.log('err',err);
            this.presentToast(err);
      });
    }else {
        this.presentToast('Both password are not matched!')
    }
  }

  moveToLogin(){
  	this.navCtrl.setRoot(LoginPage);
  }

  private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
  }

  public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
   }
  }
  managePassword() {
    if(this.passwordtype == 'password'){
      this.passwordtype='text';
      this.passeye='eye-off';
    }else{
      this.passwordtype='password';
      this.passeye = 'eye';
    }
  }
  managecnfPassword() {
    if(this.cnfpasswordtype == 'password'){
      this.cnfpasswordtype='text';
      this.cnfpasseye='eye-off';
    }else{
      this.cnfpasswordtype='password';
      this.cnfpasseye = 'eye';
    }
  }

}
