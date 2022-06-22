import { Injectable } from '@angular/core';
import { delay, map, observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false
  redirectUrl!: string

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
        //     }))
    // const promise = new Promise(resolve => {
    //   setTimeout( () => {
    //     resolve({

    //   }, 2000)
    // })
    const observable$ = of({
      login: 'admin',
      password: '123'
    }).pipe(delay(2000))

    return observable$.pipe(
      map((res: any) => login === res.login && password === res.password ? this.isLoggedIn = true : false))


    // return promise.then((res: any) => {
    //   return login === res.login && password === res.password ? this.isLoggedIn = true : false
    // })
  }

  logout(): void {
    this.isLoggedIn = false
  }
}
