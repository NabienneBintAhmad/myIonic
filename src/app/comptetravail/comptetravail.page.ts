import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptetravail',
  templateUrl: './comptetravail.page.html',
  styleUrls: ['./comptetravail.page.scss'],
})
export class ComptetravailPage implements OnInit {

  compteData = {};
  constructor(private transactionService: CompteService, private router: Router) { }
  ngOnInit() {
  }

  comptetravail() {
    this.transactionService.comptetravail(this.compteData)
      .subscribe(
        data => {
          window.confirm('compte alloué');
          console.log(data);
          this.router.navigateByUrl('/blockuserpresta');
        },
        err => {
          window.confirm('compte pas alloué !');
          console.log(err);
        }
      );
  }

}
