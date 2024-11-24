import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  protected readonly console = console;

  onEmergencyClick() {
    const message = encodeURIComponent('Socorro! Estou em perigo!');
    const phoneNumber = '5521983700872';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  }
}
