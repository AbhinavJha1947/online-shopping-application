
// user-registration.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  newUser: User = new User();

  constructor(private userService: UserService) { }

  registerUser(): void {
    this.userService.register(this.newUser).subscribe((user: User) => {
      console.log('User registered:', user);
      // Implement any further logic or redirect to the login page
    });
  }
}
