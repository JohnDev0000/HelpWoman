import {Component} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isModalOpen = false;
  paletteToggle = false;

  constructor() {
    this.setupTheme();
  }

  setupTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.initializeDarkPalette(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.initializeDarkPalette(prefersDark.matches);

      prefersDark.addEventListener('change', (mediaQuery) =>
        this.initializeDarkPalette(mediaQuery.matches)
      );
    }
  }

  setOpen(isOpen: boolean) {
    console.log('Modal open status:', isOpen);
    this.isModalOpen = isOpen;
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleDarkPalette(shouldAdd: boolean | undefined) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);

    localStorage.setItem('theme', shouldAdd ? 'dark' : 'light');
  }

}
