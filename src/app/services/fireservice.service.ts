import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public firestore: AngularFirestore, public auth: AngularFireAuth) { }

  loginEmail(data: { email: string; password: string; }) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data: { email: string; password: string; }) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveUser(data: { uid: string; name: string; email: string }) {
    return this.firestore.collection('users').doc(data.uid).set(data);
  }

  getUserDetails(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  logout() {
    return this.auth.signOut();
  }
}
