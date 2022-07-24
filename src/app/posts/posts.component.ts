import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  comentario!: string;

  constructor() { }

  ngOnInit(): void {
    this.principal();
  }

  principal() {
    const foto = document.getElementById('foto') as HTMLImageElement;
    const curtir = document.getElementById('curtida') as HTMLElement;
    const heartLike = document.getElementById('like') as HTMLElement;

    foto.addEventListener('dblclick', function () {
      curtir.classList.remove('hidden-dropdown');
      heartLike.classList.remove('bi-heart');
      heartLike.classList.add('bi-heart-fill');
      heartLike.classList.add('color-red');

      setTimeout(() => {
        curtir.classList.add('hidden-dropdown');
      }, 1000);
    });

    heartLike.addEventListener('click', () => {
      heartLike.classList.toggle('bi-heart-fill');
      heartLike.classList.toggle('bi-heart');
      heartLike.classList.toggle('color-red');
    });
  }

}
