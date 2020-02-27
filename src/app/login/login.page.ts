import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { NavController } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';
//google
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
//facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public logeado:Observable<firebase.User> ;
  googleData = null
  facebookData = null


  login = {
    email:null,
    password:null
  }

  constructor(private ApiService:ApiFitechService,
              private ruta: NavController,
              private mensajeservice:MensajesService,
              public afAuth:AngularFireAuth,
              private gplus:GooglePlus,
              public fb: Facebook,
              private platform:Platform) { 
                this.logeado = this.afAuth.authState
              }

  ngOnInit() {
  }

  acceder(){
    this.dashboard(this.login)
  }

  googleLogin(){
    if(this.platform.is('cordova')){
      this.nativegooglelogin()
    }
  }

  async nativegooglelogin(){
    try{
      const gplusUser = await this.gplus.login({
        'scopes': '', 
        'webClientId':'852806702714-hha82fck69qmatnl5ufm806hknfo7utf.apps.googleusercontent.com',
        'offline': true
      })

        await this.afAuth.auth.signInWithCredential(
        await firebase.auth.GoogleAuthProvider.credential(gplusUser)
      ).then(response=>{
        this.googleData = {email:response.user.email} 
        this.dashboard(this.googleData)
      })
        //aqui

    }catch(err){
      console.log(err)
    }
  }

  facebookLogin(){
   
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) =>{
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', []).then(profile=>{
        this.facebookData = {email:profile['email']}
        this.dashboard(this.facebookData)
      })
    })
  
  }

  async dashboard(valor){
    const valido = await this.ApiService.Login(valor)
    if(valido){
      this.ruta.navigateRoot(['/dashboard'])
    }else{
      this.mensajeservice.alertaInformatica('Usuario no existe')
    }
  }


}
