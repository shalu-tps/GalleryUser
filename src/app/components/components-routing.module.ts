import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {
    path: 'album', component: AlbumComponent
  },
  {
    path: 'photos', component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
