import { Component, OnInit } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {

  depotData = {};
  constructor(private depotService: DepotService , private router: Router) { }


  ngOnInit() {
  }
  depot() {
    this.depotService.depot(this.depotData)
      .subscribe(
        data => {
         window.confirm('Pas déposé!');
         console.log(data);

        },
        err => {
          window.confirm('Montant déposé!');
          console.log(err);
          }

      );
  }

}
