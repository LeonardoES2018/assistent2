import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaInicialAlunoPage } from './tela-inicial-aluno';

@NgModule({
  declarations: [
    TelaInicialAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaInicialAlunoPage),
  ],
})
export class TelaInicialAlunoPageModule {}
