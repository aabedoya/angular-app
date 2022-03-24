
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
  <ul>
    <li (click)="onCityClicked(city)"
      [ngClass]="{'alert alert-info': city === selection}">
      {{city | titlecase}}
    </li>
  </ul>
  `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClickedevent = new EventEmitter<string>();

  onCityClicked(city: string): void{
    //emitir
    this.cityClickedevent.emit(city);
  }

}
