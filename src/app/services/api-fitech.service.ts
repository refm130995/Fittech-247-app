import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
const URL  = environment.url


@Injectable({
  providedIn: 'root'
})
export class ApiFitechService {
  token:string
  latidocorazon:any
  examenFuerza = {
    resultado:null,
    ejercicio:null,
    resultado_2:null,
    ejercicio_2:null,
    resultado_3:null,
    ejercicio_3:null
  } 

  bloquearexamen = {
    examen1:false,
    examen2:false,
    examen3:false
  }

  rutina = {}

  constructor(private http:HttpClient) { }
  
  Registrar(persona:any){
    if(persona.password.length > 1) {
      return new Promise( resolve => {
        const data = {
          email : persona.correo,
          password : persona.password,
          password_confirmation:persona.password,
          name : persona.nombre,
          gender : persona.genero,
          age : persona.edad,
          weight : persona.peso,
          stature : persona.estatura,
          objective : persona.objetivo,
          act_physical : persona.nivelActividad,
          training_experience : persona.experiencia,
          training_place : persona.lugarEntrenar,
          hypertension : persona.hipertension,
          hypotension : persona.hipotension,
          lung_diseases : persona.enfermedadPulmonar,
          fading : persona.desvanecimiento,
          diabetes_insulindependent : persona.diabete,
          chest_pains : persona.dolorPecho,
          cardiac_pathologies : persona.patologiaCardiaca,
          unusual_fatigue : persona.fatiga,
          none:persona.noEnfermedad
        }
  
        this.http.post(`${URL}/auth/register`,data)
        .subscribe(resp=>{
            this.token =  resp['access_token']
            console.log(this.token)
            resolve(true)
          },err =>{
            console.log(err)
            resolve(false)
          })
      })
    }else{
      return new Promise( resolve => {
        const data = {
          email : persona.correo,
          password : persona.correo,
          password_confirmation:persona.correo,
          name : persona.nombre,
          gender : persona.genero,
          age : persona.edad,
          weight : persona.peso,
          stature : persona.estatura,
          objective : persona.objetivo,
          act_physical : persona.nivelActividad,
          training_experience : persona.experiencia,
          training_place : persona.lugarEntrenar,
          hypertension : persona.hipertension,
          hypotension : persona.hipotension,
          lung_diseases : persona.enfermedadPulmonar,
          fading : persona.desvanecimiento,
          diabetes_insulindependent : persona.diabete,
          chest_pains : persona.dolorPecho,
          cardiac_pathologies : persona.patologiaCardiaca,
          unusual_fatigue : persona.fatiga,
          none:persona.noEnfermedad
        }
  
        this.http.post(`${URL}/auth/register`,data)
        .subscribe(resp=>{
            this.token =  resp['access_token']
            console.log(this.token)
            resolve(true)
          },err =>{
            console.log(err)
            resolve(false)
          })
      })
    }

  }

  Login(persona:any){
    
      return new Promise( resolve => {
        const data = {
          email : persona.email,
          password : persona.password
        }
  
        this.http.post(`${URL}/auth/login`,data)
        .subscribe(resp=>{
            this.token =  resp['access_token']
            console.log(this.token)
            resolve(true)
          },err =>{
            console.log(err)
            resolve(false)
          })
      })

  }

  Latidos(persona:any){
    return new Promise( resolve => {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type':'application/json',
    })
    
    const data = {
      heart_rate : persona
    }

    this.http.post(`${URL}/auth/heart_rate`,data,{headers})
        .subscribe(resp=>{
          this.latidocorazon = resp['message']
          resolve(true)
        })
    })
  }

  Antecedentefamiliar(persona:any){

    return new Promise( resolve => {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
    })
    
    const data = {
      cardiac_arrhythmia : persona.arritmia_corazon,
      heart_attack : persona.ataque_corazon,
      heart_operation : persona.operacion_corazon,
      congenital_heart_disease : persona.enfermedad_corazon,
      early_death : persona.muerte_prematura,
      high_blood_pressure : persona.presion_corazon,
      diabetes : persona.diabete_corazon,
      none : persona.ninguna,
    }

    this.http.post(`${URL}/auth/family_medical_record`,data,{headers})
        .subscribe(resp=>{
          console.log(resp)
        })
    })
  }

  TestResistencia(valor:any){
    return new Promise( resolve => {

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type':'application/json',
      })
      
      const data = {
        distance : valor
      }
  
      this.http.post(`${URL}/auth/cooper_test`,data,{headers})
          .subscribe(resp=>{
            console.log(resp)
            resolve(true)
          },err=>{
            resolve(false)
          })

      })
  }

  TestFuerza(){

    return new Promise( resolve => {

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type':'application/json',
      })
      
      const data = {
        result_75 : this.examenFuerza.resultado,
        exercise :  this.examenFuerza.ejercicio,
        result_75_2 : this.examenFuerza.resultado_2,
        exercise_2 :  this.examenFuerza.ejercicio_2,
        result_75_3 : this.examenFuerza.resultado_3,
        exercise_3 :  this.examenFuerza.ejercicio_3,
      }
  
      this.http.post(`${URL}/auth/power_test`,data,{headers})
          .subscribe(resp=>{
            console.log(resp)
            resolve(true)
          },err=>{
            resolve(false)
          })
      })

  }

  //Metodo para la recolecion del test - no interactua con el servidor. (metodo logico)
  recolectarTestFuerza(fuerza:any , ejercicio:number){

    if(ejercicio === 1){
      this.examenFuerza.resultado = fuerza
      this.examenFuerza.ejercicio = 1
      this.bloquearexamen.examen1 = true
    }

    if(ejercicio === 2){
      this.examenFuerza.resultado_2 = fuerza
      this.examenFuerza.ejercicio_2 = 5
      this.bloquearexamen.examen2 = true
    }

    if(ejercicio === 3){
      this.examenFuerza.resultado_3 = fuerza
      this.examenFuerza.ejercicio_3 = 2
      this.bloquearexamen.examen3 = true

    }

    if(ejercicio === 4){
      this.examenFuerza.resultado_3 = fuerza
      this.examenFuerza.ejercicio_3 = 3
      this.bloquearexamen.examen3 = true

    }

  }

  obtenerRutina(){

    return new Promise( resolve => {

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type':'application/json',
      })
      
      this.http.get(`${URL}/auth/routine`,{headers})
          .subscribe(resp=>{
            console.log( resp['message'])
            this.rutina = resp['message']
            resolve(true)
          },err=>{
            resolve(false)
          })
      })

  }

}
