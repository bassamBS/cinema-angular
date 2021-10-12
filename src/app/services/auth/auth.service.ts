import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(username: string, password: string): Promise<void | string> {
    
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if (username === 'Administrateur' && password === 'azerty') {
            this.token.next('authorized');
            res();
          } else {
            rej('La combinaison des identifiants est incorrecte');
          }
        }, 500)
      }
    )
  }

  signOut(): Promise<void> {

    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    )
  }

}
