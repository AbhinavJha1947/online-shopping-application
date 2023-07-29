import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

export const USER_SERVICE_TOKEN = new InjectionToken<UserService>('UserService');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    @Inject(USER_SERVICE_TOKEN) private userService: UserService // Inject the service using the Injection Token
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/users`, user);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.apiBaseUrl}/users?username=${username}&password=${password}`);
  }
}
