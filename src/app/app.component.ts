import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cities=['Medellin', 'Cucuta','Cartagena', 'Barranquilla'];
  title = 'my-app';
  name!: string;
  selection!: string;
  criteria = '';

  addNewCity(city: string): void{
    this.cities.push(city);
  }

  onCityClicked(city: string): void{
    this.selection=city;
  }

  onClear(): void{
    this.selection = '';
  }

  onSearch(): void{
    console.log('OnSearch');
  }

}
