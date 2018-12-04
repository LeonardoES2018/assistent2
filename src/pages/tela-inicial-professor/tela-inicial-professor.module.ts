import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaInicialProfessorPage } from './tela-inicial-professor';

@NgModule({
  declarations: [
    TelaInicialProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaInicialProfessorPage),
  ],
})
export class TelaInicialProfessorPageModule {}
