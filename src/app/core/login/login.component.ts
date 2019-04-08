import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public user;
  public data = [];
  valid = false;
  constructor(private ser: UserService, public router: Router) { }

  onSubmit(value) {
    this.user = value;
    this.ser.getUsers().subscribe((arr: any[]) => {
    this.data = arr;
    this.valid = false;
    console.log(this.valid);

    for (let i = 0; i < this.data.length; i++) {
     if (this.data[i].username === this.user) {
       this.valid = true;
       console.log(this.valid);
      //  this.ser.userData = this.data[i];
       console.log('this.data[i]');
       localStorage.setItem('userid', this.data[i].id);
       this.router.navigate(['/album']);
      //  this.navi();
       break;
      }
    }
    if (this.valid === false) {
      console.log(this.valid);
      alert('Not a valid User');
    }
    });
  }
  ngOnInit() {
    this.ser.getUsers().subscribe((arr: any[]) => {
      this.data = arr;
      console.log(this.data);
    });
  }
  // navi() {
  //  console.log('valid');
  // }

}
