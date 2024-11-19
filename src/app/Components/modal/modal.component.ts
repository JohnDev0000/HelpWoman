import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {set} from "@angular/fire/database";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isModalOpen = false;

  constructor() { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  protected readonly set = set;
}
