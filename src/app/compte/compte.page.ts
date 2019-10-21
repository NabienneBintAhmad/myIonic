import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  compteData = {};
  constructor(private transactionService: CompteService, private router: Router) { }
  ngOnInit() {
  }

  compte() {
    this.transactionService.compte(this.compteData)
      .subscribe(
        data => {
          window.confirm('Compte ajouté');
          console.log(data);
        },
        err => {
          window.confirm('Ajout échoué');
          console.log(err);
        }
      );
  }

}
