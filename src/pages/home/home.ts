import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelaPerfilPage } from '../tela-perfil/tela-perfil';
import { TelaCadastroPage } from '../tela-cadastro/tela-cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  isTelaPerfil(){
    this.navCtrl.setRoot(TelaPerfilPage);
  }

  isTelaCadastrar(){
    this.navCtrl.setRoot(TelaCadastroPage);
  }

}
