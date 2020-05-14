import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'
import { FooterComponent } from '../footer/footer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
  }

}
