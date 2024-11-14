import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";



@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) { }


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
