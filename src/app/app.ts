import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ps3FinderComponent } from "./components/ps3-finder-component/ps3-finder-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ps3FinderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('INAEM_202511_Web_Component_Angular');
}
