import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  readonly GET_URL='http://localhost:3000/api/clients';
  readonly POST_URL='http://localhost:3000/api/client/create';
  _id:number;

  clients:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.clients = this.http.get<any>(this.GET_URL);
  }
  ajouterClient(numero, nom, prenom, date, type, solde) {



    const aClient ={
      numero:numero,
      nom:nom,
      prenom:prenom,
      date:date,
      type:type,
      solde:solde
    };

    const req = this.http
      .post(this.POST_URL, aClient)
      .subscribe(res =>{
          console.log(res);
          this.clients = this.http.get<any>(this.GET_URL);

        },
        err=>{
          console.log(err);
        });
  }

  supprimerClient(_id){
    const DELETE_URL= `${"http://localhost:3000/api/client"}/${_id}`;
    return this.http.delete(DELETE_URL).toPromise()
      .then(()=> {
        this.clients = this.http.get<any>(this.GET_URL);

      });

  }

}
