import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../../model/users';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user?: UserEntity;

  @Output() userInfoEmitter = new EventEmitter<UserEntity>();

  retornarDados() {
    this.userInfoEmitter.emit(this.user);
  }
}
