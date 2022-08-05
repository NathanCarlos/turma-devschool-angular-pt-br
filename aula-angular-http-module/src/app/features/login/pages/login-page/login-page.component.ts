import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  email: string = "";
  senha: string = "";
  error = false;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.senha);

    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/sell');
    } else {
      this.error = true;
    }
  }

}
