import { Component } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public logeado:Observable<firebase.User> ;

  constructor(public afAuth:AngularFireAuth,
              private gplus:GooglePlus,
              private platform:Platform) {
                this.logeado = this.afAuth.authState
              }


  googleLogin(){
    if(this.platform.is('cordova')){
      this.nativegooglelogin()
    }else{
      this.webgooglelogin()
    }
  }

  async nativegooglelogin(){
    try{
      const gplusUser = await this.gplus.login({
        'scopes': '', 
        'webClientId':'852806702714-hha82fck69qmatnl5ufm806hknfo7utf.apps.googleusercontent.com',
        'offline': true
      })

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )
    }catch(err){
      console.log(err)
    }
  }

  async webgooglelogin(){
    try{
      const provider = new firebase.auth.GoogleAuthProvider()
      const credential = await this.afAuth.auth.signInWithPopup(provider)
    }catch(err){
      console.log(err)
    }
  }


  signOut(){
    this.afAuth.auth.signOut()
    if(this.platform.is('cordova')){
      this.gplus.logout()
    }
  }

}
