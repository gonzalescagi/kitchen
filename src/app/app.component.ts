import { ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kitchen';
  showFiller = true;
  selected: Date | null | undefined;


  constructor(){
  }

  selectedDate(){}
  onSelect(){}

}
