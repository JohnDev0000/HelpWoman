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
export class LoginPage implements OnInit {
  user = {} as User;

  constructor(public fireService: FireserviceService, private router: Router) {
  }

  ngOnInit() {
  }

  async login(user: User) {
    try {
      const result = await this.fireService.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        alert('Usuário logado com sucesso');
        await this.router.navigate(['/home']);
      }
    } catch (e) {
      alert('Usuário ou senha inválidos');
      console.error(e);
    }
  }

}
