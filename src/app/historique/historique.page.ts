import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../services/historique.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
 envoieData = {};
 retraitData = {};
  constructor(private histoService: HistoriqueService , private router: Router) { }

  ngOnInit() {
  }
  infoenvoie() {
    this.histoService.infoenvoie(this.envoieData)
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

  inforetrait() {
    this.histoService.inforetrait(this.retraitData)
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
