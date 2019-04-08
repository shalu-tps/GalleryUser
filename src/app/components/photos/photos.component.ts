import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
public dt;
public uId;
private album: any[] = [];
  constructor(private usr: UserService, private router: Router, private route: ActivatedRoute, private lightbox: Lightbox) { }

ngOnInit() {
    this.dt = this.usr.userData;
    this.usr.getPhotos().subscribe((res => this.dt = res));
    // const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // this.uId = id;
  }
goTo() {
    this.router.navigate(['/photos']);
  }
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.album, index);
  }
  back() {
    this.router.navigate(['/album']);
  }
}
