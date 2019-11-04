import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../services/historique.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.page.html',
  styleUrls: ['./envoie.page.scss'],
})
export class EnvoiePage implements OnInit {
  envoieData=[];
  envoieDetail=[];
  Transaction: any;
  Envoi=[];
  constructor(private histoService: HistoriqueService , private router: Router) { }

  ngOnInit() {
    
  }
  infoenvoie() {
    this.histoService.infoenvoie(this.envoieData)
      .subscribe(
        res => {
          this.envoieData = res
          console.log(this.envoieData)
        },
        err => {
          window.confirm('Aucune transaction n\'a été faite pendant cette période!');
          console.log(err);
          }

      );
  }


}
