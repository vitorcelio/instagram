import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storys-list',
  templateUrl: './storysList.component.html',
  styleUrls: ['./storysList.component.css']
})
export class StorysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(x: number) {
    const storys = document.getElementsByClassName('storys')[0] as HTMLDivElement;
    storys.scrollBy(x, 0);
  }

}
