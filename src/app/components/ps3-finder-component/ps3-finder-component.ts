import { Component, inject } from '@angular/core';
import { Ps3LoaderService } from '../../services/ps3-loader-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ps3-finder-component',
  imports: [FormsModule],
  templateUrl: './ps3-finder-component.html',
  styleUrl: './ps3-finder-component.css',
})
export class Ps3FinderComponent {
  public PS3_URL : string = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_ps3/ps3_covers.json';
  private ps3LoaderService = inject(Ps3LoaderService);
  public ps3Covers : any = null;
  public selectedPs3Covers : any = null;
  public gameTitle : string = "";
  constructor() {
    this.ps3LoaderService.getData().subscribe(data=>{
      this.ps3Covers=data;
      this.selectedPs3Covers = this.ps3Covers;
      console.log(this.selectedPs3Covers);
    });
  }
  filtrar(){
    console.log(this.gameTitle);
    this.selectedPs3Covers=
      this.ps3Covers.filter((game : any)=>game.title.includes(this.gameTitle));
  }
}
