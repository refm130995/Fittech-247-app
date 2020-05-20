import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiFitechService } from './api-fitech.service';
import { environment } from 'src/environments/environment';
const URL  = environment.url

@Injectable({
  providedIn: 'root'
})
export class NutricionService {

  constructor(private http: HttpClient, private service: ApiFitechService) { }

  grease(valor){
    return new Promise( async (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.service.cargarToken(),
        'Content-Type':'application/json',
      })
      const data = {
        grease : valor
      }      
      this.http.post(`${URL}/auth/grease_record`,data,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }

  updateTypeFood(valor){
    return new Promise( async (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.service.cargarToken(),
        'Content-Type':'application/json',
      })

      const data = {
        feeding_type : valor
      }  

      //      this.http.get(`${URL}/auth/routine`,{headers})
      
      this.http.post(`${URL}/auth/update-type-food`, data, {headers})
          .subscribe(resp=>{
            console.log(resp)
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }

  foodNoDeseados(){
    return new Promise( (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.service.cargarToken(),
        'Content-Type':'application/json',
      })

      //      this.http.get(`${URL}/auth/routine`,{headers})
      
      this.http.get(`${URL}/auth/routine`,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }

  getFoods(){
    return new Promise( async (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.service.cargarToken(),
        'Content-Type':'application/json',
      })  
      this.http.post(`${URL}/auth/foods`,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })
  }

  cal_tmb(){
    return new Promise( (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.service.cargarToken(),
        'Content-Type':'application/json',
      })

      //      this.http.get(`${URL}/auth/routine`,{headers})
      
      this.http.get(`${URL}/auth/routine`,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }

  menu(){
    return new Promise( (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.service.cargarToken(),
        'Content-Type':'application/json',
      })

      //      this.http.get(`${URL}/auth/routine`,{headers})
      
      this.http.get(`${URL}/auth/routine`,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }

  storemenu(){
    return new Promise( (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.service.cargarToken(),
        'Content-Type':'application/json',
      })

      //      this.http.get(`${URL}/auth/routine`,{headers})
      
      this.http.get(`${URL}/auth/routine`,{headers})
          .subscribe(resp=>{
          
            resolve(true)
          },err=>{
            reject(false)
          })
      })

  }
}
