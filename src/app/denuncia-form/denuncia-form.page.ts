import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncia-form',
  templateUrl: './denuncia-form.page.html',
  styleUrls: ['./denuncia-form.page.scss'],
})
export class DenunciaFormPage {

  form = {
    nome: '',
    tipoViolencia: '',
    descricao: '',
    dataOcorrido: '',
    local: '',
  };

  constructor() {}

  submitForm() {
    console.log('Formulário Enviado:', this.form);

    // Limpa os campos após o envio
    this.form = {
      nome: '',
      tipoViolencia: '',
      descricao: '',
      dataOcorrido: '',
      local: '',
    };

    // Aqui você pode implementar o envio para uma API ou exibir uma mensagem de sucesso
    alert('Denúncia registrada com sucesso!');
  }
}
