import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-denuncia-form',
  templateUrl: './denuncia-form.page.html',
  styleUrls: ['./denuncia-form.page.scss'],
})
export class DenunciaFormPage {

  formData = {
    nome: '',
    tipoViolencia: '',
    descricao: '',
    dataOcorrido: '',
    local: '',
  };

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {}

  async submitForm() {
    try {
      console.log('Formulário Enviado:', this.formData);
      const user = await this.auth.currentUser;

      if (!user) {
        alert('Você precisa estar logado para registrar uma denúncia.');
        return;
      }

      const userId = user.uid;
      await this.firestore.collection('denuncias').add({
        ...this.formData,
        userId,
        timestamp: new Date(),
      }).then(() => {
        alert('Denúncia registrada com sucesso!');
        this.formData = {
          nome: '',
          tipoViolencia: '',
          descricao: '',
          dataOcorrido: '',
          local: '',
        };
        this.router.navigate(['/home']);
      });

      console.log('Denúncia registrada com sucesso!');

    } catch (error) {
      console.error('Erro ao registrar denúncia:', error);
      alert('Erro ao registrar denúncia. Verifique os campos e tente novamente.');
    }
  }

}

