import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaDisciplinasAlunoPage } from './tela-disciplinas-aluno';

@NgModule({
  declarations: [
    TelaDisciplinasAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaDisciplinasAlunoPage),
  ],
})
export class TelaDisciplinasAlunoPageModule {}
