import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navbar();
  }

  navbar() {
    const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
    const main = document.getElementsByTagName('main')[0] as HTMLElement;
    //------------ ITENS DO MENU ------------
    const input = document.getElementById('pesquisar') as HTMLInputElement;
    const icone = document.getElementById('icone-pesquisa') as HTMLElement;
    const dropdown = document.getElementsByClassName('body-dropdown')[0] as HTMLDivElement;
    const profile = document.getElementById('profile') as HTMLAnchorElement;
    const imgProfile = document.getElementById('img-profile') as HTMLImageElement;
    const heart = document.getElementById('heart') as HTMLElement;
    const post = document.getElementById('postar') as HTMLElement;
    const notificacoes = document.getElementById('notificacoes') as HTMLDivElement;
    const publicar = document.getElementById('publicar') as HTMLAnchorElement;
    const modalPublicar = document.getElementById('modal-publicar') as HTMLDivElement;
    const fecharPublicar = document.getElementById('fechar-modal-publicar') as HTMLElement;
    let botaoSeguir = document.querySelectorAll('button.seguir');

    body.addEventListener('mouseover', () => {
      removeHiddenIcon();
    });

    main.addEventListener('click', () => {
      removeHidden();

      const house = document.getElementById('house') as HTMLElement;
      const chat = document.getElementById('chat') as HTMLElement;
      const explore = document.getElementById('explore') as HTMLElement;
      
      if (this.router.isActive('/home', true)) {
        house.classList.add('bi-house-door-fill');
        house.classList.remove('bi-house-door');
      } else if (this.router.isActive('/direct/inbox', true)) {
        chat.classList.add('bi-chat-dots-fill');
        chat.classList.remove('bi-chat-dots');
      } else if (this.router.isActive('/explore', true)) {
        explore.classList.add('bi-compass-fill');
        explore.classList.remove('bi-compass');
      }
    });

    if (!icone.classList.contains('hidden-dropdown')) {
      input.addEventListener('click', () => {
        icone.classList.add('hidden-dropdown');
      });
    }

    function removeHidden() {
      removeHiddenDrop();
      removeHiddenNotificacao();
    }

    function removeHiddenIcon() {
      icone.classList.remove('hidden-dropdown');
    }

    function removeHiddenNotificacao() {
      if (!notificacoes.classList.contains('hidden-dropdown')) {
        notificacoes.classList.add('hidden-dropdown');
        heart.classList.toggle('bi-heart');
        heart.classList.toggle('bi-heart-fill');
      }
    }

    function removeHiddenDrop() {
      if (!dropdown.classList.contains('hidden-dropdown')) {
        dropdown.classList.add('hidden-dropdown');
        imgProfile.classList.toggle('img-profile');
      }
    }

    profile.addEventListener('click', () => {
      dropdown.classList.toggle('hidden-dropdown');
      imgProfile.classList.toggle('img-profile');
    });

    heart.addEventListener('click', () => {
      notificacoes.classList.toggle('hidden-dropdown');
      heart.classList.toggle('bi-heart');
      heart.classList.toggle('bi-heart-fill');
      this.disableLink();
    });

    botaoSeguir.forEach((botaoSeguir) => {
      botaoSeguir.addEventListener('click', () => {
        botaoSeguir.classList.toggle('seguir');
        botaoSeguir.classList.toggle('seguindo');

        if (botaoSeguir.innerHTML === 'Seguir') {
          botaoSeguir.innerHTML = 'Seguindo';
        } else {
          botaoSeguir.innerHTML = 'Seguir';
        }
      });
    });

    publicar.addEventListener('click', () => {
      modalPublicar.classList.remove('hidden-dropdown');
      post.classList.toggle('bi-plus-square-fill')
      post.classList.toggle('bi-plus-square')
    });

    fecharPublicar.addEventListener('click', () => {
      modalPublicar.classList.add('hidden-dropdown');
      post.classList.toggle('bi-plus-square-fill')
      post.classList.toggle('bi-plus-square')
      this.disableLink();
    });

  }

  disableLink() {
    const house = document.getElementById('house') as HTMLElement;
    const chat = document.getElementById('chat') as HTMLElement;
    const explore = document.getElementById('explore') as HTMLElement;

    if (this.router.isActive('/home', true)) {
      house.classList.toggle('bi-house-door-fill');
      house.classList.toggle('bi-house-door');
    } else if (this.router.isActive('/direct/inbox', true)) {
      chat.classList.toggle('bi-chat-dots-fill');
      chat.classList.toggle('bi-chat-dots');
    } else if (this.router.isActive('/explore', true)) {
      explore.classList.toggle('bi-compass-fill');
      explore.classList.toggle('bi-compass');
    }


  }
}
