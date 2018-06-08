import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EmployesComponent } from './employes/employes.component';
import { ListeComponent } from './liste/liste.component';
import { VersementComponent } from './versement/versement.component';
import { RetraitComponent } from './retrait/retrait.component';
import { VirementComponent } from './virement/virement.component';
import { ComptesComponent } from './comptes/comptes.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EmployesComponent,
    ListeComponent,
    VersementComponent,
    RetraitComponent,
    VirementComponent,
    ComptesComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     /* {path:"", component:HomeComponent},*/
      {path:"", component:AccueilComponent},
       {path:"employes", component:EmployesComponent},
        {path:"liste", component:ListeComponent},
         {path:"versement", component:VersementComponent},
          {path:"retrait", component:RetraitComponent},
           {path:"virement", component:VirementComponent},
            {path:"comptes", component:ComptesComponent},
             {path:"login", component:LoginComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
