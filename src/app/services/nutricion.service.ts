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
    return new Promise( (resolve, reject)  => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTY3MDZkZjY3NGNiODdkMjkzNDU4ZjVmZWU5N2YzYTg0ZTVmYWVhNmZiYmI5YjQzMTVmOTQyYTc4NGQ3YWM2ZGY1MTRiMThlYTE1M2QxNzYiLCJpYXQiOjE1ODk5OTQxNzAsIm5iZiI6MTU4OTk5NDE3MCwiZXhwIjoxNjIxNTMwMTcwLCJzdWIiOiIyNCIsInNjb3BlcyI6W119.trbx79f5TsF4uSY3O78wTN_LCyk93EV2g9NyGyATZ41VDX6Pv38LI5p2nKaTGIRjmQ2-ODV_lh74XFdR1aznv5qvLDkmTVTRcvNwoN8UPi7QM5Zjf_23xfrjJnnxxNCvSRLwjHi0f8fm1yZ_NZUPnaExKwsyNoJpzvoQGpaPtsPLev9JyKUBiFogB3--sKxcWTNKo9RXrrmZyqvDthSnu3KslwEDFB6vAljPXUdSyQhU5xlKPBNGrQzSaXQgGwR5oLBAnTndUEs0O0Yf31ACTtt3LCzeAi7rxmlDEKqr-hDgln8-r3ks99g-g_7pLrW0e_-nljGPpuwMUanRPLCUqaMuUHqPw6D9urfqhJd0cDMYoLPol8YvrkIVADzYUo4p7KXIA7Kg0GASOfRfaYeQL00GVsbKrQuCW682MQRtL4tjG0CP56INMr8rinDZLFdstMGWAaSKum6sdw45zH3LaqGSB3LuroF1ChbWINV9wQ9tCBaCoWQMiSD1EkZIinmhMQk7QExVid6eEX80U-KAAvqOxnVoERZ-FWl--WOgWpDpFAbwmLQUw7VAWgbDX4k7QygpOjbOZxs8ggKhBKcYr0F8dOHcaBfUt7OvSZeSMKiDwb0kZQ_r78dEhNjdnDozAhs4ihzexBB6vs7dglNw06ghvfRIwlGQwkSQzo-OUqs',
        'Content-Type':'application/json',
      })
      this.http.post('http://fittech247.com/fittech/api/auth/foods',{headers})
          .subscribe(resp=>{
            console.log(resp)
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
