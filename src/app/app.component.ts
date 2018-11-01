import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TonyAndhikaM1731710127';
  loadedFeature='recipe';

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
