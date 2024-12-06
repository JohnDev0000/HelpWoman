import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FireserviceService} from "../../services/fireservice.service";

export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {} as User;
  isUserLoggedIn = false;

  constructor(public fireService: FireserviceService, private router: Router) {
  }


  async login(user: User) {
    try {
      const result = await this.fireService.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        alert('Usuário logado com sucesso');
        await this.router.navigate(['/home']);
        this.isUserLoggedIn = true;
      }
    } catch (e) {
      alert('Usuário ou senha inválidos');
      console.error(e);
    }
  }


}
