import { Component, OnInit, Input } from '@angular/core';
import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';

@Input()
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}