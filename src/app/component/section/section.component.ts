import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Todo','Desayunos', 'Almuerzos', 'Cenas', 'Postres', 'Bebidas'];

  constructor() {
    this.favoriteSeason =''
   }

  ngOnInit(): void {
  }

}
