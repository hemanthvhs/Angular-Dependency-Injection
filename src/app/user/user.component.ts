import { Component, ViewChild, ElementRef , Renderer2,OnInit} from '@angular/core';
import { UserPreferenceService } from '../services/userPreference.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  

@ViewChild('color') inputColor : ElementRef


constructor(private renderer : Renderer2,
            private userPreferenceService : UserPreferenceService) {
  
  
}

ngOnInit() {
  const color = this.userPreferenceService.color
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',color)
}

onChange() {
  
  const newColor = this.inputColor.nativeElement.value
  this.renderer.setStyle(this.inputColor.nativeElement,'backgroundColor',newColor)
  this.userPreferenceService.color = newColor;
}

}

