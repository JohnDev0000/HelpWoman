import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import User = firebase.User;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;


  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  getUser(): User | null {
    return this.user;
  }

  logout(): Promise<void> {
    return this.auth.signOut().then(r => r);
  }
}
