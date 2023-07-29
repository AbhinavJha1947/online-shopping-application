

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  loginUser(): void {
    this.userService.login(this.user.username, this.user.password).subscribe((user: User) => {
      console.log('User logged in:', user);
      // Implement any further logic or redirect to the main page
    });
  }
}
