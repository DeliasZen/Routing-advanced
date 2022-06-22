import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: string = 'admin'
  userPassword: string = '123'
  message!: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.message = 'Trying to log in...'
    this.authService.login(this.userLogin, this.userPassword).subscribe({
      next: (res: any) => {
        this.setMessage()
        if (!this.authService.redirectUrl) return
  
        this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : '/admin']).then()
      },
      error: err => console.log(err)
    })
  }

  logout():void {
    this.authService.logout()
  }

  private setMessage(): void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }
}
