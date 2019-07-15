import { Component, ViewChild, ElementRef , Renderer2,OnInit} from '@angular/core';
import { UserPreferenceService } from '../services/userPreference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

@ViewChild('color') inputColor : ElementRef  


constructor(private renderer : Renderer2, 
            private userPreferenceService : UserPreferenceService) {
  
  
}

ngOnInit() {
  const color = this.userPreferenceService.color
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',color)
  //this.renderer.setStyle(this.inputColor.nativeElement,'color',color)
}

onChange() {
  
  const newColor = this.inputColor.nativeElement.value
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',newColor)
  //this.renderer.setStyle(this.inputColor.nativeElement,'color',newColor)
  this.userPreferenceService.color = newColor;
}

}


