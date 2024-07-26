import { Component, Input } from '@angular/core';
import { UserEntity } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userSelecionado?: UserEntity;

  userInfoSelected($event: UserEntity) {
    this.userSelecionado = $event;
  }

  users: UserEntity[] = [
    { nome: 'Avelino', idade: 52 },
    { nome: 'Vinicius', idade: 25 },
    { nome: 'Julio', idade: 19 },
    { nome: 'Larissa', idade: 45 },
    { nome: 'Maria', idade: 32 },
  ];
}
