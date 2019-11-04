import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../services/historique.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  retraitData = [];
  Transaction: any;
  Retrait=[];
  Envoi=[];
  constructor(private histoService: HistoriqueService , private router: Router) { }

  ngOnInit() {
  }
  inforetrait() {
    this.histoService.inforetrait(this.retraitData)
      .subscribe(
        res => {
          this.retraitData = res
          console.log(this.retraitData)

        },
        err => {
          window.confirm('Aucune transaction n\'a été faite pendant cette période!');
          console.log(err);
          }

      );
  }
}
