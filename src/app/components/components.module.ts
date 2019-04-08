import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [AlbumComponent, PhotosComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
