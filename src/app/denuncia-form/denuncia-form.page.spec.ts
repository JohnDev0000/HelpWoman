import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DenunciaFormPage } from './denuncia-form.page';

describe('DenunciaFormPage', () => {
  let component: DenunciaFormPage;
  let fixture: ComponentFixture<DenunciaFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
