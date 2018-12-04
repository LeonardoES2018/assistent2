import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TelaPerfilPage } from '../pages/tela-perfil/tela-perfil';
import { TelaCadastroPage } from '../pages/tela-cadastro/tela-cadastro';
import { TelaInicialAlunoPage } from '../pages/tela-inicial-aluno/tela-inicial-aluno';
import { TelaDisciplinasAlunoPage } from '../pages/tela-disciplinas-aluno/tela-disciplinas-aluno';
import { TelaInicialProfessorPage } from '../pages/tela-inicial-professor/tela-inicial-professor';
<<<<<<< HEAD
=======
import { TelaSalasProfessorPage } from '../pages/tela-salas-professor/tela-salas-professor';
>>>>>>> Quarto Commit

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TelaPerfilPage,
    TelaCadastroPage,
    TelaInicialAlunoPage,
    TelaDisciplinasAlunoPage,
<<<<<<< HEAD
    TelaInicialProfessorPage
=======
    TelaInicialProfessorPage,
    TelaSalasProfessorPage
>>>>>>> Quarto Commit
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelaPerfilPage, 
    TelaCadastroPage,
    TelaInicialAlunoPage,
    TelaDisciplinasAlunoPage,
<<<<<<< HEAD
    TelaInicialProfessorPage
=======
    TelaInicialProfessorPage,
    TelaSalasProfessorPage
>>>>>>> Quarto Commit
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
