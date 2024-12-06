import { Component, OnInit } from '@angular/core';
import {FireserviceService} from "../../../services/fireservice.service";
import {User} from "../login.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = {} as User;

  constructor(public fireService: FireserviceService, private router: Router) { }

  async register(user: User) {
    try {
      const result = await this.fireService.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        alert('Usuário criado com sucesso');
        await this.router.navigate(['/login']);
      }
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }

}
