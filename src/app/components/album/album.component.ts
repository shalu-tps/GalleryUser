import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent implements OnInit {

  public dt = null;
  constructor(private usr: UserService, private router: Router) { }

  ngOnInit() {
    this.dt = this.usr.userData;
    this.usr.getAlbum().subscribe((res => this.dt = res));
  }
  goTo() {
    this.router.navigate(['/photos']);
  }

}
