import { Component, ViewChild } from '@angular/core';
import { DetailService } from '../services/detail.service';
import { OverlayEventDetail } from '@ionic/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cards = [];

  constructor(private detailService:DetailService){}

  ngOnInit(){
    console.log(this.detailService.cards);
    this.cards = this.detailService.cards;
  }
}
