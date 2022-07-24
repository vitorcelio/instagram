import { Component, OnInit } from '@angular/core';
import { Story } from './story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storysList: Story[] = [
    {
      id: 'story1',
      story: 'https://github.com/vitorcelio.png',
    },
    {
      id: 'story2',
      story: 'https://github.com/naiandersonb.png',
    },
    {
      id: 'story3',
      story: 'https://github.com/BulletSentence.png',
    },
    {
      id: 'story4',
      story: 'https://github.com/julio.png',
    }
    
  ];

  storyAtual: string = this.storysList[0].story;

  constructor() { }

  ngOnInit(): void {
    this.storys();
  }

  storys(): void {
    var i = 1;

    setInterval(() => {
      if (i < this.storysList.length) {
        this.storyAtual = this.storysList[i].story;
        i++;
      }
    }, 4000)

  }

}
