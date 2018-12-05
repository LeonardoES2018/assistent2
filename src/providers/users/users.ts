import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_URL = 'http://192.168.101.160:8001/api';

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

 /* createAccount(email: string, password: string, type: string, name:string) {
    return new Promise(resolve => {
      var data = {
        name: name,
        email: email,
        password: password,
        type: type
      };
 
      this.http.post(this.API_URL + '/registro', JSON.stringify(data))
        .subscribe(result => {
          resolve(result);
        },
        (error) => {
          console.log(error);
        });
    });
  } */

  createAccount(nome:string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome
      };
 
      this.http.post(this.API_URL + '/marcas', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error);
        });
    });
  }

  /*createAccount(nome:string) {
    return new Promise(resolve => {
      var data = {
        nome: nome,
      };
 
      this.http.post(this.API_URL + '/marcas', JSON.stringify(data))
        .subscribe(result => {
          resolve(result);
        }, (error) => {
          console.log(error);
        });
    });
  }*/

  /*login(email: string, password: string, type: string, name:string) {
    return new Promise((resolve, reject) => {
      var data = {
        name: name,
        email: email,
        password: password,
        type: type
      };

      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }*/


}
