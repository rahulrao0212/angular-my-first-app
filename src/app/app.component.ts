import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name: string = "Rahul G Rao";
  age: number;

  getColor(): string {
    return 'red';
  }

  onSave(): void {
    alert('Name- ' + this.name + ' and Age- ' + this.age);
  }

  centerClass:Boolean = true;
}
