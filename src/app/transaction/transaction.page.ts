import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  envoieData = {};
  retraitData= {};
  tarif:any;
  inforetrait:any;
  constructor(private transactionService: TransactionService, private router: Router) { }
  ngOnInit() {
  }

  envoie() {
    this.transactionService.envoie(this.envoieData)
      .subscribe(
        data => {
          window.confirm('Envoi réusssi');
          console.log(data);
    },
    err => {
      window.confirm('Envoi échoué !');
      console.log(err);
    }
    );
  }

  retrait() {
    this.transactionService.retrait(this.retraitData)
      .subscribe(
        data => {
          window.confirm('Retrait réussi!');
          console.log(data);
        },
        err => {
          window.confirm('Retrait échoué!');
          console.log(err);
        }
      );
  }

  infotarif(){
    console.log(this.envoieData);
    this.transactionService.infotarif(this.envoieData)
   .subscribe(
     res => {
       this.tarif=res;
       console.log(this.tarif)
      },
  
     err => console.log(err)
   )
   }


   inforetraitt(){
    console.log(this.retraitData);
    this.transactionService.inforetraitt(this.retraitData)
   .subscribe(
     res => {
       this.inforetrait=res;
       console.log(this.inforetrait)
      },
  
     err => console.log(err)
   )
   }

  //  choix1(){
  //   document.getElementById('choix2').style.display="none";
  //   document.getElementById('code').style.display="none";
  //   document.getElementById('envoyeurNomComplet').style.display="none";
  //   document.getElementById('recepteurNomComplet').style.display="none";
  //   document.getElementById('envoyeurNomComplet1').style.display="none";
  //   document.getElementById('recepteurNomComplet1').style.display="none";
  //   document.getElementById('recepteurCni').style.display="none";
  //   document.getElementById('retrait').style.display="none";
  //   document.getElementById('envoyeurNomComplet').style.display="block";
  //   document.getElementById('envoyeurCni').style.display="block";
  //   document.getElementById('recepteurNomComplet').style.display="block";
  //   document.getElementById('montant').style.display="block";
   
  // }
  // choix2(){
  //   document.getElementById('choix1').style.display="none";
  //   document.getElementById('code').style.display="block";
  //   document.getElementById('envoyeurNomComplet').style.display="block";
  //   document.getElementById('recepteurNomComplet').style.display="block";
  //   document.getElementById('envoyeurNomComplet1').style.display="block";
  //   document.getElementById('recepteurNomComplet1').style.display="block";
  //   document.getElementById('recepteurCni').style.display="block";
  //   document.getElementById('envoie').style.display="none";
  //   document.getElementById('envoyeurNomComplet').style.display="none";
  //   document.getElementById('envoyeurCni').style.display="none";
  //   document.getElementById('recepteurNomComplet').style.display="none";
  //   document.getElementById('montant').style.display="none";
  //   document.getElementById('retrait').style.display="block";
   
  // }
    
}
