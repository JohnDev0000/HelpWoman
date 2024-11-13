import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FireserviceService} from "../../services/fireservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(public fireService: FireserviceService) {
  }

  ngOnInit() {
  }

  login() {
    if (this.email && this.password) {
      this.fireService.loginEmail({ email: this.email, password: this.password })
        .then((res) => {
          console.log('Login Response:', res);

          const userId = res.user?.uid;
          if (userId) {
            this.fireService.getUserDetails(userId).subscribe({
              next: (userDetails) => {
                if (userDetails && userDetails.name) {
                  alert('Bem-vindo ' + userDetails.name);
                } else {
                  alert('Usuário não encontrado no banco de dados');
                }
                console.log('Detalhes do Usuário:', userDetails);
              },
              error: (err) => {
                console.error('Erro ao obter detalhes do usuário:', err);
              }
            });
          }
        })
        .catch((err) => {
          console.error('Erro no Login:', err);
          alert('Erro no login: ' + err.message);
        });
    } else {
      alert('Por favor, preencha o email e a senha.');
    }
  }

}
