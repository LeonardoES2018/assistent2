import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaPerfilPage } from './tela-perfil';

@NgModule({
  declarations: [
    TelaPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaPerfilPage),
  ],
})
export class TelaPerfilPageModule {}
