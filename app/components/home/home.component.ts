  import { Component, OnInit } from '@angular/core';
  // import { Photos } from '../../types/photos';
  // import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl = 'http://i.imgur.com/De1Oy5y.jpg';

  // photos: Photos;
  // mode = 'Observable';
  // errorMessage: string;

  // constructor(private GalleryService: GalleryService) { }

  ngOnInit() {
    // this.getPhotos();
  }

  // getPhotos() {
  //   this.GalleryService.getPhoto()
  //                                    .subscribe(
  //                                      resp => this.photos = resp,
  //                                      error => this.errorMessage = <any>error
  //                                    );
  // }

}