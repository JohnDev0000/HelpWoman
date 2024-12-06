import { Component, OnInit } from '@angular/core';
import {FireserviceService} from "../../../services/fireservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  verificationStep: boolean = false;
  verificationCode: string = '';
  newPassword: string = '';

  constructor(public fireService: FireserviceService, private router: Router) { }

  async resetPassword() {
    try {
      await this.fireService.auth.sendPasswordResetEmail(this.email);
      alert('E-mail de redefinição de senha enviado');
      this.verificationStep = true;
    } catch (e) {
      alert('Erro ao enviar e-mail de redefinição de senha');
      console.error(e);
    }
  }

  confirmReset() {
    this.fireService.auth.confirmPasswordReset(this.verificationCode, this.newPassword)
      .then(() => {
        alert('Senha redefinida com sucesso');
        this.router.navigate(['/login']).then(r => r);
      })
      .catch((error) => {
        alert('Erro ao redefinir senha');
        console.error(error);
      });
  }


}
