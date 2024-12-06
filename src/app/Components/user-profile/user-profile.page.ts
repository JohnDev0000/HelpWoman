import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user: firebase.User | null = null;

  constructor(private authService: AngularFireAuth, private router: Router,) {

  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });

  }

  logout() {
    this.authService.signOut().then(r => r);
    alert('Logout realizado com sucesso!');
    this.router.navigate(['/home']);

  }

}
