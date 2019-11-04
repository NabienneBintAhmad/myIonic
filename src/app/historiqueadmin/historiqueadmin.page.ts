import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../services/historique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historiqueadmin',
  templateUrl: './historiqueadmin.page.html',
  styleUrls: ['./historiqueadmin.page.scss'],
})
export class HistoriqueadminPage implements OnInit {

  envoieData = {};
  retraitData = {};
   constructor(private histoService: HistoriqueService , private router: Router) { }

  ngOnInit() {
  }

  infoenvoieadmin() {
    this.histoService.infoenvoieadmin(this.envoieData)
      .subscribe(
        data => {
         window.confirm('Voulez vous voir la liste de la période indiquer?');
         console.log(data);

        },
        err => {
          window.confirm('Traitement de la liste échoué, Ressayez!');
          console.log(err);
          }

      );
  }

  inforetraitadmin() {
    this.histoService.infoenvoieadmin(this.retraitData)
      .subscribe(
        data => {
         window.confirm('Voulez vous voir la liste de la période indiquer?');
         console.log(data);

        },
        err => {
          window.confirm('Traitement de la liste échoué, Ressayez!');
          console.log(err);
          }

      );
  }
}

